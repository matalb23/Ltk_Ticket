(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mensaje-mensaje-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mensaje/mensaje.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mensaje/mensaje.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Mensajes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor=\"let mensaje of mensajes\">\n  \n      <ion-col>\n        {{ mensaje.emisor_name}}\n      </ion-col>\n      <ion-col>\n        {{ mensaje.titulo}}\n      </ion-col>\n      <ion-col>\n        {{ mensaje.descripcion}}\n      </ion-col>\n      <ion-col>\n        {{ mensaje.fecha}}\n      </ion-col>\n      <ion-col>\n        {{ mensaje.fechavisto}}\n      </ion-col>\n      \n      <ion-col >\n        <button  size=\"large\" expand=\"block\" (click)=\"opepdf(mensaje.tk_id)\" class=\"btn-blue\"     *ngIf= \"mensaje.tk_id != 0\"    >\n        Ver\n      </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/mensaje/mensaje-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/mensaje/mensaje-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MensajePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajePageRoutingModule", function() { return MensajePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mensaje_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mensaje.page */ "./src/app/mensaje/mensaje.page.ts");




const routes = [
    {
        path: '',
        component: _mensaje_page__WEBPACK_IMPORTED_MODULE_3__["MensajePage"]
    }
];
let MensajePageRoutingModule = class MensajePageRoutingModule {
};
MensajePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MensajePageRoutingModule);



/***/ }),

/***/ "./src/app/mensaje/mensaje.module.ts":
/*!*******************************************!*\
  !*** ./src/app/mensaje/mensaje.module.ts ***!
  \*******************************************/
/*! exports provided: MensajePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajePageModule", function() { return MensajePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mensaje_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mensaje-routing.module */ "./src/app/mensaje/mensaje-routing.module.ts");
/* harmony import */ var _mensaje_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mensaje.page */ "./src/app/mensaje/mensaje.page.ts");







let MensajePageModule = class MensajePageModule {
};
MensajePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mensaje_routing_module__WEBPACK_IMPORTED_MODULE_5__["MensajePageRoutingModule"]
        ],
        declarations: [_mensaje_page__WEBPACK_IMPORTED_MODULE_6__["MensajePage"]]
    })
], MensajePageModule);



/***/ }),

/***/ "./src/app/mensaje/mensaje.page.scss":
/*!*******************************************!*\
  !*** ./src/app/mensaje/mensaje.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnNhamUvbWVuc2FqZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/mensaje/mensaje.page.ts":
/*!*****************************************!*\
  !*** ./src/app/mensaje/mensaje.page.ts ***!
  \*****************************************/
/*! exports provided: MensajePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajePage", function() { return MensajePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/settings.service */ "./src/app/service/settings.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");





const { Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let MensajePage = class MensajePage {
    constructor(api, settings) {
        this.api = api;
        this.settings = settings;
    }
    opepdf(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Browser.open({ 'url': 'http://apptkweb.latikait.com.ar/pdf_tk?par_tk=' + id });
        });
    }
    getMensajes() {
        this.api.get("api/mensaje" + "?login=" + this.settings.getValue(_service_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].setting_User)).subscribe((data) => {
            this.mensajes = data;
        }, (err) => {
            var respuesta = JSON.parse(JSON.stringify(err));
        });
    }
    ionViewDidEnter() {
        this.getMensajes();
    }
};
MensajePage.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _service_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }
];
MensajePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mensaje',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mensaje.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mensaje/mensaje.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mensaje.page.scss */ "./src/app/mensaje/mensaje.page.scss")).default]
    })
], MensajePage);



/***/ })

}]);
//# sourceMappingURL=mensaje-mensaje-module-es2015.js.map