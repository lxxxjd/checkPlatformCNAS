(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{"0Fdr":function(e,a,t){"use strict";t.r(a);var r=t("p0pE"),n=t.n(r),s=t("d6i3"),c=t.n(s),u=t("dCQc"),l=t("k9Yu"),p=t("34ay"),i=t("HZnN");a["default"]={namespace:"register",state:{status:void 0,checkUserNameResult:{},verifyResult:{},verifyTelResult:{},registerPreCompanyResult:{}},effects:{submit:c.a.mark(function e(a,t){var r,n,s,l;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,s=t.put,e.next=4,n(u["c"],r);case 4:return l=e.sent,e.next=7,s({type:"registerHandle",payload:l});case 7:case"end":return e.stop()}},e)}),sendVerify:c.a.mark(function e(a,t){var r,n,s,u,p;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,s=t.call,u=t.put,e.next=4,s(l["f"],r);case 4:return p=e.sent,e.next=7,u({type:"sendVerifyResult",payload:p});case 7:n&&n(p.data);case 8:case"end":return e.stop()}},e)}),verifyTel:c.a.mark(function e(a,t){var r,n,s,u,p;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,s=t.call,u=t.put,e.next=4,s(l["h"],r);case 4:return p=e.sent,e.next=7,u({type:"getVerifyTelResult",payload:p});case 7:n&&n(p.data);case 8:case"end":return e.stop()}},e)}),getRepeatUsername:c.a.mark(function e(a,t){var r,n,s,u;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,s=t.call,t.put,e.next=4,s(l["c"],r);case 4:u=e.sent,n&&n(u.data);case 6:case"end":return e.stop()}},e)}),getRepeatTel:c.a.mark(function e(a,t){var r,n,s,u;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,s=t.call,t.put,e.next=4,s(l["b"],r);case 4:u=e.sent,n&&n(u.data);case 6:case"end":return e.stop()}},e)}),updateCnasuser:c.a.mark(function e(a,t){var r,n,s,u;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,s=t.call,t.put,e.next=4,s(l["g"],r);case 4:u=e.sent,n&&n(u);case 6:case"end":return e.stop()}},e)}),addCnasuser:c.a.mark(function e(a,t){var r,n,s,u,p;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,s=t.call,u=t.put,e.next=4,s(l["a"],r);case 4:return p=e.sent,e.next=7,u({type:"registerPreCompanyResult",payload:p});case 7:n&&n(p.data);case 8:case"end":return e.stop()}},e)})},reducers:{registerHandle:function(e,a){var t=a.payload;return Object(p["b"])("user"),Object(i["b"])(),n()({},e,{status:t.status})},getCheckUserNameResult:function(e,a){var t=a.payload;return n()({},e,{checkUserNameResult:t.data})},sendVerifyResult:function(e,a){var t=a.payload;return n()({},e,{verifyResult:t.data})},getVerifyTelResult:function(e,a){var t=a.payload;return n()({},e,{verifyTelResult:t.data})},registerPreCompanyResult:function(e,a){var t=a.payload;return n()({},e,{registerPreCompanyResult:t.data})}}}}}]);