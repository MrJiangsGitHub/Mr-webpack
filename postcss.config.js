module.exports = {
    //浏览器厂商前缀
    "plugins": [
        require('autoprefixer')({
            //browsers要换成overrideBrowserslist不转换过来会报错
            overrideBrowserslist: [
                "> 1%",
                "last 2 versions",
            ]
        })
    ]
}