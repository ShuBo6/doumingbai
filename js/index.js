$(function() {
    // var phonenum = $(".phone").val
    $(".btn").click(function() {
        var phonenum = $(".phonenum").val()
        var qqnum = $(".qqnum").val()
        var username = $(".username").val()
        var content = $(".content").val()
        var end_time = $("input[type='radio']:checked").val()
        console.log("phonenum:" + phonenum)
        console.log("qqnum:" + qqnum)
        console.log("username:" + username)
        console.log("content:" + content)
        console.log("end_time:" + end_time)

        $.ajax({
            type: "post",
            data: {
                phonenum: phonenum,
                qqnum: qqnum,
                username: username,
                content: content,
                end_time: end_time
            },
            dataType: "json",
            url: "https://wangshubo.club/doumingbai/php/Insertdemand.php",
            success: function(data) {
                console.log("是否收藏是否收藏是否收藏是否收藏是否收藏是否收藏是否收藏是否收藏是否收藏是否收藏是否收藏是否收藏")
                console.log(data)
                if (data[0].status == "1") {
                    Dialog.init("成功", 1900);
                    // alert("成功");
                } else {
                    Dialog.init("提交失败，提交内容不能为空或提交内容重复", 1900);
                    // alert("提交失败，或提交内容重复");
                }



            }
        });

    })


})