(this["webpackJsonpjson-editor"]=this["webpackJsonpjson-editor"]||[]).push([[0],{132:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},146:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(11),r=a.n(i),c=a(12),o=a(15),l=a(52),u=a(65),d=a.n(u),m=(a(132),a(2)),j=function(e){var t=e.field,a=e.json,n=e.onChange,i=e.name,r=e.onClick,u=e.childName,j=e.selected,b=e.openPatent,N=e.way,f=Object(s.useState)(!i&&!u),y=Object(o.a)(f,2),D=y[0],p=y[1],I=Object.keys(t.fields);Object(s.useEffect)((function(){j&&N===j.way&&h()}),[j]);var h=function(){b&&(b(),p(!0))};Object(s.useEffect)((function(){-1===(null===N||void 0===N?void 0:N.indexOf(">"))&&g(),I.forEach((function(e){a[e]||v(e,[])}))}),[]);var T=u||i,g=function(){p(!0),r(t,a,n,i,r,N)},v=function(e,t){i||0===i?n(i,Object(c.a)(Object(c.a)({},a),{},Object(l.a)({},e,t))):n(Object(c.a)(Object(c.a)({},a),{},Object(l.a)({},e,t)))},x=I.filter((function(e){return"string"!==t.fields[e].type}));return Object(m.jsxs)("div",{className:"object-container",children:[Boolean(T)&&Object(m.jsxs)("div",{className:"title",children:[Boolean(x.length)&&Object(m.jsx)(d.a,{onClick:function(){p(!D)},className:D?"rev-icon":""}),Object(m.jsx)("div",{className:j&&N===j.way?"selected":"",onClick:g,children:T})]}),Object(m.jsx)("div",{className:D?"object-child-container":"hidden",children:I.map((function(e,s){return Object(m.jsx)("div",{className:"object-child-item",children:Object(m.jsx)(O,{field:t.fields[e],json:a[e]||"",name:e,onChange:v,onClick:r,selected:j,openPatent:h,way:N?N+">"+e:e})},s)}))})]})},b=a(16),N=(a(142),function(e){var t=e.field,a=e.json,n=void 0===a?[]:a,i=e.name,r=e.onChange,c=e.onClick,l=e.selected,u=e.openPatent,j=e.way,N=Object(s.useState)(!1),f=Object(o.a)(N,2),y=f[0],D=f[1];Object(s.useEffect)((function(){(null===l||void 0===l?void 0:l.way)==j&&h()}),[n]);var p=function(e,t){var a=Object(b.a)(n);a[e]=t,r(i,a)},I=function(){u(),D(!0)},h=function(){D(!0),c(t,n,r,i,c,j)};return Object(m.jsxs)("div",{className:"array-container",children:[Object(m.jsxs)("div",{className:"title",children:["string"!==t.innerType.type&&Object(m.jsx)(d.a,{onClick:function(){D(!y)},className:y?"rev-icon":""}),Object(m.jsx)("div",{className:j===(null===l||void 0===l?void 0:l.way)?"selected":"",onClick:h,children:i})]}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"array-child-container",children:n&&Object(m.jsx)("div",{className:y?"":"hidden",children:n.map((function(e,a){return Object(m.jsxs)("div",{className:"array-item",children:[Object(m.jsx)("div",{className:j?"line":""}),Object(m.jsx)(O,{field:t.innerType,json:e,childName:i+(a+1),name:a,onChange:p,onClick:c,selected:l,openPatent:I,way:j+">"+i+(a+1)})]},a)}))})})})]})}),O=function(e){var t=e.field.type;return function(){switch(t){case"object":return Object(m.jsx)(j,Object(c.a)({},e));case"array":return Object(m.jsx)(N,Object(c.a)({},e));default:return null}}()},f=(a(143),function(e){var t=e.field,a=e.json,n=e.onChange,i=e.name,r=e.onClick,c=e.way,o=Object.keys(t.fields);Object(s.useEffect)((function(){o.forEach((function(e){a[e]||l(e,[])}))}),[]);var l=function(e,t){var s=new Object(a);s[e]=t,i||0===i?n(i,s):n(s)};return Object(m.jsxs)("div",{className:"object-container",children:[Boolean(i&&"number"!==typeof i)&&Object(m.jsx)("div",{className:"edit-title",children:Object(m.jsx)("h2",{children:i})}),o.map((function(e,s){return Object(m.jsx)("div",{className:".object-child-item-editor",children:Object(m.jsx)(C,{field:t.fields[e],json:a[e]||"",name:e,onChange:l,onClick:r,way:c+">"+e})},s)}))]})}),y=(a(144),function e(t){var a=new Object(null);for(var s in t.fields)switch(t.fields[s].type){case"string":a[s]="";break;case"array":a[s]=[];break;case"object":a[s]=e(t[s]);break;default:return null}return a}),D=a(288),p=function(e){var t=e.field,a=e.json,n=e.onClick,i=e.removeItem,r=s.useState(0),c=Object(o.a)(r,2),l=c[0],u=c[1],d=Object.keys(t.fields),j=Array.isArray(a)?a:[];return Object(m.jsxs)("div",{children:[Object(m.jsxs)("table",{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[d.map((function(e){return Object(m.jsx)("td",{children:e},e)})),Object(m.jsx)("td",{className:"buttons-field"})]})}),Object(m.jsx)("tbody",{children:j.slice(5*l,5*l+5).map((function(e,a){return Object(m.jsxs)("tr",{children:[d.map((function(s){return Object(m.jsx)("td",{children:"string"===t.fields[s].type?e[s]:t.fields[s].type},s+a)})),Object(m.jsx)("td",{className:"buttons-field",children:Object(m.jsxs)("div",{className:"button-container",children:[Object(m.jsx)("div",{onClick:function(){return n(e,5*l+a)},className:"array-button edit",children:"Edit"}),Object(m.jsx)("div",{onClick:function(){return i(5*l+a)},className:"array-button delete",children:"Delete"})]})})]},"bob"+a)}))})]}),j.length>5&&Object(m.jsx)(D.a,{rowsPerPageOptions:[5],component:"div",count:j.length,rowsPerPage:5,page:l,onChangePage:function(e,t){u(t)}})]})},I=function(e){e.field;var t=e.json,a=e.onClick,n=e.removeItem,i=s.useState(0),r=Object(o.a)(i,2),c=r[0],l=r[1],u=Array.isArray(t)?t:[];return Object(m.jsxs)("div",{children:[Object(m.jsx)("table",{children:Object(m.jsx)("tbody",{children:u.slice(5*c,5*c+5).map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e}),Object(m.jsxs)("div",{className:"button-container",children:[Object(m.jsx)("div",{onClick:function(){return a(e,5*c+t)},className:"array-button edit",children:"Edit"}),Object(m.jsx)("div",{onClick:function(){return n(5*c+t)},className:"array-button delete",children:"Delete"})]})]},e+t)}))})}),u.length>5&&Object(m.jsx)(D.a,{rowsPerPageOptions:[5],component:"div",count:u.length,rowsPerPage:5,page:c,onChangePage:function(e,t){l(t)}})]})},h=(a(146),function(e){var t=e.field.type;return console.log("LOOG uuu",e),Object(m.jsx)("div",{children:"object"===t?Object(m.jsx)(p,Object(c.a)({},e)):Object(m.jsx)(I,Object(c.a)({},e))})}),T=function(e){var t=e.field,a=e.json,s=void 0===a?[]:a,n=e.name,i=e.onChange,r=e.onClick,c=e.way,o=function(e,t){var a=Object(b.a)(s);a[e]=t,i(n,a)};return Object(m.jsxs)("div",{className:"array-edit-container",children:[Object(m.jsxs)("div",{className:"edit-title",children:[Object(m.jsx)("h2",{children:n}),Object(m.jsx)("button",{onClick:function(){var e=Object(b.a)(s);if("string"===t.innerType.type)e.push("");else{var a=y(t.innerType);e.push(a)}i(n,e)},children:"add"})]}),Object(m.jsx)("div",{children:Object(m.jsx)(h,{json:s,field:t.innerType,onClick:function(e,a){r(t.innerType,e,o,a,r,c+">"+n+(a+1))},removeItem:function(e){var t=s.filter((function(t,a){return a!==e}));i(n,t)}})})]})},g=a(289),v=a(119),x=a(7),S=function(e){var t=e.field,a=e.json,n=e.name,i=e.onChange,r=Object(v.a)({initialValues:{label:"string"===typeof n?n:"",value:a},validateOnBlur:!0,validationSchema:x.b({value:t}),onSubmit:function(){}});Object(s.useEffect)((function(){r.setFieldValue("value",a)}),[a]);return Object(m.jsx)("div",{children:Object(m.jsx)(g.a,{fullWidth:!0,name:"value",label:r.values.label,value:r.values.value,onChange:function(e){r.handleChange(e),r.setFieldTouched("value"),i(n,e.target.value)},error:r.touched.value&&Boolean(r.errors.value),helperText:r.touched.value&&r.errors.value})})},C=function(e){var t=e.field.type;return function(){switch(t){case"object":return Object(m.jsx)(f,Object(c.a)({},e));case"array":return Object(m.jsx)(T,Object(c.a)({},e));case"string":return Object(m.jsx)(S,Object(c.a)({},e));default:return null}}()},Y=function(e){return Object(m.jsx)(C,Object(c.a)({},e))},P=(a(245),function(e){var t=e.yupSchema,a=e.json,n=Object(s.useState)(a),i=Object(o.a)(n,2),r=i[0],l=i[1],u=Object(s.useState)(),d=Object(o.a)(u,2),j=d[0],b=d[1];return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"json-tree-window",children:Object(m.jsx)("div",{children:Object(m.jsx)(O,{field:t,json:r,onChange:function(e){l(e)},onClick:function(e,t,a,s,n,i){b({name:s,field:e,json:t,onChange:a,onClick:n,way:i})},selected:j})})}),Object(m.jsx)("div",{className:"json-editor-window",children:j&&Object(m.jsx)(Y,Object(c.a)({},j))})]})}),R=x.b({"Records Management Policy":x.b({Version:x.c().required("required"),Schema:x.b({ID:x.c().url("Enter valid url").required("required"),Major:x.c().required("required"),Minor:x.c().required("required")}),"Record Types":x.a().of(x.b({Name:x.c().required("required"),Definitions:x.a().of(x.b({Systems:x.a().of(x.c().required("required")),Aliases:x.a().of(x.b({"Policy Field":x.c().required("required"),"System Field":x.c().required("required")})),"Item Types":x.a().of(x.c().required("required")),"Singular Name":x.c().required("required"),"Plural Name":x.c().required("required"),"Ownership Description":x.c().required("required"),"Content Originator":x.c().required("required")})),Fields:x.a().of(x.b({Name:x.c().required("required"),"Is Data":x.c().required("required")}))}))})}),q={"Records Management Policy":{Version:"Tx3 Demo 1.0.0.2",Schema:{ID:"http://tx3services.com/schemas/0/0/records-management-policy.json",Major:"0",Minor:"0"},"Record Types":[{Name:"Test Case",Definitions:[{Systems:["qTest"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["test-case"],"Singular Name":"Test Case","Plural Name":"Test Cases","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Status","Is Data":"Yes"},{Name:"Type","Is Data":"Yes"},{Name:"Assigned To","Is Data":"Yes"},{Name:"Description","Is Data":"Yes"},{Name:"Precondition","Is Data":"Yes"},{Name:"Priority","Is Data":"Yes"},{Name:"qTest Version ID","Is Data":"Yes"},{Name:"GxP","Is Data":"Yes"}]},{Name:"qTest Test Step",Definitions:[{Systems:["qTest"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["test-step"],"Singular Name":"Test Step","Plural Name":"Test Steps","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Description","Is Data":"Yes"},{Name:"Expected Result","Is Data":"Yes"}]},{Name:"Test Run",Definitions:[{Systems:["qTest"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["test-run"],"Singular Name":"Test Run","Plural Name":"Test Runs","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Status","Is Data":"Yes"},{Name:"Target Release/Build","Is Data":"Yes"},{Name:"Test Case ID","Is Data":"Yes"},{Name:"Approval Requirement (Custom Field)","Is Data":"Yes"},{Name:"Custom Field","Is Data":"Yes"},{Name:"Environment","Is Data":"Yes"},{Name:"Assigned To","Is Data":"Yes"},{Name:"Priority","Is Data":"Yes"},{Name:"GxP","Is Data":"Yes"}]},{Name:"qTest Test Log",Definitions:[{Systems:["qTest"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["test-log"],"Singular Name":"Test Log","Plural Name":"Test Logs","Ownership Description":"created","Content Originator":"Tester"}],Fields:[{Name:"Test Case Name","Is Data":"Yes"},{Name:"Test Case Version","Is Data":"Yes"},{Name:"Status","Is Data":"Yes"},{Name:"Execution Type","Is Data":"Yes"},{Name:"Target Release/Build","Is Data":"Yes"},{Name:"Executed Start","Is Data":"Yes"},{Name:"Executed End","Is Data":"Yes"},{Name:"Execution Log Notes","Is Data":"Yes"}]},{Name:"qTest Test Step Log",Definitions:[{Systems:["qTest"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["test-step-log"],"Singular Name":"Test Step Log","Plural Name":"Test StepLogs","Ownership Description":"created","Content Originator":"Tester"}],Fields:[{Name:"Status","Is Data":"Yes"},{Name:"Description","Is Data":"Yes"},{Name:"Expected Result","Is Data":"Yes"},{Name:"Actual Result","Is Data":"Yes"}]},{Name:"Story","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["Story"],"Singular Name":"Story","Plural Name":"Stories","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Category","Is Data":"Yes"},{Name:"Resolution","Is Data":"Yes"}]},{Name:"XRay Scenario","Base Record Type":"XRay Test",Definitions:[{Systems:["JIRA"],"Item Types":["Test"],Constraints:[{Type:"Field Is Equal",Name:"Test Type",Value:"Cucumber"}],"Singular Name":"Test","Plural Name":"Tests","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Type","Is Data":"Yes"},{Name:"Cucumber Test Type","Is Data":"Yes"},{Name:"Cucumber Scenario","Is Data":"Yes"}]},{Name:"XRay Generic Test","Base Record Type":"XRay Test",Definitions:[{Systems:["JIRA"],"Item Types":["Test"],Constraints:[{Type:"Field Is Equal",Name:"Test Type",Value:"Generic"}],"Singular Name":"Test","Plural Name":"Tests","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Type","Is Data":"Yes"},{Name:"Generic Test Definition","Is Data":"Yes"}]},{Name:"XRay Manual Test","Base Record Type":"XRay Test",Definitions:[{Systems:["JIRA"],"Item Types":["Test"],Constraints:[{Type:"Field Is Equal",Name:"Test Type",Value:"Manual"}],"Singular Name":"Test","Plural Name":"Tests","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Type","Is Data":"Yes"},{Name:"Manual Test Steps","Is Data":"Yes"}]},{Name:"XRay Test","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],"Item Types":["Test"],"Singular Name":"Test","Plural Name":"Tests","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Type","Is Data":"Yes"}]},{Name:"XRay Pre-Condition","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],"Item Types":["Pre-Condition"],"Singular Name":"Pre-Condition","Plural Name":"Pre-Conditions","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Pre-Condition Type","Is Data":"Yes"},{Name:"Conditions","Is Data":"Yes"}]},{Name:"XRay Test Plan","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],"Item Types":["Test Plan"],"Singular Name":"Test Plan","Plural Name":"Test Plans","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Plan Status","Is Data":"Yes"},{Name:"Tests associated with a Test Plan","Is Data":"Yes"},{Name:"Begin Date","Is Data":"Yes"},{Name:"End Date","Is Data":"Yes"}]},{Name:"XRay Execution","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],"Item Types":["Test Execution","Sub Test Execution"],"Singular Name":"Test Plan","Plural Name":"Test Plans","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Execution Status","Is Data":"Yes"},{Name:"Tests association with a Test Execution","Is Data":"Yes"},{Name:"Test Environments","Is Data":"Yes"},{Name:"Test Plan","Is Data":"Yes"},{Name:"Begin Date","Is Data":"Yes"},{Name:"End Date","Is Data":"Yes"}]},{Name:"Defect","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["Bug"],"Singular Name":"Bug","Plural Name":"Bugs","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Category","Is Data":"Yes"},{Name:"Resolution","Is Data":"Yes"}]},{Name:"Issue",Definitions:[{Systems:["JIRA"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Singular Name":"Issue","Plural Name":"Issues","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Component","Is Data":"Yes"},{Name:"Description","Is Data":"Yes"},{Name:"Summary","Is Data":"Yes"},{Name:"Issue Type","Is Data":"Yes"},{Name:"Acceptance Criteria","Is Data":"Yes"},{Name:"Functional Specification","Is Data":"Yes"},{Name:"Design Specification","Is Data":"Yes"},{Name:"Configuration Specification","Is Data":"Yes"},{Name:"Risk Classification","Is Data":"Yes"},{Name:"Created","Is Data":"Yes"},{Name:"Started","Is Data":"Yes"},{Name:"Due Started","Is Data":"Yes"},{Name:"Due Date","Is Data":"Yes"},{Name:"Updated","Is Data":"Yes"},{Name:"Priority","Is Data":"Yes"},{Name:"Labels","Is Data":"Yes"},{Name:"Original Estimate","Is Data":"Yes"},{Name:"Remaining Estimate","Is Data":"Yes"},{Name:"Affects Version/s","Is Data":"Yes"},{Name:"Fix Version/s","Is Data":"Yes"},{Name:"Resolution Detail","Is Data":"Yes"},{Name:"GxP","Is Data":"Yes"},{Name:"Revision Reason","Is Data":"Yes"}]}]}},F=(a(246),function(){var e=s.useState(null),t=Object(o.a)(e,2);t[0],t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.readAsText(t),a.onload=function(){var e=JSON.parse(String(a.result));console.log("LOOG bob",e)}}})}),Object(m.jsx)("div",{children:Object(m.jsx)(P,{yupSchema:R,json:q})})]})}),w=(a(247),function(){return Object(m.jsx)(F,{})}),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,291)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))};a(248);r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root")),A()}},[[249,1,2]]]);
//# sourceMappingURL=main.d2a53fcf.chunk.js.map