import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=>import ('@/views/Home')
const Online = ()=>import ('@/views/Online')
const Hot = ()=>import ('@/views/Hot')
const Live = ()=>import ('@/views/Live')
// import Home from '@/views/Home'
// import Online from '@/views/Online'
// import Hot from '@/views/Hot'
// import Live from '@/views/Live'

const Anli = ()=>import ('@/views/Home/Anli')
const Feisifu = ()=>import ('@/views/Home/Feisifu')
const Dashiji = ()=>import ('@/views/Home/Dashiji')
const Dashijifive = ()=>import ('@/views/Home/Dashijifive')
const Dashijisix = ()=>import ('@/views/Home/Dashijisix')
const Dashijiseven = ()=>import ('@/views/Home/Dashijiseven')
const Travel = ()=>import ('@/views/Home/Travel')
const Culture = ()=>import ('@/views/Home/Culture')
// import Anli from '@/views/Home/Anli'
// import Feisifu from '@/views/Home/Feisifu'
// import Dashiji from '@/views/Home/Dashiji'
// import Culture from '@/views/Home/Culture'

//8个菜单
// 这一部分是使用了路由的懒加载
const Kefuwaibao = ()=>import ('@/views/menu/Kefuwaibao')
const Wangdiantuoguan = ()=>import ('@/views/menu/Wangdiantuoguan')
const Zhibotuoguan = ()=>import ('@/views/menu/Zhibotuoguan')
const Zhitongchetuoguan = ()=>import ('@/views/menu/Zhitongchetuoguan')
const Wangdianzhaungxiu = ()=>import ('@/views/menu/Wangdianzhaungxiu')
const Chanpinpaishe = ()=>import ('@/views/menu/Chanpinpaishe')
const Pinpaisheji = ()=>import ('@/views/menu/Pinpaisheji')
const Wangzhanjianshe = ()=>import ('@/views/menu/Wangzhanjianshe')
// import Kefuwaibao from '@/views/menu/Kefuwaibao'
// import Wangdiantuoguan from '@/views/menu/Wangdiantuoguan'
// import Zhibotuoguan from '@/views/menu/Zhibotuoguan'
// import Zhitongchetuoguan from '@/views/menu/Zhitongchetuoguan'
// import Wangdianzhaungxiu from '@/views/menu/Wangdianzhaungxiu'
// import Chanpinpaishe from '@/views/menu/Chanpinpaishe'
// import Pinpaisheji from '@/views/menu/Pinpaisheji'
// import Wangzhanjianshe from '@/views/menu/Wangzhanjianshe'


const Anlimore = ()=>import ('@/views/Home/Anlimore')
const Videomore = ()=>import ('@/views/Home/Videomore')
const Hezuomore = ()=>import ('@/views/Home/Hezuomore')
const Activemore = ()=>import ('@/views/Home/Activemore')
// import Anlimore from '@/views/Home/Anlimore'
// import Videomore from '@/views/Home/Videomore'
// import Hezuomore from '@/views/Home/Hezuomore'
// import Activemore from '@/views/Home/Activemore'


// 经典案列
const Fuzhuang = ()=>import ('@/views/Case/Fuzhuang')
const Shipin = ()=>import ('@/views/Case/Shipin')
const Muying = ()=>import ('@/views/Case/Muying')
const Shuma = ()=>import ('@/views/Case/Shuma')
const Jiajian = ()=>import ('@/views/Case/Jiajian')
const Jiayong = ()=>import ('@/views/Case/Jiayong')
const Zhubao = ()=>import ('@/views/Case/Zhubao')
const Huazhuang = ()=>import ('@/views/Case/Huazhuang')
const Xiangbao = ()=>import ('@/views/Case/Xiangbao')
const Neiyi = ()=>import ('@/views/Case/Neiyi')
const Shoes = ()=>import ('@/views/Case/Shoes')
const Hotel = ()=>import ('@/views/Case/Hotel')
// import Fuzhuang from '@/views/Case/Fuzhuang'
// import Shipin from '@/views/Case/Shipin'
// import Muying from '@/views/Case/Muying'
// import Shuma from '@/views/Case/Shuma'
// import Jiajian from '@/views/Case/Jiajian'
// import Jiayong from '@/views/Case/Jiayong'

// 详情页
const Xiangqing = ()=>import ('@/views/Er/Xiangqing')
// import Xiangqing from '@/views/Er/Xiangqing'
// import Xiangqingshipin from '@/views/Er/Xiangqingshipin'
// import Xiangqingmuying from '@/views/Er/Xiangqingmuying'
// import Xiangqingshuma from '@/views/Er/Xiangqingshuma'

//新闻详情页展示
const Newsde = ()=>import ('@/views/Active/Newsde')
const Newsdes = ()=>import ('@/views/Active/Newsdes')
// import Newsde from '@/views/Active/Newsde'
//新闻详情
const News = ()=>import ('@/views/Active/News')
const Report = ()=>import ('@/views/Active/Report')
const Information = ()=>import ('@/views/Active/Information')
const Problem = ()=>import ('@/views/Active/Problem')
const Point = ()=>import ('@/views/Active/Point')

// import News from '@/views/Active/News'
// import Report from '@/views/Active/Report'
// import Information from '@/views/Active/Information'
// import Problem from '@/views/Active/Problem'
// import Point from '@/views/Active/Point'


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
    meta: {
      keepAlive: true
    },

    children:[
      {path: '/anlimore/fuzhuang',name: 'fuzhuang', component: Fuzhuang},
      {path: '/anlimore/shipin',name: 'shipin',component: Shipin},
      {path: '/anlimore/muying',name: 'muying',component: Muying},
      {path: '/anlimore/shuma',name: 'shuma',component: Shuma},
      {path: '/anlimore/jiajian',name: 'jiajian',component: Jiajian},
      {path: '/anlimore/jiayong',name: 'jiayong',component: Jiayong},
      {path: '/anlimore/zhubao',name: 'zhubao',component: Zhubao},
      {path: '/anlimore/huazhuang',name: 'Huazhuang',component: Huazhuang},
      {path: '/anlimore/xiangbao',name: 'Xiangbao',component: Xiangbao},
      {path: '/anlimore/neiyi',name: 'Neiyi',component: Neiyi},
      {path: '/anlimore/shoes',name: 'Shoes',component: Shoes},
      {path: '/anlimore/hotel',name: 'Hotel',component: Hotel},
      {path: '/anlimore',redirect: '/anlimore/fuzhuang'}
    ]
  },
  {path: '/dashiji',name: 'Dashiji',component: Dashiji},
  {path: '/dashijifive',name: 'Dashijifive',component: Dashijifive},
  {path: '/dashijisix',name: 'Dashijisix',component: Dashijisix},
  {path: '/dashijiseven',name: 'Dashijiseven',component: Dashijiseven},
  {path: '/travel',name: 'Travel',component: Travel},
  {path: '/culture',name: 'Culture',component: Culture},


  {path: '/xiangqing/:wangjinid',name: 'Xiangqing',component: Xiangqing},

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
  {path: '/newsde/:wangjin',name: 'Newsde',component: Newsde},
  {path: '/newsdes/:wangjins',name: 'Newsdes',component: Newsdes},
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
