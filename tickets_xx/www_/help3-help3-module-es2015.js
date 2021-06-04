(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help3-help3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/help3/help3.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help3/help3.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\" padding> \n  <ion-grid class=\"bglogin\">\n    <ion-row>\n      <ion-col>\n        <div text-center style=\" text-align: center; margin-top: 40px;\">\n          <img src=\"../../../assets/s3.png\" style=\"max-width: 70%;\" />\n        </div>\n        <p class=\"help1-titulos\">FOTO</p>\n        <p class=\"help1-texto\">Si es necesario, toma una foto <br> para sumarla al ticket.</p>\n        <button size=\"large\" expand=\"block\" (click)=\"anterior()\" class=\"btn-blanco-back\" > \n          VOLVER\n       </button>\n       <button size=\"large\" expand=\"block\" (click)=\"siguiente()\" class=\"btn-blanco\" > <!-- CORREGIR LINK VA A HELP4-->\n          SIGUIENTE\n       </button>\n       <p><a routerLink=\"/home\" class=\"close\">X</a></p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      \n    </ion-row>\n     \n  </ion-grid>\n   \n</ion-content>\n");

/***/ }),

/***/ "./src/app/help3/help3-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/help3/help3-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Help3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Help3PageRoutingModule", function() { return Help3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _help3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help3.page */ "./src/app/help3/help3.page.ts");




const routes = [
    {
        path: '',
        component: _help3_page__WEBPACK_IMPORTED_MODULE_3__["Help3Page"]
    }
];
let Help3PageRoutingModule = class Help3PageRoutingModule {
};
Help3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Help3PageRoutingModule);



/***/ }),

/***/ "./src/app/help3/help3.module.ts":
/*!***************************************!*\
  !*** ./src/app/help3/help3.module.ts ***!
  \***************************************/
/*! exports provided: Help3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Help3PageModule", function() { return Help3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _help3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help3-routing.module */ "./src/app/help3/help3-routing.module.ts");
/* harmony import */ var _help3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help3.page */ "./src/app/help3/help3.page.ts");







let Help3PageModule = class Help3PageModule {
};
Help3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _help3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Help3PageRoutingModule"]
        ],
        declarations: [_help3_page__WEBPACK_IMPORTED_MODULE_6__["Help3Page"]]
    })
], Help3PageModule);



/***/ }),

/***/ "./src/app/help3/help3.page.scss":
/*!***************************************!*\
  !*** ./src/app/help3/help3.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bglogin {\n  visibility: inherit;\n  background-image: url('bg.png');\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscDMvQzpcXFByb2plY3RzXFxMdGtfVGlja2V0XFx0aWNrZXRzL3NyY1xcYXBwXFxoZWxwM1xcaGVscDMucGFnZS5zY3NzIiwic3JjL2FwcC9oZWxwMy9oZWxwMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWxwMy9oZWxwMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdsb2dpbiB7XHJcbiAgICB2aXNpYmlsaXR5OiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JnLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9IiwiLmJnbG9naW4ge1xuICB2aXNpYmlsaXR5OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/help3/help3.page.ts":
/*!*************************************!*\
  !*** ./src/app/help3/help3.page.ts ***!
  \*************************************/
/*! exports provided: Help3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Help3Page", function() { return Help3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let Help3Page = class Help3Page {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    anterior() {
        this.router.navigateByUrl('help2');
    }
    siguiente() {
        this.router.navigateByUrl('help4');
    }
};
Help3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Help3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./help3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/help3/help3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./help3.page.scss */ "./src/app/help3/help3.page.scss")).default]
    })
], Help3Page);



/***/ })

}]);
//# sourceMappingURL=help3-help3-module-es2015.js.map