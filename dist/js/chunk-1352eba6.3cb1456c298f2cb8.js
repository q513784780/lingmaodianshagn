(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1352eba6"],{"0c12":function(t,n,e){"use strict";var a=e("0261");n["a"]=new a["default"]},"2cc9":function(t,n,e){},"33c4":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(t.arr,(function(n){return e("div",{key:n.image,staticClass:"center",on:{click:function(n){return t.fun()}}},[e("div",{staticClass:"image",on:{click:function(e){return t.handleClick(n.id)}}},[e("img",{attrs:{src:n.image,alt:""}})]),e("p",[t._v(t._s(n.text))]),e("div",{staticClass:"sheji"},[e("span",[t._v("设计师："+t._s(n.name))]),t._v(" "),e("van-tag",{staticClass:"right",attrs:{mark:"",type:"success"}},[t._v("找她做设计")])],1)])})),0)},i=[],c=e("70ea"),r=e("0c12"),s=Object(c["a"])({data:function(){return{arr:[]}},components:{},created:function(){var t=this;this.axios({url:"/shoes",method:"get"}).then((function(n){t.arr=n.data}))},beforeDestroy:function(){r["a"].$emit("fuzhuang",this.arr)},methods:{handleClick:function(t){this.$router.push("/xiangqing/".concat(t))},fun:function(){r["a"].$emit("fuzhuang",this.arr)}}},"components",{}),u=s,o=(e("e09a"),e("4023")),f=Object(o["a"])(u,a,i,!1,null,"65f4279f",null);n["default"]=f.exports},"70ea":function(t,n,e){"use strict";function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return a}))},e09a:function(t,n,e){"use strict";var a=e("2cc9"),i=e.n(a);i.a}}]);