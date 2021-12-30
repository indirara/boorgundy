(self["webpackChunkindirara_github_io"] = self["webpackChunkindirara_github_io"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 1410:
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsComponent": () => (/* binding */ AboutUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class AboutUsComponent {
    constructor() { }
    ngOnInit() { }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 2, vars: 0, template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about-us works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _intro_section_intro_section_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-section/intro-section.component */ 5388);
/* harmony import */ var _our_approach_our_approach_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./our-approach/our-approach.component */ 6465);
/* harmony import */ var _buttons_see_packages_see_packages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/see-packages/see-packages.component */ 5738);
/* harmony import */ var _buttons_email_us_email_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/email-us/email-us.component */ 7651);
/* harmony import */ var _our_work_our_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./our-work/our-work.component */ 9636);
/* harmony import */ var _buttons_see_insta_see_insta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons/see-insta/see-insta.component */ 1814);
/* harmony import */ var _package_overview_package_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./package-overview/package-overview.component */ 8912);
/* harmony import */ var _inquiry_form_inquiry_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inquiry-form/inquiry-form.component */ 9893);










class AppComponent {
    constructor() {
        this.logo = 'boorgundy';
        this.isCollapsed = true;
    }
    onRightClick(event) {
        event.preventDefault();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("contextmenu", function AppComponent_contextmenu_HostBindingHandler($event) { return ctx.onRightClick($event); });
    } }, decls: 17, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light"], [1, "container-fluid"], ["href", ".", 1, "nav-logo"], ["src", "../assets/icons/logo-pink.svg", "alt", "", "width", "", "height", "24", 1, "logo-image"], [1, "container"], [1, "row", "mt-2", "text-center"], [1, "row", "mt-2", "mb-3", "text-center"], [1, "row", "text-center", "mb-5"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-intro-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-our-approach");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-see-packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "app-email-us");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "app-our-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "app-see-insta");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "app-package-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "app-inquiry-form");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavbar, _intro_section_intro_section_component__WEBPACK_IMPORTED_MODULE_0__.IntroSectionComponent, _our_approach_our_approach_component__WEBPACK_IMPORTED_MODULE_1__.OurApproachComponent, _buttons_see_packages_see_packages_component__WEBPACK_IMPORTED_MODULE_2__.SeePackagesComponent, _buttons_email_us_email_us_component__WEBPACK_IMPORTED_MODULE_3__.EmailUsComponent, _our_work_our_work_component__WEBPACK_IMPORTED_MODULE_4__.OurWorkComponent, _buttons_see_insta_see_insta_component__WEBPACK_IMPORTED_MODULE_5__.SeeInstaComponent, _package_overview_package_overview_component__WEBPACK_IMPORTED_MODULE_6__.PackageOverviewComponent, _inquiry_form_inquiry_form_component__WEBPACK_IMPORTED_MODULE_7__.InquiryFormComponent], styles: [".nav-logo[_ngcontent-%COMP%] {\n  padding-top: 5%;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  text-decoration: none;\n}\n\n.logo-image[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n  height: 9rem;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  margin-bottom: 10vmin;\n}\n\n.navbar-menu[_ngcontent-%COMP%] {\n  color: #6e1423;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #6e1423;\n  font-family: Forum;\n  font-weight: normal;\n  padding-top: 20px;\n  padding-right: 20px;\n  font-size: 26px;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #F9104E;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  color: transparent;\n  border-color: transparent;\n}\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-color: red;\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n  mask-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFx1dGlsaXRpZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQ25CVTtBRGlCWjs7QUFLQTtFQUNFLGNDdkJVO0VEd0JWLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsY0M1Qlk7QUQwQmQ7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLCtQQUFBO0VBQ0EsdVBBQUE7QUFGRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi91dGlsaXRpZXMvdmFyaWFibGVzJztcblxuLy8gbmF2YmFyIGJvb3RzdHJhcCBvdmVycmlkZXNcbi5uYXYtbG9nbyB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubG9nby1pbWFnZSB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIGhlaWdodDogOXJlbTtcbn1cblxuLm5hdmJhciB7XG4gIG1hcmdpbi1ib3R0b206IDEwdm1pbjtcbn1cblxuLm5hdmJhci1tZW51IHtcbiAgY29sb3I6ICRib29yZ3VuZHk7XG59XG5cbi5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiAkYm9vcmd1bmR5O1xuICBmb250LWZhbWlseTogRm9ydW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogJHJlZC1jcmF5b2xhOyAvLyBjaGFuZ2UgdG8gRkYwMDQwP1xufVxuXG4ubmF2YmFyLXRvZ2dsZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7IC8vIGNvbnRvdXIgb24gY2xpY2tcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMwIDMwJyUzZSUzY3BhdGggc3Ryb2tlPSdyZ2JhJTI4MCwgMCwgMCwgMC41NSUyOScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2VcIik7XG4gIG1hc2staW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzAgMzAnJTNlJTNjcGF0aCBzdHJva2U9J3JnYmElMjgwLCAwLCAwLCAwLjU1JTI5JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNlJTNjL3N2ZyUzZVwiKTtcbn1cbiIsIi8vIGJhc2UgYnJhbmQgY29sb3Vyc1xyXG4kZGFyay1zaWVubmE6ICM0MDBBMTA7XHJcbiRib29yZ3VuZHk6ICM2ZTE0MjM7XHJcbiRhbnRpcXVlLXJ1Ynk6ICM4NTE4MkE7XHJcbiRjcmltc29uOiAjREExRTM3O1xyXG4kdGFydC1vcmFuZ2U6ICNGODNCMzU7XHJcbiRyZWQtY3JheW9sYTogI0Y5MTA0RTtcclxuJHJhZGljYWwtcmVkOiAjRkYyRTY2O1xyXG4kbWltaS1waW5rOiAjRkZENkUxO1xyXG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us/about-us.component */ 1410);
/* harmony import */ var _how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./how-we-work/how-we-work.component */ 9050);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _buttons_email_us_email_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/email-us/email-us.component */ 7651);
/* harmony import */ var _buttons_see_insta_see_insta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/see-insta/see-insta.component */ 1814);
/* harmony import */ var _inquiry_form_inquiry_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inquiry-form/inquiry-form.component */ 9893);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _intro_section_intro_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro-section/intro-section.component */ 5388);
/* harmony import */ var _our_approach_our_approach_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./our-approach/our-approach.component */ 6465);
/* harmony import */ var _our_work_our_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./our-work/our-work.component */ 9636);
/* harmony import */ var _buttons_see_packages_see_packages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buttons/see-packages/see-packages.component */ 5738);
/* harmony import */ var _package_overview_package_overview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./package-overview/package-overview.component */ 8912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_1__.AboutUsComponent,
        _how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_2__.HowWeWorkComponent,
        _buttons_email_us_email_us_component__WEBPACK_IMPORTED_MODULE_3__.EmailUsComponent,
        _buttons_see_insta_see_insta_component__WEBPACK_IMPORTED_MODULE_4__.SeeInstaComponent,
        _inquiry_form_inquiry_form_component__WEBPACK_IMPORTED_MODULE_5__.InquiryFormComponent,
        _intro_section_intro_section_component__WEBPACK_IMPORTED_MODULE_6__.IntroSectionComponent,
        _our_approach_our_approach_component__WEBPACK_IMPORTED_MODULE_7__.OurApproachComponent,
        _our_work_our_work_component__WEBPACK_IMPORTED_MODULE_8__.OurWorkComponent,
        _buttons_see_packages_see_packages_component__WEBPACK_IMPORTED_MODULE_9__.SeePackagesComponent,
        _package_overview_package_overview_component__WEBPACK_IMPORTED_MODULE_10__.PackageOverviewComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 7651:
