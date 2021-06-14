(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1225],{288:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return m}});var n=r(7560),a=r(8283),i=(r(2784),r(9037)),s=r(2123),d=r(1473),A=r(6785),l={id:"renderersprops",title:"RenderersProps"},o={unversionedId:"renderersprops",id:"renderersprops",isDocsHomePage:!1,title:"RenderersProps",description:"Props for custom renderers. The convention is to declare a field per renderer.",source:"@site/api/renderersprops.mdx",sourceDirName:".",slug:"/renderersprops",permalink:"/react-native-render-html/api/renderersprops",version:"current",frontMatter:{id:"renderersprops",title:"RenderersProps"},sidebar:"apiSidebar",previous:{title:"RendererBaseProps",permalink:"/react-native-render-html/api/rendererbaseprops"},next:{title:"RenderHTML",permalink:"/react-native-render-html/api/renderhtml"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>a</code>",id:"a",children:[]},{value:"<code>img</code>",id:"img",children:[]},{value:"<code>ol</code>",id:"ol",children:[]},{value:"<code>ul</code>",id:"ul",children:[]}]}],C={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},C,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d.Z,{reflectionId:939,version:"6.0.0-beta.2",mdxType:"HeaderTypeBox"}),(0,i.kt)("p",null,"Props for custom renderers. The convention is to declare a field per renderer.\nIn doing so, you can benefit from ",(0,i.kt)("inlineCode",{parentName:"p"},"useRendererProps('tagname')")," in custom renderers."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Remarks")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Typescript users"),": If you need to add fields to the ","\u200b",(0,i.kt)(A.Z,{name:"RenderersProps",url:"/api/renderersprops",type:"api-def",mdxType:"Reference"})," interface,\nyou should use ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation"},"module augmentation"),":"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"declare module 'react-native-render-html' {\n  interface RenderersProps {\n    div?: {\n      customProp: boolean;\n    };\n  }\n}\n@public\n\n\n")))),(0,i.kt)("h2",{id:"fields"},"Fields"),(0,i.kt)("h3",{id:"a"},(0,i.kt)("inlineCode",{parentName:"h3"},"a")),(0,i.kt)(s.Z,{reflection:"%7B%22id%22%3A940%2C%22name%22%3A%22a%22%2C%22kind%22%3A1024%2C%22kindString%22%3A%22Property%22%2C%22flags%22%3A%7B%7D%2C%22sources%22%3A%5B%7B%22fileName%22%3A%22packages%2Frender-html%2Fsrc%2Fshared-types.ts%22%2C%22line%22%3A149%2C%22character%22%3A3%7D%5D%2C%22type%22%3A%7B%22type%22%3A%22reflection%22%2C%22declaration%22%3A%7B%22id%22%3A941%2C%22name%22%3A%22__type%22%2C%22kind%22%3A65536%2C%22kindString%22%3A%22Type%20literal%22%2C%22flags%22%3A%7B%7D%2C%22children%22%3A%5B%7B%22id%22%3A942%2C%22name%22%3A%22onPress%22%2C%22kind%22%3A1024%2C%22kindString%22%3A%22Property%22%2C%22flags%22%3A%7B%22isOptional%22%3Atrue%7D%2C%22comment%22%3A%7B%22shortText%22%3A%22A%20callback%20to%20handle%20anchors%20presses.%22%2C%22tags%22%3A%5B%7B%22tag%22%3A%22remarks%22%2C%22text%22%3A%22%5Cn-%20Changes%20to%20this%20prop%20will%20cause%20a%20react%20tree%20update.%20Always%20memoize%5Cn%20%20it.%5Cn-%20The%20%60href%60%20argument%20has%20been%20normalized%2C%20see%20%7B%40link%20useNormalizedUrl%7D.%5Cn%22%7D%2C%7B%22tag%22%3A%22defaultvalue%22%2C%22text%22%3A%22A%20function%20using%20React%20Native%20%60Linking.onpenUrl%60.%22%7D%2C%7B%22tag%22%3A%22param%22%2C%22text%22%3A%22The%20%7B%40link%20GestureResponderEvent%7D%20event.%22%2C%22param%22%3A%22event%22%7D%2C%7B%22tag%22%3A%22param%22%2C%22text%22%3A%22The%20normalized%20href%2C%20see%20%7B%40link%20useNormalizedUrl%7D.%22%2C%22param%22%3A%22href%22%7D%2C%7B%22tag%22%3A%22param%22%2C%22text%22%3A%22The%20attributes%20of%20the%20underlying%20%7B%40link%20Element%7D.%22%2C%22param%22%3A%22htmlAttribs%22%7D%2C%7B%22tag%22%3A%22param%22%2C%22text%22%3A%22The%20normalized%20%60target%60%20for%20this%20hyperlink.%5Cn%22%2C%22param%22%3A%22target%22%7D%5D%7D%2C%22sources%22%3A%5B%7B%22fileName%22%3A%22packages%2Frender-html%2Fsrc%2Fshared-types.ts%22%2C%22line%22%3A164%2C%22character%22%3A11%7D%5D%2C%22type%22%3A%7B%22type%22%3A%22reflection%22%2C%22declaration%22%3A%7B%22id%22%3A943%2C%22name%22%3A%22__type%22%2C%22kind%22%3A65536%2C%22kindString%22%3A%22Type%20literal%22%2C%22flags%22%3A%7B%7D%2C%22signatures%22%3A%5B%7B%22id%22%3A944%2C%22name%22%3A%22__type%22%2C%22kind%22%3A4096%2C%22kindString%22%3A%22Call%20signature%22%2C%22flags%22%3A%7B%7D%2C%22parameters%22%3A%5B%7B%22id%22%3A945%2C%22name%22%3A%22event%22%2C%22kind%22%3A32768%2C%22kindString%22%3A%22Parameter%22%2C%22flags%22%3A%7B%7D%2C%22type%22%3A%7B%22type%22%3A%22reference%22%2C%22name%22%3A%22GestureResponderEvent%22%7D%7D%2C%7B%22id%22%3A946%2C%22name%22%3A%22href%22%2C%22kind%22%3A32768%2C%22kindString%22%3A%22Parameter%22%2C%22flags%22%3A%7B%7D%2C%22type%22%3A%7B%22type%22%3A%22intrinsic%22%2C%22name%22%3A%22string%22%7D%7D%2C%7B%22id%22%3A947%2C%22name%22%3A%22htmlAttribs%22%2C%22kind%22%3A32768%2C%22kindString%22%3A%22Parameter%22%2C%22flags%22%3A%7B%7D%2C%22type%22%3A%7B%22type%22%3A%22reference%22%2C%22typeArguments%22%3A%5B%7B%22type%22%3A%22intrinsic%22%2C%22name%22%3A%22string%22%7D%2C%7B%22type%22%3A%22intrinsic%22%2C%22name%22%3A%22string%22%7D%5D%2C%22name%22%3A%22Record%22%7D%7D%2C%7B%22id%22%3A948%2C%22name%22%3A%22target%22%2C%22kind%22%3A32768%2C%22kindString%22%3A%22Parameter%22%2C%22flags%22%3A%7B%7D%2C%22type%22%3A%7B%22type%22%3A%22union%22%2C%22types%22%3A%5B%7B%22type%22%3A%22literal%22%2C%22value%22%3A%22_self%22%7D%2C%7B%22type%22%3A%22literal%22%2C%22value%22%3A%22_blank%22%7D%2C%7B%22type%22%3A%22literal%22%2C%22value%22%3A%22_parent%22%7D%2C%7B%22type%22%3A%22literal%22%2C%22value%22%3A%22_top%22%7D%5D%7D%7D%5D%2C%22type%22%3A%7B%22type%22%3A%22intrinsic%22%2C%22name%22%3A%22void%22%7D%7D%5D%7D%7D%7D%5D%2C%22groups%22%3A%5B%7B%22title%22%3A%22Properties%22%2C%22kind%22%3A1024%2C%22children%22%3A%5B942%5D%7D%5D%7D%7D%7D",mdxType:"DeclarationBox"}),(0,i.kt)("h3",{id:"img"},(0,i.kt)("inlineCode",{parentName:"h3"},"img")),(0,i.kt)(s.Z,{reflection:"%7B%22id%22%3A949%2C%22name%22%3A%22img%22%2C%22kind%22%3A1024%2C%22kindString%22%3A%22Property%22%2C%22flags%22%3A%7B%7D%2C%22sources%22%3A%5B%7B%22fileName%22%3A%22packages%2Frender-html%2Fsrc%2Fshared-types.ts%22%2C%22line%22%3A171%2C%22character%22%3A5%7D%5D%2C%22type%22%3A%7B%22type%22%3A%22reflection%22%2C%22declaration%22%3A%7B%22id%22%3A950%2C%22name%22%3A%22__type%22%2C%22kind%22%3A65536%2C%22kindString%22%3A%22Type%20literal%22%2C%22flags%22%3A%7B%7D%2C%22children%22%3A%5B%7B%22id%22%3A952%2C%22name%22%3A%22enableExperimentalPercentWidth%22%2C%22kind%22%3A1024%2C%22kindString%22%3A%22Property%22%2C%22flags%22%3A%7B%22isOptional%22%3Atrue%7D%2C%22comment%22%3A%7B%22shortText%22%3A%22Support%20for%20relative%20percent-widths.%22%2C%22tags%22%3A%5B%7B%22tag%22%3A%22defaultvalue%22%2C%22text%22%3A%22false%5Cn%22%7D%5D%7D%2C%22sources%22%3A%5B%7B%22fileName%22%3A%22packages%2Frender-html%2Fsrc%2Fshared-types.ts%22%2C%22line%22%3A184%2C%22character%22%3A34%7D%5D%2C%22type%22%3A%7B%22type%22%3A%22intrinsic%22%2C%22name%22%3A%22boolean%22%7D%7D%2C%7B%22id%22%3A951%2C%22name%22%3A%22initialDimensions%22%2C%22kind%22%3A1024%2C%22kindString%22%3A%22Property%22%2C%22flags%22%3A%7B%22isOptional%22%3Atrue%7D%2C%22comment%22%3A%7B%22shortText%22%3A%22Default%20width%20and%20height%20to%20display%20while%20image's%20dimensions%20are%20being%20retrieved.%22%2C%22tags%22%3A%5B%7B%22tag%22%3A%22remarks%22%2C%22text%22%3A%22Changes%20to%20this%20prop%20will%20cause%20a%20react%20tree%20update.%20Always%5Cnmemoize%20it.%5Cn%22%7D%5D%7D%2C%22sources%22%3A%5B%7B%22fileName%22%3A%22packages%2Frender-html%2Fsrc%2Fshared-types.ts%22%2C%22line%22%3A178%2C%22character%22%3A21%7D%5D%2C%22type%22%3A%7B%22type%22%3A%22reference%22%2C%22id%22%3A892%2C%22name%22%3A%22ImageDimensions%22%7D%7D%5D%2C%22groups%22%3A%5B%7B%22title%22%3A%22Properties%22%2C%22kind%22%3A1024%2C%22children%22%3A%5B952%2C951%5D%7D%5D%7D%7D%7D",mdxType:"DeclarationBox"}),(0,i.kt)("h3",{id:"ol"},(0,i.kt)("inlineCode",{parentName:"h3"},"ol")),(0,i.kt)(s.Z,{reflection:"%7B%22id%22%3A954%2C%22name%22%3A%22ol%22%2C%22kind%22%3A1024%2C%22kindString%22%3A%22Property%22%2C%22flags%22%3A%7B%7D%2C%22sources%22%3A%5B%7B%22fileName%22%3A%22packages%2Frender-html%2Fsrc%2Fshared-types.ts%22%2C%22line%22%3A187%2C%22character%22%3A4%7D%5D%2C%22type%22%3A%7B%22type%22%3A%22reference%22%2C%22id%22%3A930%2C%22name%22%3A%22ListElementConfig%22%7D%7D",mdxType:"DeclarationBox"}),(0,i.kt)("h3",{id:"ul"},(0,i.kt)("inlineCode",{parentName:"h3"},"ul")),(0,i.kt)(s.Z,{reflection:"%7B%22id%22%3A953%2C%22name%22%3A%22ul%22%2C%22kind%22%3A1024%2C%22kindString%22%3A%22Property%22%2C%22flags%22%3A%7B%7D%2C%22sources%22%3A%5B%7B%22fileName%22%3A%22packages%2Frender-html%2Fsrc%2Fshared-types.ts%22%2C%22line%22%3A186%2C%22character%22%3A4%7D%5D%2C%22type%22%3A%7B%22type%22%3A%22reference%22%2C%22id%22%3A930%2C%22name%22%3A%22ListElementConfig%22%7D%7D",mdxType:"DeclarationBox"}))}m.isMDXComponent=!0}}]);