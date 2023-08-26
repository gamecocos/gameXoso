window.__require=function t(e,o,i){function n(s,a){if(!o[s]){if(!e[s]){var u=s.split("/");if(u=u[u.length-1],!e[u]){var l="function"==typeof __require&&__require;if(!a&&l)return l(u,!0);if(r)return r(u,!0);throw new Error("Cannot find module '"+s+"'")}s=u}var c=o[s]={exports:{}};e[s][0].call(c.exports,function(t){return n(e[s][1][t]||t)},c,c.exports,t,e,o,i)}return o[s].exports}for(var r="function"==typeof __require&&__require,s=0;s<i.length;s++)n(i[s]);return n}({Audio:[function(t,e,o){"use strict";cc._RF.push(e,"20fccpC7wtM7qcSngBvtu4e","Audio");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,a=s.ccclass,u=s.property,l=t("./Sound"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.Music=[],e.Sound=[],e.StateOne=!0,e.StateTwo=!0,e}var o;return n(e,t),o=e,e.prototype.start=function(){},e.prototype.onLoad=function(){o.instance=this},e.prototype.TurnOnMusic=function(t){var e=this.Music.find(function(e){return e.Name==t});null==e?console.log("Music Not Found...!"):(this.MusicSource.clip=e.Clip,this.MusicSource.play())},e.prototype.TurnOffMusic=function(t){var e=this.Music.find(function(e){return e.Name==t});null==e?console.log("Music Not Found...!"):(this.MusicSource.clip=e.Clip,this.MusicSource.stop())},e.prototype.TurnOnSound=function(t){var e=this.Sound.find(function(e){return e.Name==t});null==e?console.log("Sound Not Found...!"):(this.SoundSource.clip=e.Clip,this.SoundSource.play())},e.prototype.TurnOffSound=function(t){var e=this.Sound.find(function(e){return e.Name==t});null==e?console.log("Sound Not Found...!"):(this.SoundSource.clip=e.Clip,this.SoundSource.stop())},e.prototype.MusicSlideVolume=function(){this.MusicSource.volume=this.MusicSlider.progress,0==this.MusicSource.volume?(this.MusicSprite.spriteFrame=this.MusicSpriteOff,this.StateOne=!1):(this.MusicSprite.spriteFrame=this.MusicSpriteOn,this.StateOne=!0)},e.prototype.SoundSlideVolume=function(){this.SoundSource.volume=this.SoundSlider.progress,0==this.SoundSource.volume?(this.SoundSprite.spriteFrame=this.SoundSpriteOff,this.StateTwo=!1):(this.SoundSprite.spriteFrame=this.SoundSpriteOn,this.StateTwo=!0)},r([u(cc.Sprite)],e.prototype,"MusicSprite",void 0),r([u(cc.Sprite)],e.prototype,"SoundSprite",void 0),r([u(cc.SpriteFrame)],e.prototype,"MusicSpriteOn",void 0),r([u(cc.SpriteFrame)],e.prototype,"SoundSpriteOn",void 0),r([u(cc.SpriteFrame)],e.prototype,"MusicSpriteOff",void 0),r([u(cc.SpriteFrame)],e.prototype,"SoundSpriteOff",void 0),r([u(cc.AudioSource)],e.prototype,"MusicSource",void 0),r([u(cc.AudioSource)],e.prototype,"SoundSource",void 0),r([u(cc.Slider)],e.prototype,"MusicSlider",void 0),r([u(cc.Slider)],e.prototype,"SoundSlider",void 0),r([u(l.default)],e.prototype,"Music",void 0),r([u(l.default)],e.prototype,"Sound",void 0),o=r([a],e)}(cc.Component);o.default=c,cc._RF.pop()},{"./Sound":"Sound"}],Game:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","Game");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,a=s.ccclass,u=s.property,l=t("./Audio"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.LabelCreditNumber=1e4,e.ValueWin=0,e.ChangeBet=100,e.ValueBet=0,e.MainResult=[],e.ShowResult=[],e.ShowResultNode=[],e.ResultSpriteFrame=[],e.BallAnimation=[],e.PlayButton=null,e.ShowRandomNumber=[],e.ShowRandomNode=[],e.ShowRandomSpriteFrame=[],e.IsPlay=!0,e}return n(e,t),e.prototype.onLoad=function(){this.IsPlay=!0,this.ShowRandomNode[0].active=!1,this.ShowRandomNode[1].active=!1,this.ShowRandomNode[2].active=!1,this.ShowRandomNode[3].active=!1,this.ShowRandomNode[4].active=!1},e.prototype.start=function(){l.default.instance.TurnOnMusic("MusicBackground"),this.ScreenGame.active=!1,this.ScreenAudio.active=!1,this.ScreenLoading.active=!0,this.LabelWin.string=this.ValueWin.toString()+"$",this.TotalBetLabel.string=this.ValueBet.toString()+"$",this.LabelCredit.string=this.LabelCreditNumber.toString()+"$",this.LabelWin.string=this.ValueWin.toString()+"$",this.LabelChangeBet.string=this.ChangeBet.toString()+"$"},e.prototype.Random=function(){for(var t=[],e=0;e<5;e++){var o=Math.floor(9*Math.random())+1;t.push(o),console.log(o)}for(e=1;e<=9;e++)for(var i=0;i<5;i++)t[i]==e&&(this.ShowResult[i].spriteFrame=this.ResultSpriteFrame[e-1]);var n=[];for(e=0;e<5;e++){var r=Math.floor(9*Math.random())+1;n.push(r),console.log(r)}for(e=1;e<=9;e++)for(i=0;i<5;i++)n[i]==e&&(this.ShowRandomNumber[i].spriteFrame=this.ShowRandomSpriteFrame[e-1]);this.BallResultShowOne()},e.prototype.BallResultShowOne=function(){var t=this;l.default.instance.TurnOnSound("PingPong"),this.BallAnimation[0].play("BallAnimation"),setTimeout(function(){t.BallAnimation[0].stop("BallAnimation"),t.MainResult[0].spriteFrame=t.ShowResult[0].spriteFrame,setTimeout(function(){l.default.instance.TurnOnSound("ShowResult"),t.ShowResultNode[0].active=!0,t.MainResult[0].spriteFrame=null,setTimeout(function(){t.BallResultShowTwo()},500)},100)},4e3)},e.prototype.BallResultShowTwo=function(){var t=this;l.default.instance.TurnOnSound("PingPong"),this.BallAnimation[1].play("BallAnimation"),setTimeout(function(){t.BallAnimation[1].stop("BallAnimation"),t.MainResult[1].spriteFrame=t.ShowResult[1].spriteFrame,setTimeout(function(){l.default.instance.TurnOnSound("ShowResult"),t.ShowResultNode[1].active=!0,t.MainResult[1].spriteFrame=null,setTimeout(function(){t.BallResultShowThree()},500)},100)},4e3)},e.prototype.BallResultShowThree=function(){var t=this;l.default.instance.TurnOnSound("PingPong"),this.BallAnimation[2].play("BallAnimation"),setTimeout(function(){t.BallAnimation[2].stop("BallAnimation"),t.MainResult[2].spriteFrame=t.ShowResult[2].spriteFrame,setTimeout(function(){l.default.instance.TurnOnSound("ShowResult"),t.ShowResultNode[2].active=!0,t.MainResult[2].spriteFrame=null,setTimeout(function(){t.BallResultShowFour()},500)},100)},4e3)},e.prototype.BallResultShowFour=function(){var t=this;l.default.instance.TurnOnSound("PingPong"),this.BallAnimation[3].play("BallAnimation"),setTimeout(function(){t.BallAnimation[3].stop("BallAnimation"),t.MainResult[3].spriteFrame=t.ShowResult[3].spriteFrame,setTimeout(function(){l.default.instance.TurnOnSound("ShowResult"),t.ShowResultNode[3].active=!0,t.MainResult[3].spriteFrame=null,setTimeout(function(){t.BallResultShowFive()},500)},100)},4e3)},e.prototype.BallResultShowFive=function(){var t=this;l.default.instance.TurnOnSound("PingPong"),this.BallAnimation[4].play("BallAnimation"),setTimeout(function(){t.BallAnimation[4].stop("BallAnimation"),t.MainResult[4].spriteFrame=t.ShowResult[4].spriteFrame,setTimeout(function(){l.default.instance.TurnOnSound("ShowResult"),t.ShowResultNode[4].active=!0,t.MainResult[4].spriteFrame=null,setTimeout(function(){t.RemoveAndPlayAgain()},500)},100)},4e3)},e.prototype.RemoveAndPlayAgain=function(){var t=this;setTimeout(function(){setTimeout(function(){for(var e=0;e<5;e++)t.ShowResultNode[e].active=!1,t.MainResult[e].spriteFrame=null,t.ShowRandomNumber[e].spriteFrame=null;t.ValueBet=0,t.ValueWin=0,t.LabelWin.string=t.ValueWin.toString()+"$",t.TotalBetLabel.string=t.ValueBet.toString()+"$",t.IsPlay=!0},1e3),t.CheckResult(),t.LobbyBtn.interactable=!0},2e3)},e.prototype.CheckResult=function(){this.ShowResult[0].spriteFrame==this.ShowRandomNumber[0].spriteFrame&&this.ShowResult[1].spriteFrame==this.ShowRandomNumber[1].spriteFrame&&(this.ValueBet+=this.ChangeBet,this.LabelCreditNumber=this.LabelCreditNumber+2*this.ValueBet,this.ValueWin=this.ValueBet,console.log("you Win...!")),this.ShowResult[1].spriteFrame==this.ShowRandomNumber[1].spriteFrame&&this.ShowResult[2].spriteFrame==this.ShowRandomNumber[2].spriteFrame&&(this.ValueBet+=this.ChangeBet,this.LabelCreditNumber=this.LabelCreditNumber+2*this.ValueBet,this.ValueWin=this.ValueBet,console.log("you Win...!")),this.ShowResult[2].spriteFrame==this.ShowRandomNumber[2].spriteFrame&&this.ShowResult[3].spriteFrame==this.ShowRandomNumber[3].spriteFrame&&(this.ValueBet+=this.ChangeBet,this.LabelCreditNumber=this.LabelCreditNumber+2*this.ValueBet,this.ValueWin=this.ValueBet,console.log("you Win...!")),this.ShowResult[3].spriteFrame==this.ShowRandomNumber[3].spriteFrame&&this.ShowResult[4].spriteFrame==this.ShowRandomNumber[4].spriteFrame&&(this.ValueBet+=this.ChangeBet,this.LabelCreditNumber=this.LabelCreditNumber+2*this.ValueBet,this.ValueWin=this.ValueBet,console.log("you Win...!")),this.ShowResult[1].spriteFrame==this.ShowRandomNumber[1].spriteFrame&&this.ShowResult[2].spriteFrame==this.ShowRandomNumber[2].spriteFrame&&this.ShowResult[3].spriteFrame==this.ShowRandomNumber[3].spriteFrame&&(this.ValueBet+=this.ChangeBet,this.LabelCreditNumber=this.LabelCreditNumber+3*this.ValueBet,this.ValueWin=this.ValueBet,console.log("you Win...!")),this.ShowResult[2].spriteFrame==this.ShowRandomNumber[2].spriteFrame&&this.ShowResult[3].spriteFrame==this.ShowRandomNumber[3].spriteFrame&&this.ShowResult[4].spriteFrame==this.ShowRandomNumber[4].spriteFrame&&(this.ValueBet+=this.ChangeBet,this.LabelCreditNumber=this.LabelCreditNumber+3*this.ValueBet,this.ValueWin=this.ValueBet,console.log("you Win...!")),this.ShowResult[0].spriteFrame==this.ShowRandomNumber[0].spriteFrame&&this.ShowResult[1].spriteFrame==this.ShowRandomNumber[1].spriteFrame&&this.ShowResult[2].spriteFrame==this.ShowRandomNumber[2].spriteFrame&&this.ShowResult[3].spriteFrame==this.ShowRandomNumber[3].spriteFrame&&this.ShowResult[4].spriteFrame==this.ShowRandomNumber[4].spriteFrame?(this.ValueBet+=this.ChangeBet,this.LabelCreditNumber=this.LabelCreditNumber+5*this.ValueBet,this.ValueWin=this.ValueBet,console.log("you Win...!")):console.log("you Lose...!"),this.LabelCredit.string=this.LabelCreditNumber.toString()+"$",this.LabelWin.string=this.ValueWin.toString()+"$"},e.prototype.Increas=function(){this.ChangeBet+=100,this.LabelChangeBet.string=this.ChangeBet.toString()+"$"},e.prototype.Decreas=function(){this.ChangeBet>100&&(this.ChangeBet-=100,this.LabelChangeBet.string=this.ChangeBet.toString()+"$")},e.prototype.SpinButton=function(){if(this.IsPlay){this.LobbyBtn.interactable=!1,this.ValueBet+=this.ChangeBet,this.LabelCreditNumber-=this.ChangeBet,this.TotalBetLabel.string=this.ValueBet.toString()+"$",this.LabelChangeBet.string=this.ChangeBet.toString()+"$",this.LabelCredit.string=this.LabelCreditNumber.toString()+"$",this.Random(),this.IsPlay=!1;for(var t=0;t<5;t++)this.ShowResultNode[t].active=!1,this.MainResult[t].spriteFrame=null,this.ShowRandomNode[0].active=!0,this.ShowRandomNode[1].active=!0,this.ShowRandomNode[2].active=!0,this.ShowRandomNode[3].active=!0,this.ShowRandomNode[4].active=!0}},e.prototype.StartGame=function(){this.ScreenGame.active=!0,this.ScreenAudio.active=!1,this.ScreenLoading.active=!1},e.prototype.LobbyButton=function(){this.ScreenAudio.active=!1,this.ScreenGame.active=!1,this.ScreenLoading.active=!0},e.prototype.AudioButton=function(){this.ScreenAudio.active=!0,this.ScreenGame.active=!1,this.ScreenLoading.active=!1},e.prototype.CloseAudio=function(){this.ScreenAudio.active=!1,this.ScreenGame.active=!0,this.ScreenLoading.active=!1},e.prototype.QuitGame=function(){cc.game.end()},r([u(cc.Node)],e.prototype,"ScreenGame",void 0),r([u(cc.Node)],e.prototype,"ScreenLoading",void 0),r([u(cc.Node)],e.prototype,"ScreenAudio",void 0),r([u(cc.Button)],e.prototype,"LobbyBtn",void 0),r([u(cc.Label)],e.prototype,"LabelCredit",void 0),r([u(cc.Label)],e.prototype,"LabelWin",void 0),r([u(cc.Label)],e.prototype,"LabelChangeBet",void 0),r([u(cc.Label)],e.prototype,"TotalBetLabel",void 0),r([u(cc.Sprite)],e.prototype,"MainResult",void 0),r([u(cc.Sprite)],e.prototype,"ShowResult",void 0),r([u(cc.Node)],e.prototype,"ShowResultNode",void 0),r([u(cc.SpriteFrame)],e.prototype,"ResultSpriteFrame",void 0),r([u(cc.Animation)],e.prototype,"BallAnimation",void 0),r([u(cc.Button)],e.prototype,"PlayButton",void 0),r([u(cc.Sprite)],e.prototype,"ShowRandomNumber",void 0),r([u(cc.Node)],e.prototype,"ShowRandomNode",void 0),r([u(cc.SpriteFrame)],e.prototype,"ShowRandomSpriteFrame",void 0),r([a],e)}(cc.Component);o.default=c,cc._RF.pop()},{"./Audio":"Audio"}],Sound:[function(t,e,o){"use strict";cc._RF.push(e,"2c944kBB1NFWbUp+Qr5uuC+","Sound");var i=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,r=n.ccclass,s=n.property,a=function(){function t(){this.Name=""}return t.prototype.start=function(){},i([s(String)],t.prototype,"Name",void 0),i([s(cc.AudioClip)],t.prototype,"Clip",void 0),i([r],t)}();o.default=a,cc._RF.pop()},{}]},{},["Audio","Game","Sound"]);