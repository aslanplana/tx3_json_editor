(this["webpackJsonpjson-editor"]=this["webpackJsonpjson-editor"]||[]).push([[0],{132:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},147:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(11),r=a.n(i),c=a(13),o=a(15),l={"Records Management Policy":{Version:"Tx3 Demo 1.0.0.2",Schema:{ID:"http://tx3services.com/schemas/0/0/records-management-policy.json",Major:"0",Minor:"0"},"Record Types":[{Name:"Test Case",Definitions:[{Systems:["qTest"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["test-case"],"Singular Name":"Test Case","Plural Name":"Test Cases","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Status","Is Data":"Yes"},{Name:"Type","Is Data":"Yes"},{Name:"Assigned To","Is Data":"Yes"},{Name:"Description","Is Data":"Yes"},{Name:"Precondition","Is Data":"Yes"},{Name:"Priority","Is Data":"Yes"},{Name:"qTest Version ID","Is Data":"Yes"},{Name:"GxP","Is Data":"Yes"}]},{Name:"qTest Test Step",Definitions:[{Systems:["qTest"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["test-step"],"Singular Name":"Test Step","Plural Name":"Test Steps","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Description","Is Data":"Yes"},{Name:"Expected Result","Is Data":"Yes"}]},{Name:"Test Run",Definitions:[{Systems:["qTest"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["test-run"],"Singular Name":"Test Run","Plural Name":"Test Runs","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Status","Is Data":"Yes"},{Name:"Target Release/Build","Is Data":"Yes"},{Name:"Test Case ID","Is Data":"Yes"},{Name:"Approval Requirement (Custom Field)","Is Data":"Yes"},{Name:"Custom Field","Is Data":"Yes"},{Name:"Environment","Is Data":"Yes"},{Name:"Assigned To","Is Data":"Yes"},{Name:"Priority","Is Data":"Yes"},{Name:"GxP","Is Data":"Yes"}]},{Name:"qTest Test Log",Definitions:[{Systems:["qTest"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["test-log"],"Singular Name":"Test Log","Plural Name":"Test Logs","Ownership Description":"created","Content Originator":"Tester"}],Fields:[{Name:"Test Case Name","Is Data":"Yes"},{Name:"Test Case Version","Is Data":"Yes"},{Name:"Status","Is Data":"Yes"},{Name:"Execution Type","Is Data":"Yes"},{Name:"Target Release/Build","Is Data":"Yes"},{Name:"Executed Start","Is Data":"Yes"},{Name:"Executed End","Is Data":"Yes"},{Name:"Execution Log Notes","Is Data":"Yes"}]},{Name:"qTest Test Step Log",Definitions:[{Systems:["qTest"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["test-step-log"],"Singular Name":"Test Step Log","Plural Name":"Test StepLogs","Ownership Description":"created","Content Originator":"Tester"}],Fields:[{Name:"Status","Is Data":"Yes"},{Name:"Description","Is Data":"Yes"},{Name:"Expected Result","Is Data":"Yes"},{Name:"Actual Result","Is Data":"Yes"}]},{Name:"Story","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["Story"],"Singular Name":"Story","Plural Name":"Stories","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Category","Is Data":"Yes"},{Name:"Resolution","Is Data":"Yes"}]},{Name:"XRay Scenario","Base Record Type":"XRay Test",Definitions:[{Systems:["JIRA"],"Item Types":["Test"],Constraints:[{Type:"Field Is Equal",Name:"Test Type",Value:"Cucumber"}],"Singular Name":"Test","Plural Name":"Tests","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Type","Is Data":"Yes"},{Name:"Cucumber Test Type","Is Data":"Yes"},{Name:"Cucumber Scenario","Is Data":"Yes"}]},{Name:"XRay Generic Test","Base Record Type":"XRay Test",Definitions:[{Systems:["JIRA"],"Item Types":["Test"],Constraints:[{Type:"Field Is Equal",Name:"Test Type",Value:"Generic"}],"Singular Name":"Test","Plural Name":"Tests","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Type","Is Data":"Yes"},{Name:"Generic Test Definition","Is Data":"Yes"}]},{Name:"XRay Manual Test","Base Record Type":"XRay Test",Definitions:[{Systems:["JIRA"],"Item Types":["Test"],Constraints:[{Type:"Field Is Equal",Name:"Test Type",Value:"Manual"}],"Singular Name":"Test","Plural Name":"Tests","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Type","Is Data":"Yes"},{Name:"Manual Test Steps","Is Data":"Yes"}]},{Name:"XRay Test","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],"Item Types":["Test"],"Singular Name":"Test","Plural Name":"Tests","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Type","Is Data":"Yes"}]},{Name:"XRay Pre-Condition","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],"Item Types":["Pre-Condition"],"Singular Name":"Pre-Condition","Plural Name":"Pre-Conditions","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Pre-Condition Type","Is Data":"Yes"},{Name:"Conditions","Is Data":"Yes"}]},{Name:"XRay Test Plan","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],"Item Types":["Test Plan"],"Singular Name":"Test Plan","Plural Name":"Test Plans","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Plan Status","Is Data":"Yes"},{Name:"Tests associated with a Test Plan","Is Data":"Yes"},{Name:"Begin Date","Is Data":"Yes"},{Name:"End Date","Is Data":"Yes"}]},{Name:"XRay Execution","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],"Item Types":["Test Execution","Sub Test Execution"],"Singular Name":"Test Plan","Plural Name":"Test Plans","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Execution Status","Is Data":"Yes"},{Name:"Tests association with a Test Execution","Is Data":"Yes"},{Name:"Test Environments","Is Data":"Yes"},{Name:"Test Plan","Is Data":"Yes"},{Name:"Begin Date","Is Data":"Yes"},{Name:"End Date","Is Data":"Yes"}]},{Name:"Defect","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["Bug"],"Singular Name":"Bug","Plural Name":"Bugs","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Category","Is Data":"Yes"},{Name:"Resolution","Is Data":"Yes"}]},{Name:"Issue",Definitions:[{Systems:["JIRA"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Singular Name":"Issue","Plural Name":"Issues","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Component","Is Data":"Yes"},{Name:"Description","Is Data":"Yes"},{Name:"Summary","Is Data":"Yes"},{Name:"Issue Type","Is Data":"Yes"},{Name:"Acceptance Criteria","Is Data":"Yes"},{Name:"Functional Specification","Is Data":"Yes"},{Name:"Design Specification","Is Data":"Yes"},{Name:"Configuration Specification","Is Data":"Yes"},{Name:"Risk Classification","Is Data":"Yes"},{Name:"Created","Is Data":"Yes"},{Name:"Started","Is Data":"Yes"},{Name:"Due Started","Is Data":"Yes"},{Name:"Due Date","Is Data":"Yes"},{Name:"Updated","Is Data":"Yes"},{Name:"Priority","Is Data":"Yes"},{Name:"Labels","Is Data":"Yes"},{Name:"Original Estimate","Is Data":"Yes"},{Name:"Remaining Estimate","Is Data":"Yes"},{Name:"Affects Version/s","Is Data":"Yes"},{Name:"Fix Version/s","Is Data":"Yes"},{Name:"Resolution Detail","Is Data":"Yes"},{Name:"GxP","Is Data":"Yes"},{Name:"Revision Reason","Is Data":"Yes"}]}]}},u=a(52),d=a(65),m=a.n(d),j=(a(132),a(2)),N=function(e){var t=e.field,a=e.json,n=e.onChange,i=e.name,r=e.onClick,l=e.childName,d=e.selected,N=e.openPatent,b=e.way,D=Object(s.useState)(!i&&!l),f=Object(o.a)(D,2),y=f[0],p=f[1],I=Object.keys(t.fields);Object(s.useEffect)((function(){d&&b===d.way&&h()}),[d]);var h=function(){N&&(N(),p(!0))};Object(s.useEffect)((function(){I.forEach((function(e){a[e]||g(e,[])}))}),[]);var T=l||i,g=function(e,t){i||0===i?n(i,Object(c.a)(Object(c.a)({},a),{},Object(u.a)({},e,t))):n(Object(c.a)(Object(c.a)({},a),{},Object(u.a)({},e,t)))},v=I.filter((function(e){return"string"!==t.fields[e].type}));return Object(j.jsxs)("div",{className:"object-container",children:[Boolean(T)&&Object(j.jsxs)("div",{className:"title",children:[Boolean(v.length)&&Object(j.jsx)(m.a,{onClick:function(){p(!y)},className:y?"rev-icon":""}),Object(j.jsx)("div",{className:d&&b===d.way?"selected":"",onClick:function(){p(!0),r(t,a,n,i,r,b)},children:T})]}),Object(j.jsx)("div",{className:y?"object-child-container":"hidden",children:I.map((function(e,s){return Object(j.jsx)("div",{className:"object-child-item",children:Object(j.jsx)(O,{field:t.fields[e],json:a[e]||"",name:e,onChange:g,onClick:r,selected:d,openPatent:h,way:b?b+">"+e:e})},s)}))})]})},b=a(16),D=(a(142),function(e){var t=e.field,a=e.json,n=void 0===a?[]:a,i=e.name,r=e.onChange,c=e.onClick,l=e.selected,u=e.openPatent,d=e.way,N=Object(s.useState)(!1),D=Object(o.a)(N,2),f=D[0],y=D[1],p=function(e,t){var a=Object(b.a)(n);a[e]=t,r(i,a)},I=function(){u(),y(!0)};return Object(j.jsxs)("div",{className:"array-container",children:[Object(j.jsxs)("div",{className:"title",children:["string"!==t.innerType.type&&Object(j.jsx)(m.a,{onClick:function(){y(!f)},className:f?"rev-icon":""}),Object(j.jsx)("div",{className:d===(null===l||void 0===l?void 0:l.way)?"selected":"",onClick:function(){y(!0),c(t,n,r,i,c,d)},children:i})]}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"array-child-container",children:n&&Object(j.jsx)("div",{className:f?"":"hidden",children:n.map((function(e,a){return Object(j.jsx)("div",{className:"array-item",children:Object(j.jsx)("div",{children:Object(j.jsx)(O,{field:t.innerType,json:e,childName:i+(a+1),name:a,onChange:p,onClick:c,selected:l,openPatent:I,way:d+">"+i+(a+1)})})},a)}))})})})]})}),O=function(e){var t=e.field.type;return function(){switch(t){case"object":return Object(j.jsx)(N,Object(c.a)({},e));case"array":return Object(j.jsx)(D,Object(c.a)({},e));default:return null}}()},f=(a(143),a(144),function(e){var t=e.field,a=e.json,n=e.onChange,i=e.name,r=e.onClick,c=e.way,o=Object.keys(t.fields);Object(s.useEffect)((function(){o.forEach((function(e){a[e]||l(e,[])}))}),[]);var l=function(e,t){var s=new Object(a);s[e]=t,i||0===i?n(i,s):n(s)};return Object(j.jsxs)("div",{className:"object-container",children:[Boolean(i&&"number"!==typeof i)&&Object(j.jsx)("div",{className:"edit-title",children:Object(j.jsx)("h2",{children:i})}),o.map((function(e,s){return Object(j.jsx)("div",{className:"object-child-item",children:Object(j.jsx)(Y,{field:t.fields[e],json:a[e]||"",name:e,onChange:l,onClick:r,way:c+">"+e})},s)}))]})}),y=(a(145),function e(t){var a=new Object(null);for(var s in t.fields)switch(t.fields[s].type){case"string":a[s]="";break;case"array":a[s]=[];break;case"object":a[s]=e(t[s]);break;default:return null}return a}),p=a(288),I=function(e){var t=e.field,a=e.json,n=e.onClick,i=e.removeItem,r=s.useState(0),c=Object(o.a)(r,2),l=c[0],u=c[1],d=Object.keys(t.fields);return Object(j.jsxs)("div",{children:[Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[d.map((function(e){return Object(j.jsx)("td",{children:e},e)})),Object(j.jsx)("td",{className:"buttons-field"})]})}),Object(j.jsx)("tbody",{children:a.slice(5*l,5*l+5).map((function(e,a){return Object(j.jsxs)("tr",{children:[d.map((function(s){return Object(j.jsx)("td",{children:"string"===t.fields[s].type?e[s]:t.fields[s].type},s+a)})),Object(j.jsx)("td",{className:"buttons-field",children:Object(j.jsxs)("div",{className:"button-container",children:[Object(j.jsx)("div",{onClick:function(){return n(e,a)},className:"array-button edit",children:"Edit"}),Object(j.jsx)("div",{onClick:function(){return i(a)},className:"array-button delete",children:"Delete"})]})})]},"bob"+a)}))})]}),a.length>5&&Object(j.jsx)(p.a,{rowsPerPageOptions:[5],component:"div",count:a.length,rowsPerPage:5,page:l,onChangePage:function(e,t){u(t)}})]})},h=function(e){e.field;var t=e.json,a=e.onClick,n=e.removeItem,i=s.useState(0),r=Object(o.a)(i,2),c=r[0],l=r[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("table",{children:Object(j.jsx)("tbody",{children:t.slice(5*c,5*c+5).map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e}),Object(j.jsxs)("div",{className:"button-container",children:[Object(j.jsx)("div",{onClick:function(){return a(e,t)},className:"array-button edit",children:"Edit"}),Object(j.jsx)("div",{onClick:function(){return n(t)},className:"array-button delete",children:"Delete"})]})]},e+t)}))})}),t.length>5&&Object(j.jsx)(p.a,{rowsPerPageOptions:[5],component:"div",count:t.length,rowsPerPage:5,page:c,onChangePage:function(e,t){l(t)}})]})},T=(a(147),function(e){var t=e.field.type;return console.log("LOOG uuu",e),Object(j.jsx)("div",{children:"object"===t?Object(j.jsx)(I,Object(c.a)({},e)):Object(j.jsx)(h,Object(c.a)({},e))})}),g=function(e){var t=e.field,a=e.json,s=void 0===a?[]:a,n=e.name,i=e.onChange,r=e.onClick,c=e.way,o=function(e,t){var a=Object(b.a)(s);a[e]=t,i(n,a)};return Object(j.jsxs)("div",{className:"array-edit-container",children:[Object(j.jsxs)("div",{className:"edit-title",children:[Object(j.jsx)("h2",{children:n}),Object(j.jsx)("button",{onClick:function(){var e=Object(b.a)(s);if("string"===t.innerType.type)e.push("");else{var a=y(t.innerType);e.push(a)}i(n,e)},children:"add"})]}),Object(j.jsx)("div",{children:Object(j.jsx)(T,{json:s,field:t.innerType,onClick:function(e,a){r(t.innerType,e,o,a,r,c+">"+n+(a+1))},removeItem:function(e){var t=s.filter((function(t,a){return a!==e}));i(n,t)}})})]})},v=a(289),x=a(119),S=a(7),C=function(e){var t=e.field,a=e.json,n=e.name,i=e.onChange,r=Object(x.a)({initialValues:{label:"string"===typeof n?n:"",value:a},validateOnBlur:!0,validationSchema:S.b({value:t}),onSubmit:function(){}});Object(s.useEffect)((function(){r.setFieldValue("value",a)}),[a]);return Object(j.jsx)("div",{children:Object(j.jsx)(v.a,{fullWidth:!0,name:"value",label:r.values.label,value:r.values.value,onChange:function(e){r.handleChange(e),r.setFieldTouched("value"),i(n,e.target.value)},error:r.touched.value&&Boolean(r.errors.value),helperText:r.touched.value&&r.errors.value})})},Y=function(e){var t=e.field.type;return function(){switch(t){case"object":return Object(j.jsx)(f,Object(c.a)({},e));case"array":return Object(j.jsx)(g,Object(c.a)({},e));case"string":return Object(j.jsx)(C,Object(c.a)({},e));default:return null}}()},P=function(e){return Object(j.jsx)(Y,Object(c.a)({},e))},R=function(e){var t=e.yupSchema,a=Object(s.useState)(l),n=Object(o.a)(a,2),i=n[0],r=n[1],u=Object(s.useState)(),d=Object(o.a)(u,2),m=d[0],N=d[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"json-tree-window",children:Object(j.jsx)("div",{children:Object(j.jsx)(O,{field:t,json:i,onChange:function(e){r(e)},onClick:function(e,t,a,s,n,i){N({name:s,field:e,json:t,onChange:a,onClick:n,way:i})},selected:m})})}),Object(j.jsx)("div",{className:"json-editor-window",children:m&&Object(j.jsx)(P,Object(c.a)({},m))})]})},q=S.b({"Records Management Policy":S.b({Version:S.c().required("required"),Schema:S.b({ID:S.c().url("Enter valid url").required("required"),Major:S.c().required("required"),Minor:S.c().required("required")}),"Record Types":S.a().of(S.b({Name:S.c().required("required"),Definitions:S.a().of(S.b({Systems:S.a().of(S.c().required("required")),Aliases:S.a().of(S.b({"Policy Field":S.c().required("required"),"System Field":S.c().required("required")})),"Item Types":S.a().of(S.c().required("required")),"Singular Name":S.c().required("required"),"Plural Name":S.c().required("required"),"Ownership Description":S.c().required("required"),"Content Originator":S.c().required("required")})),Fields:S.a().of(S.b({Name:S.c().required("required"),"Is Data":S.c().required("required")}))}))})}),F=(a(246),function(){return Object(j.jsx)("div",{children:Object(j.jsx)(R,{yupSchema:q})})}),w=(a(247),function(){return Object(j.jsx)(F,{})}),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,291)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))};a(248);r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),A()}},[[249,1,2]]]);
//# sourceMappingURL=main.35ac4310.chunk.js.map