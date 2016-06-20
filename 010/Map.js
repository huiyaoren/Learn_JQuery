/**
 * Created by wslsh on 2016/6/20.
 */
function Map(img, div) { // todo 变量名 img 易混淆
    this.run = function () {
        createUI()
    };
    this.move = function (speed) {
//                    console.log(Number($(div).css("left").slice(0, -2)) - speed);
        movement = Number($(div).css("left").slice(0, -2)) - speed;
        $(div).css("left", movement)

    };
    function createUI() {
        $(div).css({
            position: "absolute",
            width:"2208%",
            height: "100%",
            overflow:"hidden",
            top: 0,
            left: 0
        });
        $("<img/>")
            .attr("src", img)
            .attr("class", "_background")
            .css({
                position: "absolute",
                "z-index": "-10",
                top: 0,
                left: 0,
//                        width: "14400px",
                height: "100%"
            }).appendTo($(div));
    }
}
