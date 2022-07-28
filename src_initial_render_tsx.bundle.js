"use strict";
(self["webpackChunkreact_sdk"] = self["webpackChunkreact_sdk"] || []).push([["src_initial_render_tsx"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/sdkCssVars.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/sdkCssVars.css ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* CSS Variables used in SDK components */\n:root {\n  --app-white: rgb(246, 246, 246);\n  --app-white-check: rgb(243, 247, 249);\n  --app-whiter: rgb(233, 238, 241);\n  --app-disabled-white: rgb(179, 192, 202);\n  --app-base: rgb(221, 230, 237);\n  --app-dark: rgb(118, 141, 160);\n  --app-darker: rgb(51, 73, 90);\n  --app-darkest: rgb(4, 46, 71);\n\n  --app-success: rgb(229, 249, 231);\n  --app-success-dark: rgb(67, 191, 104);\n  --app-error: rgb(251, 232, 232);\n  --app-error-dark: rgb(253, 94, 88);\n\n  /* Some standard values for typography */\n  --font-weight-bold: 700;\n  --font-weight-semibold: 600;\n  --font-weight-normal: 400;\n}\n", "",{"version":3,"sources":["webpack://./src/css/sdkCssVars.css"],"names":[],"mappings":"AAAA,yCAAyC;AACzC;EACE,+BAA+B;EAC/B,qCAAqC;EACrC,gCAAgC;EAChC,wCAAwC;EACxC,8BAA8B;EAC9B,8BAA8B;EAC9B,6BAA6B;EAC7B,6BAA6B;;EAE7B,iCAAiC;EACjC,qCAAqC;EACrC,+BAA+B;EAC/B,kCAAkC;;EAElC,wCAAwC;EACxC,uBAAuB;EACvB,2BAA2B;EAC3B,yBAAyB;AAC3B","sourcesContent":["/* CSS Variables used in SDK components */\n:root {\n  --app-white: rgb(246, 246, 246);\n  --app-white-check: rgb(243, 247, 249);\n  --app-whiter: rgb(233, 238, 241);\n  --app-disabled-white: rgb(179, 192, 202);\n  --app-base: rgb(221, 230, 237);\n  --app-dark: rgb(118, 141, 160);\n  --app-darker: rgb(51, 73, 90);\n  --app-darkest: rgb(4, 46, 71);\n\n  --app-success: rgb(229, 249, 231);\n  --app-success-dark: rgb(67, 191, 104);\n  --app-error: rgb(251, 232, 232);\n  --app-error-dark: rgb(253, 94, 88);\n\n  /* Some standard values for typography */\n  --font-weight-bold: 700;\n  --font-weight-semibold: 600;\n  --font-weight-normal: 400;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/sdkStyles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/sdkStyles.css ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fonts_Gilroy_UltraLight_otf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/Gilroy-UltraLight.otf */ "./src/fonts/Gilroy-UltraLight.otf");
/* harmony import */ var _fonts_Gilroy_Light_otf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/Gilroy-Light.otf */ "./src/fonts/Gilroy-Light.otf");
/* harmony import */ var _fonts_Gilroy_Regular_otf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/Gilroy-Regular.otf */ "./src/fonts/Gilroy-Regular.otf");
/* harmony import */ var _fonts_Gilroy_Medium_otf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fonts/Gilroy-Medium.otf */ "./src/fonts/Gilroy-Medium.otf");
/* harmony import */ var _fonts_Gilroy_SemiBold_otf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fonts/Gilroy-SemiBold.otf */ "./src/fonts/Gilroy-SemiBold.otf");
/* harmony import */ var _fonts_Gilroy_Bold_otf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fonts/Gilroy-Bold.otf */ "./src/fonts/Gilroy-Bold.otf");
/* harmony import */ var _fonts_Gilroy_ExtraBold_otf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fonts/Gilroy-ExtraBold.otf */ "./src/fonts/Gilroy-ExtraBold.otf");
/* harmony import */ var _fonts_Gilroy_Heavy_otf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fonts/Gilroy-Heavy.otf */ "./src/fonts/Gilroy-Heavy.otf");
// Imports











