<?php
header('Content-Type:application/json;charset=utf-8');
header('Access-Control-Allow-Origin:*');
 header('Access-Control-Allow-Methods:POST,GET');

// define(DB_HOST, 'localhost');
// define(DB_USER, 'root');
// define(DB_PASS, 'root');
// define(DB_DATABASENAME, 'homeData');
// define(DB_TABLENAME, 'userTable');


//判断当前请求方式
if($_SERVER['REQUEST_METHOD'] == 'GET'){
    get_http_request();
}elseif($_SERVER['REQUEST_METHOD'] == 'POST'){
    post_http_request();
}



function get_http_request(){

	if(!isset($_GET['token']) || empty($_GET['token'])){
        echo '{"msg":"参数错误，填写信息不全"}';
        return;
    }


    $utoken = $_GET['token'];


    #验证token
    @mysql_connect('localhost','root','root') or die('数据库连接失败!!!' . mysql_error());
    @mysql_select_db('projectstudy') or die('选择数据库失败!!!!');

    $sql = "select * from user where token = '". $utoken ."';";

    $result = @mysql_query($sql);
    $find = @mysql_num_rows($result);
    if ($find) {#找到数据
    	#OK之后发数据

		$contents = json_data();
		if ($contents) {
			echo $contents;
		}
    	
    }else{
    	echo '{"msg":"token 错误！！！数据库无数据"}'; 
    }


    

}

