$(function() {

    $.ajax({
        url: 'https://wangshubo.club/doumingbai/php/QueryList.php',
        type: 'POST',
        dataType: "json",
        success: function(data) {
            console.log(data.length)
            for (var i = 0; i < data.length; i++) {
                var is_finished = data[i]['is_finished'];

                if (is_finished == 1) {
                    $(".content").append('        <div id="list" style="width:100%;float: left;color:green;">' +
                        '<div style="width:3%; float: left;background-color:yellow;  text-align: center;height: 3em; border: 1px solid #000;  overflow:auto" >' + data[i]['id'] + '</div>' +
                        '<div style="width:9%; float: left;background-color:yellow; text-align: center;height: 3em; border: 1px solid #000; overflow:auto" >' + data[i]['phonenum'] + '</div>' +
                        '<div style="width:9%; float: left;background-color:yellow; text-align: center;height: 3em; border: 1px solid #000; overflow:auto" >' + data[i]['qqnum'] + '</div>' +
                        '<div style="width:9%; float: left;background-color:yellow; text-align: center;height: 3em; border: 1px solid #000; overflow:auto" >' + data[i]['username'] + '</div>' +
                        '<div style="width:9%; float: left;background-color:yellow; text-align: center;height: 3em; border: 1px solid #000; overflow:auto" >' + data[i]['current_time'] + '</div>' +
                        '<div style="width:44%;float: left;background-color:yellow; text-align: center;height: 3em; border: 1px solid #000; overflow:auto" >' + data[i]['demand_content'] + '</div>' +
                        '<div style="width:10%;float: left;background-color:yellow; text-align: center;height: 3em; border: 1px solid #000; overflow:auto" >' + data[i]['end_time'] + '</div>' +
                        '<div style="width:2%; float: left;background-color:yellow;  text-align: center;height: 3em; border: 1px solid #000; overflow:auto" >' + data[i]['is_finished'] + '</div>' +
                        '</div>')
                } else {
                    $(".content").append('        <div id="list" style="width:100%;float: left;">' +
                        '<div style="width:3%; float: left;  text-align: center;height: 3em; border: 1px solid #000;  overflow:auto" >' + data[i]['id'] + '</div>' +
                        '<div style="width:9%; float: left; text-align: center;height: 3em; border: 1px solid #000; overflow:auto" >' + data[i]['phonenum'] + '</div>' +
                        '<div style="width:9%; float: left; text-align: center;height: 3em; border: 1px solid #000; overflow:auto" >' + data[i]['qqnum'] + '</div>' +
                        '<div style="width:9%; float: left; text-align: center;height: 3em; border: 1px solid #000; overflow:auto" >' + data[i]['username'] + '</div>' +
                        '<div style="width:9%; float: left; text-align: center;height: 3em; border: 1px solid #000; overflow:auto" >' + data[i]['current_time'] + '</div>' +
                        '<div style="width:44%;float: left; text-align: center;height: 3em; border: 1px solid #000; overflow:auto" >' + data[i]['demand_content'] + '</div>' +
                        '<div style="width:10%;float: left; text-align: center;height: 3em; border: 1px solid #000; overflow:auto" >' + data[i]['end_time'] + '</div>' +
                        '<div style="width:2%; float: left;  text-align: center;height: 3em; border: 1px solid #000; overflow:auto" >' + data[i]['is_finished'] + '</div>' +
                        '</div>')
                }
                console.log("id:" + data[i]['id'])
                console.log("phonenum:" + data[i]['phonenum'])
                console.log("qqnum:" + data[i]['qqnum'])
                console.log("username:" + data[i]['username'])
                console.log("current_time:" + data[i]['current_time'])
                console.log("content:" + data[i]['demand_content'])
                console.log("end_time:" + data[i]['end_time'])
                console.log("is_finished:" + is_finished)
            }
        },
        error: function(data) {
            alert("查询失败")
        }
    })

    // $("#select").click(function() {
    //     $.ajax({
    //         url: 'https://wangshubo.club/drawprize/selectcode.php',
    //         type: 'POST',
    //         ansyc: false,
    //         data: {
    //             code: $("#code").val()
    //         },
    //         dataType: "json",
    //         success: function(data) {
    //             //             <div style="width:100%;float: left;">
    //             //     <div style="width:10%;float: left; text-align: center" >序号</div>
    //             //     <div style="width:50%;float: left; text-align: center" >抽奖码</div>
    //             //     <div style="width:20%;float: left; text-align: center" >状态</div>
    //             //     <div style="width:20%;float: left; text-align: center">奖品等级</div>
    //             // </div>
    //             console.log(data.length)
    //             for (var i = 0; i < data.length; i++) {
    //                 $(".content").append('        <div style="width:100%;float: left;">' +
    //                     '<div style="width:10%;float: left; text-align: center" >' + data[i]['id'] + '</div>' +
    //                     '<div style="width:50%;float: left; text-align: center" >' + data[i]['code'] + '</div>' +
    //                     '<div style="width:20%;float: left; text-align: center" >' + data[i]['status'] + '</div>' +
    //                     '<div style="width:20%;float: left; text-align: center">' + data[i]['level'] + '</div>' +
    //                     '</div>')
    //             }
    //         },
    //         error: function(data) {
    //             alert("上传失败")
    //         }
    //     })
    // })
})