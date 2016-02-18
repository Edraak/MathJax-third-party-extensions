MathJax.Hub.Config({Arabic:{numbersMap:{"\\.":"٫"}}}),MathJax.Hub.Config({"HTML-CSS":{undefinedFamily:"Amiri",styles:{".mfliph":{display:"inline-block !important","-moz-transform":"scaleX(-1)","-webkit-transform":"scaleX(-1)","-o-transform":"scaleX(-1)",transform:"scaleX(-1)","-ms-filter":"fliph",filter:"fliph"},".mar":{"font-family":"Amiri !important","font-style":"normal !important"}}}}),MathJax.Hub.Register.StartupHook("mml Jax Ready",function(){MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){MathJax.Hub.Register.StartupHook("Arabic Ext TeX Ready",function(){var a=MathJax.ElementJax.mml,t=function(a,t){var r="";if("ar"===a.Get("fontLang")&&(r+=" mar"),a.Get("fliph")){var i=document.createElement("span");if(r+=" mfliph",i.className+=" "+r,Node.TEXT_NODE===t.firstChild.nodeType)i.textContent=t.textContent,t.textContent="";else for(;t.childNodes.length;)i.appendChild(t.firstChild);t.appendChild(i)}else t.className+=" "+r},r=a.mi.prototype.toHTML;a.mi.Augment({toHTML:function(a){var i=r.apply(this,[a]);return Node.TEXT_NODE===i.firstChild.nodeType?t(this,i):t(this,i.firstChild),i}}),["mn","mo","mtext","msubsup","mrow"].forEach(function(r){var i=a[r].prototype.toHTML;a[r].Augment({toHTML:function(a){var r=i.apply(this,[a]);return t(this,r),r}})})})})}),MathJax.Hub.Config({Arabic:{identifiersMap:{a:"ا",b:"ب",c:"حـ",d:"د",e:"هـ",n:"ن",f:"ق",g:"د",k:"ك",r:"ر",t:"ت",x:"س",y:"ص",z:"ع"}}}),MathJax.Ajax.loadComplete("[Contrib]/arabic/arabic.js"),MathJax.Hub.Config({Arabic:{identifiersMap:{sin:"جا",cos:"جتا",tan:"ظا"}}}),MathJax.Hub.Register.StartupHook("Arabic TeX Startup",function(){var a=MathJax.Arabic.Text,t=MathJax.Arabic.TeX,r=MathJax.Arabic.Symbols;MathJax.Hub.Config({Arabic:{dict:{EKAr:["ek",a("e","انتشار،ك")],EspsilonRAr:["er",t("\\epsilon{}r","\\fliph{\\epsilon{}r}")],CurrentDensityAr:["J",r("J","ك.ت")],FillFactorAr:["FF",r("FF","ع.ت")],OpenCircuitAr:["oc",r("oc","م")],SpreadCoefficientAr:["D",r("D","م")],RadiationAr:["rad",r("l","ع")],TemratureAr:["Tmpr",r("T","د")],ConcentrationReceiverAtomAr:["NA",r("NA","ن_ق")],ConcentrationDonorAtomAr:["ND",r("ND","ن_م")],ConcentrationCarierPureAr:["nii",r("ni","ن_ك")],DeplationAreaWidthAr:["Wd",r("W","ل_ن")],ElectronsMotionConstantAr:["mue",t("\\mu{}e","\\fliph{\\mu{}e}")],DiffusionElectronsAr:["diffe",r("\\text{diff},e","ن\\ ك")]}}})}),MathJax.Hub.Register.StartupHook("Arabic TeX Startup",function(){var a=MathJax.Arabic.Text,t=MathJax.Arabic.Symbols;MathJax.Hub.Config({Arabic:{dict:{AirMassAr:["AM",a("AM","كتلة هواء")],ShortCircuitAr:["sc",t("sc","ق")],PhotovoltaicEnergyAr:["P",t("P","ط")],INAr:["inn",t("in","د")],DiffusionLengthAr:["Ld",t("L_d","ل_ر")],CurrentAr:["current",t("I","ت")],VoltageAr:["V",t("V","جـ")]}}})}),MathJax.Hub.Register.StartupHook("Arabic TeX Startup",function(){var a=MathJax.Arabic.Text,t=MathJax.Arabic.TeX;MathJax.Hub.Config({Arabic:{dict:{LightSpeedAr:["lspeed",a("c","سرعة الضوء")],PlancksAr:["Plancks",a("\\hbar","ثابت بلانك")],BoltzmannsAr:["Boltzmanns",a("k","ثابت بولتزمان")],EpsilonZeroAr:["epsilonzero",t("\\varepsilon_\\zero","\\fliph{\\varepsilon_\\zero}")]}}})}),MathJax.Hub.Register.StartupHook("Arabic TeX Startup",function(){var a=MathJax.Arabic.Text;MathJax.Hub.Config({Arabic:{dict:{PHAr:["ph",a("ph","ف")],ElectronAr:["elctrn",a("n","الكترون")]}}})}),MathJax.Hub.Register.StartupHook("Arabic TeX Startup",function(){var a=MathJax.Arabic.Text;MathJax.Hub.Config({Arabic:{dict:{SecondsAr:["scnd",a("s","ث")],HourAr:["hour",a("h","ساعة")],DayAr:["day",a("\\text{day}","يوم")],YearAr:["year",a("\\text{year}","سنة")],AmpAr:["Amp",a("A","امبير")],VoltAr:["volt",a("v","فولت")],KilvenAr:["Klvn",a("K","كلفن")],HoleAr:["hole",a("p","ثقب")],WattAr:["Watt",a("W","واط")],FaradAr:["F",a("F","فاراد")],CentimeterAr:["cm",a("\\text{cm}","سم")],GramAr:["grm",a("g","غرام")]}}})}),MathJax.Hub.Register.StartupHook("Arabic TeX Startup",function(){var a=MathJax.Arabic.Text;MathJax.Hub.Config({Arabic:{dict:{MaxAr:["max",a("p","اقصى")]}}})}),MathJax.Hub.Register.StartupHook("Arabic TeX Startup",function(){var a=MathJax.Arabic.TeX;MathJax.Hub.Config({Arabic:{dict:{ZeroAr:["zero",a("0","\\text{0}")]}}})}),MathJax.Hub.Register.StartupHook("Arabic TeX Startup",function(){var a=MathJax.Arabic.Text;MathJax.Hub.Config({Arabic:{dict:{MegaAr:["Mega",a("M","ميجا")],NanoAr:["nano",a("n","نانو")],GigaAr:["Giga",a("G","جيجا")],TeraAr:["Tera",a("T","تيرا")],KiloAr:["kilo",a("k","كيلو")],MicroAr:["micro",a("\\mu","مايكرو")]}}})}),MathJax.Hub.Config({Arabic:{identifiersMap:{E:"ط",m:"م",q:"ش"}}}),MathJax.Hub.Config({TeX:{extensions:["HTML.js"]}}),MathJax.Hub.Register.StartupHook("Arabic TeX Startup",function(){MathJax.Hub.Register.StartupHook("TeX HTML Ready",function(){var a=MathJax.InputJax.TeX,t=a.Definitions;t.Add({macros:{ar:"HandleArabic",alwaysar:"MarkAsArabic",fliph:"HandleFlipHorizontal"}}),a.Parse.Augment({HandleArabic:function(a){MathJax.Hub.config.Arabic.isArabicPage&&this.MarkAsArabic(a)},MarkAsArabic:function(a){this.stack.env.lang="ar";var t=this.GetArgumentMML(a);this.Push(this.flipHorizontal(t).With({lang:"ar"}))},HandleFlipHorizontal:function(a){var t=this.GetArgumentMML(a);this.Push(this.flipHorizontal(t))},flipHorizontal:function(a){return a.With({fliph:!a.Get("fliph")})}})})}),MathJax.Hub.Config({Arabic:{dict:{},isArabicPage:"ar"===document.documentElement.lang,identifiersMap:{},numbersMap:{0:"٠",1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩"},operatorsMap:{",":"،"}}}),MathJax.Arabic={TeX:function(a,t){return function(r){var i,e=MathJax.InputJax.TeX;i="ar"===this.stack.env.lang?t:a,this.Push(e.Parse(i).mml())}},Text:function(a,t){return MathJax.Arabic.TeX(a,"\\fliph{\\text{"+t+"}}")},TextWithSpace:function(a,t){var r="\\ \\fliph{\\text{"+t+"}}";return function(t){var i=MathJax.InputJax.TeX;this.Push("ar"===this.stack.env.lang?i.Parse(r).mml():i.Parse(a).mml())}},Symbols:function(a,t){var r=t.replace(/([\u0600-\u06FF]+)/g,"\\fliph{\\text{$1}}");return MathJax.Arabic.TeX(a,r)}},MathJax.Hub.Startup.signal.Post("Arabic TeX Startup"),MathJax.Hub.Register.StartupHook("Arabic TeX Startup",function(){MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var a=MathJax.Hub.config.Arabic.dict;MathJax.InputJax.TeX.Definitions.Add({macros:function(){var t={};return Object.keys(a).forEach(function(r){var i=a[r][0];t[i]=r}),t}()}),MathJax.InputJax.TeX.Parse.Augment(function(){var t={};return Object.keys(a).forEach(function(r){t[r]=a[r][1]}),t}()),MathJax.Hub.Startup.signal.Post("Arabic Ext TeX Ready")})}),MathJax.Hub.Register.StartupHook("Arabic Ext TeX Ready",function(){MathJax.Hub.Register.StartupHook("TeX HTML Ready",function(){var a=MathJax.InputJax.TeX,t=a.Parse.prototype.mmlToken;a.Parse.Augment({arabicNumber:function(a){var t=MathJax.Hub.config.Arabic.numbersMap,r=a.data[0].data[0],i=r;return"0"===i?i="صفر":Object.keys(t).forEach(function(a){var r=t[a],e=new RegExp(""+a,"g");i=i.replace(e,r)}),i!==r&&(a.data[0].data[0]=i,a=a.With({fontLang:"ar"})),this.flipHorizontal(a)},arabicIdentifier:function(a){var t=MathJax.Hub.config.Arabic.identifiersMap,r=Object.keys(t).sort(function(a,t){return t.length-a.length}),i=a.data[0].data[0],e=i;return"chars"===a.data[0].type&&r.forEach(function(a){var r=t[a],i=new RegExp(a,"g");e=e.replace(i,r)}),e!==i&&(a.data[0].data[0]=e,a=a.With({fontLang:"ar"})),this.flipHorizontal(a)},arabicOperator:function(a){var t=MathJax.Hub.config.Arabic.operatorsMap,r=a.data[0].data[0],i=r;return Object.keys(t).forEach(function(a){var r=new RegExp(""+a,"g"),e=t[a];i=i.replace(r,e)}),i!==r&&(a=this.flipHorizontal(a).With({fontLang:"ar"}),a.data[0].data[0]=i),a},mmlToken:function(a){var r=t.apply(this,[a]);if("ar"===this.stack.env.lang){if("mn"===a.type)return this.arabicNumber(r);if("mi"===r.type)return this.arabicIdentifier(r);if("mo"===r.type)return this.arabicOperator(r)}return r}})})});