var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Gilroy_UltraLight_otf__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Gilroy_Light_otf__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Gilroy_Regular_otf__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Gilroy_Medium_otf__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Gilroy_SemiBold_otf__WEBPACK_IMPORTED_MODULE_7__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Gilroy_Bold_otf__WEBPACK_IMPORTED_MODULE_8__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Gilroy_ExtraBold_otf__WEBPACK_IMPORTED_MODULE_9__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Gilroy_Heavy_otf__WEBPACK_IMPORTED_MODULE_10__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 200;\n  font-weight: var(--font-weight-ultralight);\n  src: local(\"Gilroy UltraLight\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 300;\n  font-weight: var(--font-weight-light);\n  src: local(\"Gilroy Light\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 400;\n  font-weight: var(--font-weight-default);\n  src: local(\"Gilroy Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 500;\n  font-weight: var(--font-weight-medium);\n  src: local(\"Gilroy Medium\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 600;\n  font-weight: var(--font-weight-semibold);\n  src: local(\"Gilroy SemiBold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 700;\n  font-weight: var(--font-weight-bold);\n  src: local(\"Gilroy Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 800;\n  font-weight: var(--font-weight-extrabold);\n  src: local(\"Gilroy ExtraBold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 900;\n  font-weight: var(--font-weight-heavy);\n  src: local(\"Gilroy Heavy\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\nhtml, body {\n    height: 100%;\n    font-family: \"Gilroy\",  sans-serif;\n    color: var(--app-darker);\n    background-color: var(--app-white);\n    font-weight: 300;\n}\n\n\n.MuiPaper-root.MuiDialog-paper {\n  color: var(--app-darker);\n  background-color: var(--app-white);\n}\n\ninput[type=\"text\"],\ninput[type=\"email\"],\ninput[type=\"date\"],\ninput[type=\"number\"],\nselect {\n  background-color: var(--app-base);\n  max-height: 40px;\n  padding: 13px;\n  width: 100%;\n  border: 0;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  outline: none;\n  font-family: inherit;\n  font-size: 12px;\n}\n\n\ninput:focus, select:focus {\n  outline: max(2px, 0.15em) solid var(--app-dark);\n  outline-offset: max(2px, 0.15em);\n}\n\ninput::placeholder {\n  color: var(--app-dark);\n}\n\ninput:disabled {\n  background-color: var(--app-whiter);\n  color: var(--app-disabled-white);\n  cursor: not-allowed;\n}\n\nselect {\n  appearance: none;\n  cursor: pointer;\n}\n\n.input-label {\n  position: relative;\n}\n.input-label.required span:first-of-type::after {\n  display: inline;\n  content: \" *\";\n  vertical-align: top;\n  color: var(--app-error-dark);\n}\n.input-label.invalid input,\n.input-label.invalid select {\n  outline: max(2px, 0.15em) solid var(--app-error-dark);\n  background-color: var(--app-error);\n}\n.input-label.invalid .helperText {\n  color: var(--app-error-dark);\n}\n\n.input-icon {\n  position: absolute;\n  right: 15px;\n  top: 35px;\n  pointer-events: none;\n}\n\n.checkbox {\n  font-family: system-ui, sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n  line-height: 1.1;\n  display: grid;\n  grid-template-columns: 1em auto;\n  gap: 0.5em;\n}\n\n.checkbox + .checkbox {\n  margin-top: 1em;\n}\n\n.checkbox--disabled {\n  color: var(--app-whiter);\n  cursor: not-allowed;\n}\n\ninput[type=\"checkbox\"] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  /* Remove most all native input styles */\n  appearance: none;\n  /* For iOS < 15 */\n  background-color: var(--app-white-check);\n  /* Not removed via appearance */\n  margin: 0;\n\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n\n  display: grid;\n  place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n  transform: scale(0);\n  transform-origin: bottom left;\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--app-dark);\n  /* Windows High Contrast Mode */\n  background-color: CanvasText;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n\ninput[type=\"checkbox\"]:disabled {\n  color: var(--app-whiter);\n  cursor: not-allowed;\n}\n\n.button {\n  border-radius: 0;\n  border-width: 2px;\n  border-style: solid;\n  font-family: inherit;\n  padding: 10px;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.button.primary {\n  background-color: var(--app-darkest);\n  border-color: var(--app-darkest);\n  color: var(--app-white);\n}\n\n.button.secondary {\n  background-color: var(--app-white);\n  border-color: var(--app-base);\n  color: var(--app-darkest);\n}\n\ninput:-internal-autofill-previewed,input:-internal-autofill-selected {\n  background-color: var(--app-base) !important;\n}\n\nform { \n  padding: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/sdkStyles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 200;\n  font-weight: var(--font-weight-ultralight);\n  src: local(\"Gilroy UltraLight\"), url(../fonts/Gilroy-UltraLight.otf) format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 300;\n  font-weight: var(--font-weight-light);\n  src: local(\"Gilroy Light\"), url(../fonts/Gilroy-Light.otf) format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 400;\n  font-weight: var(--font-weight-default);\n  src: local(\"Gilroy Regular\"), url(../fonts/Gilroy-Regular.otf) format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 500;\n  font-weight: var(--font-weight-medium);\n  src: local(\"Gilroy Medium\"), url(../fonts/Gilroy-Medium.otf) format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 600;\n  font-weight: var(--font-weight-semibold);\n  src: local(\"Gilroy SemiBold\"), url(../fonts/Gilroy-SemiBold.otf) format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 700;\n  font-weight: var(--font-weight-bold);\n  src: local(\"Gilroy Bold\"), url(../fonts/Gilroy-Bold.otf) format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 800;\n  font-weight: var(--font-weight-extrabold);\n  src: local(\"Gilroy ExtraBold\"), url(../fonts/Gilroy-ExtraBold.otf) format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 900;\n  font-weight: var(--font-weight-heavy);\n  src: local(\"Gilroy Heavy\"), url(../fonts/Gilroy-Heavy.otf) format(\"opentype\");\n  unicode-range: \"U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000\";\n  unicode-range: var(--unicode-range-default);\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\nhtml, body {\n    height: 100%;\n    font-family: \"Gilroy\",  sans-serif;\n    color: var(--app-darker);\n    background-color: var(--app-white);\n    font-weight: 300;\n}\n\n\n.MuiPaper-root.MuiDialog-paper {\n  color: var(--app-darker);\n  background-color: var(--app-white);\n}\n\ninput[type=\"text\"],\ninput[type=\"email\"],\ninput[type=\"date\"],\ninput[type=\"number\"],\nselect {\n  background-color: var(--app-base);\n  max-height: 40px;\n  padding: 13px;\n  width: 100%;\n  border: 0;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  outline: none;\n  font-family: inherit;\n  font-size: 12px;\n}\n\n\ninput:focus, select:focus {\n  outline: max(2px, 0.15em) solid var(--app-dark);\n  outline-offset: max(2px, 0.15em);\n}\n\ninput::placeholder {\n  color: var(--app-dark);\n}\n\ninput:disabled {\n  background-color: var(--app-whiter);\n  color: var(--app-disabled-white);\n  cursor: not-allowed;\n}\n\nselect {\n  appearance: none;\n  cursor: pointer;\n}\n\n.input-label {\n  position: relative;\n}\n.input-label.required span:first-of-type::after {\n  display: inline;\n  content: \" *\";\n  vertical-align: top;\n  color: var(--app-error-dark);\n}\n.input-label.invalid input,\n.input-label.invalid select {\n  outline: max(2px, 0.15em) solid var(--app-error-dark);\n  background-color: var(--app-error);\n}\n.input-label.invalid .helperText {\n  color: var(--app-error-dark);\n}\n\n.input-icon {\n  position: absolute;\n  right: 15px;\n  top: 35px;\n  pointer-events: none;\n}\n\n.checkbox {\n  font-family: system-ui, sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n  line-height: 1.1;\n  display: grid;\n  grid-template-columns: 1em auto;\n  gap: 0.5em;\n}\n\n.checkbox + .checkbox {\n  margin-top: 1em;\n}\n\n.checkbox--disabled {\n  color: var(--app-whiter);\n  cursor: not-allowed;\n}\n\ninput[type=\"checkbox\"] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  /* Remove most all native input styles */\n  appearance: none;\n  /* For iOS < 15 */\n  background-color: var(--app-white-check);\n  /* Not removed via appearance */\n  margin: 0;\n\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n\n  display: grid;\n  place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n  transform: scale(0);\n  transform-origin: bottom left;\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--app-dark);\n  /* Windows High Contrast Mode */\n  background-color: CanvasText;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n\ninput[type=\"checkbox\"]:disabled {\n  color: var(--app-whiter);\n  cursor: not-allowed;\n}\n\n.button {\n  border-radius: 0;\n  border-width: 2px;\n  border-style: solid;\n  font-family: inherit;\n  padding: 10px;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.button.primary {\n  background-color: var(--app-darkest);\n  border-color: var(--app-darkest);\n  color: var(--app-white);\n}\n\n.button.secondary {\n  background-color: var(--app-white);\n  border-color: var(--app-base);\n  color: var(--app-darkest);\n}\n\ninput:-internal-autofill-previewed,input:-internal-autofill-selected {\n  background-color: var(--app-base) !important;\n}\n\nform { \n  padding: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/fonts/Gilroy-Bold.otf":
/*!***********************************!*\
  !*** ./src/fonts/Gilroy-Bold.otf ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a64a9abefbbe02db74efd2eed91e335c.otf");

/***/ }),

