"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[561],{3905:function(e,n,a){a.d(n,{kt:function(){return C}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function _(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),l=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},A=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,A=_(e,["components","mdxType","originalType","parentName"]),C=l(a),m=r,O=C["".concat(s,".").concat(m)]||C[m]||c[m]||o;return a?t.createElement(O,i(i({ref:n},A),{},{components:a})):t.createElement(O,i({ref:n},A))}));function C(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=A;var _={};for(var s in n)hasOwnProperty.call(n,s)&&(_[s]=n[s]);_.originalType=e,_.mdxType="string"==typeof e?e:r,i[1]=_;for(var l=2;l<o;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}A.displayName="MDXCreateElement"},8578:function(e,n,a){var t=(0,a(7294).createContext)(void 0);n.Z=t},4806:function(e,n,a){var t=a(7294),r=a(8578);n.Z=function(){var e=(0,t.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7806:function(e,n,a){a.r(n),a.d(n,{default:function(){return E},frontMatter:function(){return d},metadata:function(){return M},toc:function(){return f}});var t=a(7462),r=a(3366),o=a(7294),i=a(3905),_=a(4806),s=a(6010),l="tabItem_2kG2",c="tabItemActive_3NDg";var A=37,C=39;var m=function(e){var n=e.lazy,a=e.block,t=e.defaultValue,r=e.values,i=e.groupId,m=e.className,O=(0,_.Z)(),R=O.tabGroupChoices,d=O.setTabGroupChoices,M=(0,o.useState)(t),f=M[0],u=M[1],E=o.Children.toArray(e.children),p=[];if(null!=i){var S=R[i];null!=S&&S!==f&&r.some((function(e){return e.value===S}))&&u(S)}var L=function(e){var n=e.currentTarget,a=p.indexOf(n),t=r[a].value;u(t),null!=i&&(d(i,t),setTimeout((function(){var e,a,t,r,o,i,_,s;(e=n.getBoundingClientRect(),a=e.top,t=e.left,r=e.bottom,o=e.right,i=window,_=i.innerHeight,s=i.innerWidth,a>=0&&o<=s&&r<=_&&t>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c),setTimeout((function(){return n.classList.remove(c)}),2e3))}),150))},N=function(e){var n,a;switch(e.keyCode){case C:var t=p.indexOf(e.target)+1;a=p[t]||p[0];break;case A:var r=p.indexOf(e.target)-1;a=p[r]||p[p.length-1]}null==(n=a)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},m)},r.map((function(e){var n=e.value,a=e.label;return o.createElement("li",{role:"tab",tabIndex:f===n?0:-1,"aria-selected":f===n,className:(0,s.Z)("tabs__item",l,{"tabs__item--active":f===n}),key:n,ref:function(e){return p.push(e)},onKeyDown:N,onFocus:L,onClick:L},a)}))),n?(0,o.cloneElement)(E.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},E.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==f})}))))};var O=function(e){var n=e.children,a=e.hidden,t=e.className;return o.createElement("div",{role:"tabpanel",hidden:a,className:t},n)},R=["components"],d={id:"macros",title:"Config Macros",sidebar_label:"Config Macros"},M={unversionedId:"code_organization/macros",id:"code_organization/macros",isDocsHomePage:!1,title:"Config Macros",description:"Macros allow you to standardize naming schemes, formats or even allow you to",source:"@site/docs/code_organization/macros.md",sourceDirName:"code_organization",slug:"/code_organization/macros",permalink:"/Legion-Docs/docs/code_organization/macros",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/code_organization/macros.md",version:"current",sidebar_label:"Config Macros",frontMatter:{id:"macros",title:"Config Macros",sidebar_label:"Config Macros"},sidebar:"someSidebar",previous:{title:"Mod Overview",permalink:"/Legion-Docs/docs/index"},next:{title:"M",permalink:"/Legion-Docs/docs/code_organization/classnames"}},f=[],u={toc:f};function E(e){var n=e.components,a=(0,r.Z)(e,R);return(0,i.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Macros allow you to standardize naming schemes, formats or even allow you to\nreplace condensed form of code. Macro definitions will have a few rules for them."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Starts with ",(0,i.kt)("inlineCode",{parentName:"li"},"MACRO")," to make it ",(0,i.kt)("strong",{parentName:"li"},"very")," obvious its a macro."),(0,i.kt)("li",{parentName:"ol"},"In all caps, ex: ",(0,i.kt)("inlineCode",{parentName:"li"},"MACRO_MY_NAME"),", which again makes it ",(0,i.kt)("strong",{parentName:"li"},"very")," obvious\nand clear that this is a macro and brings attention to it."),(0,i.kt)("li",{parentName:"ol"},"Snake case which means ",(0,i.kt)("inlineCode",{parentName:"li"},"_")," between each word.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Fundamentals\n    #define MACRO_ADDON_PREFIX SWLS\n    #define MACRO_AUTHORS Namenai, Ur Mom, SWOP, The 6th Element\n    \n// General functions\n    #define MACRO_QUOTE(item) #item\n    #define MACRO_SINGLE_QUOTE(item) \'##item##\'\n    #define MACRO_CONCAT(item1,item2)\\\n        item1##item2\n    #define MACRO_UNDERSCORE_CONCAT2(item1,item2)\\\n        item1##_##item2\n    #define MACRO_UNDERSCORE_CONCAT3(item1,item2,item3)\\\n        item1##_##item2##_##item3\n    #define MACRO_UNDERSCORE_CONCAT4(item1,item2,item3,item4)\\\n        item1##_##item2##_##item3##_##item4\n    #define MACRO_UNDERSCORE_CONCAT5(item1,item2,item3,item4,item5)\\\n        item1##_##item2##_##item3##_##item4##_##item5\n\n    #define MACRO_ADD_PREFIX(item) MACRO_ADDON_PREFIX##_##item\n\n// Weapon related functions\n    #define MACRO_WEAPON_PREFIX MACRO_UNDERSCORE_CONCAT2(MACRO_ADDON_PREFIX,Weapon)\n\n    #define MACRO_WEAPON_CLASS(faction,family,weaponname)\\\n        MACRO_UNDERSCORE_CONCAT4(MACRO_WEAPON_PREFIX,faction,family,weaponname)\n\n    #define MACRO_WEAPON_CLASS_NOFAM(faction,name)\\\n        MACRO_UNDERSCORE_CONCAT3(MACRO_WEAPON_PREFIX,faction,name)\n\n    #define MACRO_SCOPE_MAG(zoom) 0.25/zoom\n\n// Mag related\n    #define MACRO_MAG_PREFIX MACRO_UNDERSCORE_CONCAT2(MACRO_ADDON_PREFIX,Magazine)\n    #define MACRO_MAGWELL_PREFIX MACRO_UNDERSCORE_CONCAT2(MACRO_ADDON_PREFIX,Magwell)\n\n    #define MACRO_MAGAZINE_CLASS(name,count)\\\n        MACRO_UNDERSCORE_CONCAT3(MACRO_MAG_PREFIX,name,count)\n\n    #define MACRO_MAGWELL_CLASS(name)\\\n        MACRO_UNDERSCORE_CONCAT2(MACRO_MAGWELL_PREFIX,name)\n    #define MACRO_MAGWELL_CLASS_ARRAY(name)\\\n        MACRO_UNDERSCORE_CONCAT2(MACRO_MAGWELL_PREFIX,name)[]\n\n// Ammo related\n    #define MACRO_AMMO_PREFIX MACRO_UNDERSCORE_CONCAT2(MACRO_ADDON_PREFIX,Ammo)\n\n    #define MACRO_AMMO_CLASS(name)\\\n        MACRO_UNDERSCORE_CONCAT2(MACRO_AMMO_PREFIX,name)\n\n// Vehicle related\n    #define MACRO_BASIC_AIR_WEAPONS\\\n        "Laserdesignator_pilotCamera","CMFlareLauncher"\n    #define MACRO_BASIC_AIR_MAGS\\ \n        "Laserbatteries","300Rnd_CMFlare_Chaff_Magazine","300Rnd_CMFlare_Chaff_Magazine"\n\n    #define MACRO_VEHICLE_CLASS(group,name)\\ \n        MACRO_UNDERSCORE_CONCAT3(MACRO_ADDON_PREFIX,group,name)\n\n// Uniforms\n    //TO-DO later\n\n// Patches\n    #define MARCO_PATCH_PREFIX MACRO_UNDERSCORE_CONCAT2(MACRO_ADDON_PREFIX,Patch)\n    #define MACRO_PATCH_NAME(component)\\\n        MACRO_UNDERSCORE_CONCAT2(MARCO_PATCH_PREFIX,component)\n\n    #define MACRO_A3_PATCH "A3_Data_F_Tank_Loadorder"\n    #define MACRO_OTHER_PATCHES CBA_Watever,SWOP,ACE,TFAR\n    #define MACRO_LOAD_PATCHES MACRO_A3_PATCH,MACRO_OTHER_PATCHES\n\n    #define MACRO_LEVEL_ROOT MACRO_PATCH_NAME(main)\n    #define MACRO_LEVEL_1 MACRO_PATCH_NAME(pbo1),MACRO_PATCH_NAME(pbo2)\n    #define MACRO_LEVEL_2 MACRO_PATCH_NAME(pbo3),MACRO_PATCH_NAME(pbo4)\n    #define MACRO_END_PATCH MACRO_LEVEL_2\n    \n\n// Helmets\n    #define MACRO_HELMET_PREFIX MACRO_UNDERSCORE_CONCAT2(MACRO_ADDON_PREFIX,Helmet)\n    #define MACRO_HELMET_CLASS(group,name)\\ \n        MACRO_UNDERSCORE_CONCAT3(MACRO_HELMET_PREFIX,group,name)\n')),(0,i.kt)("p",null,"Now here is an ",(0,i.kt)("inlineCode",{parentName:"p"},"example.cpp")," file with hwo you would type it."),(0,i.kt)("p",null,"And then here is the same file, preprocessed with the macros."),(0,i.kt)(m,{defaultValue:"BeforePreprocess",values:[{label:"Before Preprocess",value:"BeforePreprocess"},{label:"After Preprocess",value:"AfterPreprocess"}],mdxType:"Tabs"},(0,i.kt)(O,{value:"BeforePreprocess",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Macro demo\nclass unit_testing {\n\n    class general_macros {\n        modPrefix = MACRO_ADDON_PREFIX\n        class MACRO_ADDON_PREFIX {};\n\n        authors = MACRO_AUTHORS\n    }\n    \n    class weapons {\n        //Normal weapons that have families, DC series, A180 series, E11 series\n        class MACRO_WEAPON_CLASS(Republic,DC_15,a) {\n            myZoom = MACRO_SCOPE_MAG(4); //this is x4 zoom\n        };\n        //Theres E5-S,E5-C and E5-M, but wat is E5? its just by it self, so this\n        //macro handles for that.\n        class MACRO_WEAPON_CLASS(CIS,E5,Rifle) {};\n        //The Z6 doesnt belong to any family/group of weapons.\n        class MACRO_WEAPON_CLASS_NOFAM(Republic,Z6) {};\n    }\n\n    class mags {\n        class MACRO_MAGAZINE_CLASS(dc15a_low,60) {};\n        class MACRO_MAGAZINE_CLASS(dc15a_high,10) {};\n\n        class MACRO_MAGWELL_CLASS(dc15) {\n            MACRO_MAGWELL_CLASS_ARRAY(dc15) = {\n                MACRO_MAGAZINE_CLASS(dc15a_low,60),\n                MACRO_MAGAZINE_CLASS(dc15a_high,10)\n            };\n        };\n    }\n\n    class ammo {\n        myAmmo = MACRO_AMMO_CLASS(dc15_high);\n    }\n\n    class vehicles {\n        class MACRO_VEHICLE_CLASS(Laat,Mk3) {};\n        class MACRO_VEHICLE_CLASS(Laat,Mk4):MACRO_VEHICLE_CLASS(laat,mk3){};\n    }   \n\n    class cfgPatches {\n        //The idea here is you kind of flatten our the load order to make it a\n        //really simple Topological sort.\n\n        patches_load_order[] = {\n            MACRO_LOAD_PATCHES,\n            MACRO_LEVEL_ROOT,\n            MACRO_LEVEL_1,\n            MACRO_LEVEL_2,\n            MACRO_END_PATCH\n        };\n    }\n\n    class helmet {\n        class MACRO_HELMET_CLASS(arc,jesse) {};\n        class MACRO_HELMET_CLASS(inf,bobby) {};\n        class MACRO_HELMET_CLASS(pilot,namenai) {};\n    }\n}\n"))),(0,i.kt)(O,{value:"AfterPreprocess",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'class unit_testing\n{\n    class general_macros\n    {\n        modPrefix="SWLS";\n        class SWLS\n        {\n        };\n        authors="Namenai, Ur Mom, SWOP, The 6th Element";\n    };\n    class weapons\n    {\n        class SWLS_Weapon_Republic_DC_15_a\n        {\n            myZoom="0.25/4";\n        };\n        class SWLS_Weapon_CIS_E5_Rifle\n        {\n        };\n        class SWLS_Weapon_Republic_Z6\n        {\n        };\n    };\n    class mags\n    {\n        class SWLS_Magazine_dc15a_low_60\n        {\n        };\n        class SWLS_Magazine_dc15a_high_10\n        {\n        };\n        class SWLS_Magwell_dc15\n        {\n            SWLS_Magwell_dc15[]=\n            {\n                "SWLS_Magazine_dc15a_low_60",\n                "SWLS_Magazine_dc15a_high_10"\n            };\n        };\n    };\n    class ammo\n    {\n        myAmmo="SWLS_Ammo_dc15_high";\n    };\n    class vehicles\n    {\n        class SWLS_Laat_Mk3\n        {\n        };\n        class SWLS_Laat_Mk4: SWLS_Laat_Mk3\n        {\n        };\n    };\n    class cfgPatches\n    {\n        patches_load_order[]=\n        {\n            "A3_Data_F_Tank_Loadorder",\n            "CBA_Watever",\n            "SWOP",\n            "ACE",\n            "TFAR",\n            "SWLS_Patch_main",\n            "SWLS_Patch_pbo1",\n            "SWLS_Patch_pbo2",\n            "SWLS_Patch_pbo3",\n            "SWLS_Patch_pbo4",\n            "SWLS_Patch_pbo3",\n            "SWLS_Patch_pbo4"\n        };\n    };\n    class helmet\n    {\n        class SWLS_Helmet_arc_jesse\n        {\n        };\n        class SWLS_Helmet_inf_bobby\n        {\n        };\n        class SWLS_Helmet_pilot_namenai\n        {\n        };\n    };\n};\n\n')))))}E.isMDXComponent=!0},6010:function(e,n,a){function t(e){var n,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(a=t(e[n]))&&(r&&(r+=" "),r+=a);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(n=t(e))&&(r&&(r+=" "),r+=n);return r}a.d(n,{Z:function(){return r}})}}]);