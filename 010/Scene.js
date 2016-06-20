/**
 * Created by wslsh on 2016/6/20.
 */
function LoginScene() {
    var self = this;
    var $me = $("<div class='_loginScene'></div>");
    this.mainBody = function () {
        this.createUI();
        //console.log($me.children(":button")[0]);


        return $me
    };
    this.createUI = function () {
        $me
            .css("font-family", "微软雅黑")
            .append("<h1>登陆</h1>")
            .append("<label>账号<input type='text'/><br/></label>")
            .append("<label>密码<input type='text'/><br/></label>")
            .append("<input type='button' value='登陆'/><br/>")
            .append("<h6>账号：admin, 密码：admin</h6>")
            .children(":button").click(function () {
                console.log($me.children("label").children(":text").length);

                if (
                    $me.children("label").children(":text")[0].value == "admin" &&
                    $me.children("label").children(":text")[1].value == "admin"
                ) {
                    $me.children(":button").trigger("loginCorrect")
                }
            });
    };
    this.bind = function (eventName, eventFn) {
        $me.children(":button").on(eventName, eventFn)
    };


}

function GameScene() {
    var self = this;
    var $me = $("<div class='_gameScene'></div>");
    this.mainBody = function () {
        $me
            .append("<h1>加速度上限 1/100ms， 速度上限 100</h1>")
            .append("<meter id='_meterBox' value='0' min='0' max='100'></meter>")
            .append(
                "<div id='_cont_div'>\
                    <div draggable='true'></div>\
                    <canvas width='100px' height='100px' id='controller'></canvas>\
                    <span></span>\
                </div>")
            .append("<div id='_map'><div id='_map_div'></div></div>");
        return $me
    }
}