# Thinkphp 当前版本命令

version 6.0.7

Usage:
command [options] [arguments]

Options:
-h, --help            Display this help message
-V, --version         Display this console version
-q, --quiet           Do not output any message
--ansi            Force ANSI output
--no-ansi         Disable ANSI output
-n, --no-interaction  Do not ask any interactive question
-v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

Available commands:
build             Build App Dirs
clear             Clear runtime file
help              Displays help for a command
job               定时任务
list              Lists commands
run               PHP Built-in Server for ThinkPHP
swoole            Swoole HTTP Server for ThinkPHP
version           show thinkphp framework version
worker            Workerman HTTP Server for ThinkPHP
make
make:command      Create a new command class
make:controller   Create a new resource controller class
make:event        Create a new event class
make:listener     Create a new listener class
make:middleware   Create a new middleware class
make:model        Create a new model class
make:service      Create a new Service class
rpc:interface     Generate Rpc Service Interfaces
service
service:discover  Discover Services for ThinkPHP
swoole
swoole:rpc        Swoole RPC Server for ThinkPHP
vendor
vendor:publish    Publish any publishable assets from vendor packages
worker
worker:gateway    GatewayWorker Server for ThinkPHP
worker:server     Workerman Server for ThinkPHP
