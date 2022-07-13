(self.webpackChunkvibe=self.webpackChunkvibe||[]).push([[993,365],{57920:function(t,e,n){"use strict";n.r(e),n.d(e,{WalletConnectV1Adapter:function(){return b}});var r=n(74165),c=n(15861),i=n(15671),o=n(43144),a=n(97326),s=n(11752),u=n(61120),h=n(60136),d=n(29388),l=n(4942),p=n(78453),f=n(87485),v=n(27562),w=n(62649),y=n.n(w);function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(n),!0).forEach((function(e){(0,l.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b=function(t){(0,h.Z)(n,t);var e=(0,d.Z)(n);function n(){var t;(0,i.Z)(this,n);var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=e.call(this),(0,l.Z)((0,a.Z)(t),"name",f.rW.WALLET_CONNECT_V1),(0,l.Z)((0,a.Z)(t),"adapterNamespace",f.yk.EIP155),(0,l.Z)((0,a.Z)(t),"currentChainNamespace",f.EN.EIP155),(0,l.Z)((0,a.Z)(t),"type",f.hN.EXTERNAL),(0,l.Z)((0,a.Z)(t),"adapterOptions",void 0),(0,l.Z)((0,a.Z)(t),"status",f.MP.NOT_READY),(0,l.Z)((0,a.Z)(t),"adapterData",{uri:""}),(0,l.Z)((0,a.Z)(t),"connector",null),(0,l.Z)((0,a.Z)(t),"wcProvider",null),(0,l.Z)((0,a.Z)(t),"rehydrated",!1),t.adapterOptions=E({},r),t.chainConfig=r.chainConfig||null,t}return(0,o.Z)(n,[{key:"connected",get:function(){var t;return!(null===(t=this.connector)||void 0===t||!t.connected)}},{key:"provider",get:function(){var t;return(null===(t=this.wcProvider)||void 0===t?void 0:t.provider)||null},set:function(t){throw new Error("Not implemented")}},{key:"init",value:function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,s.Z)((0,u.Z)(n.prototype),"checkInitializationRequirements",this).call(this),this.chainConfig||(this.chainConfig=(0,f.h2)(f.EN.EIP155,1)),this.connector=this.getWalletConnectInstance(),this.wcProvider=new v.WalletConnectProvider({config:{chainConfig:this.chainConfig}}),this.emit(f.n2.READY,f.rW.WALLET_CONNECT_V1),this.status=f.MP.READY,!this.connector.connected){t.next=10;break}return this.rehydrated=!0,t.next=10,this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId.toString()});case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"connect",value:function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var e,i=this;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,s.Z)((0,u.Z)(n.prototype),"checkConnectionRequirements",this).call(this),this.connector){t.next=3;break}throw f.Ty.notReady("Wallet adapter is not ready yet");case 3:if(!this.connected){t.next=7;break}return t.next=6,this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId.toString()});case 6:return t.abrupt("return",this.provider);case 7:if(this.status===f.MP.CONNECTING){t.next=13;break}return null!==(e=this.adapterOptions.adapterSettings)&&void 0!==e&&e.qrcodeModal&&(this.connector=this.getWalletConnectInstance()),t.next=11,this.createNewSession();case 11:this.status=f.MP.CONNECTING,this.emit(f.n2.CONNECTING,{adapter:f.rW.WALLET_CONNECT_V1});case 13:return t.abrupt("return",new Promise((function(t,e){if(!i.connector)return e(f.Ty.notReady("Wallet adapter is not ready yet"));i.connector.on("modal_closed",(0,c.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.status=f.MP.READY,i.emit(f.n2.READY,f.rW.WALLET_CONNECT_V1),t.abrupt("return",e(new Error("User closed modal")));case 3:case"end":return t.stop()}}),t)}))));try{i.connector.on("connect",function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n,c){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&i.emit(f.n2.ERRORED,n),e.next=3,i.onConnectHandler(c.params[0]);case 3:return e.abrupt("return",t(i.provider));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}catch(n){y().error("Wallet connect v1 adapter error while connecting",n),i.status=f.MP.READY,i.rehydrated=!0,i.emit(f.n2.ERRORED,n),e(n instanceof f.up?n:f.RM.connectionError("Failed to login with wallet connect: ".concat((null===n||void 0===n?void 0:n.message)||"")))}})));case 14:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.connected){t.next=2;break}throw f.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return t.abrupt("return",{});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var e,n,c=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=c.length>0&&void 0!==c[0]?c[0]:{cleanup:!1},n=e.cleanup,this.connector&&this.connected){t.next=4;break}throw f.RM.notConnectedError("Not connected with wallet");case 4:return t.next=6,this.connector.killSession();case 6:this.rehydrated=!1,n?(this.connector=null,this.status=f.MP.NOT_READY,this.wcProvider=null):this.status=f.MP.READY,this.emit(f.n2.DISCONNECTED);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"createNewSession",value:function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var e,n,i,o,a=this,s=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=s.length>0&&void 0!==s[0]?s[0]:{forceNewSession:!1},this.connector){t.next=3;break}throw f.Ty.notReady("Wallet adapter is not ready yet");case 3:if(!i.forceNewSession||!this.connector.pending){t.next=6;break}return t.next=6,this.connector.killSession();case 6:if(null===(e=this.adapterOptions)||void 0===e||null===(n=e.adapterSettings)||void 0===n||!n.qrcodeModal){t.next=10;break}return t.next=9,this.connector.createSession({chainId:parseInt((null===(o=this.chainConfig)||void 0===o?void 0:o.chainId)||"0x1",16)});case 9:return t.abrupt("return");case 10:return t.abrupt("return",new Promise((function(t,e){var n;if(!a.connector)return e(f.Ty.notReady("Wallet adapter is not ready yet"));y().debug("creating new session for web3auth wallet connect"),a.connector.on("display_uri",function(){var n=(0,c.Z)((0,r.Z)().mark((function n(c,i){var o,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!c){n.next=3;break}return a.emit(f.n2.ERRORED,f.RM.connectionError("Failed to display wallet connect qr code")),n.abrupt("return",e(c));case 3:return s=i.params[0],a.updateAdapterData({uri:s}),null===(o=a.connector)||void 0===o||o.off("display_uri"),n.abrupt("return",t());case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()),a.connector.createSession({chainId:parseInt((null===(n=a.chainConfig)||void 0===n?void 0:n.chainId)||"0x1",16)}).catch((function(t){return y().error("error while creating new wallet connect session",t),a.emit(f.n2.ERRORED,t),e(t)}))})));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"onConnectHandler",value:function(){var t=(0,c.Z)((0,r.Z)().mark((function t(e){var n,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.connector&&this.wcProvider){t.next=2;break}throw f.Ty.notReady("Wallet adapter is not ready yet");case 2:if(this.chainConfig){t.next=4;break}throw f.Ty.invalidParams("Chain config is not set");case 4:if(n=e.chainId,y().debug("connected chainId",n),(c=parseInt(n,(0,f.H2)(n)?16:10))===parseInt(this.chainConfig.chainId,16)){t.next=12;break}return t.next=10,this.createNewSession({forceNewSession:!0});case 10:return this.emit(f.n2.ERRORED,f.Ty.fromCode(5e3,"Not connected to correct chainId. Expected: ".concat(this.chainConfig.chainId,", Current: ").concat(c,", Please switch to correct chain from wallet"))),t.abrupt("return");case 12:return t.next=14,this.wcProvider.setupProvider(this.connector);case 14:this.subscribeEvents(this.connector),this.status=f.MP.CONNECTED,this.emit(f.n2.CONNECTED,{adapter:f.rW.WALLET_CONNECT_V1,reconnected:this.rehydrated});case 17:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"subscribeEvents",value:function(t){var e=this;t.on("session_update",function(){var t=(0,c.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n&&e.emit(f.n2.ERRORED,n);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"getWalletConnectInstance",value:function(){var t=this.adapterOptions.adapterSettings||{};return t.bridge=t.bridge||"https://bridge.walletconnect.org",new p.Z(t)}}]),n}(f.J5)},27790:function(){},55024:function(){}}]);