(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <!-- Section: Contact v.3 -->\n  <section class=\"contact-section my-5\">\n\n    <!-- Form with header -->\n    <div class=\"card\">\n\n      <!-- Grid row -->\n      <div class=\"row\">\n\n        <!-- Grid column -->\n        <div class=\"col-lg-8\">\n\n          <div class=\"card-body form\">\n\n            <!-- Header -->\n            <h3 class=\"mt-4\">\n              <mdb-icon fas icon=\"envelope\" class=\"pr-2\"></mdb-icon>Write to us:\n            </h3>\n\n            <!-- Grid row -->\n            <div class=\"row\">\n\n              <!-- Grid column -->\n              <div class=\"col-md-6\">\n                <div class=\"md-form mb-0\">\n                  <input type=\"text\" id=\"form-contact-name\" class=\"form-control\" mdbInput>\n                  <label for=\"form-contact-name\" class=\"\">Your name</label>\n                </div>\n              </div>\n              <!-- Grid column -->\n\n              <!-- Grid column -->\n              <div class=\"col-md-6\">\n                <div class=\"md-form mb-0\">\n                  <input type=\"text\" id=\"form-contact-email\" class=\"form-control\" mdbInput>\n                  <label for=\"form-contact-email\" class=\"\">Your email</label>\n                </div>\n              </div>\n              <!-- Grid column -->\n\n            </div>\n            <!-- Grid row -->\n\n            <!-- Grid row -->\n            <div class=\"row\">\n\n              <!-- Grid column -->\n              <div class=\"col-md-6\">\n                <div class=\"md-form mb-0\">\n                  <input type=\"text\" id=\"form-contact-phone\" class=\"form-control\" mdbInput>\n                  <label for=\"form-contact-phone\" class=\"\">Your phone</label>\n                </div>\n              </div>\n              <!-- Grid column -->\n\n              <!-- Grid column -->\n              <div class=\"col-md-6\">\n                <div class=\"md-form mb-0\">\n                  <input type=\"text\" id=\"form-contact-company\" class=\"form-control\" mdbInput>\n                  <label for=\"form-contact-company\" class=\"\">Your company</label>\n                </div>\n              </div>\n              <!-- Grid column -->\n\n            </div>\n            <!-- Grid row -->\n\n            <!-- Grid row -->\n            <div class=\"row\">\n\n              <!-- Grid column -->\n              <div class=\"col-md-12\">\n                <div class=\"md-form mb-0\">\n                  <textarea type=\"text\" id=\"form-contact-message\" class=\"form-control md-textarea\" rows=\"3\"\n                    mdbInput></textarea>\n                  <label for=\"form-contact-message\">Your message</label>\n                  <a mdbBtn floating=\"true\" size=\"lg\" color=\"blue\" mdbWavesEffect\n                    style=\"float: right; bottom: 3rem; position: relative; margin: 10px 0; width: 60px; height: 60px; border-radius: 50%; padding: 11px 0 0px 14px; font-size: 26px; box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);color: white; background: #2196f3!important;\">\n                    <mdb-icon far icon=\"paper-plane\"></mdb-icon>\n                  </a>\n                </div>\n              </div>\n              <!-- Grid column -->\n\n            </div>\n            <!-- Grid row -->\n\n          </div>\n\n        </div>\n        <!-- Grid column -->\n\n        <!-- Grid column -->\n        <div class=\"col-lg-4\">\n\n          <div class=\"card-body contact text-center h-100 white-text bg-pink-200\">\n\n            <h3 class=\"my-4 pb-2\">Contact information</h3>\n            <ul class=\"text-lg-left list-unstyled ml-4\">\n              <li>\n                <p>\n                  <mdb-icon fas icon=\"map-marked\" class=\"pr-2\"></mdb-icon>New York, 94126, USA\n                </p>\n              </li>\n              <li>\n                <p>\n                  <mdb-icon fas icon=\"phone\" class=\"pr-2\"></mdb-icon>+ 01 234 567 89\n                </p>\n              </li>\n              <li>\n                <p>\n                  <mdb-icon fas icon=\"envelope\" class=\"pr-2\"></mdb-icon>contact@example.com\n                </p>\n              </li>\n            </ul>\n            <hr class=\"hr-light my-4\">\n            <ul class=\"list-inline text-center list-unstyled\">\n              <li class=\"list-inline-item\">\n                <a class=\"p-2 fa-lg tw-ic\">\n                  <mdb-icon fab icon=\"twitter\"></mdb-icon>\n                </a>\n              </li>\n              <li class=\"list-inline-item\">\n                <a class=\"p-2 fa-lg li-ic\">\n                  <mdb-icon fab icon=\"linkedin-in\"> </mdb-icon>\n                </a>\n              </li>\n              <li class=\"list-inline-item\">\n                <a class=\"p-2 fa-lg ins-ic\">\n                  <mdb-icon fab icon=\"instagram\"> </mdb-icon>\n                </a>\n              </li>\n            </ul>\n\n          </div>\n\n        </div>\n        <!-- Grid column -->\n\n      </div>\n      <!-- Grid row -->\n\n    </div>\n    <!-- Form with header -->\n\n  </section>\n  <!-- Section: Contact v.3 -->\n</div>");

/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var routes = [{
        path: '',
        component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __importDefault(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-about-about-module.js.map