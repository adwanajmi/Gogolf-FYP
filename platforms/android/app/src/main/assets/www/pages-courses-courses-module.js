(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-courses-courses-module"],{

/***/ "./src/app/pages/courses/courses.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/courses/courses.module.ts ***!
  \*************************************************/
/*! exports provided: CoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPageModule", function() { return CoursesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./courses.page */ "./src/app/pages/courses/courses.page.ts");







var routes = [
    {
        path: '',
        component: _courses_page__WEBPACK_IMPORTED_MODULE_6__["CoursesPage"]
    }
];
var CoursesPageModule = /** @class */ (function () {
    function CoursesPageModule() {
    }
    CoursesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_courses_page__WEBPACK_IMPORTED_MODULE_6__["CoursesPage"]]
        })
    ], CoursesPageModule);
    return CoursesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/courses/courses.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/courses/courses.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>courses</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"assets/imgs/courses.png\" width=\"100%\" alt=\"your image\">\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/courses/courses.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/courses/courses.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdXJzZXMvY291cnNlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/courses/courses.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/courses/courses.page.ts ***!
  \***********************************************/
/*! exports provided: CoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPage", function() { return CoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoursesPage = /** @class */ (function () {
    function CoursesPage() {
    }
    CoursesPage.prototype.ngOnInit = function () {
    };
    CoursesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.page.html */ "./src/app/pages/courses/courses.page.html"),
            styles: [__webpack_require__(/*! ./courses.page.scss */ "./src/app/pages/courses/courses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoursesPage);
    return CoursesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-courses-courses-module.js.map