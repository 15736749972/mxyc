/**
 * Created by liu on 2016/11/10.
 */
//用户名填写字段判断
    var flag=false,flag1=false;
    function check(obj) {
        if (obj.val().length!=0){
            //判断格式只能为手机号和邮箱
            var tel=/^(\+86){0,1}1[3|8|5|7]\d{9}$/;
            var mail=/^\w{2,10}@\w{1,10}.[a-z]{2,4}$/;
            if(tel.test(obj.val())||mail.test(obj.val())){
                flag=true;
                return 'Y';
            }else {
                return '用户名格式不正确';
            }
        }else {
            return '用户名不能为空';
        }
    }
//密码填写字段判断
    function pass(obj) {
        if (obj.val().length!=0){
            //判断密码格式是6-16位，包括数字，字母，下划线
            var pa=/^(\w){6,16}$/;
            if(!pa.test(obj.val())){
                return '密码格式错误';
            }else {
                flag1=true;
                return 'Y';
            }
        }else {
            return '密码不能为空 ';
        }
    }
