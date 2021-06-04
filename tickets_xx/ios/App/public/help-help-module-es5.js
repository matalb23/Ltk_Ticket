function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHelpHelpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content color=\"primary\" padding> \n  <ion-grid class=\"bglogin\">\n    <ion-row>\n      <ion-col>\n        <div text-center style=\" text-align: center; margin-top: 40px;\">\n          <img src=\"../../../assets/s1.png\" style=\"max-width: 70%;\" />\n        </div>\n        <p class=\"help1-titulos\">Hola!</p>\n        <p class=\"help1-texto\">Te mostramos como usar la <br> App de TICKETS en 2 pasos.</p>\n        <button size=\"large\" expand=\"block\" (click)=\"siguiente()\" class=\"btn-blanco\" > <!-- CORREGIR LINK VA A HELP2-->\n          SIGUIENTE\n       </button>\n       <p><a routerLink=\"/home\" class=\"close\">X</a></p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      \n    </ion-row>\n     \n  </ion-grid>\n   \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/help/help-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/help/help-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HelpPageRoutingModule */

  /***/
  function srcAppHelpHelpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPageRoutingModule", function () {
      return HelpPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./help.page */
    "./src/app/help/help.page.ts");

    var routes = [{
      path: '',
      component: _help_page__WEBPACK_IMPORTED_MODULE_3__["HelpPage"]
    }];

    var HelpPageRoutingModule = function HelpPageRoutingModule() {
      _classCallCheck(this, HelpPageRoutingModule);
    };

    HelpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HelpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/help/help.module.ts":
  /*!*************************************!*\
    !*** ./src/app/help/help.module.ts ***!
    \*************************************/

  /*! exports provided: HelpPageModule */

  /***/
  function srcAppHelpHelpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPageModule", function () {
      return HelpPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./help-routing.module */
    "./src/app/help/help-routing.module.ts");
    /* harmony import */


    var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./help.page */
    "./src/app/help/help.page.ts");

    var HelpPageModule = function HelpPageModule() {
      _classCallCheck(this, HelpPageModule);
    };

    HelpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _help_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelpPageRoutingModule"]],
      declarations: [_help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]]
    })], HelpPageModule);
    /***/
  },

  /***/
  "./src/app/help/help.page.scss":
  /*!*************************************!*\
    !*** ./src/app/help/help.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHelpHelpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bglogin {\n  visibility: inherit;\n  background-image: url('bg.png');\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9DOlxcUHJvamVjdHNcXEx0a19UaWNrZXRcXHRpY2tldHMvc3JjXFxhcHBcXGhlbHBcXGhlbHAucGFnZS5zY3NzIiwic3JjL2FwcC9oZWxwL2hlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaGVscC9oZWxwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ2xvZ2luIHtcclxuICAgIHZpc2liaWxpdHk6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmcucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH0iLCIuYmdsb2dpbiB7XG4gIHZpc2liaWxpdHk6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/help/help.page.ts":
  /*!***********************************!*\
    !*** ./src/app/help/help.page.ts ***!
    \***********************************/

  /*! exports provided: HelpPage */

  /***/
  function srcAppHelpHelpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPage", function () {
      return HelpPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HelpPage = /*#__PURE__*/function () {
      function HelpPage(router) {
        _classCallCheck(this, HelpPage);

        this.router = router;
      }

      _createClass(HelpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "siguiente",
        value: function siguiente() {
          this.router.navigateByUrl('help2');
        }
      }]);

      return HelpPage;
    }();

    HelpPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HelpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-help',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./help.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./help.page.scss */
      "./src/app/help/help.page.scss"))["default"]]
    })], HelpPage);
    /***/
  }
}]);
//# sourceMappingURL=help-help-module-es5.js.map