function post_http_request(){

	if ($_POST['type'] == 0) {#注册
		// echo '{"msg":"恭喜注册成功","success":true}';
		//对post参数进行 判断
        if(!isset($_POST['uname']) || empty($_POST['uname']) || !isset($_POST['upassword']) || empty($_POST['upassword'])){
                echo '{"msg":"参数错误，填写信息不全"}';
                return;
        }



        @mysql_connect('localhost','root','root') or die('数据库连接失败!!!' . mysql_error());

        @mysql_select_db('projectstudy') or die('选择数据库失败!!!!');

        $db_cols = array('name','id','password','sex');

        $username = $_POST['uname'];
        $password = $_POST['upassword'];
        $nikename = $_POST['unikename'];
        //$age = $_POST['uage'];
        //$id = $_POST['uid'];
        $sex = $_POST['usex'];

  //       echo '{"msg":"恭喜注册成功","success":true}';

        #读取表中的纪录
        // $sql = sprintf('select * from %s where name = %s;','user','box');
        $sql = "select * from user where name = '". $username ."';";

        $result = @mysql_query($sql);

        $find = @mysql_num_rows($result);

        if ($find) {
        	echo '{"msg":"用户名已存在，请使用其它!","success":false}';
        }else{
 
        	$sql = "insert into user(name,password,nikename,sex) values('". $username ."','". $password ."','". $nikename ."','". $sex ."');";
        	$ret = @mysql_query($sql);
        	if ($ret) {
        		// echo '{"msg":"恭喜用户名可以使用!","success":true}';
        		echo '{"msg":"恭喜注册成功,请登录","success":true}';
        		//echo '{"url":"http://localhost/projectstudy/views/login.html","success":true}';
        	}else{
        		die('数据库连接失败!!!' . mysql_error());
        		echo '{"msg":"写入失败","success":false}';
        	}

        	
        }



	}elseif($_POST['type'] == 1) {#登录
		//对post参数进行 判断
        if(!isset($_POST['uname']) || empty($_POST['uname']) || !isset($_POST['upassword']) || empty($_POST['upassword'])){
                echo '{"msg":"参数错误，填写信息不全"}';
                return;
        }

        @mysql_connect('localhost','root','root') or die('数据库连接失败!!!' . mysql_error());

        @mysql_select_db('projectstudy') or die('选择数据库失败!!!!');

        $username = $_POST['uname'];
        $upassword = $_POST['upassword'];

        //先检查用户名 和 密码是否正确
        $sql = "select * from user where name = '". $username . "' and password = '" . $upassword ."';";
        // echo $sql;
        $result = @mysql_query($sql);
        $find = @mysql_num_rows($result);
        if ($find) {


        	// while ($row = @mysql_fetch_array($result)) {
        	// 	echo 'token:'.$row['token'];
        	// }
        	// echo 'find';
        	$ctoken = $username."=".$upassword;
        	$sql = "update user SET token = '" . $ctoken . "' where name = '" . $username ."';";
        	$ret = @mysql_query($sql);
        	if ($ret) {
        		
        		echo '{"msg":"登录成功!","success":true,"token":"'.$ctoken.'"}';
        		//echo '{"url":"http://localhost/projectstudy/video.html","success":true,"token":"'.$ctoken.'"}';

        	}else{
        		$msgstr = "登录失败," + die('数据库连接失败!!!' . mysql_error());
        		echo '{"msg": "'. $msgstr .'" ,"success":false}';
        		// "$msgstr"
        	}


        }else{
        	echo '{"msg":"用户名/密码错误,请重新输入","success":false}';
        	return;
        }






        // // $sql = "select * from user where name = '". $username . "' and password = '" . $upassword ."';";
        // $sql = "select * from user where token = '". $utoken ."';";
        // // echo $sql;
        // $result = @mysql_query($sql);
        // $find = @mysql_num_rows($result);
        // if ($find) {

        // 	#写入token
        // 	// $sql = "insert into user(name,password,nikename,sex) values('". $username ."','". $password ."','". $nikename ."','". $sex ."');";

        // 	$sql = "update user SET token = '" . $utoken . "' where name = '" . $username ."';";

        // 	$ret = @mysql_query($sql);
        // 	if ($ret) {
        // 		echo '{"msg":"登录成功!","success":true}';
        // 	}else{
        // 		$msgstr = "登录失败," + die('数据库连接失败!!!' . mysql_error());
        // 		echo '{"msg": msgstr ,"success":false}';
        // 	}

	}elseif($_POST['type'] == 2) {
		# code...
        //type=2是为了验证用户名是否已存在数据库中
        if(!isset($_POST['uname'])||empty($_POST['uname'])){
            echo '{"msg":"填写信息不全！"}';
            return;
        }
        //查询
       @mysql_connect('localhost','root','root') or die('数据库连接失败!!!' . mysql_error());

              @mysql_select_db('projectstudy') or die('选择数据库失败!!!!');

               $username = $_POST['uname'];
                $sql = "select * from user where name = '". $username . "';";
                       // echo $sql;
                       $result = @mysql_query($sql);
                       $find = @mysql_num_rows($result);
                        if($find){
                        echo '{"msg":"用户名已存在，请换一个","type":2,"success":false}';
                     }else{
                        echo '{"msg":"恭喜可以使用","type":2,"success":true}';
                     }
    }

  }
 function json_data(){
             $contents = '{"success":"true","bbs":[{"userid" : "10001","content" :"咩...哥哥给我两根金条，因为我要赢,我觉得我们彼此应该多一些信任,哥哥，他是男的,我还只是个孩子！我是搞形体的。","time" : "2012-11-09 10:00","level" : "0","username" : "张艺兴","usericon" : "/data/images/10001.jpg","nikename" : "小绵羊","sex" : "M"},{"userid" : "10002","content" : "你大爷的,登上巅峰，就要疯癫一点,红雷今天你颜值也不好使了，颜值王简称颜王。你（孙红雷）智商够用嘛。这个在路边的总可以拿吧。房子也在路边呢。","time" : "2012-11-09 09:01","level" : "10","username" : "黄磊","usericon" : "/data/images/10002.jpg","nikename" : "神算子","sex" : "M"},{
              "userid" : "10003",
               "content" : "你（孙红雷）不拿把枪我也觉得你是个坏蛋。王迅已经是盘中餐啦，随便咽一下就可以。嫂夫人是不是特善良？艺兴这孩子太乖了，我来抱一下。你不拿把枪我也觉得你是个坏蛋。这可万万使不得啊!草民进来了以后，被您倾国倾城沉鱼落雁的颜值吓到不说，万一再行为不轨，把您的脸给挖了，吐了一地，这可如何是好啊",
                 "time" : "2012-11-09 09:02",
                   "level" : "10",
                   "username" : "黄渤",
                  "usericon" : "/data/images/10003.jpg",
                 "nikename" : "坏叔叔",
               "sex" : "M"
           },
                             	{
                                   "userid" : "10004",
                                   "content" : "下雨天我好想你，你真是个土匪，幸好当演员了，你干别的对社会一点好处都没有，今日乃颜值国大喜之日，打开城门让百姓都进宫来。",
                                   "time" : "2012-11-09 08:02",
                                   "level" : "9",
                                   "username" : "孙红雷",
                                   "usericon" : "/data/images/10004.jpg",
                                   "nikename" : "颜值王",
                                   "sex" : "M"
                                 },
                             	{
                                   "userid" : "10005",
                                   "content" : "车上有炸弹，我们开车跑吧,我好难得帅一次。红雷哥，你睁大眼睛看我今天帅吗?国师的屁股本来就不翘，再打两下。。。。",
                                   "time" : "2012-11-09 08:04",
                                   "level" : "6",
                                   "username" : "王迅",
                                   "usericon" : "/data/images/10005.jpg",
                                   "nikename" : "抠门迅",
                                   "sex" : "M"
                                 },
                             	{
                                   "userid" : "10006",
                                   "content" : "我们不能报警，我们不能抱紧紧。我现在还在桥上……想跳下去……",
                                   "time" : "2012-11-09 08:04",
                                   "level" : "8",
                                   "username" : "罗志祥",
                                   "usericon" : "/data/images/10006.jpg",
                                   "nikename" : "怪笑猪",
                                   "sex" : "M"
                                 }]}';

                                 return $contents;
                        }


