(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scorecard-scorecard-module"],{

/***/ "./src/app/pages/scorecard/scorecard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/scorecard/scorecard.module.ts ***!
  \*****************************************************/
/*! exports provided: ScorecardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorecardPageModule", function() { return ScorecardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scorecard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scorecard.page */ "./src/app/pages/scorecard/scorecard.page.ts");







var routes = [
    {
        path: '',
        component: _scorecard_page__WEBPACK_IMPORTED_MODULE_6__["ScorecardPage"]
    }
];
var ScorecardPageModule = /** @class */ (function () {
    function ScorecardPageModule() {
    }
    ScorecardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_scorecard_page__WEBPACK_IMPORTED_MODULE_6__["ScorecardPage"]]
        })
    ], ScorecardPageModule);
    return ScorecardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/scorecard/scorecard.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/scorecard/scorecard.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>scorecard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid >\n    <ion-row >\n      <ion-col class=\"toptable\" size=\"1\">\n        HOLE NO\n      </ion-col>\n      <ion-col  class=\"toptable\" size=\"1\">\n        MEN\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n        LADIES\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n        INDEX\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n        PAR\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"4\">\n        SCORE\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n        TOTAL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"toptable\" size=\"1\">\n\n      </ion-col>\n      <ion-col size=\"1\" class= \"toptable\">\n        METER\n      </ion-col >\n      <ion-col size=\"1\" class= \"toptable\">\n        METER\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n        A\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n        B\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n        C\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n        D\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n\n      </ion-col>\n    </ion-row>\n    <form (ngSubmit)=\"test()\" [formGroup]=\"loginForm\">\n     \n    <ion-row>\n      <ion-col size=\"1\"> \n        1\n      </ion-col>\n      <ion-col size=\"1\">\n        377\n      </ion-col>\n      <ion-col size=\"1\">\n        331\n      </ion-col>\n      <ion-col size=\"1\">\n        4\n      </ion-col>\n      <ion-col size=\"1\">\n        4\n      </ion-col>\n      <ion-col size=\"1\">\n              <ion-input type= \"number\" name=\"A1\" formControlName=\"A1\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n              <ion-input type= \"number\"  name=\"B1\" formControlName=\"B1\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n          <ion-input type= \"number\"  name=\"C1\" formControlName=\"C1\"></ion-input>\n        </ion-col>\n      <ion-col size=\"1\">\n          <ion-input type= \"number\"  name=\"D1\" formControlName=\"D1\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        \n      </ion-col>\n    </ion-row>\n    \n \n    <ion-row>\n      <ion-col size=\"1\">\n        2\n      </ion-col>\n      <ion-col size=\"1\">\n        128\n      </ion-col>\n      <ion-col size=\"1\">\n        78\n      </ion-col>\n      <ion-col size=\"1\">\n        17\n      </ion-col>\n      <ion-col size=\"1\">\n        3\n      </ion-col>\n      <ion-col size=\"1\">\n          <ion-input type= \"number\" name=\"A2\" formControlName=\"A2\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n          <ion-input type= \"number\"  name=\"B2\" formControlName=\"B2\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"C2\" formControlName=\"C2\"></ion-input>\n    </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"D2\" formControlName=\"D2\"></ion-input>\n  </ion-col>\n      <ion-col size=\"1\">\n        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        3\n      </ion-col>\n      <ion-col size=\"1\">\n        302\n      </ion-col>\n      <ion-col size=\"1\">\n        279\n      </ion-col>\n      <ion-col size=\"1\">\n        6\n      </ion-col>\n      <ion-col size=\"1\">\n        4\n      </ion-col>\n      <ion-col size=\"1\">\n          <ion-input type= \"number\" name=\"A3\" formControlName=\"A3\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n          <ion-input type= \"number\"  name=\"B3\" formControlName=\"B3\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"C3\" formControlName=\"C3\"></ion-input>\n    </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"D3\" formControlName=\"D3\"></ion-input>\n  </ion-col>\n      <ion-col size=\"1\">\n        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        4\n      </ion-col>\n      <ion-col size=\"1\">\n        110\n      </ion-col>\n      <ion-col size=\"1\">\n        80\n      </ion-col>\n      <ion-col size=\"1\">\n        15\n      </ion-col>\n      <ion-col size=\"1\">\n        3\n      </ion-col>\n      <ion-col size=\"1\">\n          <ion-input type= \"number\" name=\"A4\" formControlName=\"A4\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n          <ion-input type= \"number\"  name=\"B4\" formControlName=\"B4\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"C4\" formControlName=\"C4\"></ion-input>\n    </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"D4\" formControlName=\"D4\"></ion-input>\n  </ion-col>\n      <ion-col size=\"1\">\n        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        5\n      </ion-col>\n      <ion-col size=\"1\">\n        454\n      </ion-col>\n      <ion-col size=\"1\">\n        441\n      </ion-col>\n      <ion-col size=\"1\">\n        8\n      </ion-col>\n      <ion-col size=\"1\">\n        5\n      </ion-col>\n      <ion-col size=\"1\">\n          <ion-input type= \"number\" name=\"A5\" formControlName=\"A5\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n          <ion-input type= \"number\"  name=\"B5\" formControlName=\"B5\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"C5\" formControlName=\"C5\"></ion-input>\n    </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"D5\" formControlName=\"D5\"></ion-input>\n  </ion-col>\n      <ion-col size=\"1\">\n        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        6\n      </ion-col>\n      <ion-col size=\"1\">\n        494\n      </ion-col>\n      <ion-col size=\"1\">\n        444\n      </ion-col>\n      <ion-col size=\"1\">\n        1\n      </ion-col>\n      <ion-col size=\"1\">\n        5\n      </ion-col>\n      <ion-col size=\"1\">\n          <ion-input type= \"number\" name=\"A6\" formControlName=\"A6\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n          <ion-input type= \"number\"  name=\"B6\" formControlName=\"B6\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"C6\" formControlName=\"C6\"></ion-input>\n    </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"D6\" formControlName=\"D6\"></ion-input>\n  </ion-col>\n      <ion-col size=\"1\">\n        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        7\n      </ion-col>\n      <ion-col size=\"1\">\n        338\n      </ion-col>\n      <ion-col size=\"1\">\n        328\n      </ion-col>\n      <ion-col size=\"1\">\n        10\n      </ion-col>\n      <ion-col size=\"1\">\n        4\n      </ion-col>\n      <ion-col size=\"1\">\n          <ion-input type= \"number\" name=\"A7\" formControlName=\"A7\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n          <ion-input type= \"number\"  name=\"B7\" formControlName=\"B7\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"C7\" formControlName=\"C7\"></ion-input>\n    </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"D7\" formControlName=\"D7\"></ion-input>\n  </ion-col>\n      <ion-col size=\"1\">\n        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        8\n      </ion-col>\n      <ion-col size=\"1\">\n        178\n      </ion-col>\n      <ion-col size=\"1\">\n        131\n      </ion-col>\n      <ion-col size=\"1\">\n        13\n      </ion-col>\n      <ion-col size=\"1\">\n        3\n      </ion-col>\n      <ion-col size=\"1\">\n          <ion-input type= \"number\" name=\"A8\" formControlName=\"A8\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n          <ion-input type= \"number\"  name=\"B8\" formControlName=\"B8\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"C8\" formControlName=\"C8\"></ion-input>\n    </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"D8\" formControlName=\"D8\"></ion-input>\n  </ion-col>\n      <ion-col size=\"1\">\n        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        9\n      </ion-col>\n      <ion-col size=\"1\">\n        431\n      </ion-col>\n      <ion-col size=\"1\">\n        395\n      </ion-col>\n      <ion-col size=\"1\">\n        12\n      </ion-col>\n      <ion-col size=\"1\">\n        5\n      </ion-col>\n      <ion-col size=\"1\">\n          <ion-input type= \"number\" name=\"A9\" formControlName=\"A9\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n          <ion-input type= \"number\"  name=\"B9\" formControlName=\"B9\"></ion-input>\n  </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"C9\" formControlName=\"C9\"></ion-input>\n    </ion-col>\n  <ion-col size=\"1\">\n      <ion-input type= \"number\"  name=\"D9\" formControlName=\"D9\"></ion-input>\n  </ion-col>\n      <ion-col size=\"1\">\n        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        OUT\n      </ion-col>\n      <ion-col size=\"1\">\n        2812\n      </ion-col>\n      <ion-col size=\"1\">\n        2507\n      </ion-col>\n      <ion-col size=\"1\">\n        OUT\n      </ion-col>\n      <ion-col size=\"1\">\n        36\n      </ion-col>\n      <ion-col size=\"1\">\n  </ion-col>\n  <ion-col size=\"1\">\n  </ion-col>\n  <ion-col size=\"1\">\n    </ion-col>\n  <ion-col size=\"1\">\n  </ion-col>\n      <ion-col size=\"1\">\n        \n      </ion-col>\n    </ion-row>\n    <ion-button class=\"ion-padding-horizontal\" color=\"primary\" expand=\"full\" type=\"submit\"\n          [disabled]=\"!loginForm.valid\">Submit</ion-button>\n  </form>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/scorecard/scorecard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/scorecard/scorecard.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col {\n  font-size: 1.6vw;\n  border-color: black;\n  border-width: .01em;\n  border-style: solid;\n  margin-bottom: -1px;\n  background-color: #e9e7e7; }\n\nion-grid {\n  width: 100%; }\n\nion-input {\n  width: 100%; }\n\n.smalltext {\n  font-size: 1vw; }\n\n.toptable {\n  background-color: #8a5d5d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbGVldGVsZWN0cm9uaWNzL0RvY3VtZW50cy9hcHAgcHJvamVjdC9nb2xmbmV3L3NyYy9hcHAvcGFnZXMvc2NvcmVjYXJkL3Njb3JlY2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ3JCLG1CQUFtQjtFQUNuQixtQkFBa0I7RUFBRSxtQkFBb0I7RUFDeEMseUJBQW9DLEVBQUE7O0FBRWxDO0VBQ0ksV0FBWSxFQUFBOztBQUVoQjtFQUNJLFdBQVUsRUFBQTs7QUFPakI7RUFDRyxjQUFhLEVBQUE7O0FBRWpCO0VBQ0kseUJBQWtDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zY29yZWNhcmQvc2NvcmVjYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbHtcbiAgICBmb250LXNpemU6IDEuNnZ3O1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7IFxuICBib3JkZXItd2lkdGg6IC4wMWVtOyBcbiAgYm9yZGVyLXN0eWxlOnNvbGlkOyBtYXJnaW4tYm90dG9tIDogLTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMxLCAyMzEpXG4gICAgfVxuICAgIGlvbi1ncmlke1xuICAgICAgICB3aWR0aCA6IDEwMCU7XG4gICAgICAgIH1cbiAgICBpb24taW5wdXR7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMnZ3O1xuICAgIC8vICAgICBib3JkZXItY29sb3I6IGJsYWNrOyBcbiAgICAvLyAgIGJvcmRlci13aWR0aDogMTAwJTsgXG4gICAgLy8gICBib3JkZXItc3R5bGU6c29saWQ7IG1hcmdpbi1ib3R0b20gOiAtMXB4O1xuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMxLCAyMzEpXG4gICAgICAgIH1cbiAuc21hbGx0ZXh0IHtcbiAgICBmb250LXNpemU6MXZ3O1xufVxuLnRvcHRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM4LCA5MywgOTMpfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/scorecard/scorecard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/scorecard/scorecard.page.ts ***!
  \***************************************************/
/*! exports provided: ScorecardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorecardPage", function() { return ScorecardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ScorecardPage = /** @class */ (function () {
    function ScorecardPage(db, fb) {
        this.db = db;
        this.fb = fb;
        this.db.collection("scorecard").valueChanges().subscribe(function (data) {
        });
    }
    ScorecardPage.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            A1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            B1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            C1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            D1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            A2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            B2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            C2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            D2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            A3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            B3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            C3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            D3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            A4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            B4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            C4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            D4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            A5: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            B5: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            C5: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            D5: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            A6: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            B6: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            C6: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            D6: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            A7: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            B7: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            C7: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            D7: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            A8: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            B8: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            C8: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            D8: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            A9: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            B9: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            C9: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            D9: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    ScorecardPage.prototype.test = function () {
        console.log(this.loginForm.value);
    };
    ScorecardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scorecard',
            template: __webpack_require__(/*! ./scorecard.page.html */ "./src/app/pages/scorecard/scorecard.page.html"),
            styles: [__webpack_require__(/*! ./scorecard.page.scss */ "./src/app/pages/scorecard/scorecard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ScorecardPage);
    return ScorecardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-scorecard-scorecard-module.js.map