/***/ "./src/fonts/Gilroy-ExtraBold.otf":
/*!****************************************!*\
  !*** ./src/fonts/Gilroy-ExtraBold.otf ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0094146a0505298ed06a0ef3af075f2e.otf");

/***/ }),

/***/ "./src/fonts/Gilroy-Heavy.otf":
/*!************************************!*\
  !*** ./src/fonts/Gilroy-Heavy.otf ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "401eb83230d5d306f6715f6056fd3a14.otf");

/***/ }),

/***/ "./src/fonts/Gilroy-Light.otf":
/*!************************************!*\
  !*** ./src/fonts/Gilroy-Light.otf ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cc7ab55d27205bd640016b19810e50c7.otf");

/***/ }),

/***/ "./src/fonts/Gilroy-Medium.otf":
/*!*************************************!*\
  !*** ./src/fonts/Gilroy-Medium.otf ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9f1092d036076c58004147643fcedf04.otf");

/***/ }),

/***/ "./src/fonts/Gilroy-Regular.otf":
/*!**************************************!*\
  !*** ./src/fonts/Gilroy-Regular.otf ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "86bc2a5a8350170447c9ab13f76f8be0.otf");

/***/ }),

/***/ "./src/fonts/Gilroy-SemiBold.otf":
/*!***************************************!*\
  !*** ./src/fonts/Gilroy-SemiBold.otf ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "017ff10cc8aae083265027dfa41e229a.otf");

/***/ }),

/***/ "./src/fonts/Gilroy-UltraLight.otf":
/*!*****************************************!*\
  !*** ./src/fonts/Gilroy-UltraLight.otf ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f740ead48e00dc85a7437abade99a01c.otf");

/***/ }),

/***/ "./src/css/sdkCssVars.css":
/*!********************************!*\
  !*** ./src/css/sdkCssVars.css ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sdkCssVars_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sdkCssVars.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/sdkCssVars.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sdkCssVars_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_sdkCssVars_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/css/sdkStyles.css":
/*!*******************************!*\
  !*** ./src/css/sdkStyles.css ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sdkStyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sdkStyles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/sdkStyles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sdkStyles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_sdkStyles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

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
/* harmony import */ var _css_sdkCssVars_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/sdkCssVars.css */ "./src/css/sdkCssVars.css");
/* harmony import */ var _css_sdkStyles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/sdkStyles.css */ "./src/css/sdkStyles.css");






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