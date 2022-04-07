(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorial-tutorial-module"],{

/***/ "./src/app/pages/tutorial/tutorial.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.module.ts ***!
  \***************************************************/
/*! exports provided: TutorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorial.page */ "./src/app/pages/tutorial/tutorial.page.ts");







var routes = [
    {
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]
    }
];
var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-slides>\n  <ion-slide class=\"slide-1\">\n    <ion-img src=\"/assets/imgs/slide-1.png\"><</ion-img>\n    <div class=\"bottom-box\">\n      <h1>Enjoy the best Ionic tutorials</h1>\n      <p>Learn Ionic with in depth videos</p>\n      <ion-button (click)=\"next()\">What else</ion-button>\n    </div>\n  </ion-slide>\n\n  <ion-slide class=\"slide-2\">\n    <ion-img src=\"/assets/imgs/slide-2.png\"></ion-img>\n    <div class=\"bottom-box\">\n      <h1>Build Real Apps</h1>\n      <p>Get more experience with projects</p>\n      <ion-button (click)=\"next()\">Sounds great</ion-button>\n    </div>\n  </ion-slide>\n\n  <ion-slide class=\"slide-3\">\n    <ion-img src=\"/assets/imgs/slide-3.png\"></ion-img>\n    <div class=\"bottom-box\">\n      <h1>Fix Problems Faster</h1>\n      <p>Get help from the Community</p>\n      <ion-button (click)=\"finish()\">Enjoy the Ionic Academy App</ion-button>\n    </div>\n  </ion-slide>\n</ion-slides>"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slide {\n  height: 100vh;\n  flex-direction: column; }\n\n.slide-1 {\n  background: var(--ion-color-primary); }\n\n.slide-2 {\n  background: var(--ion-color-success); }\n\n.slide-3 {\n  background: var(--ion-color-dark); }\n\n.bottom-box {\n  position: absolute;\n  bottom: 0px;\n  background: #fff;\n  width: 100%;\n  height: 25vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbGVldGVsZWN0cm9uaWNzL0RvY3VtZW50cy9hcHAgcHJvamVjdC9nb2xmbmV3L3NyYy9hcHAvcGFnZXMvdHV0b3JpYWwvdHV0b3JpYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLGlDQUFpQyxFQUFBOztBQUdyQztFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90dXRvcmlhbC90dXRvcmlhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNsaWRlLTEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnNsaWRlLTIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLnNsaWRlLTMge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLmJvdHRvbS1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjV2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.page.ts ***!
  \*************************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TutorialPage = /** @class */ (function () {
    function TutorialPage(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    TutorialPage.prototype.ngOnInit = function () {
    };
    TutorialPage.prototype.next = function () {
        this.slides.slideNext();
    };
    TutorialPage.prototype.finish = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set('tutorialSeen', true)];
                    case 1:
                        _a.sent();
                        this.router.navigateByUrl('/login');
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.page.html */ "./src/app/pages/tutorial/tutorial.page.html"),
            styles: [__webpack_require__(/*! ./tutorial.page.scss */ "./src/app/pages/tutorial/tutorial.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TutorialPage);
    return TutorialPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tutorial-tutorial-module.js.map