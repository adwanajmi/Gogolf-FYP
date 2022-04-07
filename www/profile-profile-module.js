(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/directives/parallax-header.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/parallax-header.directive.ts ***!
  \*********************************************************/
/*! exports provided: ParallaxHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxHeaderDirective", function() { return ParallaxHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



// https://www.joshmorony.com/high-performance-parallax-animation-in-ionic-2/
var ParallaxHeaderDirective = /** @class */ (function () {
    function ParallaxHeaderDirective(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
    }
    ParallaxHeaderDirective.prototype.ngOnInit = function () {
        var content = this.element.nativeElement;
        this.header = content.getElementsByClassName('header-image')[0];
        var mainContent = content.getElementsByClassName('main-content')[0];
        this.headerHeight = this.header.clientHeight;
        this.renderer.setElementStyle(mainContent, 'position', 'absolute');
    };
    ParallaxHeaderDirective.prototype.onWindowResize = function (ev) {
        this.headerHeight = this.header.clientHeight;
    };
    ParallaxHeaderDirective.prototype.onContentScroll = function (ev) {
        var _this = this;
        if (ev) {
            this.domCtrl.write(function () {
                _this.updateParallaxHeader(ev);
            });
        }
    };
    ParallaxHeaderDirective.prototype.updateParallaxHeader = function (ev) {
        var scrollTop = ev.detail.scrollTop;
        if (scrollTop > 0) {
            this.translateAmt = scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
    };
    ParallaxHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[parallax-header]',
            host: {
                '(ionScroll)': 'onContentScroll($event)',
                '(window:resize)': 'onWindowResize($event)'
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]])
    ], ParallaxHeaderDirective);
    return ParallaxHeaderDirective;
}());



/***/ }),

/***/ "./src/app/directives/shared-directives.module.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/shared-directives.module.ts ***!
  \********************************************************/
/*! exports provided: SharedDirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDirectivesModule", function() { return SharedDirectivesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _parallax_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parallax-header.directive */ "./src/app/directives/parallax-header.directive.ts");




var SharedDirectivesModule = /** @class */ (function () {
    function SharedDirectivesModule() {
    }
    SharedDirectivesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [_parallax_header_directive__WEBPACK_IMPORTED_MODULE_3__["ParallaxHeaderDirective"]],
            exports: [_parallax_header_directive__WEBPACK_IMPORTED_MODULE_3__["ParallaxHeaderDirective"]]
        })
    ], SharedDirectivesModule);
    return SharedDirectivesModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../directives/shared-directives.module */ "./src/app/directives/shared-directives.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");








