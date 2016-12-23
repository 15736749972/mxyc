/**
 * Created by liu on 2016/11/12.
 */
//解析数据
//声明构造函数。批量生产对象
function objc_bbs(name,id,nn,sex,level,content,time,header) {
                           this.uname=name;
                           this.uid=id;
                           this.unikename=nn;
                           this.usex=sex;
                           this.ulevel=level;
                           this.uspeak=content;
                           this.utime=time;
                           this.uheader=header;
                           this.bbs_back=function () {

                           }
                       };