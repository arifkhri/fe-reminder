"use strict";(self.webpackChunkfe_hr_app=self.webpackChunkfe_hr_app||[]).push([[480],{4480:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var a=t(9439),r=t(2791),l=t(3272),o=t(419),i=t(7083),c=t(4564),s=t(6106),u=t(914),d=t(8678),p=t(2014),f=t(7309),m=t(1561),h=t(1413),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},y=t(4291),x=function(e,n){return r.createElement(y.Z,(0,h.Z)((0,h.Z)({},e),{},{ref:n,icon:v}))};x.displayName="ArrowRightOutlined";var b=r.forwardRef(x),Z=t(6871),g=t(4605),k=t(9657),C=t(946),j=t(6895),w=t(184),O=function(e){var n=(0,r.useState)(!1),t=(0,a.Z)(n,2),c=t[0],s=t[1],u=l.Z.useForm(),p=(0,a.Z)(u,1)[0];return(0,w.jsxs)("div",{className:"forgot-password-component",children:[(0,w.jsxs)("p",{children:["Kata sandi baru akan dikirim ke email anda, pastikan ",(0,w.jsx)("br",{}),"email anda aktif atau hubungi admin."]}),(0,w.jsx)(i.Z,{spinning:c,children:(0,w.jsxs)(l.Z,{form:p,layout:"vertical",onFinish:function(n){s(!0),k.Z.post("/forgot-password",n,!0).then((function(n){s(!1),o.ZP.success(n.data),e.afterSubmit()})).catch((function(e){var n=e.response;s(!1),o.ZP.error(n.data)}))},children:[(0,w.jsx)(l.Z.Item,{label:"Email",name:"email",rules:[j.Z.required(),j.Z.email()],children:(0,w.jsx)(d.Z,{placeholder:"only-hr@clodeo.com"})}),(0,w.jsxs)("div",{className:"d-flex justify-content-center",children:[(0,w.jsx)(f.Z,{type:"link",htmlType:"button",onClick:function(){e.afterSubmit()},children:"Kembali"}),(0,w.jsx)(f.Z,{className:"btn-primary-gradient",type:"primary",htmlType:"submit",children:"Kirim"})]})]})})]})};var N=function(){var e,n,t=l.Z.useForm(),h=(0,a.Z)(t,1)[0],v=(0,Z.TH)(),y=(0,Z.s0)(),x=(0,C.Z)().dispatch,N=(0,r.useState)(!1),E=(0,a.Z)(N,2),P=E[0],S=E[1],I=(0,r.useState)(!1),K=(0,a.Z)(I,2),F=K[0],V=K[1],D=(null===(e=v.state)||void 0===e||null===(n=e.from)||void 0===n?void 0:n.pathname)||"/";return(0,w.jsxs)("div",{className:"login-page",children:[(0,w.jsx)(i.Z,{spinning:F,children:(0,w.jsx)(c.Z,{bordered:!1,children:(0,w.jsxs)(s.Z,{children:[(0,w.jsx)(u.Z,{xs:0,md:12,className:"align-items-end col-illustration",children:(0,w.jsx)("span",{className:"copyright mb-4",children:"2022 \xa9 Clodeo Reminder"})}),(0,w.jsxs)(u.Z,{xs:24,md:12,className:"container-form",children:[(0,w.jsx)("center",{children:(0,w.jsx)("img",{width:80,src:"images/clodeo.png",alt:"clodeo-logo"})}),(0,w.jsx)("center",{children:(0,w.jsx)("h3",{children:"Selamat Datang"})}),(0,w.jsxs)(l.Z,{form:h,onFinish:function(){var e=h.getFieldsValue(!0);V(!0),k.Z.post("/login",e,!0).then((function(e){g.Z.set("user",JSON.stringify(e.data)),x({type:"update",value:e.data,name:"userData"}),y(D,{replace:!0}),V(!0)})).catch((function(e){var n=e.response;V(!1),o.ZP.error(n.data)}))},layout:"vertical",name:"basic",labelCol:{span:4},wrapperCol:{span:20},initialValues:{remember:!0},autoComplete:"off",children:[(0,w.jsx)(l.Z.Item,{wrapperCol:24,label:"Email",name:"email",rules:[j.Z.required(),j.Z.email()],children:(0,w.jsx)(d.Z,{className:"txtemail",placeholder:"only-hr@clodeo.com"})}),(0,w.jsx)(l.Z.Item,{labelCol:5,wrapperCol:24,label:"Password",name:"password",rules:[j.Z.required()],children:(0,w.jsx)(d.Z.Password,{placeholder:"*********"})}),(0,w.jsxs)(s.Z,{gutter:2,children:[(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(l.Z.Item,{name:"remember",valuePropName:"checked",children:(0,w.jsx)(p.Z,{children:"Ingat saya "})})}),(0,w.jsx)(u.Z,{span:12,className:"p-1 d-flex justify-content-end",children:(0,w.jsx)("a",{className:"link-action",type:"link",htmlType:"button",onClick:function(){return S(!0)},children:"Lupa Password?"})})]}),(0,w.jsx)("center",{children:(0,w.jsxs)(f.Z,{className:"btn-login",type:"primary",htmlType:"submit",children:["Login ",(0,w.jsx)(b,{})]})})]})]})]})})}),P&&(0,w.jsx)(m.Z,{width:"400px",footer:null,title:"Lupa Password",visible:P,onOk:function(){return S(!0)},onCancel:function(){return S(!1)},children:(0,w.jsx)(O,{afterSubmit:function(){return S(!1)}})})]})}},2014:function(e,n,t){t.d(n,{Z:function(){return j}});var a=t(4942),r=t(7462),l=t(2791),o=t(1694),i=t.n(o),c=t(8083),s=t(1940),u=t(3433),d=t(9439),p=t(1818),f=t(9077),m=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},h=l.createContext(null),v=function(e,n){var t=e.defaultValue,o=e.children,c=e.options,s=void 0===c?[]:c,v=e.prefixCls,y=e.className,x=e.style,b=e.onChange,Z=m(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),g=l.useContext(f.E_),C=g.getPrefixCls,j=g.direction,w=l.useState(Z.value||t||[]),O=(0,d.Z)(w,2),N=O[0],E=O[1],P=l.useState([]),S=(0,d.Z)(P,2),I=S[0],K=S[1];l.useEffect((function(){"value"in Z&&E(Z.value||[])}),[Z.value]);var F=function(){return s.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},V=C("checkbox",v),D="".concat(V,"-group"),L=(0,p.Z)(Z,["value","disabled"]);s&&s.length>0&&(o=F().map((function(e){return l.createElement(k,{prefixCls:V,key:e.value.toString(),disabled:"disabled"in e?e.disabled:Z.disabled,value:e.value,checked:-1!==N.indexOf(e.value),onChange:e.onChange,className:"".concat(D,"-item"),style:e.style},e.label)})));var _={toggleOption:function(e){var n=N.indexOf(e.value),t=(0,u.Z)(N);-1===n?t.push(e.value):t.splice(n,1),"value"in Z||E(t);var a=F();null===b||void 0===b||b(t.filter((function(e){return-1!==I.indexOf(e)})).sort((function(e,n){return a.findIndex((function(n){return n.value===e}))-a.findIndex((function(e){return e.value===n}))})))},value:N,disabled:Z.disabled,name:Z.name,registerValue:function(e){K((function(n){return[].concat((0,u.Z)(n),[e])}))},cancelValue:function(e){K((function(n){return n.filter((function(n){return n!==e}))}))}},M=i()(D,(0,a.Z)({},"".concat(D,"-rtl"),"rtl"===j),y);return l.createElement("div",(0,r.Z)({className:M,style:x},L,{ref:n}),l.createElement(h.Provider,{value:_},o))},y=l.forwardRef(v),x=l.memo(y),b=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},Z=function(e,n){var t,o=e.prefixCls,u=e.className,d=e.children,p=e.indeterminate,m=void 0!==p&&p,v=e.style,y=e.onMouseEnter,x=e.onMouseLeave,Z=e.skipGroup,g=void 0!==Z&&Z,k=b(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),C=l.useContext(f.E_),j=C.getPrefixCls,w=C.direction,O=l.useContext(h),N=(0,l.useContext)(s.aM).isFormItemInput,E=l.useRef(k.value);l.useEffect((function(){null===O||void 0===O||O.registerValue(k.value)}),[]),l.useEffect((function(){if(!g)return k.value!==E.current&&(null===O||void 0===O||O.cancelValue(E.current),null===O||void 0===O||O.registerValue(k.value),E.current=k.value),function(){return null===O||void 0===O?void 0:O.cancelValue(k.value)}}),[k.value]);var P=j("checkbox",o),S=(0,r.Z)({},k);O&&!g&&(S.onChange=function(){k.onChange&&k.onChange.apply(k,arguments),O.toggleOption&&O.toggleOption({label:d,value:k.value})},S.name=O.name,S.checked=-1!==O.value.indexOf(k.value),S.disabled=k.disabled||O.disabled);var I=i()((t={},(0,a.Z)(t,"".concat(P,"-wrapper"),!0),(0,a.Z)(t,"".concat(P,"-rtl"),"rtl"===w),(0,a.Z)(t,"".concat(P,"-wrapper-checked"),S.checked),(0,a.Z)(t,"".concat(P,"-wrapper-disabled"),S.disabled),(0,a.Z)(t,"".concat(P,"-wrapper-in-form-item"),N),t),u),K=i()((0,a.Z)({},"".concat(P,"-indeterminate"),m)),F=m?"mixed":void 0;return l.createElement("label",{className:I,style:v,onMouseEnter:y,onMouseLeave:x},l.createElement(c.Z,(0,r.Z)({"aria-checked":F},S,{prefixCls:P,className:K,ref:n})),void 0!==d&&l.createElement("span",null,d))},g=l.forwardRef(Z);g.displayName="Checkbox";var k=g,C=k;C.Group=x,C.__ANT_CHECKBOX=!0;var j=C},8083:function(e,n,t){var a=t(7462),r=t(4942),l=t(4925),o=t(1413),i=t(5671),c=t(3144),s=t(9340),u=t(8557),d=t(2791),p=t(1694),f=t.n(p),m=function(e){(0,s.Z)(t,e);var n=(0,u.Z)(t);function t(e){var a;(0,i.Z)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,r=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,o.Z)((0,o.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,c.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,o=n.className,i=n.style,c=n.name,s=n.id,u=n.type,p=n.disabled,m=n.readOnly,h=n.tabIndex,v=n.onClick,y=n.onFocus,x=n.onBlur,b=n.onKeyDown,Z=n.onKeyPress,g=n.onKeyUp,k=n.autoFocus,C=n.value,j=n.required,w=(0,l.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),O=Object.keys(w).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=w[n]),e}),{}),N=this.state.checked,E=f()(t,o,(e={},(0,r.Z)(e,"".concat(t,"-checked"),N),(0,r.Z)(e,"".concat(t,"-disabled"),p),e));return d.createElement("span",{className:E,style:i},d.createElement("input",(0,a.Z)({name:c,id:s,type:u,required:j,readOnly:m,disabled:p,tabIndex:h,className:"".concat(t,"-input"),checked:!!N,onClick:v,onFocus:y,onBlur:x,onKeyUp:g,onKeyDown:b,onKeyPress:Z,onChange:this.handleChange,autoFocus:k,ref:this.saveInput,value:C},O)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,o.Z)((0,o.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);m.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=m}}]);
//# sourceMappingURL=480.b9d3a7e6.chunk.js.map