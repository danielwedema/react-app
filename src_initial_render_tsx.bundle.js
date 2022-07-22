"use strict";
(self["webpackChunkreact_sdk"] = self["webpackChunkreact_sdk"] || []).push([["src_initial_render_tsx"],{

/***/ "./src/initial_render.tsx":
/*!********************************!*\
  !*** ./src/initial_render.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ initialRender; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _bridge_react_pconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bridge/react_pconnect */ "./src/bridge/react_pconnect.jsx");
/* harmony import */ var _bridge_Context_StoreContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bridge/Context/StoreContext */ "./src/bridge/Context/StoreContext.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");







_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleDown, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faEnvelope);
function initialRender(inRenderObj, containerId) {
    const { props, domContainerID = null, componentName, portalTarget, styleSheetTarget } = inRenderObj;
    let target = null;
    if (domContainerID) {
        target = document.getElementById(domContainerID);
    }
    else if (portalTarget) {
        target = portalTarget;
    }
    else if (containerId) {
        target = document.getElementById(containerId);
    }
    const Component = (rootProps) => {
        const PegaConnectObj = (0,_bridge_react_pconnect__WEBPACK_IMPORTED_MODULE_2__["default"])();
        const thePConnObj = react__WEBPACK_IMPORTED_MODULE_0__.createElement(PegaConnectObj, Object.assign({}, rootProps));
        // NOTE: For Embedded mode, we add in displayOnlyFA and isMashup to our React context
        //  so the values are available to any component that may need it.
        const theComp = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_bridge_Context_StoreContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, { value: { store: window.PCore.getStore(), displayOnlyFA: true, isMashup: true } }, thePConnObj);
        return theComp;
    };
    if (componentName) {
        Component.displayName = componentName;
    }
    const theComponent = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, Object.assign({}, props, { portalTarget: portalTarget, styleSheetTarget: styleSheetTarget })));
    (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, theComponent), target);
}


/***/ })

}]);
//# sourceMappingURL=src_initial_render_tsx.bundle.js.map