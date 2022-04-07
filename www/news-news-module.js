(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./src/app/pages/news/news.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.module.ts ***!
  \*******************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news.page */ "./src/app/pages/news/news.page.ts");






 //this is import package.

var routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_7__["NewsPage"]
    }
];
var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ionic4_rating__WEBPACK_IMPORTED_MODULE_6__["IonicRatingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_news_page__WEBPACK_IMPORTED_MODULE_7__["NewsPage"]]
        })
    ], NewsPageModule);
    return NewsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/news/news.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>News</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/login\" routerDirection=\"root\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"cardsize\">\n  <ion-card *ngIf = \"role\">\n    <ion-card-header>\n      <ion-card-title>\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n\n<ion-button (click) = \"presentAlertPrompt()\">Add news</ion-button>\n    </ion-card-content>\n\n  </ion-card>\n  <ion-card text-center *ngFor=\"let item of news | async\">\n    <ion-card-header>\n      <ion-card-title>\n        {{ item.title }}\n\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n      <b>{{ item.description }}</b>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/news/news.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardsize {\n  height: 50%; }\n\nrating {\n  float: right; }\n\nrating ion-icon {\n    color: gray; }\n\nrating ion-icon.filled {\n      fill: #26ff00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbGVldGVsZWN0cm9uaWNzL0RvY3VtZW50cy9hcHAgcHJvamVjdC9nb2xmbmV3L3NyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVUsRUFBQTs7QUFFZDtFQUNJLFlBQVksRUFBQTs7QUFEaEI7SUFHVSxXQUFXLEVBQUE7O0FBSHJCO01BT1ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkc2l6ZXtcbiAgICBoZWlnaHQ6NTAlO1xuICAgIH1cbnJhdGluZyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBcbiAgICAgICAgICAmLmZpbGxlZCB7XG4gICAgICAgICAgICAvL2NvbG9yOiAjMjZmZjAwO1xuICAgICAgICAgICAgZmlsbDogIzI2ZmYwMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/news/news.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/news/news.page.ts ***!
  \*****************************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var NewsPage = /** @class */ (function () {
    // private usersCollection: AngularFirestoreDocument<MyData3>;
    function NewsPage(alertController, navCtrl, auth, fb, db) {
        var _this = this;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.fb = fb;
        this.db = db;
        this.id = this.auth.getprofile();
        this.imageCollection = db.collection('news');
        this.reviewsCollection = db.collection('reviews');
        // this.usersCollection = db.collection<MyData3>('users').doc(this.id);
        this.news = this.imageCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
        this.reviews = this.reviewsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
        this.id = this.auth.getprofile();
        var documentRef = db.doc('users/' + this.id);
        documentRef.get().subscribe(function (documentSnapshot) {
            if (documentSnapshot.exists) {
                var data = documentSnapshot.data();
                _this.existingcust = data.customer;
                _this.firstname = data.first_name;
                _this.lastname = data.last_name;
                if (data.role == "ADMIN") {
                    _this.role = true;
                }
                else {
                    _this.role = false;
                }
                console.log("Data: " + _this.existingcust);
            }
        });
        // this.users = this.usersCollection.get().forEach(
        //   actions =>{
        //     const data = actions.data();
        //     const id = actions.id;
        //     this.existingcust = data;
        //     return { id, ...data };
        //   }
        // );
        // console.log(this.existingcust);
    }
    NewsPage.prototype.addnews = function () {
        var news = {
            title: this.newtitle,
            description: this.newdesc
        };
        this.db.collection('news').add(news);
        this.navCtrl.navigateForward('news');
    };
    NewsPage.prototype.presentAlertPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Add news',
                            inputs: [
                                {
                                    name: 'titlenew',
                                    placeholder: 'Title'
                                },
                                {
                                    name: 'descnew',
                                    placeholder: 'Description'
                                },
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
                                        _this.newtitle = data.titlenew;
                                        _this.newdesc = data.descnew;
                                        _this.addnews();
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
    NewsPage.prototype.ngOnInit = function () {
        this.reviewform = this.fb.group({
            review: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            stars: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    NewsPage.prototype.updatecustomer = function () {
        var _this = this;
        this.existingcust = false;
        return new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(_this.id).update({ customer: _this.existingcust })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    NewsPage.prototype.submitreview = function () {
        var reviewjson = {
            review: this.reviewform.value.review,
            stars: this.reviewform.value.stars,
            title: this.firstname + " " + this.lastname
        };
        this.db.collection('reviews').add(reviewjson);
        this.navCtrl.navigateForward('app/news');
        this.updatecustomer();
    };
    NewsPage.prototype.onRateChange = function (event) {
        console.log('Your rate:', event);
    };
    NewsPage.prototype.test = function () {
        console.log(this.reviewform.value);
    };
    NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-news",
            template: __webpack_require__(/*! ./news.page.html */ "./src/app/pages/news/news.page.html"),
            styles: [__webpack_require__(/*! ./news.page.scss */ "./src/app/pages/news/news.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], NewsPage);
    return NewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=news-news-module.js.map