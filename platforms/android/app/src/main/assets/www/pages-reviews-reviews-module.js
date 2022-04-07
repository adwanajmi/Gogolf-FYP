(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reviews-reviews-module"],{

/***/ "./src/app/pages/reviews/reviews.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/reviews/reviews.module.ts ***!
  \*************************************************/
/*! exports provided: ReviewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function() { return ReviewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _reviews_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews.page */ "./src/app/pages/reviews/reviews.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");







 //this is import package.
var routes = [
    {
        path: '',
        component: _reviews_page__WEBPACK_IMPORTED_MODULE_1__["ReviewsPage"]
    }
];
var ReviewsPageModule = /** @class */ (function () {
    function ReviewsPageModule() {
    }
    ReviewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_1__["ReviewsPage"]]
        })
    ], ReviewsPageModule);
    return ReviewsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/reviews/reviews.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/reviews/reviews.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Reviews</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/login\" routerDirection=\"root\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ng-container *ngIf=\"existingcust\">\n    <ion-card class=\"cardfillsize\">\n      <form (ngSubmit)=\"submitreview()\" [formGroup]=\"reviewform\">\n        <ion-card-header>\n          <ion-card-title>\n            Write Review\n            <rating name=\"stars\" formControlName=\"stars\" readonly=\"false\" size=\"default\">\n            </rating>\n          </ion-card-title>\n\n        </ion-card-header>\n\n        <ion-card-content>\n          <ion-input placeholder=\"Enter Your Review\" type=\"text\" name=\"review\" formControlName=\"review\"></ion-input>\n          <ion-button class=\"ion-padding-horizontal\" color=\"primary\" expand=\"full\" type=\"submit\"\n            [disabled]=\"!reviewform.valid\">Submit</ion-button>\n\n\n        </ion-card-content>\n      </form>\n    </ion-card>\n  </ng-container>\n  <ion-card class=\"cardsize\" *ngFor=\"let item of reviews | async\">\n    \n    <ion-card-header>\n      <ion-card-title >\n          <ion-item>\n              {{ item.title }} \n              <rating slot =\"end\" [(ngModel)]=\"item.stars\" readonly=\"true\" size=\"default\" (ngModelChange)=\"onRateChange($event)\">\n                </rating>\n            </ion-item>\n        \n        \n      </ion-card-title>\n\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item lines=\"none\">\n          {{ item.review }}\n          <ion-note slot=\"end\"> {{ item.date?.seconds*1000 | date: 'MMM d' }}</ion-note>\n        \n      </ion-item>\n      \n\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/reviews/reviews.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/reviews/reviews.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardsize {\n  height: 30%; }\n\n.cardfillsize {\n  height: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbGVldGVsZWN0cm9uaWNzL0RvY3VtZW50cy9hcHAgcHJvamVjdC9nb2xmbmV3L3NyYy9hcHAvcGFnZXMvcmV2aWV3cy9yZXZpZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVUsRUFBQTs7QUFFVjtFQUNJLFdBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jldmlld3MvcmV2aWV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHNpemV7XG4gICAgaGVpZ2h0OjMwJTtcbiAgICB9XG4gICAgLmNhcmRmaWxsc2l6ZXtcbiAgICAgICAgaGVpZ2h0OjUwJTtcbiAgICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/reviews/reviews.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/reviews/reviews.page.ts ***!
  \***********************************************/
/*! exports provided: ReviewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPage", function() { return ReviewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var ReviewsPage = /** @class */ (function () {
    // private usersCollection: AngularFirestoreDocument<MyData3>;
    function ReviewsPage(navCtrl, auth, fb, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.fb = fb;
        this.db = db;
        this.id = this.auth.getprofile();
        this.reviewsCollection = db.collection('reviews', function (ref) { return ref.orderBy('date'); });
        // this.usersCollection = db.collection<MyData3>('users').doc(this.id);
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
    ReviewsPage.prototype.ngOnInit = function () {
        this.reviewform = this.fb.group({
            review: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            stars: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    ReviewsPage.prototype.updatecustomer = function () {
        var _this = this;
        this.existingcust = false;
        return new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(_this.id).update({ customer: _this.existingcust })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    ReviewsPage.prototype.submitreview = function () {
        var reviewjson = {
            review: this.reviewform.value.review,
            stars: this.reviewform.value.stars,
            title: this.firstname + " " + this.lastname,
            date: new Date()
        };
        this.db.collection('reviews').add(reviewjson);
        this.navCtrl.navigateForward('/reviews');
        this.updatecustomer();
    };
    ReviewsPage.prototype.onRateChange = function (event) {
        console.log('Your rate:', event);
    };
    ReviewsPage.prototype.test = function () {
        console.log(this.reviewform.value);
    };
    ReviewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.page.html */ "./src/app/pages/reviews/reviews.page.html"),
            styles: [__webpack_require__(/*! ./reviews.page.scss */ "./src/app/pages/reviews/reviews.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ReviewsPage);
    return ReviewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-reviews-reviews-module.js.map