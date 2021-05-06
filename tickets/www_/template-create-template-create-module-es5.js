function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["template-create-template-create-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/template-create/template-create.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/template-create/template-create.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTemplateCreateTemplateCreatePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <a routerLink=\"/home\">home</a> -->\n<ng-container *ngIf=\"template\"> \n  \n\n<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>{{template.cabecera.descripcion}}</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n<!--<ion-content>\n  <div class=\"cabeceras\">\n    <p class=\"titulos-cab\">Hola <strong>{{ infoUsuario.usuarioNombre }}</strong></p>\n    <p class=\"titulos-cab-pagina\">ALTA DE TICKET / {{template.cabecera.descripcion}}</p>\n  </div> \n</ion-content>-->\n\n<ion-content>\n  \n  <div class=\"cabeceras\">\n    <a routerLink=\"/home\">\n      <img src=\"../../assets/back.png\" style=\"max-height: 17px;top: 35px;position: absolute;margin-left: 4px;\"/>\n    </a>\n    <p class=\"titulos-cab\" style=\" max-width: 70%;\">Hola <strong>{{username}} </strong></p>\n    <p class=\"titulos-cab-pagina\">ALTA DE TICKET</p>\n    <a routerLink=\"/help\">\n      <img src=\"../../assets/menu.png\" style=\"max-height: 17px;position: absolute; top: 35px;float: right; right: 30px;\" />\n    </a>\n    </div>\n\n  <div>\n    <br/>\n  <p class=\"subtitulos cuerpo\">\n  {{template.cabecera.descripcion}}\n  </p>\n  <form [formGroup]=\"myFormGroup\" (ngSubmit)=\"onSubmit()\" class=\"cuerpo\">\n    <div *ngFor=\"let form_elem of template.detalle\">\n      <!-- <label>{{form_elem.label}}</label>-->\n      <ion-label class=\"labels-template\">{{form_elem.label}}</ion-label>\n    <div [ngSwitch]=\"form_elem.tipo\">\n      <div *ngSwitchCase=\"'1'\" style=\"margin-bottom: 15px;\"><!--texto -->\n        <input class=\"input-template\" type=\"text\" formControlName=\"{{form_elem.controlName}}\"/>\n      </div>\n      <div *ngSwitchCase=\"'5'\" style=\"margin-bottom: 15px;\"><!--Numero -->\n        <input class=\"input-template\" type=\"number\" formControlName=\"{{form_elem.controlName}}\"/>\n      </div>\n      <div *ngSwitchCase=\"'2'\" style=\"margin-bottom: 15px;\" class=\"check-container-template\" ><!--check--> \n        <input class=\"check-template\" type=\"checkbox\" formControlName=\"{{form_elem.controlName}}\"/>\n      </div>\n      <div *ngSwitchCase=\"'4'\" style=\"margin-bottom: 15px;\"><!--imagen -->\n        <!-- <div id=\"{{form_elem.controlName}}\" name=\"{{form_elem.controlName}}\"> -->\n        <ion-button   (click)=\"openCamera(form_elem.controlName)\" > Tomar Foto \n         \n       </ion-button>\n        <!-- </div> -->\n        <!-- <ion-label>NO IMplementado</ion-label> -->\n      </div>\n      \n      <div *ngSwitchCase=\"'3'\" style=\"margin-bottom: 15px;\"><!--combo -->\n        <select class=\"input-template\" formControlName=\"{{form_elem.controlName}}\">\n          <option *ngFor=\"let opt of form_elem.tipoComboItems\" [value]=\"opt.descripcion\">\n            {{opt.descripcion}}\n          </option>\n        </select>\n        \n      </div>\n    </div>  \n    </div>\n    <input type=\"submit\" class=\"guardar-salvar\" value=\"GUARDAR\"/>\n    <br/>\n    <br/>\n  </form>\n  </div>\n\n</ion-content>\n </ng-container> \n <ion-footer class=\"footer\">\n  <p class=\"txt-footer\">Copyright © 2020</p>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/template-create/template-create-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/template-create/template-create-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: TemplateCreatePageRoutingModule */

  /***/
  function srcAppTemplateCreateTemplateCreateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateCreatePageRoutingModule", function () {
      return TemplateCreatePageRoutingModule;
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


    var _template_create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./template-create.page */
    "./src/app/template-create/template-create.page.ts");

    var routes = [{
      path: '',
      component: _template_create_page__WEBPACK_IMPORTED_MODULE_3__["TemplateCreatePage"]
    }];

    var TemplateCreatePageRoutingModule = function TemplateCreatePageRoutingModule() {
      _classCallCheck(this, TemplateCreatePageRoutingModule);
    };

    TemplateCreatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TemplateCreatePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/template-create/template-create.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/template-create/template-create.module.ts ***!
    \***********************************************************/

  /*! exports provided: TemplateCreatePageModule */

  /***/
  function srcAppTemplateCreateTemplateCreateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateCreatePageModule", function () {
      return TemplateCreatePageModule;
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


    var _template_create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./template-create-routing.module */
    "./src/app/template-create/template-create-routing.module.ts");
    /* harmony import */


    var _template_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./template-create.page */
    "./src/app/template-create/template-create.page.ts");

    var TemplateCreatePageModule = function TemplateCreatePageModule() {
      _classCallCheck(this, TemplateCreatePageModule);
    };

    TemplateCreatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _template_create_routing_module__WEBPACK_IMPORTED_MODULE_5__["TemplateCreatePageRoutingModule"]],
      declarations: [_template_create_page__WEBPACK_IMPORTED_MODULE_6__["TemplateCreatePage"]]
    })], TemplateCreatePageModule);
    /***/
  },

  /***/
  "./src/app/template-create/template-create.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/template-create/template-create.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTemplateCreateTemplateCreatePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-template {\n  /*--background: #3880ff;*/\n  --color: #333333;\n  margin-bottom: 20px;\n  width: 100%;\n  height: 50px;\n  border-radius: 5px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  border: solid 1px #9b9b9b;\n  background-color: #ffffff;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n}\n\n.labels-template {\n  font-family: Montserrat;\n  font-size: 12px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.2;\n  letter-spacing: normal;\n  text-align: left;\n  color: #707070;\n  text-transform: uppercase;\n}\n\n.check-container-template {\n  border-top: 1px solid #d8d8d8;\n  margin-bottom: 15px;\n  padding-top: 10px;\n  margin-top: 10px;\n}\n\n.check-template {\n  position: relative;\n  top: -40px;\n  float: right;\n  right: 0px;\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  border: solid 1px #ffffff;\n}\n\nion-button {\n  width: 50%;\n  height: 35px;\n  border-radius: 5px;\n  background-color: #3b65ee;\n  font-family: Montserrat;\n  font-size: 11px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.2;\n  letter-spacing: normal;\n  text-align: center;\n  color: #ffffff;\n  text-transform: uppercase;\n  box-shadow: 0 5px #244CCC;\n  margin-bottom: 10px;\n  position: relative;\n  top: -46px;\n  float: right;\n}\n\n.guardar-salvar {\n  width: 100%;\n  height: 35px;\n  border-radius: 5px;\n  background-color: #0DE27F;\n  font-family: Montserrat;\n  font-size: 11px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.2;\n  letter-spacing: normal;\n  text-align: center;\n  color: #ffffff;\n  text-transform: uppercase;\n  box-shadow: 0 5px #00B15F;\n  margin-bottom: 10px;\n  border: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGUtY3JlYXRlL0M6XFxQcm9qZWN0c1xcTHRrX1RpY2tldFxcdGlja2V0cy9zcmNcXGFwcFxcdGVtcGxhdGUtY3JlYXRlXFx0ZW1wbGF0ZS1jcmVhdGUucGFnZS5zY3NzIiwic3JjL2FwcC90ZW1wbGF0ZS1jcmVhdGUvdGVtcGxhdGUtY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFFO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURERTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUNJSjs7QURGQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxhdGUtY3JlYXRlL3RlbXBsYXRlLWNyZWF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtdGVtcGxhdGUge1xyXG4gICAgLyotLWJhY2tncm91bmQ6ICMzODgwZmY7Ki9cclxuICAgIC0tY29sb3I6ICMzMzMzMzM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzliOWI5YjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4ubGFiZWxzLXRlbXBsYXRlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5jaGVjay1jb250YWluZXItdGVtcGxhdGUgIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4gIC5jaGVjay10ZW1wbGF0ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC00MHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmZmZmY7XHJcbn1cclxuaW9uLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6MzVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNjVlZTtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3gtc2hhZG93OiAwIDVweCAjMjQ0Q0NDO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNDZweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uZ3VhcmRhci1zYWx2YXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBERTI3RjtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3gtc2hhZG93OiAwIDVweCAjMDBCMTVGO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbn1cclxuIiwiLmlucHV0LXRlbXBsYXRlIHtcbiAgLyotLWJhY2tncm91bmQ6ICMzODgwZmY7Ki9cbiAgLS1jb2xvcjogIzMzMzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBib3JkZXI6IHNvbGlkIDFweCAjOWI5YjliO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5sYWJlbHMtdGVtcGxhdGUge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNoZWNrLWNvbnRhaW5lci10ZW1wbGF0ZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNoZWNrLXRlbXBsYXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00MHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHJpZ2h0OiAwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZmZmZjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I2NWVlO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm94LXNoYWRvdzogMCA1cHggIzI0NENDQztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00NnB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5ndWFyZGFyLXNhbHZhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBERTI3RjtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJveC1zaGFkb3c6IDAgNXB4ICMwMEIxNUY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlcjogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/template-create/template-create.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/template-create/template-create.page.ts ***!
    \*********************************************************/

  /*! exports provided: TemplateCreatePage */

  /***/
  function srcAppTemplateCreateTemplateCreatePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateCreatePage", function () {
      return TemplateCreatePage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _service_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/settings.service */
    "./src/app/service/settings.service.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/api.service */
    "./src/app/service/api.service.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //import { fileURLToPath } from 'url';


    var TemplateCreatePage = /*#__PURE__*/function () {
      function TemplateCreatePage(settings, formBuilder, geolocation, api, camera, loadingCtrl, toastCtrl, router, activatedRoute) {
        _classCallCheck(this, TemplateCreatePage);

        this.settings = settings;
        this.formBuilder = formBuilder;
        this.geolocation = geolocation;
        this.api = api;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.username = null;
      }

      _createClass(TemplateCreatePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.options = {
            maximumAge: 500,
            enableHighAccuracy: true
          };
          this.username = this.activatedRoute.snapshot.paramMap.get("username");
          this.latitude = "";
          this.longitude = "";
          this.Imagenes = new Array();
          this.geolocation.getCurrentPosition(this.options).then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
          })["catch"](function (error) {
            console.log('Error getting location', error);
          });
          this.template = this.settings.GetTemplateForm();
          console.log(this.template);
          var group = {};
          this.template.detalle.forEach(function (input_template) {
            group[input_template.controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''); //this.disabledButtonId=input_template.controlName;
          });
          this.myFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](group); //this.myFormGroup.get('6_4').disable({onlySelf: true});
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          var request = {};
          var requestItems = {};
          request.latitude = this.latitude;
          request.longitude = this.longitude;
          request.login = this.settings.getValue(_service_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].setting_User);
          request.templateId = this.template.cabecera.id;
          request.templateDescripcion = this.template.cabecera.descripcion;
          request.items = new Array();

          for (var key in this.myFormGroup.controls) {
            requestItems = {};
            requestItems.id = key;
            requestItems.valor = this.myFormGroup.controls[key].value;
            request.items.push(requestItems);
          }

          console.log(this.myFormGroup.controls); //alert(JSON.stringify(request));//{'numero': '5'}
          // this.api.post2("api/ticket",request).subscribe((result)=>{
          //   console.log(result);
          // });
          //console.log(request);

          var postData = new FormData();
          var filename;
          var imageFile;
          this.Imagenes.forEach(function (img) {
            filename = "file" + img.id;
            postData.append(filename, img.imageFile);
          }); //postData.append('file2', imageFile);
          //postData.append('title', imageName);

          postData.append('tk', JSON.stringify(request));
          this.api.post("api/ticket/upload", postData).subscribe(function (result) {
            var respuesta = JSON.parse(JSON.stringify(result)); //console.log(respuesta.tk);

            _this2.presentToast("Creo el tk " + respuesta.tk + "!");

            _this2.router.navigateByUrl('home');
          });
          /*
              this.api.get("api/ticket?numero=5").subscribe((result)=>{
                console.log(result);
              });
            */
        } // checkIsEnabled(item) {
        //   alert("disabledButtonId: "+this.disabledButtonId + " item:"+item)
        //   return this.disabledButtonId!=item;
        // }

      }, {
        key: "openCamera",
        value: function openCamera(item) {
          var _this3 = this;

          var options = {
            quality: 20,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.camera.getPicture(options).then(function (imageData) {
            // this.imageData = imageData;  
            // this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
            var date = new Date().valueOf();
            var imageName = date + '.jpeg';
            var rImagen = {};
            rImagen.id = item;
            rImagen.imageData = imageData;
            rImagen.image = window.Ionic.WebView.convertFileSrc(imageData);
            var imageBlob;
            imageBlob = _this3.dataURItoBlob(rImagen.imageData);
            rImagen.imageFile = new File([imageBlob], imageName, {
              type: 'image/jpeg'
            }); //console.log(rImagen);

            _this3.Imagenes.push(rImagen);

            _this3.presentToast("Imagen Agregada!"); //this.myFormGroup.get[item].disable();
            //console.log(item);
            //this.myFormGroup.get(item).disable({onlySelf: true});
            //this.disabledButtonId=item;

          }, function (err) {
            // Handle error
            // alert("error "+JSON.stringify(err))
            _this3.presentToast("Imagen no agregada!. ");
          });
        }
      }, {
        key: "dataURItoBlob",
        value: function dataURItoBlob(dataURI) {
          var byteString = window.atob(dataURI);
          var arrayBuffer = new ArrayBuffer(byteString.length);
          var int8Array = new Uint8Array(arrayBuffer);

          for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
          }

          var blob = new Blob([int8Array], {
            type: 'image/jpeg'
          });
          return blob;
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 4000,
                      position: 'top',
                      //color: 'danger',
                      cssClass: 'toast' //showCloseButton: true,
                      //   closeButtonText: "OK",

                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentToastbottom",
        value: function presentToastbottom(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 4000,
                      position: 'bottom',
                      //color: 'danger',
                      cssClass: 'toast' //showCloseButton: true,
                      //   closeButtonText: "OK",

                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return TemplateCreatePage;
    }();

    TemplateCreatePage.ctorParameters = function () {
      return [{
        type: _service_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
      }, {
        type: _service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }];
    };

    TemplateCreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-template-create',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./template-create.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/template-create/template-create.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./template-create.page.scss */
      "./src/app/template-create/template-create.page.scss"))["default"]]
    })], TemplateCreatePage);
    /***/
  }
}]);
//# sourceMappingURL=template-create-template-create-module-es5.js.map