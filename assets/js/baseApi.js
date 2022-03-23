$.ajaxPrefilter(function(options) {
    // 设置统一更路经
    options.url = "http://www.liulongbin.top:3007" + options.url;


    // 设置统一请求头权限
    if (options.url.indexOf('/my/') !== -1) { options.headers = { Authorization: localStorage.getItem('token') || '' } }




})