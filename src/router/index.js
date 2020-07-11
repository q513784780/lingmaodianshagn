import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Online from '@/views/Online'
import Hot from '@/views/Hot'
import Live from '@/views/Live'
import Anli from '@/views/Home/Anli'
import Feisifu from '@/views/Home/Feisifu'
import Dashiji from '@/views/Home/Dashiji'

//8个菜单
import Kefuwaibao from '@/views/menu/Kefuwaibao'
import Wangdiantuoguan from '@/views/menu/Wangdiantuoguan'
import Zhibotuoguan from '@/views/menu/Zhibotuoguan'
import Zhitongchetuoguan from '@/views/menu/Zhitongchetuoguan'
import Wangdianzhaungxiu from '@/views/menu/Wangdianzhaungxiu'
import Chanpinpaishe from '@/views/menu/Chanpinpaishe'
import Pinpaisheji from '@/views/menu/Pinpaisheji'
import Wangzhanjianshe from '@/views/menu/Wangzhanjianshe'



import Anlimore from '@/views/Home/Anlimore'
import Videomore from '@/views/Home/Videomore'
import Hezuomore from '@/views/Home/Hezuomore'
import Activemore from '@/views/Home/Activemore'
// 经典案列
import Fuzhuang from '@/views/Case/Fuzhuang'
import Shipin from '@/views/Case/Shipin'
import Muying from '@/views/Case/Muying'
import Shuma from '@/views/Case/Shuma'
import Jiajian from '@/views/Case/Jiajian'
import Jiayong from '@/views/Case/Jiayong'
// 详情页
import Xiangqing from '@/views/Er/Xiangqing'
import Xiangqingshipin from '@/views/Er/Xiangqingshipin'
import Xiangqingmuying from '@/views/Er/Xiangqingmuying'
import Xiangqingshuma from '@/views/Er/Xiangqingshuma'
//新闻详情
import Newsde from '@/views/Active/Newsde'
import News from '@/views/Active/News'
import Report from '@/views/Active/Report'
import Information from '@/views/Active/Information'
import Problem from '@/views/Active/Problem'
import Point from '@/views/Active/Point'


Vue.use(VueRouter)

  const routes = [ 
  {path: '/home',name: 'Home',component: Home},
  {path: '/online',name: 'Online',component: Online},
  {path: '/hot',name: 'Hot',component: Hot},
  {path: '/live',name: 'Live',component: Live},
  

  {path: '/kefuwaibao',name: 'Kefuwaibao',component: Kefuwaibao},
  {path: '/wangdiantuoguan',name: 'Wangdiantuoguan',component: Wangdiantuoguan},
  {path: '/zhibotuoguan',name: 'Zhibotuoguan',component: Zhibotuoguan},
  {path: '/zhitongchetuoguan',name: 'Zhitongchetuoguan',component: Zhitongchetuoguan},
  {path: '/wangdianzhaungxiu',name: 'Wangdianzhaungxiu',component: Wangdianzhaungxiu},
  {path: '/chanpinpaishe',name: 'Chanpinpaishe',component: Chanpinpaishe},
  {path: '/pinpaisheji',name: 'Pinpaisheji',component: Pinpaisheji},

  {path: '/wangzhanjianshe',name: 'Wangzhanjianshe',component: Wangzhanjianshe},



  // 经典案例的详情页面
  {path: '/anli',name: 'Anli',component: Anli},
  {path: '/feisifu',name: 'Feisifu',component: Feisifu},
  {
    path: '/anlimore',
    name: 'Anlimore',
    component: Anlimore,
    children:[
      {path: '/anlimore/fuzhuang',name: 'fuzhuang',component: Fuzhuang},
      {path: '/anlimore/shipin',name: 'shipin',component: Shipin},
      {path: '/anlimore/muying',name: 'muying',component: Muying},
      {path: '/anlimore/shuma',name: 'shuma',component: Shuma},
      {path: '/anlimore/jiajian',name: 'jiajian',component: Jiajian},
      {path: '/anlimore/jiayong',name: 'jiayong',component: Jiayong},
      {path: '/anlimore',redirect: '/anlimore/fuzhuang'}
    ]
  },
  {path: '/dashiji',name: 'Dashiji',component: Dashiji},


  {path: '/xiangqing/:wangjinid',name: 'Xiangqing',component: Xiangqing},
  {path: '/xiangqingshipin/:wangjinid',name: 'Xiangqingshipin',component: Xiangqingshipin},
  {path: '/xiangqingmuying/:wangjinid',name: 'Xiangqingmuying',component: Xiangqingmuying},
  {path: '/xiangqingshuma/:wangjinid',name: 'Xiangqingshuma',component: Xiangqingshuma},


  {path: '/videomore',name: 'Videomore',component: Videomore},
  {path: '/hezuomore',name: 'Hezuomore',component: Hezuomore},
  {
    path: '/activemore',
    name: 'Activemore',
    component: Activemore,
    children:[
      {path: '/activemore/news',name: 'news',component: News},
      {path: '/activemore/report',name: 'report',component: Report},
      {path: '/activemore/information',name: 'Information',component: Information},
      {path: '/activemore/problem',name: 'Problem',component: Problem},
      {path: '/activemore/point',name: 'Point',component: Point},
      {path: '/activemore',redirect: '/activemore/news'}
    ]
  },
  {path: '/newsde/:news',name: 'Newsde',component: Newsde},
  {path: '/',redirect: '/home'}]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0}
    }
  },
})

export default router
