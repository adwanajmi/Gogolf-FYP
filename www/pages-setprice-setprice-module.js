(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setprice-setprice-module"],{

/***/ "./src/app/pages/setprice/setprice.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/setprice/setprice.module.ts ***!
  \***************************************************/
/*! exports provided: SetpricePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetpricePageModule", function() { return SetpricePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setprice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setprice.page */ "./src/app/pages/setprice/setprice.page.ts");







var routes = [
    {
        path: '',
        component: _setprice_page__WEBPACK_IMPORTED_MODULE_6__["SetpricePage"]
    }
];
var SetpricePageModule = /** @class */ (function () {
    function SetpricePageModule() {
    }
    SetpricePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_setprice_page__WEBPACK_IMPORTED_MODULE_6__["SetpricePage"]]
        })
    ], SetpricePageModule);
    return SetpricePageModule;
}());



/***/ }),

/***/ "./src/app/pages/setprice/setprice.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/setprice/setprice.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-title>\n    About us \n  \n  </ion-title>\n  <ion-card text-center *ngFor=\"let ho of aboutus | async\">\n    <ion-card-header>\n      <ion-card-title>\n\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-item lines = \"none\">\n      <b>{{ ho.description }}</b>\n    </ion-item>\n    <ion-item lines = \"none\">\n      <ion-button (click)=\"presentAlertPrompt2(ho.id)\">Edit</ion-button>\n    </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n  <ion-title>\n    Time Settings\n  \n  </ion-title>\n  <ion-card text-center *ngFor=\"let h of hours | async\">\n    <ion-card-header>\n      <ion-card-title>\n       Time(hour) :{{ h.name }}.00\n\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-item lines = \"none\">\n      <b>{{ h.price }}</b>\n    </ion-item>\n    <ion-item lines = \"none\">\n      <ion-button (click)=\"presentAlertPrompt(h.id)\">Edit</ion-button>\n    </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/setprice/setprice.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/setprice/setprice.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHByaWNlL3NldHByaWNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/setprice/setprice.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/setprice/setprice.page.ts ***!
  \*************************************************/
/*! exports provided: SetpricePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetpricePage", function() { return SetpricePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var SetpricePage = /** @class */ (function () {
    function SetpricePage(alertController, navCtrl, auth, db) {
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.db = db;
        this.imageCollection = db.collection('hours', function (ref) { return ref.orderBy('name', 'asc'); });
        this.imageCollection2 = db.collection('aboutus');
        // this.usersCollection = db.collection<MyData3>('users').doc(this.id);
        this.hours = this.imageCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
        this.aboutus = this.imageCollection2.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
    }
    SetpricePage.prototype.ngOnInit = function () {
    };
    SetpricePage.prototype.edit = function (x) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection('hours').doc(x).update({
                price: +_this.newprice
            })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    SetpricePage.prototype.editaus = function (x) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection('aboutus').doc(x).update({
                description: _this.newdesc
            })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    SetpricePage.prototype.presentAlertPrompt = function (x) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Edit price',
                            inputs: [
                                {
                                    name: 'price1',
                                    placeholder: 'Price'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        _this.newprice = +data.price1;
                                        _this.edit(x);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SetpricePage.prototype.presentAlertPrompt2 = function (x) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Edit About us',
                            inputs: [
                                {
                                    name: 'aus',
                                    placeholder: 'About Us'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        _this.newdesc = data.aus;
                                        _this.editaus(x);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SetpricePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setprice',
            template: __webpack_require__(/*! ./setprice.page.html */ "./src/app/pages/setprice/setprice.page.html"),
            styles: [__webpack_require__(/*! ./setprice.page.scss */ "./src/app/pages/setprice/setprice.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], SetpricePage);
    return SetpricePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-setprice-setprice-module.js.map