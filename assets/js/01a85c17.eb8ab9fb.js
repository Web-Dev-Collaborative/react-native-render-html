(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4013,2075],{9684:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(7560),r=a(2784),l=a(6566),i=a(7614),c=a(77),s=a(7513),m=a(759),u=a(1395),o=a(4517);function f(){var e=(0,i.Z)().i18n,t=e.defaultLocale,a=e.locales,n=(0,u.l5)();return r.createElement(l.Z,null,a.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:n.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function g(e){var t=e.permalink,a=(0,i.Z)().siteConfig.url,n=function(){var e=(0,i.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,c.Z)(t)}(),s=t?""+a+t:n;return r.createElement(l.Z,null,r.createElement("meta",{property:"og:url",content:s}),r.createElement("link",{rel:"canonical",href:s}))}function d(e){var t=(0,i.Z)(),a=t.siteConfig.themeConfig.metadatas,c=t.i18n,o=c.currentLocale,d=c.localeConfigs,E=e.title,p=e.description,h=e.image,k=e.keywords,v=e.searchMetadatas,Z=(0,u.pe)(E),b=o,N=d[o].direction;return r.createElement(r.Fragment,null,r.createElement(l.Z,null,r.createElement("html",{lang:b,dir:N}),r.createElement("title",null,Z),r.createElement("meta",{property:"og:title",content:Z})),r.createElement(m.Z,{description:p,keywords:k,image:h}),r.createElement(g,null),r.createElement(f,null),r.createElement(s.Z,(0,n.Z)({tag:u.HX,locale:o},v)),r.createElement(l.Z,null,a.map((function(e,t){return r.createElement("meta",(0,n.Z)({key:"metadata_"+t},e))}))))}},7684:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var n=a(2784),r=a(6277),l=a(1510),i="sidebar_3j6c",c="sidebarItemTitle_2KH5",s="sidebarItemList_3Uli",m="sidebarItem_1R5P",u="sidebarItemLink_3Uuq",o="sidebarItemLinkActive_1m4O";function f(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement("h3",{className:c},t.title),n.createElement("ul",{className:s},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:m},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:o},e.title))}))))}},7836:function(e,t,a){"use strict";a.r(t);var n=a(2784),r=a(7678),l=a(1510),i=a(7684),c=a(7921),s=a(1395);t.default=function(e){var t=e.tags,a=e.sidebar,m={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);m[t]=m[t]||[],m[t].push(e)}));var u=Object.entries(m).sort((function(e,t){var a=e[0],n=t[0];return a===n?0:a>n?1:-1})).map((function(e){var a=e[0],r=e[1];return n.createElement("div",{key:a},n.createElement("h3",null,a),r.map((function(e){return n.createElement(l.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),n.createElement("hr",null))})).filter((function(e){return null!=e}));return n.createElement(r.Z,{title:"Tags",description:"Blog Tags",wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--3"},n.createElement(i.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement("h1",null,n.createElement(c.Z,{id:"theme.tags.tagsPageTitle",description:"The title of the tag list page"},"Tags")),n.createElement("div",{className:"margin-vert--lg"},u)))))}}}]);