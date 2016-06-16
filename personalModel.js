/**
 * Created by wslsh on 2016/6/2.
 */


// 创建迭代数组 用于for in 结构
function range(num) {
    var list = [];
    for (var i = 0; i < num; i++) {
        list[i] = i;
    }
    return list
}

// JQuery 轮播图
function Carousel(imgList, $imgBox, speed) {
    var num = imgList.length;

    // todo 以下属性 为 DOM 对象生成后才能被获取
    function $btnBx() {
        return $imgBox.children("div");
    }

    function $lftArw() {
        return $imgBox.children("a:eq(0)");
    }

    function $rightArw() {
        return $imgBox.children("a:eq(1)")
    }

    function $image() {
        return $imgBox.children("img")
    }

    // 运行
    this.run = function () {
        crtBase();
        crtBtn();
        switchImgAndMark(0);
        autoSwitch();

        //imgLoop = window.setInterval(rightSwitch, speed);
        $rightArw()
            .click(rightSwitch)
            .mouseout(autoSwitch)
            .mouseover(function () {
                clearInterval(imgLoop)
            });

        $lftArw()
            .click(leftSwitch)
            .mouseout(autoSwitch)
            .mouseover(function () {
                clearInterval(imgLoop)
            });


        $image()
            .mouseout(autoSwitch)
            .mouseover(function () {
                clearInterval(imgLoop)
            });

        $btnBx()
            .mouseover(function () {
                selectImg(event)
            })
            .mouseout(autoSwitch)
    };

    // 创建 DOM 框架
    function crtBase() {
        $imgBox
            .append($("<img/><a></a><a></a><div></div>"))
            .addClass("_carousel")
    }

    // 创建标记
    function crtBtn() {
        for (var i in range(num)) {
            $btnBx().append($("<a>" + (Number(i) + 1) + "</a>"));
        }

    }

    // 切换图片与标记
    function switchImgAndMark(index) {
        $btnBx().children().removeClass("_firstButton");
        $btnBx().children(":eq(" + index + ")").addClass("_firstButton");
        $image().attr("src", imgList[index]);
    }

    // 获取当前页数
    function currentPage() {
        return $imgBox.children("div").children("[class*='_firstButton']").index();
    }

    // 右箭头
    function rightSwitch() {
        var idx = currentPage();
        idx += 1;
        if (idx > num - 1) {
            idx = 0;
        }
        //console.log(idx);
        switchImgAndMark(idx)
    }

    // 左箭头
    function leftSwitch() {
        var idx = currentPage();
        idx -= 1;
        if (idx < 0) {
            idx = num - 1;
        }
        //console.log(idx);
        switchImgAndMark(idx)
    }

    // 自动轮播
    function autoSwitch() {
        imgLoop = window.setTimeout(function () {
            if ($lftArw().css("display") != "none") {
                //return null
            }
            rightSwitch();
            window.setTimeout(autoSwitch, 0);
        }, speed);
    }

    // 通过标记指定图片
    function selectImg(evt) {
        if (evt.target.tagName = "A") {
            clearInterval(imgLoop);
            var idx = $(evt.target).index();
            console.log(idx);
            switchImgAndMark(idx)
        }
    }
}

