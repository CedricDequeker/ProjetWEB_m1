"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/authors/[id]/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/api/navigation.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/api/navigation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\");\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceMappingURL=navigation.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEOztBQUVoRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2FwaS9uYXZpZ2F0aW9uLmpzP2UwYmQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4uL2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2aWdhdGlvbi5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/api/navigation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/authors/[id]/page.jsx":
/*!***************************************!*\
  !*** ./src/app/authors/[id]/page.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Breadcrumb */ \"(app-pages-browser)/./src/components/Breadcrumb.jsx\");\n/* harmony import */ var _components_BookCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/BookCard */ \"(app-pages-browser)/./src/components/BookCard.jsx\");\n// src/app/authors/[id]/page.jsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n // Importer useParams\n\n\n\n\nvar AuthorDetailPage = function() {\n    _s();\n    var id = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams)().id; // Utiliser useParams pour récupérer l'id\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), author = _useState[0], setAuthor = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), books = _useState1[0], setBooks = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (id) {\n            // Remplacer par la logique de récupération des données pour l'auteur\n            setAuthor({\n                id: id,\n                name: \"Auteur Exemple\",\n                photoUrl: \"/images/auteur.jpg\",\n                biography: \"Biographie de l'auteur...\"\n            });\n            setBooks([\n                {\n                    id: 1,\n                    title: \"Livre 1\",\n                    publicationDate: \"2021-01-01\"\n                },\n                {\n                    id: 2,\n                    title: \"Livre 2\",\n                    publicationDate: \"2022-05-15\"\n                }\n            ]);\n        }\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"author-detail-page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                paths: [\n                    \"Accueil\",\n                    \"Liste des auteurs\",\n                    (author === null || author === void 0 ? void 0 : author.name) || \"Auteur\"\n                ]\n            }, void 0, false, {\n                fileName: \"D:\\\\WebProject\\\\ProjetWEB_m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.jsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this),\n            author && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"author-header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: author.photoUrl,\n                                alt: author.name,\n                                className: \"author-photo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebProject\\\\ProjetWEB_m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: author.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebProject\\\\ProjetWEB_m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: author.biography\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebProject\\\\ProjetWEB_m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WebProject\\\\ProjetWEB_m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Livres \\xe9crits par \",\n                            author.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WebProject\\\\ProjetWEB_m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"books-list\",\n                        children: books.map(function(book) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                title: book.title,\n                                publicationDate: book.publicationDate,\n                                authorName: author.name\n                            }, book.id, false, {\n                                fileName: \"D:\\\\WebProject\\\\ProjetWEB_m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 29\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WebProject\\\\ProjetWEB_m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WebProject\\\\ProjetWEB_m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.jsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, _this);\n};\n_s(AuthorDetailPage, \"1pRD02+avi3RObrAlYQ2cybhTL8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams\n    ];\n});\n_c = AuthorDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthorDetailPage);\nvar _c;\n$RefreshReg$(_c, \"AuthorDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aG9ycy9baWRdL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZ0NBQWdDOzs7OztBQUVZLENBQUUscUJBQXFCO0FBQ3ZCO0FBQ1k7QUFDSjtBQUNOO0FBRTlDLElBQU1PLG1CQUFtQjs7SUFDckIsSUFBTSxLQUFTUCwwREFBU0EsR0FBaEJRLElBQXFCLHlDQUF5QztJQUV0RSxJQUE0QlAsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFdBQTlCUSxTQUFxQlIsY0FBYlMsWUFBYVQ7SUFDNUIsSUFBMEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQTlCVSxRQUFtQlYsZUFBWlcsV0FBWVg7SUFFMUJDLGdEQUFTQSxDQUFDO1FBQ04sSUFBSU0sSUFBSTtZQUNKLHFFQUFxRTtZQUNyRUUsVUFBVTtnQkFDTkYsSUFBQUE7Z0JBQ0FLLE1BQU07Z0JBQ05DLFVBQVU7Z0JBQ1ZDLFdBQVc7WUFDZjtZQUNBSCxTQUFTO2dCQUNMO29CQUFFSixJQUFJO29CQUFHUSxPQUFPO29CQUFXQyxpQkFBaUI7Z0JBQWE7Z0JBQ3pEO29CQUFFVCxJQUFJO29CQUFHUSxPQUFPO29CQUFXQyxpQkFBaUI7Z0JBQWE7YUFDNUQ7UUFDTDtJQUNKLEdBQUc7UUFBQ1Q7S0FBRztJQUVQLHFCQUNJLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ2hCLDhEQUFVQTtnQkFBQ2lCLE9BQU87b0JBQUM7b0JBQVc7b0JBQXFCWCxDQUFBQSxtQkFBQUEsNkJBQUFBLE9BQVFJLElBQUksS0FBSTtpQkFBUzs7Ozs7O1lBRTVFSix3QkFDRzs7a0NBQ0ksOERBQUNTO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0U7Z0NBQUlDLEtBQUtiLE9BQU9LLFFBQVE7Z0NBQUVTLEtBQUtkLE9BQU9JLElBQUk7Z0NBQUVNLFdBQVU7Ozs7OzswQ0FDdkQsOERBQUNLOzBDQUFJZixPQUFPSSxJQUFJOzs7Ozs7MENBQ2hCLDhEQUFDWTswQ0FBR2hCLE9BQU9NLFNBQVM7Ozs7Ozs7Ozs7OztrQ0FHeEIsOERBQUNXOzs0QkFBRzs0QkFBbUJqQixPQUFPSSxJQUFJOzs7Ozs7O2tDQUNsQyw4REFBQ0s7d0JBQUlDLFdBQVU7a0NBQ1ZSLE1BQU1nQixHQUFHLENBQUMsU0FBQ0M7aURBQ1IsOERBQUN4Qiw0REFBUUE7Z0NBRUxZLE9BQU9ZLEtBQUtaLEtBQUs7Z0NBQ2pCQyxpQkFBaUJXLEtBQUtYLGVBQWU7Z0NBQ3JDWSxZQUFZcEIsT0FBT0ksSUFBSTsrQkFIbEJlLEtBQUtwQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzVDO0dBakRNRDs7UUFDYVAsc0RBQVNBOzs7S0FEdEJPO0FBbUROLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hdXRob3JzL1tpZF0vcGFnZS5qc3g/NjdhOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXBwL2F1dGhvcnMvW2lkXS9wYWdlLmpzeFxyXG5cInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJzsgIC8vIEltcG9ydGVyIHVzZVBhcmFtc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0JyZWFkY3J1bWInO1xyXG5pbXBvcnQgQm9va0NhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Cb29rQ2FyZCc7XHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcbmNvbnN0IEF1dGhvckRldGFpbFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTsgIC8vIFV0aWxpc2VyIHVzZVBhcmFtcyBwb3VyIHLDqWN1cMOpcmVyIGwnaWRcclxuXHJcbiAgICBjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbYm9va3MsIHNldEJvb2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAvLyBSZW1wbGFjZXIgcGFyIGxhIGxvZ2lxdWUgZGUgcsOpY3Vww6lyYXRpb24gZGVzIGRvbm7DqWVzIHBvdXIgbCdhdXRldXJcclxuICAgICAgICAgICAgc2V0QXV0aG9yKHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJBdXRldXIgRXhlbXBsZVwiLFxyXG4gICAgICAgICAgICAgICAgcGhvdG9Vcmw6IFwiL2ltYWdlcy9hdXRldXIuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBiaW9ncmFwaHk6IFwiQmlvZ3JhcGhpZSBkZSBsJ2F1dGV1ci4uLlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRCb29rcyhbXHJcbiAgICAgICAgICAgICAgICB7IGlkOiAxLCB0aXRsZTogXCJMaXZyZSAxXCIsIHB1YmxpY2F0aW9uRGF0ZTogXCIyMDIxLTAxLTAxXCIgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDIsIHRpdGxlOiBcIkxpdnJlIDJcIiwgcHVibGljYXRpb25EYXRlOiBcIjIwMjItMDUtMTVcIiB9XHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3ItZGV0YWlsLXBhZ2VcIj5cclxuICAgICAgICAgICAgPEJyZWFkY3J1bWIgcGF0aHM9e1snQWNjdWVpbCcsICdMaXN0ZSBkZXMgYXV0ZXVycycsIGF1dGhvcj8ubmFtZSB8fCAnQXV0ZXVyJ119IC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7YXV0aG9yICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3ItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdXRob3IucGhvdG9Vcmx9IGFsdD17YXV0aG9yLm5hbWV9IGNsYXNzTmFtZT1cImF1dGhvci1waG90b1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57YXV0aG9yLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2F1dGhvci5iaW9ncmFwaHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+TGl2cmVzIMOpY3JpdHMgcGFyIHthdXRob3IubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va3MtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym9va3MubWFwKChib29rKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9va0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jvb2suaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Jvb2sudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljYXRpb25EYXRlPXtib29rLnB1YmxpY2F0aW9uRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JOYW1lPXthdXRob3IubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aG9yRGV0YWlsUGFnZTtcclxuIl0sIm5hbWVzIjpbInVzZVBhcmFtcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnJlYWRjcnVtYiIsIkJvb2tDYXJkIiwiTW9kYWwiLCJCdXR0b24iLCJBdXRob3JEZXRhaWxQYWdlIiwiaWQiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJib29rcyIsInNldEJvb2tzIiwibmFtZSIsInBob3RvVXJsIiwiYmlvZ3JhcGh5IiwidGl0bGUiLCJwdWJsaWNhdGlvbkRhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwYXRocyIsImltZyIsInNyYyIsImFsdCIsImgxIiwicCIsImgyIiwibWFwIiwiYm9vayIsImF1dGhvck5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/authors/[id]/page.jsx\n"));

/***/ })

});