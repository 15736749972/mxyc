/**
 * Created by liu on 2016/11/3.
 */
   //GET
    function getRequest(url,par,compl,err) {
        if(!url){
            return;
        }
        $.ajax({
            type:'GET',
            url:url+par,
            success:function (data) {
                if(data){
                   compl(data);
                }else {
                    err({msg:'没有数据'});
                }
            },
            error:function (jqXHR) {
                err({msg:'error:'+jqXHR.status});
            }
        });
    }

// });
function post(url,par,compl,err) {
    if(!url){
        return;
    }
    $.ajax({
        type:'POST',
        url:url,
        dataType:'json',
        data:par,
        success:function (data) {
            if(data){
               compl(data);
            }else {
               err({msg:'没有数据'});
            }
        },
        error:function (jqXHR) {
            err({msg:'error:'+jqXHR.status});
        }
    });
}

