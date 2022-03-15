<?php


namespace app\api\event;

use app\common\enum\order\OrderTypeEnum;
use app\common\service\message\MessageService;
use app\common\service\order\OrderPrinterService;
use app\api\model\order\Order;
use app\api\service\order\paysuccess\source\PaySourceSuccessFactory;
use app\common\model\settings\Setting as SettingModel;

class PaySuccess
{
    public $order;
    public $appId;
    public $orderType;


    public function handle(Order $order)
    {
        $this->order = $order;
        $this->appId = $order['app_id'];
        $this->orderType = OrderTypeEnum::MASTER;
        // 订单公共业务
        $this->onCommonEvent();
        // 订单来源回调业务
        $this->onSourceCallback();
        return true;
    }

    /**
     * 订单公共业务
     */
    private function onCommonEvent()
    {
        // 发送消息通知
        (new MessageService)->payment($this->order, $this->orderType);
        // 小票打印
        (new OrderPrinterService)->printTicket($this->order);
    }

    /**
     * 订单来源回调业务
     * @return bool
     */
    private function onSourceCallback()
    {
        $model = PaySourceSuccessFactory::getFactory($this->order['order_source']);
        return $model->onPaySuccess($this->order);
    }

    /**
     * 发送订单
     * @return bool
     */
    private function sendOrder()
    {
        $deliver = SettingModel::getSupplierItem('deliver', $this->order['supplier']['shop_supplier_id']);
        if ($this->order['delivery_type']['value'] != 10 || $deliver['default'] == 'local') {
            return true;
        }
        if ($deliver['engine']['dada']['auto'] == 0) {
            return true;
        }
        $this->order->addOrder($deliver);
    }
}