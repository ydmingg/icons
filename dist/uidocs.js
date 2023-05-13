
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var pagesStringIcons = {
    iconsHeader: "<header class=\"vg-headers-doc\">\n                    <div class=\"containers\">\n                    <div class=\"row align-center\">\n                        <a href=\"\" class=\"logo \"><img src=\"https://book.funxdata.com/public/img/webmanage/logo.png\"></a>\n                        <div class=\"flex-auto\">\n                        <div class=\"nav justify-content-end\">\n                            <a href=\"#\" class=\"nav-li\">UI</a>\n                            <a href=\"#\" class=\"nav-li\">ICONS</a>\n                            <a href=\"#\" class=\"nav-li\">\n                                <div id=\"theme\" class=\"vg-switch\">\n                                    <div class=\"vg-switch-core\"></div>\n                                </div>\n                            </a>\n                        </div>\n                        </div>\n                    </div>\n                    </div>\n                </header>",
    iconsMain: "<main class=\"vg-main\">\n                    <div class=\"icons-main-titles\">\n                    <div class=\"containers\">\n                        <h1 class=\"titles h1 align-center font-weight-xxl color-gray-900\">PIKSEL ICONS</h1>\n                        <p class=\"explain margin-auto font-size-24 font-weight-sm color-gray-700 line-height-lg text-center mt-24\">\n                            PIKSEL ICONS \u56FE\u6807\u5E93\u662F\u4E00\u4E2A\u901A\u8FC7\u6280\u672F\u9A71\u52A8\u77E2\u91CF\u56FE\u6807\u6837\u5F0F\u7684\u5F00\u6E90\u56FE\u6807\u5E93\uFF0C\u81F4\u529B\u4E8E\u6784\u5EFA\u9AD8\u8D28\u91CF\u3001\u7EDF\u4E00\u5316\u3001\u53EF\u5B9A\u4E49\u7684\u56FE\u6807\u8D44\u6E90\u3002\n                        </p>\n                        <div class=\"pt-48\">\n                        <ul class=\"icons-main-titles-images row justify-center mt-24\">\n                            <li class=\"mr-12\">\n                            <i class=\"vg-icon ic-align-center\"></i>\n                            </li>\n                            <li class=\"mr-12\"><i class=\"vg-icon ic-align-center\"></i></li>\n                            <li class=\"mr-12\"><i class=\"vg-icon ic-align-center\"></i></li>\n                            <li class=\"mr-12\"><i class=\"vg-icon ic-align-center\"></i></li>\n                            <li class=\"mr-12\"><i class=\"vg-icon ic-align-center\"></i></li>\n                            <li class=\"mr-12\"><i class=\"vg-icon ic-align-center\"></i></li>\n                            <li class=\"mr-12\"><i class=\"vg-icon ic-align-center\"></i></li>\n                            <li class=\"mr-12\"><i class=\"vg-icon ic-align-center\"></i></li>\n                        </ul>\n                        </div>\n                    </div>\n                    </div>\n                    <div class=\"icons-main-contents\">\n                    <div class=\"containers\">\n                        <div id=\"iconsSearch\" class=\"icons-main-contents-search mb-48 vg-searchs searchs-size-xxl searchs-block\">\n                        <i class=\"search-icons vg-icon ic-search\"></i>\n                        <input type=\"text\" placeholder=\"\u641C\u7D22\u56FE\u6807\">\n                        <div class=\"asdfasd ml-12 cursor-pointer\">bbbbbb</div>\n                        <div class=\"asdfasd ml-12 cursor-pointer\">aaaaaaa</div>\n                        </div>\n                        <div class=\"icons-main-contents-icons row \" id=\"mianIcons\">\n                        <!-- iconsDOM -->\n                        </div>\n                    </div>\n                    </div>\n                </main>",
    iconsFooter: "<footer class=\"vg-foolter pt-48 pb-48\">\n                    <div class=\"containers\">\n                    <div class=\"row align-center mt-48 mb-48 \">\n                        <div class=\"flex-auto row color-gray-700 font-weight-lg\">\n                        <a href=\"javascript:;\" class=\"mr-32 font-size-14\">Piksel Design</a>\n                        <a href=\"javascript:;\" class=\"mr-32 font-size-14\">Piksel Mange</a>\n                        <a href=\"javascript:;\" class=\"mr-32 font-size-14\">Piksel</a>\n                        </div>\n                        <div class=\"copyright\">\n                        <p class=\"font-size-14 color-gray-500 font-weight-sm\">Copyright \u00A9 funxdata.com</p>\n                        </div>\n                    </div>\n                    </div>\n                </footer>",
};

