(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{"+F/n":function(e,a,t){"use strict";t.r(a);t("IzEo");var s,r,o,n,i=t("bx4M"),l=(t("Q9mQ"),t("diRs")),c=(t("+L6B"),t("2/Rp")),p=(t("7Kak"),t("9yH6")),d=(t("5NDa"),t("5rEg")),m=(t("MXD1"),t("CFYs")),u=(t("2qtc"),t("kLXV")),g=(t("miYZ"),t("tsqr")),f=(t("/xke"),t("TeRw")),h=t("p0pE"),b=t.n(h),v=t("2Taf"),w=t.n(v),y=t("vZ4D"),E=t.n(y),S=t("l4Ni"),k=t.n(S),C=t("ujKo"),F=t.n(C),M=t("MhPg"),V=t.n(M),O=(t("y8nQ"),t("Vl3Y")),I=t("q1tI"),P=t.n(I),N=t("MuoO"),j=t("Y2fQ"),q=(t("zHco"),t("meQb")),D=t.n(q),J=(t("wd/R"),{ok:P.a.createElement("div",{className:D.a.success},P.a.createElement(j["FormattedMessage"],{id:"validation.password.strength.strong"})),pass:P.a.createElement("div",{className:D.a.warning},P.a.createElement(j["FormattedMessage"],{id:"validation.password.strength.medium"})),poor:P.a.createElement("div",{className:D.a.error},P.a.createElement(j["FormattedMessage"],{id:"validation.password.strength.short"}))}),x={ok:"success",pass:"normal",poor:"exception"},z=(s=O["a"].create(),r=Object(N["connect"])(function(e){var a=e.register,t=e.loading;return{register:a,loading:t.models.register}}),s(o=r((n=function(e){function a(){var e,t;w()(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return t=k()(this,(e=F()(a)).call.apply(e,[this].concat(r))),t.state={count:0,user:{},parents:[],help:"",visible:!1,passwordVisible:!1,phoneVisible:!1},t.handleSubmit=function(){var e=t.props,a=e.form,s=e.dispatch,r=a.validateFieldsAndScroll,o=JSON.parse(localStorage.getItem("cnas_userinfo"));r(function(e,r){console.log(e),e||(o.company=a.getFieldValue("company"),o.tel=a.getFieldValue("tel"),o.isvisible=a.getFieldValue("isvisible"),s({type:"register/updateCnasuser",payload:b()({},o),callback:function(e){200===e.code?(f["a"].open({message:"\u4fee\u6539\u6210\u529f"}),localStorage.setItem("cnas_userinfo",JSON.stringify(o)),t.componentDidMount()):f["a"].open({message:"\u4fee\u6539\u5931\u8d25",description:e.data})}}))})},t.modifyPassword=function(){var e=t.props,a=e.form,s=e.dispatch,r=a.validateFieldsAndScroll,o=JSON.parse(localStorage.getItem("cnas_userinfo"));r(function(e,r){e||(o.password=a.getFieldValue("password"),s({type:"register/updateCnasuser",payload:b()({},o),callback:function(e){200===e.code?(f["a"].open({message:"\u4fee\u6539\u6210\u529f"}),t.setState({passwordVisible:!1}),localStorage.setItem("cnas_userinfo",JSON.stringify(o)),t.componentDidMount()):f["a"].open({message:"\u4fee\u6539\u5931\u8d25",description:e.data})}}))})},t.modifyPhone=function(){var e=t.props,a=e.form,s=e.dispatch,r=a.validateFieldsAndScroll,o=JSON.parse(localStorage.getItem("cnas_userinfo"));r(function(e,r){e||(o.tel=a.getFieldValue("tel"),s({type:"register/verifyTel",payload:{tel:r.tel,verifyCode:r.captcha},callback:function(e){"success"===e?s({type:"register/updateCnasuser",payload:b()({},o),callback:function(e){200===e.code?(f["a"].open({message:"\u4fee\u6539\u6210\u529f"}),t.setState({phoneVisible:!1}),localStorage.setItem("cnas_userinfo",JSON.stringify(o)),t.componentDidMount()):f["a"].open({message:"\u4fee\u6539\u5931\u8d25",description:e.data})}}):g["a"].error("\u9a8c\u8bc1\u7801\u9519\u8bef")}}))})},t.checkPassword=function(e,a,s){!1===t.state.passwordVisible&&s();var r=t.state,o=r.visible,n=r.confirmDirty;if(a)if(t.setState({help:""}),o||t.setState({visible:!!a}),a.length<6)s("error");else{var i=t.props.form;a&&n&&i.validateFields(["confirm"],{force:!0}),s()}else t.setState({help:"\u8bf7\u8f93\u5165\u5bc6\u7801",visible:!!a}),s("error")},t.checkConfirm=function(e,a,s){var r=t.props.form;a&&a!==r.getFieldValue("password")?s("\u5bc6\u7801\u4e0d\u4e00\u81f4"):s()},t.showPassword=function(){t.setState({passwordVisible:!0})},t.handleCancel=function(){t.setState({passwordVisible:!1}),t.setState({phoneVisible:!1})},t.getPasswordStatus=function(){var e=t.props.form,a=e.getFieldValue("password");return a&&a.length>9?"ok":a&&a.length>5?"pass":"poor"},t.onGetCaptcha=function(){var e=59;t.setState({count:e}),t.interval=setInterval(function(){e-=1,t.setState({count:e}),0===e&&clearInterval(t.interval)},1e3);var a=t.props,s=a.form,r=a.dispatch,o=s.getFieldValue("tel");void 0===o?g["a"].success("\u7535\u8bdd\u53f7\u7801\u4e0d\u80fd\u4e3a\u7a7a"):r({type:"register/sendVerify",payload:{tel:o},callback:function(e){e&&("success"===e?g["a"].success("\u53d1\u9001\u6210\u529f"):u["a"].info({title:Object(j["formatMessage"])({id:"app.login.verification-code-warning.noExist"})}))}})},t.getRepeatTel=function(e,a,s){var r=t.props.dispatch;r({type:"register/getRepeatTel",payload:{tel:a},callback:function(e){void 0===e||"null"===e?s("\u53f7\u7801\u5df2\u6ce8\u518c"):"\u53f7\u7801\u5df2\u6ce8\u518c"===e?s("\u53f7\u7801\u5df2\u6ce8\u518c"):s()}})},t.showModifyPhone=function(){t.setState({phoneVisible:!0})},t.renderPasswordProgress=function(){var e=t.props.form,a=e.getFieldValue("password"),s=t.getPasswordStatus();return a&&a.length?P.a.createElement("div",{className:D.a["progress-".concat(s)]},P.a.createElement(m["a"],{status:x[s],className:D.a.progress,strokeWidth:6,percent:10*a.length>100?100:10*a.length,showInfo:!1})):null},t}return V()(a,e),E()(a,[{key:"componentDidMount",value:function(){var e=this.props,a=(e.dispatch,e.form),t=JSON.parse(localStorage.getItem("cnas_userinfo"));this.setState({user:t}),a.setFieldsValue({company:t.company,isvisible:t.isvisible,tel:t.tel})}},{key:"render",value:function(){var e=this,a=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}},s=this.state,r=s.user,o=s.help,n=s.visible,m=s.passwordVisible,g=s.phoneVisible,f=s.count;return P.a.createElement(i["a"],null,P.a.createElement(O["a"],t,P.a.createElement(O["a"].Item,{label:"\u7528\u6237\u540d"},P.a.createElement("span",{className:"ant-form-text"},r.username)),P.a.createElement(O["a"].Item,{label:"\u516c\u53f8\uff1a"},a("company",{rules:[{required:!0,message:Object(j["formatMessage"])({id:"validation.company.required"})}]})(P.a.createElement(d["a"],{size:"large",placeholder:Object(j["formatMessage"])({id:"form.company.placeholder"})}))),P.a.createElement(O["a"].Item,{label:"\u624b\u673a\u53f7\u7801\uff1a"},P.a.createElement("span",{className:"ant-form-text"},r.tel),P.a.createElement(I["Fragment"],null,P.a.createElement("a",{onClick:function(){return e.showModifyPhone()}},"\xa0\xa0\u4fee\u6539\u624b\u673a"))),P.a.createElement(O["a"].Item,{label:"\u8054\u7cfb\u65b9\u5f0f:"},a("isvisible",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u662f\u5426\u53ef\u89c1"}]})(P.a.createElement(p["a"].Group,null,P.a.createElement(p["a"],{value:"\u53ef\u89c1"},"\u53ef\u89c1"),P.a.createElement(p["a"],{value:"\u4e0d\u53ef\u89c1"},"\u4e0d\u53ef\u89c1")))),P.a.createElement(O["a"].Item,{wrapperCol:{span:12,offset:6}},P.a.createElement(c["a"],{type:"primary",onClick:this.showPassword},"\u4fee\u6539\u5bc6\u7801"),"\xa0\xa0\xa0\xa0\xa0\xa0",P.a.createElement(c["a"],{type:"primary",onClick:this.handleSubmit},"\u4fdd\u5b58")),P.a.createElement(u["a"],{title:"\u4fee\u6539\u5bc6\u7801",visible:m,onOk:this.modifyPassword,onCancel:this.handleCancel},P.a.createElement(O["a"].Item,{label:"\u5bc6\u7801:",help:o},P.a.createElement(l["a"],{getPopupContainer:function(e){return e.parentNode},content:P.a.createElement("div",{style:{padding:"4px 0"}},J[this.getPasswordStatus()],this.renderPasswordProgress(),P.a.createElement("div",{style:{marginTop:10}},P.a.createElement(j["FormattedMessage"],{id:"validation.password.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:n},a("password",{rules:[{validator:this.checkPassword}]})(P.a.createElement(d["a"],{size:"large",type:"password",placeholder:Object(j["formatMessage"])({id:"form.password.placeholder"})})))),P.a.createElement(O["a"].Item,{label:"\u786e\u8ba4\u5bc6\u7801:"},a("confirm",{rules:[m?[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]:[],{validator:this.checkConfirm}]})(P.a.createElement(d["a"],{size:"large",type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})))),P.a.createElement(u["a"],{title:"\u4fee\u6539\u624b\u673a",visible:g,onOk:this.modifyPhone,onCancel:this.handleCancel},P.a.createElement(O["a"].Item,{label:"\u624b\u673a\u53f7:"},a("tel",{rules:[{required:!0,message:Object(j["formatMessage"])({id:"validation.phone-number.required"})},{pattern:/^\d{11}$/,message:Object(j["formatMessage"])({id:"validation.phone-number.wrong-format"})},{validator:this.getRepeatTel}]})(P.a.createElement(d["a"],{size:"large",style:{width:"75%"},placeholder:Object(j["formatMessage"])({id:"form.phone-number.placeholder"})}))),P.a.createElement(O["a"].Item,{label:"\u9a8c\u8bc1\u7801:"},a("captcha",{rules:g?[{required:!0,message:Object(j["formatMessage"])({id:"validation.verification-code.required"})}]:[]})(P.a.createElement(d["a"],{size:"large",style:{width:"50%"},placeholder:Object(j["formatMessage"])({id:"form.verification-code.placeholder"})})),P.a.createElement(c["a"],{size:"large",disabled:f,className:D.a.getCaptcha,onClick:this.onGetCaptcha},f?"".concat(f," s"):Object(j["formatMessage"])({id:"app.register.get-verification-code"}))))))}}]),a}(I["PureComponent"]),o=n))||o)||o);a["default"]=z},meQb:function(e,a,t){e.exports={tableList:"antd-pro-pages-main-report-user-info-tableList",tableListOperator:"antd-pro-pages-main-report-user-info-tableListOperator",tableListForm:"antd-pro-pages-main-report-user-info-tableListForm",submitButtons:"antd-pro-pages-main-report-user-info-submitButtons"}}}]);