// JQuery 分页控件
function PageSetting($content, n, $buttonBox) {

    var contentCount = $content.children().length;
    var pageCount = contentCount % n == 0 ? contentCount / n : parseInt(contentCount / n) + 1;

    // 初始化
    function loadInitContent() {
        $content.children().hide();
        showContentByIndex(1);
        showButtonByIndex(1);
    }

    // 创建翻页按钮
    function crtButton() {

        $buttonBox
            .append($("<a>首页</a>"))
            .append($("<a>上一页</a>"));

        for (var i in range(pageCount)) {
            $("<a>" + (Number(i) + 1) + "</a>").appendTo($buttonBox)
        }

        $buttonBox
            .append($("<a>下一页</a>"))
            .append($("<a>末页</a>"))
            .children().addClass("_pageButton")
    }

    // 根据页码显示内容
    function showContentByIndex(index) {
        if (index > 0 && index <= pageCount) {
            $content.children().hide();
            $content.children(":eq(" + (index - 1) * n + ")").show();
            $content.children(":gt(" + (index - 1) * n + "):lt(" + (n - 1) + ")").show();
            //console.log((index - 1) * n + ":" + (index * n - 1))
        }
        //else if (index == this.pageCount) {
        //    if(this.contentCount % n != 0){
        //        $content.children(":eq(" + (index - 1) * n + ")").show();
        //        $content.children(":gt(" + (index - 1) * n + "):lt(" + ((this.contentCount % n)-1) + ")").show();
        //    }
        //    else{
        //        $content.children(":eq(" + (index - 1) * n + ")").show();
        //        $content.children(":gt(" + (index - 1) * n + "):lt(" + (n - 1) + ")").show();
        //    }
        //}
    }

    // 根据页码显示按钮
    function showButtonByIndex(index) {

        if (index > 1 && index < pageCount) {
            $buttonBox.children().show().removeClass("_pageButton_current");
            $buttonBox.children(":eq(" + (index + 1) + ")").addClass("_pageButton_current");

        }
        else if (index == 1) {

            $buttonBox.children().show().removeClass("_pageButton_current");
            $buttonBox.children(":eq(0),:eq(1)").hide();
            $buttonBox.children(":eq(2)").addClass("_pageButton_current");
        }

        else if (index == pageCount) {

            $buttonBox.children().show().removeClass("_pageButton_current");
            $buttonBox.children(":eq(-1),:eq(-2)").hide();
            $buttonBox.children(":eq(-3)").addClass("_pageButton_current");

        }
    }

    // 获得当前页
    function currentPage() {
        return Number($buttonBox.children("[class*=_pageButton_current]").html());
    }

    // 翻页
    function switchPage(event) {
        if (event.target.innerHTML == "首页") {
            showContentByIndex(1);
            showButtonByIndex(1);
        }
        else if (event.target.innerHTML == "末页") {
            showContentByIndex(pageCount);
            showButtonByIndex(pageCount);
        }
        else if (event.target.innerHTML == "下一页") {
            showContentByIndex(currentPage() + 1);
            showButtonByIndex(currentPage() + 1);
        }
        else if (event.target.innerHTML == "上一页") {
            showContentByIndex(currentPage() - 1);
            showButtonByIndex(currentPage() - 1);
        }
        else/* if (event.target.innerHTML >= 1 && event.target.innerHTML <= pageCount) */{
            showContentByIndex(Number(event.target.innerHTML));
            showButtonByIndex(Number(event.target.innerHTML));
        }
    }


    //运行
    this.run = function () {
        //alert(this.pageCount);
        crtButton();
        loadInitContent();

        $buttonBox.click(function () {
            switchPage(event)
        });

    }
}




// 指定页数 翻页
function switchPageByIndex_0(index, height, content) {
    var top = -(index - 1) * height + "px";
    console.log(content);
    var contents = content.children;
    for (var i in range(contents.length)) {
        contents[i].style.position = "relative";
        contents[i].style.top = top;
    }
}
// 点击按钮 翻页
function switchPage_0(evt, buttonBox, content, height) {
    //todo
    if (evt.target.tagName == "A") {
        var buttons = buttonBox.getElementsByTagName("a");

        // 找到标记 并清空
        for (var i in range(buttons.length)) {
            if (buttons[i].style.fontWeight == "900") {
                var index_0 = i;

            }
            buttons[i].style.fontWeight = "500";
        }


        // 点击 上一页
        if (evt.target.innerText == "上一页") {
            if (index_0 > 1) {
                //console.log(index_0);

                switchPageByIndex_0(Number(index_0) - 1, height, content);
                buttons[index_0 - 1].style.fontWeight = "900";
            } else {
                buttons[1].style.fontWeight = "900";
            }

            // 点击 下一页
        } else if (evt.target.innerText == "下一页") {
            //todo
            if (index_0 < buttons.length - 2) {
                index_0 = Number(index_0);
                console.log(index_0 + 1);

                switchPageByIndex_0(Number(index_0) + 1, height, content);
                buttons[index_0 + 1].style.fontWeight = "900";
            } else {
                buttons[buttons.length - 2].style.fontWeight = "900";
            }

            // 点击 数字页码
        } else {
            var index = Number(evt.target.innerText);
            switchPageByIndex_0(index, height, content);
            evt.target.style.fontWeight = "900";
        }
    }
}
// 分页结构 载入文档
function SetPage_0(content, num, height, buttonBox) {

    var courses = content.children;

    if (buttonBox) {
        buttonBox.innerHTML = "";
    }

    if (courses.length > num) {

        // 计算页数
        var page = (courses.length % num) == 0 ? (courses.length / 6) : parseInt(courses.length / 6 + 1);
        console.log(page);
        // 创建 翻页按钮
        var page_box = document.createDocumentFragment();
        var button_before = document.createElement("a");
        var button_after = document.createElement("a");
        page_box.className = "_button_page";
        page_box.id = "container_show_button";

        // 上一页
        button_before.innerText = "上一页";
        page_box.appendChild(button_before);

        // 数字页码
        for (var i in range(page)) {
            var button = document.createElement("a");
            if (i == 0) {
                button.style.fontWeight = "900";
            }
            button.innerText = Number(i) + 1;
            //console.log(button);
            page_box.appendChild(button);
        }

        // 下一页
        button_after.innerText = "下一页";
        page_box.appendChild(button_after);
        //console.log(page_box);

        // 插入文档
        button_box.appendChild(page_box);
    }

    // todo 给按钮绑定事件
    try {
        // 有可能课程数量未满一页 不创建翻页按钮 导致事件绑定失败
        buttonBox.onclick = function () {
            switchPage_0(event, buttonBox, content, height);
        };
    } catch (e) {
    }
}


