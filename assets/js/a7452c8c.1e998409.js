(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return r})),n.d(t,"default",(function(){return p}));var i=n(3),c=n(7),l=(n(0),n(110)),b={},a={unversionedId:"eslint",id:"eslint",isDocsHomePage:!1,title:"eslint",description:"ESLint",source:"@site/docs/eslint.md",slug:"/eslint",permalink:"/intern-document/docs/eslint",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/eslint.md",version:"current",sidebar:"someSidebar",previous:{title:"This is Document Number 3",permalink:"/intern-document/docs/doc3"},next:{title:"prettier",permalink:"/intern-document/docs/prettier"}},r=[{value:"ESLint \u3068\u306f",id:"eslint-\u3068\u306f",children:[]},{value:"ESLint \u306e\u7279\u8272",id:"eslint-\u306e\u7279\u8272",children:[]},{value:"\u5229\u7528\u65b9\u6cd5",id:"\u5229\u7528\u65b9\u6cd5",children:[]},{value:"\u8a2d\u5b9a\u65b9\u6cd5",id:"\u8a2d\u5b9a\u65b9\u6cd5",children:[]},{value:"\u5099\u8003",id:"\u5099\u8003",children:[]}],s={toc:r};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"eslint"},"ESLint"),Object(l.b)("h2",{id:"eslint-\u3068\u306f"},"ESLint \u3068\u306f"),Object(l.b)("p",null,"javascript \u306e\u30ea\u30f3\u30bf\u30fc\uff08\u9759\u7684\u958b\u767a\u30c4\u30fc\u30eb\uff09\u3002\n\u73fe\u5728\u306e javascript \u958b\u767a\u3067\u4f7f\u7528\u3055\u308c\u308b\u30ea\u30f3\u30bf\u30fc\u306e\u30c7\u30d5\u30a1\u30af\u30c8\u30b9\u30bf\u30f3\u30c0\u30fc\u30c9\u3002"),Object(l.b)("p",null,"ESLint \u306e\u30e1\u30ea\u30c3\u30c8\u3092\u4e00\u8a00\u3067\u3044\u3046\u3068\u3001\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u54c1\u8cea\u304c\u5411\u4e0a\u3059\u308b\u3053\u3068\u3002"),Object(l.b)("p",null,"\u5177\u4f53\u7684\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30e1\u30ea\u30c3\u30c8\u304c\u6319\u3052\u3089\u308c\u308b\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u8907\u6570\u4eba\u958b\u767a\u306e\u969b\u306b\u3001\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u7d71\u4e00\u51fa\u6765\u308b"),Object(l.b)("li",{parentName:"ul"},"\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u898f\u7d04\u306e\u9055\u53cd\u7b87\u6240\u3092\u691c\u77e5"),Object(l.b)("li",{parentName:"ul"},"\u30d0\u30b0\u306b\u306a\u308a\u305d\u3046\u306a\u7b87\u6240\u3092\u4e8b\u524d\u306b\u691c\u77e5\u3067\u304d\u308b")),Object(l.b)("h2",{id:"eslint-\u306e\u7279\u8272"},"ESLint \u306e\u7279\u8272"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5404\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3054\u3068\u306b\u56fa\u6709\u306e\u8a2d\u5b9a\u3092\u884c\u3046\u3053\u3068\u304c\u51fa\u6765\u308b\u3002"),Object(l.b)("li",{parentName:"ul"},"\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u591a\u6570\u958b\u767a\u3055\u308c\u3066\u304a\u308a\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u74b0\u5883\u306b\u3042\u3063\u305f\u8a2d\u5b9a\u304c\u5bb9\u6613")),Object(l.b)("h2",{id:"\u5229\u7528\u65b9\u6cd5"},"\u5229\u7528\u65b9\u6cd5"),Object(l.b)("p",null,"npm \u3067\u3001ESLint \u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\nESLint \u306e\u5229\u7528\u306f\u958b\u767a\u74b0\u5883\u306e\u307f\u3067\u826f\u3044\u305f\u3081\u3001--save-dev \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4ed8\u3051\u308b\u306e\u304c\u671b\u307e\u3057\u3044\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"$ npm install --save-dev eslint\n")),Object(l.b)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u51fa\u6765\u305f\u3089\u3001\u4ee5\u4e0b\u30b3\u30de\u30f3\u30c9\u3067\u78ba\u8a8d\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"$ eslint -v\nv6.0.0\n")),Object(l.b)("h2",{id:"\u8a2d\u5b9a\u65b9\u6cd5"},"\u8a2d\u5b9a\u65b9\u6cd5"),Object(l.b)("p",null,"\u8a2d\u5b9a\u65b9\u6cd5\u306f\u3001\u4ee5\u4e0b\u306e\uff12\u901a\u308a\u304c\u5b58\u5728\u3059\u308b\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"package.json \u5185\u306b\u3001eslintConfig \u3068\u3044\u3046\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u7528\u610f\u3057\u3001\u8a2d\u5b9a\u3092\u8a18\u8ff0"),Object(l.b)("li",{parentName:"ul"},"\u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u3001.eslintrc.{json | yml | js}\u3068\u3044\u3046\u540d\u524d\u3067\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210")),Object(l.b)("p",null,"\u4ee5\u4e0b\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u5bfe\u8a71\u5f62\u5f0f\u3067\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u53ef\u80fd"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"$ eslint --init\n")),Object(l.b)("h2",{id:"\u5099\u8003"},"\u5099\u8003"),Object(l.b)("p",null,"ESLint \u306e\u30eb\u30fc\u30eb\u6570\u306f\u3001\u591a\u3059\u304e\u3066\u628a\u63e1\u3057\u304d\u308c\u306a\u3044\uff08\uff11\u304b\u3089\u4f5c\u308a\u4e0a\u3052\u308b\u306e\u306f\u30b3\u30b9\u30d1\u304c\u60aa\u3044\uff09\u305f\u3081\u3001\u5171\u6709\u8a2d\u5b9a\u3092\u4f7f\u7528\u3059\u308b\u3068\u624b\u9593\u3092\u7701\u304f\u3053\u3068\u304c\u51fa\u6765\u308b\u3002\n\u5171\u6709\u8a2d\u5b9a\u3068\u306f\u3001ESLint \u3092\u5c0e\u5165\u3057\u3066\u3044\u308b\u5404\u4f01\u696d\u304c\u3001\u8a2d\u5b9a\u3092 npm \u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3068\u3057\u3066\u63d0\u4f9b\u3057\u3066\u304f\u308c\u3066\u3044\u308b\u3082\u306e\u3002\nESLint \u306e\u958b\u767a\u5143\u3084\u3001Google \u306a\u3069\u304c ESLint \u306e\u8a2d\u5b9a\u3092\u516c\u958b\u3057\u3066\u304f\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u4fe1\u983c\u6027\u3082\u9ad8\u3044\u3002"),Object(l.b)("p",null,"\u53c2\u8003\u30da\u30fc\u30b8\uff09\n",Object(l.b)("a",{parentName:"p",href:"https://qiita.com/mysticatea/items/f523dab04a25f617c87d"},"ESLint \u3053\u3068\u306f\u3058\u3081"),"\n",Object(l.b)("a",{parentName:"p",href:"https://www.konosumi.net/entry/2019/09/01/165449"},"ESLint \u3068\u300ceslint --init\u300d\u306b\u3088\u308b\u300c.eslintrc.json\u300d\u306e\u751f\u6210"),"\n",Object(l.b)("a",{parentName:"p",href:"https://qiita.com/mysticatea/items/dc35ced6bd5e782f50cd"},"\u5171\u6709\u8a2d\u5b9a\u3067\u3089\u304f\u3089\u304f ESLint")))}p.isMDXComponent=!0}}]);