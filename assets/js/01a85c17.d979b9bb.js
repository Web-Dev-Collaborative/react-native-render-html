(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4013,2075],{9684:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(7560),r=a(2784),l=a(6566),i=a(7614),c=a(77),m=a(7513),s=a(8768),o=a(3241),u=a(4517);function g(){var e=(0,i.Z)().i18n,t=e.defaultLocale,a=e.locales,n=(0,o.l5)();return r.createElement(l.Z,null,a.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:n.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function d(e){var t=e.permalink,a=(0,i.Z)().siteConfig.url,n=function(){var e=(0,i.Z)().siteConfig.url,t=(0,u.TH)().pathname;return e+(0,c.Z)(t)}(),m=t?""+a+t:n;return r.createElement(l.Z,null,r.createElement("meta",{property:"og:url",content:m}),r.createElement("link",{rel:"canonical",href:m}))}function p(e){var t=(0,i.Z)(),a=t.siteConfig.themeConfig.metadatas,c=t.i18n,u=c.currentLocale,p=c.localeConfigs,E=e.title,f=e.description,b=e.image,h=e.keywords,v=e.searchMetadatas,k=(0,o.pe)(E),Z=u,y=p[u].direction;return r.createElement(r.Fragment,null,r.createElement(l.Z,null,r.createElement("html",{lang:Z,dir:y}),r.createElement("title",null,k),r.createElement("meta",{property:"og:title",content:k})),r.createElement(s.Z,{description:f,keywords:h,image:b}),r.createElement(d,null),r.createElement(g,null),r.createElement(m.Z,(0,n.Z)({tag:o.HX,locale:u},v)),r.createElement(l.Z,null,a.map((function(e,t){return r.createElement("meta",(0,n.Z)({key:"metadata_"+t},e))}))))}},8768:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(2784),r=a(6566),l=a(3241),i=a(77);function c(e){var t=e.title,a=e.description,c=e.keywords,m=e.image,s=(0,l.LU)().image,o=(0,l.pe)(t),u=(0,i.Z)(m||s,{absolute:!0});return n.createElement(r.Z,null,t&&n.createElement("title",null,o),t&&n.createElement("meta",{property:"og:title",content:o}),t&&n.createElement("meta",{name:"twitter:title",content:o}),n.createElement("meta",{property:"og:site_name",content:"React Native Render HTML"}),a&&n.createElement("meta",{name:"description",content:a}),a&&n.createElement("meta",{property:"og:description",content:a}),a&&n.createElement("meta",{name:"twitter:description",content:a}),c&&n.createElement("meta",{name:"keywords",content:Array.isArray(c)?c.join(","):c}),u&&n.createElement("meta",{property:"og:image",content:u}),u&&n.createElement("meta",{name:"twitter:image",content:u}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:creator",content:"@jsamrn"}),n.createElement("meta",{name:"twitter:site",content:"@jsamrn"}))}},7684:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(2784),r=a(6277),l=a(1510),i="sidebar_3j6c",c="sidebarItemTitle_2KH5",m="sidebarItemList_3Uli",s="sidebarItem_1R5P",o="sidebarItemLink_3Uuq",u="sidebarItemLinkActive_1m4O",g=a(7921);function d(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.Z)(i,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:s},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:u},e.title))}))))}},7836:function(e,t,a){"use strict";a.r(t);var n=a(2784),r=a(8451),l=a(1510),i=a(7684),c=a(7921),m=a(3241);t.default=function(e){var t=e.tags,a=e.sidebar,s=(0,c.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),o={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);o[t]=o[t]||[],o[t].push(e)}));var u=Object.entries(o).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){var a=e[0],r=e[1];return n.createElement("article",{key:a},n.createElement("h2",null,a),r.map((function(e){return n.createElement(l.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),n.createElement("hr",null))})).filter((function(e){return null!=e}));return n.createElement(r.Z,{title:s,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("aside",{className:"col col--3"},n.createElement(i.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement("h1",null,s),n.createElement("section",{className:"margin-vert--lg"},u)))))}}}]);