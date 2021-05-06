function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title *ngIf=\"infoUsuario\">\n      <p class=\"titulos-cab\">Hola <strong>{{ infoUsuario.usuarioNombre }}</strong></p>\n      <p class=\"titulos-cab-pagina\">ALTA DE TICKET</p>\n    </ion-title>  \n  </ion-toolbar>\n</ion-header>\n-->\n\n<ion-content [fullscreen]=\"true\">\n  <ng-container *ngIf=\"infoUsuario\">\n    <!--\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\"></ion-title>\n    </ion-toolbar>\n  </ion-header>\n-->\n\n\n    <div class=\"cabeceras\">\n      <a routerLink=\"/login\">\n        <img src=\"../../assets/back.png\" style=\"max-height: 17px;top: 35px;position: absolute;margin-left: 4px;\" />\n      </a>\n      <p class=\"titulos-cab\" style=\" max-width: 70%;\">Hola, <strong>{{infoUsuario.usuarioNombre}} </strong></p>\n      <p class=\"titulos-cab-pagina\">ALTA DE TICKET</p>\n      <a routerLink=\"/help\">\n        <img src=\"../../assets/menu.png\"\n          style=\"max-height: 17px;position: absolute; top: 35px;float: right; right: 30px;\" />\n      </a>\n    </div>\n\n    <div class=\"cuerpo-internas\">\n      <ion-list>\n        <div>\n          <p style=\" margin-left: 14px; font-size: 15px;\">\n            Elegí una de las siguientes categorías.\n          </p>\n          <ion-item *ngFor=\"let template of infoUsuario.templates\" style=\"width: 44%;min-height: 120px; float: left;border: 1px solid #dedede;\n    margin: 10px; border-radius: 11px;    box-shadow: 0px 3px 13px 0px #dedede;\">\n            <ion-grid style=\"max-width: 100%; float: left; padding: 0px;\">\n              <ion-row>\n                <ion-col style=\"height: 116px;\">\n                  <p class=\"subtitulos\">\n                    {{ template.cabecera.descripcion }}\n                  </p>\n                  <button size=\"large\" expand=\"block\" (click)=\"crearTemplate(template)\" class=\"btn-blue\"\n                    style=\"position: absolute; bottom: 0px;\">\n                    Crear ticket\n                  </button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          <ion-item style=\"width: 44%;min-height: 120px; float: left;border: 1px solid #dedede;\n    margin: 10px; border-radius: 11px;    box-shadow: 0px 3px 13px 0px #dedede;\">\n            <ion-grid style=\"max-width: 100%; float: left; padding: 0px;\">\n              <ion-row>\n                <ion-col style=\"height: 116px;\">\n                  <p class=\"subtitulos\">\n                    Tks Asignados\n                  </p>\n                  <!-- verTks(Tipo)\n              1=creado\n              0=asignado\n           -->\n                  <button size=\"large\" expand=\"block\" (click)=\"verTks(0)\" class=\"btn-blue\"\n                    style=\"position: absolute; bottom: 0px;\">\n                    Ver\n                  </button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          <ion-item style=\"width: 44%;min-height: 120px; float: left;border: 1px solid #dedede;\n    margin: 10px; border-radius: 11px;    box-shadow: 0px 3px 13px 0px #dedede;\">\n            <ion-grid style=\"max-width: 100%; float: left; padding: 0px;\">\n              <ion-row>\n                <ion-col style=\"height: 116px;\">\n                  <p class=\"subtitulos\">\n                    Tks Creados\n                  </p>\n                  <!-- verTks(Tipo)\n              1=creado\n              0=asignado\n           -->\n                  <button size=\"large\" expand=\"block\" (click)=\"verTks(1)\" class=\"btn-blue\"\n                    style=\"position: absolute; bottom: 0px;\">\n                    Ver\n                  </button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </div>\n      </ion-list>\n    </div>\n\n    <!--<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n  AYUDA 2\n</button>-->\n\n\n  </ng-container>\n</ion-content>\n<ion-footer class=\"footer\">\n  <p class=\"txt-footer\">Copyright © 2020</p>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.item-inner {\n  border-width: 0px !important;\n  border-style: solid !important;\n  border-color: #FFF !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcUHJvamVjdHNcXEx0a19UaWNrZXRcXHRpY2tldHMvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGOztBRElBO0VBQ0UsNEJBQUE7RUFDRSw4QkFBQTtFQUNBLDZCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaXRlbS1pbm5lciB7XG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xufSIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/api.service */
    "./src/app/service/api.service.ts");
    /* harmony import */


    var _service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/settings.service */
    "./src/app/service/settings.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_fcm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/fcm.service */
    "./src/app/service/fcm.service.ts");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(api, settings, router, fcmService) {
        _classCallCheck(this, HomePage);

        //+ this.ngOnInit();
        this.api = api;
        this.settings = settings;
        this.router = router;
        this.fcmService = fcmService;
      }

      _createClass(HomePage, [{
        key: "getMisTemplates",
        value: function getMisTemplates() {
          var _this = this;

          // this.loading.present();   
          this.api.get("api/template?login=" + this.settings.getValue(_service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].setting_User)).subscribe(function (data) {
            _this.infoUsuario = data; //alert((JSON.stringify(data)));
          }, function (err) {
            //  this.loading.dismiss();
            //console.log(err);
            var respuesta = JSON.parse(JSON.stringify(err));
          });
        }
      }, {
        key: "crearTemplate",
        value: function crearTemplate(template) {
          // console.log( template);
          this.settings.SetTemplateForm(template);
          this.router.navigate(['/template-create/' + this.infoUsuario.usuarioNombre]);
        }
      }, {
        key: "verTks",
        value: function verTks(tipo) {
          //this.router.navigate(['/ver-tks/'+this.infoUsuario.usuarioNombre]);
          this.router.navigate(['/ver-tks/' + tipo]);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.getMisTemplates();
          this.fcmService.initPush();
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: _service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_fcm_service__WEBPACK_IMPORTED_MODULE_5__["FcmService"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map