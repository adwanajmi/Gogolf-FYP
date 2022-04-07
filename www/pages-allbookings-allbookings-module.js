(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-allbookings-allbookings-module"],{

/***/ "./src/app/pages/allbookings/allbookings.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/allbookings/allbookings.module.ts ***!
  \*********************************************************/
/*! exports provided: AllbookingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllbookingsPageModule", function() { return AllbookingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _allbookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allbookings.page */ "./src/app/pages/allbookings/allbookings.page.ts");







var routes = [
    {
        path: '',
        component: _allbookings_page__WEBPACK_IMPORTED_MODULE_6__["AllbookingsPage"]
    }
];
var AllbookingsPageModule = /** @class */ (function () {
    function AllbookingsPageModule() {
    }
    AllbookingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_allbookings_page__WEBPACK_IMPORTED_MODULE_6__["AllbookingsPage"]]
        })
    ], AllbookingsPageModule);
    return AllbookingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/allbookings/allbookings.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/allbookings/allbookings.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>All Bookings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card text-center *ngFor=\"let booking of bookings | async\">\n    <ion-card-header>\n      <ion-card-title>\n        {{booking.course}}\n      </ion-card-title>\n\n     \n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-item>User ID:{{booking.creator}}</ion-item> \n     <ion-item lines='none'>Start: {{booking.startTime?.seconds*1000 | date: 'dd/MM/yyyy H:mm' }}</ion-item> \n    <ion-item lines='none'> End: {{booking.endTime?.seconds*1000 | date: 'dd/MM/yyyy H:mm' }}</ion-item>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/allbookings/allbookings.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/allbookings/allbookings.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsbGJvb2tpbmdzL2FsbGJvb2tpbmdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/allbookings/allbookings.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/allbookings/allbookings.page.ts ***!
  \*******************************************************/
/*! exports provided: AllbookingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllbookingsPage", function() { return AllbookingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AllbookingsPage = /** @class */ (function () {
    function AllbookingsPage(auth, db) {
        this.auth = auth;
        this.db = db;
        this.id = this.auth.getprofile();
    }
    AllbookingsPage.prototype.ngOnInit = function () {
    };
    AllbookingsPage.prototype.ionViewWillEnter = function () {
        this.imageCollection = this.db.collection('events', function (ref) { return ref.orderBy('startTime', 'asc'); });
        this.bookings = this.imageCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            console.log(id);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
    };
    AllbookingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allbookings',
            template: __webpack_require__(/*! ./allbookings.page.html */ "./src/app/pages/allbookings/allbookings.page.html"),
            styles: [__webpack_require__(/*! ./allbookings.page.scss */ "./src/app/pages/allbookings/allbookings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], AllbookingsPage);
    return AllbookingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-allbookings-allbookings-module.js.map