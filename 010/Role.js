/**
 * Created by wslsh on 2016/6/20.
 */
function Role(imgList, div) {
    var angle = 0;
    this.roll = function (speed) {
        angle += speed;
//                    console.log($(div).children("._roll"));
        $("img._roll").css("-webkit-transform", "rotate(" + angle + "deg)")
    };
    this.run = function () {
        createUI();
    };
    var $box = $("<div></div>");
    this.move = function (speedX, speedY) {
//                    console.log(Number($box.css("left").slice(0, -2)) + speedX);
        movementX = Number($box.css("left").slice(0, -2)) + speedX;
        movementY = Number($box.css("top").slice(0, -2)) + speedY;
        $box
            .css("left", movementX)
            .css("top", movementY)
    };
    function createUI() {

        $box.css({
            position: "relative",
            width: "128px",
            left: "0",
            top: "0"
        });
        $("<img />")
            .attr("src", imgList[0])
            .css({
                position: "absolute",
                "z-index": 0
            })
            .appendTo($box);
        $("<img />")
            .attr("src", imgList[1])
            .css({
                position: "absolute",
                left: "36px",
                top: "-55px",
                "z-index": 1
            })
            .appendTo($box);
        $("<img />")
            .attr("src", imgList[2])
            .attr("class", "_roll")
            .css({
                position: "absolute",
                right: "-10px",
                top: "25px",
                "z-index": -1
            })
            .appendTo($box);
        $("<img />")
            .attr("src", imgList[2])
            .attr("class", "_roll")

            .css({
                position: "absolute",
                left: "-10px",
                top: "25px",
                "z-index": -1
            })
            .appendTo($box);
        $(div).append($box)
    }
}