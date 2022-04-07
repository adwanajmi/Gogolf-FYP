(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "./src/app/pages/blog/blog.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/blog/blog.module.ts ***!
  \*******************************************/
/*! exports provided: BlogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageModule", function() { return BlogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _blog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog.page */ "./src/app/pages/blog/blog.page.ts");







var routes = [
    {
        path: '',
        component: _blog_page__WEBPACK_IMPORTED_MODULE_6__["BlogPage"]
    }
];
var BlogPageModule = /** @class */ (function () {
    function BlogPageModule() {
    }
    BlogPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_blog_page__WEBPACK_IMPORTED_MODULE_6__["BlogPage"]]
        })
    ], BlogPageModule);
    return BlogPageModule;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/blog/blog.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Blog</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/login\" routerDirection=\"root\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card routerLink=\"/news\" class=\"cardsize\">\n    <ion-card-header>\n      <ion-card-title>\n        News\n\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n      The latest news\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card routerLink=\"/reviews\" class=\"cardsize\">\n    <ion-card-header>\n      <ion-card-title>\n        Reviews\n\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n      See some of our reviews\n\n\n    </ion-card-content>\n\n  </ion-card>\n  <ion-card routerLink=\"/courses\" class=\"cardsize\">\n    <ion-card-header>\n      <ion-card-title>\n        Courses\n\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n      See our course\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card routerLink=\"/aboutus\" class=\"cardsize\">\n    <ion-card-header>\n      <ion-card-title>\n        About Us\n\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n      See About us\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/blog/blog.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/blog/blog.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardsize {\n  height: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbGVldGVsZWN0cm9uaWNzL0RvY3VtZW50cy9hcHAgcHJvamVjdC9nb2xmbmV3L3NyYy9hcHAvcGFnZXMvYmxvZy9ibG9nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2cvYmxvZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHNpemV7XG4gICAgaGVpZ2h0OjMwJTtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/blog/blog.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/blog/blog.page.ts ***!
  \*****************************************/
/*! exports provided: BlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPage", function() { return BlogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogPage = /** @class */ (function () {
    function BlogPage() {
    }
    BlogPage.prototype.ngOnInit = function () {
    };
    BlogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.page.html */ "./src/app/pages/blog/blog.page.html"),
            styles: [__webpack_require__(/*! ./blog.page.scss */ "./src/app/pages/blog/blog.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogPage);
    return BlogPage;
}());



/***/ })

}]);
//# sourceMappingURL=blog-blog-module.js.map