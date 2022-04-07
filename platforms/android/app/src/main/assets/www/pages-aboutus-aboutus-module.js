(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aboutus-aboutus-module"],{

/***/ "./src/app/pages/aboutus/aboutus.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.module.ts ***!
  \*************************************************/
/*! exports provided: AboutusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function() { return AboutusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aboutus.page */ "./src/app/pages/aboutus/aboutus.page.ts");







var routes = [
    {
        path: '',
        component: _aboutus_page__WEBPACK_IMPORTED_MODULE_6__["AboutusPage"]
    }
];
var AboutusPageModule = /** @class */ (function () {
    function AboutusPageModule() {
    }
    AboutusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_aboutus_page__WEBPACK_IMPORTED_MODULE_6__["AboutusPage"]]
        })
    ], AboutusPageModule);
    return AboutusPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>About us</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/login\" routerDirection=\"root\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"cardsize\">\n\n  <ion-card text-center *ngFor=\"let item of aboutus | async\">\n    <ion-card-header>\n      <ion-card-title>\n        <img class=\"myimg\" src=\"assets/imgs/golfball.jpg\" alt=\"your image\">\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n      <b>{{ item.description }}</b>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0dXMvYWJvdXR1cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.page.ts ***!
  \***********************************************/
/*! exports provided: AboutusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPage", function() { return AboutusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var AboutusPage = /** @class */ (function () {
    // private usersCollection: AngularFirestoreDocument<MyData3>;
    function AboutusPage(navCtrl, db) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.imageCollection = db.collection('aboutus');
        // this.usersCollection = db.collection<MyData3>('users').doc(this.id);
        this.aboutus = this.imageCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
    }
    AboutusPage.prototype.ngOnInit = function () {
    };
    AboutusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.page.html */ "./src/app/pages/aboutus/aboutus.page.html"),
            styles: [__webpack_require__(/*! ./aboutus.page.scss */ "./src/app/pages/aboutus/aboutus.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], AboutusPage);
    return AboutusPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-aboutus-aboutus-module.js.map