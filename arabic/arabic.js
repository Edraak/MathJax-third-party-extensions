/*!
 * The MIT License
 *
 * Copyright (c) 2015-2016 The Queen Rania Foundation for Education and Development
 *
 * http://www.qrf.org
 * http://www.edraak.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
MathJax.Hub.Config({Arabic:{identifiersMap:{A:"أ",B:"ب",C:"جـ",a:"أ",b:"ب",c:"حـ",d:"د",e:"هـ",n:"ن",m:"م",l:"ل",f:"ق",g:"د",k:"ك",r:"ر",t:"ت",x:"س",y:"ص",z:"ع"}}}),MathJax.Hub.Config({"HTML-CSS":{undefinedFamily:"Amiri",styles:{".mfliph":{display:"inline-block !important","-moz-transform":"scaleX(-1)","-webkit-transform":"scaleX(-1)","-o-transform":"scaleX(-1)",transform:"scaleX(-1)","-ms-filter":"fliph",filter:"fliph"},".mar":{"font-family":"Amiri !important","font-style":"normal !important"}}}}),MathJax.Hub.Register.StartupHook("mml Jax Ready",function(){MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){MathJax.Hub.Register.StartupHook("Arabic TeX Ready",function(){var a=MathJax.ElementJax.mml,t=function(a,t){var r="";if("ar"===a.Get("fontLang")&&(r+=" mar"),a.Get("fliph")){var i=document.createElement("span");if(r+=" mfliph",i.className+=" "+r,Node.TEXT_NODE===t.firstChild.nodeType)i.textContent=t.textContent,t.textContent="";else for(;t.childNodes.length;)i.appendChild(t.firstChild);t.appendChild(i)}else t.className+=" "+r},r=a.mi.prototype.toHTML;a.mi.Augment({toHTML:function(a){var i=r.apply(this,[a]);return Node.TEXT_NODE===i.firstChild.nodeType?t(this,i):t(this,i.firstChild),i}}),["mn","mo","mtext","msubsup","mrow","mfrac"].forEach(function(r){var i=a[r].prototype.toHTML;a[r].Augment({toHTML:function(a){var r=i.apply(this,[a]);return t(this,r),r}})})})})}),MathJax.Hub.Config({Arabic:{identifiersMap:{sin:"جا",cos:"جتا",tan:"ظا",log:"لو"}}}),MathJax.Hub.Config({Arabic:{operatorsMap:{lim:"نهــا"}}}),MathJax.Hub.Register.StartupHook("Arabic TeX Startup",function(){var a=MathJax.Arabic.TeX,t=MathJax.Arabic.Text;MathJax.Hub.Config({Arabic:{dict:{Zero:["zero",a("0","\\text{0}")],Radius:["radius",t("r","نق")],Area:["Area",t("A","م")]}}}),MathJax.Hub.Register.StartupHook("Arabic TeX Ready",function(){var a=MathJax.InputJax.TeX,t=a.Parse.prototype.arabicNumber;a.Parse.Augment({arabicNumber:function(a){var r=a.data[0].data[0];return"0"===r?(r="صفر",a.data[0].data[0]=r,a=a.With({fontLang:"ar"}),this.flipHorizontal(a)):t.apply(this,[a])}})})}),MathJax.Hub.Config({Arabic:{dict:{},isArabicPage:"ar"===document.documentElement.lang,identifiersMap:{},numbersMap:{0:"٠",1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩"},operatorsMap:{",":"،"}}}),MathJax.Arabic={TeX:function(a,t){return function(r){var i,e=MathJax.InputJax.TeX;i="ar"===this.stack.env.lang?t:a,this.Push(e.Parse(i).mml())}},Text:function(a,t){return MathJax.Arabic.TeX(a,"\\fliph{\\text{"+t+"}}")},TextWithSpace:function(a,t){var r="\\ \\fliph{\\text{"+t+"}}";return function(t){var i=MathJax.InputJax.TeX;"ar"===this.stack.env.lang?this.Push(i.Parse(r).mml()):this.Push(i.Parse(a).mml())}},Symbols:function(a,t){var r=/([\u0600-\u06FF]+)/g,i=t.replace(r,"\\fliph{\\text{$1}}");return MathJax.Arabic.TeX(a,i)}},MathJax.Hub.Startup.signal.Post("Arabic TeX Startup"),MathJax.Hub.Register.StartupHook("Arabic TeX Startup",function(){MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var a=MathJax.InputJax.TeX,t=a.Parse.prototype.mmlToken,r=MathJax.Hub.config.Arabic.dict;a.Definitions.Add({macros:{ar:"HandleArabic",alwaysar:"MarkAsArabic",fliph:"HandleFlipHorizontal"}}),a.Definitions.Add({macros:function(){var a={};return Object.keys(r).forEach(function(t){var i=r[t][0];a[i]=t}),a}()}),a.Parse.Augment(function(){var a={};return Object.keys(r).forEach(function(t){a[t]=r[t][1]}),a}()),a.Parse.Augment({flipHorizontal:function(a){return a.With({fliph:!a.Get("fliph")})},arabicNumber:function(a){var t=MathJax.Hub.config.Arabic.numbersMap,r=a.data[0].data[0],i=r;return Object.keys(t).forEach(function(a){var r=t[a],e=new RegExp(""+a,"g");i=i.replace(e,r)}),i!==r&&(a.data[0].data[0]=i,a=a.With({fontLang:"ar"})),this.flipHorizontal(a)},arabicIdentifier:function(a){var t=MathJax.Hub.config.Arabic.identifiersMap,r=Object.keys(t).sort(function(a,t){return t.length-a.length}),i=a.data[0].data[0],e=i;return"chars"===a.data[0].type&&r.forEach(function(a){var r=t[a],i=new RegExp(a,"g");e=e.replace(i,r)}),e!==i&&(a.data[0].data[0]=e,a=a.With({fontLang:"ar"})),this.flipHorizontal(a)},arabicOperator:function(a){var t=MathJax.Hub.config.Arabic.operatorsMap,r=a.data[0].data[0],i=r;return Object.keys(t).forEach(function(a){var r=new RegExp(""+a,"g"),e=t[a];i=i.replace(r,e)}),i!==r&&(a=this.flipHorizontal(a).With({fontLang:"ar"}),a.data[0].data[0]=i),a},_getArgumentMML:function(a){var t=this.ParseArg(a);return t.inferred&&1==t.data.length?t=t.data[0]:delete t.inferred,t},mmlToken:function(a){var r=t.apply(this,[a]);if("ar"===this.stack.env.lang){if("mn"===a.type)return this.arabicNumber(r);if("mi"===r.type)return this.arabicIdentifier(r);if("mo"===r.type)return this.arabicOperator(r)}return r},HandleArabic:function(a){MathJax.Hub.config.Arabic.isArabicPage&&this.MarkAsArabic(a)},MarkAsArabic:function(a){this.stack.env.lang="ar";var t=this._getArgumentMML(a);this.Push(this.flipHorizontal(t).With({lang:"ar"}))},HandleFlipHorizontal:function(a){var t=this._getArgumentMML(a);this.Push(this.flipHorizontal(t))}}),MathJax.Hub.Startup.signal.Post("Arabic TeX Ready")})}),MathJax.Ajax.loadComplete("[Contrib]/arabic/arabic.js");