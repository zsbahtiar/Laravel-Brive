import{O as I,x as j,Q as b,R as V,g,a as r,b as d,w as c,F as k,o as i,H as B,d as s,h as u,v as h,e as D,t as o,c as w,D as P,A as N,C as U}from"./app-26ecd550.js";import{_ as A,a as E}from"./AuthenticatedLayout-5bd31b61.js";import{a as F}from"./TextInput-bd26cd28.js";import{_ as x}from"./PrimaryButton-61fe9c93.js";import{_ as H}from"./SelectInput-027eaa7f.js";import{_ as $}from"./DangerButton-8cef36c0.js";import{r as O,a as y,_ as L,b as M}from"./Pagination-898bc216.js";import Q from"./Create-e14c031d.js";import R from"./Edit-db5e27c3.js";import T from"./Delete-84b64c8c.js";import q from"./DeleteBulk-cf526310.js";import{_ as z}from"./Checkbox-539d614c.js";import"./index-99a0f9d6.js";import"./SecondaryButton-8f0495a8.js";const G={class:"space-y-4"},J={class:"px-4 sm:px-0"},K={class:"rounded-lg overflow-hidden w-fit"},W={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},X={class:"flex justify-between p-2"},Y={class:"flex space-x-2"},Z={class:"overflow-x-auto scrollbar-table"},ee={class:"w-full"},se={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},te={class:"dark:bg-gray-900/50 text-left"},le={class:"px-2 py-4 text-center"},ae=s("th",{class:"px-2 py-4 text-center"},"#",-1),re={class:"flex justify-between items-center"},oe={class:"flex justify-between items-center"},ne={class:"px-2 py-4"},de={class:"flex justify-between items-center"},ie={class:"flex justify-between items-center"},pe=s("th",{class:"px-2 py-4 sr-only"},"Action",-1),ce={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},ue=["value"],me={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},fe={class:"whitespace-nowrap py-4 px-2 sm:py-3"},he={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ye={class:"whitespace-nowrap py-4 px-2 sm:py-3"},_e={class:"whitespace-nowrap py-4 px-2 sm:py-3"},be={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ge={class:"whitespace-nowrap py-4 px-2 sm:py-3"},we={class:"flex justify-center items-center"},ve={class:"rounded-md overflow-hidden"},ke={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},Ee={__name:"Index",props:{title:String,filters:Object,users:Object,roles:Object,breadcrumbs:Object,perPage:Number},setup(m){const n=m,e=I({params:{search:n.filters.search,field:n.filters.field,order:n.filters.order,perPage:n.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,user:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),f=a=>{e.params.field=a,e.params.order=e.params.order==="asc"?"desc":"asc"};j(()=>b.exports._.cloneDeep(e.params),b.exports.debounce(()=>{let a=b.exports.pickBy(e.params);V.Inertia.get(route("user.index"),a,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const C=a=>{var t;a.target.checked===!1?e.selectedId=[]:(t=n.users)==null||t.data.forEach(p=>{e.selectedId.push(p.id)})},S=()=>{var a;((a=n.users)==null?void 0:a.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(a,t)=>{const p=N("tooltip");return i(),g(k,null,[r(d(B),{title:n.title},null,8,["title"]),r(A,null,{default:c(()=>[r(E,{title:m.title,breadcrumbs:m.breadcrumbs},null,8,["title","breadcrumbs"]),s("div",G,[s("div",J,[s("div",K,[u(r(x,{class:"rounded-none",onClick:t[0]||(t[0]=l=>e.createOpen=!0)},{default:c(()=>[D(o(a.lang().button.add),1)]),_:1},512),[[h,a.can(["create user"])]]),r(Q,{show:e.createOpen,onClose:t[1]||(t[1]=l=>e.createOpen=!1),roles:n.roles},null,8,["show","roles"]),r(R,{show:e.editOpen,onClose:t[2]||(t[2]=l=>e.editOpen=!1),user:e.user,roles:n.roles},null,8,["show","user","roles"]),r(T,{show:e.deleteOpen,onClose:t[3]||(t[3]=l=>e.deleteOpen=!1),user:e.user},null,8,["show","user"]),r(q,{show:e.deleteBulkOpen,onClose:t[4]||(t[4]=l=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId},null,8,["show","selectedId"])])]),s("div",W,[s("div",X,[s("div",Y,[r(H,{modelValue:e.params.perPage,"onUpdate:modelValue":t[5]||(t[5]=l=>e.params.perPage=l),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),u((i(),w($,{onClick:t[6]||(t[6]=l=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:c(()=>[r(d(O),{class:"w-5 h-5"})]),_:1})),[[h,e.selectedId.length!=0&&a.can(["delete user"])],[p,a.lang().tooltip.delete_selected]])]),r(F,{modelValue:e.params.search,"onUpdate:modelValue":t[7]||(t[7]=l=>e.params.search=l),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:a.lang().placeholder.search},null,8,["modelValue","placeholder"])]),s("div",Z,[s("table",ee,[s("thead",se,[s("tr",te,[s("th",le,[r(z,{checked:e.multipleSelect,"onUpdate:checked":t[8]||(t[8]=l=>e.multipleSelect=l),onChange:C},null,8,["checked"])]),ae,s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[9]||(t[9]=l=>f("name"))},[s("div",re,[s("span",null,o(a.lang().label.name),1),r(d(y),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[10]||(t[10]=l=>f("email"))},[s("div",oe,[s("span",null,o(a.lang().label.email),1),r(d(y),{class:"w-4 h-4"})])]),s("th",ne,o(a.lang().label.role),1),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[11]||(t[11]=l=>f("created_at"))},[s("div",de,[s("span",null,o(a.lang().label.created),1),r(d(y),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[12]||(t[12]=l=>f("updated_at"))},[s("div",ie,[s("span",null,o(a.lang().label.updated),1),r(d(y),{class:"w-4 h-4"})])]),pe])]),s("tbody",null,[(i(!0),g(k,null,P(m.users.data,(l,v)=>(i(),g("tr",{key:v,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[s("td",ce,[u(s("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",onChange:S,value:l.id,"onUpdate:modelValue":t[13]||(t[13]=_=>e.selectedId=_)},null,40,ue),[[U,e.selectedId]])]),s("td",me,o(++v),1),s("td",fe,o(l.name),1),s("td",he,o(l.email),1),s("td",ye,o(l.roles.length==0?"not selected":l.roles[0].name),1),s("td",_e,o(l.created_at),1),s("td",be,o(l.updated_at),1),s("td",ge,[s("div",we,[s("div",ve,[u((i(),w(x,{type:"button",onClick:_=>(e.editOpen=!0,e.user=l),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[r(d(M),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[h,a.can(["update user"])],[p,a.lang().tooltip.edit]]),u((i(),w($,{type:"button",onClick:_=>(e.deleteOpen=!0,e.user=l),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[r(d(O),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[h,a.can(["delete user"])],[p,a.lang().tooltip.delete]])])])])]))),128))])])]),s("div",ke,[r(L,{links:n.users,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{Ee as default};