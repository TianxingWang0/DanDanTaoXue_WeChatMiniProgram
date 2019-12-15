<?php
/*
defined('BASEPATH') OR exit('No direct script access allowed');

use \QCloud_WeApp_SDK\Auth\LoginService as LoginService;
use QCloud_WeApp_SDK\Constants as Constants;

class User extends CI_Controller {
    public function index() {
        $result = LoginService::check();

        if ($result['loginState'] === Constants::S_AUTH) {
            $this->json([
                'code' => 0,
                'data' => $result['userinfo']
            ]);
        } else {
            $this->json([
                'code' => -1,
                'data' => []
            ]);
        }
    }



}
*/
	header('Content-type:text/json');
	$data = "1、由于时间仓促，版本1.0在排版布局、功能部件上有很多不足，随着时间推进，新的更加完善的版本会不断推出。\n2、我们是复旦大学TWTS课程第二小组，此小程序和同名微信公众号是我们的课程项目，了解跟多信息，请搜索微信公众号“旦旦淘学”。";
	echo json_encode($data, JSON_UNESCAPED_UNICODE);

?>