/*!********************************************************!*\
  !*** ./src/app/buttons/email-us/email-us.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailUsComponent": () => (/* binding */ EmailUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class EmailUsComponent {
    constructor() {
        this.text = 'SEND US A MESSAGE';
        this.email = 'boorgundy@gmail.com';
    }
    ngOnInit() { }
    sendEmail() {
        location.href = `mailto:${this.email}`;
    }
}
EmailUsComponent.ɵfac = function EmailUsComponent_Factory(t) { return new (t || EmailUsComponent)(); };
EmailUsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailUsComponent, selectors: [["app-email-us"]], decls: 2, vars: 1, consts: [["type", "button", 1, "btn", "btn-social", 3, "click"]], template: function EmailUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailUsComponent_Template_button_click_0_listener() { return ctx.sendEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
    } }, encapsulation: 2 });


/***/ }),

/***/ 1814:
/*!**********************************************************!*\
  !*** ./src/app/buttons/see-insta/see-insta.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeInstaComponent": () => (/* binding */ SeeInstaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SeeInstaComponent {
    constructor() {
        this.instaUrl = 'https://www.instagram.com/boorgundy/';
        this.text = 'SEE MORE ON INSTAGRAM';
    }
    ngOnInit() { }
    seeInsta() {
        window.open(this.instaUrl);
    }
    seeWork(el) {
        el.scrollIntoView();
    }
}
SeeInstaComponent.ɵfac = function SeeInstaComponent_Factory(t) { return new (t || SeeInstaComponent)(); };
SeeInstaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeeInstaComponent, selectors: [["app-see-insta"]], decls: 2, vars: 1, consts: [["type", "button", 1, "btn", "btn-social", 3, "click"]], template: function SeeInstaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeeInstaComponent_Template_button_click_0_listener() { return ctx.seeInsta(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
    } }, encapsulation: 2 });


