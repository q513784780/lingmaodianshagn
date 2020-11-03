var Mock=require("mockjs");
// 设置请求的地址 方式 数据
Mock.mock('/\/api\/msdk\/proxy\/query_common_credit/', {
    "ret":0,
    "data":
      {
        "mtime": "@datetime",//随机生成日期时间
        "score|1-800": 800,//随机生成1-800的数字
        "rank|1-100":  100,//随机生成1-100的数字
        "stars|1-5": 5,//随机生成1-5的数字
        "nickname": "@cname",//随机生成中文名字
      }
//data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
});
// 合作品牌
Mock.mock("/hezuopinpai","get",require("./hezuopinpai.json"));
Mock.mock("/hezuopinpaia","get",require("./hezuopinpaia.json"));
Mock.mock("/hezuopinpaib","get",require("./hezuopinpaib.json"));
Mock.mock("/hezuopinpaic","get",require("./hezuopinpaic.json"));
Mock.mock("/hezuopinpaid","get",require("./hezuopinpaid.json"));

Mock.mock("/fuzhuang","get",require("./fuzhuang.json"));
Mock.mock("/fuzhuanga","get",require("./fuzhuanga.json"));
Mock.mock("/shipin","get",require("./shipin.json"));
Mock.mock("/jiajian","get",require("./jiajian.json"));
Mock.mock("/jiayong","get",require("./jiayong.json"));
Mock.mock("/muying","get",require("./muying.json"));
Mock.mock("/shuma","get",require("./shuma.json"));
Mock.mock("/zhubao","get",require("./zhubao.json"));
Mock.mock("/huazhuang","get",require("./huazhuang.json"));
Mock.mock("/xiangbao","get",require("./xiangbao.json"));
Mock.mock("/neiyi","get",require("./neiyi.json"));
Mock.mock("/shoes","get",require("./shoes.json"));
Mock.mock("/hotel","get",require("./hotel.json"));




Mock.mock("/new","get",require("./new.json"));
Mock.mock("/report","get",require("./report.json"));
Mock.mock("/information","get",require("./information.json"));
Mock.mock("/problem","get",require("./problem.json"));
Mock.mock("/point","get",require("./point.json"));

