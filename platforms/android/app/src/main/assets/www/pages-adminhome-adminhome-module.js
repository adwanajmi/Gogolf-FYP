(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-adminhome-adminhome-module"],{

/***/ "./src/app/pages/adminhome/adminhome.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/adminhome/adminhome.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminhomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminhomePageModule", function() { return AdminhomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _adminhome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminhome.page */ "./src/app/pages/adminhome/adminhome.page.ts");







var routes = [
    {
        path: '',
        component: _adminhome_page__WEBPACK_IMPORTED_MODULE_6__["AdminhomePage"]
    }
];
var AdminhomePageModule = /** @class */ (function () {
    function AdminhomePageModule() {
    }
    AdminhomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_adminhome_page__WEBPACK_IMPORTED_MODULE_6__["AdminhomePage"]]
        })
    ], AdminhomePageModule);
    return AdminhomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/adminhome/adminhome.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/adminhome/adminhome.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"signOut()\">\n        <ion-icon name=\"log-out\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>GoGolf(Admin)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button routerLink=\"/addcash\" class=\"col-50\">\n    Add Cash\n    <ion-icon name=\"cash\"></ion-icon>\n\n  </ion-button>\n\n  <ion-button routerLink=\"/allbookings\" class=\"col-50\">\n    All Bookings\n    <ion-icon name=\"bookmarks\"></ion-icon>\n  </ion-button>\n  <ion-button routerLink=\"/reviews\" class=\"col-50\">\n    Reviews\n    <ion-icon name=\"star\"></ion-icon>\n  </ion-button>\n  <ion-button routerLink=\"/setprice\" class=\"col-50\">\n    Settings\n    <ion-icon name=\"cash\"></ion-icon>\n  </ion-button>\n  <ion-button routerLink=\"/news\" class=\"col-50\">\n    Manage News\n    <ion-icon name=\"paper\"></ion-icon>\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/adminhome/adminhome.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/adminhome/adminhome.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #d8f0a0;\n  --ion-item-background: transparent; }\n\nion-label {\n  --color: rgb(8, 8, 8) !important; }\n\nion-label p {\n    color: #94abbd !important; }\n\nion-title {\n  --color: rgb(5, 5, 5) !important; }\n\nion-toolbar {\n  --background: #f7f8f1; }\n\nion-input, ion-textarea {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  --color: rgb(2, 2, 2) !important; }\n\nion-input input, ion-input textarea, ion-textarea input, ion-textarea textarea {\n    --padding-start: 5px;\n    background: #e3e7c6 !important; }\n\nion-button {\n  --background: #e3e7c6 !important;\n  --color: rgb(10, 7, 7) !important; }\n\nion-fab-button[data-desc] {\n  position: relative; }\n\nion-fab-button[data-desc]::after {\n  position: absolute;\n  content: attr(data-desc);\n  z-index: 1;\n  right: 55px;\n  bottom: 4px;\n  background-color: var(--ion-color-primary);\n  padding: 9px;\n  border-radius: 15px;\n  color: white;\n  box-shadow: 0 3px 5px -1px rgba(252, 242, 242, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n\n.buttonscan {\n  width: 100%;\n  height: 20 .buttonscan;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 100%; }\n\n.col-32 {\n  width: 49%;\n  height: 49%;\n  float: left;\n  text-overflow: wrap;\n  position: relative; }\n\n.col-50 {\n  width: 49%;\n  height: 49%;\n  float: left;\n  text-overflow: wrap;\n  position: relative; }\n\nion-col {\n  width: 100%;\n  height: 50%; }\n\np {\n  color: #94abbd !important;\n  font-size: 0.6em; }\n\n.title {\n  font-size: 100%; }\n\n.full-image {\n  width: 50px;\n  height: 50px; }\n\n.card-description {\n  width: 70%;\n  height: 40%;\n  float: inherit;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 0.6em;\n  color: white;\n  background-color: rgba(88, 86, 86, 0.918); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbGVldGVsZWN0cm9uaWNzL0RvY3VtZW50cy9hcHAgcHJvamVjdC9nb2xmbmV3L3NyYy9hcHAvcGFnZXMvYWRtaW5ob21lL2FkbWluaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYTtFQUNiLGtDQUFzQixFQUFBOztBQUcxQjtFQUNJLGdDQUFRLEVBQUE7O0FBRFo7SUFJUSx5QkFBeUIsRUFBQTs7QUFHakM7RUFDRSxnQ0FBUSxFQUFBOztBQUdWO0VBQ0UscUJBQWEsRUFBQTs7QUFFZjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFNbkIsZ0NBQVEsRUFBQTs7QUFSWjtJQUtRLG9CQUFnQjtJQUNoQiw4QkFBOEIsRUFBQTs7QUFJdEM7RUFDRSxnQ0FBYTtFQUNiLGlDQUFRLEVBQUE7O0FBRVY7RUFDSSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1SEFBaUgsRUFBQTs7QUFFbkg7RUFDRSxXQUFXO0VBQ1gsc0JBRlM7RUFHVCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBRXZCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2I7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNHLFdBQVc7RUFDWixZQUFZLEVBQUE7O0FBSWQ7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1Isa0JBQWtCO0VBRWxCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFlBQXdCO0VBQ3hCLHlDQUF5QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW5ob21lL2FkbWluaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZDhmMGEwO1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgLS1jb2xvcjogcmdiKDgsIDgsIDgpICFpbXBvcnRhbnQ7XG5cbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICM5NGFiYmQgIWltcG9ydGFudDtcbiAgICB9XG59XG5pb24tdGl0bGV7XG4gIC0tY29sb3I6IHJnYig1LCA1LCA1KSAhaW1wb3J0YW50O1xuICBcbn1cbmlvbi10b29sYmFye1xuICAtLWJhY2tncm91bmQ6ICNmN2Y4ZjE7XG59XG5pb24taW5wdXQsIGlvbi10ZXh0YXJlYSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIFxuICAgIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTNlN2M2ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC0tY29sb3I6IHJnYigyLCAyLCAyKSAhaW1wb3J0YW50O1xufVxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2UzZTdjNiAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiByZ2IoMTAsIDcsIDcpICFpbXBvcnRhbnQ7XG59XG5pb24tZmFiLWJ1dHRvbltkYXRhLWRlc2NdIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIGlvbi1mYWItYnV0dG9uW2RhdGEtZGVzY106OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogYXR0cihkYXRhLWRlc2MpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcmlnaHQ6IDU1cHg7IFxuICAgIGJvdHRvbTogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgyNTIsIDI0MiwgMjQyLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsMC4xMik7XG4gIH1cbiAgLmJ1dHRvbnNjYW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAmO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgfVxuICAuY29sLTMyIHtcbiAgICB3aWR0aDogNDklO1xuICAgIGhlaWdodDogNDklO1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgdGV4dC1vdmVyZmxvdzp3cmFwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuY29sLTUwIHtcbiAgICB3aWR0aDogNDklO1xuICAgIGhlaWdodDogNDklO1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgdGV4dC1vdmVyZmxvdzp3cmFwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBpb24tY29sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgXG4gIH1cbiAgcCB7XG4gICAgY29sb3I6ICM5NGFiYmQgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDAuNmVtO1xuICBcbiAgfVxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgfVxuICAuZnVsbC1pbWFnZSB7XG4gICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBcbiAgfVxuICBcbiAgLmNhcmQtZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgZmxvYXQ6aW5oZXJpdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIHBhZGRpbmc6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDg2LCA4NiwgMC45MTgpO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/adminhome/adminhome.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/adminhome/adminhome.page.ts ***!
  \***************************************************/
/*! exports provided: AdminhomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminhomePage", function() { return AdminhomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var AdminhomePage = /** @class */ (function () {
    function AdminhomePage(auth) {
        this.auth = auth;
    }
    AdminhomePage.prototype.ngOnInit = function () {
    };
    AdminhomePage.prototype.signOut = function () {
        this.auth.signOut();
    };
    AdminhomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminhome',
            template: __webpack_require__(/*! ./adminhome.page.html */ "./src/app/pages/adminhome/adminhome.page.html"),
            styles: [__webpack_require__(/*! ./adminhome.page.scss */ "./src/app/pages/adminhome/adminhome.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AdminhomePage);
    return AdminhomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-adminhome-adminhome-module.js.map