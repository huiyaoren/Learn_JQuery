document.onerror = function () {
    return !0
};
var jsloader = new LazyJSONLoader, base_ads = 3, indexBlock = {
    top: {
        id: "b_index_top",
        area: '<div class="container-top-wrapper"><div class="container-top"><div class="b-l"></div><div class="b-r"><div class="top-list-wrapper"></div></div></div></div>',
        container: "#index_container",
        panes: {
            list: {
                wrapper: ".b-r .top-list-wrapper",
                dataContainer: '<ul class="top-list clearfix"></ul>',
                dataSource: "/index/ranking-3day.json",
                pagesize: 8,
                render: "renderTopList",
                onInitComplete: function (h) {
                    function n() {
                        switch (m) {
                            case 0:
                                l.html("\u4e00\u5468");
                                i.html("\u4e09\u65e5");
                                break;
                            case 1:
                                l.html("\u6628\u65e5");
                                i.html("\u4e00\u5468");
                                break;
                            case 2:
                                l.html("\u4e09\u65e5"), i.html("\u6628\u65e5")
                        }
                    }

                    var k = h._super;
                    (new SliderController({
                        parent: ".container-top .b-l",
                        wrapper: $('<div class="topic-preview-wrapper"><div class="topic-preview-list-wrapper"><ul class="topic-preview"></ul></div><a class="more-topic" href="/topic/integrated-1.html" target="_blank">\u66f4\u591a<i class="b-icon b-icon-arrow-r"></i></a><div class="s-bottom"><div class="title"></div></div></div>'),
                        item: '<li><a target="_blank"><img /></a></li>',
                        bar: $('<ul id="topic_slider" class="slider-bar"></ul>'),
                        barContainer: ".s-bottom",
                        barItem: "<li></li>",
                        renderCallback: function (e, d, f) {
                            e = $('<span><a href="' + d.link + '" target="_blank">' + d.title + "</a></span>").appendTo($(".title", e));
                            0 == f && e.show()
                        },
                        slideCallback: function (d, c) {
                            $(".title span", d).hide();
                            $(".title", d).find("span:eq(" + c + ")").fadeIn(300)
                        },
                        dataSrc: "/index/slideshow.json"
                    })).init();
                    var l = $('<div class="page prev no-select"></div>').appendTo(h.wrapper), i = $('<div class="page next no-select"></div>').appendTo(h.wrapper), j = ["/index/ranking.json", "/index/ranking-3day.json", "/index/ranking-week.json"], m = 1;
                    n();
                    h.wrapper.hover(function () {
                        $(this).find(".page").fadeIn(200)
                    }, function () {
                        $(this).find(".page").fadeOut(200)
                    });
                    l.click(function () {
                        i.show();
                        m--;
                        0 > m && (m = 2);
                        n();
                        h.dataSource = j[m];
                        k.parseData(h)
                    });
                    i.click(function () {
                        l.show();
                        m++;
                        2 < m && (m = 0);
                        n();
                        h.dataSource = j[m];
                        k.parseData(h)
                    })
                }
            }
        }
    },
    promote: {
        id: "b_promote",
        panes: {
            recommedList: {
                wrapper: ".b-l",
                title: '<span class="b-head-i"></span><span class="b-head-t"><h2>\u63a8\u5e7f</h2></span>',
                dataContainer: '<ul class="rm-list"></ul>',
                dataSource: "http://api.bilibili.com/x/web-show/promote?tp=promote&count=1&rank=0&jsonp=jsonp",
                render: "renderPromote",
                pagesize: 5
            },
            ad: {
                wrapper: ".b-r",
                dataContainer: '<div class="index-promote"></div>',
                dataSource: "/index/promote/12.json",
                render: "renderAds",
                random: !0,
                pagesize: 1
            }
        }
    },
    live: {
        tid: "live",
        id: "b_live",
        panes: {
            recommedList: {
                wrapper: ".b-l",
                title: '<div class="left"><span class="b-head-i"></span><span class="b-head-t"><a href="http://live.bilibili.com/" target="_blank"><h2>\u6b63\u5728\u76f4\u64ad</h2></a></span><span class="b-head-s" id="live_online_state"></span></div><div class="right"><div class="b-link-more"><a href="http://live.bilibili.com" target="_blank">\u66f4\u591a<i class="b-icon b-icon-arrow-r"></i></a></div></div>',
                dataContainer: '<ul class="v-list-live"></ul>',
                dataSource: "http://live.bilibili.com/bili/recom",
                jsonpCallback: "liveXhrDone",
                render: "renderLiveList",
                fail: function () {
                    this.area.remove();
                    $.each(indexNav.navItems, function (a, d) {
                        "#b_live" == d.target && d.item.hide()
                    });
                    indexNav.follow()
                },
                push: !0,
                pushDataSource: "http://live.bilibili.com/bili/recom_more"
            },
            attentionList: {
                wrapper: ".b-r",
                title: "",
                dataContainer: '<ul class="r-list-live" data-slider="true"></ul>',
                render: "renderLiveRanking",
                pagesize: 6,
                tab: CreateArea.createTab({
                    items: [{
                        name: "\u76f4\u64ad\u6392\u884c",
                        attributes: {
                            "data-source": "http://live.bilibili.com/bili/recom",
                            "data-view": "live-ranking",
                            "data-jsonp": "liveXhrDone"
                        }
                    }, {
                        name: "\u5173\u6ce8\u7684\u4e3b\u64ad",
                        attributes: {
                            "data-source": "http://live.bilibili.com/ajax/feed/list?callback=?&pagesize=6&page=1",
                            "data-view": "live-fav"
                        }
                    }, {
                        name: "\u4e3a\u4f60\u63a8\u8350",
                        attributes: {
                            "data-source": "http://live.bilibili.com/bili/recom",
                            "data-view": "live-promote",
                            "data-jsonp": "liveXhrDone",
                            style: "display: none;"
                        }
                    }]
                }),
                tabTarget: ".b-head",
                tabChange: "tabChange"
            }
        }
    },
    tagPromote: {
        id: "b_tag_promote",
        panes: {
            recommedList: {
                wrapper: ".b-l",
                dataContainer: '<ul class="rm-list"></ul>',
                dataSource: "/index/data/promote-tag.json",
                render: "renderTagPromote",
                pagesize: 5
            }
        }
    },
    douga: {
        tid: 1,
        id: "b_douga",
        panes: {
            dougaList: {
                wrapper: ".b-l",
                title: '<span class="b-head-i"></span><span class="b-head-t"><a href="/video/douga.html" title="\u52a8\u753b"><h2>\u52a8\u753b</h2></a></span>',
                dataContainer: '<ul class="vidbox v-list"></ul>',
                render: "renderList",
                pagesize: 10,
                type: "douga",
                tab: CreateArea.createListTab(),
                tabTarget: ".b-head",
                tabChange: "tabChange",
                push: !0,
                onInitComplete: function (a) {
                }
            },
            dougaRanking: {
                wrapper: ".b-r",
                title: '<div class="left"><span class="b-head-t"><h3>\u6392\u884c</h3></span></div><div class="right"></div>',
                dataContainer: '<div class="r-list-body"><div class="r-list-wrapper"></div></div>',
                render: "renderIndexRanking",
                pagesize: 7,
                tab: CreateArea.createRankingTab(),
                tabTarget: ".b-head .left",
                tabChange: "tabChange",
                selector: CreateArea.createRankingSelect(1),
                selectorTarget: ".b-head .right",
                selectChange: "selectChange"
            }
        }
    },
    bangumi: {
        tid: 13,
        id: "b_bangumi",
        panes: {
            bangumiList: {
                wrapper: ".b-l",
                title: '<span class="b-head-i"></span><span class="b-head-t"><a href="/video/bangumi.html" title="\u756a\u5267"><h2>\u756a\u5267</h2></a></span>',
                dataContainer: '<ul class="vidbox v-list"></ul>',
                render: "renderList",
                pagesize: 10,
                type: "bangumi",
                tab: CreateArea.createListTab(),
                tabTarget: ".b-head",
                tabChange: "tabChange",
                push: !0
            },
            bangumiRanking: {
                wrapper: ".b-r",
                title: '<div class="left"><span class="b-head-t"><h3>\u6392\u884c</h3></span></div><div class="right"></div>',
                dataContainer: '<ul class="rlist bangumi-ranking"></ul>',
                render: "renderIndexRanking",
                pagesize: 7,
                type: "hot",
                selector: CreateArea.createRankingSelect(13),
                selectorTarget: ".b-head .right",
                selectChange: "selectChange"
            },
            bangumiCalendar: {
                template: '<div class="b-section-body b-section-bangumi"><div class="b-l bgm-calendar"><div class="b-head"><a class="c-clink" href="/video/bgm_calendar.html" target="_blank">\u65b0\u756a\u653e\u9001\u8868<i class="b-icon b-icon-arrow-red-r"></i></a></div><div class="b-body"></div></div></div>',
                dataContainer: '<ul class="c-list clearfix"></ul>',
                dataSource: "/index/index-bangumi-timeline.json",
                render: "renderBangumiCalendar",
                tab: '<div class="b-tab"><ul class="clearfix"><li class="wn" data-day=n data-name="\u6700\u65b0"><span></span></li><li class="w1" data-day=1 data-name="\u4e00"><span></span></li><li class="w2" data-day=2 data-name="\u4e8c"><span></span></li><li class="w3" data-day=3 data-name="\u4e09"><span></span></li><li class="w4" data-day=4 data-name="\u56db"><span></span></li><li class="w5" data-day=5 data-name="\u4e94"><span></span></li><li class="w6" data-day=6 data-name="\u516d"><span></span></li><li class="w0" data-day=0 data-name="\u65e5"><span></span></li></ul></div>',
                tabTarget: ".b-head",
                onInitComplete: function (a) {
                    var d = (new Date).getDay();
                    a.tab.find("[data-day=n]").addClass("on");
                    a.tab.find("li").each(function (c, g) {
                        var f = $(g);
                        $('<i class="b-icon b-icon-bangumi-w"></i>').addClass("b-icon-bangumi-w" + f.attr("data-day")).appendTo(f);
                        $('<i class="b-icon b-icon-arrow-l-d"></i>').appendTo(f);
                        f.attr("data-day") == d ? f.find("span").text("\u5468" + f.attr("data-name")) : f.find("span").text(f.attr("data-name"))
                    })
                }
            },
            bangumiPromote: {
                template: '<div class="b-r bangumi"><div class="b-body"></div></div>',
                templateTarget: ".b-section-bangumi"
            }
        }
    },
    music: {
        tid: 3,
        id: "b_music",
        panes: {
            musicList: {
                wrapper: ".b-l",
                title: '<span class="b-head-i"></span><span class="b-head-t"><a href="/video/music.html" title="\u97f3\u4e50"><h2>\u97f3\u4e50</h2></a></span>',
                dataContainer: '<ul class="vidbox v-list"></ul>',
                render: "renderList",
                pagesize: 10,
                type: "music",
                tab: CreateArea.createListTab(),
                tabTarget: ".b-head",
                tabChange: "tabChange",
                push: !0
            },
            musicRanking: {
                wrapper: ".b-r",
                title: '<div class="left"><span class="b-head-t"><h3>\u6392\u884c</h3></span></div><div class="right"></div>',
                dataContainer: '<div class="r-list-body"><div class="r-list-wrapper"></div></div>',
                render: "renderIndexRanking",
                pagesize: 7,
                tab: CreateArea.createRankingTab(),
                tabTarget: ".b-head .left",
                tabChange: "tabChange",
                selector: CreateArea.createRankingSelect(3),
                selectorTarget: ".b-head .right",
                selectChange: "selectChange"
            }
        }
    },
    dance: {
        tid: 129,
        id: "b_dance",
        panes: {
            danceList: {
                wrapper: ".b-l",
                title: '<span class="b-head-i"></span><span class="b-head-t"><a href="/video/dance.html" title="\u821e\u8e48"><h2>\u821e\u8e48</h2></a></span>',
                dataContainer: '<ul class="vidbox v-list"></ul>',
                render: "renderList",
                pagesize: 10,
                type: "dance",
                tab: CreateArea.createListTab(),
                tabTarget: ".b-head",
                tabChange: "tabChange",
                push: !0
            },
            danceRanking: {
                wrapper: ".b-r",
                title: '<div class="left"><span class="b-head-t"><h3>\u6392\u884c</h3></span></div><div class="right"></div>',
                dataContainer: '<div class="r-list-body"><div class="r-list-wrapper"></div></div>',
                render: "renderIndexRanking",
                pagesize: 7,
                tab: CreateArea.createRankingTab(),
                tabTarget: ".b-head .left",
                tabChange: "tabChange",
                selector: CreateArea.createRankingSelect(129),
                selectorTarget: ".b-head .right",
                selectChange: "selectChange"
            }
        }
    },
    game: {
        tid: 4,
        id: "b_game",
        panes: {
            gameList: {
                wrapper: ".b-l",
                title: '<span class="b-head-i"></span><span class="b-head-t"><a href="/video/game.html" title="\u6e38\u620f"><h2>\u6e38\u620f</h2></a></span>',
                dataContainer: '<ul class="vidbox v-list"></ul>',
                render: "renderList",
                pagesize: 10,
                type: "game",
                tab: CreateArea.createListTab(),
                tabTarget: ".b-head",
                tabChange: "tabChange",
                push: !0
            },
            gameRanking: {
                wrapper: ".b-r",
                title: '<div class="left"><span class="b-head-t"><h3>\u6392\u884c</h3></span></div><div class="right"></div>',
                dataContainer: '<div class="r-list-body"><div class="r-list-wrapper"></div></div>',
                render: "renderIndexRanking",
                pagesize: 7,
                tab: CreateArea.createRankingTab(),
                tabTarget: ".b-head .left",
                tabChange: "tabChange",
                selector: CreateArea.createRankingSelect(4),
                selectorTarget: ".b-head .right",
                selectChange: "selectChange"
            }
        }
    },
    technology: {
        tid: 36,
        id: "b_technology",
        panes: {
            techList: {
                wrapper: ".b-l",
                title: '<span class="b-head-i"></span><span class="b-head-t"><a href="/video/technology.html" title="\u79d1\u6280"><h2>\u79d1\u6280</h2></a></span>',
                dataContainer: '<ul class="vidbox v-list"></ul>',
                render: "renderList",
                pagesize: 10,
                type: "technology",
                tab: CreateArea.createListTab(),
                tabTarget: ".b-head",
                tabChange: "tabChange",
                push: !0
            },
            techRanking: {
                wrapper: ".b-r",
                title: '<div class="left"><span class="b-head-t"><h3>\u6392\u884c</h3></span></div><div class="right"></div>',
                dataContainer: '<div class="r-list-body"><div class="r-list-wrapper"></div></div>',
                render: "renderIndexRanking",
                pagesize: 7,
                tab: CreateArea.createRankingTab(),
                tabTarget: ".b-head .left",
                tabChange: "tabChange",
                selector: CreateArea.createRankingSelect(36),
                selectorTarget: ".b-head .right",
                selectChange: "selectChange"
            }
        }
    },
    ent: {
        tid: 5,
        id: "b_ent",
        className: "c-r-multi",
        panes: {
            entList: {
                wrapper: ".b-l",
                title: '<span class="b-head-i"></span><span class="b-head-t"><a href="/video/ent.html" title="\u5a31\u4e50"><h2>\u5a31\u4e50</h2></a></span>',
                dataContainer: '<ul class="vidbox v-list"></ul>',
                render: "renderList",
                pagesize: 10,
                type: "ent",
                tab: CreateArea.createListTab(),
                tabTarget: ".b-head",
                tabChange: "tabChange",
                push: !0
            },
            entRanking: {
                wrapper: ".b-r",
                title: '<div class="left"><span class="b-head-t"><h3>\u6392\u884c</h3></span></div><div class="right"></div>',
                dataContainer: '<div class="r-list-body"><div class="r-list-wrapper"></div></div>',
                render: "renderIndexRanking",
                pagesize: 7,
                tab: CreateArea.createRankingTab(),
                tabTarget: ".b-head .left",
                tabChange: "tabChange",
                selector: CreateArea.createRankingSelect(5),
                selectorTarget: ".b-head .right",
                selectChange: "selectChange"
            },
            entHotspot: {
                template: '<div class="b-section-body"></div>',
                panes: {
                    entHotspotList: {
                        template: '<div class="b-l"><div class="b-head"></div><div class="b-body"></div></div>',
                        title: '<span class="b-head-t"><h2>\u70ed\u95e8\u8282\u76ee</h2></span>',
                        dataContainer: '<ul class="rm-list hotspot"></ul>',
                        dataSource: "/index/catalogy/5-3day.json",
                        render: "renderHotspot",
                        slider: !0
                    },
                    entHotspotRanking: {
                        template: '<div class="b-r b-hotspot"><div class="b-head"></div><div class="b-body rb"></div></div>',
                        title: '<span class="b-head-t"><h3>\u70ed\u95e8\u7efc\u827a</h3></span>',
                        dataContainer: '<ul class="hs-list"></ul>',
                        dataSource: "/index/catalogy/5-3day.json",
                        render: "renderHotspotRanking",
                        pagesize: 8
                    }
                }
            }
        }
    },
    kichiku: {
        tid: 119,
        id: "b_kichiku",
        panes: {
            kichikuList: {
                wrapper: ".b-l",
                title: '<span class="b-head-i"></span><span class="b-head-t"><a href="/video/kichiku.html" title="\u9b3c\u755c"><h2>\u9b3c\u755c</h2></a></span>',
                dataContainer: '<ul class="vidbox v-list"></ul>',
                render: "renderList",
                pagesize: 10,
                type: "kichiku",
                tab: CreateArea.createListTab(),
                tabTarget: ".b-head",
                tabChange: "tabChange",
                push: !0
            },
            kichikuRanking: {
                wrapper: ".b-r",
                title: '<div class="left"><span class="b-head-t"><h3>\u6392\u884c</h3></span></div><div class="right"></div>',
                dataContainer: '<div class="r-list-body"><div class="r-list-wrapper"></div></div>',
                render: "renderIndexRanking",
                pagesize: 7,
                tab: CreateArea.createRankingTab(),
                tabTarget: ".b-head .left",
                tabChange: "tabChange",
                selector: CreateArea.createRankingSelect(119),
                selectorTarget: ".b-head .right",
                selectChange: "selectChange"
            }
        }
    },
    movie: {
        tid: 23,
        id: "b_movie",
        panes: {
            movieList: {
                wrapper: ".b-l",
                title: '<span class="b-head-i"></span><span class="b-head-t"><a href="/video/movie.html" title="\u7535\u5f71"><h2>\u7535\u5f71</h2></a></span>',
                dataContainer: '<ul class="vidbox v-list"></ul>',
                render: "renderList",
                pagesize: 10,
                type: "movie",
                tab: CreateArea.createListTab(),
                tabTarget: ".b-head",
                tabChange: "tabChange",
                push: !0
            },
            movieRanking: {
                wrapper: ".b-r",
                title: '<div class="left"><span class="b-head-t"><h3>\u6392\u884c</h3></span></div><div class="right"></div>',
                dataContainer: '<div class="r-list-body"><div class="r-list-wrapper"></div></div>',
                render: "renderIndexRanking",
                pagesize: 7,
                tab: CreateArea.createRankingTab(),
                tabTarget: ".b-head .left",
                tabChange: "tabChange",
                selector: CreateArea.createRankingSelect(23),
                selectorTarget: ".b-head .right",
                selectChange: "selectChange"
            }
        }
    },
    teleplay: {
        tid: 11,
        id: "b_teleplay",
        panes: {
            movieList: {
                wrapper: ".b-l",
                title: '<span class="b-head-i"></span><span class="b-head-t"><a href="/video/teleplay.html" title="\u7535\u89c6\u5267"><h2>\u7535\u89c6\u5267</h2></a></span>',
                dataContainer: '<ul class="vidbox v-list"></ul>',
                render: "renderList",
                pagesize: 10,
                type: "teleplay",
                tab: CreateArea.createListTab(),
                tabTarget: ".b-head",
                tabChange: "tabChange",
                push: !0
            },
            movieRanking: {
                wrapper: ".b-r",
                title: '<div class="left"><span class="b-head-t"><h3>\u6392\u884c</h3></span></div><div class="right"></div>',
                dataContainer: '<div class="r-list-body"><div class="r-list-wrapper"></div></div>',
                render: "renderIndexRanking",
                pagesize: 7,
                tab: CreateArea.createRankingTab(),
                tabTarget: ".b-head .left",
                tabChange: "tabChange",
                selector: CreateArea.createRankingSelect(11),
                selectorTarget: ".b-head .right",
                selectChange: "selectChange"
            }
        }
    },
    fashion: {
        tid: 155,
        id: "b_fashion",
        panes: {
            fashionList: {
                wrapper: ".b-l",
                title: '<span class="b-head-i"></span><span class="b-head-t"><a href="/video/fashion.html" title="\u65f6\u5c1a"><h2>\u65f6\u5c1a</h2></a></span>',
                dataContainer: '<ul class="v-list"></ul>',
                render: "renderList",
                pagesize: 10,
                type: "fashion",
                tab: CreateArea.createListTab(),
                tabTarget: ".b-head",
                tabChange: "tabChange",
                push: !0
            },
            fashionRanking: {
                wrapper: ".b-r",
                title: '<div class="left"><span class="b-head-t"><h3>\u6392\u884c</h3></span></div><div class="right"></div>',
                dataContainer: '<div class="r-list-body"><div class="r-list-wrapper"></div></div>',
                render: "renderIndexRanking",
                pagesize: 7,
                tab: CreateArea.createRankingTab(),
                tabTarget: ".b-head .left",
                tabChange: "tabChange",
                selector: CreateArea.createRankingSelect(155, {selected: 1}),
                selectorTarget: ".b-head .right",
                selectChange: "selectChange"
            }
        }
    },
    recommend: {
        id: "b_recommend",
        empty: !0,
        panes: {
            recommedList: {
                template: '<div class="b-l"><div class="b-head"></div><div class="b-body"></div></div><div class="b-r"></div>',
                title: '<span class="b-head-i"></span><span class="b-head-t"><a href="/list/recommend/1.html" title="\u7279\u522b\u63a8\u8350"><h2>\u7279\u522b\u63a8\u8350</h2></a></span>',
                dataContainer: '<ul class="rm-list recommend"></ul>',
                dataSource: "/index/recommend.json",
                render: "renderRecommend",
                pagesize: 5
            }
        }
    }
};
function buildop(d, j, h, i) {
    var g = $(d);
    $(j);
    g.click(function () {
        var a = g.index($(this));
        "undefined" !== typeof h && ChatSaveSettings(h, a);
        g.removeClass("on");
        $(this).addClass("on")
    });
    (d = i || ChatGetSettings(h)) ? $(g.get(d)).trigger("click") : 3 == g.length ? $(g.get(1)).trigger("click") : $(g.get(0)).trigger("click")
}
$(function () {
    addReturnToMobile()
});