"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[4],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(g,o(o({ref:n},s),{},{components:t})):a.createElement(g,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5393:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return v},default:function(){return N},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return y}});var a=t(7462),r=t(3366),l=t(7294),o=t(3905),i=t(2389),u=t(9443);var c=function(){var e=(0,l.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(3616),d=t(6010),p="tabItem_vU9c";function m(e){var n,t,r,o=e.lazy,i=e.block,u=e.defaultValue,m=e.values,g=e.groupId,f=e.className,k=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,s.lx)(h,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(n=null!=u?u:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=k[0])?void 0:r.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=c(),T=y.tabGroupChoices,N=y.setTabGroupChoices,x=(0,l.useState)(b),I=x[0],w=x[1],E=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var O=T[g];null!=O&&O!==I&&h.some((function(e){return e.value===O}))&&w(O)}var D=function(e){var n=e.currentTarget,t=E.indexOf(n),a=h[t].value;a!==I&&(C(n),w(a),null!=g&&N(g,a))},A=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;t=E[r]||E[E.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":i},f)},h.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:function(e){return E.push(e)},onKeyDown:A,onFocus:D,onClick:D},r,{className:(0,d.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":I===n})}),null!=t?t:n)}))),o?(0,l.cloneElement)(k.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function g(e){var n=(0,i.Z)();return l.createElement(m,(0,a.Z)({key:String(n)},e))}var f=function(e){var n=e.children,t=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:t,className:a},n)},k=["components"],h={},v="Images",b={unversionedId:"images",id:"images",title:"Images",description:"Rancher Desktop provides the ability to build, push, and pull images via the",source:"@site/docs/images.md",sourceDirName:".",slug:"/images",permalink:"/images",editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/images.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Preferences",permalink:"/preferences"},next:{title:"FAQ",permalink:"/faq"}},y=[{value:"General Usage",id:"general-usage",children:[],level:2},{value:"Listing Images",id:"listing-images",children:[],level:2},{value:"Building Images",id:"building-images",children:[],level:2},{value:"Tagging Images",id:"tagging-images",children:[],level:2},{value:"Removing Images",id:"removing-images",children:[],level:2}],T={toc:y};function N(e){var n=e.components,t=(0,r.Z)(e,k);return(0,o.kt)("wrapper",(0,a.Z)({},T,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"images"},"Images"),(0,o.kt)("p",null,"Rancher Desktop provides the ability to build, push, and pull images via the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containerd/nerdctl"},"NERDCTL")," project and the Docker CLI."),(0,o.kt)("p",null,"Note, both ",(0,o.kt)("inlineCode",{parentName:"p"},"nerdctl")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," are put into the path automatically. This occurs during the installer on Windows, and upon first run on macOS and Linux."),(0,o.kt)("h2",{id:"general-usage"},"General Usage"),(0,o.kt)("p",null,"Using either tool requires Rancher Desktop to be running with the appropriate container runtime. For ",(0,o.kt)("inlineCode",{parentName:"p"},"nerdctl"),", use the containerd runtime. For ",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),", use the Moby runtime."),(0,o.kt)("p",null,"You can learn about all of the command options and display the help documentation by running:"),(0,o.kt)(g,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(f,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl -h\n")),(0,o.kt)("p",null,"The initial set of images are stored in the same containerd that Kubernetes uses,\nand are part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"k8s.io")," namespace. You can also switch to a namespace called\n",(0,o.kt)("inlineCode",{parentName:"p"},"default")," if you wish to build or pull images into a different namespace. Currently\nthe only way to create other namespaces is to build or pull an image with the\n",(0,o.kt)("inlineCode",{parentName:"p"},"nerdctl")," CLI, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--namespace <NAMESPACE_NAME>")," option.")),(0,o.kt)(f,{value:"docker",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker --help\n")))),(0,o.kt)("h2",{id:"listing-images"},"Listing Images"),(0,o.kt)("p",null,"To see the images currently available, run the following command:"),(0,o.kt)(g,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(f,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl images\n"))),(0,o.kt)(f,{value:"docker",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker images\n")))),(0,o.kt)("h2",{id:"building-images"},"Building Images"),(0,o.kt)(g,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(f,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Building images has a similar feel to existing tools. For example, consider\nrunning ",(0,o.kt)("inlineCode",{parentName:"p"},"nerdctl")," from a directory with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," where the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is\nusing a scratch image."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl build .\n[+] Building 0.1s (4/4) FINISHED\n => [internal] load build definition from Dockerfile\n => => transferring dockerfile: 31B\n => [internal] load .dockerignore\n => => transferring context: 2B\n => [internal] load build context\n => => transferring context: 33B\n => CACHED [1/1] ADD anvil-app /\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nerdctl")," has options for tagging at the same time as building and other options you've\ncome to expect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl build -t TAG .\n"))),(0,o.kt)(f,{value:"docker",mdxType:"TabItem"},(0,o.kt)("p",null,"Consider running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," from a directory with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," where the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is\nusing a scratch image."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker build .\nSending build context to Docker daemon  13.93MB\nStep 1/5 : FROM some-repo/some-image\n ---\x3e e57ace221dff\n...\n ---\x3e fd984c4cbf97\nSuccessfully built fd984c4cbf97\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker")," has options for tagging at the same time as building and other options you've\ncome to expect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker build -t TAG .\n")))),(0,o.kt)("h2",{id:"tagging-images"},"Tagging Images"),(0,o.kt)("p",null,"If you want to tag an existing image you've built you can use the following\ncommand:"),(0,o.kt)(g,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(f,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]\n"))),(0,o.kt)(f,{value:"docker",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]\n")))),(0,o.kt)("h2",{id:"removing-images"},"Removing Images"),(0,o.kt)("p",null,"To remove an image, run the following command:"),(0,o.kt)(g,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(f,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl rmi IMAGE\n"))),(0,o.kt)(f,{value:"docker",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker rmi IMAGE\n")))))}N.isMDXComponent=!0}}]);