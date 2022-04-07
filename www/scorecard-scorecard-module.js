(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scorecard-scorecard-module"],{

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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Scorecard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (ngSubmit)=\"submit18()\" [formGroup]=\"form18\">\n\n  <ion-grid>\n\n      <ion-row>\n        <ion-col class=\"toptable\" size=\"1\">\n          HOLE NO\n        </ion-col>\n        <ion-col class=\"color1\" size=\"1\">\n          MEN\n        </ion-col>\n        <ion-col class=\"color2\" size=\"1\">\n          LADIES\n        </ion-col>\n        <ion-col class=\"toptable\" size=\"1\">\n          INDEX\n        </ion-col>\n        <ion-col class=\"toptable\" size=\"1\">\n          PAR\n        </ion-col>\n        <ion-col class=\"toptable\" size=\"4\">\n          SCORE\n        </ion-col>\n       \n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"toptable\" size=\"1\">\n\n        </ion-col>\n        <ion-col size=\"1\" class=\"color1\">\n          METER\n        </ion-col>\n        <ion-col size=\"1\" class=\"color2\">\n          METER\n        </ion-col>\n        <ion-col class=\"toptable\" size=\"1\">\n        </ion-col>\n        <ion-col class=\"toptable\" size=\"1\">\n        </ion-col>\n        <ion-col class=\"toptable\" size=\"1\">\n          <ion-input name=\"A\" formControlName=\"A\"></ion-input>\n        </ion-col>\n        <ion-col class=\"toptable\" size=\"1\">\n          <ion-input name=\"B\" formControlName=\"B\"></ion-input>\n        </ion-col>\n        <ion-col class=\"toptable\" size=\"1\">\n          <ion-input name=\"C\" formControlName=\"C\"></ion-input>\n        </ion-col>\n        <ion-col class=\"toptable\" size=\"1\">\n          <ion-input name=\"D\" formControlName=\"D\"></ion-input>\n        </ion-col>\n       \n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"1\">\n          1\n        </ion-col>\n        <ion-col class=\"color1\" size=\"1\">\n          377\n        </ion-col>\n        <ion-col class=\"color2\"size=\"1\">\n          331\n        </ion-col>\n        <ion-col size=\"1\">\n          4\n        </ion-col>\n        <ion-col size=\"1\">\n          4\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"A1\" formControlName=\"A1\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"B1\" formControlName=\"B1\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"C1\" formControlName=\"C1\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"D1\" formControlName=\"D1\"></ion-input>\n        </ion-col>\n       \n      </ion-row>\n\n\n      <ion-row>\n        <ion-col size=\"1\">\n          2\n        </ion-col>\n        <ion-col class=\"color1\" size=\"1\">\n          128\n        </ion-col>\n        <ion-col class=\"color2\" size=\"1\">\n          78\n        </ion-col>\n        <ion-col size=\"1\">\n          17\n        </ion-col>\n        <ion-col size=\"1\">\n          3\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"A2\" formControlName=\"A2\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"B2\" formControlName=\"B2\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"C2\" formControlName=\"C2\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"D2\" formControlName=\"D2\"></ion-input>\n        </ion-col>\n      \n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"1\">\n          3\n        </ion-col>\n        <ion-col class=\"color1\" size=\"1\">\n          302\n        </ion-col>\n        <ion-col class=\"color2\" size=\"1\">\n          279\n        </ion-col>\n        <ion-col size=\"1\">\n          6\n        </ion-col>\n        <ion-col size=\"1\">\n          4\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"A3\" formControlName=\"A3\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"B3\" formControlName=\"B3\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"C3\" formControlName=\"C3\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"D3\" formControlName=\"D3\"></ion-input>\n        </ion-col>\n       \n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"1\">\n          4\n        </ion-col>\n        <ion-col class=\"color1\" size=\"1\">\n          110\n        </ion-col>\n        <ion-col class=\"color2\" size=\"1\">\n          80\n        </ion-col>\n        <ion-col size=\"1\">\n          15\n        </ion-col>\n        <ion-col size=\"1\">\n          3\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"A4\" formControlName=\"A4\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"B4\" formControlName=\"B4\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"C4\" formControlName=\"C4\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"D4\" formControlName=\"D4\"></ion-input>\n        </ion-col>\n       \n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"1\">\n          5\n        </ion-col>\n        <ion-col class=\"color1\" size=\"1\">\n          454\n        </ion-col>\n        <ion-col class=\"color2\" size=\"1\">\n          441\n        </ion-col>\n        <ion-col size=\"1\">\n          8\n        </ion-col>\n        <ion-col size=\"1\">\n          5\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"A5\" formControlName=\"A5\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"B5\" formControlName=\"B5\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"C5\" formControlName=\"C5\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"D5\" formControlName=\"D5\"></ion-input>\n        </ion-col>\n       \n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"1\">\n          6\n        </ion-col>\n        <ion-col class=\"color1\" size=\"1\">\n          494\n        </ion-col>\n        <ion-col class=\"color2\" size=\"1\">\n          444\n        </ion-col>\n        <ion-col size=\"1\">\n          1\n        </ion-col>\n        <ion-col size=\"1\">\n          5\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"A6\" formControlName=\"A6\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"B6\" formControlName=\"B6\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"C6\" formControlName=\"C6\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"D6\" formControlName=\"D6\"></ion-input>\n        </ion-col>\n        \n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"1\">\n          7\n        </ion-col>\n        <ion-col class=\"color1\" size=\"1\">\n          338\n        </ion-col>\n        <ion-col class=\"color2\" size=\"1\">\n          328\n        </ion-col>\n        <ion-col size=\"1\">\n          10\n        </ion-col>\n        <ion-col size=\"1\">\n          4\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"A7\" formControlName=\"A7\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"B7\" formControlName=\"B7\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"C7\" formControlName=\"C7\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"D7\" formControlName=\"D7\"></ion-input>\n        </ion-col>\n        \n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"1\">\n          8\n        </ion-col>\n        <ion-col class=\"color1\" size=\"1\">\n          178\n        </ion-col>\n        <ion-col class=\"color2\" size=\"1\">\n          131\n        </ion-col>\n        <ion-col size=\"1\">\n          13\n        </ion-col>\n        <ion-col size=\"1\">\n          3\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"A8\" formControlName=\"A8\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"B8\" formControlName=\"B8\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"C8\" formControlName=\"C8\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"D8\" formControlName=\"D8\"></ion-input>\n        </ion-col>\n        \n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"1\">\n          9\n        </ion-col>\n        <ion-col  class=\"color1\" size=\"1\">\n          431\n        </ion-col>\n        <ion-col class=\"color2\" size=\"1\">\n          395\n        </ion-col>\n        <ion-col size=\"1\">\n          12\n        </ion-col>\n        <ion-col size=\"1\">\n          5\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"A9\" formControlName=\"A9\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"B9\" formControlName=\"B9\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"C9\" formControlName=\"C9\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-input type=\"number\" name=\"D9\" formControlName=\"D9\"></ion-input>\n        </ion-col>\n       \n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"1\">\n          OUT\n        </ion-col>\n        <ion-col class=\"color1\" size=\"1\">\n          2812\n        </ion-col>\n        <ion-col class=\"color2\" size=\"1\">\n          2507\n        </ion-col>\n        <ion-col size=\"1\">\n          OUT\n        </ion-col>\n        <ion-col size=\"1\">\n          36\n        </ion-col>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"1\">\n        </ion-col>\n       \n      </ion-row>\n      \n  </ion-grid>\n\n  <ion-grid>\n\n\n    <ion-row>\n      <ion-col class=\"toptable\" size=\"1\">\n        HOLE NO\n      </ion-col>\n      <ion-col class=\"color3\" size=\"1\">\n        MEN\n      </ion-col>\n      <ion-col class=\"color4\" size=\"1\">\n        LADIES\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n        INDEX\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n        PAR\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"4\">\n        SCORE\n      </ion-col>\n      \n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"toptable\" size=\"1\">\n\n      </ion-col>\n      <ion-col size=\"1\" class=\"color3\">\n        METER\n      </ion-col>\n      <ion-col size=\"1\" class=\"color4\">\n        METER\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n      </ion-col>\n      <ion-col class=\"toptable\" size=\"1\">\n      </ion-col>\n     \n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        10\n      </ion-col>\n      <ion-col class=\"color3\" size=\"1\">\n        395\n      </ion-col>\n      <ion-col class=\"color4\" size=\"1\">\n        309\n      </ion-col>\n      <ion-col size=\"1\">\n        3\n      </ion-col>\n      <ion-col size=\"1\">\n        4\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"A10\" formControlName=\"A10\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"B10\" formControlName=\"B10\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"C10\" formControlName=\"C10\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"D10\" formControlName=\"D10\"></ion-input>\n      </ion-col>\n      \n    </ion-row>\n\n\n    <ion-row>\n      <ion-col size=\"1\">\n        11\n      </ion-col>\n      <ion-col class=\"color3\" size=\"1\">\n        112\n      </ion-col>\n      <ion-col class=\"color4\" size=\"1\">\n        69\n      </ion-col>\n      <ion-col size=\"1\">\n        18\n      </ion-col>\n      <ion-col size=\"1\">\n        3\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"A11\" formControlName=\"A11\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"B11\" formControlName=\"B11\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"C11\" formControlName=\"C11\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"D11\" formControlName=\"D11\"></ion-input>\n      </ion-col>\n      \n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        12\n      </ion-col>\n      <ion-col class=\"color3\" size=\"1\">\n        315\n      </ion-col>\n      <ion-col class=\"color4\" size=\"1\">\n        273\n      </ion-col>\n      <ion-col size=\"1\">\n        5\n      </ion-col>\n      <ion-col size=\"1\">\n        4\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"A12\" formControlName=\"A12\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"B12\" formControlName=\"B12\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"C12\" formControlName=\"C12\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"D12\" formControlName=\"D12\"></ion-input>\n      </ion-col>\n      \n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        13\n      </ion-col>\n      <ion-col class=\"color3\" size=\"1\">\n        86\n      </ion-col>\n      <ion-col class=\"color4\" size=\"1\">\n        64\n      </ion-col>\n      <ion-col size=\"1\">\n        16\n      </ion-col>\n      <ion-col size=\"1\">\n        3\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"A13\" formControlName=\"A13\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"B13\" formControlName=\"B13\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"C13\" formControlName=\"C13\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"D13\" formControlName=\"D13\"></ion-input>\n      </ion-col>\n      \n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        14\n      </ion-col>\n      <ion-col class=\"color3\" size=\"1\">\n        472\n      </ion-col>\n      <ion-col class=\"color4\" size=\"1\">\n        430\n      </ion-col>\n      <ion-col size=\"1\">\n        7\n      </ion-col>\n      <ion-col size=\"1\">\n        5\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"A14\" formControlName=\"A14\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"B14\" formControlName=\"B14\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"C14\" formControlName=\"C14\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"D14\" formControlName=\"D14\"></ion-input>\n      </ion-col>\n      \n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        15\n      </ion-col>\n      <ion-col class=\"color3\" size=\"1\">\n        474\n      </ion-col>\n      <ion-col class=\"color4\" size=\"1\">\n        439\n      </ion-col>\n      <ion-col size=\"1\">\n        2\n      </ion-col>\n      <ion-col size=\"1\">\n        5\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"A15\" formControlName=\"A15\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"B15\" formControlName=\"B15\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"C15\" formControlName=\"C15\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"D15\" formControlName=\"D15\"></ion-input>\n      </ion-col>\n      \n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        16\n      </ion-col>\n      <ion-col class=\"color3\" size=\"1\">\n        353\n      </ion-col>\n      <ion-col class=\"color4\" size=\"1\">\n        311\n      </ion-col>\n      <ion-col size=\"1\">\n        9\n      </ion-col>\n      <ion-col size=\"1\">\n        4\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"A16\" formControlName=\"A16\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"B16\" formControlName=\"B16\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"C16\" formControlName=\"C16\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"D16\" formControlName=\"D16\"></ion-input>\n      </ion-col>\n      \n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        17\n      </ion-col>\n      <ion-col class=\"color3\" size=\"1\">\n        159\n      </ion-col>\n      <ion-col class=\"color4\" size=\"1\">\n        104\n      </ion-col>\n      <ion-col size=\"1\">\n        14\n      </ion-col>\n      <ion-col size=\"1\">\n        3\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"A17\" formControlName=\"A17\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"B17\" formControlName=\"B17\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"C17\" formControlName=\"C17\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"D17\" formControlName=\"D17\"></ion-input>\n      </ion-col>\n      \n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        18\n      </ion-col>\n      <ion-col class=\"color3\" size=\"1\">\n        439\n      </ion-col>\n      <ion-col class=\"color4\" size=\"1\">\n        380\n      </ion-col>\n      <ion-col size=\"1\">\n        11\n      </ion-col>\n      <ion-col size=\"1\">\n        5\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"A18\" formControlName=\"A18\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"B18\" formControlName=\"B18\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"C18\" formControlName=\"C18\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input type=\"number\" name=\"D18\" formControlName=\"D18\"></ion-input>\n      </ion-col>\n     \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"1\">\n        IN\n      </ion-col>\n      <ion-col class=\"color3\" size=\"1\">\n        2805\n      </ion-col>\n      <ion-col class=\"color4\" size=\"1\">\n        2379\n      </ion-col>\n      <ion-col size=\"1\">\n        IN\n      </ion-col>\n      <ion-col size=\"1\">\n        36\n      </ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n      \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"1\">\n        OUT\n      </ion-col>\n      <ion-col class=\"color3\" size=\"1\">\n        2812\n      </ion-col>\n      <ion-col class=\"color4\" size=\"1\">\n        2507\n      </ion-col>\n      <ion-col size=\"1\">\n        OUT\n      </ion-col>\n      <ion-col size=\"1\">\n        36\n      </ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n      \n    </ion-row>\n    <ion-button routerLink=\"/app/profile\" class=\"ion-padding-horizontal\" color=\"primary\" expand=\"full\" type=\"submit\"\n      [disabled]=\"!form18.valid\">Submit</ion-button>\n  </ion-grid>\n</form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/scorecard/scorecard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/scorecard/scorecard.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col {\n  font-size: 1.6vw;\n  border-color: black;\n  border-width: .01em;\n  border-style: solid;\n  margin-bottom: -1px;\n  background-color: #e9e7e7; }\n\nion-grid {\n  width: 100%; }\n\nion-input {\n  width: 100%; }\n\n.smalltext {\n  font-size: 1vw; }\n\n.toptable {\n  background-color: #faf8f8; }\n\n.color1 {\n  background-color: #b4cce9; }\n\n.color2 {\n  background-color: #e7c9c1; }\n\n.color3 {\n  background-color: #d9dbdf; }\n\n.color4 {\n  background-color: #f2f3d3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbGVldGVsZWN0cm9uaWNzL0RvY3VtZW50cy9hcHAgcHJvamVjdC9nb2xmbmV3L3NyYy9hcHAvcGFnZXMvc2NvcmVjYXJkL3Njb3JlY2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ3JCLG1CQUFtQjtFQUNuQixtQkFBa0I7RUFBRSxtQkFBb0I7RUFDeEMseUJBQW9DLEVBQUE7O0FBRWxDO0VBQ0ksV0FBWSxFQUFBOztBQUVoQjtFQUNJLFdBQVUsRUFBQTs7QUFPakI7RUFDRyxjQUFhLEVBQUE7O0FBRWpCO0VBQ0kseUJBQW9DLEVBQUE7O0FBQ3hDO0VBQ1EseUJBQW9DLEVBQUE7O0FBQzVDO0VBQ1EseUJBQW9DLEVBQUE7O0FBQzVDO0VBQ1EseUJBQW9DLEVBQUE7O0FBQzVDO0VBQ1kseUJBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zY29yZWNhcmQvc2NvcmVjYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbHtcbiAgICBmb250LXNpemU6IDEuNnZ3O1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7IFxuICBib3JkZXItd2lkdGg6IC4wMWVtOyBcbiAgYm9yZGVyLXN0eWxlOnNvbGlkOyBtYXJnaW4tYm90dG9tIDogLTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMxLCAyMzEpXG4gICAgfVxuICAgIGlvbi1ncmlke1xuICAgICAgICB3aWR0aCA6IDEwMCU7XG4gICAgICAgIH1cbiAgICBpb24taW5wdXR7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMnZ3O1xuICAgIC8vICAgICBib3JkZXItY29sb3I6IGJsYWNrOyBcbiAgICAvLyAgIGJvcmRlci13aWR0aDogMTAwJTsgXG4gICAgLy8gICBib3JkZXItc3R5bGU6c29saWQ7IG1hcmdpbi1ib3R0b20gOiAtMXB4O1xuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMxLCAyMzEpXG4gICAgICAgIH1cbiAuc21hbGx0ZXh0IHtcbiAgICBmb250LXNpemU6MXZ3O1xufVxuLnRvcHRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNDgsIDI0OCl9XG4uY29sb3IxIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMjA0LCAyMzMpfVxuLmNvbG9yMiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIwMSwgMTkzKX1cbi5jb2xvcjMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCAyMTksIDIyMyl9XG4uY29sb3I0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MywgMjExKX0iXX0= */"

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
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var ScorecardPage = /** @class */ (function () {
    function ScorecardPage(auth, db, fb) {
        this.auth = auth;
        this.db = db;
        this.fb = fb;
        this.limit = 40;
    }
    ScorecardPage.prototype.ngOnInit = function () {
        this.id = this.auth.getprofile();
        this.form18 = this.fb.group({
            A: [''],
            B: [''],
            C: [''],
            D: [''],
            A1: [''],
            B1: [''],
            C1: [''],
            D1: [''],
            A2: [''],
            B2: [''],
            C2: [''],
            D2: [''],
            A3: [''],
            B3: [''],
            C3: [''],
            D3: [''],
            A4: [''],
            B4: [''],
            C4: [''],
            D4: [''],
            A5: [''],
            B5: [''],
            C5: [''],
            D5: [''],
            A6: [''],
            B6: [''],
            C6: [''],
            D6: [''],
            A7: [''],
            B7: [''],
            C7: [''],
            D7: [''],
            A8: [''],
            B8: [''],
            C8: [''],
            D8: [''],
            A9: [''],
            B9: [''],
            C9: [''],
            D9: [''],
            A10: [''],
            B10: [''],
            C10: [''],
            D10: [''],
            A11: [''],
            B11: [''],
            C11: [''],
            D11: [''],
            A12: [''],
            B12: [''],
            C12: [''],
            D12: [''],
            A13: [''],
            B13: [''],
            C13: [''],
            D13: [''],
            A14: [''],
            B14: [''],
            C14: [''],
            D14: [''],
            A15: [''],
            B15: [''],
            C15: [''],
            D15: [''],
            A16: [''],
            B16: [''],
            C16: [''],
            D16: [''],
            A17: [''],
            B17: [''],
            C17: [''],
            D17: [''],
            A18: [''],
            B18: [''],
            C18: [''],
            D18: ['']
        });
    };
    ScorecardPage.prototype.submit18 = function () {
        var date = new Date();
        var win = false;
        this.totalA = +this.form18.value.A1 + +this.form18.value.A2 + +this.form18.value.A3 + +this.form18.value.A4 + +this.form18.value.A5 + +this.form18.value.A6 + +this.form18.value.A7 + +this.form18.value.A8 + +this.form18.value.A9 + +this.form18.value.A10 + +this.form18.value.A11 + +this.form18.value.A12 + +this.form18.value.A13 + +this.form18.value.A14 + +this.form18.value.A15 + +this.form18.value.A16 + +this.form18.value.A17 + +this.form18.value.A18;
        this.totalB = +this.form18.value.B1 + +this.form18.value.B2 + +this.form18.value.B3 + +this.form18.value.B4 + +this.form18.value.B5 + +this.form18.value.B6 + +this.form18.value.B7 + +this.form18.value.B8 + +this.form18.value.B9 + +this.form18.value.B10 + +this.form18.value.B11 + +this.form18.value.B12 + +this.form18.value.B13 + +this.form18.value.B14 + +this.form18.value.B15 + +this.form18.value.B16 + +this.form18.value.B17 + +this.form18.value.B18;
        this.totalC = +this.form18.value.C1 + +this.form18.value.C2 + +this.form18.value.C3 + +this.form18.value.C4 + +this.form18.value.C5 + +this.form18.value.C6 + +this.form18.value.C7 + +this.form18.value.C8 + +this.form18.value.C9 + +this.form18.value.C10 + +this.form18.value.C11 + +this.form18.value.C12 + +this.form18.value.C13 + +this.form18.value.C14 + +this.form18.value.C15 + +this.form18.value.C16 + +this.form18.value.C17 + +this.form18.value.C18;
        this.totalD = +this.form18.value.D1 + +this.form18.value.D2 + +this.form18.value.D3 + +this.form18.value.D4 + +this.form18.value.D5 + +this.form18.value.D6 + +this.form18.value.D7 + +this.form18.value.D8 + +this.form18.value.D9 + +this.form18.value.D10 + +this.form18.value.D11 + +this.form18.value.D12 + +this.form18.value.D13 + +this.form18.value.D14 + +this.form18.value.D15 + +this.form18.value.D16 + +this.form18.value.D17 + +this.form18.value.D18;
        if (this.totalA > this.totalB || this.totalA > this.totalC || this.totalA > this.totalD) {
            win = true;
        }
        if (this.totalA > this.limit) {
            this.Ap = true;
        }
        else {
            this.Ap = false;
        }
        if (this.totalB > this.limit) {
            this.Bp = true;
        }
        else {
            this.Bp = false;
        }
        if (this.totalC > this.limit) {
            this.Cp = true;
        }
        else {
            this.Cp = false;
        }
        if (this.totalD > this.limit) {
            this.Dp = true;
        }
        else {
            this.Dp = false;
        }
        console.log(this.totalA);
        console.log(this.totalB);
        console.log(this.totalC);
        console.log(this.totalD);
        this.db.collection('scores').add({
            A: this.form18.value.A,
            B: this.form18.value.B,
            C: this.form18.value.C,
            D: this.form18.value.D,
            totalA: this.totalA,
            totalB: this.totalB,
            totalC: this.totalC,
            totalD: this.totalD,
            user: this.id,
            date: date,
            win: win,
            Ap: this.Ap,
            Bp: this.Bp,
            Cp: this.Cp,
            Dp: this.Dp
        });
        console.log(date);
    };
    ScorecardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scorecard',
            template: __webpack_require__(/*! ./scorecard.page.html */ "./src/app/pages/scorecard/scorecard.page.html"),
            styles: [__webpack_require__(/*! ./scorecard.page.scss */ "./src/app/pages/scorecard/scorecard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ScorecardPage);
    return ScorecardPage;
}());



/***/ })

}]);
//# sourceMappingURL=scorecard-scorecard-module.js.map