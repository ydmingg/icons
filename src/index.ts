// 引入pagesString文件
import { pagesStringIcons } from '../pages/pagesString';
// 获取的元素
const app = document.getElementById("app") as HTMLElement;

// 渲染popoutDOM
let popout = document.createElement("div");
popout.id = "popout";
app.insertAdjacentElement("afterend", popout)

// 在app中渲染数据
app.innerHTML = pagesStringIcons.iconsHeader + pagesStringIcons.iconsMain + pagesStringIcons.iconsFooter



// icons Data
const data = {
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
    const oIconsSearch = document.querySelector("#iconsSearch input") as HTMLInputElement;
    const mianIcons = app.querySelector("#mianIcons") as HTMLElement;
    // 定义一个名称为iconsDOM的string
    let iconsDOM = '';

    // iconsString
    let htmlString = (name: string) => {
        return `<div class="preview ">
                    <span class="inner dark-color-white">
                        <i class="ic-${name}"></i>
                    </span>
                    <span class='label dark-color-gray-200'>${name}</span>
                </div>`
    }

    // 遍历icons图标数据中的键名
    for (let [key, value] of Object.entries(data)) {
        iconsDOM += htmlString(value)
    }
    // 全局开始渲染iconsDOM
    mianIcons.innerHTML = iconsDOM;

    // 点击获取icons的名称
    iconsClickName();


    // 监听input输入的内容，重新渲染iconsDOM
    let inputTipsElement: any;
    oIconsSearch.addEventListener('input', () => {
        // 获取input的value值
        const IconsSearchValue = oIconsSearch.value

        // 搜索提示
        if (inputTipsElement) {
            inputTipsElement.querySelector('p').textContent = IconsSearchValue
            if (IconsSearchValue === "") {
                inputTipsElement.remove();
                inputTipsElement = null
            }
        } else if (IconsSearchValue !== "") {
            let inputTips = `<h4 class="h4 color-gray-800 row mb-28">搜索图标名："<p>${IconsSearchValue}</p>"</h4>`
            mianIcons.insertAdjacentHTML('beforebegin', inputTips);
            inputTipsElement = mianIcons.previousSibling;
        }
        
        
        // 获取data中的所有键
        const keys = Object.keys(data);
        // 创建一个新的数组
        const iconsArr = new Array();
        // 遍历所有的keys
        keys.forEach(ele => {
            // 大写字母转小写且前面加'-'
            const camelToKebab = (str: string) => {
                return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            }
            // 字符串转数组
            iconsArr.push(camelToKebab(ele))
        });
        
        // 使用值搜索数据
        const result = iconsArr.filter(key => {
            return key.includes(IconsSearchValue)
        })

        // 渲染结果
        iconsDOM = '';
        result.forEach((ele) => {
            iconsDOM += htmlString(ele)
        })
        // 渲染搜索后的iconsDOM
        mianIcons.innerHTML = iconsDOM;
        
        // 点击获取icons的名称
        iconsClickName();
    })

    // function(复制文本到剪切板)
    function copyText(obj: any) {
        // 检测obj是否为null
        if (obj !== null) {
            // 判断浏览器是否支持 navigator.clipboard API
            if (navigator.clipboard) {
                navigator.clipboard.writeText(obj).then(() => { alert("复制成功") }).catch(() => { alert("复制失败") })
            } else {
                // 创建input
                let text = document.createElement('input')
                // 给input赋值
                text.value = obj;
                // 把input加入到页面内
                document.body.appendChild(text)
                // 选中input
                text.select()
                // 执行复制
                document.execCommand('copy')
                // 移除input
                text.remove()
                // return alert("已复制类名")
            }
        }
    }

    // function(icons点击获取名称)
    function iconsClickName() {
        let aIocns = mianIcons.querySelectorAll(".preview");
        let timerId:any;
        let index = 48;
        aIocns.forEach((ele) => {
            ele.addEventListener('click', () => {
                // 防止连续点击
                
                if (timerId) clearInterval(timerId);
                let aIocnsLabel = ele.querySelector(".label") as HTMLElement;
                let obj = aIocnsLabel.textContent;
                
                copyText(obj);
                let message = `<div class="vg-message" style="top:${index}px">复制成功${index}</div>`;
                // 复制icon名称后的message提示
                popout.insertAdjacentHTML('afterbegin', message)

                // 记录每个message出现的位置
                index += 48;

                
                timerId = setInterval(removeMessage, 1000);
                function removeMessage() {
                    let aMessage = document.querySelectorAll(".vg-message");
                    if (aMessage.length > 0) {
                        // 删除aMessage
                        aMessage[0].remove()
                    } else {
                        // 如果没有vg-message元素，就清除定时器
                        clearInterval(timerId)
                        index = 48
                    }
                }
            })
        })
    }
})();


// 亮色与暗色主题切换
(function () { 
    const theme = document.getElementById("theme") as HTMLElement;
    const oHtml = document.documentElement;
    let themeBool = false;
    theme.addEventListener('click', () => { 
        // 初始化themeDOM和documentElementDOM的className
        theme.classList.remove("on")
        oHtml.classList.remove('dark')
        
        // 控制主题的切换
        if (!themeBool) { 
            theme.classList.add("on")
            setTimeout(() => {
                oHtml.classList.add('dark')
            },300)
        } else {
            theme.classList.remove("on")
            setTimeout(() => {
                oHtml.classList.remove('dark')
            },300)
        }
        themeBool = !themeBool
    })

})();