var app = document.getElementById("app");
var popout = document.createElement("div");
popout.id = "popout";
app.insertAdjacentElement("afterend", popout);
app.innerHTML = pagesStringIcons.iconsHeader + pagesStringIcons.iconsMain + pagesStringIcons.iconsFooter;
var data = {
    alignCenter: "align-center",
    alignJustified: "align-justified",
    alignLeft: "align-left",
    alignRight: "align-right",
    biu: "biu",
    camera: "camera",
    cardDetails: "card-details",
    checkboxOff: "checkbox-off",
    checkboxOn: "checkbox-on",
    circle: "circle",
    close: "close",
    delete: "delete",
    delta: "delta",
    dotsVertical: "dots-vertical",
    dots: "dots",
    down: "down",
    dropdownFilling: "dropdown-filling",
    edit: "edit",
    file: "file",
    filterOff: "filter-off",
    filter: "filter",
    folderOff: "folder-off",
    folderOn: "folder-on",
    gridDots: "grid-dots",
    hand: "hand",
    help: "help",
    history: "history",
    increase: "increase",
    layoutBottom: "layout-bottom",
    layoutCenter: "layout-center",
    layoutHorizontal: "layout-horizontal",
    layoutLeft: "layout-left",
    layoutMiddle: "layout-middle",
    layoutRight: "layout-right",
    layoutTop: "layout-top",
    layoutVertical: "layout-vertical",
    left: "left",
    linear: "linear",
    listDetails: "list-details",
    list: "list",
    messageFilling: "message-filling",
    message: "message",
    minus: "minus",
    news: "news",
    photo: "photo",
    plus: "plus",
    pointer: "pointer",
    radioOff: "radio-off",
    radioOn: "radio-on",
    receipt: "receipt",
    reduce: "reduce",
    right: "right",
    rotate: "rotate",
    save: "save",
    search: "search",
    setting: "setting",
    share: "share",
    spacHorizontal: "spac-horizontal",
    spacVertical: "spac-vertical",
    square: "square",
    star: "star",
    time: "time",
    tip: "tip",
    up: "up",
    video: "video",
    wechatFilling: "wechat-filling",
    x: "x",
    select: "select",
    exit: "exit",
    team: "team",
    person: "person",
    project: "project",
    sun: "sun",
    sunFilling: "sun-filling",
    arrowsHorizontal: "arrows-horizontal",
    arrowsVertical: "arrows-vertical",
};
(function () {
    var oIconsSearch = document.querySelector("#iconsSearch input");
    var mianIcons = app.querySelector("#mianIcons");
    var iconsDOM = '';
    var htmlString = function (name) {
        return "<div class=\"preview \">\n                    <span class=\"inner dark-color-white\">\n                        <i class=\"ic-".concat(name, "\"></i>\n                    </span>\n                    <span class='label dark-color-gray-200'>").concat(name, "</span>\n                </div>");
    };
    for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
        var _b = _a[_i]; _b[0]; var value = _b[1];
        iconsDOM += htmlString(value);
    }
    mianIcons.innerHTML = iconsDOM;
    iconsClickName();
    var inputTipsElement;
    oIconsSearch.addEventListener('input', function () {
        var IconsSearchValue = oIconsSearch.value;
        if (inputTipsElement) {
            inputTipsElement.querySelector('p').textContent = IconsSearchValue;
            if (IconsSearchValue === "") {
                inputTipsElement.remove();
                inputTipsElement = null;
            }
        }
        else if (IconsSearchValue !== "") {
            var inputTips = "<h4 class=\"h4 color-gray-800 row mb-28\">\u641C\u7D22\u56FE\u6807\u540D\uFF1A\"<p>".concat(IconsSearchValue, "</p>\"</h4>");
            mianIcons.insertAdjacentHTML('beforebegin', inputTips);
            inputTipsElement = mianIcons.previousSibling;
        }
        var keys = Object.keys(data);
        var iconsArr = new Array();
        keys.forEach(function (ele) {
            var camelToKebab = function (str) {
                return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            };
            iconsArr.push(camelToKebab(ele));
        });
        var result = iconsArr.filter(function (key) {
            return key.includes(IconsSearchValue);
        });
        iconsDOM = '';
        result.forEach(function (ele) {
            iconsDOM += htmlString(ele);
        });
        mianIcons.innerHTML = iconsDOM;
        iconsClickName();
    });
    function copyText(obj) {
        if (obj !== null) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(obj).then(function () { alert("复制成功"); }).catch(function () { alert("复制失败"); });
            }
            else {
                var text = document.createElement('input');
                text.value = obj;
                document.body.appendChild(text);
                text.select();
                document.execCommand('copy');
                text.remove();
            }
        }
    }
    function iconsClickName() {
        var aIocns = mianIcons.querySelectorAll(".preview");
        var timerId;
        var index = 48;
        aIocns.forEach(function (ele) {
            ele.addEventListener('click', function () {
                if (timerId)
                    clearInterval(timerId);
                var aIocnsLabel = ele.querySelector(".label");
                var obj = aIocnsLabel.textContent;
                copyText(obj);
                var message = "<div class=\"vg-message\" style=\"top:".concat(index, "px\">\u590D\u5236\u6210\u529F").concat(index, "</div>");
                popout.insertAdjacentHTML('afterbegin', message);
                index += 48;
                timerId = setInterval(removeMessage, 1000);
                function removeMessage() {
                    var aMessage = document.querySelectorAll(".vg-message");
                    if (aMessage.length > 0) {
                        aMessage[0].remove();
                    }
                    else {
                        clearInterval(timerId);
                        index = 48;
                    }
                }
            });
        });
    }
})();
(function () {
    var theme = document.getElementById("theme");
    var oHtml = document.documentElement;
    var themeBool = false;
    theme.addEventListener('click', function () {
        theme.classList.remove("on");
        oHtml.classList.remove('dark');
        if (!themeBool) {
            theme.classList.add("on");
            setTimeout(function () {
                oHtml.classList.add('dark');
            }, 300);
        }
        else {
            theme.classList.remove("on");
            setTimeout(function () {
                oHtml.classList.remove('dark');
            }, 300);
        }
        themeBool = !themeBool;
    });
})();
