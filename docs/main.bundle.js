webpackJsonp(["main"],{

/***/ "../../../../../src/docs lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/docs lazy recursive";

/***/ }),

/***/ "../../../../../src/docs/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sections_home_section_home_section_component__ = __webpack_require__("../../../../../src/docs/app/sections/home-section/home-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sections_colors_section_colors_section_component__ = __webpack_require__("../../../../../src/docs/app/sections/colors-section/colors-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sections_buttons_buttons_component__ = __webpack_require__("../../../../../src/docs/app/sections/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sections_dropdowns_dropdowns_component__ = __webpack_require__("../../../../../src/docs/app/sections/dropdowns/dropdowns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sections_icons_icons_component__ = __webpack_require__("../../../../../src/docs/app/sections/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sections_checkboxes_checkboxes_component__ = __webpack_require__("../../../../../src/docs/app/sections/checkboxes/checkboxes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sections_utilities_borders_borders_component__ = __webpack_require__("../../../../../src/docs/app/sections/utilities/borders/borders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sections_utilities_spacing_spacing_component__ = __webpack_require__("../../../../../src/docs/app/sections/utilities/spacing/spacing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sections_utilities_z_index_z_index_component__ = __webpack_require__("../../../../../src/docs/app/sections/utilities/z-index/z-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sections_utilities_flex_box_flex_box_component__ = __webpack_require__("../../../../../src/docs/app/sections/utilities/flex-box/flex-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sections_tooltip_tooltip_component__ = __webpack_require__("../../../../../src/docs/app/sections/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sections_inline_dialog_inline_dialog_component__ = __webpack_require__("../../../../../src/docs/app/sections/inline-dialog/inline-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sections_dropdown_select_dropdown_select_component__ = __webpack_require__("../../../../../src/docs/app/sections/dropdown-select/dropdown-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sections_clearable_input_clearable_input_component__ = __webpack_require__("../../../../../src/docs/app/sections/clearable-input/clearable-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sections_range_input_range_input_component__ = __webpack_require__("../../../../../src/docs/app/sections/range-input/range-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sections_dropdown_menu_dropdown_menu_component__ = __webpack_require__("../../../../../src/docs/app/sections/dropdown-menu/dropdown-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sections_typography_section_typography_section_component__ = __webpack_require__("../../../../../src/docs/app/sections/typography-section/typography-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sections_modal_section_modal_section_component__ = __webpack_require__("../../../../../src/docs/app/sections/modal-section/modal-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sections_toggle_switch_toggle_switch_component__ = __webpack_require__("../../../../../src/docs/app/sections/toggle-switch/toggle-switch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sections_progress_indicator_section_progress_indicator_section_component__ = __webpack_require__("../../../../../src/docs/app/sections/progress-indicator-section/progress-indicator-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sections_bullet_chart_bullet_chart_component__ = __webpack_require__("../../../../../src/docs/app/sections/bullet-chart/bullet-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__sections_truncate_text_truncate_text_component__ = __webpack_require__("../../../../../src/docs/app/sections/truncate-text/truncate-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__sections_select_search_select_search_component__ = __webpack_require__("../../../../../src/docs/app/sections/select-search/select-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sections_multi_select_search_multi_select_search_component__ = __webpack_require__("../../../../../src/docs/app/sections/multi-select-search/multi-select-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__sections_badge_badge_component__ = __webpack_require__("../../../../../src/docs/app/sections/badge/badge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__sections_donut_chart_donut_chart_component__ = __webpack_require__("../../../../../src/docs/app/sections/donut-chart/donut-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__sections_date_range_input_date_range_input_component__ = __webpack_require__("../../../../../src/docs/app/sections/date-range-input/date-range-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__sections_slider_slider_component__ = __webpack_require__("../../../../../src/docs/app/sections/slider/slider.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// components for routing




























var routes = [
    // main/home page
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__sections_home_section_home_section_component__["a" /* HomeSectionComponent */] },
    // Typography
    { path: 'section/icons', component: __WEBPACK_IMPORTED_MODULE_6__sections_icons_icons_component__["a" /* IconsComponent */] },
    { path: 'section/typography', component: __WEBPACK_IMPORTED_MODULE_18__sections_typography_section_typography_section_component__["a" /* TypographySectionComponent */] },
    // Styles / Esthetics
    { path: 'section/colors', component: __WEBPACK_IMPORTED_MODULE_3__sections_colors_section_colors_section_component__["a" /* ColorsSectionComponent */] },
    // Components
    { path: 'section/buttons', component: __WEBPACK_IMPORTED_MODULE_4__sections_buttons_buttons_component__["a" /* ButtonsComponent */] },
    { path: 'section/dropdowns', component: __WEBPACK_IMPORTED_MODULE_5__sections_dropdowns_dropdowns_component__["a" /* DropdownsComponent */] },
    { path: 'section/checkboxes', component: __WEBPACK_IMPORTED_MODULE_7__sections_checkboxes_checkboxes_component__["a" /* CheckboxesComponent */] },
    { path: 'section/tooltips', component: __WEBPACK_IMPORTED_MODULE_12__sections_tooltip_tooltip_component__["a" /* TooltipComponent */] },
    { path: 'section/inline-dialogs', component: __WEBPACK_IMPORTED_MODULE_13__sections_inline_dialog_inline_dialog_component__["a" /* InlineDialogSectionComponent */] },
    {
        path: 'section/dropdown-select',
        component: __WEBPACK_IMPORTED_MODULE_14__sections_dropdown_select_dropdown_select_component__["a" /* DropdownSelectSectionComponent */]
    },
    {
        path: 'section/clearable-input',
        component: __WEBPACK_IMPORTED_MODULE_15__sections_clearable_input_clearable_input_component__["a" /* ClearableInputSectionComponent */]
    },
    { path: 'section/range-input', component: __WEBPACK_IMPORTED_MODULE_16__sections_range_input_range_input_component__["a" /* RangeInputSectionComponent */] },
    { path: 'section/toggle-switch', component: __WEBPACK_IMPORTED_MODULE_20__sections_toggle_switch_toggle_switch_component__["a" /* ToggleSwitchSectionComponent */] },
    { path: 'section/dropdown-menu', component: __WEBPACK_IMPORTED_MODULE_17__sections_dropdown_menu_dropdown_menu_component__["a" /* DropdownMenuSectionComponent */] },
    { path: 'section/modal', component: __WEBPACK_IMPORTED_MODULE_19__sections_modal_section_modal_section_component__["a" /* ModalSectionComponent */] },
    {
        path: 'section/progress-indicator',
        component: __WEBPACK_IMPORTED_MODULE_21__sections_progress_indicator_section_progress_indicator_section_component__["a" /* ProgressIndicatorSectionComponent */]
    },
    { path: 'section/bullet-chart', component: __WEBPACK_IMPORTED_MODULE_22__sections_bullet_chart_bullet_chart_component__["a" /* BulletChartSectionComponent */] },
    { path: 'section/truncate-text', component: __WEBPACK_IMPORTED_MODULE_23__sections_truncate_text_truncate_text_component__["a" /* TruncateTextSectionComponent */] },
    { path: 'section/select-search', component: __WEBPACK_IMPORTED_MODULE_24__sections_select_search_select_search_component__["a" /* SelectSearchSectionComponent */] },
    {
        path: 'section/multi-select-search',
        component: __WEBPACK_IMPORTED_MODULE_25__sections_multi_select_search_multi_select_search_component__["a" /* MultiSelectSearchSectionComponent */]
    },
    { path: 'section/badge', component: __WEBPACK_IMPORTED_MODULE_26__sections_badge_badge_component__["a" /* BadgeSectionComponent */] },
    { path: 'section/donut-chart', component: __WEBPACK_IMPORTED_MODULE_27__sections_donut_chart_donut_chart_component__["a" /* DonutChartSectionComponent */] },
    {
        path: 'section/date-range-input',
        component: __WEBPACK_IMPORTED_MODULE_28__sections_date_range_input_date_range_input_component__["a" /* DateRangeInputSectionComponent */]
    },
    {
        path: 'section/slider',
        component: __WEBPACK_IMPORTED_MODULE_29__sections_slider_slider_component__["a" /* SliderSectionComponent */]
    },
    // Utilities
    { path: 'section/utilities/borders', component: __WEBPACK_IMPORTED_MODULE_8__sections_utilities_borders_borders_component__["a" /* BordersComponent */] },
    { path: 'section/utilities/spacing', component: __WEBPACK_IMPORTED_MODULE_9__sections_utilities_spacing_spacing_component__["a" /* SpacingComponent */] },
    { path: 'section/utilities/z-indexes', component: __WEBPACK_IMPORTED_MODULE_10__sections_utilities_z_index_z_index_component__["a" /* ZIndexComponent */] },
    { path: 'section/utilities/flexbox', component: __WEBPACK_IMPORTED_MODULE_11__sections_utilities_flex_box_flex_box_component__["a" /* FlexBoxComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/docs/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div grid-wrapper>\n  <div grid=\"no-collapse row\">\n    <div column=\"6\">\n      <docs-main-menu></docs-main-menu>\n    </div>\n    <div column=\"20\" class=\"_plxl _prxl _pbxl\">\n      <router-outlet></router-outlet>\n    </div> \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/docs/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[grid-wrapper] {\n  height: 100%;\n  overflow-x: hidden; }\n\n[grid] {\n  height: 100%; }\n  [grid] [column='6'] {\n    background: lightgrey;\n    box-shadow: -4px 0px 42px -10px black inset;\n    height: 100%;\n    overflow-y: scroll;\n    min-width: 360px; }\n  [grid] [column='20'] {\n    overflow-y: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.listenToModal = function (event) {
        console.log(event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-root',
        template: __webpack_require__("../../../../../src/docs/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/docs/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/docs/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_menu_main_menu_component__ = __webpack_require__("../../../../../src/docs/app/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sections_colors_section_colors_section_component__ = __webpack_require__("../../../../../src/docs/app/sections/colors-section/colors-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sections_home_section_home_section_component__ = __webpack_require__("../../../../../src/docs/app/sections/home-section/home-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sections_buttons_buttons_component__ = __webpack_require__("../../../../../src/docs/app/sections/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sections_dropdowns_dropdowns_component__ = __webpack_require__("../../../../../src/docs/app/sections/dropdowns/dropdowns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sections_icons_icons_component__ = __webpack_require__("../../../../../src/docs/app/sections/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sections_checkboxes_checkboxes_component__ = __webpack_require__("../../../../../src/docs/app/sections/checkboxes/checkboxes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sections_utilities_borders_borders_component__ = __webpack_require__("../../../../../src/docs/app/sections/utilities/borders/borders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sections_utilities_spacing_spacing_component__ = __webpack_require__("../../../../../src/docs/app/sections/utilities/spacing/spacing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sections_utilities_z_index_z_index_component__ = __webpack_require__("../../../../../src/docs/app/sections/utilities/z-index/z-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sections_utilities_flex_box_flex_box_component__ = __webpack_require__("../../../../../src/docs/app/sections/utilities/flex-box/flex-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_suprematism_popover__ = __webpack_require__("../../../../suprematism-popover/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_suprematism_modal__ = __webpack_require__("../../../../suprematism-modal/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_suprematism_dropdown_menu__ = __webpack_require__("../../../../suprematism-dropdown-menu/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_suprematism_dropdown_select__ = __webpack_require__("../../../../suprematism-dropdown-select/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_suprematism_range_input__ = __webpack_require__("../../../../suprematism-range-input/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_suprematism_toggle_switch__ = __webpack_require__("../../../../suprematism-toggle-switch/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_suprematism_bullet_chart__ = __webpack_require__("../../../../suprematism-bullet-chart/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_suprematism_truncate_text__ = __webpack_require__("../../../../suprematism-truncate-text/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_suprematism_select_search__ = __webpack_require__("../../../../suprematism-select-search/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_suprematism_multi_select_search__ = __webpack_require__("../../../../suprematism-multi-select-search/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_suprematism_badge__ = __webpack_require__("../../../../suprematism-badge/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_suprematism_donut_chart__ = __webpack_require__("../../../../suprematism-donut-chart/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_suprematism_date_range_input__ = __webpack_require__("../../../../suprematism-date-range-input/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_suprematism_slider__ = __webpack_require__("../../../../suprematism-slider/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__sections_tooltip_tooltip_component__ = __webpack_require__("../../../../../src/docs/app/sections/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__sections_inline_dialog_inline_dialog_component__ = __webpack_require__("../../../../../src/docs/app/sections/inline-dialog/inline-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__sections_dropdown_select_dropdown_select_component__ = __webpack_require__("../../../../../src/docs/app/sections/dropdown-select/dropdown-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__sections_clearable_input_clearable_input_component__ = __webpack_require__("../../../../../src/docs/app/sections/clearable-input/clearable-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__sections_range_input_range_input_component__ = __webpack_require__("../../../../../src/docs/app/sections/range-input/range-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__sections_dropdown_menu_dropdown_menu_component__ = __webpack_require__("../../../../../src/docs/app/sections/dropdown-menu/dropdown-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__sections_toggle_switch_toggle_switch_component__ = __webpack_require__("../../../../../src/docs/app/sections/toggle-switch/toggle-switch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__sections_typography_section_typography_section_component__ = __webpack_require__("../../../../../src/docs/app/sections/typography-section/typography-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__sections_modal_section_modal_section_component__ = __webpack_require__("../../../../../src/docs/app/sections/modal-section/modal-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__sections_progress_indicator_section_progress_indicator_section_component__ = __webpack_require__("../../../../../src/docs/app/sections/progress-indicator-section/progress-indicator-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__sections_bullet_chart_bullet_chart_component__ = __webpack_require__("../../../../../src/docs/app/sections/bullet-chart/bullet-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__sections_truncate_text_truncate_text_component__ = __webpack_require__("../../../../../src/docs/app/sections/truncate-text/truncate-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__sections_select_search_select_search_component__ = __webpack_require__("../../../../../src/docs/app/sections/select-search/select-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__sections_multi_select_search_multi_select_search_component__ = __webpack_require__("../../../../../src/docs/app/sections/multi-select-search/multi-select-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__sections_badge_badge_component__ = __webpack_require__("../../../../../src/docs/app/sections/badge/badge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__sections_donut_chart_donut_chart_component__ = __webpack_require__("../../../../../src/docs/app/sections/donut-chart/donut-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__sections_date_range_input_date_range_input_component__ = __webpack_require__("../../../../../src/docs/app/sections/date-range-input/date-range-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__sections_slider_slider_component__ = __webpack_require__("../../../../../src/docs/app/sections/slider/slider.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__main_menu_main_menu_component__["a" /* MainMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sections_colors_section_colors_section_component__["a" /* ColorsSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sections_home_section_home_section_component__["a" /* HomeSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sections_buttons_buttons_component__["a" /* ButtonsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__sections_dropdowns_dropdowns_component__["a" /* DropdownsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__sections_icons_icons_component__["a" /* IconsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__sections_checkboxes_checkboxes_component__["a" /* CheckboxesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__sections_utilities_borders_borders_component__["a" /* BordersComponent */],
            __WEBPACK_IMPORTED_MODULE_14__sections_utilities_spacing_spacing_component__["a" /* SpacingComponent */],
            __WEBPACK_IMPORTED_MODULE_15__sections_utilities_z_index_z_index_component__["a" /* ZIndexComponent */],
            __WEBPACK_IMPORTED_MODULE_16__sections_utilities_flex_box_flex_box_component__["a" /* FlexBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_31__sections_tooltip_tooltip_component__["a" /* TooltipComponent */],
            __WEBPACK_IMPORTED_MODULE_32__sections_inline_dialog_inline_dialog_component__["a" /* InlineDialogSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_33__sections_dropdown_select_dropdown_select_component__["a" /* DropdownSelectSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_34__sections_clearable_input_clearable_input_component__["a" /* ClearableInputSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_35__sections_range_input_range_input_component__["a" /* RangeInputSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_36__sections_dropdown_menu_dropdown_menu_component__["a" /* DropdownMenuSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_37__sections_toggle_switch_toggle_switch_component__["a" /* ToggleSwitchSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_38__sections_typography_section_typography_section_component__["a" /* TypographySectionComponent */],
            __WEBPACK_IMPORTED_MODULE_39__sections_modal_section_modal_section_component__["a" /* ModalSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_40__sections_progress_indicator_section_progress_indicator_section_component__["a" /* ProgressIndicatorSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_41__sections_bullet_chart_bullet_chart_component__["a" /* BulletChartSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_42__sections_truncate_text_truncate_text_component__["a" /* TruncateTextSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_43__sections_select_search_select_search_component__["a" /* SelectSearchSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_44__sections_multi_select_search_multi_select_search_component__["a" /* MultiSelectSearchSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_45__sections_badge_badge_component__["a" /* BadgeSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_46__sections_donut_chart_donut_chart_component__["a" /* DonutChartSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_47__sections_date_range_input_date_range_input_component__["a" /* DateRangeInputSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_48__sections_slider_slider_component__["a" /* SliderSectionComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_17_suprematism_popover__["a" /* SuprePopoverModule */],
            __WEBPACK_IMPORTED_MODULE_18_suprematism_modal__["ModalModule"],
            __WEBPACK_IMPORTED_MODULE_19_suprematism_dropdown_menu__["a" /* DropdownMenuModule */],
            __WEBPACK_IMPORTED_MODULE_20_suprematism_dropdown_select__["a" /* DropdownSelectModule */],
            __WEBPACK_IMPORTED_MODULE_21_suprematism_range_input__["a" /* RangeInputModule */],
            __WEBPACK_IMPORTED_MODULE_22_suprematism_toggle_switch__["a" /* ToggleSwitchModule */],
            __WEBPACK_IMPORTED_MODULE_23_suprematism_bullet_chart__["a" /* BulletChartModule */],
            __WEBPACK_IMPORTED_MODULE_24_suprematism_truncate_text__["a" /* TruncateTextModule */],
            __WEBPACK_IMPORTED_MODULE_25_suprematism_select_search__["a" /* SelectSearchModule */],
            __WEBPACK_IMPORTED_MODULE_26_suprematism_multi_select_search__["a" /* MultiSelectSearchModule */],
            __WEBPACK_IMPORTED_MODULE_27_suprematism_badge__["BadgeModule"],
            __WEBPACK_IMPORTED_MODULE_28_suprematism_donut_chart__["a" /* DonutChartModule */],
            __WEBPACK_IMPORTED_MODULE_29_suprematism_date_range_input__["a" /* DateRangeInputModule */],
            __WEBPACK_IMPORTED_MODULE_30_suprematism_slider__["a" /* SliderModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/docs/app/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"_ptxs\">\n  <li>\n    <h5 class=\"_mt0 _pts _pbxs\">\n      <a [routerLink]=\"['']\">Main Page</a>\n    </h5>\n  </li>\n  <li>\n    <h5 class=\"_mt0 _mb0\">Styles / Esthetics</h5>\n    <ul class=\"_mt0 _pbxs _pls\">\n      <li>\n        <a [routerLink]=\"['section/colors']\" fragment=\"top\">Colors List</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/colors'\">\n          <li><a [routerLink]=\"['section/colors']\" fragment=\"colors-installation\">Installation</a></li>\n          <li><a [routerLink]=\"['section/colors']\" fragment=\"colors-list\">List of Colors</a></li>\n          <li><a [routerLink]=\"['section/colors']\" fragment=\"colors-classes\">Color Classes</a></li>\n          <li><a [routerLink]=\"['section/colors']\" fragment=\"colors-placeholders\">Color Place Holders</a></li>\n          <li><a [routerLink]=\"['section/colors']\" fragment=\"colors-list-mixins\">Color List &amp; Mixins</a></li>\n        </ul>\n      </li>\n      <li>Colors Guide</li>\n      <li>Visual Rules &amp; Considerations</li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"_mt0 _mb0 _mtm\">Typography</h5>\n    <ul class=\"_mt0 _pbxs _pls\">\n      <li>\n        <a [routerLink]=\"['section/typography']\" fragment=\"top\">Typography</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/typography'\">\n          <li><a [routerLink]=\"['section/typography']\" fragment=\"type-classes\">Classes</a></li>\n          <li><a [routerLink]=\"['section/typography']\" fragment=\"type-variables\">Size Variables</a></li>\n          <li><a [routerLink]=\"['section/typography']\" fragment=\"type-placeholders\">Placeholders</a></li>\n          <li><a [routerLink]=\"['section/typography']\" fragment=\"type-samples\">Samples</a></li>\n        </ul>\n      </li>\n      <li><a [routerLink]=\"['section/icons']\" fragment=\"top\">Icons</a></li>\n      <li>Lists</li>\n      <li>Tabular Data (Tables)</li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"_mt0 _mb0 _mtm\">Inputs</h5>\n    <ul class=\"_mt0 _pbxs _pls\">\n      <li>Text, Numbers, etc</li>\n      <li>Select</li>\n      <li>Textarea</li>\n      <li>Radio Groups</li>\n      <li>\n        <a [routerLink]=\"['section/checkboxes']\" fragment=\"top\">Checkboxes</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/checkboxes'\">\n          <li><a [routerLink]=\"['section/checkboxes']\" fragment=\"checkbox-inline-active\">Inline &amp; Active</a></li>\n          <li><a [routerLink]=\"['section/checkboxes']\" fragment=\"checkbox-stacked-active\">Stacked &amp; Active</a></li>\n          <li><a [routerLink]=\"['section/checkboxes']\" fragment=\"checkbox-stacked-active-columns\">Stacked, Multi-column, &amp; Active</a></li>\n          <li><a [routerLink]=\"['section/checkboxes']\" fragment=\"checkbox-disabled\">Disabled</a></li>\n          <li><a [routerLink]=\"['section/checkboxes']\" fragment=\"checkbox-select-all-active\">Select All &amp; Active</a></li>\n          <li><a [routerLink]=\"['section/checkboxes']\" fragment=\"checkbox-select-all-disabled\">Select All &amp; Disabled</a></li>\n        </ul>\n      </li>\n      <li>Forms</li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"_mt0 _mb0 _mtm\">Page Layouts</h5>\n    <ul class=\"_mt0 _pbxs _pls\">\n      <li>Grid System</li>\n      <li>Layouts</li>\n      <li>Breakpoints</li>\n      <li>Scrolling / Scrollbars</li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"_mt0 _mb0 _mtm\">Components</h5>\n    <ul class=\"_mt0 _pbxs _pls\">\n      <li>Data Grid</li>\n      <li>\n        <a [routerLink]=\"['section/tooltips']\" fragment=\"top\">Tooltips</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/tooltips'\">\n          <li><a [routerLink]=\"['section/tooltips']\" fragment=\"tooltips-install\">Installation</a></li>\n          <li><a [routerLink]=\"['section/tooltips']\" fragment=\"tooltips-title-only\">Title Only</a></li>\n          <li><a [routerLink]=\"['section/tooltips']\" fragment=\"tooltips-title-with-icon\">Title with Icon</a></li>\n          <li><a [routerLink]=\"['section/tooltips']\" fragment=\"tooltips-title-with-icon-and-description\">Title with a Description</a></li>\n          <li><a [routerLink]=\"['section/tooltips']\" fragment=\"tooltips-placement\">Placement</a></li>\n          <li><a [routerLink]=\"['section/tooltips']\" fragment=\"tooltips-disabled\">Disable/Enable</a></li>\n        </ul>\n      </li>\n      <li>\n        <a [routerLink]=\"['section/inline-dialogs']\" fragment=\"top\">Inline Dialog</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/inline-dialogs'\">\n          <li><a [routerLink]=\"['section/inline-dialogs']\" fragment=\"inline-dialog-install\">Installation</a></li>\n          <li><a [routerLink]=\"['section/inline-dialogs']\" fragment=\"inline-dialog-simple-example\">Simple Example</a></li>\n          <li><a [routerLink]=\"['section/inline-dialogs']\" fragment=\"inline-dialog-with-tooltip\">Combined with a Tooltip</a></li>\n          <li><a [routerLink]=\"['section/inline-dialogs']\" fragment=\"inline-dialog-placement\">Placement</a></li>\n          <li><a [routerLink]=\"['section/inline-dialogs']\" fragment=\"inline-dialog-disabled\">Disable/Enable</a></li>\n        </ul>\n      </li>\n      <li>\n        <a [routerLink]=\"['section/modal']\" fragment=\"top\">Modal</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/modal'\">\n          <li><a [routerLink]=\"['section/modal']\" fragment=\"modal-install\">Installation</a></li>\n          <li><a [routerLink]=\"['section/modal']\" fragment=\"modal-simple-example\">Simple Example</a></li>\n          <li><a [routerLink]=\"['section/modal']\" fragment=\"modal-sizing\">Sizing</a></li>\n          <li><a [routerLink]=\"['section/modal']\" fragment=\"modal-without-close\">Without Close</a></li>\n          <li><a [routerLink]=\"['section/modal']\" fragment=\"modal-api\">API</a></li>\n        </ul>\n      </li>\n      <li>Navigation</li>\n      <li>Navigation Tiles</li>\n      <li>Dialogs / User Feedback</li>\n      <li>\n        <a [routerLink]=\"['section/dropdowns']\" fragment=\"top\">Dropdown Menus</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/dropdowns'\">\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-no-icons\">With no Icons</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-with-icons\">With Icons</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropup-no-icons\">Dropup</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-disabled\">Disabled</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-with-width\">Apply a Width</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-with-checkboxes\">With Checkboxes</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-with-checkboxes-and-icons\">With Checkboxes &amp; Icons</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-mark-item-and-checkbox-selected\">Mark Item &amp; Checkbox Selected</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-with-select-all\">With a Select All</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-with-partial-select-all-status\">With a Select All Partially Selected</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-angular-sample\">Angular Component</a></li>\n        </ul>\n      </li>\n      <li>\n        <a [routerLink]=\"['section/buttons']\" fragment=\"top\">Buttons</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/buttons'\">\n          <li><a [routerLink]=\"['section/buttons']\" fragment=\"buttons-actions\">Action Buttons</a></li>\n          <li><a [routerLink]=\"['section/buttons']\" fragment=\"buttons-dialog-confirm\">Dialog/Confirm Buttons</a></li>\n          <li><a [routerLink]=\"['section/buttons']\" fragment=\"buttons-toolbar\">Toolbar Buttons</a></li>\n          <li><a [routerLink]=\"['section/buttons']\" fragment=\"buttons-conditions\">Condition Buttons</a></li>\n          <li><a [routerLink]=\"['section/buttons']\" fragment=\"buttons-toggle\">Toggle Buttons</a></li>\n          <li><a [routerLink]=\"['section/buttons']\" fragment=\"buttons-toggle-actions\">Toggle Action Buttons</a></li>\n          <li><a [routerLink]=\"['section/buttons']\" fragment=\"buttons-cancel\">Cancel Buttons</a></li>\n        </ul>\n      </li>\n      <li>Breadcrumbs</li>\n      <li>\n        <a [routerLink]=\"['section/progress-indicator']\" fragment=\"top\">Progress Indicator</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/progress-indicator'\">\n          <li><a [routerLink]=\"['section/progress-indicator']\" fragment=\"indeterminate-progress-bar\">Indeterminate Progress Indicator</a></li>\n        </ul>\n      </li>\n      <li><a [routerLink]=\"['section/dropdown-menu']\">Dropdown Menu</a></li>\n      <li><a [routerLink]=\"['section/dropdown-select']\">Dropdown Select</a></li>\n      <li><a [routerLink]=\"['section/clearable-input']\">Clearable Input</a></li>\n      <li><a [routerLink]=\"['section/range-input']\">Range Input</a></li>\n      <li><a [routerLink]=\"['section/date-range-input']\">Date Range Input</a></li>\n      <li><a [routerLink]=\"['section/toggle-switch']\">Toggle Switch</a></li>\n      <li><a [routerLink]=\"['section/truncate-text']\">Truncate Text</a></li>\n      <li><a [routerLink]=\"['section/select-search']\">Select Search</a></li>\n      <li><a [routerLink]=\"['section/multi-select-search']\">Multi Select Search</a></li>\n      <li><a [routerLink]=\"['section/bullet-chart']\">Bullet Chart</a></li>\n      <li><a [routerLink]=\"['section/badge']\">Badge</a></li>\n      <li><a [routerLink]=\"['section/donut-chart']\">Donut Chart</a></li>\n      <li><a [routerLink]=\"['section/slider']\">Slider</a></li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"_mt0 _mb0 _mtm\">Utilities</h5>\n    <ul class=\"_mt0 _pbxs _pls\">\n      <li><a [routerLink]=\"['section/colors']\" fragment=\"top\">Colors</a></li>\n      <li>\n        <a [routerLink]=\"['section/utilities/spacing']\" fragment=\"top\">Spacing</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/utilities/spacing'\">\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-margin-xs\">Margin 'xs' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-margin-s\">Margin 's' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-margin-m\">Margin 'm' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-margin-l\">Margin 'l' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-margin-xl\">Margin 'xl' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-margin-placeholders\">Margins SCSS Placeholders</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-padding-xs\">Padding 'xs' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-padding-s\">Padding 's' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-padding-m\">Padding 'm' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-padding-l\">Padding 'l' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-padding-xl\">Padding 'xl' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-padding-placeholders\">Paddings SCSS Placeholders</a></li>\n        </ul>\n      </li>\n      <li>\n        <a [routerLink]=\"['section/utilities/borders']\" fragment=\"top\">Borders</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/utilities/borders'\">\n          <li><a [routerLink]=\"['section/utilities/borders']\" fragment=\"borders-adding\">Adding Borders</a></li>\n          <li><a [routerLink]=\"['section/utilities/borders']\" fragment=\"borders-clearing\">Clearing Borders</a></li>\n          <li><a [routerLink]=\"['section/utilities/borders']\" fragment=\"borders-placeholders\">Border SCSS Placeholders</a></li>\n        </ul>\n      </li>\n      <li><a [routerLink]=\"['section/utilities/z-indexes']\" fragment=\"top\">Z-Indexes</a></li>\n      <li>\n        <a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"top\">Flexbox</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/utilities/flexbox'\">\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-flex\">Row Layout</a></li>\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-flex-column\">Column Layout</a></li>\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-flex-wrap\">Wrap Layout</a></li>\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-fill-width\">Stretch Cells to Fit</a></li>\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-flex-horiz-align\">Horizontal Justification</a></li>\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-flex-vert-align\">Vertical Justification</a></li>\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-align-items\">Align Items (Vertical)</a></li>\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-self-align\">Self Align (Vertical)</a></li>\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-flex-sizes\">Cell Sizes</a></li>\n        </ul>\n      </li>\n      <li>Breakpoint Mixins</li>\n      <li>Alignment</li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"_mt0 _mb0 _mtm\">Standards</h5>\n    <ul class=\"_mt0 _pbxs _pls\">\n      <li>Using SuitCSS</li>\n      <li>SASS guidelines</li>\n      <li>Including Third Party Libraries</li>\n      <li>JavaScript Linting</li>\n      <li>HTML compliance</li>\n      <li>General Page setup</li>\n      <li>Building a new component (extending)</li>\n      <li>Browser Support</li>\n      <li>Concsie CSS</li>\n      <li>Angular 2.0</li>\n      <li>D3.js</li>\n    </ul>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/docs/app/main-menu/main-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: inherit;\n  font-size: 0.8rem; }\n\nul li {\n  list-style-type: none;\n  color: darkgray; }\n  ul li a {\n    color: black; }\n    ul li a:hover {\n      color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/main-menu/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainMenuComponent = (function () {
    function MainMenuComponent(router) {
        this.router = router;
    }
    MainMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events
            .map(function (event) { return event.url; })
            .distinctUntilChanged()
            .subscribe(function (url) { return (_this.setUrl = url); });
    };
    Object.defineProperty(MainMenuComponent.prototype, "setUrl", {
        set: function (path) {
            var parts = path.split('#');
            this.path = parts[0].replace(/^\/(.*)/, '$1');
            this.hash = parts[1] ? parts[1] : null;
        },
        enumerable: true,
        configurable: true
    });
    return MainMenuComponent;
}());
MainMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-main-menu',
        template: __webpack_require__("../../../../../src/docs/app/main-menu/main-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/main-menu/main-menu.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], MainMenuComponent);

var _a;
//# sourceMappingURL=main-menu.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/badge/badge.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Badge</h1>\n\n\n<a id=\"badge-install\"></a>\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-badge\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} BadgeModule } from 'suprematism-badge';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      BadgeModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n\n<h5 class=\"_mtxl\">Simple Example</h5>\n\n<supre-badge\n  positionY=\"top\"\n  positionX=\"right\"\n  text=\"6\">\n  <button class=\"-toolbar\"><div class=\"u-supre-icon u-supre-icon--entertainment\"></div></button>\n</supre-badge>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-badge\n      positionY=\"top\"\n      positionX=\"right\"\n      text=\"6\"\n    >\n        {{'&lt;'}}button class=\"-toolbar\">\n          {{'&lt;'}}div class=\"u-supre-icon u-supre-icon--entertainment\">{{'&lt;'}}/div>\n        {{'&lt;'}}button>\n    {{'&lt;'}}/supre-badge>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/badge/badge.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example {\n  width: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/badge/badge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BadgeSectionComponent = (function (_super) {
    __extends(BadgeSectionComponent, _super);
    function BadgeSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return BadgeSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
BadgeSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-badge',
        template: __webpack_require__("../../../../../src/docs/app/sections/badge/badge.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/badge/badge.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], BadgeSectionComponent);

var _a;
//# sourceMappingURL=badge.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/bullet-chart/bullet-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Bullet Chart</h1>\n\n\n<a id=\"bullet-chart-install\"></a>\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-bullet-chart --save\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} BulletChartModule } from 'suprematism-bullet-chart';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      BulletChartModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n\n<h5 class=\"_mtxl\">Simple Example</h5>\n\n<supre-bullet-chart\n  [minValue]=\"0\"\n  [maxValue]=\"100\"\n  [value]=\"60\"\n  [comparisonValue]=\"40\">\n  ></supre-bullet-chart>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-bullet-chart\n      [minValue]=\"0\"\n      [maxValue]=\"100\"\n      [value]=\"60\"\n      [comparisonValue]=\"40\"\n      >\n    {{'&lt;'}}/supre-bullet-chart>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/bullet-chart/bullet-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example {\n  width: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/bullet-chart/bullet-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulletChartSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BulletChartSectionComponent = (function (_super) {
    __extends(BulletChartSectionComponent, _super);
    function BulletChartSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return BulletChartSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
BulletChartSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-bullet-chart',
        template: __webpack_require__("../../../../../src/docs/app/sections/bullet-chart/bullet-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/bullet-chart/bullet-chart.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], BulletChartSectionComponent);

var _a;
//# sourceMappingURL=bullet-chart.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Buttons</h1>\n\n<a id=\"buttons-actions\"></a>\n<h5 class=\"_mtxl\">Action Buttons</h5>\n<button class=\"-action\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span>Press Me</button>\n<button class=\"-action\">Press Me</button>\n<button class=\"-action\" disabled>Can't Press Me</button>\n<button class=\"-action\" disabled><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span>Can't Press Me</button>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Action with icon -->\n  {{'&lt;'}}button class=\"-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>Press Me{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Action without icon -->\n  {{'&lt;'}}button class=\"-action\">Press Me{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Disabled -->\n  {{'&lt;'}}button class=\"-action\" disabled>Can't Press Me{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Disabled with an icon -->\n  {{'&lt;'}}button class=\"-action\" disabled>{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>Can't Press Me{{'&lt;'}}/button>\n  </code>\n</pre>\n\n\n<a id=\"buttons-dialog-confirm\"></a>\n<h5 class=\"_mtxl\">Dialog/Confirm Buttons</h5>\n<button class=\"-dialog\">Keep</button>\n<button class=\"-dialog-reverse\">clear</button>\n<button class=\"-dialog\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span>Keep</button>\n<button class=\"-dialog-reverse\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span>clear</button>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Dark and light versions -->\n  {{'&lt;'}}button class=\"-dialog\">Keep{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-dialog-reverse\">clear{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Dark and light versions, with icons -->\n  {{'&lt;'}}button class=\"-dialog\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>Keep{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-dialog-reverse\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>clear{{'&lt;'}}/button>\n  </code>\n</pre>\n\n\n<a id=\"buttons-toolbar\"></a>\n<h5 class=\"_mtxl\">Toolbar Buttons</h5>\n<div class=\"flex\">\n  <button class=\"-toolbar\">Tool A</button>\n  <button class=\"-toolbar\">Tool B</button>\n  <button class=\"-toolbar\" disabled>Tool C</button>\n  <button class=\"-toolbar\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span>Tool D</button>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Toolbar buttons enabled -->\n  {{'&lt;'}}button class=\"-toolbar\">Tool A{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toolbar\">Tool B{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Toolbar button disabled -->\n  {{'&lt;'}}button class=\"-toolbar\" disabled>Tool C{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Toolbar button with icon -->\n  {{'&lt;'}}button class=\"-toolbar\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>Tool D{{'&lt;'}}/button>\n  </code>\n</pre>\n\n\n<a id=\"buttons-conditions\"></a>\n<h5 class=\"_mtxl\">Condition Buttons</h5>\n<div class=\"flex\">\n  <button class=\"-condition\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span>Condition A</button>\n  <button class=\"-condition\">Condition B</button>\n  <button class=\"-condition\" disabled>Condition C</button>\n  <button class=\"-condition\">Condition D</button>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}button class=\"-condition\">Condition A{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-condition\">Condition B{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-condition\" disabled>Condition C{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-condition\">Condition D{{'&lt;'}}/button>\n  </code>\n</pre>\n\n\n<a id=\"buttons-toggle\"></a>\n<h5 class=\"_mtxl\">Toggle Buttons</h5>\n<div class=\"flex\">\n  <button class=\"-toggle\">AND</button>\n  <button class=\"-toggle\">OR</button>\n  <div class=\"_mls\">&nbsp;</div>\n  <span class=\"has-selection flex\">\n    <button class=\"-toggle\">AND</button>\n    <button class=\"-toggle is-active\">OR</button>\n  </span>\n  <div class=\"_mls\">&nbsp;</div>\n  <button class=\"-toggle\" disabled>AND</button>\n  <button class=\"-toggle\" disabled>OR</button>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Unselected, enabled toggles -->\n  {{'&lt;'}}button class=\"-toggle\">AND{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle\">OR{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- One selected, enabled toggles -->\n  {{'&lt;'}}!-- Add the has-selection class to the parent container -->\n  {{'&lt;'}}span class=\"has-selection\">\n  {{'&lt;'}}button class=\"-toggle\">AND{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle is-active\">OR{{'&lt;'}}/button>\n  {{'&lt;'}}/span>\n\n  {{'&lt;'}}!-- Unselected, disabled toggles -->\n  {{'&lt;'}}button class=\"-toggle\" disabled>AND{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle\" disabled>OR{{'&lt;'}}/button>\n  </code>\n</pre>\n\n\n<a id=\"buttons-toggle-actions\"></a>\n<h5 class=\"_mtxl\">Toggle Action Buttons</h5>\n<div class=\"flex\">\n  <button class=\"-toggle-action\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span></button>\n  <button class=\"-toggle-action\"><span class=\"u-supre-icon u-supre-icon--filter\"></span></button>\n  <button class=\"-toggle-action\"><span class=\"u-supre-icon u-supre-icon--arrow-right-stroke\"></span></button>\n  <div class=\"_mls\">&nbsp;</div>\n  <button class=\"-toggle-action\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span></button>\n  <button class=\"-toggle-action is-active\"><span class=\"u-supre-icon u-supre-icon--filter\"></span></button>\n  <button class=\"-toggle-action\"><span class=\"u-supre-icon u-supre-icon--arrow-right-stroke\"></span></button>\n  <div class=\"_mls\">&nbsp;</div>\n  <button class=\"-toggle-action\" disabled><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span></button>\n  <button class=\"-toggle-action\" disabled><span class=\"u-supre-icon u-supre-icon--filter\"></span></button>\n  <button class=\"-toggle-action\" disabled><span class=\"u-supre-icon u-supre-icon--arrow-right-stroke\"></span></button>\n  <div class=\"_mls\">&nbsp;</div>\n  <button class=\"-toggle-action\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span></button>\n  <button class=\"-toggle-action\"><span class=\"u-supre-icon u-supre-icon--filter\"></span></button>\n  <button class=\"-toggle-action background open-bottom\"><span class=\"u-supre-icon u-supre-icon--arrow-down-filled\"></span></button>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Three enabled, unselected action toggles -->\n  {{'&lt;'}}button class=\"-toggle-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--filter\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--arrow-right-stroke\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Three enabled, one selected -->\n  {{'&lt;'}}button class=\"-toggle-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action is-active\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--filter\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--arrow-right-stroke\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- All disabled -->\n  {{'&lt;'}}button class=\"-toggle-action\" disabled>{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action\" disabled>{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--filter\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action\" disabled>{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--arrow-right-stroke\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- First and Second enabled, unselected — Third styled to connect to an open area below -->\n  {{'&lt;'}}button class=\"-toggle-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--filter\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action background open-bottom\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--arrow-down-filled\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  </code>\n</pre>\n\n\n<a id=\"buttons-cancel\"></a>\n<h5 class=\"_mtxl\">Dialog Buttons</h5>\n<div>\n  <button class=\"-cancel-lg\">Cancel</button>\n  <button class=\"-action\">Submit</button>\n  <button class=\"-action\">Submit</button>\n  <button class=\"-action\" disabled>Submit</button>\n</div>\n<div class=\"_pts\">\n  <button class=\"-cancel-md\">Cancel</button>\n  <button class=\"-dialog\">Submit</button>\n  <button class=\"-dialog-reverse\">Submit</button>\n  <button class=\"-dialog\" disabled>Submit</button>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Coupled with larger Action buttons -->\n  {{'&lt;'}}button class=\"-cancel-lg\">Cancel{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-action\">Press Me{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-action\">Press Me Too{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Coupled with medium Confirm/Dialog buttons -->\n  {{'&lt;'}}button class=\"-cancel-md\">Cancel{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-dialog\">Press Me{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-dialog-reverse\">Press Me Too{{'&lt;'}}/button>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/buttons/buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ButtonsComponent = (function (_super) {
    __extends(ButtonsComponent, _super);
    function ButtonsComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return ButtonsComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
ButtonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-buttons',
        template: __webpack_require__("../../../../../src/docs/app/sections/buttons/buttons.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/buttons/buttons.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ButtonsComponent);

var _a;
//# sourceMappingURL=buttons.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/checkboxes/checkboxes.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Checkboxes</h1>\n\n<a id=\"checkbox-inline-active\"></a>\n<h5 class=\"_mtxl\">Inline Active Checkboxes</h5>\n<div class=\"flex\">\n  <label class=\"checkbox\" for=\"test1\">\n    <input id=\"test1\" type=\"checkbox\" />\n    <span class=\"icon _mrxs\"></span>\n    Selection 1\n  </label>\n  <label class=\"checkbox _mll\" for=\"test2\">\n    <input id=\"test2\" type=\"checkbox\" />\n    <span class=\"icon _mrxs\"></span>\n    Selection 2\n  </label>\n  <label class=\"checkbox _mll\" for=\"test3\">\n    <input id=\"test3\" type=\"checkbox\" />\n    <span class=\"icon _mrxs\"></span>\n    Selection 3\n  </label>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}label class=\"checkbox\" for=\"test1\">\n      {{'&lt;'}}input id=\"test1\" type=\"checkbox\" />\n      {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n      Selection 1\n    {{'&lt;'}}/label>\n    {{'&lt;'}}label class=\"checkbox _mll\" for=\"test2\">\n      {{'&lt;'}}input id=\"test2\" type=\"checkbox\" />\n      {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n      Selection 2\n    {{'&lt;'}}/label>\n    {{'&lt;'}}label class=\"checkbox _mll\" for=\"test3\">\n      {{'&lt;'}}input id=\"test3\" type=\"checkbox\" />\n      {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n      Selection 3\n    {{'&lt;'}}/label>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"checkbox-stacked-active\"></a>\n<h5 class=\"_mtxl\">Stacked Active Checkboxes</h5>\n<div class=\"flex flex-column\">\n  <label class=\"checkbox\" for=\"test4\">\n    <input id=\"test4\" type=\"checkbox\" />\n    <span class=\"icon _mrxs\"></span>\n    Selection 1\n  </label>\n  <label class=\"checkbox _mtxs\" for=\"test5\">\n    <input id=\"test5\" type=\"checkbox\" />\n    <span class=\"icon _mrxs\"></span>\n    Selection 2\n  </label>\n  <label class=\"checkbox _mtxs\" for=\"test6\">\n    <input id=\"test6\" type=\"checkbox\" />\n    <span class=\"icon _mrxs\"></span>\n    Selection 3\n  </label>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex flex-column\">\n    {{'&lt;'}}label class=\"checkbox\" for=\"test4\">\n      {{'&lt;'}}input id=\"test4\" type=\"checkbox\" />\n      {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n      Selection 1\n    {{'&lt;'}}/label>\n    {{'&lt;'}}label class=\"checkbox _mtxs\" for=\"test5\">\n      {{'&lt;'}}input id=\"test5\" type=\"checkbox\" />\n      {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n      Selection 2\n    {{'&lt;'}}/label>\n    {{'&lt;'}}label class=\"checkbox _mtxs\" for=\"test6\">\n      {{'&lt;'}}input id=\"test6\" type=\"checkbox\" />\n      {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n      Selection 3\n    {{'&lt;'}}/label>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"checkbox-stacked-active-columns\"></a>\n<h5 class=\"_mtxl\">Stacked, Multi-column Active Checkboxes</h5>\n<div class=\"flex\">\n  <div class=\"flex flex-column\">\n    <label class=\"checkbox\" for=\"test7\">\n      <input id=\"test7\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 1, Selection 1\n    </label>\n    <label class=\"checkbox _mtxs\" for=\"test8\">\n      <input id=\"test8\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 1, Selection 2\n    </label>\n    <label class=\"checkbox _mtxs\" for=\"test9\">\n      <input id=\"test9\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 1, Selection 3\n    </label>\n  </div>\n  <div class=\"flex flex-column _mll\">\n    <label class=\"checkbox\" for=\"test10\">\n      <input id=\"test10\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 2, Selection 1\n    </label>\n    <label class=\"checkbox _mtxs\" for=\"test11\">\n      <input id=\"test11\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 2, Selection 2\n    </label>\n    <label class=\"checkbox _mtxs\" for=\"test12\">\n      <input id=\"test12\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 2, Selection 3\n    </label>\n  </div>\n  <div class=\"flex flex-column _mll\">\n    <label class=\"checkbox\" for=\"test13\">\n      <input id=\"test13\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 3, Selection 1\n    </label>\n    <label class=\"checkbox _mtxs\" for=\"test14\">\n      <input id=\"test14\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 3, Selection 2\n    </label>\n    <label class=\"checkbox _mtxs\" for=\"test15\">\n      <input id=\"test15\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 3, Selection 3\n    </label>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div class=\"flex flex-column\">\n      {{'&lt;'}}label class=\"checkbox\" for=\"test7\">\n        {{'&lt;'}}input id=\"test7\" type=\"checkbox\" />\n        {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n        Column 1, Selection 1\n      {{'&lt;'}}/label>\n      {{'&lt;'}}label class=\"checkbox _mtxs\" for=\"test8\">\n        {{'&lt;'}}input id=\"test8\" type=\"checkbox\" />\n        {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n        Column 1, Selection 2\n      {{'&lt;'}}/label>\n      {{'&lt;'}}label class=\"checkbox _mtxs\" for=\"test9\">\n        {{'&lt;'}}input id=\"test9\" type=\"checkbox\" />\n        {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n        Column 1, Selection 3\n      {{'&lt;'}}/label>\n    {{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"flex flex-column _mll\">\n      {{'&lt;'}}!-- Second column of checkboxes -->\n    {{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"flex flex-column _mll\">\n      {{'&lt;'}}!-- Third column of checkboxes -->\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"checkbox-disabled\"></a>\n<h5 class=\"_mtxl\">Disabling Checkboxes</h5>\n<div>\n  <label class=\"checkbox\" for=\"test16\">\n    <input id=\"test16\" disabled=\"true\" type=\"checkbox\" />\n    <span class=\"icon _mrs\"></span>\n    Selection 1\n  </label>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}label class=\"checkbox\" for=\"test16\">\n      {{'&lt;'}}input id=\"test16\" disabled=\"true\" type=\"checkbox\" />\n      {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n      Selection 1\n    {{'&lt;'}}/label>\n  </code>\n</pre>\n\n\n<a id=\"checkbox-select-all-active\"></a>\n<h5 class=\"_mtxl\">Select All Checkbox, Active (pattern)</h5>\n<div class=\"flex\">\n  <label class=\"checkbox\" for=\"test17\">\n    <input id=\"test17\" partial=\"false\" type=\"checkbox\" />\n    <span class=\"icon _mrs\"></span>\n    All\n  </label>\n  <label class=\"checkbox _mll\" for=\"test18\">\n    <input id=\"test18\" partial=\"true\" type=\"checkbox\" />\n    <span class=\"icon _mrs\"></span>\n    All\n  </label>\n  <label class=\"checkbox _mll\" for=\"test19\">\n    <input id=\"test19\" partial=\"true\" checked=\"checked\" type=\"checkbox\" />\n    <span class=\"icon _mrs\"></span>\n    All\n  </label>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Unselected 'All' checkbox -->\n  {{'&lt;'}}label class=\"checkbox\" for=\"test17\">\n    {{'&lt;'}}input id=\"test17\" partial=\"false\" type=\"checkbox\" />\n    {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n    All\n  {{'&lt;'}}/label>\n\n  {{'&lt;'}}!-- Mark as partial when some, not all, of the child checkboxes are checked -->\n  {{'&lt;'}}label class=\"checkbox _mll\" for=\"test18\">\n    {{'&lt;'}}input id=\"test18\" partial=\"true\" type=\"checkbox\" />\n    {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n    All\n  {{'&lt;'}}/label>\n\n  {{'&lt;'}}!-- Selected 'All' checkbox' -->\n  {{'&lt;'}}label class=\"checkbox _mll\" for=\"test19\">\n    {{'&lt;'}}input id=\"test19\" partial=\"true\" checked=\"checked\" type=\"checkbox\" />\n    {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n    All\n  {{'&lt;'}}/label>\n  </code>\n</pre>\n\n\n<a id=\"checkbox-select-all-disabled\"></a>\n<h5 class=\"_mtxl\">Select All Checkboxes, Disabled (pattern)</h5>\n<div class=\"flex\">\n  <label class=\"checkbox\" for=\"test20\">\n    <input id=\"test20\" disabled=\"disabled\" partial=\"false\" type=\"checkbox\" />\n    <span class=\"icon _mrs\"></span>\n    All\n  </label>\n  <label class=\"checkbox _mll\" for=\"test21\">\n    <input id=\"test21\" disabled=\"disabled\" partial=\"true\" type=\"checkbox\" />\n    <span class=\"icon _mrs\"></span>\n    All\n  </label>\n  <label class=\"checkbox _mll\" for=\"test21\">\n    <input id=\"test21\" disabled=\"disabled\" partial=\"true\" checked=\"checked\" type=\"checkbox\" />\n    <span class=\"icon _mrs\"></span>\n    All\n  </label>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}label class=\"checkbox\" for=\"test20\">\n    {{'&lt;'}}input id=\"test20\" disabled=\"disabled\" partial=\"false\" type=\"checkbox\" />\n    {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n    All\n  {{'&lt;'}}/label>\n  {{'&lt;'}}label class=\"checkbox _mll\" for=\"test21\">\n    {{'&lt;'}}input id=\"test21\" disabled=\"disabled\" partial=\"true\" type=\"checkbox\" />\n    {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n    All\n  {{'&lt;'}}/label>\n  {{'&lt;'}}label class=\"checkbox _mll\" for=\"test21\">\n    {{'&lt;'}}input id=\"test21\" disabled=\"disabled\" partial=\"true\" checked=\"checked\" type=\"checkbox\" />\n    {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n    All\n  {{'&lt;'}}/label>\n  </code>\n</pre>\n\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/checkboxes/checkboxes.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/checkboxes/checkboxes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckboxesComponent = (function (_super) {
    __extends(CheckboxesComponent, _super);
    function CheckboxesComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return CheckboxesComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
CheckboxesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-checkboxes',
        template: __webpack_require__("../../../../../src/docs/app/sections/checkboxes/checkboxes.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/checkboxes/checkboxes.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], CheckboxesComponent);

var _a;
//# sourceMappingURL=checkboxes.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/clearable-input/clearable-input.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Clearable Input</h1>\n\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-clearable-input --save\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} ClearableInputModule } from 'suprematism-clearable-input';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      ClearableInputModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n<h5 class=\"_mtxl\">Simple Example</h5>\n<div>\n  <supre-clearable-input\n    [search]=true\n    placeholder=\"Search\"\n    [value]=\"value || ''\"\n    (valueChange)=\"value = $event\"\n    >\n  </supre-clearable-input>\n  <div>Search: {{value}}</div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-clearable-input\n      [search]=true\n      placeholder=\"Search\"\n      [value]=\"value || ''\"\n      (valueChange)=\"value = $event\"\n      >\n    {{'&lt;'}}/supre-clearable-input>\n  </code>\n</pre>\n\n<h5 class=\"_mtxl\">Input Type</h5>\n<div>\n  <supre-clearable-input\n    type=\"number\"\n    placeholder=\"Enter number\"\n    [value]=\"value2 || ''\"\n    (valueChange)=\"value2 = $event\"\n    >\n  </supre-clearable-input>\n  <div>Search: {{value2}}</div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-clearable-input\n      type=\"number\"\n      placeholder=\"Enter number\"\n      [value]=\"value2 || ''\"\n      (valueChange)=\"value2 = $event\"\n      >\n    {{'&lt;'}}/supre-clearable-input>\n  </code>\n</pre>\n\n<h5 class=\"_mtxl\">Debouncing</h5>\n<div>\n  <supre-clearable-input\n    type=\"text\"\n    placeholder=\"Enter Search\"\n    [value]=\"value3 || ''\"\n    [search]=\"true\"\n    debounce=\"400\"\n    (valueChange)=\"value3 = $event\"\n    >\n  </supre-clearable-input>\n  <div>Search: {{value3}}</div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-clearable-input\n      type=\"text\"\n      placeholder=\"Enter Search\"\n      [value]=\"value3 || ''\"\n      [search]=\"true\"\n      debounce=\"400\"\n      (valueChange)=\"value3 = $event\"\n      >\n    {{'&lt;'}}/supre-clearable-input>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/clearable-input/clearable-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/clearable-input/clearable-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearableInputSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClearableInputSectionComponent = (function (_super) {
    __extends(ClearableInputSectionComponent, _super);
    function ClearableInputSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        _this.value = '';
        _this.value2 = 1;
        _this.value3 = 3;
        return _this;
    }
    return ClearableInputSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
ClearableInputSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-clearable-input',
        template: __webpack_require__("../../../../../src/docs/app/sections/clearable-input/clearable-input.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/clearable-input/clearable-input.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ClearableInputSectionComponent);

var _a;
//# sourceMappingURL=clearable-input.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/colors-section/colors-section.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Colors List</h1>\n\n<a id=\"colors-installation\"></a>\n<h5 class=\"_mtxl\">List of Colors</h5>\n<p>Colors are a Utility, add it to your SCSS file from here:</p>\n<pre class=\"code-block\">\n  <code class=\"language-css\">\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_colors.scss\";\n  </code>\n</pre>\n\n\n<!-- UI Colors -->\n<a id=\"colors-list\"></a>\n<h5 class=\"_mtxl\">List of Colors</h5>\n<div id=\"colors\" class=\"flex flex-column\">\n\n\n  <h6 class=\"_p0 _mtxl\">UI &amp; Text Colors</h6>\n  <div class=\"_mt0 flex flex-wrap _mbl\">\n\n    <div class=\"color-block-ice\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-off-white\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-gray\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-lemon\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-blue-gray\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-aqua\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-purple\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-mid-gray\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-lite-gray\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-blue\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-green\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-lite-green\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-soft-green\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-white\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-black\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-active-stroke\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-disabled-stroke\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-shark-skin\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-red\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n  </div>\n\n\n  <h6 class=\"_p0 _mtxl\">Sequence Colors</h6>\n  <div class=\"_mt0 flex flex-wrap _mbl\">\n\n    <div class=\"color-block-sequence-1\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-sequence-2\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-sequence-3\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-sequence-4\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n  </div>\n\n\n  <h6 class=\"_p0 _mtxl\">Visualization Colors</h6>\n  <div class=\"_mt0 flex flex-wrap _mbl\">\n\n    <div class=\"color-block-viz-aqua\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-viz-purple\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-viz-lime\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-viz-ocean\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-viz-orange\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-viz-blue\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-viz-yellow\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<a id=\"colors-classes\"></a>\n<h5 class=\"_mtxl\">Color Classes</h5>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}--\n    Use to set the background color on the element\n  -->\n  {{'&lt;'}}div class=\"bg-ice\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-off-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-lemon\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-blue-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-mid-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-lite-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-black\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-lite-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-active-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-disabled-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-soft-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-shark-skin\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-red\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"bg-sequence-1\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-sequence-2\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-sequence-3\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-sequence-4\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"bg-viz-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-viz-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-viz-lime\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-viz-ocean\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-viz-orange\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-viz-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-viz-yellow\">...{{'&lt;'}}/div>\n\n\n  {{'&lt;'}}--\n    Use to set the color of text in an element\n  -->\n  {{'&lt;'}}div class=\"color-ice\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-off-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-lemon\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-blue-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-mid-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-lite-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-black\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-lite-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-active-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-disabled-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-soft-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-shark-skin\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-red\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"color-sequence-1\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-sequence-2\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-sequence-3\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-sequence-4\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"color-viz-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-lime\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-ocean\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-orange\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-yellow\">...{{'&lt;'}}/div>\n\n\n  {{'&lt;'}}--\n    Use to set the color of borders on an element\n  --> <!-- Note to devs: make sure you update the colors section in the typography page -->\n  {{'&lt;'}}div class=\"border-ice\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-off-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-lemon\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-blue-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-mid-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-lite-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-black\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-lite-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-active-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-disabled-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-soft-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-shark-skin\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-red\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"border-sequence-1\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-sequence-2\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-sequence-3\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-sequence-4\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"border-viz-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-viz-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-viz-lime\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-viz-ocean\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-viz-orange\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-viz-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-viz-yellow\">...{{'&lt;'}}/div>\n\n  </code>\n</pre>\n\n\n<a id=\"colors-placeholders\"></a>\n<h5 class=\"_mtxl\">Color Placeholders</h5>\n<pre class=\"code-block\">\n  <code class=\"language-css\">\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_colors.scss\";\n  </code>\n</pre>\n<pre class=\"code-block\">\n  <code class=\"language-css\">\n  /**\n   * Use to add the background color in a style definition\n   */\n  @extend %bg-ice;\n  @extend %bg-off-white;\n  @extend %bg-gray;\n  @extend %bg-lemon;\n  @extend %bg-blue-gray;\n  @extend %bg-aqua;\n  @extend %bg-purple;\n  @extend %bg-mid-gray;\n  @extend %bg-blue;\n  @extend %bg-green;\n  @extend %bg-lite-green;\n  @extend %bg-white;\n  @extend %bg-black;\n  @extend %bg-lite-gray;\n  @extend %bg-active-stroke;\n  @extend %bg-disabled-stroke;\n  @extend %bg-soft-green;\n  @extend %bg-shark-skin;\n  @extend %bg-red;\n\n  @extend %bg-sequence-1;\n  @extend %bg-sequence-2;\n  @extend %bg-sequence-3;\n  @extend %bg-sequence-4;\n\n  @extend %bg-viz-aqua;\n  @extend %bg-viz-purple;\n  @extend %bg-viz-lime;\n  @extend %bg-viz-ocean;\n  @extend %bg-viz-orange;\n  @extend %bg-viz-blue;\n  @extend %bg-viz-yellow;\n\n\n  /**\n   * Use to add the color of text in a style definition\n   */ <!-- Note to devs: make sure you update the colors section in the typography page -->\n  @extend %color-ice;\n  @extend %color-off-white;\n  @extend %color-gray;\n  @extend %color-lemon;\n  @extend %color-blue-gray;\n  @extend %color-aqua;\n  @extend %color-purple;\n  @extend %color-mid-gray;\n  @extend %color-blue;\n  @extend %color-green;\n  @extend %color-lite-green;\n  @extend %color-white;\n  @extend %color-black;\n  @extend %color-lite-gray;\n  @extend %color-active-stroke;\n  @extend %color-disabled-stroke;\n  @extend %color-soft-green;\n  @extend %color-shark-skin;\n  @extend %color-red;\n\n  @extend %color-sequence-1;\n  @extend %color-sequence-2;\n  @extend %color-sequence-3;\n  @extend %color-sequence-4;\n\n  @extend %color-viz-aqua;\n  @extend %color-viz-purple;\n  @extend %color-viz-lime;\n  @extend %color-viz-ocean;\n  @extend %color-viz-orange;\n  @extend %color-viz-blue;\n  @extend %color-viz-yellow;\n\n\n  /**\n   * Use to set the color of borders in a style definition\n   */\n  @extend %border-ice;\n  @extend %border-off-white;\n  @extend %border-gray;\n  @extend %border-lemon;\n  @extend %border-blue-gray;\n  @extend %border-aqua;\n  @extend %border-purple;\n  @extend %border-mid-gray;\n  @extend %border-blue;\n  @extend %border-green;\n  @extend %border-lite-green;\n  @extend %border-white;\n  @extend %border-black;\n  @extend %border-lite-gray;\n  @extend %border-active-stroke;\n  @extend %border-disabled-stroke;\n  @extend %border-soft-green;\n  @extend %border-shark-skin;\n  @extend %border-red;\n\n  @extend %border-sequence-1;\n  @extend %border-sequence-2;\n  @extend %border-sequence-3;\n  @extend %border-sequence-4;\n\n  @extend %border-viz-aqua;\n  @extend %border-viz-purple;\n  @extend %border-viz-lime;\n  @extend %border-viz-ocean;\n  @extend %border-viz-orange;\n  @extend %border-viz-blue;\n  @extend %border-viz-yellow;\n\n  </code>\n</pre>\n\n\n<a id=\"colors-list-mixins\"></a>\n<h5 class=\"_mtxl\">Color List &amp; Mixins</h5>\n<pre class=\"code-block\">\n  <code class=\"language-css\">\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_colors.scss\";\n  </code>\n</pre>\n<pre class=\"code-block\">\n  <code class=\"language-css\">\n  //////////////////////////////////////////////////////////////////\n  // SASS/SCSS List of all the colors\n  //////////////////////////////////////////////////////////////////\n\n  $supre-colors: (\n\n    ('ice', $ice),\n    ('off-white', $off-white),\n    ('gray', $gray),\n    ('lemon', $lemon),\n    ('blue-gray', $blue-gray),\n    ('aqua', $aqua),\n    ('purple', $purple),\n    ('mid-gray', $mid-gray),\n    ('blue', $blue),\n    ('green', $green),\n    ('lite-green', $lite-green),\n    ('white', $white),\n    ('black', $black),\n    ('lite-gray', $lite-gray),\n    ('active-stroke', $active-stroke),\n    ('disabled-stroke', $disabled-stroke),\n    ('soft-green', $soft-green),\n    ('shark-skin', $shark-skin),\n    ('red', $red),\n\n    ('sequence-1', $sequence-1),\n    ('sequence-2', $sequence-2),\n    ('sequence-3', $sequence-3),\n    ('sequence-4', $sequence-4),\n\n    ('viz-aqua', $viz-aqua),\n    ('viz-purple', $viz-purple),\n    ('viz-lime', $viz-lime),\n    ('viz-ocean', $viz-ocean),\n    ('viz-orange', $viz-orange),\n    ('viz-blue', $viz-blue),\n    ('viz-yellow', $viz-yellow)\n\n  );\n\n\n  //////////////////////////////////////////////////////////////////\n  // Mixins\n  // These mixins can help with avoiding specificity issues\n  //////////////////////////////////////////////////////////////////\n\n  // append all background color classes\n  @mixin appendBackgroundColorClasses();\n  // add only the supplied background color classes\n  @mixin appendBackgroundColorClasses('aqua', 'lemon', 'viz-purple');\n\n\n  // append all text color classes\n  @mixin appendTextColorClasses();\n  // add only the supplied text color classes\n  @mixin appendTextColorClasses('blue', 'sequence-2', 'lite-gray', 'mid-gray');\n\n\n  // append all border color classes\n  @mixin appendBorderColorClasses();\n  // add only the supplied border color classes\n  @mixin appendBorderColorClasses('shark-skin', 'off-white');\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/colors-section/colors-section.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Design Reference:\n * https://cacoo.com/diagrams/88x93Ppap4rtGUhs#5F65C\n */\n/**\n * Collection of the colors\n */\n:host #colors .color-block-ice {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #e8ecf0; }\n  :host #colors .color-block-ice .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-ice .title:after {\n    content: \"$ice\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-ice .hex:after {\n    content: \"#e8ecf0\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-off-white {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #f6f6f6; }\n  :host #colors .color-block-off-white .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-off-white .title:after {\n    content: \"$off-white\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-off-white .hex:after {\n    content: \"#f6f6f6\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-gray {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #d5d8dd; }\n  :host #colors .color-block-gray .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-gray .title:after {\n    content: \"$gray\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-gray .hex:after {\n    content: \"#d5d8dd\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-lemon {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #ffd966; }\n  :host #colors .color-block-lemon .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-lemon .title:after {\n    content: \"$lemon\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-lemon .hex:after {\n    content: \"#ffd966\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-blue-gray {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #9fb3c3; }\n  :host #colors .color-block-blue-gray .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-blue-gray .title:after {\n    content: \"$blue-gray\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-blue-gray .hex:after {\n    content: \"#9fb3c3\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-aqua {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #55a0c2; }\n  :host #colors .color-block-aqua .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-aqua .title:after {\n    content: \"$aqua\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-aqua .hex:after {\n    content: \"#55a0c2\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-purple {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #6460aa; }\n  :host #colors .color-block-purple .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-purple .title:after {\n    content: \"$purple\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-purple .hex:after {\n    content: \"#6460aa\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-mid-gray {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #7f8a93; }\n  :host #colors .color-block-mid-gray .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-mid-gray .title:after {\n    content: \"$mid-gray\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-mid-gray .hex:after {\n    content: \"#7f8a93\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-blue {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #0082a9; }\n  :host #colors .color-block-blue .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-blue .title:after {\n    content: \"$blue\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-blue .hex:after {\n    content: \"#0082a9\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-green {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #7f982f; }\n  :host #colors .color-block-green .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-green .title:after {\n    content: \"$green\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-green .hex:after {\n    content: \"#7f982f\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-lite-green {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #a8c839; }\n  :host #colors .color-block-lite-green .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-lite-green .title:after {\n    content: \"$lite-green\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-lite-green .hex:after {\n    content: \"#a8c839\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-white {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #ffffff; }\n  :host #colors .color-block-white .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-white .title:after {\n    content: \"$white\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-white .hex:after {\n    content: \"#ffffff\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-black {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #000000; }\n  :host #colors .color-block-black .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-black .title:after {\n    content: \"$black\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-black .hex:after {\n    content: \"#000000\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-lite-gray {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #cccccc; }\n  :host #colors .color-block-lite-gray .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-lite-gray .title:after {\n    content: \"$lite-gray\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-lite-gray .hex:after {\n    content: \"#cccccc\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-active-stroke {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #c2cdd8; }\n  :host #colors .color-block-active-stroke .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-active-stroke .title:after {\n    content: \"$active-stroke\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-active-stroke .hex:after {\n    content: \"#c2cdd8\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-disabled-stroke {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #d5d8dd; }\n  :host #colors .color-block-disabled-stroke .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-disabled-stroke .title:after {\n    content: \"$disabled-stroke\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-disabled-stroke .hex:after {\n    content: \"#d5d8dd\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-soft-green {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #eff6e1; }\n  :host #colors .color-block-soft-green .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-soft-green .title:after {\n    content: \"$soft-green\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-soft-green .hex:after {\n    content: \"#eff6e1\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-shark-skin {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #6f7b86; }\n  :host #colors .color-block-shark-skin .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-shark-skin .title:after {\n    content: \"$shark-skin\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-shark-skin .hex:after {\n    content: \"#6f7b86\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-red {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #cf3b2c; }\n  :host #colors .color-block-red .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-red .title:after {\n    content: \"$red\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-red .hex:after {\n    content: \"#cf3b2c\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-sequence-1 {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #e47a39; }\n  :host #colors .color-block-sequence-1 .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-sequence-1 .title:after {\n    content: \"$sequence-1\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-sequence-1 .hex:after {\n    content: \"#e47a39\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-sequence-2 {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #78b1e4; }\n  :host #colors .color-block-sequence-2 .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-sequence-2 .title:after {\n    content: \"$sequence-2\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-sequence-2 .hex:after {\n    content: \"#78b1e4\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-sequence-3 {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #67ab9f; }\n  :host #colors .color-block-sequence-3 .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-sequence-3 .title:after {\n    content: \"$sequence-3\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-sequence-3 .hex:after {\n    content: \"#67ab9f\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-sequence-4 {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #9c5f87; }\n  :host #colors .color-block-sequence-4 .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-sequence-4 .title:after {\n    content: \"$sequence-4\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-sequence-4 .hex:after {\n    content: \"#9c5f87\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-viz-aqua {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #32cee6; }\n  :host #colors .color-block-viz-aqua .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-viz-aqua .title:after {\n    content: \"$viz-aqua\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-viz-aqua .hex:after {\n    content: \"#32cee6\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-viz-purple {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #9b75b1; }\n  :host #colors .color-block-viz-purple .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-viz-purple .title:after {\n    content: \"$viz-purple\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-viz-purple .hex:after {\n    content: \"#9b75b1\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-viz-lime {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #a8e077; }\n  :host #colors .color-block-viz-lime .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-viz-lime .title:after {\n    content: \"$viz-lime\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-viz-lime .hex:after {\n    content: \"#a8e077\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-viz-ocean {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #37c0a7; }\n  :host #colors .color-block-viz-ocean .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-viz-ocean .title:after {\n    content: \"$viz-ocean\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-viz-ocean .hex:after {\n    content: \"#37c0a7\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-viz-orange {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #f47634; }\n  :host #colors .color-block-viz-orange .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-viz-orange .title:after {\n    content: \"$viz-orange\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-viz-orange .hex:after {\n    content: \"#f47634\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-viz-blue {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #003da0; }\n  :host #colors .color-block-viz-blue .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-viz-blue .title:after {\n    content: \"$viz-blue\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-viz-blue .hex:after {\n    content: \"#003da0\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-viz-yellow {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #f7d03e; }\n  :host #colors .color-block-viz-yellow .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-viz-yellow .title:after {\n    content: \"$viz-yellow\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-viz-yellow .hex:after {\n    content: \"#f7d03e\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/colors-section/colors-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorsSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColorsSectionComponent = (function (_super) {
    __extends(ColorsSectionComponent, _super);
    function ColorsSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return ColorsSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
ColorsSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-colors-section',
        template: __webpack_require__("../../../../../src/docs/app/sections/colors-section/colors-section.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/colors-section/colors-section.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ColorsSectionComponent);

var _a;
//# sourceMappingURL=colors-section.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/date-range-input/date-range-input.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Date Range Input</h1>\n\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-date-range-input --save\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} DateRangeInputModule } from 'suprematism-date-range-input';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      DateRangeInputModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n<h5 class=\"_mtxl\">Pick a Range</h5>\n<supre-date-range-input\n  [value]=\"value\"\n  [min]=\"minDate\"\n  [max]=\"maxDate\"\n  [minDisplayWeeks]=\"minDisplayWeeks\"\n  [startDayOfWeek]=\"startDayOfWeek\"\n  (valueChange)=\"value = $event\">\n</supre-date-range-input>\n\n<div class=\"_mls\">\n  <label>min date:\n    <input placeholder=\"min date\" [ngModel]=\"minDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"onMinDateChange($event)\"\n           type=\"date\">\n  </label>\n  <label>max date:\n    <input placeholder=\"max date\" [ngModel]=\"maxDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"onMaxDateChange($event)\"\n           type=\"date\">\n  </label>\n  <label>minimum number of weeks to display on each calendar:\n    <input placeholder=\"min display weeks\" [(ngModel)]=\"minDisplayWeeks\">\n  </label>\n  <label>start day of week:</label>\n  <div>\n    <label>\n      <input type=\"radio\" [(ngModel)]=\"startDayOfWeek\" name=\"start\" [value]=\"startDayOfWeekEnum.sunday\">&nbsp;Sunday\n    </label>\n    <label>\n      <input type=\"radio\" [(ngModel)]=\"startDayOfWeek\" name=\"start\" [value]=\"startDayOfWeekEnum.monday\">&nbsp;Monday\n    </label>\n  </div>\n</div>\n<hr>\n<label>value:{{value}}</label>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-date-range-input\n      [value]=\"value\"\n      [min]=\"minDate\"\n      [max]=\"maxDate\"\n      [minDisplayWeeks]=\"minDisplayWeeks\"\n      [startDayOfWeek]=\"startDayOfWeek\"\n      (valueChange)=\"value = $event\"\n      >\n    {{'&lt;'}}/supre-date-range-input>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/date-range-input/date-range-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/date-range-input/date-range-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateRangeInputSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_suprematism_date_range_input__ = __webpack_require__("../../../../suprematism-date-range-input/src/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DateRangeInputSectionComponent = (function (_super) {
    __extends(DateRangeInputSectionComponent, _super);
    function DateRangeInputSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        _this.startDayOfWeekEnum = __WEBPACK_IMPORTED_MODULE_3_suprematism_date_range_input__["b" /* StartDayOfWeek */];
        return _this;
    }
    Object.defineProperty(DateRangeInputSectionComponent.prototype, "minDate", {
        get: function () {
            return this.minDt || new Date(2017, 6, 1);
        },
        set: function (newDate) {
            this.minDt = new Date(newDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangeInputSectionComponent.prototype, "maxDate", {
        get: function () {
            return this.maxDt || new Date(2017, 10, 1);
        },
        set: function (newDate) {
            this.maxDt = new Date(newDate);
        },
        enumerable: true,
        configurable: true
    });
    DateRangeInputSectionComponent.prototype.onMinDateChange = function (newDate) {
        var date = new Date(newDate);
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        this.minDate = new Date(date);
    };
    DateRangeInputSectionComponent.prototype.onMaxDateChange = function (newDate) {
        var date = new Date(newDate);
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        this.maxDate = new Date(date);
    };
    return DateRangeInputSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DateRangeInputSectionComponent.prototype, "minDate", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DateRangeInputSectionComponent.prototype, "maxDate", null);
DateRangeInputSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-date-range-input',
        template: __webpack_require__("../../../../../src/docs/app/sections/date-range-input/date-range-input.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/date-range-input/date-range-input.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], DateRangeInputSectionComponent);

var _a;
//# sourceMappingURL=date-range-input.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/donut-chart/donut-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Donut Chart</h1>\n\n\n<a id=\"donut-chart-install\"></a>\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-donut-chart --save\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} DonutChartModule } from 'suprematism-donut-chart';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      DonutChartModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n\n<h5 class=\"_mtxl\">Simple Example</h5>\n\n<supre-donut-chart\n  [values]=\"[80]\"\n  [thicknessPct]=\"20\">\n  80%\n</supre-donut-chart>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-donut-chart\n      [values]=\"[80]\"\n      [thicknessPct]=\"20\"\n      >\n    80%\n    {{'&lt;'}}/supre-donut-chart>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/donut-chart/donut-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example {\n  width: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/donut-chart/donut-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonutChartSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DonutChartSectionComponent = (function (_super) {
    __extends(DonutChartSectionComponent, _super);
    function DonutChartSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return DonutChartSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
DonutChartSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-donut-chart',
        template: __webpack_require__("../../../../../src/docs/app/sections/donut-chart/donut-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/donut-chart/donut-chart.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], DonutChartSectionComponent);

var _a;
//# sourceMappingURL=donut-chart.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/dropdown-menu/dropdown-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Dropdown Menu</h1>\n\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-dropdown-menu --save\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} DropdownMenuModule } from 'suprematism-dropdown-menu';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      DropdownMenuModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n\n\n\n\n<h5 class=\"_mtxl\">Trigger</h5>\n\n\n<h6>Trigger Event</h6>\n\n<p>The dropdown menu can open on either a click or hover.</p>\n<supre-dropdown-menu trigger=\"click\" [placements]=\"['bottom-right']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">trigger=\"click\"</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-right']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">trigger=\"hover\"</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-dropdown-menu trigger=\"click\" [placements]=\"['bottom-right']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">trigger=\"click\"{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-right']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">trigger=\"hover\"{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n  </code>\n</pre>\n\n<h6>Trigger Element</h6>\n<p>The triggering element can be anything.  To specify the triggering element add the attribute \"supre-dropdown-menu-button\" to the appropriate child.</p>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-right']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">Button</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-right']\">\n  <span supre-dropdown-menu-button style=\"font-size:12px;color:red;\">Anything</span>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-right']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">Button{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-right']\">\n      {{'&lt;'}}span supre-dropdown-menu-button>Anything{{'&lt;'}}/span>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n  </code>\n</pre>\n\n<h5>Placement</h5>\n<h6>placements Attribute</h6>\n<p>The side of the triggering element the menu is placed and how it is aligned.</p>\n<div style=\"margin-bottom:1em\">\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-right']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">top-right</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-middle']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">top-middle</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-left']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">top-left</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n</div>\n<div style=\"margin-bottom:1em\">\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-right']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">bottom-right</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-middle']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">bottom-middle</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-left']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">bottom-left</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n</div>\n<div style=\"margin-bottom:1em\">\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['right-bottom']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">right-bottom</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['right-middle']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">right-middle</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['right-top']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">right-top</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n</div>\n<div style=\"margin-bottom:1em\">\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['left-top']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">left-top</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['left-middle']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">left-middle</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['left-bottom']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">left-bottom</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n</div>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}div>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-right']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">top-right{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-middle']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">top-middle{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-left']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">top-left{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}/div>\n    {{'&lt;'}}div>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-right']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">bottom-right{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-middle']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">bottom-middle{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-left']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">bottom-left{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}/div>\n    {{'&lt;'}}div>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['right-bottom']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">right-bottom{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['right-middle']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">right-middle{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['right-top']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">right-top{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}/div>\n    {{'&lt;'}}div>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['left-top']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">left-top{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['left-middle']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">left-middle{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['left-bottom']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">left-bottom{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}/div>\n  </code>\n</pre>\n\n<h6>Placement Precidence</h6>\n<p>The 'placements' propery is an array of placements in which to try to fit the dropdown.  Each supplied placement will be tried in sequence until the dropdown fits on-screen.\n  If the dropdown does not fit onscreen for any of the specified placements it will be placed at the first specified placement.\n</p>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-right','top-right']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">bottom-right, top-right</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-right','top-right']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">bottom-right, top-right{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n  </code>\n</pre>\n\n\n<h5>Content</h5>\n<p>The dropdown menu has built-in support for menu items and headers, but can accept any content.</p>\n\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-right', 'top-right']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">Menu Items</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-right']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">With Header</button>\n  <div class=\"header\">Header</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-right']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">Custom Content</button>\n  <div style=\"padding:5px;\">\n    <div style=\"font-weight:bold;font-size:11px;\">Custom Content</div>\n    <button class=\"-action\">Custom</button></div>\n</supre-dropdown-menu>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-right', 'top-right']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">Menu Items{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-right']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">With Header{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"header\">Header{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-right']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">Custom Content{{'&lt;'}}/button>\n      {{'&lt;'}}div style=\"padding:5px;\">\n        {{'&lt;'}}div style=\"font-weight:bold;font-size:11px;\">Custom Content{{'&lt;'}}/div>\n        {{'&lt;'}}button class=\"-action\">Custom{{'&lt;'}}/button>{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n\n  </code>\n</pre>\n\n\n<h5>Close Event</h5>\n<p>You can control how events triggered on child menu items close the dropdown itself.\nUse the \"supreCloseEvent\" attribute to specify which type of event should close the dropdown.  This can be applied to any element in the DOM hierarchy between the child and the parent dropdown.  It will control how events on children at or below that level in the DOM close the dropdown.  This gives flexibility to specify different events for different children.\nSupported values include:</p>\n<ul>\n  <li>click: close the dropdown when a child is clicked</li>\n  <li>change: close the dropdown when a child is changed</li>\n  <li>none: do not close the dropdown on child interaction</li>\n</ul>\n\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-right']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">Click</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-right']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">Change</button>\n  <div style=\"padding:5px\" supreCloseEvent=\"change\"><select><option>One</option><option>Two</option><option>Three</option></select></div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-right']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">None</button>\n  <div style=\"padding:5px\" supreCloseEvent=\"none\"><select><option>One</option><option>Two</option><option>Three</option></select></div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-right']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">Click or Change</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Click</div>\n  <div style=\"padding:5px\" supreCloseEvent=\"change\"><select><option>Change</option><option>Two</option><option>Three</option></select></div>\n</supre-dropdown-menu>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-right']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">Click{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-right']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">Change{{'&lt;'}}/button>\n      {{'&lt;'}}div supreCloseEvent=\"change\">{{'&lt;'}}select>{{'&lt;'}}option>One{{'&lt;'}}/option>{{'&lt;'}}option>Two{{'&lt;'}}/option>{{'&lt;'}}option>Three{{'&lt;'}}/option>{{'&lt;'}}/select>{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-right']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">None{{'&lt;'}}/button>\n      {{'&lt;'}}div supreCloseEvent=\"none\">{{'&lt;'}}select>{{'&lt;'}}option>One{{'&lt;'}}/option>{{'&lt;'}}option>Two{{'&lt;'}}/option>{{'&lt;'}}option>Three{{'&lt;'}}/option>{{'&lt;'}}/select>{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['top-right']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">Click or Change{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Click{{'&lt;'}}/div>\n      {{'&lt;'}}div supreCloseEvent=\"change\">{{'&lt;'}}select>{{'&lt;'}}option>Change{{'&lt;'}}/option>{{'&lt;'}}option>Two{{'&lt;'}}/option>{{'&lt;'}}option>Three{{'&lt;'}}/option>{{'&lt;'}}/select>{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n\n  </code>\n</pre>\n\n\n<h5>Pointer Arrow</h5>\n<p>The menu by default has a pointer arrow.  This arrow can be removed by setting [pointed]=\"false\".</p>\n\n<supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-right','top-right']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">pointed=true</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n<supre-dropdown-menu trigger=\"hover\" [pointed]=\"false\"  [placements]=\"['bottom-right','top-right']\">\n  <button supre-dropdown-menu-button class=\"-dialog\">pointed=false</button>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--snapshot\"></span>Option One</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--edit\"></span>Option Two</div>\n  <div class=\"item\"><span class=\"u-supre-icon u-supre-icon--export\"></span>Option Three</div>\n</supre-dropdown-menu>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [placements]=\"['bottom-right','top-right']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">pointed=true{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n\n    {{'&lt;'}}supre-dropdown-menu trigger=\"hover\" [pointed]=\"false\"  [placements]=\"['bottom-right','top-right']\">\n      {{'&lt;'}}button supre-dropdown-menu-button class=\"-dialog\">pointed=false{{'&lt;'}}/button>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span>Option One{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>Option Two{{'&lt;'}}/div>\n      {{'&lt;'}}div class=\"item\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--export\">{{'&lt;'}}/span>Option Three{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-dropdown-menu>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/dropdown-menu/dropdown-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/dropdown-menu/dropdown-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownMenuSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DropdownMenuSectionComponent = (function (_super) {
    __extends(DropdownMenuSectionComponent, _super);
    function DropdownMenuSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return DropdownMenuSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
DropdownMenuSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-dropdown-menu',
        template: __webpack_require__("../../../../../src/docs/app/sections/dropdown-menu/dropdown-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/dropdown-menu/dropdown-menu.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], DropdownMenuSectionComponent);

var _a;
//# sourceMappingURL=dropdown-menu.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/dropdown-select/dropdown-select.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Dropdown Select</h1>\n\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-dropdown-select --save\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} DropdownSelectModule } from 'suprematism-dropdown-select';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      DropdownSelectModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n<h5 class=\"_mtxl\">Simple Example</h5>\n<div>\n  <supre-dropdown-select\n    [value]=\"[]\"\n    allLabel=\"All Star Wars Heroes\"\n    prompt=\"Select Start Wars Heroes\"\n    [options]=\"availableHeroes\"\n    (valueChange)=\"heroes=$event.value\">\n  </supre-dropdown-select>\n  Selection : {{heroes.join(',')}}\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  {{'&lt;'}}supre-dropdown-select\n    [value]=\"[]\"\n    allLabel=\"All Star Wars Heroes\"\n    prompt=\"Select Start Wars Heroes\"\n    [options]=\"availableHeroes\"\n    (valueChange)=\"heroes=$event.value\">\n  {{'&lt;'}}/supre-dropdown-select>\n  </code>\n</pre>\n\n<h5 style=\"margin-top:2em\">Treatment of Empty Selected Values</h5>\n<div>Sometimes you may want to treat an empty value as \"All\". Setting `emptyValueMode=\"all\"` will show all selected if `value` is empty\nand set value to an empty array when all options are selected. If no options are selected `value` will contain a single value determined by the `noneSelectedValue` property which defaults to -1.</div>\n\nVillains: {{villains.join(',')}}\n<supre-dropdown-select\n  [value]=\"[]\"\n  emptyValueMode=\"all\"\n  noneSelectedValue=\"none\"\n  allLabel=\"All Star Wars Villains\"\n  prompt=\"Select Star Wars Villain\"\n  [options]=\"availableVillains\"\n  (valueChange)=\"villains=$event.value\">\n</supre-dropdown-select>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-dropdown-select\n      [value]=\"[]\"\n      emptyValueMode=\"all\"\n      noneSelectedValue=\"none\"\n      allLabel=\"All Star Wars Villains\"\n      prompt=\"Select Star Wars Villain\"\n      [options]=\"availableVillains\"\n      (valueChange)=\"villains=$event.value\">\n    {{'&lt;'}}/supre-dropdown-select>\n  </code>\n</pre>\n\n<h5 style=\"margin-top:2em\">Button Label</h5>\n<p>You can specify a custom buttonLabel for the dropdown button.</p>\n  Planets: {{planets.join(',')}}\n<supre-dropdown-select\n  [buttonLabel]=\"getPlanetsLabel(planets)\"\n  allLabel=\"All Planets\"\n  [options]=\"availablePlanets\"\n  (valueChange)=\"planets=$event.value\"\n  >\n</supre-dropdown-select>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-dropdown-select\n      [buttonLabel]=\"getPlanetsLabel(model.planets)\"\n      allLabel=\"All Planets\"\n      [options]=\"availablePlanets\"\n      (valueChange)=\"planets=$event.value\"\n      >\n    {{'&lt;'}}/supre-dropdown-select>\n  </code>\n</pre>\n\n<h5>Trigger Events</h5>\n<p>Set an openTrigger and closeTrigger to control if the dropdown opens\n  on hover or click.  The default openTrigger is 'click' and closeTrigger is 'hover'.</p>\n\n<h6>Open=Click, Close=Hover (default)</h6>\n<supre-dropdown-select\n  prompt=\"Select Droid\"\n  openTrigger=\"click\"\n  closeTrigger=\"hover\"\n  allLabel=\"All Droids\"\n  [options]=\"availableDroids\">\n</supre-dropdown-select>\n\n<h6>Open=Click, Close=Click</h6>\n<supre-dropdown-select\n  prompt=\"Select Droid\"\n  openTrigger=\"click\"\n  closeTrigger=\"click\"\n  allLabel=\"All Droids\"\n  [options]=\"availableDroids\">\n</supre-dropdown-select>\n\n<h6>Open=Hover, Close=Hover</h6>\n<supre-dropdown-select\n  prompt=\"Select Droid\"\n  openTrigger=\"hover\"\n  closeTrigger=\"hover\"\n  allLabel=\"All Droids\"\n  [options]=\"availableDroids\">\n</supre-dropdown-select>\n\n<h6>Open=Hover, Close=Click</h6>\n<supre-dropdown-select\n  prompt=\"Select Droid\"\n  openTrigger=\"hover\"\n  closeTrigger=\"click\"\n  allLabel=\"All Droids\"\n  [options]=\"availableDroids\">\n</supre-dropdown-select>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-dropdown-select\n      prompt=\"Select Droid\"\n      openTrigger=\"hover\"\n      closeTrigger=\"click\"\n      allLabel=\"All Droids\"\n      [options]=\"availableDroids\">\n    {{'&lt;'}}/supre-dropdown-select>\n  </code>\n</pre>\n\n<h5>Hiding the \"All\" option</h5>\n<p>You can hide the \"All\" option by setting showAllOption=false</p>\n<supre-dropdown-select\n  emptyValue=\"none\"\n  [showAllOption]=\"false\"\n  prompt=\"Select Start Wars Villain\"\n  [options]=\"availableVillains\">\n</supre-dropdown-select>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-dropdown-select\n      emptyValue=\"none\"\n      [showAllOption]=\"false\"\n      prompt=\"Select Start Wars Villain\"\n      [options]=\"availableVillains\">\n    {{'&lt;'}}/supre-dropdown-select>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/dropdown-select/dropdown-select.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/dropdown-select/dropdown-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownSelectSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DropdownSelectSectionComponent = (function (_super) {
    __extends(DropdownSelectSectionComponent, _super);
    function DropdownSelectSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        _this.heroes = [];
        _this.availableHeroes = [
            { text: 'Luke Skywalker', value: 'luke' },
            { text: 'Han Solo', value: 'han' },
            { text: 'Princess Leia', value: 'leia' },
            { text: 'Chewbacca', value: 'chewy' },
            { text: 'Obiwan Kenobi', value: 'obiwan' },
            { text: 'Yoda', value: 'yoda' }
        ];
        _this.villains = [];
        _this.availableVillains = [
            { text: 'Darth Vader', value: 'darth' },
            { text: 'Emperor Palpatine', value: 'emperor' },
            { text: 'Governor Tarkin', value: 'tarkin' },
            { text: 'Jabba the Hut', value: 'jabba' },
            { text: 'Boba Fett', value: 'boba' }
        ];
        _this.droids = [];
        _this.availableDroids = [
            { text: 'R2D2', value: 'r2d2' },
            { text: 'C3PO', value: 'c3po' },
            { text: 'BB-8', value: 'bb8' },
            { text: 'K2SO', value: 'k2so' }
        ];
        _this.planets = [];
        _this.availablePlanets = [
            { text: 'Tatooine', value: 'tatooine' },
            { text: 'Hoth', value: 'hoth' },
            { text: 'Coruscant', value: 'coruscant' },
            { text: 'Jedda', value: 'jedda' }
        ];
        _this.getPlanetsLabel = function (planetIds) {
            if (planetIds.length === this.availablePlanets.length) {
                return 'Congrats! You selected All Planets!';
            }
            else if (!planetIds.length) {
                return 'No planets?  What\'s your problem?';
            }
            else if (planetIds.length === 1) {
                return 'That is a truly pathetic number of planets!';
            }
            else if (planetIds.length === 2) {
                return 'Come on! You can select more than that!';
            }
            else {
                return 'Select some more planets to get a free toaster.';
            }
        };
        return _this;
    }
    return DropdownSelectSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
DropdownSelectSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-dropdown-select',
        template: __webpack_require__("../../../../../src/docs/app/sections/dropdown-select/dropdown-select.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/dropdown-select/dropdown-select.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], DropdownSelectSectionComponent);

var _a;
//# sourceMappingURL=dropdown-select.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/dropdowns/dropdowns.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Dropdowns</h1>\n\n\n<a id=\"dropdown-no-icons\"></a>\n<h5 class=\"_mtxl\">Simple Dropdown, with no Icons</h5>\n<div tabindex=\"0\" class=\"dropdown-button\">\n  <div class=\"dropdown-label\">Dropdown</div>\n  <ul class=\"dropdown-content\">\n    <li class=\"item\" selected=\"false\">Item One</li>\n    <li class=\"item\" selected=\"false\">Item Two</li>\n    <li class=\"item\" selected=\"false\">Item Three</li>\n  </ul>\n</div>\n<div tabindex=\"0\" class=\"dropdown-button _mlm\">\n  <div class=\"dropdown-label\" selected=\"true\">Item Three</div>\n  <ul class=\"dropdown-content\">\n    <li class=\"item\" selected=\"false\">Item One</li>\n    <li class=\"item\" selected=\"false\">Item Two</li>\n    <li class=\"item\" selected=\"true\">Item Three</li>\n  </ul>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Basic use requires no parent containter to dictate width -->\n  {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button\">\n    {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n    {{'&lt;'}}ul class=\"dropdown-content\">\n      {{'&lt;'}}li class=\"item\" selected=\"false\">Item One{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"false\">Item Two{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"false\">Item Three{{'&lt;'}}/li>\n    {{'&lt;'}}/ul>\n  {{'&lt;'}}/div>\n\n  {{'&lt;'}}!--\n    When an item is selected:\n      - add the text to the dropdown-button\n      - set selected=\"true\" on the item\n  -->\n  {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button\">\n    {{'&lt;'}}div class=\"dropdown-label\" selected=\"true\">Item Three{{'&lt;'}}/div>\n    {{'&lt;'}}ul class=\"dropdown-content\">\n      {{'&lt;'}}li class=\"item\" selected=\"false\">Item One{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"false\">Item Two{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"true\">Item Three{{'&lt;'}}/li>\n    {{'&lt;'}}/ul>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n<a id=\"dropdown-with-icons\"></a>\n<h5 class=\"_mtxl\">Simple Dropdown, with Icons</h5>\n<div tabindex=\"0\" class=\"dropdown-button\">\n  <div class=\"dropdown-label\">Dropdown</div>\n  <ul class=\"dropdown-content\">\n    <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--Auto\"></span>Item name that is kind of long</li>\n    <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>Item name that is also long</li>\n    <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>Item name is short</li>\n  </ul>\n</div>\n<div tabindex=\"0\" class=\"dropdown-button _mlm\">\n  <div class=\"dropdown-label\" selected=\"true\"><span class=\"u-supre-icon u-supre-icon--CPG-food\"></span> Item name that is also long</div>\n  <ul class=\"dropdown-content\">\n    <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--Auto\"></span>Item name that is kind of long</li>\n    <li class=\"item\" selected=\"true\"><span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>Item name that is also long</li>\n    <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>Item name is short</li>\n  </ul>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Icons are added to each item -->\n  {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button\">\n    {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n    {{'&lt;'}}ul class=\"dropdown-content\">\n      {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>Item name that is kind of long{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span>Item name that is also long{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-home\">{{'&lt;'}}/span>Item name is short{{'&lt;'}}/li>\n    {{'&lt;'}}/ul>\n  {{'&lt;'}}/div>\n\n  {{'&lt;'}}!--\n    When an item is selected:\n      - add the icon and text to the dropdown-button\n      - set selected=\"true\" on the item\n  -->\n  {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button _mlm\">\n    {{'&lt;'}}div class=\"dropdown-label\" selected=\"true\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span> Item name that is also long{{'&lt;'}}/div>\n    {{'&lt;'}}ul class=\"dropdown-content\">\n      {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>Item name that is kind of long{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"true\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span>Item name that is also long{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-home\">{{'&lt;'}}/span>Item name is short{{'&lt;'}}/li>\n    {{'&lt;'}}/ul>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n<a id=\"dropup-no-icons\"></a>\n<h5 class=\"_mtxl\">Simple Dropup, with no Icons</h5>\n<div tabindex=\"0\" class=\"dropdown-button -top\">\n  <div class=\"dropdown-label\">Dropup</div>\n  <ul class=\"dropdown-content\">\n    <li class=\"item\" selected=\"false\">Item One</li>\n    <li class=\"item\" selected=\"false\">Item Two</li>\n    <li class=\"item\" selected=\"false\">Item Three</li>\n  </ul>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button -top\">\n      {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n      {{'&lt;'}}ul class=\"dropdown-content\">\n        {{'&lt;'}}li class=\"item\" selected=\"false\">Item One{{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">Item Two{{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">Item Three{{'&lt;'}}/li>\n      {{'&lt;'}}/ul>\n    {{'&lt;'}}/div>\n  </code>\n</pre>\n\n<a id=\"dropdown-disabled\"></a>\n<h5 class=\"_mtxl\">Simple Dropdown, disabled</h5>\n<div tabindex=\"0\" class=\"dropdown-button -disabled\">\n  <div class=\"dropdown-label\">Dropdown</div>\n  <ul class=\"dropdown-content\">\n    <li class=\"item\" selected=\"false\">Item One</li>\n    <li class=\"item\" selected=\"false\">Item Two</li>\n    <li class=\"item\" selected=\"false\">Item Three</li>\n  </ul>\n</div>\n<div tabindex=\"0\" class=\"dropdown-button _mlm -disabled\">\n  <div class=\"dropdown-label\" selected=\"true\">Item Three</div>\n  <ul class=\"dropdown-content\">\n    <li class=\"item\" selected=\"false\">Item One</li>\n    <li class=\"item\" selected=\"false\">Item Two</li>\n    <li class=\"item\" selected=\"true\">Item Three</li>\n  </ul>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button -disabled\">\n      {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n      {{'&lt;'}}ul class=\"dropdown-content\">\n        {{'&lt;'}}li class=\"item\" selected=\"false\">Item One{{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">Item Two{{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">Item Three{{'&lt;'}}/li>\n      {{'&lt;'}}/ul>\n    {{'&lt;'}}/div>\n    {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button _mlm -disabled\">\n      {{'&lt;'}}div class=\"dropdown-label\" selected=\"true\">Item Three{{'&lt;'}}/div>\n      {{'&lt;'}}ul class=\"dropdown-content\">\n        {{'&lt;'}}li class=\"item\" selected=\"false\">Item One{{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">Item Two{{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"true\">Item Three{{'&lt;'}}/li>\n      {{'&lt;'}}/ul>\n    {{'&lt;'}}/div>\n  </code>\n</pre>\n\n<a id=\"dropdown-with-width\"></a>\n<h5 class=\"_mtxl\">Applying a specific width</h5>\n<div style=\"width: 240px;\">\n  <div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    <div class=\"dropdown-label\">Dropdown</div>\n    <ul class=\"dropdown-content\">\n      <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--Auto\"></span>Item</li>\n      <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>Item</li>\n      <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>Item name that is kind of long</li>\n    </ul>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Create a parent container with a width (inline style used for example)-->\n  {{'&lt;'}}!-- Apply the min-fit class to the dropdown-button (min-width: 100%) -->\n  {{'&lt;'}}!-- Using the min-fit class would fill any parent container -->\n  {{'&lt;'}}div style=\"width: 240px;\">\n    {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button min-fit\">\n      {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n      {{'&lt;'}}ul class=\"dropdown-content\">\n        {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>Item{{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span>Item{{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-home\">{{'&lt;'}}/span>Item name that is kind of long{{'&lt;'}}/li>\n      {{'&lt;'}}/ul>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"dropdown-with-checkboxes\"></a>\n<h5 class=\"_mtxl\">Adding checkboxes</h5>\n<p class=\"_ts1\">(<a [routerLink]=\"['/section/checkboxes']\">Checkboxes Details</a>)</p>\n<div style=\"width: 260px\" class=\"_mtm\">\n  <div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    <div class=\"dropdown-label\">Dropdown</div>\n    <ul class=\"dropdown-content\">\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test\">\n          <input id=\"test\" type=\"checkbox\" />\n          <span class=\"icon _mrs\"></span>Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test2\">\n          <input id=\"test2\" type=\"checkbox\" />\n          <span class=\"icon\"></span>Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test3\">\n          <input id=\"test3\" type=\"checkbox\" />\n          <span class=\"icon\"></span>Item name that is kind of long\n        </label>\n      </li>\n    </ul>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Wrap the text into the checkbox markup -->\n  {{'&lt;'}}div style=\"width: 260px\">\n    {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button min-fit\">\n      {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n      {{'&lt;'}}ul class=\"dropdown-content\">\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test\">\n            {{'&lt;'}}input id=\"test\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test2\">\n            {{'&lt;'}}input id=\"test2\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test3\">\n            {{'&lt;'}}input id=\"test3\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>Item name that is kind of long\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n      {{'&lt;'}}/ul>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"dropdown-with-checkboxes-and-icons\"></a>\n<h5 class=\"_mtxl\">Checkboxes with Icons</h5>\n<p class=\"_ts1\">(<a [routerLink]=\"['/section/checkboxes']\">Checkboxes Details</a>)</p>\n<div style=\"width: 260px\" class=\"_mtm\">\n  <div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    <div class=\"dropdown-label\">Dropdown</div>\n    <ul class=\"dropdown-content\">\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test4\">\n          <input id=\"test4\" type=\"checkbox\" />\n          <span class=\"icon _mrs\"></span>\n          <span class=\"u-supre-icon u-supre-icon--Auto\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test5\">\n          <input id=\"test5\" type=\"checkbox\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test6\">\n          <input id=\"test6\" type=\"checkbox\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>\n          Item name that is kind of long\n        </label>\n      </li>\n    </ul>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Add an icon to the checkbox markup -->\n  {{'&lt;'}}div style=\"width: 260px\">\n    {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button min-fit\">\n      {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n      {{'&lt;'}}ul class=\"dropdown-content\">\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test4\">\n            {{'&lt;'}}input id=\"test4\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test5\">\n            {{'&lt;'}}input id=\"test5\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test6\">\n            {{'&lt;'}}input id=\"test6\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-home\">{{'&lt;'}}/span>\n            Item name that is kind of long\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n      {{'&lt;'}}/ul>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"dropdown-mark-item-and-checkbox-selected\"></a>\n<h5 class=\"_mtxl\">Marking Items with Checkboxes as Selected</h5>\n<p class=\"_ts1\">(<a [routerLink]=\"['/section/checkboxes']\">Checkboxes Details</a>)</p>\n<div style=\"width: 260px\" class=\"_mtm\">\n  <div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    <div class=\"dropdown-label\">Dropdown</div>\n    <ul class=\"dropdown-content\">\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test7\">\n          <input id=\"test7\" type=\"checkbox\" />\n          <span class=\"icon _mrs\"></span>\n          <span class=\"u-supre-icon u-supre-icon--Auto\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"true\">\n        <label class=\"checkbox\" for=\"test8\">\n          <input id=\"test8\" type=\"checkbox\" checked=\"checked\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test9\">\n          <input id=\"test9\" type=\"checkbox\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>\n          Item name that is kind of long\n        </label>\n      </li>\n    </ul>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!--\n    To mark an item and its checkbox as selected apply:\n      - add selected=\"true\" to the .item element\n      - add the checked=\"checked\" attribute to the input element\n  -->\n  {{'&lt;'}}div style=\"width: 260px\">\n    {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button min-fit\">\n      {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n      {{'&lt;'}}ul class=\"dropdown-content\">\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test7\">\n            {{'&lt;'}}input id=\"test7\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}!-- add selected=\"true\" to an .item element -->\n        {{'&lt;'}}li class=\"item\" selected=\"true\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test8\">\n            {{'&lt;'}}!-- set the checked attribute on the input -->\n            {{'&lt;'}}input id=\"test8\" type=\"checkbox\" checked=\"checked\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test9\">\n            {{'&lt;'}}input id=\"test9\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-home\">{{'&lt;'}}/span>\n            Item name that is kind of long\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n      {{'&lt;'}}/ul>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"dropdown-with-select-all\"></a>\n<h5 class=\"_mtxl\">Using a Select All Checkbox</h5>\n<p class=\"_ts1\">(<a [routerLink]=\"['/section/checkboxes']\">Checkboxes Details</a>)</p>\n<div style=\"width: 260px;\" class=\"_mtm\">\n  <div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    <div class=\"dropdown-label\">Dropdown</div>\n    <ul class=\"dropdown-content\">\n      <li class=\"item\" selected=\"true\">\n        <label class=\"checkbox\" for=\"test10\">\n          <input id=\"test10\" type=\"checkbox\" partial=\"false\" checked=\"checked\" />\n          <span class=\"icon _mrs\"></span>\n          <span class=\"u-supre-icon u-supre-icon--Auto\"></span>\n          All\n        </label>\n      </li>\n      <li class=\"item\" selected=\"true\">\n        <label class=\"checkbox\" for=\"test11\">\n          <input id=\"test11\" type=\"checkbox\" checked=\"checked\" />\n          <span class=\"icon _mrs\"></span>\n          <span class=\"u-supre-icon u-supre-icon--Auto\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"true\">\n        <label class=\"checkbox\" for=\"test12\">\n          <input id=\"test12\" type=\"checkbox\" checked=\"checked\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"true\">\n        <label class=\"checkbox\" for=\"test13\">\n          <input id=\"test13\" type=\"checkbox\" checked=\"checked\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>\n          Item name that is kind of long\n        </label>\n      </li>\n    </ul>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  <!-- When using an all checkbox, disable all the other checkboxes when all is selected -->\n  {{'&lt;'}}div style=\"width: 260px\">\n    {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button min-fit\">\n      {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n      {{'&lt;'}}ul class=\"dropdown-content\">\n        {{'&lt;'}}li class=\"item\" selected=\"true\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test10\">\n            {{'&lt;'}}input id=\"test10\" type=\"checkbox\" partial=\"false\" checked=\"checked\" />\n            {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>\n            All\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"true\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test11\">\n            {{'&lt;'}}input id=\"test11\" type=\"checkbox\" checked=\"checked\" />\n            {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"true\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test12\">\n            {{'&lt;'}}input id=\"test12\" type=\"checkbox\" checked=\"checked\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"true\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test13\">\n            {{'&lt;'}}input id=\"test13\" type=\"checkbox\" checked=\"checked\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-home\">{{'&lt;'}}/span>\n            Item name that is kind of long\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n      {{'&lt;'}}/ul>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"dropdown-with-partial-select-all-status\"></a>\n<h5 class=\"_mtxl\">When Select All is Present, but the Child Items Are Not All Selected</h5>\n<p class=\"_ts1\">(<a [routerLink]=\"['/section/checkboxes']\">Checkboxes Details</a>)</p>\n<div style=\"width: 260px\" class=\"_mtm\">\n  <div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    <div class=\"dropdown-label\">Dropdown</div>\n    <ul class=\"dropdown-content\">\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test14\">\n          <input id=\"test14\" type=\"checkbox\" partial=\"true\" />\n          <span class=\"icon _mrs\"></span>\n          All\n        </label>\n      </li>\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test15\">\n          <input id=\"test15\" type=\"checkbox\" />\n          <span class=\"icon _mrs\"></span>\n          <span class=\"u-supre-icon u-supre-icon--Auto\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"true\">\n        <label class=\"checkbox\" for=\"test16\">\n          <input id=\"test16\" type=\"checkbox\" checked=\"checked\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"true\">\n        <label class=\"checkbox\" for=\"test17\">\n          <input id=\"test17\" type=\"checkbox\" checked=\"checked\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>\n          Item name that is kind of long\n        </label>\n      </li>\n    </ul>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div style=\"width: 260px\">\n    {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button min-fit\">\n      {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n      {{'&lt;'}}ul class=\"dropdown-content\">\n        {{'&lt;'}}!-- mark the item as selected=\"false\" -->\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test14\">\n            {{'&lt;'}}!-- add the partial=\"true\" to the input element -->\n            {{'&lt;'}}!-- note: the input is not checked -->\n            {{'&lt;'}}input id=\"test14\" type=\"checkbox\" partial=\"true\" />\n            {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n            All\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test15\">\n            {{'&lt;'}}input id=\"test15\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"true\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test16\">\n            {{'&lt;'}}input id=\"test16\" type=\"checkbox\" checked=\"checked\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"true\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test17\">\n            {{'&lt;'}}input id=\"test17\" type=\"checkbox\" checked=\"checked\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-home\">{{'&lt;'}}/span>\n            Item name that is kind of long\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n      {{'&lt;'}}/ul>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"dropdown-angular-sample\"></a>\n<h5 class=\"_mtxl\">Angular Component (Using Observables)</h5>\n<p class=\"_ts1\">(<a [routerLink]=\"['/section/checkboxes']\">Checkboxes Details</a>)</p>\n<div style=\"width: 260px\" class=\"_mtm\">\n  <div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    <div class=\"dropdown-label\">{{dropdownSelectionText}}</div>\n    <ul class=\"dropdown-content\">\n\n      <li *ngFor=\"let item of dropdownModel\" class=\"item\" [attr.selected]=\"item.selected\">\n        <label class=\"checkbox\" for=\"item-{{item.id}}\">\n          <input *ngIf=\"item.type === 'all'\" id=\"item-{{item.id}}\" type=\"checkbox\" [attr.checked]=\"item.selected ? 'checked' : null\" [attr.partial]=\"item.partial\" (click)=\"toggleAllItem(item.id);\" />\n          <input *ngIf=\"item.type === 'item'\" id=\"item-{{item.id}}\" type=\"checkbox\" [attr.checked]=\"item.selected ? 'checked' : null\" (click)=\"toggleItem(item.id);\" />\n          <span class=\"icon _mrs\"></span>\n          <span *ngIf=\"item.icon\" class=\"u-supre-icon {{item.icon}}\"></span>\n          {{item.label}}\n        </label>\n      </li>\n\n    </ul>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!--\n    Component Template\n  -->\n  {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n    {{'&lt;'}}ul class=\"dropdown-content\">\n\n      {{'&lt;'}}li *ngFor=\"let item of dropdownModel\" class=\"item\" [attr.selected]=\"item.selected\">\n        {{'&lt;'}}label class=\"checkbox\" for=\"item-{{'&#123;'}}{{'&#123;'}}item.id{{'&#125;'}}{{'&#125;'}}\">\n          {{'&lt;'}}input *ngIf=\"item.type === 'all'\" id=\"item-{{'&#123;'}}{{'&#123;'}}item.id{{'&#125;'}}{{'&#125;'}}\" type=\"checkbox\" [attr.checked]=\"item.selected ? 'checked' : null\" [attr.partial]=\"item.partial\" (click)=\"toggleAllItem(item.id);\" />\n          {{'&lt;'}}input *ngIf=\"item.type === 'item'\" id=\"item-{{'&#123;'}}{{'&#123;'}}item.id{{'&#125;'}}{{'&#125;'}}\" type=\"checkbox\" [attr.checked]=\"item.selected ? 'checked' : null\" (click)=\"toggleItem(item.id);\" />\n          {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n          {{'&lt;'}}span *ngIf=\"item.icon\" class=\"u-supre-icon {{'&#123;'}}{{'&#123;'}}item.icon{{'&#125;'}}{{'&#125;'}}\">{{'&lt;'}}/span>\n          {{'&#123;'}}{{'&#123;'}}item.label{{'&#125;'}}{{'&#125;'}}\n        {{'&lt;'}}/label>\n      {{'&lt;'}}/li>\n\n    {{'&lt;'}}/ul>\n  {{'&lt;'}}/div>\n  </code>\n  <code class=\"language-typescript\">\n  /**\n    * Sample Component Code\n    *\n    * In a real application it is recommended that the methods and model be implemented\n    * in a service, not within the component. It is recommended that the component uses\n    * unidirectional data flow.\n    *\n    * Also, always remember to unsubscribe all your subscriptions onDestory\n    */\n\n  // public members\n  public dropdownModel: Array{{'&lt;'}}any> = [];\n  public dropdownSelectionText: string = '';\n\n  // private members\n  private dropdown$: ReplaySubject{{'&lt;'}}any> = new ReplaySubject{{'&lt;'}}any>(1);\n\n\n  /**\n  * Creates an instance of DropdownsComponent.\n  *\n  * @memberOf DropdownsComponent\n  */\n  constructor() {{'&#123;'}}\n\n    // init the model\n    this.dropdown$.next([\n      {{'&#123;'}}\n        id: 0,\n        label: 'All',\n        selected: false,\n        icon: null,\n        partial: false,\n        type: 'all'\n      },\n      {{'&#123;'}}\n        id: 1,\n        label: 'Auto',\n        icon: 'u-supre-icon--Auto',\n        selected: false,\n        type: 'item'\n      },\n      {{'&#123;'}}\n        id: 2,\n        label: 'Ecommerce',\n        icon: 'u-supre-icon--ecommerce',\n        selected: false,\n        type: 'item'\n      },\n      {{'&#123;'}}\n        id: 3,\n        label: 'Finance',\n        icon: 'u-supre-icon--finance',\n        selected: false,\n        type: 'item'\n      },\n      {{'&#123;'}}\n        id: 4,\n        label: 'Travel',\n        icon: 'u-supre-icon--travel',\n        selected: false,\n        type: 'item'\n      }\n    ]);\n\n  }\n\n\n  /**\n  * OnInit hook\n  *\n  *\n  * @memberOf DropdownsComponent\n  */\n  ngOnInit() {{'&#123;'}}\n    this.dropdown$.subscribe(model => {{'&#123;'}}\n      // sync the model\n      this.dropdownModel = model;\n      // make the button title human readable\n      if (model.filter(item => item.selected).length === 0) {{'&#123;'}}\n        this.dropdownSelectionText = \"Select Categories\";\n      } else\n      if (model.filter(item => item.selected).length === 1) {{'&#123;'}}\n        this.dropdownSelectionText = \"1 Category Selected\";\n      } else\n      if (model.filter(item => item.selected).length === model.length) {{'&#123;'}}\n        this.dropdownSelectionText = `All Categories Selected`;\n      } else {{'&#123;'}}\n        this.dropdownSelectionText = `${{'&#123;'}}model.filter(item => item.selected).length} Categories Selected`;\n      }\n    });\n  }\n\n\n  /**\n  * Toggle a single item\n  *\n  * @param {{'&#123;'}}number} itemId\n  *\n  * @memberOf DropdownsComponent\n  */\n  toggleItem(itemId: number) {{'&#123;'}}\n    this.dropdown$\n      .take(1)\n      .subscribe(state => this.dropdown$.next(\n        update(state, Number(itemId))\n      ));\n\n    function update(state, id) {{'&#123;'}}\n      return state.slice(0)\n        .map(item => {{'&#123;'}}\n          if(item.id === id){{'&#123;'}}\n            return Object.assign({{'&#123;'}}}, item, {{'&#123;'}}selected: !item.selected});\n          }\n          return item;\n        })\n        .reduce((items, item, index, orig_collection) => {{'&#123;'}}\n          if (item.type === 'all') {{'&#123;'}}\n            let all_items = orig_collection.slice(1).every(item => item.selected),\n                some_items = orig_collection.slice(1).some(item => item.selected);\n            if (some_items) {{'&#123;'}} item.selected = false; item.partial = true; }\n            if (all_items) {{'&#123;'}} item.selected = true; item.partial = false; }\n            if (!some_items && !all_items) {{'&#123;'}} item.selected = false; item.partial = false; }\n          }\n          return items.concat(item);\n        }, []);\n    }\n  }\n\n\n  /**\n  * Toggle all the items\n  *\n  * @param {{'&#123;'}}number} itemId\n  *\n  * @memberOf DropdownsComponent\n  */\n  toggleAllItem(itemId: number) {{'&#123;'}}\n    this.dropdown$\n      .take(1)\n      .subscribe(state => this.dropdown$.next(\n        update(state, Number(itemId))\n      ));\n\n    function update(state, id) {{'&#123;'}}\n      let selected = !state[id].selected;\n      return state.slice(0)\n        .map(item => {{'&#123;'}}\n          if (item.type === 'all') {{'&#123;'}}\n            return Object.assign({{'&#123;'}}}, item, {{'&#123;'}}selected, partial: false});\n          } else {{'&#123;'}}\n            return Object.assign({{'&#123;'}}}, item, {{'&#123;'}}selected});\n          }\n        });\n    }\n  }\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/dropdowns/dropdowns.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/dropdowns/dropdowns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DropdownsComponent = (function (_super) {
    __extends(DropdownsComponent, _super);
    /**
     * Creates an instance of DropdownsComponent.
     *
     * @param {ActivatedRoute} route
     *
     * @memberOf DropdownsComponent
     */
    function DropdownsComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        // public members
        _this.dropdownModel = [];
        _this.dropdownSelectionText = '';
        // private members
        _this.dropdown$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["ReplaySubject"](1);
        // init the model
        _this.dropdown$.next([
            {
                id: 0,
                label: 'All',
                selected: false,
                icon: null,
                partial: false,
                type: 'all'
            },
            {
                id: 1,
                label: 'Auto',
                icon: 'u-supre-icon--Auto',
                selected: false,
                type: 'item'
            },
            {
                id: 2,
                label: 'Ecommerce',
                icon: 'u-supre-icon--ecommerce',
                selected: false,
                type: 'item'
            },
            {
                id: 3,
                label: 'Finance',
                icon: 'u-supre-icon--finance',
                selected: false,
                type: 'item'
            },
            {
                id: 4,
                label: 'Travel',
                icon: 'u-supre-icon--travel',
                selected: false,
                type: 'item'
            }
        ]);
        return _this;
    }
    /**
     * OnInit hook
     *
     *
     * @memberOf DropdownsComponent
     */
    DropdownsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addSubscription = this.dropdown$.subscribe(function (model) {
            _this.dropdownModel = model;
            if (model.filter(function (item) { return item.selected; }).length === 0) {
                _this.dropdownSelectionText = 'Select Categories';
            }
            else if (model.filter(function (item) { return item.selected; }).length === 1) {
                _this.dropdownSelectionText = '1 Category Selected';
            }
            else if (model.filter(function (item) { return item.selected; }).length === model.length) {
                _this.dropdownSelectionText = "All Categories Selected";
            }
            else {
                _this.dropdownSelectionText = model.filter(function (item) { return item.selected; })
                    .length + " Categories Selected";
            }
        });
    };
    /**
     * Toggle a single item
     *
     * @param {number} itemId
     *
     * @memberOf DropdownsComponent
     */
    DropdownsComponent.prototype.toggleItem = function (itemId) {
        var _this = this;
        this.dropdown$
            .take(1)
            .subscribe(function (state) { return _this.dropdown$.next(update(state, Number(itemId))); });
        function update(state, id) {
            return state
                .slice(0)
                .map(function (item) {
                if (item.id === id) {
                    return Object.assign({}, item, { selected: !item.selected });
                }
                return item;
            })
                .reduce(function (items, item, index, orig_collection) {
                if (item.type === 'all') {
                    var all_items = orig_collection
                        .slice(1)
                        .every(function (itm) { return itm.selected; }), some_items = orig_collection.slice(1).some(function (itm) { return itm.selected; });
                    if (some_items) {
                        item.selected = false;
                        item.partial = true;
                    }
                    if (all_items) {
                        item.selected = true;
                        item.partial = false;
                    }
                    if (!some_items && !all_items) {
                        item.selected = false;
                        item.partial = false;
                    }
                }
                return items.concat(item);
            }, []);
        }
    };
    /**
     * Toggle all the items
     *
     * @param {number} itemId
     *
     * @memberOf DropdownsComponent
     */
    DropdownsComponent.prototype.toggleAllItem = function (itemId) {
        var _this = this;
        this.dropdown$
            .take(1)
            .subscribe(function (state) { return _this.dropdown$.next(update(state, Number(itemId))); });
        function update(state, id) {
            var selected = !state[id].selected;
            return state.slice(0).map(function (item) {
                if (item.type === 'all') {
                    return Object.assign({}, item, { selected: selected, partial: false });
                }
                else {
                    return Object.assign({}, item, { selected: selected });
                }
            });
        }
    };
    return DropdownsComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
DropdownsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-dropdowns',
        template: __webpack_require__("../../../../../src/docs/app/sections/dropdowns/dropdowns.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/dropdowns/dropdowns.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], DropdownsComponent);

var _a;
//# sourceMappingURL=dropdowns.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/home-section/home-section.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/docs/app/sections/home-section/home-section.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/home-section/home-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeSectionComponent = (function () {
    function HomeSectionComponent() {
    }
    HomeSectionComponent.prototype.ngOnInit = function () { };
    return HomeSectionComponent;
}());
HomeSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-home-section',
        template: __webpack_require__("../../../../../src/docs/app/sections/home-section/home-section.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/home-section/home-section.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeSectionComponent);

//# sourceMappingURL=home-section.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Icons</h1><div id=\"all-icons\" class=\"_pbs _pts _mtxl _mbxl flex flex-wrap\"><div class=\"u-supre-icon u-supre-icon--checked\"></div><div class=\"u-supre-icon u-supre-icon--partial-check\"></div><div class=\"u-supre-icon u-supre-icon--unchecked\"></div><div class=\"u-supre-icon u-supre-icon--add-create\"></div><div class=\"u-supre-icon u-supre-icon--library\"></div><div class=\"u-supre-icon u-supre-icon--user-menu-icon\"></div><div class=\"u-supre-icon u-supre-icon--arrow-right-stroke\"></div><div class=\"u-supre-icon u-supre-icon--arrow-down-stroke\"></div><div class=\"u-supre-icon u-supre-icon--arrow-right-filled\"></div><div class=\"u-supre-icon u-supre-icon--arrow-down-filled\"></div><div class=\"u-supre-icon u-supre-icon--more-menu-dots-only\"></div><div class=\"u-supre-icon u-supre-icon--more-menu-stoke\"></div><div class=\"u-supre-icon u-supre-icon--more-menu-fill\"></div><div class=\"u-supre-icon u-supre-icon--search\"></div><div class=\"u-supre-icon u-supre-icon--edit\"></div><div class=\"u-supre-icon u-supre-icon--snapshot\"></div><div class=\"u-supre-icon u-supre-icon--export\"></div><div class=\"u-supre-icon u-supre-icon--refresh-clear\"></div><div class=\"u-supre-icon u-supre-icon--filter\"></div><div class=\"u-supre-icon u-supre-icon--rem-filter\"></div><div class=\"u-supre-icon u-supre-icon--audience\"></div><div class=\"u-supre-icon u-supre-icon--dollar-sign\"></div><div class=\"u-supre-icon u-supre-icon--number-sign\"></div><div class=\"u-supre-icon u-supre-icon--delete-x\"></div><div class=\"u-supre-icon u-supre-icon--Auto\"></div><div class=\"u-supre-icon u-supre-icon--CPG-food\"></div><div class=\"u-supre-icon u-supre-icon--CPG-health-beauty\"></div><div class=\"u-supre-icon u-supre-icon--CPG-home\"></div><div class=\"u-supre-icon u-supre-icon--Consumer-electronics\"></div><div class=\"u-supre-icon u-supre-icon--ecommerce\"></div><div class=\"u-supre-icon u-supre-icon--entertainment\"></div><div class=\"u-supre-icon u-supre-icon--finance\"></div><div class=\"u-supre-icon u-supre-icon--insurance\"></div><div class=\"u-supre-icon u-supre-icon--pharma\"></div><div class=\"u-supre-icon u-supre-icon--QSR\"></div><div class=\"u-supre-icon u-supre-icon--retail\"></div><div class=\"u-supre-icon u-supre-icon--telco\"></div><div class=\"u-supre-icon u-supre-icon--travel\"></div><div class=\"u-supre-icon u-supre-icon--other-category\"></div><div class=\"u-supre-icon u-supre-icon--trash\"></div><div class=\"u-supre-icon u-supre-icon--sort-down\"></div><div class=\"u-supre-icon u-supre-icon--sort-up\"></div><div class=\"u-supre-icon u-supre-icon--logout\"></div><div class=\"u-supre-icon u-supre-icon--settings\"></div><div class=\"u-supre-icon u-supre-icon--clone\"></div><div class=\"u-supre-icon u-supre-icon--back-arrow\"></div><div class=\"u-supre-icon u-supre-icon--vennbox\"></div><div class=\"u-supre-icon u-supre-icon--venn\"></div><div class=\"u-supre-icon u-supre-icon--hide\"></div><div class=\"u-supre-icon u-supre-icon--exported\"></div><div class=\"u-supre-icon u-supre-icon--fail\"></div><div class=\"u-supre-icon u-supre-icon--ready-aud\"></div><div class=\"u-supre-icon u-supre-icon--static-loader\"></div><div class=\"u-supre-icon u-supre-icon--pivot\"></div><div class=\"u-supre-icon u-supre-icon--data\"></div><div class=\"u-supre-icon u-supre-icon--audcomp\"></div><div class=\"u-supre-icon u-supre-icon--calendar\"></div></div><div id=\"all-icon-list\" class=\"_bt1 border-active-stroke flex flex-wrap _mrxl _ptl\">\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--checked\"></span>\n    &nbsp;\n    u-supre-icon--checked\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--partial-check\"></span>\n    &nbsp;\n    u-supre-icon--partial-check\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--unchecked\"></span>\n    &nbsp;\n    u-supre-icon--unchecked\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--add-create\"></span>\n    &nbsp;\n    u-supre-icon--add-create\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--library\"></span>\n    &nbsp;\n    u-supre-icon--library\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--user-menu-icon\"></span>\n    &nbsp;\n    u-supre-icon--user-menu-icon\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--arrow-right-stroke\"></span>\n    &nbsp;\n    u-supre-icon--arrow-right-stroke\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--arrow-down-stroke\"></span>\n    &nbsp;\n    u-supre-icon--arrow-down-stroke\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--arrow-right-filled\"></span>\n    &nbsp;\n    u-supre-icon--arrow-right-filled\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--arrow-down-filled\"></span>\n    &nbsp;\n    u-supre-icon--arrow-down-filled\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--more-menu-dots-only\"></span>\n    &nbsp;\n    u-supre-icon--more-menu-dots-only\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--more-menu-stoke\"></span>\n    &nbsp;\n    u-supre-icon--more-menu-stoke\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--more-menu-fill\"></span>\n    &nbsp;\n    u-supre-icon--more-menu-fill\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--search\"></span>\n    &nbsp;\n    u-supre-icon--search\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--edit\"></span>\n    &nbsp;\n    u-supre-icon--edit\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--snapshot\"></span>\n    &nbsp;\n    u-supre-icon--snapshot\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--export\"></span>\n    &nbsp;\n    u-supre-icon--export\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span>\n    &nbsp;\n    u-supre-icon--refresh-clear\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--filter\"></span>\n    &nbsp;\n    u-supre-icon--filter\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--rem-filter\"></span>\n    &nbsp;\n    u-supre-icon--rem-filter\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--audience\"></span>\n    &nbsp;\n    u-supre-icon--audience\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--dollar-sign\"></span>\n    &nbsp;\n    u-supre-icon--dollar-sign\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--number-sign\"></span>\n    &nbsp;\n    u-supre-icon--number-sign\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--delete-x\"></span>\n    &nbsp;\n    u-supre-icon--delete-x\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--Auto\"></span>\n    &nbsp;\n    u-supre-icon--Auto\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>\n    &nbsp;\n    u-supre-icon--CPG-food\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--CPG-health-beauty\"></span>\n    &nbsp;\n    u-supre-icon--CPG-health-beauty\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>\n    &nbsp;\n    u-supre-icon--CPG-home\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--Consumer-electronics\"></span>\n    &nbsp;\n    u-supre-icon--Consumer-electronics\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--ecommerce\"></span>\n    &nbsp;\n    u-supre-icon--ecommerce\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--entertainment\"></span>\n    &nbsp;\n    u-supre-icon--entertainment\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--finance\"></span>\n    &nbsp;\n    u-supre-icon--finance\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--insurance\"></span>\n    &nbsp;\n    u-supre-icon--insurance\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--pharma\"></span>\n    &nbsp;\n    u-supre-icon--pharma\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--QSR\"></span>\n    &nbsp;\n    u-supre-icon--QSR\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--retail\"></span>\n    &nbsp;\n    u-supre-icon--retail\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--telco\"></span>\n    &nbsp;\n    u-supre-icon--telco\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--travel\"></span>\n    &nbsp;\n    u-supre-icon--travel\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--other-category\"></span>\n    &nbsp;\n    u-supre-icon--other-category\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--trash\"></span>\n    &nbsp;\n    u-supre-icon--trash\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--sort-down\"></span>\n    &nbsp;\n    u-supre-icon--sort-down\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--sort-up\"></span>\n    &nbsp;\n    u-supre-icon--sort-up\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--logout\"></span>\n    &nbsp;\n    u-supre-icon--logout\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--settings\"></span>\n    &nbsp;\n    u-supre-icon--settings\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--clone\"></span>\n    &nbsp;\n    u-supre-icon--clone\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--back-arrow\"></span>\n    &nbsp;\n    u-supre-icon--back-arrow\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--vennbox\"></span>\n    &nbsp;\n    u-supre-icon--vennbox\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--venn\"></span>\n    &nbsp;\n    u-supre-icon--venn\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--hide\"></span>\n    &nbsp;\n    u-supre-icon--hide\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--exported\"></span>\n    &nbsp;\n    u-supre-icon--exported\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--fail\"></span>\n    &nbsp;\n    u-supre-icon--fail\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--ready-aud\"></span>\n    &nbsp;\n    u-supre-icon--ready-aud\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--static-loader\"></span>\n    &nbsp;\n    u-supre-icon--static-loader\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--pivot\"></span>\n    &nbsp;\n    u-supre-icon--pivot\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--data\"></span>\n    &nbsp;\n    u-supre-icon--data\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--audcomp\"></span>\n    &nbsp;\n    u-supre-icon--audcomp\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--calendar\"></span>\n    &nbsp;\n    u-supre-icon--calendar\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/docs/app/sections/icons/icons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#all-icons > div {\n  min-width: 80px;\n  padding-left: 31px;\n  padding-top: 0;\n  line-height: 80px;\n  background-color: whitesmoke;\n  border-right: 2px dashed white;\n  border-bottom: 2px dashed white; }\n\n#all-icon-list > div {\n  min-width: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IconsComponent = (function (_super) {
    __extends(IconsComponent, _super);
    function IconsComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return IconsComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
IconsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-icons',
        template: __webpack_require__("../../../../../src/docs/app/sections/icons/icons.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/icons/icons.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], IconsComponent);

var _a;
//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/inline-dialog/inline-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Inline Dialog</h1>\n\n\n<a id=\"inline-dialog-install\"></a>\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-popover --save\n\n  // add style dependency (.angular-cli.json)\n  includePaths: [\"../node_modules/bootstrap-sass/assets/stylesheets/\"]\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} SuprePopoverModule } from 'suprematism-popover';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      SuprePopoverModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n\n<a id=\"inline-dialog-simple-example\"></a>\n<h5 class=\"_mtxl\">Simple Example</h5>\n<div>\n  <button class=\"-action\" [supreInlineDialog]=\"dialogInstance\">Show Dialog</button>\n  <supre-inline-dialog #dialogInstance title=\"Title of the Dialog\">\n    <p class=\"_mbm\">Here is the text that could go inside the inline dialog?</p>\n    <div class=\"flex justify-end\">\n      <button class=\"-cancel-md\" (click)=\"dialogInstance.hide()\">Cancel</button>\n      <button class=\"-dialog\">Submit</button>\n    </div>\n  </supre-inline-dialog>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Bind the 'supre-inline-dialog' instance to anything, a button in this case -->\n  {{'&lt;'}}button class=\"-action\" [supreInlineDialog]=\"dialogInstance\">Show Dialog{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Add a 'supre-inline-dialog' instance -->\n  {{'&lt;'}}supre-inline-dialog #dialogInstance title=\"Title of the Dialog\">\n    {{'&lt;'}}p class=\"_mbm\">Here is the text that could go inside the inline dialog?{{'&lt;'}}/p>\n    {{'&lt;'}}div class=\"flex justify-end\">\n      {{'&lt;'}}!-- We can directly access the 'supre-inline-dialog' api -->\n      {{'&lt;'}}button class=\"-cancel-md\" (click)=\"dialogInstance.hide()\">Cancel{{'&lt;'}}/button>\n      {{'&lt;'}}button class=\"-dialog\">Submit{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/supre-inline-dialog>\n  </code>\n</pre>\n\n\n<a id=\"inline-dialog-with-tooltip\"></a>\n<h5 class=\"_mtxl\">Combined with Tooltip</h5>\n<div>\n  <!-- Dialog Example -->\n  <div class=\"flex justify-start\">\n    <div class=\"flex _b1 border-gray\" style=\"max-width: 740px; width: 100%;\">\n      <div class=\"flex-auto bg-ice border-white _br1\">&nbsp;</div>\n      <button class=\"-toolbar\" disabled=\"disabled\"><span class=\"u-supre-icon u-supre-icon--add-create\"></span> Condition</button>\n      <button class=\"-toolbar\" supreTooltip=\"Clear All Conditions\" [supreInlineDialog]=\"clearAllConditions\" [onHover]=\"false\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span> Clear All</button>\n    </div>\n  </div>\n  <!-- We can place this anywhere -->\n  <supre-inline-dialog #clearAllConditions title=\"Clear All Conditions\" placement=\"auto bottom\">\n    <p class=\"_mbm\">Are you sure you want to clear all attributes and conditions?</p>\n    <div class=\"flex justify-end\">\n      <button class=\"-cancel-md\" (click)=\"clearAllConditions.hide()\">Cancel</button>\n      <button class=\"-dialog bg-aqua\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span> Clear All</button>\n    </div>\n  </supre-inline-dialog>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Condition Bar -->\n  {{'&lt;'}}div class=\"flex justify-start\">\n    {{'&lt;'}}div class=\"flex _b1 border-gray\">\n      {{'&lt;'}}div class=\"flex-auto bg-ice border-white _br1\">&nbsp;{{'&lt;'}}/div>\n      {{'&lt;'}}button class=\"-toolbar\" disabled=\"disabled\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--add-create\">{{'&lt;'}}/span> Condition{{'&lt;'}}/button>\n      {{'&lt;'}}button class=\"-toolbar\" supreTooltip=\"Clear All Conditions\" [supreInlineDialog]=\"clearAllConditions\" [onHover]=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span> Clear All{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n\n  {{'&lt;'}}!-- Clear Dialog Box -->\n  {{'&lt;'}}supre-inline-dialog #clearAllConditions title=\"Clear All Conditions\" placement=\"auto bottom\">\n    {{'&lt;'}}p class=\"_mbm\">Are you sure you want to clear all attributes and conditions?{{'&lt;'}}/p>\n    {{'&lt;'}}div class=\"flex justify-end\">\n      {{'&lt;'}}button class=\"-cancel-md\" (click)=\"clearAllConditions.hide()\">Cancel{{'&lt;'}}/button>\n      {{'&lt;'}}button class=\"-dialog bg-aqua\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span> Clear All{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/supre-inline-dialog>\n  </code>\n</pre>\n\n\n<a id=\"inline-dialog-placement\"></a>\n<h5 class=\"_mtxl\">Placement</h5>\n<div>\n  Popovers can be positioned on the :\n  <button class=\"-action\" [supreInlineDialog]=\"dialogInstanceTop\">Top</button>\n  <button class=\"-action\" [supreInlineDialog]=\"dialogInstanceRight\">Right</button>\n  <button class=\"-action\" [supreInlineDialog]=\"dialogInstanceBottom\">Bottom</button>\n  <button class=\"-action\" [supreInlineDialog]=\"dialogInstanceLeft\">Left</button>\n\n  <supre-inline-dialog #dialogInstanceTop title=\"Title of the Dialog\" placement=\"top\">\n    <p class=\"_mbm\">Here is the text that could go inside the inline dialog?</p>\n    <div class=\"flex justify-end\">\n      <button class=\"-cancel-md\" (click)=\"dialogInstanceTop.hide()\">Cancel</button>\n      <button class=\"-dialog\">Submit</button>\n    </div>\n  </supre-inline-dialog>\n\n  <supre-inline-dialog #dialogInstanceRight title=\"Title of the Dialog\" placement=\"right\">\n    <p class=\"_mbm\">Here is the text that could go inside the inline dialog?</p>\n    <div class=\"flex justify-end\">\n      <button class=\"-cancel-md\" (click)=\"dialogInstanceRight.hide()\">Cancel</button>\n      <button class=\"-dialog\">Submit</button>\n    </div>\n  </supre-inline-dialog>\n\n  <supre-inline-dialog #dialogInstanceBottom title=\"Title of the Dialog\" placement=\"bottom\">\n    <p class=\"_mbm\">Here is the text that could go inside the inline dialog?</p>\n    <div class=\"flex justify-end\">\n      <button class=\"-cancel-md\" (click)=\"dialogInstanceBottom.hide()\">Cancel</button>\n      <button class=\"-dialog\">Submit</button>\n    </div>\n  </supre-inline-dialog>\n\n  <supre-inline-dialog #dialogInstanceLeft title=\"Title of the Dialog\" placement=\"left\">\n    <p class=\"_mbm\">Here is the text that could go inside the inline dialog?</p>\n    <div class=\"flex justify-end\">\n      <button class=\"-cancel-md\" (click)=\"dialogInstanceLeft.hide()\">Cancel</button>\n      <button class=\"-dialog\">Submit</button>\n    </div>\n  </supre-inline-dialog>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Buttons, one for each instance -->\n  {{'&lt;'}}button class=\"-action\" [supreInlineDialog]=\"dialogInstanceTop\">Top{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-action\" [supreInlineDialog]=\"dialogInstanceRight\">Right{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-action\" [supreInlineDialog]=\"dialogInstanceBottom\">Bottom{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-action\" [supreInlineDialog]=\"dialogInstanceLeft\">Left{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- placement=\"top\" -->\n  {{'&lt;'}}supre-inline-dialog #dialogInstanceTop title=\"Title of the Dialog\" placement=\"top\">\n    {{'&lt;'}}p class=\"_mbm\">Here is the text that could go inside the inline dialog?{{'&lt;'}}/p>\n    {{'&lt;'}}div class=\"flex justify-end\">\n      {{'&lt;'}}button class=\"-cancel-md\" (click)=\"dialogInstanceTop.hide()\">Cancel{{'&lt;'}}/button>\n      {{'&lt;'}}button class=\"-dialog\">Submit{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/supre-inline-dialog>\n\n  {{'&lt;'}}!-- placement=\"right\" -->\n  {{'&lt;'}}supre-inline-dialog #dialogInstanceRight title=\"Title of the Dialog\" placement=\"right\">\n    {{'&lt;'}}p class=\"_mbm\">Here is the text that could go inside the inline dialog?{{'&lt;'}}/p>\n    {{'&lt;'}}div class=\"flex justify-end\">\n      {{'&lt;'}}button class=\"-cancel-md\" (click)=\"dialogInstanceRight.hide()\">Cancel{{'&lt;'}}/button>\n      {{'&lt;'}}button class=\"-dialog\">Submit{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/supre-inline-dialog>\n\n  {{'&lt;'}}!-- placement=\"bottom\" -->\n  {{'&lt;'}}supre-inline-dialog #dialogInstanceBottom title=\"Title of the Dialog\" placement=\"bottom\">\n    {{'&lt;'}}p class=\"_mbm\">Here is the text that could go inside the inline dialog?{{'&lt;'}}/p>\n    {{'&lt;'}}div class=\"flex justify-end\">\n      {{'&lt;'}}button class=\"-cancel-md\" (click)=\"dialogInstanceBottom.hide()\">Cancel{{'&lt;'}}/button>\n      {{'&lt;'}}button class=\"-dialog\">Submit{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/supre-inline-dialog>\n\n  {{'&lt;'}}!-- placement=\"left\" -->\n  {{'&lt;'}}supre-inline-dialog #dialogInstanceLeft title=\"Title of the Dialog\" placement=\"left\">\n    {{'&lt;'}}p class=\"_mbm\">Here is the text that could go inside the inline dialog?{{'&lt;'}}/p>\n    {{'&lt;'}}div class=\"flex justify-end\">\n      {{'&lt;'}}button class=\"-cancel-md\" (click)=\"dialogInstanceLeft.hide()\">Cancel{{'&lt;'}}/button>\n      {{'&lt;'}}button class=\"-dialog\">Submit{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/supre-inline-dialog>\n  </code>\n</pre>\n\n\n<a id=\"inline-dialog-disabled\"></a>\n<h5 class=\"_mtxl\">Disable/Enable</h5>\n<div>\n  <!-- Dialog Example -->\n  <div class=\"flex justify-start\">\n    <div class=\"flex _b1 border-gray\" style=\"max-width: 740px; width: 100%;\">\n      <div class=\"flex-auto bg-ice border-white _br1\">&nbsp;</div>\n      <button class=\"-toolbar\" disabled=\"disabled\"><span class=\"u-supre-icon u-supre-icon--add-create\"></span> Condition</button>\n      <button class=\"-toolbar\" supreTooltip=\"Clear All Conditions\" [dialogDisabled]=\"true\" [supreInlineDialog]=\"clearAllConditions\" [onHover]=\"false\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span> Clear All</button>\n    </div>\n  </div>\n  <!-- We can place this anywhere -->\n  <supre-inline-dialog #clearAllConditions title=\"Clear All Conditions\" placement=\"auto bottom\">\n    <p class=\"_mbm\">Are you sure you want to clear all attributes and conditions?</p>\n    <div class=\"flex justify-end\">\n      <button class=\"-cancel-md\" (click)=\"clearAllConditions.hide()\">Cancel</button>\n      <button class=\"-dialog bg-aqua\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span> Clear All</button>\n    </div>\n  </supre-inline-dialog>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Condition Bar -->\n  {{'&lt;'}}div class=\"flex justify-start\">\n    {{'&lt;'}}div class=\"flex _b1 border-gray\">\n      {{'&lt;'}}div class=\"flex-auto bg-ice border-white _br1\">&nbsp;{{'&lt;'}}/div>\n      {{'&lt;'}}button class=\"-toolbar\" disabled=\"disabled\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--add-create\">{{'&lt;'}}/span> Condition{{'&lt;'}}/button>\n      {{'&lt;'}}!-- apply [dialogDisabled]=\"true\" to the 'supreInlineDialog' directive, it is optional and it defaults to false -->\n      {{'&lt;'}}button class=\"-toolbar\" supreTooltip=\"Clear All Conditions\" [dialogDisabled]=\"true\" [supreInlineDialog]=\"clearAllConditions\" [onHover]=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span> Clear All{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n\n  {{'&lt;'}}!-- Clear Dialog Box -->\n  {{'&lt;'}}supre-inline-dialog #clearAllConditions title=\"Clear All Conditions\" placement=\"auto bottom\">\n    {{'&lt;'}}p class=\"_mbm\">Are you sure you want to clear all attributes and conditions?{{'&lt;'}}/p>\n    {{'&lt;'}}div class=\"flex justify-end\">\n      {{'&lt;'}}button class=\"-cancel-md\" (click)=\"clearAllConditions.hide()\">Cancel{{'&lt;'}}/button>\n      {{'&lt;'}}button class=\"-dialog bg-aqua\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span> Clear All{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/supre-inline-dialog>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/inline-dialog/inline-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/inline-dialog/inline-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InlineDialogSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InlineDialogSectionComponent = (function (_super) {
    __extends(InlineDialogSectionComponent, _super);
    function InlineDialogSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return InlineDialogSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
InlineDialogSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-inline-dialog',
        template: __webpack_require__("../../../../../src/docs/app/sections/inline-dialog/inline-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/inline-dialog/inline-dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], InlineDialogSectionComponent);

var _a;
//# sourceMappingURL=inline-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/modal-section/modal-section.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Modal</h1>\n\n\n<a id=\"modal-install\"></a>\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-modal --save\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} ModalModule } from 'suprematism-modal';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      ModalModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n\n<a id=\"modal-simple-example\"></a>\n<h5 class=\"_mtxl\">Simple Example</h5>\n<div>\n  <button id=\"modal-1-button\" class=\"-action\" (click)=\"modal1.open();\">open basic modal</button>\n  <supre-modal #modal1>\n    <span modal-title class=\"flex justify-between\">\n      <h3 class=\"_p0 _m0\">Save Audience</h3>\n      <p class=\"_p0 _m0 _ptxs\">right Side Text</p>\n    </span>\n    <span modal-body>\n      This is the body section of the Modal.\n    </span>\n    <span modal-footer class=\"flex justify-end\">\n      <p class=\"flex-auto\">Error Message Here</p>\n      <div>\n        <button (click)=\"modal1.close();\" class=\"-dialog\">Do Stuff</button>\n      </div>\n    </span>\n  </supre-modal>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- call the modal.open() method -->\n  {{'&lt;'}}button id=\"modal-1-button\" class=\"-action\" (click)=\"modalInstance.open();\">open basic modal{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- add the modal on the page -->\n  {{'&lt;'}}supre-modal #modalInstance>\n\n    {{'&lt;'}}!-- Title Section -->\n    {{'&lt;'}}span modal-title>\n      ...\n    {{'&lt;'}}/span>\n\n    {{'&lt;'}}!-- Body Section -->\n    {{'&lt;'}}span modal-body>\n      ...\n    {{'&lt;'}}/span>\n\n    {{'&lt;'}}!-- footer Section -->\n    {{'&lt;'}}span modal-footer>\n      ...\n      {{'&lt;'}}!-- You can close the modal close() method from anywhere -->\n      {{'&lt;'}}button (click)=\"modalInstance.close();\" class=\"-dialog\">Do Stuff{{'&lt;'}}/button>\n      ...\n    {{'&lt;'}}/span>\n\n  {{'&lt;'}}/supre-modal>\n  </code>\n</pre>\n\n\n<a id=\"modal-sizing\"></a>\n<h5 class=\"_mtxl\">Sizes (Optional)</h5>\n<div>\n  <button id=\"modal-5-button\" class=\"-action\" (click)=\"modal5.open();\">xsmall modal</button>\n  <button id=\"modal-2-button\" class=\"-action\" (click)=\"modal2.open();\">small modal</button>\n  <button id=\"modal-3-button\" class=\"-action\" (click)=\"modal3.open();\">medium modal</button>\n  <button id=\"modal-4-button\" class=\"-action\" (click)=\"modal4.open();\">large modal</button>\n\n  <supre-modal #modal5 size=\"xsmall\">\n    <span modal-title>\n      <span class=\"u-type-m color-aqua u-bold\">Saving Audience</span>\n    </span>\n    <span modal-body>\n      <span class=\"u-type-m color-mid-gray\">\n        This is the body section of the Modal.\n      </span>\n      <button (click)=\"modal5.close();\" class=\"-dialog\">Do Stuff</button>\n    </span>\n  </supre-modal>\n\n  <supre-modal #modal2 size=\"small\">\n    <span modal-title class=\"flex justify-between\">\n      <h3 class=\"_p0 _m0\">Save Audience</h3>\n      <p class=\"_p0 _m0 _ptxs\">right Side Text</p>\n    </span>\n    <span modal-body>\n      This is the body section of the Modal.\n    </span>\n    <span modal-footer class=\"flex justify-end\">\n      <p class=\"flex-auto\">Error Message Here</p>\n      <div>\n        <button (click)=\"modal2.close();\" class=\"-dialog\">Do Stuff</button>\n      </div>\n    </span>\n  </supre-modal>\n\n  <supre-modal #modal3 size=\"medium\">\n    <span modal-title class=\"flex justify-between\">\n      <h3 class=\"_p0 _m0\">Save Audience</h3>\n      <p class=\"_p0 _m0 _ptxs\">right Side Text</p>\n    </span>\n    <span modal-body>\n      This is the body section of the Modal.\n    </span>\n    <span modal-footer class=\"flex justify-end\">\n      <p class=\"flex-auto\">Error Message Here</p>\n      <div>\n        <button (click)=\"modal3.close();\" class=\"-dialog\">Do Stuff</button>\n      </div>\n    </span>\n  </supre-modal>\n\n  <supre-modal #modal4 size=\"large\">\n    <span modal-title class=\"flex justify-between\">\n      <h3 class=\"_p0 _m0\">Save Audience</h3>\n      <p class=\"_p0 _m0 _ptxs\">right Side Text</p>\n    </span>\n    <span modal-body>\n      This is the body section of the Modal.\n    </span>\n    <span modal-footer class=\"flex justify-end\">\n      <p class=\"flex-auto\">Error Message Here</p>\n      <div>\n        <button (click)=\"modal4.close();\" class=\"-dialog\">Do Stuff</button>\n      </div>\n    </span>\n  </supre-modal>\n\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- size=\"small\" (default) -->\n  {{'&lt;'}}supre-modal size=\"small\">\n    {{'&lt;'}}span modal-title>...{{'&lt;'}}/span>\n    {{'&lt;'}}span modal-body>...{{'&lt;'}}/span>\n    {{'&lt;'}}span modal-footer>...{{'&lt;'}}/span>\n  {{'&lt;'}}/supre-modal>\n\n  {{'&lt;'}}!-- size=\"medium\" (default) -->\n  {{'&lt;'}}supre-modal size=\"medium\">\n    {{'&lt;'}}span modal-title>...{{'&lt;'}}/span>\n    {{'&lt;'}}span modal-body>...{{'&lt;'}}/span>\n    {{'&lt;'}}span modal-footer>...{{'&lt;'}}/span>\n  {{'&lt;'}}/supre-modal>\n\n  {{'&lt;'}}!-- size=\"large\" (default) -->\n  {{'&lt;'}}supre-modal size=\"large\">\n    {{'&lt;'}}span modal-title>...{{'&lt;'}}/span>\n    {{'&lt;'}}span modal-body>...{{'&lt;'}}/span>\n    {{'&lt;'}}span modal-footer>...{{'&lt;'}}/span>\n  {{'&lt;'}}/supre-modal>\n  </code>\n</pre>\n\n<a id=\"modal-without-close\"></a>\n<h5 class=\"_mtxl\">Modal Without Close Button</h5>\n<div>\n  <button id=\"modal-6-button\" class=\"-action\" (click)=\"modal6.open();\">Open Modal</button>\n  <supre-modal #modal6 [canClose]=\"false\">\n    <span modal-title class=\"flex justify-between\">\n      <h3 class=\"_p0 _m0\">No X to close</h3>\n    </span>\n    <span modal-body>\n      There's a backup close button for the demo.\n    </span>\n    <span modal-footer class=\"flex justify-end\">\n      <div>\n        <button (click)=\"modal6.close();\" class=\"-dialog\">Close</button>\n      </div>\n    </span>\n  </supre-modal>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}!-- [canClose]=\"false\" (by default `canClose` is true) -->\n    {{'&lt;'}}supre-modal [canClose]=\"false\">\n      {{'&lt;'}}span modal-title>...{{'&lt;'}}/span>\n      {{'&lt;'}}span modal-body>...{{'&lt;'}}/span>\n      {{'&lt;'}}span modal-footer>...{{'&lt;'}}/span>\n    {{'&lt;'}}/supre-modal>\n  </code>\n</pre>\n\n\n\n<a id=\"modal-api\"></a>\n<h5 class=\"_mtxl\">API</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  /**\n   * Classes and Interfaces\n   */\n  import {{'&#123;'}}\n    ModalEvent, // an interface for the event emitted from the modal\n    ModalComponent // the component class\n  } from 'suprematism-modal';\n\n\n  /**\n   * Event (emitter)\n   */\n  {{'&lt;'}}supre-modal (onChange)=\"yourMethod($event: ModalEvent);\">...{{'&lt;'}}/supre-modal>\n\n\n  /**\n   * ModalEvent Interface\n   */\n  export interface ModalEvent {{'&#123;'}}\n    // tells you what method/action was called\n    methodCalled: 'open' | 'close' | null;\n    // the current state\n    isOpen: boolean;\n    // the value of the 'id' property/attribute on the {{'&lt;'}}supre-modal> element, null if there is none\n    id: string | null;\n  }\n\n\n  /**\n   * ModalComponent Class\n   */\n  ModalComponent.open();  // emits: {{'&#123;'}} methodCalled: 'open', isOpen: true, id: null }\n  ModalComponent.close(); // emits: {{'&#123;'}} methodCalled: 'close', isOpen: false, id: null }\n  // NOTE: if {{'&lt;'}}supre-modal id=\"myModal\">...{{'&lt;'}}/supre-modal> then the id would be: 'myModal'\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/modal-section/modal-section.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/modal-section/modal-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalSectionComponent = (function (_super) {
    __extends(ModalSectionComponent, _super);
    function ModalSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return ModalSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
ModalSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-modal-section',
        template: __webpack_require__("../../../../../src/docs/app/sections/modal-section/modal-section.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/modal-section/modal-section.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ModalSectionComponent);

var _a;
//# sourceMappingURL=modal-section.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/multi-select-search/multi-select-search.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Multi Select Search</h1>\n\n\n<a id=\"multi-select-search-install\"></a>\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-multi-select-search --save\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} MultiSelectSearchModule } from 'suprematism-multi-select-search';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      MultiSelectSearchModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n<a id=\"multi-select-search-simple\"></a>\n<h5 class=\"_mtxl\">This is a multi select search.</h5>\n<div class=\"example\">\n  <supre-multi-select-search [options]=\"example.options\"\n                             [searchDebounce]=\"example.searchDebounce\"\n                             [searchPlaceholder]=\"example.searchPlaceholder\"\n                             [inactiveButtonText]=\"example.inactiveButtonText\"\n                             [inactiveButtonTextFunc]=\"example.inactiveButtonTextFunc\"\n                             [selectedOptionsNoSelectionText]=\"example.selectedOptionsNoSelectionText\"\n                             [selectedOptionsNoSelectionTextFunc]=\"example.selectedOptionsNoSelectionTextFunc\"\n                             [showSelectedParent]=\"example.showSelectedParent\"\n                             [selectChildrenWithParent]=\"example.selectChildrenWithParent\"\n                             [selectChildrenToDepth]=\"example.selectChildrenToDepth\"\n                             [unselectChildrenWithParent]=\"example.unselectChildrenWithParent\"\n                             [unselectParentWithChild]=\"example.unselectParentWithChild\">\n  </supre-multi-select-search>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-multi-select-search [options]=\"example1.options\"\n                                        [searchDebounce]=\"example1.searchDebounce\"\n                                        [searchPlaceholder]=\"example1.searchPlaceholder\"\n                                        [inactiveButtonText]=\"example1.inactiveButtonText\"\n                                        [inactiveButtonTextFunc]=\"example1.inactiveButtonTextFunc\"\n                                        [selectedOptionsNoSelectionText]=\"example1.selectedOptionsNoSelectionText\"\n                                        [selectedOptionsNoSelectionTextFunc]=\"example1.selectedOptionsNoSelectionTextFunc\"\n                                        [showSelectedParent]=\"example1.showSelectedParent\"\n                                        [selectChildrenWithParent]=\"example1.selectChildrenWithParent\"\n                                        [selectChildrenToDepth]=\"example1.selectChildrenToDepth\"\n                                        [unselectChildrenWithParent]=\"example1.unselectChildrenWithParent\"\n                                        [unselectParentWithChild]=\"example1.unselectParentWithChild\">\n    {{'&lt;'}}/supre-multi-select-search>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/multi-select-search/multi-select-search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 400px;\n  max-height: 400px;\n  min-height: 400px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/multi-select-search/multi-select-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSelectSearchSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MultiSelectSearchSectionComponent = (function (_super) {
    __extends(MultiSelectSearchSectionComponent, _super);
    function MultiSelectSearchSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        _this.genericOptions = [
            {
                id: 1,
                display: 'Farmers Insurance Group',
                children: [
                    {
                        id: 11,
                        display: '21st Century Insurance',
                        children: [],
                        selected: false
                    },
                    {
                        id: 12,
                        display: 'Bristol West Holdings',
                        children: [],
                        selected: false
                    },
                    {
                        id: 13,
                        display: 'Farmers Group Capital II',
                        children: [
                            {
                                id: 131,
                                display: 'Farmers Group Capital',
                                children: [
                                    {
                                        id: 1311,
                                        display: 'Farmers',
                                        children: [],
                                        selected: false,
                                        icon: 'u-supre-icon u-supre-icon--insurance'
                                    }
                                ],
                                selected: false
                            },
                            {
                                id: 132,
                                display: 'Farmers Group',
                                children: [],
                                selected: false
                            }
                        ],
                        selected: false
                    },
                    {
                        id: 14,
                        display: 'Farmers Life Insurance',
                        children: [],
                        selected: false
                    }
                ],
                selected: false
            },
            {
                id: 2,
                display: "Khol's Corporation",
                children: [
                    {
                        id: 21,
                        display: 'Croft and Barrow',
                        children: [
                            {
                                id: 211,
                                display: 'Croft',
                                children: [
                                    {
                                        id: 2111,
                                        display: 'Lara',
                                        children: [
                                            {
                                                id: 21111,
                                                display: 'Tomb Raider',
                                                children: [],
                                                selected: false
                                            }
                                        ],
                                        selected: false
                                    }
                                ],
                                selected: false
                            },
                            {
                                id: 212,
                                display: 'Barrow',
                                children: [],
                                selected: false
                            }
                        ],
                        selected: false
                    },
                    {
                        id: 22,
                        display: 'Jennifer Lopez Living',
                        children: [],
                        selected: false
                    },
                    {
                        id: 23,
                        display: 'Vera Wang Everyday',
                        children: [],
                        selected: false
                    }
                ],
                selected: false
            },
            {
                id: 3,
                display: 'Liberty Mutual Insurance',
                children: [
                    {
                        id: 31,
                        display: 'American Fire and Casualty',
                        children: [
                            {
                                id: 311,
                                display: 'Canadian',
                                children: [],
                                selected: false
                            }
                        ],
                        selected: false
                    },
                    {
                        id: 32,
                        display: 'Liberty Mutual Surety',
                        children: [],
                        selected: false
                    }
                ],
                selected: false
            }
        ];
        _this.example = {
            options: _this.genericOptions,
            searchDebounce: 500,
            searchPlaceholder: 'Brand Search',
            inactiveButtonText: 'All Brands',
            inactiveButtonTextFunc: void 0,
            selectedOptionsNoSelectionText: 'Available Brands from Advertisers',
            selectedOptionsNoSelectionTextFunc: void 0,
            showSelectedParent: false,
            selectChildrenWithParent: true,
            selectChildrenToDepth: 0,
            unselectChildrenWithParent: false,
            unselectParentWithChild: true // default
        };
        return _this;
    }
    return MultiSelectSearchSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
MultiSelectSearchSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-multi-select-search',
        template: __webpack_require__("../../../../../src/docs/app/sections/multi-select-search/multi-select-search.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/multi-select-search/multi-select-search.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], MultiSelectSearchSectionComponent);

var _a;
//# sourceMappingURL=multi-select-search.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/progress-indicator-section/progress-indicator-section.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Progress Indicators</h1>\n\n<a id=\"indeterminate-progress-bar\"></a>\n<h5 class=\"_mtxl\">Indeterminate Progress Indicator</h5>\n<div class=\"indeterminate-indicator\">\n  <div class=\"indeterminate-indicator-circle\"></div>\n  <div class=\"indeterminate-indicator-circle\"></div>\n  <div class=\"indeterminate-indicator-circle\"></div>\n  <div class=\"indeterminate-indicator-circle\"></div>\n  <div class=\"indeterminate-indicator-circle\"></div>\n</div>\n\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"indeterminate-indicator\">\n    {{'&lt;'}}div class=\"indeterminate-indicator-circle\">{{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"indeterminate-indicator-circle\">{{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"indeterminate-indicator-circle\">{{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"indeterminate-indicator-circle\">{{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"indeterminate-indicator-circle\">{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/progress-indicator-section/progress-indicator-section.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/progress-indicator-section/progress-indicator-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressIndicatorSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgressIndicatorSectionComponent = (function (_super) {
    __extends(ProgressIndicatorSectionComponent, _super);
    function ProgressIndicatorSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return ProgressIndicatorSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
ProgressIndicatorSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-progress-indicator-section',
        template: __webpack_require__("../../../../../src/docs/app/sections/progress-indicator-section/progress-indicator-section.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/progress-indicator-section/progress-indicator-section.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ProgressIndicatorSectionComponent);

var _a;
//# sourceMappingURL=progress-indicator-section.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/range-input/range-input.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Range Input</h1>\n\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-range-input --save\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} RangeInputModule } from 'suprematism-range-input';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      RangeInputModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n\n<h5 class=\"_mtxl\">With Units Toggle</h5>\n\n<supre-range-input\n  [value]=\"range1\"\n  minPlaceholder=\"Enter Min\"\n  maxPlaceholder=\"Enter Max\"\n  (valueChange)=\"range1 = $event\"\n  >\n</supre-range-input>\nrange ({{range1.units}}) : {{range1.min || '--'}} to {{range1.max || '--'}}\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-range-input\n      minPlaceholder=\"Enter Min\"\n      maxPlaceholder=\"Enter Max\"\n      (valueChange)=\"range1 = $event\"\n      >\n    {{'&lt;'}}/supre-range-input>\n  </code>\n</pre>\n\n<h5 class=\"_mtxl\">Without Units Toggle</h5>\n<supre-range-input\n  [showUnits]=\"false\"\n  minPlaceholder=\"Enter Min\"\n  maxPlaceholder=\"Enter Max\"\n  (valueChange)=\"range2 = $event\"\n  >\n</supre-range-input>\nrange : {{range2.min || '--'}} to {{range2.max || '--'}}\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-range-input\n      [showUnits]=\"false\"\n      minPlaceholder=\"Enter Min\"\n      maxPlaceholder=\"Enter Max\"\n      (valueChange)=\"range2 = $event\"\n      >\n    {{'&lt;'}}/supre-range-input>\n  </code>\n</pre>\n\n<h5 class=\"_mtxl\">Debouncing</h5>\n<supre-range-input\n  debounce=\"500\"\n  minPlaceholder=\"Enter Min\"\n  maxPlaceholder=\"Enter Max\"\n  (valueChange)=\"range3 = $event\"\n  >\n</supre-range-input>\nrange : {{range3.min || '--'}} to {{range3.max || '--'}}\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-range-input\n      debounce=\"500\"\n      minPlaceholder=\"Enter Min\"\n      maxPlaceholder=\"Enter Max\"\n      (valueChange)=\"range3 = $event\"\n      >\n    {{'&lt;'}}/supre-range-input>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/range-input/range-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/range-input/range-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeInputSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RangeInputSectionComponent = (function (_super) {
    __extends(RangeInputSectionComponent, _super);
    function RangeInputSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        _this.range1 = { units: 'percent', min: 25, max: 50 };
        _this.range2 = { units: 'percent' };
        _this.range3 = { units: 'percent' };
        return _this;
    }
    return RangeInputSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
RangeInputSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-range-input',
        template: __webpack_require__("../../../../../src/docs/app/sections/range-input/range-input.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/range-input/range-input.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], RangeInputSectionComponent);

var _a;
//# sourceMappingURL=range-input.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/section.abstract.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs__);

var AbstractSectionComponent = (function () {
    function AbstractSectionComponent(route) {
        this.route = route;
        this.subscriptions = [];
    }
    /**
     * After View Init, intialize the code blocks
     *
     *
     * @memberOf ButtonsComponent
     */
    AbstractSectionComponent.prototype.ngAfterViewInit = function () {
        // transform all prisimJS elements on the page
        Array.from(document.querySelectorAll('[class*="language-"]')).forEach(function (el) {
            Prism.highlightElement(el, false);
        });
        // perform any anchor tag activities needed...
        if (this.route) {
            this.addSubscription = this.route.fragment.subscribe(function (fragment) {
                var element = document.querySelector('#' + fragment);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'instant',
                        block: 'start',
                        inline: 'start'
                    });
                }
            });
        }
    };
    Object.defineProperty(AbstractSectionComponent.prototype, "addSubscription", {
        /**
         * Add a subscription to dispose of later
         *
         * @protected
         *
         * @memberOf AbstractSectionComponent
         */
        set: function (subscription) {
            this.subscriptions.push(subscription);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * On Component Destroy
     *
     *
     * @memberOf AbstractSectionComponent
     */
    AbstractSectionComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    return AbstractSectionComponent;
}());

//# sourceMappingURL=section.abstract.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/select-search/select-search.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Select Search</h1>\n\n\n<a id=\"select-search-install\"></a>\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-select-search --save\n\n  // install dependencies\n  npm install ag-grid ag-grid-angular ag-grid-enterprise --save\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} SelectSearchModule } from 'suprematism-select-search';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      SelectSearchModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n<a id=\"select-search-simple\"></a>\n<h5 class=\"_mtxl\">This is a select search.</h5>\n<div class=\"example\">\n  <supre-select-search [data]=\"data1\"\n                       unselectedText=\"SELECT AN AUDIENCE\"\n                       [filterFunc]=\"stringFilter\"\n                       [displayFormat]=\"displayFormat1\">\n  </supre-select-search>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}supre-select-search [data]=\"data1\"\n                         unselectedText=\"SELECT AN AUDIENCE\"\n                         [filterFunc]=\"stringFilter\"\n                         [displayFormat]=\"displayFormat1\">\n    {{'&lt;'}}/supre-select-search>\n  </code>\n</pre>\n\n<a id=\"select-search-openWhileInputFocused-false\"></a>\n<h5 class=\"_mtxl\">This select seach will still close if the input is focused.</h5>\n<div class=\"example\">\n  <supre-select-search [data]=\"data1\"\n                       unselectedText=\"SELECT AN AUDIENCE\"\n                       [filterFunc]=\"stringFilter\"\n                       [displayFormat]=\"displayFormat1\"\n                       [openWhileInputFocused]=\"false\">\n  </supre-select-search>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    <{{'&lt;'}}supre-select-search [data]=\"data1\"\n                         unselectedText=\"SELECT AN AUDIENCE\"\n                         [filterFunc]=\"stringFilter\"\n                         [displayFormat]=\"displayFormat1\"\n                         [openWhileInputFocused]=\"false\">\n    {{'&lt;'}}/supre-select-search>\n  </code>\n</pre>\n\n\n<a id=\"select-search-filter-on-id\"></a>\n<h5 class=\"_mtxl\">This select seach filters on id.</h5>\n<div class=\"example\">\n  <supre-select-search [data]=\"data1\"\n                       unselectedText=\"SELECT AN AUDIENCE\"\n                       [filterFunc]=\"idFilter\"\n                       [displayFormat]=\"displayFormat1\">\n  </supre-select-search>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}supre-select-search [data]=\"data1\"\n                         unselectedText=\"SELECT AN AUDIENCE\"\n                         [filterFunc]=\"idFilter\"\n                         [displayFormat]=\"displayFormat1\">\n    {{'&lt;'}}/supre-select-search>\n  </code>\n</pre>\n\n\n<a id=\"select-search-custom-placeholder\"></a>\n<h5 class=\"_mtxl\">This select seach has a custom placeholder.</h5>\n<div class=\"example\">\n  <supre-select-search [data]=\"data1\"\n                       unselectedText=\"SELECT AN AUDIENCE\"\n                       [filterFunc]=\"stringFilter\"\n                       placeholder=\"Filter by name\"\n                       [displayFormat]=\"displayFormat1\">\n  </supre-select-search>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}supre-select-search [data]=\"data1\"\n                         unselectedText=\"SELECT AN AUDIENCE\"\n                         [filterFunc]=\"stringFilter\"\n                         placeholder=\"Filter by name\"\n                         [displayFormat]=\"displayFormat1\">\n    {{'&lt;'}}/supre-select-search>\n  </code>\n</pre>\n\n\n<a id=\"select-search-long-searchDebounce\"></a>\n<h5 class=\"_mtxl\">This select seach has a longer searchDebounce.</h5>\n<div class=\"example\">\n  <supre-select-search [data]=\"data1\"\n                       unselectedText=\"SELECT AN AUDIENCE\"\n                       [filterFunc]=\"stringFilter\"\n                       searchDebounce=2000\n                       [displayFormat]=\"displayFormat1\">\n  </supre-select-search>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}supre-select-search [data]=\"data1\"\n                         unselectedText=\"SELECT AN AUDIENCE\"\n                         [filterFunc]=\"stringFilter\"\n                         searchDebounce=2000\n                         [displayFormat]=\"displayFormat1\">\n    {{'&lt;'}}/supre-select-search>\n  </code>\n</pre>\n\n\n<a id=\"select-search-short-searchDebounce\"></a>\n<h5 class=\"_mtxl\">This select seach has a shorter searchDebounce.</h5>\n<div class=\"example\">\n  <supre-select-search [data]=\"data1\"\n                       unselectedText=\"SELECT AN AUDIENCE\"\n                       [filterFunc]=\"stringFilter\"\n                       searchDebounce=10\n                       [displayFormat]=\"displayFormat1\">\n  </supre-select-search>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}supre-select-search [data]=\"data1\"\n                         unselectedText=\"SELECT AN AUDIENCE\"\n                         [filterFunc]=\"stringFilter\"\n                         searchDebounce=10\n                         [displayFormat]=\"displayFormat1\">\n    {{'&lt;'}}/supre-select-search>\n  </code>\n</pre>\n\n\n<a id=\"select-search-autoFocusOnInput-false\"></a>\n<h5 class=\"_mtxl\">This select seach doesn't automatically focus on the search input.</h5>\n<div class=\"example\">\n  <supre-select-search [data]=\"data1\"\n                       unselectedText=\"SELECT AN AUDIENCE\"\n                       [filterFunc]=\"stringFilter\"\n                       [autoFocusOnInput]=\"false\"\n                       [displayFormat]=\"displayFormat1\">\n  </supre-select-search>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}supre-select-search [data]=\"data1\"\n                         unselectedText=\"SELECT AN AUDIENCE\"\n                         [filterFunc]=\"stringFilter\"\n                         [autoFocusOnInput]=\"false\"\n                         [displayFormat]=\"displayFormat1\">\n    {{'&lt;'}}/supre-select-search>\n  </code>\n</pre>\n\n\n<a id=\"select-search-item-selected\"></a>\n<h5 class=\"_mtxl\">This select seach has an inital selection.</h5>\n<div class=\"example\">\n  <supre-select-search [data]=\"data1\"\n                       [selectedDatum]=\"data1[0]\"\n                       unselectedText=\"SELECT AN AUDIENCE\"\n                       [filterFunc]=\"stringFilter\"\n                       [displayFormat]=\"displayFormat1\">\n  </supre-select-search>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}supre-select-search [data]=\"data1\"\n                         [selectedDatum]=\"data1[0]\"\n                         unselectedText=\"SELECT AN AUDIENCE\"\n                         [filterFunc]=\"stringFilter\"\n                         [displayFormat]=\"displayFormat1\">\n    {{'&lt;'}}/supre-select-search>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/select-search/select-search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "supre-select-search /deep/ .SelectSearch-wrapper {\n  position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/select-search/select-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearchSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectSearchSectionComponent = (function (_super) {
    __extends(SelectSearchSectionComponent, _super);
    function SelectSearchSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        /* tslint:disable */
        _this.data1 = [
            {
                id: 86,
                name: '1E_Amusement park visitors with 2+ children'
            },
            {
                id: 83,
                name: '3E_Outstanding Cars Designed for Dogs and Their Humans'
            },
            {
                id: 3,
                name: '2E_How to Feed a Large Family Real Food on a Budget'
            },
            {
                id: 163,
                name: '2E - Smart Investors and Credit Cards Owners'
            },
            {
                id: 1040,
                name: 'Active Investors-stella'
            },
            {
                id: 1064,
                name: 'test'
            },
            {
                id: 738,
                name: 'Subaru Dog Friendly Car-6Attributes: Dog Owner | Domestic Traveler | Interest in Travel | Interest in Automotive |Purchase via Online | Credit Card User'
            },
            {
                id: 741,
                name: 'Young Drivers'
            },
            {
                id: 181,
                name: '5E_snapshot view2'
            },
            {
                id: 5,
                name: '2E_Family Welness Programs Family Welness ProgramsFamilyWelness ProgramsFamilyWelnessProgramsFamilyWelnessProgramsFWelnessProgramsdfgdfgdfgdfgdfgdfgdf WelnessProgramsdfgdfgdfgdfgdfgdfgdf WelnessProgramsdfgdfgdfgdfgdfgdfgdf WelnessProgramsdfgdfgdfgdfgdfgdfgdf WelnessProgramsdfgdfgdfgdfgdfgdfgdf'
            },
            {
                id: 31,
                name: '2E_Families with a High Credit Scores'
            },
            {
                id: 4,
                name: '2E_Healthy Living and Eating for Big Families'
            },
            {
                id: 21,
                name: '1E_Dow Owners who drive BMW with High credit score'
            },
            {
                id: 174,
                name: '6 Attributes - smart investors who are credit card owners'
            },
            {
                id: 149,
                name: '5 Attributes - smart investors who are credit card owners'
            },
            {
                id: 112,
                name: 'Audience% in venn box'
            },
            {
                id: 7,
                name: '2E_Outstanding Cars Designed for Dogs and Their Humans'
            },
            {
                id: 20,
                name: '1E_High credit score customer with yearly budget of 100Kand more and even more much more High credit score customer with yearly budget of 100Kand more and even more much more'
            },
            {
                id: 1363,
                name: 'Benefits of Animals to Humans-2'
            },
            {
                id: 739,
                name: 'Active Invesstors'
            },
            {
                id: 1271,
                name: 'Subaru Dog Friendly Car'
            },
            {
                id: 162,
                name: '5E-Healthy Life style supporters1'
            },
            {
                id: 14,
                name: '1E_st-2 conditions: for this condition we have to build 1 audience with 1 expression, which includes 2 attributes'
            },
            {
                id: 114,
                name: 'Avid Runners who drive Acura_MDX'
            },
            {
                id: 115,
                name: '2 identical expressions'
            },
            {
                id: 79,
                name: '3E_Size of the Venn boxes'
            },
            {
                id: 207,
                name: 'women live on East Cost and Avid Runners'
            },
            {
                id: 164,
                name: '1233'
            },
            {
                id: 391,
                name: 'Healthy Living and Eating for Big Families1'
            },
            {
                id: 390,
                name: 'How to Feed a Large Family Real Food on a Budget'
            },
            {
                id: 189,
                name: '6E_Cat owners, who live a Healthy live style AND play golf NOT own a Dog'
            },
            {
                id: 8,
                name: '1E_Apple Ipod/Iphone Owners, who drive BMW'
            },
            {
                id: 229,
                name: 'How to feed a Large Family on a Budget'
            },
            {
                id: 176,
                name: '2E_Attributes - smart investors who are credit card owners1'
            },
            {
                id: 91,
                name: 'Copy of 1E_Dog owners who drive BMW'
            },
            {
                id: 87,
                name: 'Copy of BMW drivers who play golf123456'
            },
            {
                id: 93,
                name: '2E_Families with a High Credit Scores_TOTAL0'
            },
            {
                id: 84,
                name: 'Copy of 1E_Dow Owners who drive BMW with High credit score'
            },
            {
                id: 211,
                name: 'promote educational games for kids'
            },
            {
                id: 2,
                name: '1E_Dog owners who work full time Dog owners who work full time Dog owners who work full time Dog owners who work full time Dog owners who work full timeDog owners who work full time Dog owners who work full time'
            },
            {
                id: 9,
                name: '5E_Promote healthy Living for Children and Families1'
            },
            {
                id: 486,
                name: '1New concept of the CARs  for Dog Owners. Dog owners should own a Credit car.Dog owners should maintain a healthy living. Dog owners should be a Cruise entusiasts.Dog Owners must have a retirement financial plan.'
            },
            {
                id: 519,
                name: 'blerg'
            },
            {
                id: 196,
                name: '2Positive_1Negative'
            },
            {
                id: 180,
                name: '2E_Attributes2 - smart investors who are credit card owners1'
            },
            {
                id: 96,
                name: '2nd Copy of BMW drivers who play golf1'
            },
            {
                id: 98,
                name: 'Eats at Fast Food Restaurants Avid runners'
            },
            {
                id: 173,
                name: '5E_snapshot view'
            },
            {
                id: 182,
                name: '5E_snapshot view311'
            },
            {
                id: 71,
                name: '1E_CATOWNERS, who live a Healthy live style AND PLAY golf NOT own a Dog'
            },
            {
                id: 99,
                name: 'Copy of Eats at Fast Food Restaurants Avid runners'
            },
            {
                id: 183,
                name: 'Copy of 5E_snapshot view4'
            },
            {
                id: 101,
                name: '2nd Copy of Eats at Fast Food Restaurants Avid runners'
            },
            {
                id: 184,
                name: 'three expressions, one is zero reach'
            },
            {
                id: 185,
                name: 'five expressions, one is zero reach'
            },
            {
                id: 58,
                name: '4E_Cat owners, who live a Healthy live style AND play golf NOT own a Dog'
            },
            {
                id: 158,
                name: '1E_Major credit cards owners'
            },
            {
                id: 175,
                name: '7 Attributes - smart investors who are credit card owners'
            },
            {
                id: 156,
                name: '2E_cat owner who live a healthy live style and play golf'
            },
            {
                id: 1223,
                name: 'test1'
            },
            {
                id: 226,
                name: 'some audience'
            },
            {
                id: 230,
                name: 'Copy of 4E_Healthy Living Practicies in Families and Child Healthhy'
            },
            {
                id: 186,
                name: 'one expression, one is zero reach'
            },
            {
                id: 627,
                name: 'Kids Friendly Restaurants'
            },
            {
                id: 1273,
                name: 'Active Investors'
            },
            {
                id: 467,
                name: 'autot12'
            },
            {
                id: 1284,
                name: 'Educational model elements provide students with a holistic, values-based education that develops them as individuals and as members of a global society.A process of internal certification is used to assess all study programmes with regard to these guidelines'
            },
            {
                id: 193,
                name: '1Positive_1Negative'
            },
            {
                id: 85,
                name: '1E_Dog Owners who drive BMW with High credit score'
            },
            {
                id: 192,
                name: '3Positive_1Negative'
            },
            {
                id: 646,
                name: 'Education Model'
            },
            {
                id: 1361,
                name: 'Owners of Automobiles'
            },
            {
                id: 1457,
                name: 'Eating Habits among Teens'
            },
            {
                id: 1458,
                name: 'Family Welness Program'
            },
            {
                id: 485,
                name: '1BMW drivers who play golf'
            },
            {
                id: 1459,
                name: 'Healthy Living Practicies in Families with 5+ children'
            },
            {
                id: 15,
                name: 'New concept of the CARs  for Dog Owners. Dog owners should own a Car and a Credit car.Dog owners should maintain a healthy living. Dog owners should be a Cruise entusiasts12345'
            },
            {
                id: 157,
                name: '1E_cat owners who live a healthy live style and play golf'
            },
            {
                id: 78,
                name: '1E_Family restaurants visitors1'
            },
            {
                id: 422,
                name: '1E_ 1 Attribute'
            },
            {
                id: 474,
                name: '1E_2 Attributes'
            },
            {
                id: 466,
                name: '1E_3 Attributes'
            },
            {
                id: 439,
                name: '1E_4 Attributes'
            },
            {
                id: 1526,
                name: 'Copy of Subaru Dog Friendly Car'
            },
            {
                id: 438,
                name: '1 EXP_5 Attributes'
            },
            {
                id: 628,
                name: 'NBC Sports Real Golf.NBC Sports Real Golf is a mobile game developed by Lucky Chicken Games with a license from NBC sports.NBCU was aquired by Comcast – original owner of Golf Channel in Feb 2011'
            },
            {
                id: 1519,
                name: 'Healthy Living and Eating for Big Families'
            },
            {
                id: 1483,
                name: 'Classes for young pet lovers'
            },
            {
                id: 653,
                name: 'The elements combine to provide UWC students with a holistic, values-based education that develops them as individuals and as members of a global society.Experience: Active – Academic – Socialasdn others'
            },
            {
                id: 1553,
                name: 'Copy of NBC Sports Real Golf.NBC Sports Real Golf is a mobile game developed by Lucky Chicken Games with a license from NBC sports.NBCU was aquired by Comcast – original owner of Golf Channel in Feb 2011'
            },
            {
                id: 6,
                name: '4E_Healthy Living Practicies in Families and Child Healthhy'
            },
            {
                id: 772,
                name: 'Investing in Mutual Funds'
            },
            {
                id: 92,
                name: 'Copy of BMW drivers who play golf'
            },
            {
                id: 1265,
                name: 'test2'
            },
            {
                id: 1268,
                name: 'test3'
            },
            {
                id: 1362,
                name: 'Fast Food Consumption by Teens'
            },
            {
                id: 775,
                name: 'Copy of Young Drivers'
            },
            {
                id: 428,
                name: '1E_5 Attributes'
            },
            {
                id: 801,
                name: 'Educational Model'
            },
            {
                id: 803,
                name: 'The elements combine to provide students with a holistic, values-based education that develops them as individuals and as members of a global society.'
            },
            {
                id: 808,
                name: 'Amusement Park Visitors'
            },
            {
                id: 799,
                name: 'Active Investors1'
            },
            {
                id: 884,
                name: 'Copy of Active Investors123'
            },
            {
                id: 736,
                name: 'Subaru Dog Friendly Car_Subaru Dog Friendly Car_4 Attributes: Dog Owner | Domestic Traveler | Interest in Travel | Interest in Automotive'
            },
            {
                id: 228,
                name: 'Healthy living practices in child care'
            },
            {
                id: 774,
                name: 'Funzxcz'
            },
            {
                id: 1535,
                name: 'Benefits of Animals to Humans'
            },
            {
                id: 732,
                name: 'Cat owners who live a healthy live style and do not own dogs1'
            },
            {
                id: 427,
                name: 'Cat owners who live a healthy live style and do not own dogs'
            },
            {
                id: 735,
                name: 'Subaru Dog Friendly Car_3 Attributes: Dog Owner | Domestic Traveler | Interest in Travel'
            },
            {
                id: 734,
                name: 'Subaru Dog Friendly Car_2 Attributes: Dog Owner |Domestic Traveler'
            },
            {
                id: 1269,
                name: 'test4'
            },
            {
                id: 1368,
                name: 'Nutrition in Teens'
            },
            {
                id: 755,
                name: 'Copy of Classes for young pet lovers'
            },
            {
                id: 737,
                name: 'Subaru Dog Friendly Car_5Attributes: Dog Owner | Domestic Traveler | Interest in Travel | Interest in Automotive |Purchase via Online'
            },
            {
                id: 777,
                name: 'Education Model Audience'
            },
            {
                id: 790,
                name: 'Smart Investors who are credit cards owners'
            },
            {
                id: 802,
                name: 'Audience Active Investors: NO NOTE'
            },
            {
                id: 879,
                name: 'Copy of Active Investors1'
            },
            {
                id: 883,
                name: 'Copy of Active Investors12'
            },
            {
                id: 733,
                name: 'Subaru Dog Friendly Car_1 Attribute:Dog Owner'
            },
            {
                id: 945,
                name: 'Active Investors12'
            },
            {
                id: 1013,
                name: 'Nutrition in Teen'
            }
        ];
        return _this;
        /* tslint:enable */
    }
    SelectSearchSectionComponent.prototype.displayFormat1 = function (datum) {
        return "" + datum.name;
    };
    SelectSearchSectionComponent.prototype.stringFilter = function (datum, filter) {
        return ("" + datum.name.toLowerCase()).includes(filter.toLowerCase());
    };
    SelectSearchSectionComponent.prototype.idFilter = function (datum, filter) {
        return ("" + datum.id).includes(filter.toLowerCase());
    };
    return SelectSearchSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
SelectSearchSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-select-search',
        template: __webpack_require__("../../../../../src/docs/app/sections/select-search/select-search.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/select-search/select-search.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], SelectSearchSectionComponent);

var _a;
//# sourceMappingURL=select-search.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Slider</h1>\n\n\n<a id=\"slider-install\"></a>\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-slider.git\n\n  // additional deps are required\n  npm install nouislider\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} SliderModule } from 'suprematism-slider';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      SliderModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n\n<h5 class=\"_mtxl\">Simple Example</h5>\n\n<div class=\"component-container\">\n  <supre-slider\n    [min]=\"0\"\n    [max]=\"100\"\n    [stepValue]=\"1\"\n    [textFormatter]=\"textFormatter\"\n  ></supre-slider>\n</div>\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-slider\n    [min]=\"0\"\n    [max]=\"100\"\n    [stepValue]=\"1\"\n    [textFormatter]=\"textFormatter\"\n    [styleFormatter]=\"styleFormatter\"\n    [height]=\"400\"\n    [orientation]=\"'vertical'\"\n    (change)=\"onChanged($event)\"\n    {{'&lt;'}}/supre-slider>\n  </code>\n</pre>\n\n<a href=\"https://github.com/CINBCUniversal/suprematism-slider\" target=\"_blank\">\n  Read More on Github\n</a>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/slider/slider.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .component-container {\n  width: 50%;\n  margin: 4rem 2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_suprematism_slider_src_formatter__ = __webpack_require__("../../../../suprematism-slider/src/formatter/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SliderSectionComponent = (function (_super) {
    __extends(SliderSectionComponent, _super);
    function SliderSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        _this.textFormatter = __WEBPACK_IMPORTED_MODULE_3_suprematism_slider_src_formatter__["a" /* defaultTextFormatter */];
        return _this;
    }
    return SliderSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
SliderSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-slider',
        template: __webpack_require__("../../../../../src/docs/app/sections/slider/slider.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/slider/slider.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], SliderSectionComponent);

var _a;
//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/toggle-switch/toggle-switch.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Toggle Switch</h1>\n\n\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-toggle-switch --save\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} ToggleSwitchModule } from 'suprematism-toggle-switch';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      ToggleSwitchModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n\n<h5 class=\"_mtxl\">Simple Example</h5>\n\n<supre-toggle-switch\n  class=\"u-type-s\"\n  [toggled]=\"isActive\"\n  (toggle)=\"isActive = $event\"\n  >\n  <div onLabel><span class=\"u-supre-icon u-supre-icon--snapshot\"></span> Active</div>\n  <div offLabel>InActive <span class=\"u-supre-icon u-supre-icon--edit\"></span></div>\n</supre-toggle-switch>\n\n<div>Toggled? {{isActive}}</div>\n\n\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n    {{'&lt;'}}supre-toggle-switch\n      class=\"u-type-s\"\n      [toggled]=\"isActive\"\n      (toggle)=\"isActive = $event\"\n      >\n      {{'&lt;'}}div onLabel>{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--snapshot\">{{'&lt;'}}/span> Active{{'&lt;'}}/div>\n      {{'&lt;'}}div offLabel>InActive {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--edit\">{{'&lt;'}}/span>{{'&lt;'}}/div>\n    {{'&lt;'}}/supre-toggle-switch>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/toggle-switch/toggle-switch.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/toggle-switch/toggle-switch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleSwitchSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToggleSwitchSectionComponent = (function (_super) {
    __extends(ToggleSwitchSectionComponent, _super);
    function ToggleSwitchSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        _this.isActive = true;
        return _this;
    }
    return ToggleSwitchSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
ToggleSwitchSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-range-input',
        template: __webpack_require__("../../../../../src/docs/app/sections/toggle-switch/toggle-switch.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/toggle-switch/toggle-switch.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ToggleSwitchSectionComponent);

var _a;
//# sourceMappingURL=toggle-switch.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/tooltip/tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Tooltips</h1>\n\n\n<a id=\"tooltips-install\"></a>\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-popover --save\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} SuprePopoverModule } from 'suprematism-popover';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      SuprePopoverModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n\n<a id=\"tooltips-title-only\"></a>\n<h5 class=\"_mtxl\">Title Only Tooltip</h5>\n<div>\n  Some text to<strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\"> test </strong>with.\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  Some text to{{'&lt;'}}strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\"> test {{'&lt;'}}/strong>with.\n  </code>\n</pre>\n\n\n<a id=\"tooltips-title-with-icon\"></a>\n<h5 class=\"_mtxl\">Title with Icon Tooltip</h5>\n<div>\n  Some text to<strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" icon=\"u-supre-icon--QSR\"> test </strong>with.\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  Some text to{{'&lt;'}}strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" icon=\"u-supre-icon--QSR\"> test {{'&lt;'}}/strong>with.\n  </code>\n</pre>\n\n\n<a id=\"tooltips-title-with-icon-and-description\"></a>\n<h5 class=\"_mtxl\">Title with a Description Tooltip</h5>\n<div>\n  Some text to<strong\n    class=\"color-aqua\"\n    supreTooltip=\"Title Goes Here\"\n    icon=\"u-supre-icon--QSR\"\n    content=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit id nunc blandit varius. Quisque malesuada nunc enim, in feugiat dolor porta in.\">\n    test\n  </strong>with.\n  And some more <strong\n    class=\"color-aqua\"\n    supreTooltip=\"Title Goes Here\"\n    content=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit id nunc blandit varius. Quisque malesuada nunc enim, in feugiat dolor porta in.\">\n    text\n  </strong>to test with.\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  Some text to{{'&lt;'}}strong\n    class=\"color-aqua\"\n    supreTooltip=\"Title Goes Here\"\n    icon=\"u-supre-icon--QSR\"\n    content=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit id nunc blandit varius. Quisque malesuada nunc enim, in feugiat dolor porta in.\">\n    test\n  {{'&lt;'}}/strong>with.\n  And some more {{'&lt;'}}strong\n    class=\"color-aqua\"\n    supreTooltip=\"Title Goes Here\"\n    content=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit id nunc blandit varius. Quisque malesuada nunc enim, in feugiat dolor porta in.\">\n    text\n  {{'&lt;'}}/strong>to test with.\n  </code>\n</pre>\n\n\n<a id=\"tooltips-placement\"></a>\n<h5 class=\"_mtxl\">Placement</h5>\n<div>\n  Popovers can be positioned on the:\n  <strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"top\"> top </strong>,\n  <strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"right\"> right </strong>,\n  <strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"bottom\"> bottom </strong>, and\n  <strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"left\"> left </strong>.\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!--\n    Valid settings are: \"top\", \"bottom\", \"left\", \"right\", \"auto\", \"auto top\", \"auto bottom\", \"auto left\", \"auto right\"\n  -->\n  Popovers can be positioned on the:\n  {{'&lt;'}}strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"top\"> top {{'&lt;'}}/strong>,\n  {{'&lt;'}}strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"right\"> right {{'&lt;'}}/strong>,\n  {{'&lt;'}}strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"bottom\"> bottom {{'&lt;'}}/strong>, and\n  {{'&lt;'}}strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"left\"> left {{'&lt;'}}/strong>\n  </code>\n</pre>\n\n\n<a id=\"tooltips-disabled\"></a>\n<h5 class=\"_mtxl\">Disable</h5>\n<div>\n  Popovers can be disabled/enabled:\n  <strong class=\"color-aqua\" [disabled]=\"false\" supreTooltip=\"Title Goes Here Enabled\"> Enabled</strong>,\n  <strong class=\"color-aqua\" [disabled]=\"true\" supreTooltip=\"Title Goes Here Disabled\"> Disabled</strong>.\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- disabled is optional, it defaults to 'false' -->\n  {{'&lt;'}}strong class=\"color-aqua\" supreTooltip=\"Title Goes Here Enabled\"> Enabled {{'&lt;'}}/strong>,\n  {{'&lt;'}}strong class=\"color-aqua\" [disabled]=\"true\" supreTooltip=\"Title Goes Here Disabled\"> Disabled {{'&lt;'}}/strong>.\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/tooltip/tooltip.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TooltipComponent = (function (_super) {
    __extends(TooltipComponent, _super);
    function TooltipComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return TooltipComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
TooltipComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-tooltip',
        template: __webpack_require__("../../../../../src/docs/app/sections/tooltip/tooltip.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/tooltip/tooltip.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], TooltipComponent);

var _a;
//# sourceMappingURL=tooltip.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/truncate-text/truncate-text.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Truncate Text</h1>\n\n\n<a id=\"truncate-text-install\"></a>\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-truncate-text --save\n\n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} TruncateTextModule } from 'suprematism-truncate-text';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      TruncateTextModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n<a id=\"truncate-text-untruncated\"></a>\n<h5 class=\"_mtxl\">Untruncated Text</h5>\n<div class=\"example\">\n  <supre-truncate-text [maxLines]=\"2\" [text]=\"'short text'\">\n  </supre-truncate-text>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}supre-truncate-text [maxLines]=\"2\" [text]=\"'short text'\">{{'&lt;'}}/supre-truncate-text>\n  </code>\n</pre>\n<a id=\"truncate-text-one-line\"></a>\n<h5 class=\"_mtxl\">Truncate at 1 line.</h5>\n<div class=\"example\">\n  <supre-truncate-text [maxLines]=\"1\" [text]=\"longText\"></supre-truncate-text>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}supre-truncate-text [maxLines]=\"1\" [text]=\"longText\">{{'&lt;'}}/supre-truncate-text>\n  </code>\n</pre>\n<a id=\"truncate-text-two-lines\"></a>\n<h5 class=\"_mtxl\">Truncate at 2 lines.</h5>\n<div class=\"example\">\n  <supre-truncate-text [maxLines]=\"2\" [text]=\"longText\"></supre-truncate-text>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}supre-truncate-text [maxLines]=\"2\" [text]=\"longText\">{{'&lt;'}}/supre-truncate-text>\n  </code>\n</pre>\n<a id=\"truncate-text-five-lines\"></a>\n<h5 class=\"_mtxl\">Truncate at 5 lines.</h5>\n<div class=\"example\">\n  <supre-truncate-text [maxLines]=\"5\" [text]=\"longText\"></supre-truncate-text>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}supre-truncate-text [maxLines]=\"5\" [text]=\"longText\">{{'&lt;'}}/supre-truncate-text>\n  </code>\n</pre>\n<a id=\"truncate-text-popover-right\"></a>\n<h5 class=\"_mtxl\">Popover right.</h5>\n<div class=\"example\">\n  <supre-truncate-text [maxLines]=\"2\" [text]=\"longText\" [popoverPlacement]=\"'right'\"></supre-truncate-text>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}supre-truncate-text [maxLines]=\"2\" [text]=\"longText\" [popoverPlacement]=\"'right'\">{{'&lt;'}}/supre-truncate-text>\n  </code>\n</pre>\n<a id=\"truncate-text-combined\"></a>\n<h5 class=\"_mtxl\">Truncated to 2 lines, popover right, and styled.</h5>\n<div class=\"example\">\n  <supre-truncate-text [maxLines]=\"2\" [text]=\"longText\" [popoverPlacement]=\"'top'\"></supre-truncate-text>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}supre-truncate-text [maxLines]=\"2\" [text]=\"longText\" [popoverPlacement]=\"'top'\">{{'&lt;'}}/supre-truncate-text>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/truncate-text/truncate-text.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example {\n  max-width: 800px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/truncate-text/truncate-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateTextSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TruncateTextSectionComponent = (function (_super) {
    __extends(TruncateTextSectionComponent, _super);
    function TruncateTextSectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        _this.longText = "Suprematism is an art movement, focused on basic geometric\n    forms, such as circles, squares, lines, and rectangles, painted in a limited\n    range of colors. It was founded by Kazimir Malevich in Russia, around 1913,\n    and announced in Malevich's 1915 exhibition, The Last Futurist Exhibition of\n    Paintings 0.10, in St. Petersburg, where he, alongside 13 other artists,\n    exhibited 36 works in a similar style. The term suprematism refers to an\n    abstract art based upon \"the supremacy of pure artistic feeling\"\n    rather than on visual depiction of objects.";
        return _this;
    }
    return TruncateTextSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
TruncateTextSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-truncate-text',
        template: __webpack_require__("../../../../../src/docs/app/sections/truncate-text/truncate-text.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/truncate-text/truncate-text.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], TruncateTextSectionComponent);

var _a;
//# sourceMappingURL=truncate-text.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/typography-section/typography-section.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Typography</h1>\n\n\n<a id=\"type-classes\"></a>\n<h5 class=\"_mtxl\">Classes</h5>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}-- font size classes -->\n  {{'&lt;'}}div class=\"u-type-xs\">9px{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-type-s\">10px{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-type-sm\">11px{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-type-m\">12px{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-type-l\">16px{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-type-xl\">24px{{'&lt;'}}/div>\n\n  {{'&lt;'}}-- text transformations -->\n  {{'&lt;'}}div class=\"u-uppercase\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-capitalize\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}-- text align -->\n  {{'&lt;'}}div class=\"u-type-left\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-type-center\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-type-right\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}-- emphasis -->\n  {{'&lt;'}}div class=\"u-bold\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-em\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}-- Wrap in Parenthesis -->\n  {{'&lt;'}}div class=\"u-parens\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}-- Colors, see colors section for more info -->\n  {{'&lt;'}}div class=\"color-ice\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-off-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-lemon\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-blue-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-mid-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-lite-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-black\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-lite-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-active-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-disabled-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-soft-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-shark-skin\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"color-sequence-1\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-sequence-2\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-sequence-3\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-sequence-4\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"color-viz-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-lime\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-ocean\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-orange\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-yellow\">...{{'&lt;'}}/div>\n\n  </code>\n</pre>\n\n\n<a id=\"type-variables\"></a>\n<h5 class=\"_mtxl\">Size Variables</h5>\n<pre class=\"code-block\">\n  <code class=\"language-css\">\n  @import \"../node_modules/suprematism-style-guide/dist/vars/_vars.suprematisim.scss\";\n  </code>\n</pre>\n<pre class=\"code-block\">\n  <code class=\"language-css\">\n  $text-size-xs: 9;\n  $text-size-s: 10;\n  $text-size-sm: 11;\n  $text-size-m: 12;\n  $text-size-l: 16;\n  $text-size-xl: 24;\n  </code>\n</pre>\n\n\n<a id=\"type-placeholders\"></a>\n<h5 class=\"_mtxl\">Place Holders</h5>\n<pre class=\"code-block\">\n  <code class=\"language-css\">\n  // sizes\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_text.scss.scss\";\n\n  // colors\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_colors.scss\";\n  </code>\n</pre>\n<pre class=\"code-block\">\n  <code class=\"language-css\">\n  // sizes\n  @extend %u-type-xs;   // 9px\n  @extend %u-type-s;    // 10px\n  @extend %u-type-sm;   // 11px\n  @extend %u-type-m;    // 12px\n  @extend %u-type-l;    // 16px\n  @extend %u-type-xl;   // 24px\n\n  // colors\n  @extend %color-ice;\n  @extend %color-off-white;\n  @extend %color-gray;\n  @extend %color-lemon;\n  @extend %color-blue-gray;\n  @extend %color-aqua;\n  @extend %color-purple;\n  @extend %color-mid-gray;\n  @extend %color-blue;\n  @extend %color-green;\n  @extend %color-lite-green;\n  @extend %color-white;\n  @extend %color-black;\n  @extend %color-lite-gray;\n  @extend %color-active-stroke;\n  @extend %color-disabled-stroke;\n  @extend %color-soft-green;\n  @extend %color-shark-skin;\n\n  @extend %color-sequence-1;\n  @extend %color-sequence-2;\n  @extend %color-sequence-3;\n  @extend %color-sequence-4;\n\n  @extend %color-viz-aqua;\n  @extend %color-viz-purple;\n  @extend %color-viz-lime;\n  @extend %color-viz-ocean;\n  @extend %color-viz-orange;\n  @extend %color-viz-blue;\n  @extend %color-viz-yellow;\n  </code>\n</pre>\n\n\n<a id=\"type-samples\"></a>\n<h5 class=\"_mtxl\">Style Samples</h5>\n<div>\n\n  <div class=\"_ptl _pbl\">\n    <h1 class=\"color-mid-gray u-type-xl _m0 _p\">Page Title</h1>\n  </div>\n\n  <div class=\"_pbl\">\n    <h5 class=\"color-purple u-bold u-type-l _m0 _p\">123,456,789</h5>\n    <h6 class=\"color-mid-gray u-uppercase u-bold u-type-xs _m0 _p0\">total available audience</h6>\n\n    <h5 class=\"color-purple u-bold u-type-l _m0 _p0 _mts\">123,456,789 | 100%</h5>\n    <h6 class=\"color-mid-gray u-uppercase u-bold u-type-xs _m0 _p0\">estimated total available audience</h6>\n  </div>\n\n  <div class=\"_pbl\">\n    <span class=\"u-uppercase color-purple u-type-s u-bold\">Definition</span>\n    <span class=\"u-parens u-type-s color-mid-gray\">Males 25&ndash;49 OR Females 25&ndash;49</span>\n  </div>\n\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Page Title Styles -->\n  {{'&lt;'}}h1 class=\"color-mid-gray u-type-xl _m0 _p0\">Page Title{{'&lt;'}}/h1>\n\n  {{'&lt;'}}!-- Numbers / Audience -->\n  {{'&lt;'}}h5 class=\"color-purple u-bold u-type-l _m0 _p0\">123,456,789{{'&lt;'}}/h5>\n  {{'&lt;'}}h6 class=\"color-mid-gray u-uppercase u-bold u-type-xs _m0 _p0\">total available audience{{'&lt;'}}/h6>\n\n  {{'&lt;'}}h5 class=\"color-purple u-bold u-type-l _m0 _p0 _mts\">123,456,789 | 100%{{'&lt;'}}/h5>\n  {{'&lt;'}}h6 class=\"color-mid-gray u-uppercase u-bold u-type-xs _m0 _p0\">estimated total available audience{{'&lt;'}}/h6>\n\n  {{'&lt;'}}!-- Defintion -->\n  {{'&lt;'}}span class=\"u-uppercase color-purple u-type-s u-bold\">Definition{{'&lt;'}}/span>\n  {{'&lt;'}}span class=\"u-parens u-type-s color-mid-gray\">Males 25&ndash;49 OR Females 25&ndash;49{{'&lt;'}}/span>\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/typography-section/typography-section.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/typography-section/typography-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographySectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypographySectionComponent = (function (_super) {
    __extends(TypographySectionComponent, _super);
    function TypographySectionComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return TypographySectionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
TypographySectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-typography-section',
        template: __webpack_require__("../../../../../src/docs/app/sections/typography-section/typography-section.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/typography-section/typography-section.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], TypographySectionComponent);

var _a;
//# sourceMappingURL=typography-section.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/utilities/borders/borders.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Borders</h1>\n\n<a id=\"borders-adding\"></a>\n<h5 class=\"_mtxl\">Applying Borders 1px borders</h5>\n<div class=\"flex\">\n  <div class=\"_bt1 _mts _mrs _mbs _mls\">Top Border</div>\n  <div class=\"_br1 _mts _mrs _mbs _mls\">Right Border</div>\n  <div class=\"_bb1 _mts _mrs _mbs _mls\">Bottom Border</div>\n  <div class=\"_bl1 _mts _mrs _mbs _mls\">Left Border</div>\n  <div class=\"_b1 _mts _mrs _mbs _mls\">Border All</div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- 1px borders -->\n  {{'&lt;'}}div class=\"_bt1\">Top Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_br1\">Right Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bb1\">Bottom Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bl1\">Left Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b1\">Border All{{'&lt;'}}/div>\n\n  {{'&lt;'}}!-- 2px borders -->\n  {{'&lt;'}}div class=\"_bt2\">Top Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_br2\">Right Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bb2\">Bottom Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bl2\">Left Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b2\">Border All{{'&lt;'}}/div>\n\n  {{'&lt;'}}!-- 3px borders -->\n  {{'&lt;'}}div class=\"_bt3\">Top Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_br3\">Right Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bb3\">Bottom Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bl3\">Left Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b3\">Border All{{'&lt;'}}/div>\n\n  {{'&lt;'}}!-- 4px borders -->\n  {{'&lt;'}}div class=\"_bt4\">Top Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_br4\">Right Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bb4\">Bottom Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bl4\">Left Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b4\">Border All{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"borders-clearing\"></a>\n<h5 class=\"_mtxl\">Clearing Borders</h5>\n<div class=\"flex\">\n  <div class=\"_b1 _bt0 _mts _mrs _mbs _mls\">Remove Top Border</div>\n  <div class=\"_b1 _br0 _mts _mrs _mbs _mls\">Remove Right Border</div>\n  <div class=\"_b1 _bb0 _mts _mrs _mbs _mls\">Remove Bottom Border</div>\n  <div class=\"_b1 _bl0 _mts _mrs _mbs _mls\">Remove Left Border</div>\n  <div class=\"_b1 _b0 _mts _mrs _mbs _mls\">Remove All</div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- removing borders -->\n  {{'&lt;'}}div class=\"_b1 _bt0\">Remove Top Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b1 _br0\">Remove Right Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b1 _bb0\">Remove Bottom Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b1 _bl0\">Remove Left Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b1 _b0\">Remove All{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"borders-placeholders\"></a>\n<h5 class=\"_mtxl\">Border Placeholders</h5>\n<p>This will add border styles to any class you use it on.<br/> \nBorder placehoders are a Utility, add it to your SCSS file from here:</p>\n<pre class=\"code-block\">\n  <code class=\"language-css\">\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_borders.scss\";\n  </code>\n</pre>\n<pre>\n  <code class=\"language-css\">\n  // use the @extend directive, placholders start with '%', not a '.'\n  \n  @extend %_b0;  // border: none !important;\n  @extend %_bt0; // border-top: none !important;\n  @extend %_br0; // border-right: none !important;\n  @extend %_bb0; // border-bottom: none !important;\n  @extend %_bl0; // border-left: none !important;\n  \n  @extend %_b1;  // border: 1px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bt1; // border-top: 1px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_br1; // border-right: 1px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bb1; // border-bottom: 1px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bl1; // border-left: 1px solid {{'&lt;'}}color: $active-stroke>;\n  \n  @extend %_b2;  // border: 2px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bt2; // border-top: 2px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_br2; // border-right: 2px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bb2; // border-bottom: 2px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bl2; // border-left: 2px solid {{'&lt;'}}color: $active-stroke>;\n  \n  @extend %_b3;  // border: 3px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bt3; // border-top: 3px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_br3; // border-right: 3px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bb3; // border-bottom: 3px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bl3; // border-left: 3px solid {{'&lt;'}}color: $active-stroke>;\n  \n  @extend %_b4;  // border: 4px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bt4; // border-top: 4px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_br4; // border-right: 4px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bb4; // border-bottom: 4px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bl4; // border-left: 4px solid {{'&lt;'}}color: $active-stroke>;\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/utilities/borders/borders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Design Reference:\n * https://cacoo.com/diagrams/88x93Ppap4rtGUhs#5F65C\n */\n/**\n * Collection of the colors\n */\n.fake-block-all {\n  border: 1px solid #c2cdd8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/utilities/borders/borders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BordersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BordersComponent = (function (_super) {
    __extends(BordersComponent, _super);
    function BordersComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return BordersComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
BordersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-borders',
        template: __webpack_require__("../../../../../src/docs/app/sections/utilities/borders/borders.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/utilities/borders/borders.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], BordersComponent);

var _a;
//# sourceMappingURL=borders.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/utilities/flex-box/flex-box.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Flex Box</h1>\n\n<a id=\"flexbox-flex\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Row</span></h5>\n<div>\n  <div class=\"flex\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"flexbox-flex-column\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Column</span></h5>\n<div>\n  <div class=\"flex flex-column\">\n    <div class=\"_b1 _mbxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mbxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _plxs _prxs\">Block 3</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex flex-column\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"flexbox-flex-wrap\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Wrap</span></h5>\n<div class=\"wrap-sample\">\n  <div class=\"flex flex-wrap\">\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 3</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 4</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 5</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 6</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- in this example each cell has a width of 200px -->  \n  {{'&lt;'}}div class=\"flex flex-wrap\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 4{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 5{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 6{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"flexbox-flex-fill-width\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Fill Width</span></h5>\n<div>\n  <div class=\"flex\">\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 1</div>\n    <div class=\"flex-auto _b1 _mrxs _mbxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"flex\">\n    <div class=\"flex-auto _b1 _mrxs _mbxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 3</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Make the center div fill -->\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"flex-auto\">Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n\n  {{'&lt;'}}!-- Make the left div fill -->\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div class=\"flex-auto\">Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"flexbox-flex-horiz-align\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Horizontal Justification</span></h5>\n<div>\n  <div class=\"_mbs flex justify-start\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"_bt1 _mbs _pts flex justify-center\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"_bt1 _mbs _pts flex justify-end\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"_bt1 _mbs _pts flex justify-between\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"_bt1 _mbs _pts flex justify-around\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex justify-start\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex justify-center\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex justify-end\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex justify-between\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex justify-around\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"flexbox-flex-vert-align\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Vertical Justification</span></h5>\n<div class=\"flex\">\n  <div class=\"column-sample _mls _mbs flex-auto flex flex-column justify-start\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"column-sample _mls _mbs flex-auto flex flex-column justify-center\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"column-sample _mls _mbs flex-auto flex flex-column justify-end\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"column-sample _mls _mbs flex-auto flex flex-column justify-between\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"column-sample _mbs flex-auto flex flex-column justify-around\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex flex-column justify-start\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex flex-column justify-center\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex flex-column justify-end\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex flex-column justify-between\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex flex-column justify-around\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"flexbox-align-items\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Align Items</span></h5>\n<div class=\"flex\" style=\"height: 100px;\">\n  <div class=\"flex-1 flex items-start\">\n    <div class=\"_b1 _pxs\">items-start</div>\n  </div>\n  <div class=\"flex-1 flex items-end\">\n    <div class=\"_b1 _pxs\">items-end</div>\n  </div>\n  <div class=\"flex-1 flex items-center\">\n    <div class=\"_b1 _pxs\">items-center</div>\n  </div>\n  <div class=\"flex-1 flex items-baseline\">\n    <div class=\"_b1 _pxs\">items-baseline</div>\n  </div>\n  <div class=\"flex-1 flex items-stretch\">\n    <div class=\"_b1 _pxs\">items-stretch</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex items-start\">\n    {{'&lt;'}}div>items-start{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex items-end\">\n    {{'&lt;'}}div>items-end{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex items-center\">\n    {{'&lt;'}}div>items-center{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex items-baseline\">\n    {{'&lt;'}}div>items-baseline{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex items-stretch\">\n    {{'&lt;'}}div>items-stretch{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"flexbox-self-align\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Self Align</span></h5>\n<div class=\"flex\" style=\"height: 100px;\">\n  <div class=\"flex-1 flex\">\n    <div class=\"_b1 _pxs self-start\">self-start</div>\n  </div>\n  <div class=\"flex-1 flex\">\n    <div class=\"_b1 _pxs self-end\">self-end</div>\n  </div>\n  <div class=\"flex-1 flex\">\n    <div class=\"_b1 _pxs self-center\">self-center</div>\n  </div>\n  <div class=\"flex-1 flex\">\n    <div class=\"_b1 _pxs self-baseline\">self-baseline</div>\n  </div>\n  <div class=\"flex-1 flex\">\n    <div class=\"_b1 _pxs self-stretch\">self-stretch</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div class=\"self-start\">self-start{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div class=\"self-end\">self-end{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div class=\"self-center\">self-center{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div class=\"self-baseline\">self-baseline{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div class=\"self-stretch\">self-stretch{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"flexbox-flex-sizes\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Flex Cell Sizes</span></h5>\n<div>\n  <div class=\"flex _mbs\">\n    <div class=\"flex-1 _b1 _mrxs _plxs _prxs\">Block 1 (flex-1)</div>\n    <div class=\"flex-8 _b1 _mrxs _plxs _prxs\">Block 2 (flex-8)</div>\n    <div class=\"flex-2 _b1 _mrxs _plxs _prxs\">Block 3 (flex-2)</div>\n  </div>\n  <div class=\"flex\">\n    <div class=\"flex-2 _b1 _mrxs _plxs _prxs\">Block 1 (flex-2)</div>\n    <div class=\"flex-auto _b1 _mrxs _plxs _prxs\">Block 2 (flex-auto)</div>\n    <div class=\"flex-2 _b1 _mrxs _plxs _prxs\">Block 3 (flex-2)</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- We have flex-1 through flex-50 for fine grain control -->\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div class=\"flex-1\">Block 1 (flex-1){{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"flex-8\">Block 2 (flex-8){{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"flex-2\">Block 3 (flex-2){{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n\n  {{'&lt;'}}!-- You can use flex-auto in combination -->\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div class=\"flex-2\">Block 1 (flex-2){{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"flex-auto\">Block 2 (flex-auto){{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"flex-2\">Block 3 (flex-2){{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/utilities/flex-box/flex-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap-sample .flex > div {\n  width: 200px; }\n\n.column-sample {\n  height: 180px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/utilities/flex-box/flex-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlexBoxComponent = (function (_super) {
    __extends(FlexBoxComponent, _super);
    function FlexBoxComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return FlexBoxComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
FlexBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-flex-box',
        template: __webpack_require__("../../../../../src/docs/app/sections/utilities/flex-box/flex-box.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/utilities/flex-box/flex-box.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], FlexBoxComponent);

var _a;
//# sourceMappingURL=flex-box.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/utilities/spacing/spacing.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Spacing</h1>\n\n<a id=\"spacing-margin-xs\"></a>\n<h5 class=\"_mtxl\">Margin &ndash; Extra Small <span class=\"size-xs\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mlxs\">&nbsp;</span>\n  </span>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_mxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mtxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mrxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mbxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mlxs\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-margin-s\"></a>\n<h5 class=\"_mtxl\">Margin &ndash; Small <span class=\"size-s\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_ms\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mts\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mls\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_ms\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mts\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mrs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mbs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mls\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-margin-m\"></a>\n<h5 class=\"_mtxl\">Margin &ndash; Medium <span class=\"size-m\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mlm\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_mm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mtm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mrm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mbm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mlm\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-margin-l\"></a>\n<h5 class=\"_mtxl\">Margin &ndash; Large <span class=\"size-l\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_ml\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mll\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_ml\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mtl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mrl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mbl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mll\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-margin-xl\"></a>\n<h5 class=\"_mtxl\">Margin &ndash; Extra Large <span class=\"size-xl\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mlxl\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_mxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mtxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mrxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mbxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mlxl\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-margin-placeholders\"></a>\n<h5 class=\"_mtxl\">Margin SCSS Place Holders</h5>\n<p>This will add a margin style to any class you use it on.<br/>\nSpacing placehoders are a Utility, add it to your SCSS file from here:</p>\n<pre class=\"code-block\">\n  <code class=\"language-css\">\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_spacing.scss\";\n  </code>\n</pre>\n<pre>\n  <code class=\"language-css\">\n  // use the @extend directive, placholders start with '%', not a '.'\n\n  @extend %_mxs;  // margin: ...px;\n  @extend %_mtxs; // margin-top: ...px;\n  @extend %_mrxs; // margin-right: ...px;\n  @extend %_mbxs; // margin-bottom: ...px;\n  @extend %_mlxs; // margin-left: ...px;\n\n  @extend %_ms;  // margin: ...px;\n  @extend %_mts; // margin-top: ...px;\n  @extend %_mrs; // margin-right: ...px;\n  @extend %_mbs; // margin-bottom: ...px;\n  @extend %_mls; // margin-left: ...px;\n\n  @extend %_mm;  // margin: ...px;\n  @extend %_mtm; // margin-top: ...px;\n  @extend %_mrm; // margin-right: ...px;\n  @extend %_mbm; // margin-bottom: ...px;\n  @extend %_mlm; // margin-left: ...px;\n\n  @extend %_ml;  // margin: ...px;\n  @extend %_mtl; // margin-top: ...px;\n  @extend %_mrl; // margin-right: ...px;\n  @extend %_mbl; // margin-bottom: ...px;\n  @extend %_mll; // margin-left: ...px;\n\n  @extend %_mxl;  // margin: ...px;\n  @extend %_mtxl; // margin-top: ...px;\n  @extend %_mrxl; // margin-right: ...px;\n  @extend %_mbxl; // margin-bottom: ...px;\n  @extend %_mlxl; // margin-left: ...px;\n  </code>\n</pre>\n\n\n\n\n\n\n\n\n<a id=\"spacing-padding-xs\"></a>\n<h5 class=\"_mtxl\">Padding &ndash; Extra Small <span class=\"size-xs\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mlxs\">&nbsp;</span>\n  </span>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_pxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_ptxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_prxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pbxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_plxs\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-padding-s\"></a>\n<h5 class=\"_mtxl\">Padding &ndash; Small <span class=\"size-s\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_ms\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mts\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mls\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_ps\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pts\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_prs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pbs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pls\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-padding-m\"></a>\n<h5 class=\"_mtxl\">Padding &ndash; Medium <span class=\"size-m\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mlm\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_pm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_ptm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_prm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pbm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_plm\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-padding-l\"></a>\n<h5 class=\"_mtxl\">Padding &ndash; Large <span class=\"size-l\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_ml\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mll\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_pl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_ptl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_prl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pbl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pll\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-padding-xl\"></a>\n<h5 class=\"_mtxl\">Padding &ndash; Extra Large <span class=\"size-xl\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mlxl\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_pxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_ptxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_prxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pbxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_plxl\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-padding-placeholders\"></a>\n<h5 class=\"_mtxl\">Padding SCSS Place Holders</h5>\n<p>This will add a padding style to any class you use it on.<br/> \nSpacing placehoders are a Utility, add it to your SCSS file from here:</p>\n<pre class=\"code-block\">\n  <code class=\"language-css\">\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_spacing.scss\";\n  </code>\n</pre>\n<pre>\n  <code class=\"language-css\">\n  // use the @extend directive, placholders start with '%', not a '.'\n  \n  @extend %_pxs;  // padding: ...px;\n  @extend %_ptxs; // padding-top: ...px;\n  @extend %_prxs; // padding-right: ...px;\n  @extend %_pbxs; // padding-bottom: ...px;\n  @extend %_plxs; // padding-left: ...px;\n\n  @extend %_ps;  // padding: ...px;\n  @extend %_pts; // padding-top: ...px;\n  @extend %_prs; // padding-right: ...px;\n  @extend %_pbs; // padding-bottom: ...px;\n  @extend %_pls; // padding-left: ...px;\n\n  @extend %_pm;  // padding: ...px;\n  @extend %_ptm; // padding-top: ...px;\n  @extend %_prm; // padding-right: ...px;\n  @extend %_pbm; // padding-bottom: ...px;\n  @extend %_plm; // padding-left: ...px;\n\n  @extend %_pl;  // padding: ...px;\n  @extend %_ptl; // padding-top: ...px;\n  @extend %_prl; // padding-right: ...px;\n  @extend %_pbl; // padding-bottom: ...px;\n  @extend %_pll; // padding-left: ...px;\n\n  @extend %_pxl;  // padding: ...px;\n  @extend %_ptxl; // padding-top: ...px;\n  @extend %_prxl; // padding-right: ...px;\n  @extend %_pbxl; // padding-bottom: ...px;\n  @extend %_plxl; // padding-left: ...px;\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/utilities/spacing/spacing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Design Reference:\n * https://cacoo.com/diagrams/88x93Ppap4rtGUhs#5F65C\n */\n/**\n * Collection of the colors\n */\n.outer-wrapper {\n  margin: 0 48px 0 0;\n  height: 100%;\n  display: inline-block;\n  border: 1px dashed gray; }\n  .outer-wrapper > span {\n    width: 30px;\n    height: 30px;\n    background: red;\n    display: inline-block; }\n\nspan.size-xs:after {\n  content: \" (5px)\"; }\n\nspan.size-s:after {\n  content: \" (10px)\"; }\n\nspan.size-m:after {\n  content: \" (15px)\"; }\n\nspan.size-l:after {\n  content: \" (20px)\"; }\n\nspan.size-xl:after {\n  content: \" (30px)\"; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/utilities/spacing/spacing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpacingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpacingComponent = (function (_super) {
    __extends(SpacingComponent, _super);
    function SpacingComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return SpacingComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
SpacingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-spacing',
        template: __webpack_require__("../../../../../src/docs/app/sections/utilities/spacing/spacing.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/utilities/spacing/spacing.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], SpacingComponent);

var _a;
//# sourceMappingURL=spacing.component.js.map

/***/ }),

/***/ "../../../../../src/docs/app/sections/utilities/z-index/z-index.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Z-Indexes</h1>\n\n<h5 class=\"_mtxl\">Variables</h5>\n<p>Z-Index variables are a Utility, add it to your SCSS file from here:</p>\n<pre class=\"code-block\">\n  <code class=\"language-css\">\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_z-indexes.scss\";\n  </code>\n</pre>\n<pre class=\"code-block\">\n  <code class=\"language-css\">\n  $z-index-auto:                         auto;\n  $z-index-default:                      auto;\n\n\n  // ------ Regular Levels ----------------------------------\n\n  // Regular z-index levels (range 1,000 - 20,000)\n  // This list must be frozen and can never be added to.\n  $z-index-level-1:                      1000;\n  $z-index-level-2:                      2000;\n  $z-index-level-3:                      3000;\n  $z-index-level-4:                      4000;\n  $z-index-level-5:                      5000;\n  $z-index-level-6:                      6000;\n  $z-index-level-7:                      7000;\n  $z-index-level-8:                      8000;\n  $z-index-level-9:                      9000;\n  $z-index-level-10:                    10000;\n  $z-index-level-11:                    11000;\n  $z-index-level-12:                    12000;\n  $z-index-level-13:                    13000;\n  $z-index-level-14:                    14000;\n  $z-index-level-15:                    15000;\n  $z-index-level-16:                    16000;\n  $z-index-level-17:                    17000;\n  $z-index-level-18:                    18000;\n  $z-index-level-19:                    19000;\n  $z-index-level-20:                    20000;\n\n  $z-index-level-lowest:     $z-index-level-1;\n  $z-index-level-highest:   $z-index-level-20;\n\n\n  // ------ Meta Levels -------------------------------------\n\n  // \"Meta\" z-index levels, for elements of a qualitatively\n  // higher layer, eg: modal, popover, dropdown menu.\n  // (range 100,000 - 1,000,000)\n  // This list must be frozen and can never be added to.\n  $z-index-meta-1:                     100000;\n  $z-index-meta-2:                     200000;\n  $z-index-meta-3:                     300000;\n  $z-index-meta-4:                     400000;\n  $z-index-meta-5:                     500000;\n  $z-index-meta-6:                     600000;\n  $z-index-meta-7:                     700000;\n  $z-index-meta-8:                     800000;\n  $z-index-meta-9:                     900000;\n  $z-index-meta-10:                   1000000;\n\n  $z-index-meta-lowest:       $z-index-meta-1;\n  $z-index-meta-higest:      $z-index-meta-10;\n\n  // Semantic names\n  // Unlike regular z-index levels (and colors) semantic\n  // names for meta elements must be defined at the\n  // highest level, not per component but across all.\n  $z-index-dropdown-backdrop: $z-index-meta-1;\n  $z-index-navbar:            $z-index-meta-2;\n  $z-index-dropdown:          $z-index-meta-2;\n  $z-index-navbar-fixed:      $z-index-meta-4;\n  $z-index-navbar-sticky:     $z-index-meta-4;\n  $z-index-modal-backdrop:    $z-index-meta-6;\n  $z-index-modal:             $z-index-meta-7;\n  $z-index-popover:           $z-index-meta-8;\n  $z-index-tooltip:           $z-index-meta-9;\n\n\n  // ------ Absolutes ---------------------------------------\n\n  // Absoultes (do not use these; included for debugging)\n  $z-index-absolute-minimum:      −2147483648;\n  $z-index-absoulte-maximum:       2147483647;\n  </code>\n</pre>\n"

/***/ }),

/***/ "../../../../../src/docs/app/sections/utilities/z-index/z-index.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/docs/app/sections/utilities/z-index/z-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__("../../../../../src/docs/app/sections/section.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ZIndexComponent = (function (_super) {
    __extends(ZIndexComponent, _super);
    function ZIndexComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.route = route;
        return _this;
    }
    return ZIndexComponent;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
ZIndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs-z-index',
        template: __webpack_require__("../../../../../src/docs/app/sections/utilities/z-index/z-index.component.html"),
        styles: [__webpack_require__("../../../../../src/docs/app/sections/utilities/z-index/z-index.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ZIndexComponent);

var _a;
//# sourceMappingURL=z-index.component.js.map

/***/ }),

/***/ "../../../../../src/docs/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/docs/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/docs/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/docs/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/docs/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map