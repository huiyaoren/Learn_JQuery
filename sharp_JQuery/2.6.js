/**
 * Created by wslsh on 2016/2/9.
 */
$(function () {
    var $showHideAss = $("ul li:gt(5):not(:last)");
    $showHideAss.hide();
    $("div.showmore > a").click(function () {
        if ($showHideAss.is(":visible")) {
            $showHideAss.hide();
            $(this).find("span").text("显示全部品牌");
        } else {
            $showHideAss.show();
            $(this).find("span").text("精简显示品牌");
        }
        return false;
    });
});
