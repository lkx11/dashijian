$(function() {

    // 跳转注册框
    $('.link_reg').on('click', function() {
        $(".login").hide();
        $(".register").show();
    })





    // 跳转登录框
    $('.link_log').on('click', function() {
        $(".login").show();
        $(".register").hide();
    })



    // 验证表单
    layui.form.verify({
        uname: [/^[a-zA-Z0-9]{1,10}$/, '用户名必须是1-10位字母和数字'],
        pwd: [/^\S{6,15}$/, '密码长度必须是6-15位的非空字符串'],
        repwd: function(value) {
            if (value !== $('.reg-box [name="password"]').val()) {
                return '两次密码不一致！'
            }
        }
    })


    // 监听注册事件
    $('.layui-form-reg').on('submit', function(e) {
        // 阻止默认行为
        e.preventDefault();
        // 提交注册数据
        $.ajax({
            method: 'POST',
            url: 'http://www.liulongbin.top:3007/api/reguser',
            data: $(this).serialize(),
            success: function(res) {

                if (res.status != 0) {
                    return layui.layer.msg(res.message)

                }
                layui.layer.msg('注册成功');
                $('.link_log').click()


            }

        })
    })


    // 监听登录事件
    $('.layui-form-log').on('submit', function(e) {
        // 阻止默认行为
        e.preventDefault();
        // 提交注册数据
        $.ajax({
            method: 'POST',
            url: '/api/login',
            data: $(this).serialize(),
            success: function(res) {

                if (res.status != 0) {
                    return layui.layer.msg(res.message)

                }



                layui.layer.msg('登录成功');
                // 将token储存起来
                localStorage.setItem('token', res.token);
                location.href = "index.html"



            }

        })
    })


})