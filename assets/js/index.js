$(function() {
    // 调用获取个人信息请求
    geiInfoUser()

    // 渲染头像与姓名
    $('#weclom').html('欢迎 &nbsp' + name)



    if (user_pic !== null) {
        $('.layui-nav-img').attr('src', user.user_pic).show;

        $('.textimg').hide()
    } else {
        $('.layui-nav-img').hide()

        $('.textimg').html(first).hide()
    }

})

// 封装获取个人信息请求
function geiInfoUser() {
    $.ajax({
        url: '/my/userinfo',
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token ') || '' },
        success: function(res) {
            if (res.status !== 0) {
                layui.layer.msg('获取数据失败')
            }
            renderAuatar(res.data)
        }
    })
}
// 分装 用户头像
function renderAuatar(user) {
    // 获取用户名称
    var name = user.nickname || user.username

    // 将用户名的第一个字母换成大写
    var first = name[0].toUpperCase()

}