/***/ }),

/***/ 5738:
/*!****************************************************************!*\
  !*** ./src/app/buttons/see-packages/see-packages.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeePackagesComponent": () => (/* binding */ SeePackagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SeePackagesComponent {
    constructor() {
        this.text = 'SEE OUR PACKAGES';
    }
    ngOnInit() { }
    scrollToPackages() {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
}
SeePackagesComponent.ɵfac = function SeePackagesComponent_Factory(t) { return new (t || SeePackagesComponent)(); };
SeePackagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeePackagesComponent, selectors: [["app-see-packages"]], decls: 2, vars: 1, consts: [["type", "button", 1, "btn", "btn-social", "px-custom", 3, "click"]], template: function SeePackagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeePackagesComponent_Template_button_click_0_listener() { return ctx.scrollToPackages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
    } }, encapsulation: 2 });


/***/ }),

/***/ 9050:
/*!******************************************************!*\
  !*** ./src/app/how-we-work/how-we-work.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowWeWorkComponent": () => (/* binding */ HowWeWorkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class HowWeWorkComponent {
    constructor() { }
    ngOnInit() { }
}
HowWeWorkComponent.ɵfac = function HowWeWorkComponent_Factory(t) { return new (t || HowWeWorkComponent)(); };
HowWeWorkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HowWeWorkComponent, selectors: [["app-how-we-work"]], decls: 2, vars: 0, template: function HowWeWorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "how-we-work works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 9893:
/*!********************************************************!*\
  !*** ./src/app/inquiry-form/inquiry-form.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryFormComponent": () => (/* binding */ InquiryFormComponent)
/* harmony export */ });
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs-com */ 8040);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);





function InquiryFormComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "use", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Thanks for the inquiry, we'll get back to you shortly!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InquiryFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "use", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Something went wrong with sending your inquiry! Please reach out to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "boorgundy@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InquiryFormComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InquiryFormComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InquiryFormComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Wrong format, please try again ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InquiryFormComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Business name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InquiryFormComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Website and/or Instagram handle required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InquiryFormComponent_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const businessTimeOption_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](businessTimeOption_r12);
} }
function InquiryFormComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Brand information required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InquiryFormComponent_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const packageOption_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](packageOption_r13);
} }
function InquiryFormComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Budget estimate required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InquiryFormComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Tentative time frame required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class InquiryFormComponent {
    constructor() {
        // emailjs constants
        this.mailServiceId = 'boorgundy_mail_service';
        this.mailTemplateId = 'template_9jsvubo';
        this.mailUserId = 'user_MB34gpowffdtFKV4qCfPe';
        // alert controls
        this.shouldShowSuccessAlert = false;
        this.shouldShowFailureAlert = false;
        this.businessTimeOptions = ['NOT LAUNCHED YET', 'LESS THAN A YEAR', '1-3 YEARS', '5+ YEARS'];
        this.packageOptions = [
            'NOT SURE',
            'THE BURGUNDY',
            'THE CRIMSON',
            'THE TANGERINE',
            'THE ROSE',
            'PERSONALIZED PACKAGE',
        ];
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]);
        this.businessName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
        this.website = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
        this.businessTime = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.businessTimeOptions[0], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
        this.aboutYou = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
        this.package = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.packageOptions[0], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
        this.budget = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
        this.targetDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
        this.additionalInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
        this.inquiryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            name: this.name,
            email: this.email,
            businessName: this.businessName,
            website: this.website,
            businessTime: this.businessTime,
            aboutYou: this.aboutYou,
            package: this.package,
            budget: this.budget,
            targetDate: this.targetDate,
            additionalInfo: this.additionalInfo,
        });
    }
    ngOnInit() { }
    submit() {
        emailjs_com__WEBPACK_IMPORTED_MODULE_0__.default.send(this.mailServiceId, this.mailTemplateId, this.inquiryForm.value, this.mailUserId).then((result) => {
            this.handleEmailSuccess();
            console.log(result.text);
        }, (error) => {
            this.handleEmailFailure();
            console.log(error.text);
        });
    }
    handleEmailSuccess() {
        this.shouldShowSuccessAlert = true;
        this.shouldShowFailureAlert = false;
        this.inquiryForm.disable();
    }
    handleEmailFailure() {
        this.shouldShowFailureAlert = true;
        this.shouldShowSuccessAlert = false;
        this.inquiryForm.disable();
    }
}
InquiryFormComponent.ɵfac = function InquiryFormComponent_Factory(t) { return new (t || InquiryFormComponent)(); };
InquiryFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InquiryFormComponent, selectors: [["app-inquiry-form"]], decls: 96, vars: 44, consts: [["xmlns", "http://www.w3.org/2000/svg", 2, "display", "none"], ["id", "check-circle-fill", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"], ["id", "info-fill", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"], ["id", "exclamation-triangle-fill", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"], [1, "container"], [3, "formGroup", "ngSubmit"], ["class", "alert alert-success d-flex align-items-center", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger d-flex align-items-center", "role", "alert", 4, "ngIf"], [1, "form-group", "row", "name"], [1, "col-xs-8"], [1, "mb-3"], ["for", "name"], ["type", "text", "formControlName", "name", "name", "name", "id", "name", 1, "form-control"], ["class", "my-2 form-error-prompt", 4, "ngIf"], [1, "form-group", "row", "email"], ["for", "email"], ["type", "text", "formControlName", "email", "name", "email", "id", "email", 1, "form-control"], [1, "form-group", "row", "businessName"], ["for", "businessName"], ["type", "text", "formControlName", "businessName", "name", "businessName", "id", "businessName", 1, "form-control"], [1, "form-group", "row", "website"], ["for", "website"], ["type", "text", "formControlName", "website", "name", "website", "id", "website", 1, "form-control"], [1, "form-group", "row", "businessTime"], ["for", "businessTime"], ["formControlName", "businessTime", "name", "businessTime", "id", "businessTime", 1, "form-control"], [4, "ngFor", "ngForOf"], [1, "form-group", "row", "aboutYou"], ["for", "aboutYou"], ["type", "text", "formControlName", "aboutYou", "name", "aboutYou", "id", "aboutYou", 1, "form-control"], [1, "form-group", "row", "package"], ["for", "package"], ["formControlName", "package", "name", "package", "id", "package", 1, "form-control", "minimal"], [1, "form-group", "row", "budget"], ["for", "budget"], ["type", "text", "formControlName", "budget", "name", "budget", "id", "budget", 1, "form-control"], [1, "form-group", "row", "targetDate"], ["for", "targetDate"], ["type", "text", "formControlName", "targetDate", "name", "targetDate", "id", "targetDate", 1, "form-control"], [1, "form-group", "row", "additionalInfo"], ["for", "additionalInfo"], ["type", "text", "formControlName", "additionalInfo", "name", "additionalInfo", "id", "additionalInfo", 1, "form-control"], [1, "form-group", "row"], ["id", "button-container", 1, "col-xs-8"], ["type", "submit", 1, "btn", "btn-inquiry-submit", 3, "disabled"], ["role", "alert", 1, "alert", "alert-success", "d-flex", "align-items-center"], ["width", "24", "height", "24", "role", "img", "aria-label", "Success:", 1, "bi", "flex-shrink-0", "me-2"], [0, "xlink", "href", "#check-circle-fill"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center"], ["width", "24", "height", "24", "role", "img", "aria-label", "Danger:", 1, "bi", "flex-shrink-0", "me-2"], [0, "xlink", "href", "#exclamation-triangle-fill"], [1, "alert-text"], ["href", "mailto:boorgundy@gmail.com"], [1, "my-2", "form-error-prompt"]], template: function InquiryFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "symbol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "symbol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function InquiryFormComponent_Template_form_ngSubmit_8_listener() { return ctx.inquiryForm.valid && ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InquiryFormComponent_div_9_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, InquiryFormComponent_div_10_Template, 7, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, InquiryFormComponent_div_18_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "EMAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, InquiryFormComponent_div_26_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, InquiryFormComponent_div_27_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "BUSINESS NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, InquiryFormComponent_div_35_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "WEBSITE AND/OR INSTAGRAM HANDLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, InquiryFormComponent_div_43_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "HOW LONG HAVE YOU BEEN IN BUSINESS?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, InquiryFormComponent_option_51_Template, 2, 1, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "TELL US ABOUT YOUR BRAND & WHAT YOU ARE LOOKING FOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, InquiryFormComponent_div_59_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "WHAT PACKAGE ARE YOU INTERESTED IN?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, InquiryFormComponent_option_67_Template, 2, 1, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "DO YOU HAVE A BUDGET IN MIND?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, InquiryFormComponent_div_75_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "WHEN ARE YOU HOPING TO HAVE YOUR PROJECT COMPLETED BY?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, InquiryFormComponent_div_83_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "ADDITIONAL INFO (OPTIONAL)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.inquiryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.shouldShowSuccessAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.shouldShowFailureAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-errors", ctx.name.touched && ctx.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.name.touched && ctx.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.name.touched && (ctx.name.errors == null ? null : ctx.name.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-errors", ctx.email.touched && ctx.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.email.touched && ctx.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email.touched && (ctx.email.errors == null ? null : ctx.email.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email.touched && (ctx.email.errors == null ? null : ctx.email.errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-errors", ctx.businessName.touched && ctx.businessName.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.businessName.touched && ctx.businessName.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.businessName.touched && (ctx.businessName.errors == null ? null : ctx.businessName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-errors", ctx.website.touched && ctx.website.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.website.touched && ctx.website.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.website.touched && (ctx.website.errors == null ? null : ctx.website.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.businessTimeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-errors", ctx.aboutYou.touched && ctx.aboutYou.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.aboutYou.touched && ctx.aboutYou.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.aboutYou.touched && (ctx.aboutYou.errors == null ? null : ctx.aboutYou.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.packageOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-errors", ctx.budget.touched && ctx.budget.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.budget.touched && ctx.budget.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.budget.touched && (ctx.budget.errors == null ? null : ctx.budget.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-errors", ctx.targetDate.touched && ctx.targetDate.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.targetDate.touched && ctx.targetDate.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.targetDate.touched && (ctx.targetDate.errors == null ? null : ctx.targetDate.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btn-highlight", ctx.inquiryForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.inquiryForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"]], styles: ["label[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%], .form-error-prompt[_ngcontent-%COMP%] {\n  font-family: Forum;\n}\n\n.alert-text[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #FF0040;\n}\n\ninput.form-control[_ngcontent-%COMP%] {\n  border: 0;\n  border-bottom: 1px solid black;\n  border-radius: 0px;\n}\n\ninput.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: transparent;\n}\n\n\n\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px white inset !important;\n}\n\nselect.form-control[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  border-radius: 0px;\n  -webkit-appearance: menulist-button !important;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-top: 1vh;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n#button-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn-inquiry-submit[_ngcontent-%COMP%] {\n  border-color: black;\n  background-color: transparent;\n  font-family: Forum;\n  color: black;\n  background-color: transparent;\n  border-radius: 0;\n}\n\n.btn-highlight[_ngcontent-%COMP%]:hover, .btn-highlight[_ngcontent-%COMP%]:focus, .btn-highlight[_ngcontent-%COMP%]:active, .btn-highlight.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .dropdown-toggle.btn-highlight[_ngcontent-%COMP%] {\n  color: #FF0040;\n  border-color: #FF0040;\n}\n\n.has-errors[_ngcontent-%COMP%], .has-errors[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucXVpcnktZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7Ozs7RUFLRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UsU0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHRTtFQUNFLDZCQUFBO0FBREo7O0FBS0Esa0NBQUE7O0FBQ0E7Ozs7RUFJRSxxREFBQTtBQUZGOztBQUtBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFPRTtFQUNFLGdCQUFBO0FBSko7O0FBUUE7RUFDRSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTs7Ozs7RUFLRSxjQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFTRTs7RUFFRSxjQUFBO0FBTkoiLCJmaWxlIjoiaW5xdWlyeS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9zcmMvdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XG5cbmxhYmVsLFxuaW5wdXQsXG5zZWxlY3QsXG5vcHRpb24sXG4uZm9ybS1lcnJvci1wcm9tcHQge1xuICBmb250LWZhbWlseTogRm9ydW07XG59XG5cbi5hbGVydC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjRkYwMDQwO1xufVxuXG5pbnB1dC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuXG4gICY6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi8qIENoYW5nZSB0aGUgd2hpdGUgdG8gYW55IGNvbG9yICovXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCB3aGl0ZSBpbnNldCAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBtZW51bGlzdC1idXR0b24gIWltcG9ydGFudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiAxdmg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAvLyByZW1vdmVzIGlucHV0IGJveCBnbG93XG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn1cblxuI2J1dHRvbi1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4taW5xdWlyeS1zdWJtaXQge1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6IEZvcnVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYnRuLWhpZ2hsaWdodDpob3Zlcixcbi5idG4taGlnaGxpZ2h0OmZvY3VzLFxuLmJ0bi1oaWdobGlnaHQ6YWN0aXZlLFxuLmJ0bi1oaWdobGlnaHQuYWN0aXZlLFxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1oaWdobGlnaHQge1xuICBjb2xvcjogI0ZGMDA0MDtcbiAgYm9yZGVyLWNvbG9yOiAjRkYwMDQwO1xufVxuXG4uaGFzLWVycm9ycyB7XG4gICYsXG4gIC5jb250cm9sLWxhYmVsIHtcbiAgICBjb2xvcjogI2RjMzU0NTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 5388:
/*!**********************************************************!*\
  !*** ./src/app/intro-section/intro-section.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroSectionComponent": () => (/* binding */ IntroSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class IntroSectionComponent {
    constructor() { }
    ngOnInit() { }
}
IntroSectionComponent.ɵfac = function IntroSectionComponent_Factory(t) { return new (t || IntroSectionComponent)(); };
IntroSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroSectionComponent, selectors: [["app-intro-section"]], decls: 15, vars: 0, consts: [[1, "container"], [1, "d-flex", "justify-content-center", "text-center", "flex-rowflex-wrap", "header-margin"], ["src", "assets/media/header-boorgundy.jpg", 1, "img-responsive-margin"], [1, "row", "mt-3", "text-center"], [1, "row", "text-center"]], template: function IntroSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Boorgundy is a unique all-in-one service that provides your brand with high-quality editorial content without the hassle. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " London-based and internationally connected, we work as a dynamic duo to offer you the only service you\u2019ll need for top-notch content for your websites and other medias. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " We know how hard it is for brands to find a team of people who share the same vision for your perfect campaign: stylist, model, photographer, make-up artist, retoucher. We deliver all of that in one serving. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " We work in collaboration with you to bring your vision to life: from moodboards and ideation to vibrant, artful pieces of content that will push your brand forward. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".img-responsive-margin[_ngcontent-%COMP%] {\n  max-width: 90%;\n  min-width: auto;\n  min-height: auto;\n  height: auto;\n  object-fit: scale-down;\n  display: block;\n}\n\n@media only screen and (max-width: 500px) {\n  .img-responsive-margin[_ngcontent-%COMP%] {\n    max-height: 150px;\n    margin-top: -3rem;\n  }\n}\n\n.header-margin[_ngcontent-%COMP%] {\n  margin-top: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFLGlCQUFBO0FBRkYiLCJmaWxlIjoiaW50cm8tc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vc3JjL3V0aWxpdGllcy92YXJpYWJsZXMnO1xuXG4uaW1nLXJlc3BvbnNpdmUtbWFyZ2luIHtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1pbi13aWR0aDogYXV0bztcbiAgbWluLWhlaWdodDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuaW1nLXJlc3BvbnNpdmUtbWFyZ2luIHtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW4tdG9wOiAtM3JlbTtcbiAgfVxufVxuXG4uaGVhZGVyLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDEwcmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 6465:
/*!********************************************************!*\
  !*** ./src/app/our-approach/our-approach.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurApproachComponent": () => (/* binding */ OurApproachComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class OurApproachComponent {
    constructor() { }
    ngOnInit() { }
}
OurApproachComponent.ɵfac = function OurApproachComponent_Factory(t) { return new (t || OurApproachComponent)(); };
OurApproachComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurApproachComponent, selectors: [["app-our-approach"]], decls: 23, vars: 0, consts: [[1, "row", "g-0", "text-start", "mt-3"], [1, "col-sm"], ["src", "assets/media/our-approach.svg", 1, "img-responsive"], [1, "container"], [1, "row", "text-center", "mt-3"], [1, "d-flex", "justify-content-start", "flex-row", "mt-5", "flex-wrap"], [1, "p-2"], ["src", "assets/media/understanding.svg", 1, "img-responsive"], ["src", "assets/media/visualising.svg", 1, "img-responsive"], [1, "d-flex", "flex-wrap", "justify-content-end", "mb-3"], ["src", "assets/media/creating.svg", 1, "img-responsive"], ["src", "assets/media/delivering.svg", 1, "img-responsive"], [1, "row", "text-center", "mt-5"], [1, "row", "text-center"]], template: function OurApproachComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Creating unique concepts is at the forefront of what we do and we understand that every business has its own needs and goals. Our approach is focused on collaboration and creativity, without taking away your vision your unique business goals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Boorgundy isn\u2019t just to create assets for your brand. Our goal is to give you a sense of confidence in your business and help you feel more prepared to take your brand to the next level. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " These steps structure how we work and help us produce the best work for you but they are not set in stone; our main goal is to serve your business so our approach is flexible. If you feel that our packages are not a perfect fit, they can be tailored to meet your unique requirements - we\u2019d love to have a chat! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".img-responsive[_ngcontent-%COMP%] {\n  max-width: 90%;\n  height: auto;\n}\n\n.img-responsive-margin[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin-left: 20px;\n}\n\n.custom-justify-start[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n\n.custom-justify-end[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91ci1hcHByb2FjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREYiLCJmaWxlIjoib3VyLWFwcHJvYWNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9zcmMvdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XG5cbi5pbWctcmVzcG9uc2l2ZSB7XG4gIG1heC13aWR0aDogOTAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pbWctcmVzcG9uc2l2ZS1tYXJnaW4ge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5jdXN0b20tanVzdGlmeS1zdGFydCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmN1c3RvbS1qdXN0aWZ5LWVuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 9636:
/*!************************************************!*\
  !*** ./src/app/our-work/our-work.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurWorkComponent": () => (/* binding */ OurWorkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class OurWorkComponent {
    constructor() { }
    ngOnInit() { }
}
OurWorkComponent.ɵfac = function OurWorkComponent_Factory(t) { return new (t || OurWorkComponent)(); };
OurWorkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurWorkComponent, selectors: [["app-our-work"]], decls: 8, vars: 0, consts: [[1, "row", "text-end", "mb-5", "mt-5", "g-0"], [1, "col-sm"], ["src", "assets/media/our-work.svg", 1, "img-responsive-headline"], [1, "container-sm"], [1, "d-flex", "justify-content-start", "flex-row", "flex-wrap", "mb-5"], ["src", "assets/media/colaj1-site.jpeg", 1, "img-responsive-start"], [1, "d-flex", "justify-content-end", "flex-wrap", "mb-5"], ["src", "assets/media/colaj2-site.jpeg", 1, "img-responsive-end"]], template: function OurWorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".img-responsive-start[_ngcontent-%COMP%], .img-responsive-end[_ngcontent-%COMP%] {\n  max-width: 80%;\n  min-width: auto;\n  min-height: auto;\n  height: auto;\n  object-fit: scale-down;\n  display: block;\n}\n\n.img-responsive-headline[_ngcontent-%COMP%] {\n  max-width: 90%;\n  height: auto;\n}\n\n@media only screen and (max-width: 500px) {\n  .img-responsive-start[_ngcontent-%COMP%] {\n    max-height: 200px;\n    margin-left: 2rem;\n  }\n\n  .img-responsive-end[_ngcontent-%COMP%] {\n    max-height: 200px;\n    margin-right: 2rem;\n  }\n}\n\n.img-responsive-margin[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91ci13b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOztFQUVFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VBREY7O0VBR0E7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQURGIiwiZmlsZSI6Im91ci13b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9zcmMvdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XG5cbi5pbWctcmVzcG9uc2l2ZS1zdGFydCxcbi5pbWctcmVzcG9uc2l2ZS1lbmQge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW1nLXJlc3BvbnNpdmUtaGVhZGxpbmUge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5pbWctcmVzcG9uc2l2ZS1zdGFydCB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIH1cbiAgLmltZy1yZXNwb25zaXZlLWVuZCB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICB9XG59XG5cbi5pbWctcmVzcG9uc2l2ZS1tYXJnaW4ge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 8912:
/*!****************************************************************!*\
  !*** ./src/app/package-overview/package-overview.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageOverviewComponent": () => (/* binding */ PackageOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class PackageOverviewComponent {
    constructor() { }
    ngOnInit() { }
}
PackageOverviewComponent.ɵfac = function PackageOverviewComponent_Factory(t) { return new (t || PackageOverviewComponent)(); };
PackageOverviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PackageOverviewComponent, selectors: [["app-package-overview"]], decls: 32, vars: 0, consts: [[1, "container"], [1, "d-flex", "justify-content-center", "flex-row", "flex-wrap", "mt-5"], ["src", "assets/media/lets-work-together.svg", 1, "img-responsive-margin"], [1, "row", "text-center"], ["id", "packages"], [1, "d-flex", "justify-content-center", "text-center", "flex-row", "flex-wrap", "margin-custom"], ["src", "assets/media/our-packages.svg", 1, "img-responsive-margin"], [1, "d-flex", "justify-content-center", "flex-row", "flex-wrap"], ["src", "assets/media/the-burgundy.svg", 1, "img-responsive-margin"], ["src", "assets/media/the-crimson.svg", 1, "img-responsive-margin"], [1, "d-flex", "justify-content-center", "flex-row", "flex-wrap", "margin-packages-end"], ["src", "assets/media/the-tangerine.svg", 1, "img-responsive-margin"], ["src", "assets/media/the-rose.svg", 1, "img-responsive-margin"], [1, "row", "justify-content-center", "text-center"], ["href", "mailto:boorgundy@gmail.com"]], template: function PackageOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Think of Boorgundy as your one stop shop for your business: stylist, model, makeup artist, creative director, photographer and retoucher in one. More often than not, putting together a creative team that is on the same page with you comes with unnecessary stress, time and struggles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Having us on board allows you to focus on other aspects of your business, while we work collaboratively and transparently to organise, produce and deliver the best visuals for your brand. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Growing your business doesn\u2019t feel as overwhelming when you have us to deliver fun, high-quality content for your brand, from A to Z. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " The way we see it, branding isn\u2019t one size fits all. You\u2019re one-of-a-kind, and your brand deserves to be one-of-a-kind, too. Let\u2019s build a custom brand that conveys your vision through a carefully-crafted voice and striking visuals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " It\u2019s easy to get in touch - the form below offers us all the information we need to get started, if you fill in the required fields. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " For any other information (or just to say hi!) you can contact us via email at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "boorgundy@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " - we\u2019re happy to hear from you either way. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".img-responsive[_ngcontent-%COMP%] {\n  max-width: 90%;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n}\n\n.margin-custom[_ngcontent-%COMP%] {\n  margin-top: 7rem;\n  margin-bottom: 3.5rem;\n}\n\n.margin-packages-end[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-bottom: 7rem;\n}\n\n.img-responsive-margin[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin-left: 20px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ff0040;\n}\n\n.text-div[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2Utb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREYiLCJmaWxlIjoicGFja2FnZS1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vc3JjL3V0aWxpdGllcy92YXJpYWJsZXMnO1xuXG4uaW1nLXJlc3BvbnNpdmUge1xuICBtYXgtd2lkdGg6IDkwJTtcbn1cblxuLmltZy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWFyZ2luLWN1c3RvbSB7XG4gIG1hcmdpbi10b3A6IDdyZW07XG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcbn1cblxuLm1hcmdpbi1wYWNrYWdlcy1lbmQge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiA3cmVtO1xufVxuXG4uaW1nLXJlc3BvbnNpdmUtbWFyZ2luIHtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmMDA0MDtcbn1cblxuLnRleHQtZGl2IHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map