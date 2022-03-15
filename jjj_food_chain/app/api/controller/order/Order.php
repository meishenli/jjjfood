<?php

namespace app\api\controller\order;

use app\api\model\order\Cart as CartModel;
use app\api\model\order\Order as OrderModel;
use app\api\service\order\settled\MasterOrderSettledService;
use app\api\controller\Controller;
use app\api\model\settings\Message as MessageModel;
use app\common\enum\order\OrderTypeEnum;
use app\common\model\app\AppOpen;
use app\common\model\app\AppOpen as AppOpenModel;

/**
 * 普通订单
 */
class Order extends Controller
{
    /**
     * 订单确认-立即购买
     */
    public function cart()
    {
        // 立即购买：获取订单商品列表
        $params = $this->postData();
        if (empty($params['cart_ids'])) {
            return $this->renderError('商品不能为空');
        }
        $user = $this->getUser();
        // 商品结算信息
        $CartModel = new CartModel();
        // 购物车商品列表
        $productList = $CartModel->getCartList($params, $this->getUser());
        // 实例化订单service
        $orderService = new MasterOrderSettledService($user, $productList, $params);
        // 获取订单信息
        $orderInfo = $orderService->settlement();
        if ($this->request->isGet()) {
            // 如果来源是小程序, 则获取小程序订阅消息id.获取支付成功,发货通知.
            $template_arr = MessageModel::getMessageByNameArr($params['pay_source'], ['order_pay_user', 'order_delivery_user','order_refund_user']);
            $balance = $user['balance'];
            return $this->renderSuccess('', compact('orderInfo', 'template_arr', 'balance'));
        }
        // 订单结算提交
        if ($orderService->hasError()) {
            return $this->renderError($orderService->getError());
        }
        // 创建订单
        $order_id = $orderService->createOrder($orderInfo);
        if (!$order_id) {
            return $this->renderError($orderService->getError() ?: '订单创建失败');
        }
        // 移出购物车中已下单的商品
        $CartModel->clearAll($params['cart_ids']);
        // 构建支付请求
        $payment = OrderModel::onOrderPayment($user, $orderService->model, $params['pay_type'], $params['pay_source']);
        // 返回结算信息
        return $this->renderSuccess('', [
            'order_id' => $orderService->model['order_id'],   // 订单id
            'pay_type' => $params['pay_type'],  // 支付方式
            'payment' => $payment,               // 微信支付参数
            'order_type' => OrderTypeEnum::MASTER, //订单类型
        ]);
    }

    /**
     * 是否开启app支付宝支付
     */
    private function isAppAlipayOpen($app_id)
    {
        $config = AppOpenModel::getAppOpenCache($app_id);
        return $config['is_alipay'] == 1 ? true : false;
    }
}