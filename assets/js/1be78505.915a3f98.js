"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[514,457],{3238:function(e,t,a){a.r(t),a.d(t,{default:function(){return ie}});var n=a(7294),i=a(2350),l=a(2263),o=a(6291),r=a(8167),s=a(7462),c=a(3366),u=a(6010),d=a(7681),m=a(4806),b=a(2214),p=a(5492),h=a(5164),f=a(6742),v=a(3919),E=a(4400),_=function(e){return n.createElement("svg",(0,s.Z)({width:"20",height:"20",role:"img"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=a(4299),g=a(4973),C="sidebar_1tWv",Z="sidebarWithHideableNavbar_3srT",N="sidebarHidden_1xTt",I="sidebarLogo_28Z7",S="menu_1Iah",y="menuLinkText_3zte",w="menuWithAnnouncementBar_3acx",T="collapseSidebarButton_3YaP",x="collapseSidebarButtonIcon_V-RG",R="sidebarMenuIcon_1woU",A="sidebarMenuCloseIcon_3VvA",L="menuLinkExternal_1s3L",M=["items"],B=["item","onItemClick","collapsible","activePath"],P=["item","onItemClick","activePath","collapsible"];var H=function e(t,a){return"link"===t.type?(0,d.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},O=(0,n.memo)((function(e){var t=e.items,a=(0,c.Z)(e,M);return t.map((function(e,t){return n.createElement(W,(0,s.Z)({key:t,item:e},a))}))}));function W(e){switch(e.item.type){case"category":return n.createElement(D,e);case"link":default:return n.createElement(F,e)}}function D(e){var t,a,i,l=e.item,o=e.onItemClick,r=e.collapsible,d=e.activePath,m=(0,c.Z)(e,B),b=l.items,p=l.label,h=H(l,d),f=(a=h,i=(0,n.useRef)(a),(0,n.useEffect)((function(){i.current=a}),[a]),i.current),v=(0,n.useState)((function(){return!!r&&(!h&&l.collapsed)})),E=v[0],_=v[1],k=(0,n.useRef)(null),g=(0,n.useState)(void 0),C=g[0],Z=g[1],N=function(e){var t;void 0===e&&(e=!0),Z(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,n.useEffect)((function(){h&&!f&&E&&_(!1)}),[h,f,E]);var I=(0,n.useCallback)((function(e){e.preventDefault(),C||N(),setTimeout((function(){return _((function(e){return!e}))}),100)}),[C]);return 0===b.length?null:n.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":E})},n.createElement("a",(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":r,"menu__link--active":r&&h},t[y]=!r,t)),onClick:r?I:void 0,href:r?"#!":void 0},m),p),n.createElement("ul",{className:"menu__list",ref:k,style:{height:C},onTransitionEnd:function(){E||N(!1)}},n.createElement(O,{items:b,tabIndex:E?"-1":"0",onItemClick:o,collapsible:r,activePath:d})))}function F(e){var t,a=e.item,i=e.onItemClick,l=e.activePath,o=(e.collapsible,(0,c.Z)(e,P)),r=a.href,d=a.label,m=H(a,l);return n.createElement("li",{className:"menu__list-item",key:d},n.createElement(f.Z,(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[L]=!(0,v.Z)(r),t)),to:r},(0,v.Z)(r)&&{isNavLink:!0,exact:!0,onClick:i},o),d))}function z(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,g.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,g.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",T),onClick:t},n.createElement(_,{className:x}))}function U(e){var t=e.responsiveSidebarOpened,a=e.onClick;return n.createElement("button",{"aria-label":t?(0,g.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,g.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,u.Z)(R,A)},"\xd7"):n.createElement(k.Z,{className:R,height:24,width:24}))}var G=function(e){var t,a,i=e.path,l=e.sidebar,o=e.sidebarCollapsible,r=void 0===o||o,s=e.onCollapse,c=e.isHidden,f=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,n.useState)(!e),a=t[0],i=t[1];return(0,h.Z)((function(t){var a=t.scrollY;e||i(0===a)})),a}(),v=(0,d.LU)(),_=v.navbar.hideOnScroll,k=v.hideableSidebar,g=(0,m.Z)().isAnnouncementBarClosed,y=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];(0,b.Z)(t);var i=(0,p.Z)();return(0,n.useEffect)((function(){i===p.D.desktop&&a(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:(0,n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),T=y.showResponsiveSidebar,x=y.closeResponsiveSidebar,R=y.toggleResponsiveSidebar;return n.createElement("div",{className:(0,u.Z)(C,(t={},t[Z]=_,t[N]=c,t))},_&&n.createElement(E.Z,{tabIndex:-1,className:I}),n.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",S,(a={"menu--show":T},a[w]=!g&&f,a))},n.createElement(U,{responsiveSidebarOpened:T,onClick:R}),n.createElement("ul",{className:"menu__list"},n.createElement(O,{items:l,onItemClick:x,collapsible:r,activePath:i}))),k&&n.createElement(z,{onClick:s}))},K=a(9605),V=a(9457),Y=a(5977),q="docPage_3zOJ",J="docMainContainer_3Zec",Q="docMainContainerEnhanced_3hdE",X="docSidebarContainer_G8MK",j="docSidebarContainerHidden_nSSO",$="collapsedDocSidebar_1Qfl",ee="expandSidebarButtonIcon_1eUB",te="docItemWrapperEnhanced_1NqF",ae="docItemWrapper_tWa0";function ne(e){var t,a,o,s,c,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,h=(0,l.Z)(),f=h.siteConfig,v=h.isClient,E=b.pluginId,k=b.permalinkToSidebar,C=b.docsSidebars,Z=b.version,N=k[m.path],I=C[N],S=(0,n.useState)(!1),y=S[0],w=S[1],T=(0,n.useState)(!1),x=T[0],R=T[1],A=(0,n.useCallback)((function(){x&&R(!1),w(!y)}),[x]);return n.createElement(r.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:Z,tag:(0,d.os)(E,Z)}},n.createElement("div",{className:q},I&&n.createElement("div",{className:(0,u.Z)(X,(t={},t[j]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(X)&&y&&R(!0)},role:"complementary"},n.createElement(G,{key:N,sidebar:I,path:m.path,sidebarCollapsible:null==(a=null==(o=f.themeConfig)?void 0:o.sidebarCollapsible)||a,onCollapse:A,isHidden:x}),x&&n.createElement("div",{className:$,title:(0,g.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,g.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:A,onClick:A},n.createElement(_,{className:ee}))),n.createElement("main",{className:(0,u.Z)(J,(s={},s[Q]=y||!I,s))},n.createElement("div",{className:(0,u.Z)("container padding-vert--lg",ae,(c={},c[te]=y,c))},n.createElement(i.Zo,{components:K.Z},p)))))}var ie=function(e){var t=e.route.routes,a=e.versionMetadata,i=e.location,l=t.find((function(e){return(0,Y.LX)(i.pathname,e)}));return l?n.createElement(ne,{currentDocRoute:l,versionMetadata:a},(0,o.Z)(t)):n.createElement(V.default,e)}},9457:function(e,t,a){a.r(t);var n=a(7294),i=a(8167),l=a(4973);t.default=function(){return n.createElement(i.Z,{title:"Page Not Found"},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);