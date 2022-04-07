(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>GoGolf</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-item >\n      <img class=\"myimg\" src=\"assets/imgs/logo-golf.png\" alt=\"your image\">\n    </ion-item>\n    <form (ngSubmit)=\"login()\" [formGroup]=\"loginForm\">\n      <ion-list>\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\">Email</ion-label>\n          <ion-input type=\"email\" placeholder=\"Email\" name=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n  \n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\">Password</ion-label>\n          <ion-input type=\"password\" placeholder=\"Password\" name=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n  \n      </ion-list>\n  \n      <ion-button class=\"ion-padding-horizontal\" color=\"primary\" expand=\"full\" type=\"submit\"\n        [disabled]=\"!loginForm.valid\">Login</ion-button>\n    </form>\n  \n    <div class=\"ion-padding-horizontal\">\n      <ion-button color=\"tertiary\" expand=\"full\" routerLink=\"/register\">Create Account</ion-button>\n    </div>\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-box {\n  margin: 1em;\n  padding: 1em;\n  margin-top: 10vh;\n  background: #ffffffe6;\n  border-radius: 15px;\n  border: 2px solid var(--ion-color-primary); }\n\nion-item {\n  --ion-item-background: transparent; }\n\n.myimg {\n  width: 100%; }\n\n.twitter-btn {\n  --background: #1DA1F2; }\n\n.fb-btn {\n  --background: #3C5A99; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbGVldGVsZWN0cm9uaWNzL0RvY3VtZW50cy9hcHAgcHJvamVjdC9nb2xmbmV3L3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQiwwQ0FBMEMsRUFBQTs7QUFXOUM7RUFDSSxrQ0FBc0IsRUFBQTs7QUFFMUI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDSSxxQkFBYSxFQUFBOztBQUdqQjtFQUNJLHFCQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYm94IHtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmZTY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi8vIGlvbi1jb250ZW50IHtcbi8vICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZ3MvbG9naW4uanBnJyk7XG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyB9XG5cbmlvbi1pdGVtIHtcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm15aW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udHdpdHRlci1idG4ge1xuICAgIC0tYmFja2dyb3VuZDogIzFEQTFGMjtcbn1cblxuLmZiLWJ0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjM0M1QTk5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(fb, auth, alertCtrl, toastCtrl, loadingCtrl, router) {
        this.fb = fb;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
    };
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.auth.signIn(this.loginForm.value).subscribe(function (user) {
                            loading.dismiss();
                            var role = user['role'];
                            if (role == 'USER') {
                                _this.router.navigateByUrl('/app');
                            }
                            else if (role == 'ADMIN') {
                                _this.router.navigateByUrl('/adminhome');
                            }
                        }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alert;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        loading.dismiss();
                                        return [4 /*yield*/, this.alertCtrl.create({
                                                header: 'Error',
                                                message: err.message,
                                                buttons: ['OK']
                                            })];
                                    case 1:
                                        alert = _a.sent();
                                        alert.present();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map