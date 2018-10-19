parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"I7Ak":[function(require,module,exports) {

},{"./../fonts/mali-v1-latin-regular.woff2":[["mali-v1-latin-regular.2efe9c02.woff2","KbG+"],"KbG+"],"./../fonts/mali-v1-latin-regular.woff":[["mali-v1-latin-regular.f53797d6.woff","i8Qq"],"i8Qq"]}],"mQH9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){var e=document.querySelector("canvas"),i=e.getContext("2d");return e.style.width="".concat(window.innerWidth,"px"),e.style.height="".concat(window.innerHeight,"px"),e.width=window.innerWidth*window.devicePixelRatio,e.height=window.innerHeight*window.devicePixelRatio,i.scale(window.devicePixelRatio,window.devicePixelRatio),i},i=e;exports.default=i;
},{}],"MuPq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RIGHT=exports.LEFT=exports.DOWN=exports.UP=exports.END=exports.PLAYING=exports.START=exports.SQUARE_SIZE=void 0;var r=8;exports.SQUARE_SIZE=r;var e="START";exports.START=e;var t="PLAYING";exports.PLAYING=t;var o="END";exports.END=o;var s="UP";exports.UP=s;var p="DOWN";exports.DOWN=p;var x="LEFT";exports.LEFT=x;var T="RIGHT";exports.RIGHT=T;
},{}],"AxFd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateFoodLocation=exports.setDirection=exports.updateSnake=exports.changeGameStatus=exports.UPDATE_FOOD_LOCATION=exports.SET_DIRECTION=exports.UPDATE_SNAKE=exports.CHANGE_GAME_STATUS=void 0;var t="CHANGE_GAME_STATUS";exports.CHANGE_GAME_STATUS=t;var e="UPDATE_SNAKE";exports.UPDATE_SNAKE=e;var o="SET_DIRECTION";exports.SET_DIRECTION=o;var r="UPDATE_FOOD_LOCATION";exports.UPDATE_FOOD_LOCATION=r;var s=function(e){return{type:t,status:e}};exports.changeGameStatus=s;var a=function(t){return{type:e,locations:t}};exports.updateSnake=a;var p=function(t){return{type:o,direction:t}};exports.setDirection=p;var n=function(t){return{type:r,location:t}};exports.updateFoodLocation=n;
},{}],"dmCi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../constants"),e=require("./actions"),n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.START,o=arguments.length>1?arguments[1]:void 0;return o.type===e.CHANGE_GAME_STATUS?o.status:n},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return n.type===e.UPDATE_SNAKE?n.locations:t},i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.UP,o=arguments.length>1?arguments[1]:void 0;return o.type===e.SET_DIRECTION?o.direction:n},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0},n=arguments.length>1?arguments[1]:void 0;return n.type===e.UPDATE_FOOD_LOCATION?n.location:t},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{status:n(t.status,e),snake:o(t.snake,e),direction:i(t.direction,e),food:r(t.food,e)}},u=d;exports.default=u;
},{"../constants":"MuPq","./actions":"AxFd"}],"vdU8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dispatch=exports.getState=void 0;var e=t(require("./reducers"));function t(e){return e&&e.__esModule?e:{default:e}}var r=(0,e.default)(),u=function(){return r};exports.getState=u;var o=function(t){r=(0,e.default)(r,t)};exports.dispatch=o;
},{"./reducers":"dmCi"}],"wPyC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./state"),t=require("./actions"),a={getState:e.getState,dispatch:e.dispatch,changeGameStatus:t.changeGameStatus,updateSnake:t.updateSnake,setDirection:t.setDirection,updateFoodLocation:t.updateFoodLocation};exports.default=a;
},{"./state":"vdU8","./actions":"AxFd"}],"2FlX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setFood=void 0;var o=require("./constants"),e=function(e){var t=Math.random()*(window.innerWidth-o.SQUARE_SIZE),n=Math.random()*(window.innerHeight-o.SQUARE_SIZE);e.dispatch(e.updateFoodLocation({x:t,y:n}))};exports.setFood=e;
},{"./constants":"MuPq"}],"WPc0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./constants"),t=require("./lib"),i=function(){return{x:window.innerWidth/2-e.SQUARE_SIZE/2,y:window.innerHeight/2-e.SQUARE_SIZE/2}},n=function(e){var t=i();e.dispatch(e.updateSnake([t]))},r=function(t){t.dispatch(t.setDirection(e.UP))},o=function(e){n(e),r(e),(0,t.setFood)(e)},u=o;exports.default=u;
},{"./constants":"MuPq","./lib":"2FlX"}],"rVGc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../constants"),t=n(require("../initializeGameState"));function n(e){return e&&e.__esModule?e:{default:e}}var i="Snake",r="Press 'R' to start",s=null,a=function(n){return function(i){"r"===i.key&&(l(),(0,t.default)(n),n.dispatch(n.changeGameStatus(e.PLAYING)))}},f=function(e){var t=a(e);window.addEventListener("keypress",t),s=t},l=function(){window.removeEventListener("keypress",s),s=null},o=function(e){e.fillStyle="#ff0",e.font="96px Mali, sans-serif";var t=e.measureText(i).width,n=window.innerWidth/2-t/2,r=.4*window.innerHeight;e.fillText(i,n,r)},u=function(e){e.fillStyle="#fff",e.font="48px Mali, sans-serif";var t=e.measureText(r).width,n=window.innerWidth/2-t/2,i=.55*window.innerHeight;e.fillText(r,n,i)},d=function(e,t){null===s&&f(t),o(e),u(e)},w=d;exports.default=w;
},{"../constants":"MuPq","../initializeGameState":"WPc0"}],"N5jH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=require("../constants"),t=require("../lib");function r(n){return i(n)||o(n)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function i(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}var u=20,a={ArrowUp:n.UP,ArrowDown:n.DOWN,ArrowLeft:n.LEFT,ArrowRight:n.RIGHT},f=0,c=n.UP,l=null,E=null,s=function(n){return function(t){var r=t.key,e=a[r];e&&n.dispatch(n.setDirection(e))}},S=function(n){var t=s(n);window.addEventListener("keydown",t),E=t},d=function(){window.removeEventListener("keydown",E),E=null},v=function(t){return function(r){var e=r.x,o=r.y,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#fff";t.fillStyle=i,t.fillRect(e,o,n.SQUARE_SIZE,n.SQUARE_SIZE)}},A=function(n,t){var r=v(n);t.forEach(function(n){return r(n)})},w=function(n,t){v(n)(t,"#ff0")},y=function(t,r){return 0<=t&&t<=window.innerWidth-n.SQUARE_SIZE&&0<=r&&r<=window.innerHeight-n.SQUARE_SIZE},h=function(t,r){return r.some(function(r){var e=r.x,o=r.y;return Math.abs(t.x-e)<n.SQUARE_SIZE&&Math.abs(t.y-o)<n.SQUARE_SIZE})},p=function(t,r){var e=t[t.length-1],o=e.x,i=e.y;return r===n.UP?i-=n.SQUARE_SIZE:r===n.DOWN?i+=n.SQUARE_SIZE:r===n.LEFT?o-=n.SQUARE_SIZE:r===n.RIGHT&&(o+=n.SQUARE_SIZE),{x:o,y:i}},R=function(e,o,i){null===E&&S(o);var a=o.getState(),s=a.snake,v=a.direction,R=a.food;if(A(e,s),w(e,R),!(i-f<u&&v===c&&R===l)){var U,I=p(s,v);if(h(I,[R])?((0,t.setFood)(o),U=r(s)):U=s.slice(1),!(y(I.x,I.y)&&!h(I,U)))return d(),void o.dispatch(o.changeGameStatus(n.END));U.push(I),o.dispatch(o.updateSnake(U)),f=i,c=v,l=R}},U=R;exports.default=U;
},{"../constants":"MuPq","../lib":"2FlX"}],"Qls0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../constants"),n=i(require("../initializeGameState"));function i(e){return e&&e.__esModule?e:{default:e}}var t="GAME OVER",r="Thanks for playing!",a="Press 'R' to play again",f=null,l=function(i){return function(t){"r"===t.key&&(o(),(0,n.default)(i),i.dispatch(i.changeGameStatus(e.PLAYING)))}},s=function(e){var n=l(e);window.addEventListener("keypress",n),f=n},o=function(){window.removeEventListener("keypress",f),f=null},u=function(e){e.fillStyle="#f00",e.font="96px Mali, sans-serif";var n=e.measureText(t).width,i=window.innerWidth/2-n/2,r=.4*window.innerHeight;e.fillText(t,i,r)},d=function(e){e.fillStyle="#fff",e.font="36px Mali, sans-serif";var n=e.measureText(r).width,i=window.innerWidth/2-n/2,t=.515*window.innerHeight;e.fillText(r,i,t)},w=function(e){e.fillStyle="#fff",e.font="48px Mali, sans-serif";var n=e.measureText(a).width,i=window.innerWidth/2-n/2,t=.65*window.innerHeight;e.fillText(a,i,t)},c=function(e,n){null===f&&s(n),u(e),d(e),w(e)},h=c;exports.default=h;
},{"../constants":"MuPq","../initializeGameState":"WPc0"}],"UCax":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,r=require("../constants"),t=u(require("./renderStart")),n=u(require("./renderPlaying")),i=u(require("./renderEnd"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var d=(a(e={},r.START,t.default),a(e,r.PLAYING,n.default),a(e,r.END,i.default),e),o=function(e,r){!function t(n){var i=r.getState().status;e.clearRect(0,0,window.innerWidth,window.innerHeight),d[i](e,r,n),window.requestAnimationFrame(t)}()},l=o;exports.default=l;
},{"../constants":"MuPq","./renderStart":"rVGc","./renderPlaying":"N5jH","./renderEnd":"Qls0"}],"QvaY":[function(require,module,exports) {
"use strict";require("../css/main.css");var e=a(require("./canvas")),r=a(require("./store")),u=a(require("./render"));function a(e){return e&&e.__esModule?e:{default:e}}var s=(0,e.default)();(0,u.default)(s,r.default);
},{"../css/main.css":"I7Ak","./canvas":"mQH9","./store":"wPyC","./render":"UCax"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.e462f4d1.map