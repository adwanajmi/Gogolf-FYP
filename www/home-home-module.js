(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");








var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__["NgCalendarModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Sources</ion-title>\n    <ion-buttons slot=\"end\">\n      RM {{balancevar}}\n      <ion-button routerLink=\"/login\" routerDirection=\"root\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n      \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-card text-center>\n    <ion-card-header>\n      <ion-card-title>Payment info</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-input placeholder=\"User Id\" [(ngModel)]=\"user2\"></ion-input>\n    </ion-card-content>\n  \n    <ion-card-content>\n      <ion-input placeholder=\"Value\" [(ngModel)]=\"value\"></ion-input>\n    </ion-card-content>\n\n    <ion-button (click)=\"scanCode()\">\n      Scan\n    </ion-button>\n    <ion-button (click)=\"pay()\">Submit</ion-button>\n\n  </ion-card> -->\n  <div class=\"ion-padding\">\n\n    <ion-card text-center>\n      <ion-card-header>\n        <ion-item >\n          <img src=\"assets/imgs/peak-hour.jpg\" width=\"100%\" alt=\"your image\">\n        </ion-item>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label>Booking</ion-label>\n          <ion-select (ionChange)=\"selection()\" [(ngModel)]=\"courseselect\">\n            <ion-select-option *ngFor=\"let course of courses\">{{course}}</ion-select-option>\n    \n    \n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>start time</ion-label>\n          <ion-select (ionChange)=\"test()\" [(ngModel)]=\"timeselect\">\n    \n            <ion-select-option *ngFor=\"let book of bookedcheckinverse\">\n              <!-- <ng-container *ngIf=\"!book\">\n              {{book}}\n            </ng-container>\n            <ng-container *ngIf=\"book\"> -->\n              {{book}}\n              <!-- </ng-container> -->\n            </ion-select-option>\n            <!-- <ion-select-option value=10 >10am-12pm</ion-select-option>\n            <ion-select-option value=12 >12pm-2pm</ion-select-option>\n            <ion-select-option value=14 >2pm-4pm</ion-select-option>\n            <ion-select-option value=16 >4pm-6pm</ion-select-option>\n            <ion-select-option value=18 >6pm-8pm</ion-select-option>\n            <ion-select-option value=20 >8pm-10pm</ion-select-option>\n            <ion-select-option value=22 >10pm-12am</ion-select-option> -->\n    \n    \n          </ion-select>\n        </ion-item>\n        <ion-button (click)=\"pay()\">Book</ion-button>\n        Total: RM {{value}}\n      </ion-card-content>\n  \n     \n  \n    </ion-card>\n    \n\n\n    <calendar [eventSource]=\"eventSource\" [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\"\n      (onCurrentDateChanged)=\"onCurrentDateChanged($event)\" (onRangeChanged)=\"reloadSource(startTime, endTime)\"\n      (onEventSelected)=\"onEventSelected($event)\" (onTitleChanged)=\"onViewTitleChanged($event)\"\n      (onTimeSelected)=\"onTimeSelected($event)\" step=\"30\">\n\n    </calendar>\n\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".source-block {\n  height: 30vh;\n  align-items: center;\n  display: flex;\n  margin-bottom: 2px; }\n  .source-block .name {\n    font-weight: 600;\n    font-size: 2em;\n    text-align: center;\n    width: 100%;\n    color: #fff; }\n  .bg-1 {\n  background: linear-gradient(var(--myvar), var(--myvar)), url('source-1.jpeg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover; }\n  .bg-2 {\n  background: linear-gradient(var(--myvar), var(--myvar)), url('source-2.jpeg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover; }\n  .bg-3 {\n  background: linear-gradient(var(--myvar), var(--myvar)), url('source-3.jpeg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover; }\n  ion-slide {\n  background: var(--ion-color-light);\n  display: block; }\n  ion-slide p {\n    font-size: 9pt;\n    margin-top: 0; }\n  ion-slide ion-avatar {\n    display: inline-block;\n    margin-top: 10px; }\n  ion-slide ion-avatar img {\n      border: 2px solid var(--ion-color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbGVldGVsZWN0cm9uaWNzL0RvY3VtZW50cy9hcHAgcHJvamVjdC9nb2xmbmV3L3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0VBSnRCO0lBT1EsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVcsRUFBQTtFQUluQjtFQUNJLDZFQUc2QztFQUN6Qyw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQixFQUFBO0VBRzlCO0VBQ0ksNkVBRzZDO0VBQ3pDLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCLEVBQUE7RUFHOUI7RUFDSSw2RUFHNkM7RUFDekMsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0IsRUFBQTtFQUc5QjtFQUNJLGtDQUFrQztFQUNsQyxjQUFjLEVBQUE7RUFGbEI7SUFLUSxjQUFjO0lBQ2QsYUFBYSxFQUFBO0VBTnJCO0lBVVEscUJBQXFCO0lBQ3JCLGdCQUFnQixFQUFBO0VBWHhCO01BY1ksMENBQTBDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvdXJjZS1ibG9jayB7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG5cbiAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbn1cblxuLmJnLTEge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdmFyKC0tbXl2YXIpLCBcbiAgICAgICAgdmFyKC0tbXl2YXIpXG4gICAgICApLHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3Mvc291cmNlLTEuanBlZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYmctMiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB2YXIoLS1teXZhciksIFxuICAgICAgICB2YXIoLS1teXZhcilcbiAgICAgICksdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy9zb3VyY2UtMi5qcGVnJyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5iZy0zIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHZhcigtLW15dmFyKSwgXG4gICAgICAgIHZhcigtLW15dmFyKVxuICAgICAgKSx1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3NvdXJjZS0zLmpwZWcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaW9uLXNsaWRlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogOXB0O1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var HomePage = /** @class */ (function () {
    function HomePage(auth, navCtrl, db) {
        var _this = this;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.db = db;
        this.eventSource = [];
        this.counter = 0;
        this.bookedcheck = [];
        this.bookedcheckinverse = [];
        this.courses = ["9 holes", "18 holes"];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
        this.selectedDate = new Date();
        this.user2 = 'SwAVL8HfTmQ9T80hlaDEkk1WPMm2';
        this.balancevar = 0;
        this.balancevare = 0;
        this.value = 0;
        this.id = this.auth.getprofile();
        this.auth.getinfo().subscribe((function (a) {
            _this.balancevar = +a.balance;
            console.log(_this.balancevar);
        }));
    }
    HomePage.prototype.addNewEvent = function () {
        var start = this.selectedDate;
        var end = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        start.setHours(this.timeselect);
        var endhour = +this.timeselect + 2;
        end.setHours(endhour);
        console.log("start is " + start);
        console.log("end is " + end);
        var event = {
            title: 'Booked',
            startTime: start,
            endTime: end,
            creator: this.id,
            course: this.courseselect,
            date: start.getDate(),
            allDay: false,
        };
        this.db.collection('events').add(event);
        this.navCtrl.navigateForward('app/mybookings');
        this.updatecustomer();
        this.bookedcheckinverse = null;
    };
    HomePage.prototype.updatecustomer = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(_this.id).update({ customer: true })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    HomePage.prototype.onViewTitleChanged = function (title) {
        console.log(title);
    };
    HomePage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    HomePage.prototype.onTimeSelected = function (ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
        this.selectedDate = ev.selectedTime;
        this.checkday = ev.selectedTime.getDay();
        console.log("day is" + this.checkday);
    };
    HomePage.prototype.onCurrentDateChanged = function (event) {
        var _this = this;
        this.date = event.getDate();
        this.db.collection('events', function (ref) { return ref.where('date', '==', event.getDate()); }).snapshotChanges().subscribe(function (colSnap) {
            _this.eventSource = [];
            _this.counter = 0;
            _this.bookedcheckinverse = ["8", "10", "12", "14", "16", "18", "20", "22"];
            colSnap.forEach(function (snap) {
                var event2 = snap.payload.doc.data();
                event2.id = snap.payload.doc.id;
                event2.startTime = event2.startTime.toDate();
                event2.endTime = event2.endTime.toDate();
                _this.startcheck = event2.startTime.getHours();
                _this.coursecheck = event2.course;
                _this.checkdate = event2.date;
                if (_this.startcheck && _this.checkdate == event.getDate()) {
                    _this.bookedcheck[_this.counter] = _this.startcheck;
                    _this.bookedcheckinverse = _this.bookedcheckinverse.filter(function (h) { return h != _this.bookedcheck[_this.counter]; });
                    console.log(_this.bookedcheckinverse);
                    _this.counter++;
                }
                _this.eventSource.push(event2);
            });
        });
    };
    HomePage.prototype.test = function () {
        var _this = this;
        console.log("success bos");
        console.log(this.timeselect);
        // this.eventSource = [];
        // let ev: any;
        // this.eventSource.push(ev);
        this.db.collection('hours', function (ref) { return ref.where('name', '==', +_this.timeselect); }).snapshotChanges().subscribe(function (colSnap) {
            colSnap.forEach(function (snap) {
                var event = snap.payload.doc.data();
                event.id = snap.payload.doc.id;
                console.log("price for day" + event[4]);
                if (_this.courseselect == "9 holes") {
                    _this.value = +event.price;
                }
                else if (_this.courseselect == "18 holes") {
                    _this.value = +event.price;
                    _this.value = _this.value * 2;
                }
                _this.value = _this.value * event[_this.checkday];
            });
        });
    };
    HomePage.prototype.selection = function () {
        this.bookedcheckinverse = null;
        this.timeselect = null;
    };
    HomePage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    HomePage.prototype.pay = function () {
        var _this = this;
        // this.balancevare = this.balancevare + this.value
        if (this.balancevar >= this.value) {
            this.updateval = false;
            this.auth.getinfore(this.user2).subscribe((function (a) {
                _this.balancevare = +a.balance;
                if (_this.updateval == false) {
                    _this.updateval = true;
                    _this.balancevare = +_this.balancevare + +_this.value;
                    _this.auth.updatebalancere(_this.user2, { balance: +_this.balancevare });
                    console.log(_this.balancevare);
                }
            }));
            this.balancevar = this.balancevar - this.value;
            this.auth.updatebalance({ balance: this.balancevar });
            this.addNewEvent();
        }
        else {
            console.log('not enough balance');
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map