(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-item-news-item-module"],{

/***/ "./src/app/pages/news-item/news-item.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/news-item/news-item.module.ts ***!
  \*****************************************************/
/*! exports provided: NewsItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemPageModule", function() { return NewsItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-item.page */ "./src/app/pages/news-item/news-item.page.ts");







var routes = [
    {
        path: '',
        component: _news_item_page__WEBPACK_IMPORTED_MODULE_6__["NewsItemPage"]
    }
];
var NewsItemPageModule = /** @class */ (function () {
    function NewsItemPageModule() {
    }
    NewsItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_news_item_page__WEBPACK_IMPORTED_MODULE_6__["NewsItemPage"]]
        })
    ], NewsItemPageModule);
    return NewsItemPageModule;
}());



/***/ }),

/***/ "./src/app/pages/news-item/news-item.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/news-item/news-item.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/news\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ news?.author }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf=\"news\">\n        <ion-card-header>\n          <ion-card-title>{{ news.title }}</ion-card-title>\n          <ion-card-subtitle>{{ news.publishedAt | date:'short' }}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <img [src]=\"news.urlToImage\">\n          {{ news.content }}\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/news-item/news-item.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/news-item/news-item.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3MtaXRlbS9uZXdzLWl0ZW0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/news-item/news-item.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/news-item/news-item.page.ts ***!
  \***************************************************/
/*! exports provided: NewsItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemPage", function() { return NewsItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NewsItemPage = /** @class */ (function () {
    function NewsItemPage(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.news = null;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.news = _this.router.getCurrentNavigation().extras.state.news;
            }
        });
    }
    NewsItemPage.prototype.ngOnInit = function () {
    };
    NewsItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-item',
            template: __webpack_require__(/*! ./news-item.page.html */ "./src/app/pages/news-item/news-item.page.html"),
            styles: [__webpack_require__(/*! ./news-item.page.scss */ "./src/app/pages/news-item/news-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewsItemPage);
    return NewsItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=news-item-news-item-module.js.map