// JavaScript 轮播图 类
function ImgLoop(imgList, buttonBox, imgBox, leftArr, rightArr, time) {
    this.imgList = imgList; // 图片列表
    this.num = imgList.length; // 图片数量
    this.buttonBox = buttonBox; // 圆点位置
    this.imgBox = imgBox;
    this.time = time; // 间隔时间
    var buttons = buttonBox.getElementsByTagName("a");


    // 生成圆点
    this.button = function () {
        var frag = document.createDocumentFragment();
        for (var n in range(this.num)) {
            var button = document.createElement("a");
            button.rel = n;//todo

            if (n == 0) {
                button.style.background = "none";
            }
            frag.appendChild(button);
        }
        return frag
    };

    // 插入圆点
    this.createButton = function () {
        buttonBox.appendChild(this.button())
    };
    function setButton(index) {
        for (var i in range(imgList.length)) {
            // 覆盖圆点样式
            buttons[i].style.background = "#747474";
        }
        // 重新设置圆点样式
        buttons[index].style.background = "none";
    }

    // 自动循环index
    this.autoRun = function () {


        for (var n in range(imgList.length)) {
            if (buttons[n].style.background == "none") {
                var imgIndex = Number(n);
            }
        }
        autoRunLoop = setInterval(function () {
            if (imgIndex > 3) {
                imgIndex = 0;
            }
            //console.log(imgIndex);

            imgBox.src = imgList[imgIndex];
            setButton(imgIndex);
            //for (var i in range(imgList.length)) {
            //    // 覆盖圆点样式
            //    buttons[i].style.background = "#747474";
            //}
            //// 重新设置圆点样式
            //buttons[imgIndex].style.background = "none";

            imgIndex += 1;
        }, time);
        //console.log(autoRunLoop);
        //return autoRunLoop
    };

    //  左侧移入
    this.runLeft = function () {
        //alert("left");

        for (var i in range(imgList.length)) {

            if (buttons[i].style.background == "none") {
                var index = i;
                buttons[i].style.background = "#747474";
            }
        }
        index = Number(index) - 1;

        if (index < 0) {
            index = 3
        }
        buttons[index].style.background = "none";

        console.log(index);
        imgBox.src = imgList[Number(index)];
    };

    // 右侧移入
    this.runRight = function () {
        clearInterval(autoRunLoop);//todo 拆分到onmouseover与onmouseout事件中

        for (var i in range(imgList.length)) {
            //console.log(i);
            if (buttons[i].style.background == "none") {
                var index = i;
                console.log(index);


                buttons[i].style.background = "#747474";
            }
        }
        index = Number(index) + 1;

        if (index > 3) {
            index = 0
        }

        console.log(index);
        buttons[Number(index)].style.background = "none";

        imgBox.src = imgList[index];
        //this.autoRun() //todo 再次调用autoRun()
    };


    // 选择圆点切换图片
    this.selectImg = function (event) {
        //console.log(autoRunLoop);
        console.log(event.target.rel);
        clearInterval(autoRunLoop);

        imgBox.src = imgList[Number(event.target.rel)];
        setButton(Number(event.target.rel));


    };
    // 运行
    this.run = function () {

        this.createButton();
        this.autoRun();

        leftArr.onclick = this.runLeft;
        rightArr.onclick = this.runRight;
        leftArr.onmouseover = function () {
            clearInterval(autoRunLoop);
        };
        leftArr.onmouseout = this.autoRun;
        rightArr.onmouseover = function () {
            clearInterval(autoRunLoop);
        };
        rightArr.onmouseout = this.autoRun;
        //buttonBox.onclick = this.selectImg;
        for (var i in range(buttons.length)) {
            buttons[i].onmouseover = this.selectImg;
            buttons[i].onmouseout = this.autoRun;
        }
        imgBox.onmouseover = function () {
            clearInterval(autoRunLoop);
        };
        imgBox.onmouseout = this.autoRun;

        //buttonBox.onmouseout = this.autoRun();
        //imgBox.removeEventListener("load", this.autoRun, true);
    }
}
