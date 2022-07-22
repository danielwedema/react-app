/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/versionHelpers.ts":
/*!***************************************!*\
  !*** ./src/helpers/versionHelpers.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareSdkPCoreVersions": function() { return /* binding */ compareSdkPCoreVersions; },
/* harmony export */   "sdkVersion": function() { return /* binding */ sdkVersion; }
/* harmony export */ });
/**
 * versionHelpers.ts
 *
 * Container helper functions that can identify which version of
 * PCore/PConnect is being run
 */
const sdkVersion = "8.7";
function compareSdkPCoreVersions() {
    const theConstellationVersion = PCore.getPCoreVersion();
    if (theConstellationVersion.includes(sdkVersion)) {
        // eslint-disable-next-line no-console
        console.log(`sdkVersion: ${sdkVersion} matches PCore version: ${PCore.getPCoreVersion()}`);
    }
    else {
        // eslint-disable-next-line no-console
        console.error(`sdkVersion: ${sdkVersion} does NOT match PCore version: ${PCore.getPCoreVersion()}`);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "react-sdk:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_sdk"] = self["webpackChunkreact_sdk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_versionHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/versionHelpers */ "./src/helpers/versionHelpers.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

window.pega = {
    initPega,
    initMashup,
    initPortal,
    getNotificationCount,
    showPage,
    startCase,
    continueCase
};
function initMashup(element) {
    return __awaiter(this, void 0, void 0, function* () {
        window.PConn = yield lazyLoad('mashup', element);
    });
}
function initPortal(element) {
    return __awaiter(this, void 0, void 0, function* () {
        window.PConn = yield lazyLoad('portal', element);
    });
}
function showPage(pageName, className) {
    return __awaiter(this, void 0, void 0, function* () {
        return window.PConn.getActionsApi().showPage(pageName, className);
    });
}
function startCase(caseTypeId, content) {
    return __awaiter(this, void 0, void 0, function* () {
        return window.PConn.getActionsApi().createWork(caseTypeId, { containerName: 'primary', flowType: 'pyStartCase', caseInfo: { content: content }
            //   , pageName: 'pyEmbedAssignment' 
        });
        // return window.createCase(null, caseTypeId);
    });
}
function continueCase(assignmentId, className) {
    return __awaiter(this, void 0, void 0, function* () {
        return window.PConn.getActionsApi().openAssignment(assignmentId, className, {
            containerName: "modal",
            context: "root",
            isActionFromToDoList: true,
            isChild: undefined,
            target: ""
        });
    });
}
function lazyLoad(type, element) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => {
            window.PCore.onPCoreReady((renderObj) => __awaiter(this, void 0, void 0, function* () {
                window.PCore.getDebugger().toggleXRay(true);
                const React = (yield __webpack_require__.e(/*! import() */ "vendors-node_modules_react_index_js").then(__webpack_require__.t.bind(__webpack_require__, /*! react */ "./node_modules/react/index.js", 19))).default;
                const initialRender = (yield Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react_index_js"), __webpack_require__.e("vendors-node_modules_date-io_dayjs_build_index_esm_js-node_modules_fortawesome_free-regular-s-4e94e1"), __webpack_require__.e("src_bridge_react_pconnect_jsx"), __webpack_require__.e("src_initial_render_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./initial_render */ "./src/initial_render.tsx"))).default;
                const createPConnectComponent = (yield Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react_index_js"), __webpack_require__.e("vendors-node_modules_date-io_dayjs_build_index_esm_js-node_modules_fortawesome_free-regular-s-4e94e1"), __webpack_require__.e("src_bridge_react_pconnect_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bridge/react_pconnect */ "./src/bridge/react_pconnect.jsx"))).default;
                window.PCore.registerComponentCreator((c11nEnv, additionalProps = {}) => {
                    const PConnectComp = createPConnectComponent();
                    return (React.createElement(PConnectComp, Object.assign({}, Object.assign(Object.assign(Object.assign(Object.assign({}, c11nEnv), c11nEnv.getPConnect().getConfigProps()), c11nEnv.getPConnect().getActions()), { additionalProps }))));
                });
                console.log(`PCore ready!`);
                (0,_helpers_versionHelpers__WEBPACK_IMPORTED_MODULE_0__.compareSdkPCoreVersions)();
                initialRender(renderObj, 'pega-root');
                resolve(renderObj.props.getPConnect());
            }));
            const div = document.createElement('div');
            // div.attachShadow({mode: 'closed'});
            div.id = 'pega-root';
            // div.appendChild(createStyleSheet('/assets/css/sdkCssVars.css'));
            // div.appendChild(createStyleSheet('/assets/css/sdkStyles.css'));
            element.prepend(div);
            if (type === 'mashup') {
                window.loadMashup('pega-root', false);
            }
            else {
                window.loadPortal('pega-root', 'WebPortal');
            }
        });
    });
}
function createStyleSheet(src) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', src);
    return link;
}
function getNotificationCount() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield window.PCore.getDataApiUtils().getData('D_pyGetCurrentUserNotifications');
        return response.data.resultCount;
    });
}
function initPega(config, element) {
    return __awaiter(this, void 0, void 0, function* () {
        // const div = document.createElement('div');
        // div.attachShadow({mode: 'closed'});
        // div.id = 'pega-root';
        // div.appendChild(createStyleSheet('/assets/css/sdkCssVars.css'));
        // div.appendChild(createStyleSheet('/assets/css/sdkStyles.css'));
        // element.prepend(div);
        const jwt = yield (yield fetch(config.authConfig.jwtUri)).text();
        const bootstrapShell = yield import(/* webpackIgnore: true */ `${config.serverConfig.sdkContentServerUrl}bootstrap-shell.js`);
        window.loadView = bootstrapShell.loadView;
        window.loadPortal = bootstrapShell.loadPortal;
        window.loadComponent = bootstrapShell.loadComponent;
        window.loadMashup = bootstrapShell.loadMashup;
        window.loadViewByName = bootstrapShell.loadViewByName;
        window.loadCase = bootstrapShell.loadCase;
        window.createCase = bootstrapShell.createCase;
        window.loadAssignment = bootstrapShell.loadAssignment;
        // bootstrapShell.loadMashup('app-root');
        // bootstrapShell.loadPortal('app-root', defaultPortalName);
        // bootstrapShell.loadViewByName('app-root', viewName, defaultPortalName);
        try {
            const constellationConfig = {
                authInfo: {
                    tokenInfo: {
                        token_type: 'bearer',
                        access_token: jwt
                    }
                },
                restServerUrl: config.serverConfig.infinityRestServerUrl,
                staticContentServerUrl: config.serverConfig.sdkContentServerUrl,
                dynamicLoadComponents: false,
                dynamicSetCookie: false,
                renderingMode: "EMBED",
                customRendering: true
            };
            try {
                yield bootstrapShell.bootstrapWithAuthHeader(constellationConfig);
                console.log('Bootstrap successful!');
            }
            catch (e) {
                console.error(e);
            }
            // window.PCore.getAssetLoader().register(
            //   "component-loader",
            //   async (componentNames = []) => {
            //     const promises = [];
            //     componentNames.forEach((comp) => {
            //       if (/^[A-Z]/.test(comp) && !LazyComponentMap[comp]) {
            //         if (!ComponentMap[comp]) {
            //           const srcUrl = `${window.PCore.getAssetLoader().getConstellationServiceUrl()}/v860/${window.PCore.getAssetLoader().getAppAlias()}/component/${comp}.js`;
            //           promises.push(window.PCore.getAssetLoader().getLoader()(srcUrl, "script"));
            //         } else {
            //           if (ComponentMap[comp].modules && ComponentMap[comp].modules.length) {
            //             ComponentMap[comp].modules.forEach((module) => {
            //               LazyComponentMap[comp] = module;
            //             });
            //           }
            //           if (ComponentMap[comp].scripts && ComponentMap[comp].scripts.length) {
            //             ComponentMap[comp].scripts.forEach((script) => {
            //               promises.push(
            //                 // eslint-disable-next-line no-undef
            //                 window.PCore.getAssetLoader().getLoader()(script, "script")
            //               );
            //             });
            //           }
            //         }
            //       }
            //     });
            //     /* Promise.all rejects or accepts all or none. This causes entire component loader to fail
            //     in case there is a single failure.
            //     Using allSettled to allow Promise to be resolved even if there are failed components
            //     Note : This is a liberty taken at component loader and unwise to be used at
            //     asset loader which will still use Promise.all
            //     */
            //     await Promise.allSettled(promises);
            //   }
            // );
            window.PCore.getPubSubUtils().subscribe(window.PCore.getConstants().PUB_SUB_EVENTS.EVENT_FULL_REAUTH, console.log, "authFullReauth");
        }
        catch (e) {
            // Assume error caught is because token is not valid and attempt a full reauth
            // eslint-disable-next-line no-console
            console.error(`Constellation JS Engine bootstrap failed. ${e}`);
            // authFullReauth();
        }
    });
}

}();
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map