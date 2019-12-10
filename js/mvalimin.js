(function(my) { my.extend({ myvali: function(json, config) { var arr = json; var config = config; for (var i = 0; i < arr.length; i++) { var item = $("<b data-id='vali' style=" + "font-size:12px;font-weight:normal;color:red;padding-left:15px;" + "></b>");
                $(arr[i].id.selector).parent().append(item) } var lab = $("b").attr("data-id", "vali"); var cor = "cor"; var err = "err"; var msgBtnIsClick = false;

            function ijson(arr) { var arr1 = []; for (i in arr) { arr1.push({ reqTps: arr[i].reqTps, }) } return arr1 } var tps = ijson(arr); var person = arr; if (config[0].checkbox != undefined) { var checkboxArr = []; var isCheckboxArr = []; for (var i = 0; i < config[0].checkbox.length; i++) { var item = $("<b data-id='vali' style=" + "font-size:12px;font-weight:normal;color:red;padding-left:15px;" + "></b>");
                    $(config[0].checkbox[i].selector).append(item);
                    checkboxArr.push([]);
                    isCheckboxArr.push([0]) } } if (config[0].selector != undefined) { var selectorArr = []; for (var i = 0; i < config[0].selector.length; i++) { var item = $("<b data-id='vali' style=" + "font-size:12px;font-weight:normal;color:red;padding-left:15px;" + "></b>");
                    $(config[0].selector[i].selector).append(item);
                    selectorArr.push([]) } } var msgBtnTest = $(config[0].msgBtn).val(); var msgTest = "重新获取"; var fnc = (function() { return { verification: function() { for (var i = 0; i < arr.length; i++) { if ($(arr[i].id.selector).siblings(lab).attr("class") != err && $(arr[i].id.selector).siblings(lab).attr("class") != cor) { if ($(arr[i].id.selector).val() == "") { $(arr[i].id.selector).siblings(lab).html(arr[i].reqTps || "请输入内容");
                                    $(arr[i].id.selector).siblings(lab).attr("class", err) } else { if (arr[i].min != undefined && $(arr[i].id.selector).val().length < arr[i].min) { $(arr[i].id.selector).siblings(lab).html(arr[i].minTps || "最小长度" + arr[i].min);
                                        $(arr[i].id.selector).siblings(lab).attr("class", err) } else { if (arr[i].max != undefined && $(arr[i].id.selector).val().length > arr[i].max) { $(arr[i].id.selector).siblings(lab).html(arr[i].maxTps || "最大长度" + arr[i].max);
                                            $(arr[i].id.selector).siblings(lab).attr("class", err) } else { if (arr[i].equally != undefined && $(arr[i].id.selector).val() != $(arr[i].equally.selector).val()) { $(arr[i].id.selector).siblings(lab).html(arr[i].equallyTps || "两个不一样");
                                                $(arr[i].id.selector).siblings(lab).attr("class", err);
                                                $(arr[i].equally.selector).siblings(lab).attr("class", err) } else { if (arr[i].customRule != undefined && !arr[i].customRule.test($(arr[i].id.selector).val())) { $(arr[i].id.selector).siblings(lab).html(arr[i].customRuvarps || "自定义正则提示");
                                                    $(arr[i].id.selector).siblings(lab).attr("class", err) } else { $(arr[i].id.selector).siblings(lab).html(config[0].corTps || ""); if (arr[i].equally != undefined && $(arr[i].id.selector).val() == $(arr[i].equally.selector).val()) { $(arr[i].id.selector).siblings(lab).html(config[0].corTps || "");
                                                        $(arr[i].equally.selector).siblings(lab).html(config[0].corTps || "");
                                                        $(arr[i].equally.selector).siblings(lab).attr("class", cor) } if (arr[i].fn != undefined && typeof arr[i].fn === "function") { arr[i].fn() } else { $(arr[i].id.selector).siblings(lab).attr("class", cor) } } } } } } } else { if (arr[i].equally != undefined && arr[i].customRule != undefined && !arr[i].customRule.test($(arr[i].id.selector).val())) { $(arr[i].id.selector).siblings(lab).html(arr[i].customRuvarps || "自定义正则提示");
                                    $(arr[i].id.selector).siblings(lab).attr("class", err) } } } if (config[0].checkbox != undefined) { for (var i = 0; i < checkboxArr.length; i++) { checkboxArr[i] = [];
                                isCheckboxArr[i] = [0] } for (var i = 0; i < $(config[0].checkbox).length; i++) { for (var j = 0; j < $(config[0].checkbox[i].selector).find("input").length; j++) { if ($(config[0].checkbox[i].selector).find("input").eq(j).prop("checked")) { checkboxArr[i].push(1) } else { checkboxArr[i].push(0);
                                        isCheckboxArr[i]++ } } } for (var i = 0; i < isCheckboxArr.length; i++) { if (isCheckboxArr[i] == checkboxArr[i].length) { $(config[0].checkbox[i]).find($("b").attr("data-id", "vali")).html(config[0].checkboxTps[i] || "请选择多选框");
                                    $(config[0].checkbox[i]).find($("b").attr("data-id", "vali")).attr("class", err) } else { $(config[0].checkbox[i]).find($("b").attr("data-id", "vali")).html(config[0].corTps || "");
                                    $(config[0].checkbox[i]).find($("b").attr("data-id", "vali")).attr("class", cor) } } } if (config[0].selector != undefined) { for (var i = 0; i < selectorArr.length; i++) { selectorArr[i] = [] } for (var i = 0; i < config[0].selector.length; i++) { if ($(config[0].selector[i]).find("option:selected").val() == 0 || $(config[0].selector[i]).find("option:selected").val() == "") { $(config[0].selector[i]).find($("b").attr("data-id", "vali")).html(config[0].selectorTps[i] || "请选择下拉框");
                                    $(config[0].selector[i]).find($("b").attr("data-id", "vali")).attr("class", err) } else { $(config[0].selector[i].selector).find($("b").attr("data-id", "vali")).html(config[0].corTps || "");
                                    $(config[0].selector[i].selector).find($("b").attr("data-id", "vali")).attr("class", cor);
                                    selectorArr[i].push($(config[0].selector[i]).find("option:selected").text()) } } } }, verif: function(i) { var m = $(this); var idx = i; if (arr[i].equally != undefined) { if ($(arr[i].id.selector).val() != $(arr[i].equally.selector).val()) { m.siblings(lab).html(arr[i].equallyTps || "两个不一样");
                                $(arr[i].equally.selector).siblings().html(arr[i].equallyTps || "两个不一样");
                                $(arr[i].equally.selector).siblings(lab).attr("class", err);
                                m.siblings(lab).attr("class", err) } } if (m.val() == "" && m.siblings(lab).attr("class") == err || m.val() == "") { m.siblings(lab).html(tps[i].reqTps || "请输入内容");
                            m.siblings(lab).attr("class", err) } else { if (arr[i].min != undefined && $(arr[i].id.selector).val().length < arr[i].min) { m.siblings(lab).html(arr[i].minTps || "最小长度" + arr[i].min);
                                m.siblings(lab).attr("class", err) } else { if (arr[i].max != undefined && $(arr[i].id.selector).val().length > arr[i].max) { m.siblings(lab).html(arr[i].maxTps || "最大长度" + arr[i].max);
                                    m.siblings(lab).attr("class", err) } else { if (arr[i].customRule != undefined && !arr[i].customRule.test($(arr[i].id.selector).val())) { m.siblings(lab).html(tps[i].customRuvarps || tps[i].reqTps || "自定义正则提示");
                                        m.siblings(lab).attr("class", err) } else { if (arr[i].isCor == undefined) { m.siblings(lab).html(config[0].corTps || "") } else { m.siblings(lab).html("") } if (arr[i].equally != undefined && $(arr[i].id).val() == $(arr[i].equally).val()) { $(arr[i].id.selector).siblings(lab).html(config[0].corTps || "");
                                            $(arr[i].equally.selector).siblings(lab).html(config[0].corTps || "");
                                            $(arr[i].equally.selector).siblings(lab).attr("class", cor);
                                            $(arr[i].id).siblings(lab).attr("class", cor) } if (arr[i].fn != undefined && typeof arr[i].fn === "function" && arr[i].equally == undefined) { arr[i].fn() } else { $(arr[i].id).siblings(lab).attr("class", cor);
                                            m.siblings(lab).attr("class", cor) } if (person[i].isCor != undefined && m.val() != "" && arr[i].fn !== undefined && typeof arr[i].fn !== " function" && arr[i].equally == undefined) { m.attr("disabled", true);
                                            observe(person[i], "reqTps", person.reqTps, m);
                                            observe1(person[i], "isCor", person.isCor, m, person[i].isPhone) } } } } } }, msg: function() { var m = $(this); var a = config[0].msgBtnDate || 60;
                        m.val(a + "S"); var ti = null; if (msgBtnIsClick == true) { msgBtnIsClick = false;
                            clearTimeout(ti);
                            ti = setInterval(yz, 1000);
                            $(config[0].msgBtn).css("color", "#888") }

                        function yz() { a--; if (a < 0) { a = 0;
                                m.val(msgTest); if (config[0].msgPhoneId != undefined && $(config[0].msgPhoneId).siblings(lab).attr("class") == cor) { $(config[0].msgBtn).css("color", "");
                                    msgBtnIsClick = true } else { $(config[0].msgBtn).css("color", "#888");
                                    msgBtnIsClick = false }
                                clearTimeout(ti) } else { m.val(a + "S") } } } } })();

            function observe(obj, prop, val, t) { Object.defineProperty(obj, prop, { get: function() { return val }, set: function(newVal) { val = newVal;
                        t.siblings(lab).html(newVal) } }) }

            function observe1(obj, prop, val, t, isPhone) { Object.defineProperty(obj, prop, { get: function() { t.siblings(lab).html("");
                        t.siblings(lab).attr("class", err); return val }, set: function(newVal) { val = newVal; if (newVal) { t.siblings(lab).attr("class", cor);
                            t.attr("disabled", false); if (isPhone && $(config[0].msgBtn).val() == msgBtnTest || $(config[0].msgBtn).val() == msgTest) { $(config[0].msgBtn).css("color", "");
                                msgBtnIsClick = true } else { if (isPhone != true && isPhone != undefined) { $(config[0].msgBtn).css("color", "#888");
                                    msgBtnIsClick = false } } } else { t.siblings(lab).attr("class", err) } } }) } for (var i = 0; i < arr.length; i++) {
                (function(i) { $(arr[i].id.selector).on("blur", function() { fnc.verif.apply($(this), [i]); if (arr[i].id.selector == config[0].msgPhoneId.selector) { if (config[0].msgPhoneId != undefined && $(config[0].msgPhoneId).siblings(lab).attr("class") == cor && $(config[0].msgBtn).val() == msgBtnTest || config[0].msgPhoneId != undefined && $(config[0].msgPhoneId).siblings(lab).attr("class") == cor && $(config[0].msgBtn).val() == msgTest) { $(config[0].msgBtn).css("color", "");
                                msgBtnIsClick = true } else { $(config[0].msgBtn).css("color", "#888");
                                msgBtnIsClick = false } } }) }(i)) } if (msgBtnIsClick == false) { $(config[0].msgBtn).css("color", "#888") }
            $(config[0].msgBtn).on("click", function() { if (msgBtnIsClick == true) { fnc.msg.apply($(this));
                    config[0].msgFnc() } }); var isSub = true;
            $(config[0].submitBtn).on("click", function() { if (isSub) { fnc.verification(); var cunt = 0; for (var i = 0; i < arr.length; i++) { if ($(arr[i].id).siblings(lab).hasClass(cor)) { cunt++ } } if (config[0].checkbox != undefined) { for (var i = 0; i < config[0].checkbox.length; i++) { if (!$(config[0].checkbox[i].selector).children("b").hasClass(cor)) { return false } } } if (config[0].selector != undefined) { for (var i = 0; i < config[0].selector.length; i++) { if (!$(config[0].selector[i].selector).children("b").hasClass(cor)) { return false } } } if (cunt != arr.length) { return false }
                    isSub = false; if (config[0].isSubmit != undefined && $($(config[0].submitBtn).selector).attr("type") == "submit") { observe2(config[0], "isSubmit", config.isSubmit);
                        config[0].submitFnc() } else { if ($(config[0].submitBtn.selector).attr("type") == "submit" && config[0].isSubmit == undefined) { $(config[0].submitForm).submit() } else { if (typeof config[0].submitFnc === "function" && config[0].submitFnc !== undefined) { ijson1(arr);
                                observe2(config[0], "isSubmit", config.isSubmit);
                                config[0].submitFnc(ijson1(arr), checkboxArr, selectorArr) } } } } return false });

            function ijson1(arr) { var arr1 = []; for (i in arr) { arr1.push({ val: $(arr[i].id).val(), }) } return arr1 }

            function observe2(obj, prop, val) { Object.defineProperty(obj, prop, { get: function() { return val }, set: function(newVal) { val = newVal; if (newVal) { isSub = true; if (config[0].subMode == "submit") { $(config[0].submitForm).submit() } } } }) } } }) })($);