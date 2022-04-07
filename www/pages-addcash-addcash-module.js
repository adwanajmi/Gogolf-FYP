(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addcash-addcash-module"],{

/***/ "./src/app/pages/addcash/addcash.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/addcash/addcash.module.ts ***!
  \*************************************************/
/*! exports provided: AddcashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcashPageModule", function() { return AddcashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addcash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addcash.page */ "./src/app/pages/addcash/addcash.page.ts");







var routes = [
    {
        path: '',
        component: _addcash_page__WEBPACK_IMPORTED_MODULE_6__["AddcashPage"]
    }
];
var AddcashPageModule = /** @class */ (function () {
    function AddcashPageModule() {
    }
    AddcashPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addcash_page__WEBPACK_IMPORTED_MODULE_6__["AddcashPage"]]
        })
    ], AddcashPageModule);
    return AddcashPageModule;
}());



/***/ }),

/***/ "./src/app/pages/addcash/addcash.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/addcash/addcash.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Add Cash</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card text-center>\n    <ion-card-header>\n      <ion-card-title>Payment info</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-input placeholder=\"User Id\" [(ngModel)]=\"user2\"></ion-input>\n    </ion-card-content>\n    <!-- <ion-card-content>\n            <ion-input placeholder=\"Price\" [(ngModel)]=\"itemprice\"></ion-input>\n          </ion-card-content> -->\n    <ion-card-content>\n      <ion-input placeholder=\"Value\" [(ngModel)]=\"value\"></ion-input>\n    </ion-card-content>\n\n\n    <ion-button (click)=\"pay(user2)\">Submit</ion-button>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/addcash/addcash.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/addcash/addcash.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZGNhc2gvYWRkY2FzaC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/addcash/addcash.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/addcash/addcash.page.ts ***!
  \***********************************************/
/*! exports provided: AddcashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcashPage", function() { return AddcashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var AddcashPage = /** @class */ (function () {
    function AddcashPage(auth) {
        var _this = this;
        this.auth = auth;
        this.auth.getinfo().subscribe((function (a) {
            _this.balancevar = +a.balance;
            console.log(_this.balancevar);
        }));
        this.updateval = false;
    }
    AddcashPage.prototype.ngOnInit = function () {
    };
    AddcashPage.prototype.pay = function (u) {
        var _this = this;
        this.updateval = false;
        this.auth.getinfore(u).subscribe((function (a) {
            _this.balancevare = +a.balance;
            if (_this.updateval == false) {
                _this.updateval = true;
                _this.balancevare = +_this.balancevare + +_this.value;
                _this.auth.updatebalancere(_this.user2, { balance: +_this.balancevare });
                console.log(_this.balancevare);
            }
        }));
        // this.balancevare = this.balancevare + this.value
    };
    AddcashPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addcash',
            template: __webpack_require__(/*! ./addcash.page.html */ "./src/app/pages/addcash/addcash.page.html"),
            styles: [__webpack_require__(/*! ./addcash.page.scss */ "./src/app/pages/addcash/addcash.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AddcashPage);
    return AddcashPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-addcash-addcash-module.js.map