var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_1__["SharedDirectivesModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content parallax-header [scrollEvents]=\"true\">\n\n  <div class=\"header-image\"></div>\n\n  <div class=\"main-content\">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"3\" class=\"profile-img-col\">\n          <div class=\"profile-frame\"><img src=\"../../../assets/imgs/profile-img.jpg\" class=\"profile-img\"></div>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-button (click)=\"editprofile()\" class=\"profile-btn\" fill=\"outline\" size=\"small\">\n            <ion-icon name=\"settings\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        \n        <!-- <ion-col size=\"2\">\n          <ion-button routerLink=\"/scorecard\" class=\"profile-btn\" fill=\"outline\" size=\"small\">\n            New Scorecard\n          </ion-button>\n        </ion-col> -->\n      </ion-row>\n      <ion-row padding-left class=\"name-row\">\n        {{first}} {{last}}\n      </ion-row>\n      <ion-row padding-left class=\"twitter-name\">\n        {{email}}\n      </ion-row>\n\n      \n\n    </ion-grid>\n    <ion-card *ngIf=\"isEdit\">\n      <ion-label>First Name</ion-label>\n      <ion-input [(ngModel)]=\"first\"> </ion-input>\n      <ion-label>Last Name</ion-label>\n      <ion-input [(ngModel)]=\"last\"> </ion-input>\n      <ion-button (click)=\"update()\">update</ion-button>\n\n    </ion-card>\n\n\n    <ion-card text-center *ngFor=\"let score of scores | async\">\n      <ion-card-header>\n        <ion-card-title>\n          Date: {{score.date?.seconds*1000 | date: 'dd/MM/yyyy H:mm' }}\n        </ion-card-title>\n\n        <ion-card-title color=\"success\" *ngIf=\"score.win\">\n          Win\n        </ion-card-title>\n        <ion-card-title color=\"danger\" *ngIf=\"!score.win\">\n          Lose\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-item color=\"danger\" *ngIf=\"score.Ap\">\n                {{score.A}}:{{ score.totalA }}\n              </ion-item>\n              <ion-item color=\"success\" *ngIf=\"!score.Ap\">\n                {{score.A}}:{{ score.totalA }}\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"2\">\n              <ion-item color=\"danger\" *ngIf=\"score.Bp\">\n                {{score.B}}:{{ score.totalB }}\n              </ion-item>\n              <ion-item color=\"success\" *ngIf=\"!score.Bp\">\n                {{score.B}}:{{ score.totalB }}\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"2\">\n              <ion-item color=\"danger\" *ngIf=\"score.Cp\">\n                {{score.C}}:{{ score.totalC }}\n              </ion-item>\n              <ion-item color=\"success\" *ngIf=\"!score.Cp\">\n                {{score.C}}:{{ score.totalC }}\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"2\">\n              <ion-item color=\"danger\" *ngIf=\"score.Dp\">\n                {{score.D}}:{{ score.totalD }}\n              </ion-item>\n              <ion-item color=\"success\" *ngIf=\"!score.Dp\">\n                {{score.D}}:{{ score.totalD }}\n              </ion-item>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n\n\n      </ion-card-content>\n\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-img {\n  height: 150px; }\n\n.profile-img-col {\n  margin-top: -40px; }\n\n.profile-frame {\n  background: #fff;\n  padding: 4px;\n  border-radius: 5px; }\n\n.profile-img {\n  border-radius: 5px; }\n\n.profile-btn {\n  border-radius: 5px; }\n\n.name-row {\n  font-size: 1.9rem; }\n\n.twitter-name {\n  color: #8a9fa8; }\n\n.muted {\n  color: #8a9fa8;\n  font-size: 1rem; }\n\n.share-row {\n  height: 30px; }\n\nhr {\n  background: var(--ion-color-medium); }\n\n.header-image {\n  background: url('profile.jpeg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: 30vh; }\n\n.main-content {\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbGVldGVsZWN0cm9uaWNzL0RvY3VtZW50cy9hcHAgcHJvamVjdC9nb2xmbmV3L3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUVuQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxtQ0FBbUMsRUFBQTs7QUFHdkM7RUFDSSwrQkFBb0Q7RUFDcEQsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW1nIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xufVxuLnByb2ZpbGUtaW1nLWNvbCB7XG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XG59XG4ucHJvZmlsZS1mcmFtZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnByb2ZpbGUtaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucHJvZmlsZS1idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5uYW1lLXJvdyB7XG4gICAgZm9udC1zaXplOiAxLjlyZW07XG59XG4udHdpdHRlci1uYW1lIHtcbiAgICBjb2xvcjogIzhhOWZhODtcbn1cbi5tdXRlZCB7XG4gICAgY29sb3I6ICM4YTlmYTg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuLnNoYXJlLXJvdyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuaHIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4uaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3Byb2ZpbGUuanBlZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMzB2aDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, auth, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.db = db;
        this.id = this.auth.getprofile();
        this.imageCollection = db.collection('scores', function (ref) { return ref.where('user', '==', _this.id); });
        this.scores = this.imageCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            console.log(id);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
        this.auth.getinfo().subscribe((function (a) {
            _this.first = a.first_name;
            _this.last = a.last_name;
            _this.email = a.email;
            console.log(_this.first + _this.last + _this.email);
        }));
        // let documentRef = db.doc('scores/' + this.id+'/scores/'+this.dataid);
        // documentRef.get().subscribe((documentSnapshot) => {
        //   if (documentSnapshot.exists) {
        //     const data = documentSnapshot.data();
        //     this.totalscore = data.total;
        //     console.log(`Data: ` + this.totalscore);
        //   }
        // });
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.editprofile = function () {
        this.isEdit = !this.isEdit;
    };
    ProfilePage.prototype.update = function () {
        this.isEdit = false;
        var a = {
            first_name: this.first,
            last_name: this.last,
        };
        this.auth.updateprofile(a);
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map