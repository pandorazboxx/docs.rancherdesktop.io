"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[475],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,h=s["".concat(u,".").concat(m)]||s[m]||p[m]||l;return t?r.createElement(h,a(a({ref:n},d),{},{components:t})):r.createElement(h,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=s;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(7462),o=t(7294),l=t(2389),a=t(9443);var i=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3616),c=t(6010),d="tabItem_vU9c";function p(e){var n,t,l,a=e.lazy,p=e.block,s=e.defaultValue,m=e.values,h=e.groupId,k=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,u.lx)(v,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===s?s:null!=(n=null!=s?s:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=f[0])?void 0:l.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=i(),y=w.tabGroupChoices,x=w.setTabGroupChoices,N=(0,o.useState)(b),T=N[0],O=N[1],C=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=y[h];null!=I&&I!==T&&v.some((function(e){return e.value===I}))&&O(I)}var D=function(e){var n=e.currentTarget,t=C.indexOf(n),r=v[t].value;r!==T&&(E(n),O(r),null!=h&&x(h,r))},Z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;t=C[r]||C[0];break;case"ArrowLeft":var o=C.indexOf(e.currentTarget)-1;t=C[o]||C[C.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},k)},v.map((function(e){var n=e.value,t=e.label,l=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return C.push(e)},onKeyDown:Z,onFocus:D,onClick:D},l,{className:(0,c.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),a?(0,o.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function s(e){var n=(0,l.Z)();return o.createElement(p,(0,r.Z)({key:String(n)},e))}},6850:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return h}});var r=t(7462),o=t(3366),l=(t(7294),t(3905)),a=t(6396),i=t(8215),u=["components"],c={title:"Hello World Example"},d=void 0,p={unversionedId:"how-to-guides/hello-world-example",id:"how-to-guides/hello-world-example",title:"Hello World Example",description:"This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster.",source:"@site/docs/how-to-guides/hello-world-example.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/hello-world-example",permalink:"/how-to-guides/hello-world-example",editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/hello-world-example.md",tags:[],version:"current",frontMatter:{title:"Hello World Example"},sidebar:"tutorialSidebar",previous:{title:"Working with Containers",permalink:"/tutorials/working-with-containers"},next:{title:"Debugging a Container App with VS Code Docker extension",permalink:"/how-to-guides/vs-code-docker"}},s=[{value:"Hello World example",id:"hello-world-example",children:[],level:3},{value:"NGINX example",id:"nginx-example",children:[],level:3}],m={toc:s};function h(e){var n=e.components,t=(0,o.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster."),(0,l.kt)("p",null,"Rancher Desktop works with two container engines, ",(0,l.kt)("a",{parentName:"p",href:"https://containerd.io/"},(0,l.kt)("inlineCode",{parentName:"a"},"containerd"))," and ",(0,l.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"Moby"),", the open-sourced components of the Docker ecosystem. For ",(0,l.kt)("inlineCode",{parentName:"p"},"nerdctl"),", use the containerd runtime. For ",(0,l.kt)("inlineCode",{parentName:"p"},"docker"),", use the Moby (",(0,l.kt)("inlineCode",{parentName:"p"},"dockerd"),") runtime."),(0,l.kt)("h3",{id:"hello-world-example"},"Hello World example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Create a folder:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkdir ../hello-world\ncd ../hello-world\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Create a Dockerfile with the command below.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'FROM alpine  \nCMD ["echo", "Hello World!!"]\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Build and run the image for verification purposes:")),(0,l.kt)(a.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nerdctl build -t helloworld:v1.0 .\nnerdctl images | grep helloworld\nnerdctl run --rm helloworld:v1.0\nnerdctl rmi helloworld:v1.0 #To remove the image\n"))),(0,l.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker build -t helloworld:v1.0 .\ndocker images | grep helloworld\ndocker run --rm helloworld:v1.0\ndocker rmi helloworld:v1.0 #To remove the image\n")))),(0,l.kt)("h3",{id:"nginx-example"},"NGINX example"),(0,l.kt)("p",null,"Make sure that you switch the ",(0,l.kt)("inlineCode",{parentName:"p"},"container runtime")," setting in the ",(0,l.kt)("strong",{parentName:"p"},"Kubernetes Settings")," panel to either ",(0,l.kt)("inlineCode",{parentName:"p"},"dockerd")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"containerd")," as needed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Create a folder and add a sample index.html file as follows:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'mkdir ../nginx\ncd ../nginx\necho "<h1>Hello World from NGINX!!</h1>" > index.html\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Create a Dockerfile with the command below.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"FROM nginx:alpine\nCOPY . /usr/share/nginx/html\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Build and run the image for verification purposes:")),(0,l.kt)(a.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nerdctl build -t nginx-helloworld:v1.0 .\nnerdctl images | grep nginx-helloworld\nnerdctl run -d -p 8080:80 --name my-site nginx-helloworld:v1.0\n"))),(0,l.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker build -t nginx-helloworld:v1.0 .\ndocker images | grep nginx-helloworld\ndocker run -d -p 8080:80 --name my-site nginx-helloworld:v1.0\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Check your list of running containers:")),(0,l.kt)(a.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'nerdctl ps\nCONTAINER ID    IMAGE                                      COMMAND                   CREATED           STATUS    PORTS                   NAMES\nb6775a69ab93    docker.io/library/nginx-helloworld:v1.0    "/docker-entrypoint.\u2026"    48 seconds ago    Up        0.0.0.0:8080->80/tcp    my-site\n'))),(0,l.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'docker ps \nCONTAINER ID   IMAGE                   COMMAND                  CREATED          STATUS          PORTS                                   NAMES\n5f50ba3f504c   nginx-helloworld:v1.0   "/docker-entrypoint.\u2026"   7 seconds ago    Up 6 seconds    0.0.0.0:8080->80/tcp, :::8080->80/tcp   my-site\n')))),(0,l.kt)("p",null,"Point your web browser to ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost:8080"),", and you will see the nginx intro screen. If you prefer to stay on the command line, use ",(0,l.kt)("inlineCode",{parentName:"p"},"curl localhost:8080"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To stop, remove the container and delete the image:")),(0,l.kt)(a.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nerdctl stop <container-id>\nnerdctl rm <container-id>\nnerdctl ps #to verify nothing is running \nnerdctl rmi nginx-helloworld:v1.0 #to remove the image\n"))),(0,l.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker stop <container-id>\ndocker rm <container-id>\ndocker ps #to verify nothing is running \ndocker rmi nginx-helloworld:v1.0 #to remove the image\n")))))}h.isMDXComponent=!0}}]);