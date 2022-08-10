"use strict";(self.webpackChunkfe_hr_app=self.webpackChunkfe_hr_app||[]).push([[796],{4986:function(e,n,t){var a=t(4942),i=t(9439),l=t(2791),r=t(3272),s=t(914),c=t(6106),o=t(7123),d=t(7309),u=t(2426),m=t.n(u),f=t(946),h=t(9657),p=t(2193),Z=t(8194),x=t(184);n.Z=function(e){var n=e.afterSubmit,t=void 0===n?function(){return null}:n,u=e.onCancel,v=void 0===u?function(){return null}:u,j=e.filterValues,g=r.Z.useForm(),y=(0,i.Z)(g,1)[0],b=(0,f.Z)().store;function k(e,n){var t;y.setFieldsValue((t={},(0,a.Z)(t,n,e.map((function(e){return e.name}))),(0,a.Z)(t,"".concat(n,"_id"),e.map((function(e){return e.id}))),t))}return h.Z.config(b),(0,l.useEffect)((function(){var e=j.date?(j.date||"").split(","):[],n=j.remind_at?(j.remind_at||"").split(","):[];y.setFieldsValue({date:e.length?[m()(e[0]),m()(e[1])]:[],remind_at:n.length?[m()(n[0]),m()(n[1])]:[],position:j.position?(j.position||"").split(","):[],department:j.department?(j.department||"").split(","):[]}),y.getFieldsValue(!0)}),[j]),(0,x.jsxs)(r.Z,{form:y,layout:"vertical",onFinish:function(){var e,n,a=y.getFieldsValue(!0),i=null!==(e=a.date)&&void 0!==e&&e.length?[m()(a.date[0]).format("YYYY-MM-DD"),m()(a.date[1]).format("YYYY-MM-DD")]:[],l=null!==(n=a.remind_at)&&void 0!==n&&n.length?[m()(a.remind_at[0]).format("YYYY-MM-DD"),m()(a.remind_at[1]).format("YYYY-MM-DD")]:[];t({date:null!==i&&void 0!==i&&i.length?i.toString():null,remind_at:null!==l&&void 0!==l&&l.length?l.toString():null,position:a.position.toString(),department:a.department.toString()})},children:[(0,x.jsxs)(s.Z,{span:24,children:[(0,x.jsxs)(c.Z,{gutter:[16,16],children:[(0,x.jsx)(s.Z,{span:12,children:(0,x.jsx)(r.Z.Item,{shouldUpdate:function(e,n){return e.department!==n.department},children:function(e){var n=e.getFieldValue;return(0,x.jsx)(r.Z.Item,{label:"Departemen",name:"department",children:(0,x.jsx)(p.Z,{valueSelect:n("department"),onSelect:function(e){return k(e,"department")}})})}})}),(0,x.jsx)(s.Z,{span:12,children:(0,x.jsx)(r.Z.Item,{shouldUpdate:function(e,n){return e.department!==n.department},children:function(e){var n=e.getFieldValue;return(0,x.jsx)(r.Z.Item,{label:"Jabatan",name:"position",children:(0,x.jsx)(Z.Z,{valueSelect:n("position"),onSelect:function(e){return k(e,"position")}})})}})})]}),(0,x.jsxs)(c.Z,{gutter:[16,16],children:[(0,x.jsx)(s.Z,{span:12,children:(0,x.jsx)(r.Z.Item,{label:"Tanggal Agenda",name:"date",children:(0,x.jsx)(o.Z.RangePicker,{placeholder:"",format:"DD-MM-YYYY",showNow:!1,showToday:!1})})}),(0,x.jsx)(s.Z,{span:12,children:(0,x.jsx)(r.Z.Item,{label:"Reminder",name:"remind_at",children:(0,x.jsx)(o.Z.RangePicker,{placeholder:"",format:"DD-MM-YYYY",showNow:!1,showToday:!1})})})]})]}),(0,x.jsxs)("div",{className:"d-flex justify-content-center",children:[(0,x.jsx)(d.Z,{type:"",htmlType:"button",onClick:v,children:"Kembali"}),(0,x.jsx)(d.Z,{type:"primary",htmlType:"submit",children:"Kirim"})]})]})}},2193:function(e,n,t){var a=t(1413),i=t(9439),l=t(2791),r=t(7083),s=t(3734),c=t(9657),o=t(946),d=t(1428),u=t(6250),m=t(184);n.Z=function(e){var n=(0,o.Z)().store,t=(0,l.useState)(!1),f=(0,i.Z)(t,2),h=f[0],p=f[1],Z=(0,l.useState)([]),x=(0,i.Z)(Z,2),v=x[0],j=x[1],g=(0,l.useState)([]),y=(0,i.Z)(g,2),b=y[0],k=y[1],w=(0,l.useState)([]),N=(0,i.Z)(w,2),S=N[0],_=N[1];function C(e){p(!0),(0,d.Ds)((function(){c.Z.get("/masterdata/department",{params:{keyword:e}}).then((function(e){var n,t,a=[];((null===(n=e.data)||void 0===n?void 0:n.data)||[]).forEach((function(e){a.push({label:e.name,value:e.name})})),_(a),k((null===(t=e.data)||void 0===t?void 0:t.data)||[]),p(!1)})).catch((function(){p(!1),_([])}))}),1e3)}function M(n,t){var a,i=v;!1===(null===(a=e.component)||void 0===a?void 0:a.mode)&&"deselect"!==t?(b.forEach((function(e){e.name===n&&(i=e)})),e.onSelect(i)):"select"===t?(b.forEach((function(e){e.name===n&&i.push(e)})),j(i),e.onSelect(i)):(i=i.filter((function(e){return e.name!==n})),e.onSelect(i),j(i))}return c.Z.config(n),(0,m.jsx)(r.Z,{spinning:h,children:(0,m.jsx)(s.Z,(0,a.Z)({onSelect:function(e){return M(e,"select")},onDeselect:function(e){return M(e,"deselect")},onFocus:function(){S.length||C()},onSearch:C,mode:"multiple",showArrow:!0,tagRender:u.Z,options:S,value:e.valueSelect},e.component))})}},8194:function(e,n,t){var a=t(1413),i=t(9439),l=t(2791),r=t(7083),s=t(3734),c=t(9657),o=t(946),d=t(1428),u=t(6250),m=t(184);n.Z=function(e){var n=(0,o.Z)().store,t=(0,l.useState)(!1),f=(0,i.Z)(t,2),h=f[0],p=f[1],Z=(0,l.useState)([]),x=(0,i.Z)(Z,2),v=x[0],j=x[1],g=(0,l.useState)([]),y=(0,i.Z)(g,2),b=y[0],k=y[1],w=(0,l.useState)([]),N=(0,i.Z)(w,2),S=N[0],_=N[1];function C(n){p(!0),(0,d.Ds)((function(){c.Z.get("/masterdata/position",{params:(0,a.Z)((0,a.Z)({},e.params||{}),{},{keyword:n})}).then((function(e){var n,t,a=[];((null===(n=e.data)||void 0===n?void 0:n.data)||[]).forEach((function(e){a.push({label:e.name,value:e.name})})),_(a),k((null===(t=e.data)||void 0===t?void 0:t.data)||[]),p(!1)})).catch((function(){p(!1),_([])}))}),1e3)}function M(n,t){var a,i=v;!1===(null===(a=e.component)||void 0===a?void 0:a.mode)&&"deselect"!==t?(b.forEach((function(e){e.name===n&&(i=e)})),e.onSelect(i)):"select"===t?(b.forEach((function(e){e.name===n&&i.push(e)})),j(i),e.onSelect(i)):(i=i.filter((function(e){return e.name!==n})),j(i),e.onSelect(i))}return c.Z.config(n),(0,l.useEffect)((function(){e.clearOptions&&_([])}),[e.clearOptions]),(0,m.jsx)(r.Z,{spinning:h,children:(0,m.jsx)(s.Z,(0,a.Z)((0,a.Z)({onSelect:function(e){return M(e,"select")},onDeselect:function(e){return M(e,"deselect")},onFocus:function(){S.length||(_([]),C())},onSearch:C,mode:"multiple",showArrow:!0,tagRender:u.Z,options:S},e.component),{},{value:e.valueSelect}))})}},2416:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var a=t(1413),i=t(4925),l=t(9439),r=t(2791),s=t(2426),c=t.n(s),o=t(6755),d=t(7309),u=t(1561),m=t(419),f=t(6106),h=t(914),p=t(8678),Z=t(7382),x=t(6014),v=t(7083),j=t(7825),g=t(3734),y=t(9221),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c.1-6.2-5-11.2-11.1-11.2z"}},{tag:"path",attrs:{d:"M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7a321 321 0 01-44.5 55.7 317.17 317.17 0 01-101.3 68.3c-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3a321 321 0 0144.5 55.7c3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8a9.18 9.18 0 00-8.2-13.3z"}}]},name:"field-time",theme:"outlined"},k=t(4291),w=function(e,n){return r.createElement(k.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:b}))};w.displayName="FieldTimeOutlined";var N=r.forwardRef(w),S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"},_=function(e,n){return r.createElement(k.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:S}))};_.displayName="ShareAltOutlined";var C=r.forwardRef(_),M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M433.1 657.7a31.8 31.8 0 0051.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"check-square",theme:"outlined"},Y=function(e,n){return r.createElement(k.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:M}))};Y.displayName="CheckSquareOutlined";var D=r.forwardRef(Y),I=t(3844),E=t(7575),A=t(1730),F=t(2621),R=t(752),O=t(2351),T=t(3605),z=t(4986),H=t(3272),P=t(5581),V=t(7123),K=t(9657),q=t(946),B=t(6895),L=t(184);var U=function(e){var n=(0,q.Z)().store,t=H.Z.useForm(),i=(0,l.Z)(t,1)[0],s=(0,r.useState)(null),o=(0,l.Z)(s,2),u=o[0],f=o[1];return K.Z.config(n),(0,L.jsx)(v.Z,{spinning:u,children:(0,L.jsxs)(H.Z,{onFinish:function(){var n=i.getFieldsValue(!0),t=(0,a.Z)({ids:e.agendaData.map((function(e){return e.id})),employee_ids:e.agendaData.map((function(e){return e.employee_id})),is_renew:!1,date:"",remind_day:0,description:""},n);f(!0),K.Z.post("/agenda/complete",t).then((function(n){f(!1),m.ZP.success(n.data),e.afterActionModal()})).catch((function(e){var n=e.response;m.ZP.error(n.data),f(!1)}))},form:i,layout:"vertical",children:[(0,L.jsxs)("div",{className:"wrapper-label-switch",children:[(0,L.jsx)(H.Z.Item,{className:"mb-3",name:"is_renew",valuePropName:"checked",children:(0,L.jsx)(P.Z,{})}),(0,L.jsx)("span",{className:"ml-3",children:"Agendakan kembali"})]}),(0,L.jsx)(H.Z.Item,{shouldUpdate:function(e,n){return e.is_renew!==n.is_renew},children:function(e){return(0,e.getFieldValue)("is_renew")&&(0,L.jsxs)("div",{className:"bg-blue p-4 ",children:[(0,L.jsx)(H.Z.Item,{label:"Tanggal",name:"date",rules:[B.Z.required()],children:(0,L.jsx)(V.Z,{placeholder:null,value:c()("D MMMM YYYY"),format:"D MMMM YYYY"})}),(0,L.jsx)(H.Z.Item,{label:"Ingatkan pada",name:"remind_day",rules:[B.Z.required()],children:(0,L.jsx)(p.Z,{type:"number",suffix:"Hari sebelum"})}),(0,L.jsx)(H.Z.Item,{className:"mb-0",label:"Keperluan",name:"description",rules:[B.Z.required()],children:(0,L.jsx)(p.Z.TextArea,{rows:4})})]})}}),(0,L.jsxs)("div",{className:"d-flex justify-content-center mt-4",children:[(0,L.jsx)(d.Z,{onClick:function(){e.afterActionModal()},children:"Kembali"}),(0,L.jsx)(d.Z,{type:"primary",htmlType:"submit",children:"Selesai"})]})]})})},J=t(1428),W=t(6250);var G=function(e){var n=(0,q.Z)().store,t=H.Z.useForm(),a=(0,l.Z)(t,1)[0],i=(0,r.useState)(!1),s=(0,l.Z)(i,2),c=s[0],o=s[1],f=(0,r.useState)(!1),h=(0,l.Z)(f,2),p=h[0],Z=h[1],x=(0,r.useState)([]),j=(0,l.Z)(x,2),y=j[0],b=j[1],k=(0,r.useState)([]),w=(0,l.Z)(k,2),N=w[0],S=w[1],_=(0,r.useState)([]),C=(0,l.Z)(_,2),M=C[0],Y=C[1];function D(e){Z(!0),(0,J.Ds)((function(){K.Z.get("/employee",{params:{keyword:e}}).then((function(e){var n,t,a=[];((null===(n=e.data)||void 0===n?void 0:n.data)||[]).forEach((function(e){a.push({label:e.full_name,value:e.full_name})})),Y(a),S((null===(t=e.data)||void 0===t?void 0:t.data)||[]),Z(!1)})).catch((function(){Z(!1),Y([])}))}),1e3)}function I(e,n){var t=y;"select"===n?(N.forEach((function(n){n.full_name===e&&t.push(n)})),b(t)):(t=t.filter((function(n){return n.full_name!==e})),b(t))}return K.Z.config(n),(0,L.jsx)(v.Z,{spinning:c,children:(0,L.jsxs)(H.Z,{onFinish:function(){var n={title:"Konfirmasi",content:"Apakah anda yakin membagikan pengingat ini?",onOk:function(){!function(){var n={emails:y.map((function(e){return e.email})),agenda_ids:e.agendaIds};o(!0),K.Z.post("/agenda/share",n).then((function(n){o(!1),m.ZP.success(n.data),e.afterActionModal()})).catch((function(e){var n=e.response;m.ZP.error(n.data),o(!1)}))}()}};u.Z.confirm(n)},form:a,layout:"vertical",children:[(0,L.jsx)("p",{children:" Reminder ini akan dibagikan melalui email, silahkan pilih karyawan yang akan menerimanya."}),(0,L.jsx)(v.Z,{spinning:p,children:(0,L.jsx)(H.Z.Item,{name:"employee",label:"Karyawan",rules:[B.Z.required()],children:(0,L.jsx)(g.Z,{onSelect:function(e){return I(e,"select")},onDeselect:function(e){return I(e,"deselect")},onFocus:function(){M.length||D()},onSearch:D,mode:"multiple",showArrow:!0,tagRender:W.Z,options:M})})}),(0,L.jsxs)("div",{className:"d-flex justify-content-center  mt-4",children:[(0,L.jsx)(d.Z,{onClick:function(){e.afterActionModal()},children:"Kembali"}),(0,L.jsx)(d.Z,{type:"primary",htmlType:"submit",children:"Bagikan"})]})]})})},Q=t(3197),X=["limit","offset"];var $=function(){var e=(0,q.Z)(),n=e.store,t=e.dispatch,s=(0,r.useState)({offset:0,limit:10,resource:[],current:0,total:0}),b=(0,l.Z)(s,2),k=b[0],w=b[1],S=(0,r.useState)({keyword:""}),_=(0,l.Z)(S,2),M=_[0],Y=_[1],H=(0,r.useState)(null),P=(0,l.Z)(H,2),V=P[0],B=P[1],J=(0,r.useState)(!1),W=(0,l.Z)(J,2),$=W[0],ee=W[1];K.Z.config(n);var ne=[{title:"",dataIndex:"employee_picture_url",key:"picture",render:function(e){return(0,L.jsx)(o.Z,{width:80,src:e?"".concat(Q.Z.API_BE_URL,"/picture/employee/").concat(e):"images/employee-default.png",placeholder:(0,L.jsx)(o.Z,{preview:!1,src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200",width:200})})}},{title:"",dataIndex:"employee",key:"employee",render:function(e,n){return(0,L.jsxs)("div",{className:"d-flex d-flex align-items-center flex-column",children:[(0,L.jsx)("span",{className:"value",children:n.employee}),(0,L.jsx)("span",{className:"desc-value",children:n.employee_nik||"-"})]})}},{title:"",dataIndex:"position",key:"position",render:function(e,n){return(0,L.jsxs)("div",{className:"d-flex d-flex align-items-center flex-column",children:[(0,L.jsx)("span",{className:"value",children:n.position}),(0,L.jsx)("span",{className:"desc-value",children:n.department})]})}},{title:"",dataIndex:"date",key:"date",render:function(e,n){return(0,L.jsxs)("div",{className:"d-flex d-flex align-items-center flex-column",children:[(0,L.jsx)("span",{className:"desc-value",children:"Tanggal"}),(0,L.jsx)("span",{className:"value",children:c()(n.date).format("D MMMM YYYY HH:mm")})]})}},{title:"",dataIndex:"description",key:"description",render:function(e,n){return(0,L.jsxs)("div",{className:"d-flex d-flex align-items-center flex-column",children:[(0,L.jsxs)("span",{className:"desc-value",children:[(0,L.jsx)(I.Z,{}),"   Keperluan "]}),(0,L.jsx)("span",{className:"value",children:n.description})]})}},{title:"",dataIndex:"remind_at",key:"remind_at",render:function(e,n){return(0,L.jsxs)("div",{className:"d-flex d-flex align-items-center flex-column",children:[(0,L.jsxs)("span",{className:"desc-value",children:[(0,L.jsx)(N,{}),"  Tanggal Diingatkan"]}),(0,L.jsx)("span",{className:"value",children:c()(n.remind_at).format("D MMMM YYYY HH:mm")})]})}},{title:"",key:"action",dataIndex:"id",render:function(e,n){return(0,L.jsx)(d.Z,{type:"primary",className:"btn-sm btn-faint-primary",onClick:function(){return ae("agendaComplete",n)},children:(0,L.jsx)(E.Z,{})})}},{title:"",key:"action",dataIndex:"id",render:function(e,n){return c()().isAfter(c()(n.remind_at).format("YYYY-MM-DD HH:mm:ss"))&&(0,L.jsx)(d.Z,{type:"primary",className:"btn-sm btn-faint-danger",onClick:function(){return function(e){var n={title:"Konfirmasi",content:"Anda akan diingatkan kembali besok, yakin untuk melanjutkan?",onOk:function(){!function(e){ee(!0),K.Z.post("/agenda/remind",{ids:e}).then((function(e){ee(!1),m.ZP.success(e.data),te()})).catch((function(e){var n=e.response;m.ZP.error(n.data),ee(!1)}))}(e)}};u.Z.confirm(n)}([e])},children:(0,L.jsx)(N,{})})}},{title:"",key:"action",dataIndex:"id",render:function(e){return(0,L.jsx)(d.Z,{type:"primary",className:"btn-sm btn-faint-purple",onClick:function(){return ae("shareReminder",[e])},children:(0,L.jsx)(C,{})})}}];function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.limit,t=void 0===n?null:n,l=e.offset,r=void 0===l?null:l,s=(0,i.Z)(e,X);ee(!0),K.Z.get("/agenda",{params:(0,a.Z)({is_active:!0,limit:t||k.limit,offset:r||k.offset},s)}).then((function(e){ee(!1),w({limit:e.data.limit,offset:e.data.offset,current:k.current,resource:e.data.data,total:e.data.total}),Y(s)})).catch((function(){ee(!1)}))}function ae(e,n){var t={content:(0,L.jsx)(G,{agendaIds:n,afterActionModal:ie}),title:"Bagikan Reminder",visible:!0};"agendaComplete"===e&&(t.content=(0,L.jsx)(U,{agendaData:[n],afterActionModal:function(){ie(),te()}}),t.title="Agenda Selesai"),"filterAgenda"===e&&(t.content=(0,L.jsx)(z.Z,{filterValues:M,afterSubmit:function(e){return function(e){te((0,a.Z)({keyword:M.keyword},e)),B({visible:!1})}(e)}}),t.title="Filter Agenda"),B(t)}function ie(){B({visible:!1})}return(0,r.useEffect)((function(){t({type:"update",name:"headerTitle",value:"Reminder"}),te()}),[]),(0,r.useEffect)((function(){null!==n&&void 0!==n&&n.refreshList&&te()}),[null===n||void 0===n?void 0:n.refreshList]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(f.Z,{className:"mb-4 mt-5 pt-2",children:[(0,L.jsx)(h.Z,{className:"search",xs:24,md:12,children:(0,L.jsxs)(f.Z,{justify:"start",children:[(0,L.jsx)(h.Z,{span:12,children:(0,L.jsx)(p.Z,{value:M.keyword,prefix:(0,L.jsx)(A.Z,{}),placeholder:"Cari",onChange:function(e){Y((0,a.Z)((0,a.Z)({},M),{},{keyword:e.target.value}))},onPressEnter:function(){return te((0,a.Z)((0,a.Z)({},M),{},{keyword:M.keyword}))},suffix:(0,L.jsx)(F.Z,{onClick:function(){return Y((0,a.Z)((0,a.Z)({},M),{},{keyword:""}))}})})}),(0,L.jsx)(h.Z,{children:(0,L.jsx)(d.Z,{className:"btn-snow btn-sm ml-3",type:"primary",onClick:function(){return ae("filterAgenda")},children:(0,L.jsx)(R.Z,{})})}),(0,L.jsx)(h.Z,{children:(0,L.jsx)(Z.Z,{overlay:(0,L.jsx)(x.Z,{items:[{label:"Ingatkan kembali besok"},{label:"Bagikan"}]}),placement:"bottomRight",trigger:["click"],children:(0,L.jsx)(d.Z,{className:"btn-snow btn-sm ml-3",type:"primary",children:(0,L.jsx)(D,{})})})})]})}),(0,L.jsx)(h.Z,{xs:24,md:12,className:"mt-md-0  mt-2",children:(0,L.jsxs)(f.Z,{justify:"end",children:[(0,L.jsx)(h.Z,{children:(0,L.jsx)(Z.Z,{overlay:(0,L.jsx)(x.Z,{items:[{label:"Berdasarkan Filter"},{label:"Data yang ditandai"},{label:"Reminder hari ini"}]}),placement:"bottomRight",trigger:["click"],children:(0,L.jsxs)(d.Z,{className:"btn-snow-danger",type:"primary",children:[(0,L.jsx)(O.Z,{}),"Export"]})})}),(0,L.jsx)(h.Z,{className:"px-2",children:(0,L.jsx)(d.Z,{className:"btn-snow btn-sm",type:"primary",onClick:function(){return te()},children:(0,L.jsx)(T.Z,{})})})]})})]}),(0,L.jsx)("div",{className:"list",children:(0,L.jsxs)(v.Z,{spinning:$,children:[(0,L.jsx)(j.Z,{columns:ne,dataSource:k.resource,size:"small",pagination:!1}),(0,L.jsxs)(f.Z,{className:"mt-2",children:[(0,L.jsx)(h.Z,{xs:24,md:12,children:(0,L.jsxs)("div",{className:"d-flex align-items-center",children:[(0,L.jsxs)("span",{className:"d-flex align-items-center",children:[(0,L.jsx)("span",{className:"mr-2",children:"Menampilkan"}),(0,L.jsxs)(g.Z,{value:k.limit,onChange:function(e){te({limit:e})},children:[(0,L.jsx)(g.Z.Option,{value:10,children:"10"}),(0,L.jsx)(g.Z.Option,{value:20,children:"20"}),(0,L.jsx)(g.Z.Option,{value:30,children:"30"})]})]}),(0,L.jsx)("span",{className:"px-2",children:"|"}),(0,L.jsxs)("span",{children:["Total ",k.total," "]})]})}),(0,L.jsx)(h.Z,{xs:24,md:12,className:"mt-md-0 mt-2 d-flex justify-content-end",children:(0,L.jsx)(y.Z,{onChange:function(e){te({offset:e})},total:k.total,pageSize:k.limit})})]})]})}),(null===V||void 0===V?void 0:V.visible)&&(0,L.jsx)(u.Z,{footer:null,title:null===V||void 0===V?void 0:V.title,visible:null===V||void 0===V?void 0:V.visible,onCancel:function(){B({visible:!1})},children:null===V||void 0===V?void 0:V.content})]})}},5581:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(7462),i=t(4942),l=t(2791),r=t(9439),s=t(4925),c=t(1694),o=t.n(c),d=t(5179),u=t(1354),m=l.forwardRef((function(e,n){var t,a=e.prefixCls,c=void 0===a?"rc-switch":a,m=e.className,f=e.checked,h=e.defaultChecked,p=e.disabled,Z=e.loadingIcon,x=e.checkedChildren,v=e.unCheckedChildren,j=e.onClick,g=e.onChange,y=e.onKeyDown,b=(0,s.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),k=(0,d.Z)(!1,{value:f,defaultValue:h}),w=(0,r.Z)(k,2),N=w[0],S=w[1];function _(e,n){var t=N;return p||(S(t=e),null===g||void 0===g||g(t,n)),t}var C=o()(c,m,(t={},(0,i.Z)(t,"".concat(c,"-checked"),N),(0,i.Z)(t,"".concat(c,"-disabled"),p),t));return l.createElement("button",Object.assign({},b,{type:"button",role:"switch","aria-checked":N,disabled:p,className:C,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?_(!1,e):e.which===u.Z.RIGHT&&_(!0,e),null===y||void 0===y||y(e)},onClick:function(e){var n=_(!N,e);null===j||void 0===j||j(n,e)}}),Z,l.createElement("span",{className:"".concat(c,"-inner")},N?x:v))}));m.displayName="Switch";var f=m,h=t(7106),p=t(2833),Z=t(9077),x=t(1815),v=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]])}return t},j=l.forwardRef((function(e,n){var t,r=e.prefixCls,s=e.size,c=e.loading,d=e.className,u=void 0===d?"":d,m=e.disabled,j=v(e,["prefixCls","size","loading","className","disabled"]),g=l.useContext(Z.E_),y=g.getPrefixCls,b=g.direction,k=l.useContext(x.Z),w=y("switch",r),N=l.createElement("div",{className:"".concat(w,"-handle")},c&&l.createElement(h.Z,{className:"".concat(w,"-loading-icon")})),S=o()((t={},(0,i.Z)(t,"".concat(w,"-small"),"small"===(s||k)),(0,i.Z)(t,"".concat(w,"-loading"),c),(0,i.Z)(t,"".concat(w,"-rtl"),"rtl"===b),t),u);return l.createElement(p.Z,{insertExtraNode:!0},l.createElement(f,(0,a.Z)({},j,{prefixCls:w,className:S,disabled:m||c,ref:n,loadingIcon:N})))}));j.__ANT_SWITCH=!0,j.displayName="Switch";var g=j}}]);
//# sourceMappingURL=796.7b522f64.chunk.js.map