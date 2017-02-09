webpackJsonp([1,5],{

/***/ 1050:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(453);


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractSectionComponent; });

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
        Array.from(document.querySelectorAll('[class*="language-"]'))
            .forEach(function (el) {
            Prism.highlightElement(el, false);
        });
        // perform any anchor tag activities needed...
        if (this.route) {
            this.addSubscription = this.route.fragment
                .subscribe(function (fragment) {
                var element = document.querySelector("#" + fragment);
                if (element)
                    element.scrollIntoView(element);
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
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/section.abstract.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _super.call(this, route);
        this.route = route;
    }
    ButtonsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-buttons',
            template: __webpack_require__(761),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], ButtonsComponent);
    return ButtonsComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/buttons.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxesComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _super.call(this, route);
        this.route = route;
    }
    CheckboxesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-checkboxes',
            template: __webpack_require__(762),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], CheckboxesComponent);
    return CheckboxesComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/checkboxes.component.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorsSectionComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _super.call(this, route);
        this.route = route;
    }
    ColorsSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-colors-section',
            template: __webpack_require__(763),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], ColorsSectionComponent);
    return ColorsSectionComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/colors-section.component.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownsComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _super.call(this, route);
        this.route = route;
        // public members
        this.dropdownModel = [];
        this.dropdownSelectionText = '';
        // private members
        this.dropdown$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["ReplaySubject"](1);
        // init the model
        this.dropdown$.next([
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
                _this.dropdownSelectionText = "Select Categories";
            }
            else if (model.filter(function (item) { return item.selected; }).length === 1) {
                _this.dropdownSelectionText = "1 Category Selected";
            }
            else if (model.filter(function (item) { return item.selected; }).length === model.length) {
                _this.dropdownSelectionText = "All Categories Selected";
            }
            else {
                _this.dropdownSelectionText = model.filter(function (item) { return item.selected; }).length + " Categories Selected";
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
            return state.slice(0)
                .map(function (item) {
                if (item.id === id) {
                    return Object.assign({}, item, { selected: !item.selected });
                }
                return item;
            })
                .reduce(function (items, item, index, orig_collection) {
                if (item.type === 'all') {
                    var all_items = orig_collection.slice(1).every(function (item) { return item.selected; }), some_items = orig_collection.slice(1).some(function (item) { return item.selected; });
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
            return state.slice(0)
                .map(function (item) {
                if (item.type === 'all') {
                    return Object.assign({}, item, { selected: selected, partial: false });
                }
                else {
                    return Object.assign({}, item, { selected: selected });
                }
            });
        }
    };
    DropdownsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-dropdowns',
            template: __webpack_require__(764),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], DropdownsComponent);
    return DropdownsComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/dropdowns.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSectionComponent; });
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
    HomeSectionComponent.prototype.ngOnInit = function () {
    };
    HomeSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-home-section',
            template: __webpack_require__(765),
            styles: [__webpack_require__(743)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeSectionComponent);
    return HomeSectionComponent;
}());
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/home-section.component.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _super.call(this, route);
        this.route = route;
    }
    IconsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-icons',
            template: __webpack_require__(766),
            styles: [__webpack_require__(744)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], IconsComponent);
    return IconsComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/icons.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InlineDialogSectionComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _super.call(this, route);
        this.route = route;
    }
    InlineDialogSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-inline-dialog',
            template: __webpack_require__(767),
            styles: [__webpack_require__(745)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], InlineDialogSectionComponent);
    return InlineDialogSectionComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/inline-dialog.component.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalSectionComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _super.call(this, route);
        this.route = route;
    }
    ModalSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-modal-section',
            template: __webpack_require__(768),
            styles: [__webpack_require__(746)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], ModalSectionComponent);
    return ModalSectionComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/modal-section.component.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _super.call(this, route);
        this.route = route;
    }
    TooltipComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-tooltip',
            template: __webpack_require__(769),
            styles: [__webpack_require__(747)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], TooltipComponent);
    return TooltipComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/tooltip.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographySectionComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _super.call(this, route);
        this.route = route;
    }
    TypographySectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-typography-section',
            template: __webpack_require__(770),
            styles: [__webpack_require__(748)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], TypographySectionComponent);
    return TypographySectionComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/typography-section.component.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BordersComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _super.call(this, route);
        this.route = route;
    }
    BordersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-borders',
            template: __webpack_require__(771),
            styles: [__webpack_require__(749)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], BordersComponent);
    return BordersComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/borders.component.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexBoxComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _super.call(this, route);
        this.route = route;
    }
    FlexBoxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-flex-box',
            template: __webpack_require__(772),
            styles: [__webpack_require__(750)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], FlexBoxComponent);
    return FlexBoxComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/flex-box.component.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpacingComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _super.call(this, route);
        this.route = route;
    }
    SpacingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-spacing',
            template: __webpack_require__(773),
            styles: [__webpack_require__(751)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], SpacingComponent);
    return SpacingComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/spacing.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_abstract__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZIndexComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _super.call(this, route);
        this.route = route;
    }
    ZIndexComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-z-index',
            template: __webpack_require__(774),
            styles: [__webpack_require__(752)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], ZIndexComponent);
    return ZIndexComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__section_abstract__["a" /* AbstractSectionComponent */]));
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/z-index.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 452;


/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(577);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/main.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sections_home_section_home_section_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sections_colors_section_colors_section_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sections_buttons_buttons_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sections_dropdowns_dropdowns_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sections_icons_icons_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sections_checkboxes_checkboxes_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sections_utilities_borders_borders_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sections_utilities_spacing_spacing_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sections_utilities_z_index_z_index_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sections_utilities_flex_box_flex_box_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sections_tooltip_tooltip_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sections_inline_dialog_inline_dialog_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sections_typography_section_typography_section_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sections_modal_section_modal_section_component__ = __webpack_require__(374);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var routes = [
    // main/home page
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__sections_home_section_home_section_component__["a" /* HomeSectionComponent */] },
    // Typography
    { path: 'section/icons', component: __WEBPACK_IMPORTED_MODULE_6__sections_icons_icons_component__["a" /* IconsComponent */] },
    { path: 'section/typography', component: __WEBPACK_IMPORTED_MODULE_14__sections_typography_section_typography_section_component__["a" /* TypographySectionComponent */] },
    // Styles / Esthetics
    { path: 'section/colors', component: __WEBPACK_IMPORTED_MODULE_3__sections_colors_section_colors_section_component__["a" /* ColorsSectionComponent */] },
    // Components
    { path: 'section/buttons', component: __WEBPACK_IMPORTED_MODULE_4__sections_buttons_buttons_component__["a" /* ButtonsComponent */] },
    { path: 'section/dropdowns', component: __WEBPACK_IMPORTED_MODULE_5__sections_dropdowns_dropdowns_component__["a" /* DropdownsComponent */] },
    { path: 'section/checkboxes', component: __WEBPACK_IMPORTED_MODULE_7__sections_checkboxes_checkboxes_component__["a" /* CheckboxesComponent */] },
    { path: 'section/tooltips', component: __WEBPACK_IMPORTED_MODULE_12__sections_tooltip_tooltip_component__["a" /* TooltipComponent */] },
    { path: 'section/inline-dialogs', component: __WEBPACK_IMPORTED_MODULE_13__sections_inline_dialog_inline_dialog_component__["a" /* InlineDialogSectionComponent */] },
    { path: 'section/modal', component: __WEBPACK_IMPORTED_MODULE_15__sections_modal_section_modal_section_component__["a" /* ModalSectionComponent */] },
    // Utilities
    { path: 'section/utilities/borders', component: __WEBPACK_IMPORTED_MODULE_8__sections_utilities_borders_borders_component__["a" /* BordersComponent */] },
    { path: 'section/utilities/spacing', component: __WEBPACK_IMPORTED_MODULE_9__sections_utilities_spacing_spacing_component__["a" /* SpacingComponent */] },
    { path: 'section/utilities/z-indexes', component: __WEBPACK_IMPORTED_MODULE_10__sections_utilities_z_index_z_index_component__["a" /* ZIndexComponent */] },
    { path: 'section/utilities/flexbox', component: __WEBPACK_IMPORTED_MODULE_11__sections_utilities_flex_box_flex_box_component__["a" /* FlexBoxComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/app-routing.module.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.listenToModal = function (event) {
        console.log(event);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-root',
            template: __webpack_require__(759),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/app.component.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_menu_main_menu_component__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sections_colors_section_colors_section_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sections_home_section_home_section_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sections_buttons_buttons_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sections_dropdowns_dropdowns_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sections_icons_icons_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sections_checkboxes_checkboxes_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sections_utilities_borders_borders_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sections_utilities_spacing_spacing_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sections_utilities_z_index_z_index_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sections_utilities_flex_box_flex_box_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_suprematism_popover__ = __webpack_require__(1043);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_suprematism_modal__ = __webpack_require__(1039);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sections_tooltip_tooltip_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sections_inline_dialog_inline_dialog_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sections_typography_section_typography_section_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sections_modal_section_modal_section_component__ = __webpack_require__(374);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
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
                __WEBPACK_IMPORTED_MODULE_19__sections_tooltip_tooltip_component__["a" /* TooltipComponent */],
                __WEBPACK_IMPORTED_MODULE_20__sections_inline_dialog_inline_dialog_component__["a" /* InlineDialogSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_21__sections_typography_section_typography_section_component__["a" /* TypographySectionComponent */],
                __WEBPACK_IMPORTED_MODULE_22__sections_modal_section_modal_section_component__["a" /* ModalSectionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_17_suprematism_popover__["a" /* PopoverModule */],
                __WEBPACK_IMPORTED_MODULE_18_suprematism_modal__["a" /* ModalModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/app.module.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
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
            .subscribe(function (url) { return _this.setUrl = url; });
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
    MainMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'docs-main-menu',
            template: __webpack_require__(760),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object])
    ], MainMenuComponent);
    return MainMenuComponent;
    var _a;
}());
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/main-menu.component.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-style-guide/docs-src/src/environment.js.map

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "[grid-wrapper] {\n  height: 100%;\n  overflow-x: hidden; }\n\n[grid] {\n  height: 100%; }\n  [grid] [column='6'] {\n    background: lightgrey;\n    box-shadow: -4px 0px 42px -10px black inset;\n    height: 100%;\n    overflow-y: scroll;\n    min-width: 360px; }\n  [grid] [column='20'] {\n    overflow-y: scroll; }\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inherit;\n  font-size: 0.8rem; }\n\nul li {\n  list-style-type: none;\n  color: darkgray; }\n  ul li a {\n    color: black; }\n    ul li a:hover {\n      color: red; }\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "/**\n * Design Reference:\n * https://cacoo.com/diagrams/88x93Ppap4rtGUhs#5F65C\n */\n/**\n * Collection of the colors\n */\n/**\n * Helper classes for colors\n */\n:host #colors .color-block-ice {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #e8ecf0; }\n  :host #colors .color-block-ice .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-ice .title:after {\n    content: \"$ice\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-ice .hex:after {\n    content: \"#e8ecf0\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-off-white {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #f6f6f6; }\n  :host #colors .color-block-off-white .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-off-white .title:after {\n    content: \"$off-white\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-off-white .hex:after {\n    content: \"#f6f6f6\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-gray {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #d5d8dd; }\n  :host #colors .color-block-gray .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-gray .title:after {\n    content: \"$gray\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-gray .hex:after {\n    content: \"#d5d8dd\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-lemon {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #ffd966; }\n  :host #colors .color-block-lemon .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-lemon .title:after {\n    content: \"$lemon\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-lemon .hex:after {\n    content: \"#ffd966\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-blue-gray {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #9fb3c3; }\n  :host #colors .color-block-blue-gray .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-blue-gray .title:after {\n    content: \"$blue-gray\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-blue-gray .hex:after {\n    content: \"#9fb3c3\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-aqua {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #55a0c2; }\n  :host #colors .color-block-aqua .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-aqua .title:after {\n    content: \"$aqua\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-aqua .hex:after {\n    content: \"#55a0c2\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-purple {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #6460aa; }\n  :host #colors .color-block-purple .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-purple .title:after {\n    content: \"$purple\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-purple .hex:after {\n    content: \"#6460aa\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-mid-gray {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #7f8a93; }\n  :host #colors .color-block-mid-gray .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-mid-gray .title:after {\n    content: \"$mid-gray\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-mid-gray .hex:after {\n    content: \"#7f8a93\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-blue {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #0082a9; }\n  :host #colors .color-block-blue .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-blue .title:after {\n    content: \"$blue\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-blue .hex:after {\n    content: \"#0082a9\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-green {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #7f982f; }\n  :host #colors .color-block-green .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-green .title:after {\n    content: \"$green\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-green .hex:after {\n    content: \"#7f982f\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-lite-green {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #a8c839; }\n  :host #colors .color-block-lite-green .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-lite-green .title:after {\n    content: \"$lite-green\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-lite-green .hex:after {\n    content: \"#a8c839\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-white {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #ffffff; }\n  :host #colors .color-block-white .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-white .title:after {\n    content: \"$white\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-white .hex:after {\n    content: \"#ffffff\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-black {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #000000; }\n  :host #colors .color-block-black .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-black .title:after {\n    content: \"$black\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-black .hex:after {\n    content: \"#000000\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-lite-gray {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #cccccc; }\n  :host #colors .color-block-lite-gray .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-lite-gray .title:after {\n    content: \"$lite-gray\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-lite-gray .hex:after {\n    content: \"#cccccc\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-active-stroke {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #c2cdd8; }\n  :host #colors .color-block-active-stroke .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-active-stroke .title:after {\n    content: \"$active-stroke\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-active-stroke .hex:after {\n    content: \"#c2cdd8\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-disabled-stroke {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #d5d8dd; }\n  :host #colors .color-block-disabled-stroke .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-disabled-stroke .title:after {\n    content: \"$disabled-stroke\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-disabled-stroke .hex:after {\n    content: \"#d5d8dd\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-soft-green {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #eff6e1; }\n  :host #colors .color-block-soft-green .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-soft-green .title:after {\n    content: \"$soft-green\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-soft-green .hex:after {\n    content: \"#eff6e1\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-shark-skin {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #6f7b86; }\n  :host #colors .color-block-shark-skin .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-shark-skin .title:after {\n    content: \"$shark-skin\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-shark-skin .hex:after {\n    content: \"#6f7b86\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-sequence-1 {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #e47a39; }\n  :host #colors .color-block-sequence-1 .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-sequence-1 .title:after {\n    content: \"$sequence-1\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-sequence-1 .hex:after {\n    content: \"#e47a39\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-sequence-2 {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #78b1e4; }\n  :host #colors .color-block-sequence-2 .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-sequence-2 .title:after {\n    content: \"$sequence-2\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-sequence-2 .hex:after {\n    content: \"#78b1e4\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-sequence-3 {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #67ab9f; }\n  :host #colors .color-block-sequence-3 .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-sequence-3 .title:after {\n    content: \"$sequence-3\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-sequence-3 .hex:after {\n    content: \"#67ab9f\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-sequence-4 {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #b42a40; }\n  :host #colors .color-block-sequence-4 .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-sequence-4 .title:after {\n    content: \"$sequence-4\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-sequence-4 .hex:after {\n    content: \"#b42a40\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-viz-aqua {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #32cee6; }\n  :host #colors .color-block-viz-aqua .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-viz-aqua .title:after {\n    content: \"$viz-aqua\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-viz-aqua .hex:after {\n    content: \"#32cee6\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-viz-purple {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #9b75b1; }\n  :host #colors .color-block-viz-purple .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-viz-purple .title:after {\n    content: \"$viz-purple\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-viz-purple .hex:after {\n    content: \"#9b75b1\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-viz-lime {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #a8e077; }\n  :host #colors .color-block-viz-lime .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-viz-lime .title:after {\n    content: \"$viz-lime\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-viz-lime .hex:after {\n    content: \"#a8e077\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-viz-ocean {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #37c0a7; }\n  :host #colors .color-block-viz-ocean .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-viz-ocean .title:after {\n    content: \"$viz-ocean\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-viz-ocean .hex:after {\n    content: \"#37c0a7\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-viz-orange {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #f47634; }\n  :host #colors .color-block-viz-orange .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-viz-orange .title:after {\n    content: \"$viz-orange\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-viz-orange .hex:after {\n    content: \"#f47634\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-viz-blue {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #003da0; }\n  :host #colors .color-block-viz-blue .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-viz-blue .title:after {\n    content: \"$viz-blue\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-viz-blue .hex:after {\n    content: \"#003da0\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n\n:host #colors .color-block-viz-yellow {\n  width: 124px;\n  border: 2px solid #3f3c3c;\n  margin: 12px 12px 0px 0;\n  background-color: #f7d03e; }\n  :host #colors .color-block-viz-yellow .text {\n    margin-top: 120px;\n    background-color: #3f3c3c;\n    padding: 6px; }\n  :host #colors .color-block-viz-yellow .title:after {\n    content: \"$viz-yellow\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n  :host #colors .color-block-viz-yellow .hex:after {\n    content: \"#f7d03e\";\n    font-size: 12px !important;\n    line-height: 18px !important;\n    color: white !important;\n    display: block; }\n"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "#all-icons > div {\n  min-width: 80px;\n  padding-left: 31px;\n  padding-top: 0;\n  line-height: 80px;\n  background-color: whitesmoke;\n  border-right: 2px dashed white;\n  border-bottom: 2px dashed white; }\n\n#all-icon-list > div {\n  min-width: 50%; }\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "/**\n * Design Reference:\n * https://cacoo.com/diagrams/88x93Ppap4rtGUhs#5F65C\n */\n/**\n * Collection of the colors\n */\n/**\n * Helper classes for colors\n */\n.fake-block-all {\n  border: 1px solid #c2cdd8; }\n"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = ".wrap-sample .flex > div {\n  width: 200px; }\n\n.column-sample {\n  height: 180px; }\n"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "/**\n * Design Reference:\n * https://cacoo.com/diagrams/88x93Ppap4rtGUhs#5F65C\n */\n/**\n * Collection of the colors\n */\n/**\n * Helper classes for colors\n */\n.outer-wrapper {\n  margin: 0 48px 0 0;\n  height: 100%;\n  display: inline-block;\n  border: 1px dashed gray; }\n  .outer-wrapper > span {\n    width: 30px;\n    height: 30px;\n    background: red;\n    display: inline-block; }\n\nspan.size-xs:after {\n  content: \" (5px)\"; }\n\nspan.size-s:after {\n  content: \" (10px)\"; }\n\nspan.size-m:after {\n  content: \" (15px)\"; }\n\nspan.size-l:after {\n  content: \" (20px)\"; }\n\nspan.size-xl:after {\n  content: \" (30px)\"; }\n"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

module.exports = "<div grid-wrapper>\n  <div grid=\"no-collapse row\">\n    <div column=\"6\">\n      <docs-main-menu></docs-main-menu>\n    </div>\n    <div column=\"20\" class=\"_plxl _prxl _pbxl\">\n      <router-outlet></router-outlet>\n    </div> \n  </div>\n</div>\n"

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = "<ul class=\"_ptxs\">\n  <li>\n    <h5 class=\"_mt0 _pts _pbxs\">\n      <a [routerLink]=\"['']\">Main Page</a>\n    </h5>\n  </li>\n  <li>\n    <h5 class=\"_mt0 _mb0\">Styles / Esthetics</h5>\n    <ul class=\"_mt0 _pbxs _pls\">\n      <li>\n        <a [routerLink]=\"['section/colors']\" fragment=\"top\">Colors List</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/colors'\">\n          <li><a [routerLink]=\"['section/colors']\" fragment=\"colors-list\">List of Colors</a></li>\n          <li><a [routerLink]=\"['section/colors']\" fragment=\"colors-classes\">Color Classes</a></li>\n          <li><a [routerLink]=\"['section/colors']\" fragment=\"colors-placeholders\">Color Place Holders</a></li>\n        </ul>\n      </li>\n      <li>Colors Guide</li>\n      <li>Visual Rules &amp; Considerations</li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"_mt0 _mb0 _mtm\">Typography</h5>\n    <ul class=\"_mt0 _pbxs _pls\">\n      <li>\n        <a [routerLink]=\"['section/typography']\" fragment=\"top\">Typography</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/typography'\">\n          <li><a [routerLink]=\"['section/typography']\" fragment=\"type-classes\">Classes</a></li>\n          <li><a [routerLink]=\"['section/typography']\" fragment=\"type-variables\">Size Variables</a></li>\n          <li><a [routerLink]=\"['section/typography']\" fragment=\"type-placeholders\">Placeholders</a></li>\n          <li><a [routerLink]=\"['section/typography']\" fragment=\"type-samples\">Samples</a></li>\n        </ul>\n      </li>\n      <li><a [routerLink]=\"['section/icons']\" fragment=\"top\">Icons</a></li>\n      <li>Lists</li>\n      <li>Tabular Data (Tables)</li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"_mt0 _mb0 _mtm\">Inputs</h5>\n    <ul class=\"_mt0 _pbxs _pls\">\n      <li>Text, Numbers, etc</li>\n      <li>Select</li>\n      <li>Textarea</li>\n      <li>Radio Groups</li>\n      <li>\n        <a [routerLink]=\"['section/checkboxes']\" fragment=\"top\">Checkboxes</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/checkboxes'\">\n          <li><a [routerLink]=\"['section/checkboxes']\" fragment=\"checkbox-inline-active\">Inline &amp; Active</a></li>\n          <li><a [routerLink]=\"['section/checkboxes']\" fragment=\"checkbox-stacked-active\">Stacked &amp; Active</a></li>\n          <li><a [routerLink]=\"['section/checkboxes']\" fragment=\"checkbox-stacked-active-columns\">Stacked, Multi-column, &amp; Active</a></li>\n          <li><a [routerLink]=\"['section/checkboxes']\" fragment=\"checkbox-disabled\">Disabled</a></li>\n          <li><a [routerLink]=\"['section/checkboxes']\" fragment=\"checkbox-select-all-active\">Select All &amp; Active</a></li>\n          <li><a [routerLink]=\"['section/checkboxes']\" fragment=\"checkbox-select-all-disabled\">Select All &amp; Disabled</a></li>\n        </ul>\n      </li>\n      <li>Forms</li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"_mt0 _mb0 _mtm\">Page Layouts</h5>\n    <ul class=\"_mt0 _pbxs _pls\">\n      <li>Grid System</li>\n      <li>Layouts</li>\n      <li>Breakpoints</li>\n      <li>Scrolling / Scrollbars</li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"_mt0 _mb0 _mtm\">Components</h5>\n    <ul class=\"_mt0 _pbxs _pls\">\n      <li>Data Grid</li>\n      <li>\n        <a [routerLink]=\"['section/tooltips']\" fragment=\"top\">Tooltips</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/tooltips'\">\n          <li><a [routerLink]=\"['section/tooltips']\" fragment=\"tooltips-install\">Installation</a></li>\n          <li><a [routerLink]=\"['section/tooltips']\" fragment=\"tooltips-title-only\">Title Only</a></li>\n          <li><a [routerLink]=\"['section/tooltips']\" fragment=\"tooltips-title-with-icon\">Title with Icon</a></li>\n          <li><a [routerLink]=\"['section/tooltips']\" fragment=\"tooltips-title-with-icon-and-description\">Title with a Description</a></li>\n          <li><a [routerLink]=\"['section/tooltips']\" fragment=\"tooltips-placement\">Placement</a></li>\n        </ul>\n      </li>\n      <li>\n        <a [routerLink]=\"['section/inline-dialogs']\" fragment=\"top\">Inline Dialog</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/inline-dialogs'\">\n          <li><a [routerLink]=\"['section/inline-dialogs']\" fragment=\"inline-dialog-install\">Installation</a></li>\n          <li><a [routerLink]=\"['section/inline-dialogs']\" fragment=\"inline-dialog-simple-example\">Simple Example</a></li>\n          <li><a [routerLink]=\"['section/inline-dialogs']\" fragment=\"inline-dialog-with-tooltip\">Combined with a Tooltip</a></li>\n          <li><a [routerLink]=\"['section/inline-dialogs']\" fragment=\"inline-dialog-placement\">Placement</a></li>\n        </ul>\n      </li>\n      <li>\n        <a [routerLink]=\"['section/modal']\" fragment=\"top\">Modal</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/modal'\">\n          <li><a [routerLink]=\"['section/modal']\" fragment=\"modal-install\">Installation</a></li>\n          <li><a [routerLink]=\"['section/modal']\" fragment=\"modal-simple-example\">Simple Example</a></li>\n          <li><a [routerLink]=\"['section/modal']\" fragment=\"modal-api\">API</a></li>\n        </ul>\n      </li>\n      <li>Navigation</li>\n      <li>Navigation Tiles</li>\n      <li>Dialogs / User Feedback</li>\n      <li>\n        <a [routerLink]=\"['section/dropdowns']\" fragment=\"top\">Dropdown Menus</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/dropdowns'\">\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-no-icons\">With no Icons</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-with-icons\">With Icons</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-with-width\">Apply a Width</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-with-checkboxes\">With Checkboxes</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-with-checkboxes-and-icons\">With Checkboxes &amp; Icons</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-mark-item-and-checkbox-selected\">Mark Item &amp; Checkbox Selected</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-with-select-all\">With a Select All</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-with-partial-select-all-status\">With a Select All Partially Selected</a></li>\n          <li><a [routerLink]=\"['section/dropdowns']\" fragment=\"dropdown-angular-sample\">Angular Component</a></li>\n        </ul>\n      </li>\n      <li>\n        <a [routerLink]=\"['section/buttons']\" fragment=\"top\">Buttons</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/buttons'\">\n          <li><a [routerLink]=\"['section/buttons']\" fragment=\"buttons-actions\">Action Buttons</a></li>\n          <li><a [routerLink]=\"['section/buttons']\" fragment=\"buttons-dialog-confirm\">Dialog/Confirm Buttons</a></li>\n          <li><a [routerLink]=\"['section/buttons']\" fragment=\"buttons-toolbar\">Toolbar Buttons</a></li>\n          <li><a [routerLink]=\"['section/buttons']\" fragment=\"buttons-conditions\">Condition Buttons</a></li>\n          <li><a [routerLink]=\"['section/buttons']\" fragment=\"buttons-toggle\">Toggle Buttons</a></li>\n          <li><a [routerLink]=\"['section/buttons']\" fragment=\"buttons-toggle-actions\">Toggle Action Buttons</a></li>\n          <li><a [routerLink]=\"['section/buttons']\" fragment=\"buttons-cancel\">Cancel Buttons</a></li>\n        </ul>\n      </li>\n      <li>Breadcrumbs</li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"_mt0 _mb0 _mtm\">Utilities</h5>\n    <ul class=\"_mt0 _pbxs _pls\">\n      <li><a [routerLink]=\"['section/colors']\" fragment=\"top\">Colors</a></li>\n      <li>\n        <a [routerLink]=\"['section/utilities/spacing']\" fragment=\"top\">Spacing</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/utilities/spacing'\">\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-margin-xs\">Margin 'xs' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-margin-s\">Margin 's' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-margin-m\">Margin 'm' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-margin-l\">Margin 'l' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-margin-xl\">Margin 'xl' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-margin-placeholders\">Margins SCSS Placeholders</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-padding-xs\">Padding 'xs' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-padding-s\">Padding 's' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-padding-m\">Padding 'm' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-padding-l\">Padding 'l' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-padding-xl\">Padding 'xl' Classes</a></li>\n          <li><a [routerLink]=\"['section/utilities/spacing']\" fragment=\"spacing-padding-placeholders\">Paddings SCSS Placeholders</a></li>\n        </ul>\n      </li>\n      <li>\n        <a [routerLink]=\"['section/utilities/borders']\" fragment=\"top\">Borders</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/utilities/borders'\">\n          <li><a [routerLink]=\"['section/utilities/borders']\" fragment=\"borders-adding\">Adding Borders</a></li>\n          <li><a [routerLink]=\"['section/utilities/borders']\" fragment=\"borders-clearing\">Clearing Borders</a></li>\n          <li><a [routerLink]=\"['section/utilities/borders']\" fragment=\"borders-placeholders\">Border SCSS Placeholders</a></li>\n        </ul>\n      </li>\n      <li><a [routerLink]=\"['section/utilities/z-indexes']\" fragment=\"top\">Z-Indexes</a></li>\n      <li>\n        <a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"top\">Flexbox</a>\n        <ul class=\"_mt0 _pb0 _plm\" *ngIf=\"path === 'section/utilities/flexbox'\">\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-flex\">Row Layout</a></li>\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-flex-column\">Column Layout</a></li>\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-flex-wrap\">Wrap Layout</a></li>\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-fill-width\">Stretch Cells to Fit</a></li>\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-flex-horiz-align\">Horizontal Alignment/Distribution</a></li>\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-flex-vert-align\">Vertical Alignment/Distribution</a></li>\n          <li><a [routerLink]=\"['section/utilities/flexbox']\" fragment=\"flexbox-flex-sizes\">Cell Sizes</a></li>\n        </ul>\n      </li>\n      <li>Breakpoint Mixins</li>\n      <li>Alignment</li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"_mt0 _mb0 _mtm\">Standards</h5>\n    <ul class=\"_mt0 _pbxs _pls\">\n      <li>Using SuitCSS</li>\n      <li>SASS guidelines</li>\n      <li>Including Third Party Libraries</li>\n      <li>JavaScript Linting</li>\n      <li>HTML compliance</li>\n      <li>General Page setup</li>\n      <li>Building a new component (extending)</li>\n      <li>Browser Support</li>\n      <li>Concsie CSS</li>\n      <li>Angular 2.0</li>\n      <li>D3.js</li>\n    </ul>\n  </li>\n</ul>\n"

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Buttons</h1>\n\n<a id=\"buttons-actions\"></a>\n<h5 class=\"_mtxl\">Action Buttons</h5>\n<button class=\"-action\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span>Press Me</button>\n<button class=\"-action\">Press Me</button>\n<button class=\"-action\" disabled>Can't Press Me</button>\n<button class=\"-action\" disabled><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span>Can't Press Me</button>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Action with icon -->\n  {{'&lt;'}}button class=\"-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>Press Me{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Action without icon -->\n  {{'&lt;'}}button class=\"-action\">Press Me{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Disabled -->\n  {{'&lt;'}}button class=\"-action\" disabled>Can't Press Me{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Disabled with an icon -->\n  {{'&lt;'}}button class=\"-action\" disabled>{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>Can't Press Me{{'&lt;'}}/button>\n  </code>\n</pre>\n\n\n<a id=\"buttons-dialog-confirm\"></a>\n<h5 class=\"_mtxl\">Dialog/Confirm Buttons</h5>\n<button class=\"-dialog\">Keep</button>\n<button class=\"-dialog-reverse\">clear</button>\n<button class=\"-dialog\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span>Keep</button>\n<button class=\"-dialog-reverse\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span>clear</button>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Dark and light versions -->\n  {{'&lt;'}}button class=\"-dialog\">Keep{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-dialog-reverse\">clear{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Dark and light versions, with icons -->\n  {{'&lt;'}}button class=\"-dialog\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>Keep{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-dialog-reverse\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>clear{{'&lt;'}}/button>\n  </code>\n</pre>\n\n\n<a id=\"buttons-toolbar\"></a>\n<h5 class=\"_mtxl\">Toolbar Buttons</h5>\n<div class=\"flex\">\n  <button class=\"-toolbar\">Tool A</button>\n  <button class=\"-toolbar\">Tool B</button>\n  <button class=\"-toolbar\" disabled>Tool C</button>\n  <button class=\"-toolbar\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span>Tool D</button>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Toolbar buttons enabled -->\n  {{'&lt;'}}button class=\"-toolbar\">Tool A{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toolbar\">Tool B{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Toolbar button disabled -->\n  {{'&lt;'}}button class=\"-toolbar\" disabled>Tool C{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Toolbar button with icon -->\n  {{'&lt;'}}button class=\"-toolbar\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>Tool D{{'&lt;'}}/button>\n  </code>\n</pre>\n\n\n<a id=\"buttons-conditions\"></a>\n<h5 class=\"_mtxl\">Condition Buttons</h5>\n<div class=\"flex\">\n  <button class=\"-condition\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span>Condition A</button>\n  <button class=\"-condition\">Condition B</button>\n  <button class=\"-condition\" disabled>Condition C</button>\n  <button class=\"-condition\">Condition D</button>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}button class=\"-condition\">Condition A{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-condition\">Condition B{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-condition\" disabled>Condition C{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-condition\">Condition D{{'&lt;'}}/button>\n  </code>\n</pre>\n\n\n<a id=\"buttons-toggle\"></a>\n<h5 class=\"_mtxl\">Toggle Buttons</h5>\n<div class=\"flex\">\n  <button class=\"-toggle\">AND</button>\n  <button class=\"-toggle\">OR</button>\n  <div class=\"_mls\">&nbsp;</div>\n  <button class=\"-toggle\">AND</button>\n  <button class=\"-toggle is-active\">OR</button>\n  <div class=\"_mls\">&nbsp;</div>\n  <button class=\"-toggle\" disabled>AND</button>\n  <button class=\"-toggle\" disabled>OR</button>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Unselected, enabled toggles -->\n  {{'&lt;'}}button class=\"-toggle\">AND{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle\">OR{{'&lt;'}}/button>\n  \n  {{'&lt;'}}!-- One selected, enabled toggles -->\n  {{'&lt;'}}button class=\"-toggle\">AND{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle is-active\">OR{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Unselected, disabled toggles -->\n  {{'&lt;'}}button class=\"-toggle\" disabled>AND{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle\" disabled>OR{{'&lt;'}}/button>\n  </code>\n</pre>\n\n\n<a id=\"buttons-toggle-actions\"></a>\n<h5 class=\"_mtxl\">Toggle Action Buttons</h5>\n<div class=\"flex\">\n  <button class=\"-toggle-action\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span></button>\n  <button class=\"-toggle-action\"><span class=\"u-supre-icon u-supre-icon--filter\"></span></button>\n  <button class=\"-toggle-action\"><span class=\"u-supre-icon u-supre-icon--arrow-right-stroke\"></span></button>\n  <div class=\"_mls\">&nbsp;</div>\n  <button class=\"-toggle-action\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span></button>\n  <button class=\"-toggle-action is-active\"><span class=\"u-supre-icon u-supre-icon--filter\"></span></button>\n  <button class=\"-toggle-action\"><span class=\"u-supre-icon u-supre-icon--arrow-right-stroke\"></span></button>\n  <div class=\"_mls\">&nbsp;</div>\n  <button class=\"-toggle-action\" disabled><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span></button>\n  <button class=\"-toggle-action\" disabled><span class=\"u-supre-icon u-supre-icon--filter\"></span></button>\n  <button class=\"-toggle-action\" disabled><span class=\"u-supre-icon u-supre-icon--arrow-right-stroke\"></span></button>\n  <div class=\"_mls\">&nbsp;</div>\n  <button class=\"-toggle-action\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span></button>\n  <button class=\"-toggle-action\"><span class=\"u-supre-icon u-supre-icon--filter\"></span></button>\n  <button class=\"-toggle-action background open-bottom\"><span class=\"u-supre-icon u-supre-icon--arrow-down-filled\"></span></button>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Three enabled, unselected action toggles -->\n  {{'&lt;'}}button class=\"-toggle-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--filter\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--arrow-right-stroke\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Three enabled, one selected -->\n  {{'&lt;'}}button class=\"-toggle-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action is-active\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--filter\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--arrow-right-stroke\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- All disabled -->\n  {{'&lt;'}}button class=\"-toggle-action\" disabled>{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action\" disabled>{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--filter\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action\" disabled>{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--arrow-right-stroke\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- First and Second enabled, unselected — Third styled to connect to an open area below -->\n  {{'&lt;'}}button class=\"-toggle-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--filter\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-toggle-action background open-bottom\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--arrow-down-filled\">{{'&lt;'}}/span>{{'&lt;'}}/button>\n  </code>\n</pre>\n\n\n<a id=\"buttons-cancel\"></a>\n<h5 class=\"_mtxl\">Cancel Button</h5>\n<div>\n  <button class=\"-cancel-lg\">Cancel</button>\n  <button class=\"-action\">Press Me</button>\n  <button class=\"-action\">Press Me Too</button>\n</div>\n<div class=\"_pts\">\n  <button class=\"-cancel-md\">Cancel</button>\n  <button class=\"-dialog\">Press Me</button>\n  <button class=\"-dialog-reverse\">Press Me Too</button>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Coupled with larger Action buttons -->\n  {{'&lt;'}}button class=\"-cancel-lg\">Cancel{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-action\">Press Me{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-action\">Press Me Too{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Coupled with medium Confirm/Dialog buttons -->\n  {{'&lt;'}}button class=\"-cancel-md\">Cancel{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-dialog\">Press Me{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-dialog-reverse\">Press Me Too{{'&lt;'}}/button>\n  </code>\n</pre>\n\n"

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Checkboxes</h1>\n\n<a id=\"checkbox-inline-active\"></a>\n<h5 class=\"_mtxl\">Inline Active Checkboxes</h5>\n<div class=\"flex\">\n  <label class=\"checkbox\" for=\"test1\">\n    <input id=\"test1\" type=\"checkbox\" />\n    <span class=\"icon _mrxs\"></span>\n    Selection 1\n  </label>\n  <label class=\"checkbox _mll\" for=\"test2\">\n    <input id=\"test2\" type=\"checkbox\" />\n    <span class=\"icon _mrxs\"></span>\n    Selection 2\n  </label>\n  <label class=\"checkbox _mll\" for=\"test3\">\n    <input id=\"test3\" type=\"checkbox\" />\n    <span class=\"icon _mrxs\"></span>\n    Selection 3\n  </label>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}label class=\"checkbox\" for=\"test1\">\n      {{'&lt;'}}input id=\"test1\" type=\"checkbox\" />\n      {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n      Selection 1\n    {{'&lt;'}}/label>\n    {{'&lt;'}}label class=\"checkbox _mll\" for=\"test2\">\n      {{'&lt;'}}input id=\"test2\" type=\"checkbox\" />\n      {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n      Selection 2\n    {{'&lt;'}}/label>\n    {{'&lt;'}}label class=\"checkbox _mll\" for=\"test3\">\n      {{'&lt;'}}input id=\"test3\" type=\"checkbox\" />\n      {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n      Selection 3\n    {{'&lt;'}}/label>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"checkbox-stacked-active\"></a>\n<h5 class=\"_mtxl\">Stacked Active Checkboxes</h5>\n<div class=\"flex flex-column\">\n  <label class=\"checkbox\" for=\"test4\">\n    <input id=\"test4\" type=\"checkbox\" />\n    <span class=\"icon _mrxs\"></span>\n    Selection 1\n  </label>\n  <label class=\"checkbox _mtxs\" for=\"test5\">\n    <input id=\"test5\" type=\"checkbox\" />\n    <span class=\"icon _mrxs\"></span>\n    Selection 2\n  </label>\n  <label class=\"checkbox _mtxs\" for=\"test6\">\n    <input id=\"test6\" type=\"checkbox\" />\n    <span class=\"icon _mrxs\"></span>\n    Selection 3\n  </label>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex flex-column\">\n    {{'&lt;'}}label class=\"checkbox\" for=\"test4\">\n      {{'&lt;'}}input id=\"test4\" type=\"checkbox\" />\n      {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n      Selection 1\n    {{'&lt;'}}/label>\n    {{'&lt;'}}label class=\"checkbox _mtxs\" for=\"test5\">\n      {{'&lt;'}}input id=\"test5\" type=\"checkbox\" />\n      {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n      Selection 2\n    {{'&lt;'}}/label>\n    {{'&lt;'}}label class=\"checkbox _mtxs\" for=\"test6\">\n      {{'&lt;'}}input id=\"test6\" type=\"checkbox\" />\n      {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n      Selection 3\n    {{'&lt;'}}/label>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"checkbox-stacked-active-columns\"></a>\n<h5 class=\"_mtxl\">Stacked, Multi-column Active Checkboxes</h5>\n<div class=\"flex\">\n  <div class=\"flex flex-column\">\n    <label class=\"checkbox\" for=\"test7\">\n      <input id=\"test7\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 1, Selection 1\n    </label>\n    <label class=\"checkbox _mtxs\" for=\"test8\">\n      <input id=\"test8\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 1, Selection 2\n    </label>\n    <label class=\"checkbox _mtxs\" for=\"test9\">\n      <input id=\"test9\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 1, Selection 3\n    </label>\n  </div>\n  <div class=\"flex flex-column _mll\">\n    <label class=\"checkbox\" for=\"test10\">\n      <input id=\"test10\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 2, Selection 1\n    </label>\n    <label class=\"checkbox _mtxs\" for=\"test11\">\n      <input id=\"test11\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 2, Selection 2\n    </label>\n    <label class=\"checkbox _mtxs\" for=\"test12\">\n      <input id=\"test12\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 2, Selection 3\n    </label>\n  </div>\n  <div class=\"flex flex-column _mll\">\n    <label class=\"checkbox\" for=\"test13\">\n      <input id=\"test13\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 3, Selection 1\n    </label>\n    <label class=\"checkbox _mtxs\" for=\"test14\">\n      <input id=\"test14\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 3, Selection 2\n    </label>\n    <label class=\"checkbox _mtxs\" for=\"test15\">\n      <input id=\"test15\" type=\"checkbox\" />\n      <span class=\"icon _mrxs\"></span>\n      Column 3, Selection 3\n    </label>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div class=\"flex flex-column\">\n      {{'&lt;'}}label class=\"checkbox\" for=\"test7\">\n        {{'&lt;'}}input id=\"test7\" type=\"checkbox\" />\n        {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n        Column 1, Selection 1\n      {{'&lt;'}}/label>\n      {{'&lt;'}}label class=\"checkbox _mtxs\" for=\"test8\">\n        {{'&lt;'}}input id=\"test8\" type=\"checkbox\" />\n        {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n        Column 1, Selection 2\n      {{'&lt;'}}/label>\n      {{'&lt;'}}label class=\"checkbox _mtxs\" for=\"test9\">\n        {{'&lt;'}}input id=\"test9\" type=\"checkbox\" />\n        {{'&lt;'}}span class=\"icon _mrxs\">{{'&lt;'}}/span>\n        Column 1, Selection 3\n      {{'&lt;'}}/label>\n    {{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"flex flex-column _mll\">\n      {{'&lt;'}}!-- Second column of checkboxes -->\n    {{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"flex flex-column _mll\">\n      {{'&lt;'}}!-- Third column of checkboxes -->\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"checkbox-disabled\"></a>\n<h5 class=\"_mtxl\">Disabling Checkboxes</h5>\n<div>\n  <label class=\"checkbox\" for=\"test16\">\n    <input id=\"test16\" disabled=\"true\" type=\"checkbox\" />\n    <span class=\"icon _mrs\"></span>\n    Selection 1\n  </label>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n    {{'&lt;'}}label class=\"checkbox\" for=\"test16\">\n      {{'&lt;'}}input id=\"test16\" disabled=\"true\" type=\"checkbox\" />\n      {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n      Selection 1\n    {{'&lt;'}}/label>\n  </code>\n</pre>\n\n\n<a id=\"checkbox-select-all-active\"></a>\n<h5 class=\"_mtxl\">Select All Checkbox, Active (pattern)</h5>\n<div class=\"flex\">\n  <label class=\"checkbox\" for=\"test17\">\n    <input id=\"test17\" partial=\"false\" type=\"checkbox\" />\n    <span class=\"icon _mrs\"></span>\n    All\n  </label>\n  <label class=\"checkbox _mll\" for=\"test18\">\n    <input id=\"test18\" partial=\"true\" type=\"checkbox\" />\n    <span class=\"icon _mrs\"></span>\n    All\n  </label>\n  <label class=\"checkbox _mll\" for=\"test19\">\n    <input id=\"test19\" partial=\"true\" checked=\"checked\" type=\"checkbox\" />\n    <span class=\"icon _mrs\"></span>\n    All\n  </label>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Unselected 'All' checkbox -->\n  {{'&lt;'}}label class=\"checkbox\" for=\"test17\">\n    {{'&lt;'}}input id=\"test17\" partial=\"false\" type=\"checkbox\" />\n    {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n    All\n  {{'&lt;'}}/label>\n\n  {{'&lt;'}}!-- Mark as partial when some, not all, of the child checkboxes are checked -->\n  {{'&lt;'}}label class=\"checkbox _mll\" for=\"test18\">\n    {{'&lt;'}}input id=\"test18\" partial=\"true\" type=\"checkbox\" />\n    {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n    All\n  {{'&lt;'}}/label>\n\n  {{'&lt;'}}!-- Selected 'All' checkbox' -->\n  {{'&lt;'}}label class=\"checkbox _mll\" for=\"test19\">\n    {{'&lt;'}}input id=\"test19\" partial=\"true\" checked=\"checked\" type=\"checkbox\" />\n    {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n    All\n  {{'&lt;'}}/label>\n  </code>\n</pre>\n\n\n<a id=\"checkbox-select-all-disabled\"></a>\n<h5 class=\"_mtxl\">Select All Checkboxes, Disabled (pattern)</h5>\n<div class=\"flex\">\n  <label class=\"checkbox\" for=\"test20\">\n    <input id=\"test20\" disabled=\"disabled\" partial=\"false\" type=\"checkbox\" />\n    <span class=\"icon _mrs\"></span>\n    All\n  </label>\n  <label class=\"checkbox _mll\" for=\"test21\">\n    <input id=\"test21\" disabled=\"disabled\" partial=\"true\" type=\"checkbox\" />\n    <span class=\"icon _mrs\"></span>\n    All\n  </label>\n  <label class=\"checkbox _mll\" for=\"test21\">\n    <input id=\"test21\" disabled=\"disabled\" partial=\"true\" checked=\"checked\" type=\"checkbox\" />\n    <span class=\"icon _mrs\"></span>\n    All\n  </label>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}label class=\"checkbox\" for=\"test20\">\n    {{'&lt;'}}input id=\"test20\" disabled=\"disabled\" partial=\"false\" type=\"checkbox\" />\n    {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n    All\n  {{'&lt;'}}/label>\n  {{'&lt;'}}label class=\"checkbox _mll\" for=\"test21\">\n    {{'&lt;'}}input id=\"test21\" disabled=\"disabled\" partial=\"true\" type=\"checkbox\" />\n    {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n    All\n  {{'&lt;'}}/label>\n  {{'&lt;'}}label class=\"checkbox _mll\" for=\"test21\">\n    {{'&lt;'}}input id=\"test21\" disabled=\"disabled\" partial=\"true\" checked=\"checked\" type=\"checkbox\" />\n    {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n    All\n  {{'&lt;'}}/label>\n  </code>\n</pre>\n\n"

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Colors List</h1>\n\n<a id=\"colors-list\"></a>\n<h5 class=\"_mtxl\">List of Colors</h5>\n<p>Colors are a Utility, add it to your SCSS file from here:</p>\n<pre class=\"code-block\">\n  <code class=\"language-sass\">\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_colors.scss\";\n  </code>\n</pre>\n\n\n<!-- UI Colors -->\n<div id=\"colors\" class=\"flex flex-column\">\n\n\n  <h6 class=\"_p0 _mtxl\">UI Colors</h6>\n  <div class=\"_mt0 flex flex-wrap _mbl\">\n\n    <div class=\"color-block-ice\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-off-white\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-gray\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-lemon\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-blue-gray\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-aqua\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-purple\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-mid-gray\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-lite-gray\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-blue\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-green\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-lite-green\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-soft-green\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-white\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-black\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-active-stroke\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-disabled-stroke\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-shark-skin\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n  </div>\n\n\n  <h6 class=\"_p0 _mtxl\">Sequence Colors</h6>\n  <div class=\"_mt0 flex flex-wrap _mbl\">\n\n    <div class=\"color-block-sequence-1\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-sequence-2\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-sequence-3\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-sequence-4\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n  </div>\n\n\n  <h6 class=\"_p0 _mtxl\">Visualization Colors</h6>\n  <div class=\"_mt0 flex flex-wrap _mbl\">\n\n    <div class=\"color-block-viz-aqua\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-viz-purple\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-viz-lime\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-viz-ocean\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-viz-orange\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-viz-blue\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n    <div class=\"color-block-viz-yellow\">\n      <p class=\"text\">\n        <span class=\"title\"></span>\n        <span class=\"hex\"></span>\n      </p>\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<a id=\"colors-classes\"></a>\n<h5 class=\"_mtxl\">Color Classes</h5>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}--\n    Use to set the background color on the element\n  -->\n  {{'&lt;'}}div class=\"bg-ice\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-off-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-lemon\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-blue-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-mid-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-lite-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-black\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-lite-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-active-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-disabled-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-soft-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-shark-skin\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"bg-sequence-1\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-sequence-2\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-sequence-3\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-sequence-4\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"bg-viz-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-viz-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-viz-lime\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-viz-ocean\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-viz-orange\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-viz-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"bg-viz-yellow\">...{{'&lt;'}}/div>\n\n\n  {{'&lt;'}}--\n    Use to set the color of text in an element\n  -->\n  {{'&lt;'}}div class=\"color-ice\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-off-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-lemon\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-blue-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-mid-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-lite-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-black\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-lite-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-active-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-disabled-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-soft-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-shark-skin\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"color-sequence-1\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-sequence-2\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-sequence-3\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-sequence-4\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"color-viz-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-lime\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-ocean\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-orange\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-yellow\">...{{'&lt;'}}/div>\n\n\n  {{'&lt;'}}--\n    Use to set the color of borders on an element\n  -->\n  <!-- Note to devs: make sure you update the colors section in the typography page -->\n  {{'&lt;'}}div class=\"border-ice\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-off-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-lemon\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-blue-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-mid-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-lite-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-black\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-lite-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-active-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-disabled-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-soft-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-shark-skin\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"border-sequence-1\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-sequence-2\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-sequence-3\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-sequence-4\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"border-viz-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-viz-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-viz-lime\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-viz-ocean\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-viz-orange\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-viz-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"border-viz-yellow\">...{{'&lt;'}}/div>\n\n  </code>\n</pre>\n\n\n<a id=\"colors-placeholders\"></a>\n<h5 class=\"_mtxl\">Color Placeholders</h5>\n<pre class=\"code-block\">\n  <code class=\"language-sass\">\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_colors.scss\";\n  </code>\n</pre>\n<pre class=\"code-block\">\n  <code class=\"language-sass\">\n  /**\n   * Use to add the background color in a style definition\n   */\n  @extend %bg-ice;\n  @extend %bg-off-white;\n  @extend %bg-gray;\n  @extend %bg-lemon;\n  @extend %bg-blue-gray;\n  @extend %bg-aqua;\n  @extend %bg-purple;\n  @extend %bg-mid-gray;\n  @extend %bg-blue;\n  @extend %bg-green;\n  @extend %bg-lite-green;\n  @extend %bg-white;\n  @extend %bg-black;\n  @extend %bg-lite-gray;\n  @extend %bg-active-stroke;\n  @extend %bg-disabled-stroke;\n  @extend %bg-soft-green;\n  @extend %bg-shark-skin;\n\n  @extend %bg-sequence-1;\n  @extend %bg-sequence-2;\n  @extend %bg-sequence-3;\n  @extend %bg-sequence-4;\n\n  @extend %bg-viz-aqua;\n  @extend %bg-viz-purple;\n  @extend %bg-viz-lime;\n  @extend %bg-viz-ocean;\n  @extend %bg-viz-orange;\n  @extend %bg-viz-blue;\n  @extend %bg-viz-yellow;\n\n\n  /**\n   * Use to add the color of text in a style definition\n   */\n  <!-- Note to devs: make sure you update the colors section in the typography page -->\n  @extend %color-ice;\n  @extend %color-off-white;\n  @extend %color-gray;\n  @extend %color-lemon;\n  @extend %color-blue-gray;\n  @extend %color-aqua;\n  @extend %color-purple;\n  @extend %color-mid-gray;\n  @extend %color-blue;\n  @extend %color-green;\n  @extend %color-lite-green;\n  @extend %color-white;\n  @extend %color-black;\n  @extend %color-lite-gray;\n  @extend %color-active-stroke;\n  @extend %color-disabled-stroke;\n  @extend %color-soft-green;\n  @extend %color-shark-skin;\n\n  @extend %color-sequence-1;\n  @extend %color-sequence-2;\n  @extend %color-sequence-3;\n  @extend %color-sequence-4;\n\n  @extend %color-viz-aqua;\n  @extend %color-viz-purple;\n  @extend %color-viz-lime;\n  @extend %color-viz-ocean;\n  @extend %color-viz-orange;\n  @extend %color-viz-blue;\n  @extend %color-viz-yellow;\n\n\n  /**\n   * Use to set the color of borders in a style definition\n   */\n  @extend %border-ice;\n  @extend %border-off-white;\n  @extend %border-gray;\n  @extend %border-lemon;\n  @extend %border-blue-gray;\n  @extend %border-aqua;\n  @extend %border-purple;\n  @extend %border-mid-gray;\n  @extend %border-blue;\n  @extend %border-green;\n  @extend %border-lite-green;\n  @extend %border-white;\n  @extend %border-black;\n  @extend %border-lite-gray;\n  @extend %border-active-stroke;\n  @extend %border-disabled-stroke;\n  @extend %border-soft-green;\n  @extend %border-shark-skin;\n\n  @extend %border-sequence-1;\n  @extend %border-sequence-2;\n  @extend %border-sequence-3;\n  @extend %border-sequence-4;\n  \n  @extend %border-viz-aqua;\n  @extend %border-viz-purple;\n  @extend %border-viz-lime;\n  @extend %border-viz-ocean;\n  @extend %border-viz-orange;\n  @extend %border-viz-blue;\n  @extend %border-viz-yellow;\n\n  </code>\n</pre>\n\n\n\n"

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Dropdowns</h1>\n\n\n<a id=\"dropdown-no-icons\"></a>\n<h5 class=\"_mtxl\">Simple Dropdown, with no Icons</h5>\n<div tabindex=\"0\" class=\"dropdown-button\">\n  <div class=\"dropdown-label\">Dropdown</div>\n  <ul class=\"dropdown-content\">\n    <li class=\"item\" selected=\"false\">Item One</li>\n    <li class=\"item\" selected=\"false\">Item Two</li>\n    <li class=\"item\" selected=\"false\">Item Three</li>\n  </ul>\n</div>\n<div tabindex=\"0\" class=\"dropdown-button _mlm\">\n  <div class=\"dropdown-label\" selected=\"true\">Item Three</div>\n  <ul class=\"dropdown-content\">\n    <li class=\"item\" selected=\"false\">Item One</li>\n    <li class=\"item\" selected=\"false\">Item Two</li>\n    <li class=\"item\" selected=\"true\">Item Three</li>\n  </ul>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Basic use requires no parent containter to dictate width -->\n  {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button\">\n    {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n    {{'&lt;'}}ul class=\"dropdown-content\">\n      {{'&lt;'}}li class=\"item\" selected=\"false\">Item One{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"false\">Item Two{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"false\">Item Three{{'&lt;'}}/li>\n    {{'&lt;'}}/ul>\n  {{'&lt;'}}/div>\n\n  {{'&lt;'}}!--\n    When an item is selected:\n      - add the text to the dropdown-button \n      - set selected=\"true\" on the item\n  -->\n  {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button\">\n    {{'&lt;'}}div class=\"dropdown-label\" selected=\"true\">Item Three{{'&lt;'}}/div>\n    {{'&lt;'}}ul class=\"dropdown-content\">\n      {{'&lt;'}}li class=\"item\" selected=\"false\">Item One{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"false\">Item Two{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"true\">Item Three{{'&lt;'}}/li>\n    {{'&lt;'}}/ul>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"dropdown-with-icons\"></a>\n<h5 class=\"_mtxl\">Simple Dropdown, with Icons</h5>\n<div tabindex=\"0\" class=\"dropdown-button\">\n  <div class=\"dropdown-label\">Dropdown</div>\n  <ul class=\"dropdown-content\">\n    <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--Auto\"></span>Item name that is kind of long</li>\n    <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>Item name that is also long</li>\n    <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>Item name is short</li>\n  </ul>\n</div>\n<div tabindex=\"0\" class=\"dropdown-button _mlm\">\n  <div class=\"dropdown-label\" selected=\"true\"><span class=\"u-supre-icon u-supre-icon--CPG-food\"></span> Item name that is also long</div>\n  <ul class=\"dropdown-content\">\n    <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--Auto\"></span>Item name that is kind of long</li>\n    <li class=\"item\" selected=\"true\"><span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>Item name that is also long</li>\n    <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>Item name is short</li>\n  </ul>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Icons are added to each item -->\n  {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button\">\n    {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n    {{'&lt;'}}ul class=\"dropdown-content\">\n      {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>Item name that is kind of long{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span>Item name that is also long{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-home\">{{'&lt;'}}/span>Item name is short{{'&lt;'}}/li>\n    {{'&lt;'}}/ul>\n  {{'&lt;'}}/div>\n\n  {{'&lt;'}}!-- \n    When an item is selected:\n      - add the icon and text to the dropdown-button \n      - set selected=\"true\" on the item\n  -->\n  {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button _mlm\">\n    {{'&lt;'}}div class=\"dropdown-label\" selected=\"true\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span> Item name that is also long{{'&lt;'}}/div>\n    {{'&lt;'}}ul class=\"dropdown-content\">\n      {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>Item name that is kind of long{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"true\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span>Item name that is also long{{'&lt;'}}/li>\n      {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-home\">{{'&lt;'}}/span>Item name is short{{'&lt;'}}/li>\n    {{'&lt;'}}/ul>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"dropdown-with-width\"></a>\n<h5 class=\"_mtxl\">Applying a specific width</h5>\n<div style=\"width: 240px;\">\n  <div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    <div class=\"dropdown-label\">Dropdown</div>\n    <ul class=\"dropdown-content\">\n      <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--Auto\"></span>Item</li>\n      <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>Item</li>\n      <li class=\"item\" selected=\"false\"><span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>Item name that is kind of long</li>\n    </ul>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Create a parent container with a width (inline style used for example)-->\n  {{'&lt;'}}!-- Apply the min-fit class to the dropdown-button (min-width: 100%) -->\n  {{'&lt;'}}!-- Using the min-fit class would fill any parent container -->\n  {{'&lt;'}}div style=\"width: 240px;\">\n    {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button min-fit\">\n      {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n      {{'&lt;'}}ul class=\"dropdown-content\">\n        {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>Item{{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span>Item{{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-home\">{{'&lt;'}}/span>Item name that is kind of long{{'&lt;'}}/li>\n      {{'&lt;'}}/ul>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"dropdown-with-checkboxes\"></a>\n<h5 class=\"_mtxl\">Adding checkboxes</h5>\n<p class=\"_ts1\">(<a [routerLink]=\"['/section/checkboxes']\">Checkboxes Details</a>)</p>\n<div style=\"width: 260px\" class=\"_mtm\">\n  <div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    <div class=\"dropdown-label\">Dropdown</div>\n    <ul class=\"dropdown-content\">\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test\">\n          <input id=\"test\" type=\"checkbox\" />\n          <span class=\"icon _mrs\"></span>Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test2\">\n          <input id=\"test2\" type=\"checkbox\" />\n          <span class=\"icon\"></span>Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test3\">\n          <input id=\"test3\" type=\"checkbox\" />\n          <span class=\"icon\"></span>Item name that is kind of long\n        </label>\n      </li>\n    </ul>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Wrap the text into the checkbox markup -->\n  {{'&lt;'}}div style=\"width: 260px\">\n    {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button min-fit\">\n      {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n      {{'&lt;'}}ul class=\"dropdown-content\">\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test\">\n            {{'&lt;'}}input id=\"test\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test2\">\n            {{'&lt;'}}input id=\"test2\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test3\">\n            {{'&lt;'}}input id=\"test3\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>Item name that is kind of long\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n      {{'&lt;'}}/ul>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"dropdown-with-checkboxes-and-icons\"></a>\n<h5 class=\"_mtxl\">Checkboxes with Icons</h5>\n<p class=\"_ts1\">(<a [routerLink]=\"['/section/checkboxes']\">Checkboxes Details</a>)</p>\n<div style=\"width: 260px\" class=\"_mtm\">\n  <div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    <div class=\"dropdown-label\">Dropdown</div>\n    <ul class=\"dropdown-content\">\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test4\">\n          <input id=\"test4\" type=\"checkbox\" />\n          <span class=\"icon _mrs\"></span>\n          <span class=\"u-supre-icon u-supre-icon--Auto\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test5\">\n          <input id=\"test5\" type=\"checkbox\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test6\">\n          <input id=\"test6\" type=\"checkbox\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>\n          Item name that is kind of long\n        </label>\n      </li>\n    </ul>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Add an icon to the checkbox markup -->\n  {{'&lt;'}}div style=\"width: 260px\">\n    {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button min-fit\">\n      {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n      {{'&lt;'}}ul class=\"dropdown-content\">\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test4\">\n            {{'&lt;'}}input id=\"test4\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test5\">\n            {{'&lt;'}}input id=\"test5\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test6\">\n            {{'&lt;'}}input id=\"test6\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-home\">{{'&lt;'}}/span>\n            Item name that is kind of long\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n      {{'&lt;'}}/ul>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"dropdown-mark-item-and-checkbox-selected\"></a>\n<h5 class=\"_mtxl\">Marking Items with Checkboxes as Selected</h5>\n<p class=\"_ts1\">(<a [routerLink]=\"['/section/checkboxes']\">Checkboxes Details</a>)</p>\n<div style=\"width: 260px\" class=\"_mtm\">\n  <div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    <div class=\"dropdown-label\">Dropdown</div>\n    <ul class=\"dropdown-content\">\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test7\">\n          <input id=\"test7\" type=\"checkbox\" />\n          <span class=\"icon _mrs\"></span>\n          <span class=\"u-supre-icon u-supre-icon--Auto\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"true\">\n        <label class=\"checkbox\" for=\"test8\">\n          <input id=\"test8\" type=\"checkbox\" checked=\"checked\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test9\">\n          <input id=\"test9\" type=\"checkbox\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>\n          Item name that is kind of long\n        </label>\n      </li>\n    </ul>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- \n    To mark an item and its checkbox as selected apply:\n      - add selected=\"true\" to the .item element\n      - add the checked=\"checked\" attribute to the input element\n  -->\n  {{'&lt;'}}div style=\"width: 260px\">\n    {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button min-fit\">\n      {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n      {{'&lt;'}}ul class=\"dropdown-content\">\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test7\">\n            {{'&lt;'}}input id=\"test7\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}!-- add selected=\"true\" to an .item element -->\n        {{'&lt;'}}li class=\"item\" selected=\"true\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test8\">\n            {{'&lt;'}}!-- set the checked attribute on the input -->\n            {{'&lt;'}}input id=\"test8\" type=\"checkbox\" checked=\"checked\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test9\">\n            {{'&lt;'}}input id=\"test9\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-home\">{{'&lt;'}}/span>\n            Item name that is kind of long\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n      {{'&lt;'}}/ul>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"dropdown-with-select-all\"></a>\n<h5 class=\"_mtxl\">Using a Select All Checkbox</h5>\n<p class=\"_ts1\">(<a [routerLink]=\"['/section/checkboxes']\">Checkboxes Details</a>)</p>\n<div style=\"width: 260px;\" class=\"_mtm\">\n  <div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    <div class=\"dropdown-label\">Dropdown</div>\n    <ul class=\"dropdown-content\">\n      <li class=\"item\" selected=\"true\">\n        <label class=\"checkbox\" for=\"test10\">\n          <input id=\"test10\" type=\"checkbox\" partial=\"false\" checked=\"checked\" />\n          <span class=\"icon _mrs\"></span>\n          <span class=\"u-supre-icon u-supre-icon--Auto\"></span>\n          All\n        </label>\n      </li>\n      <li class=\"item\" selected=\"true\">\n        <label class=\"checkbox\" for=\"test11\">\n          <input id=\"test11\" type=\"checkbox\" checked=\"checked\" />\n          <span class=\"icon _mrs\"></span>\n          <span class=\"u-supre-icon u-supre-icon--Auto\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"true\">\n        <label class=\"checkbox\" for=\"test12\">\n          <input id=\"test12\" type=\"checkbox\" checked=\"checked\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"true\">\n        <label class=\"checkbox\" for=\"test13\">\n          <input id=\"test13\" type=\"checkbox\" checked=\"checked\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>\n          Item name that is kind of long\n        </label>\n      </li>\n    </ul>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  <!-- When using an all checkbox, disable all the other checkboxes when all is selected -->\n  {{'&lt;'}}div style=\"width: 260px\">\n    {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button min-fit\">\n      {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n      {{'&lt;'}}ul class=\"dropdown-content\">\n        {{'&lt;'}}li class=\"item\" selected=\"true\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test10\">\n            {{'&lt;'}}input id=\"test10\" type=\"checkbox\" partial=\"false\" checked=\"checked\" />\n            {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>\n            All\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"true\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test11\">\n            {{'&lt;'}}input id=\"test11\" type=\"checkbox\" checked=\"checked\" />\n            {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"true\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test12\">\n            {{'&lt;'}}input id=\"test12\" type=\"checkbox\" checked=\"checked\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"true\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test13\">\n            {{'&lt;'}}input id=\"test13\" type=\"checkbox\" checked=\"checked\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-home\">{{'&lt;'}}/span>\n            Item name that is kind of long\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n      {{'&lt;'}}/ul>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"dropdown-with-partial-select-all-status\"></a>\n<h5 class=\"_mtxl\">When Select All is Present, but the Child Items Are Not All Selected</h5>\n<p class=\"_ts1\">(<a [routerLink]=\"['/section/checkboxes']\">Checkboxes Details</a>)</p>\n<div style=\"width: 260px\" class=\"_mtm\">\n  <div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    <div class=\"dropdown-label\">Dropdown</div>\n    <ul class=\"dropdown-content\">\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test14\">\n          <input id=\"test14\" type=\"checkbox\" partial=\"true\" />\n          <span class=\"icon _mrs\"></span>\n          All\n        </label>\n      </li>\n      <li class=\"item\" selected=\"false\">\n        <label class=\"checkbox\" for=\"test15\">\n          <input id=\"test15\" type=\"checkbox\" />\n          <span class=\"icon _mrs\"></span>\n          <span class=\"u-supre-icon u-supre-icon--Auto\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"true\">\n        <label class=\"checkbox\" for=\"test16\">\n          <input id=\"test16\" type=\"checkbox\" checked=\"checked\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>\n          Item\n        </label>\n      </li>\n      <li class=\"item\" selected=\"true\">\n        <label class=\"checkbox\" for=\"test17\">\n          <input id=\"test17\" type=\"checkbox\" checked=\"checked\" />\n          <span class=\"icon\"></span>\n          <span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>\n          Item name that is kind of long\n        </label>\n      </li>\n    </ul>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div style=\"width: 260px\">\n    {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button min-fit\">\n      {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n      {{'&lt;'}}ul class=\"dropdown-content\">\n        {{'&lt;'}}!-- mark the item as selected=\"false\" -->\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test14\">\n            {{'&lt;'}}!-- add the partial=\"true\" to the input element -->\n            {{'&lt;'}}!-- note: the input is not checked -->\n            {{'&lt;'}}input id=\"test14\" type=\"checkbox\" partial=\"true\" />\n            {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n            All\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"false\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test15\">\n            {{'&lt;'}}input id=\"test15\" type=\"checkbox\" />\n            {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--Auto\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"true\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test16\">\n            {{'&lt;'}}input id=\"test16\" type=\"checkbox\" checked=\"checked\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-food\">{{'&lt;'}}/span>\n            Item\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n        {{'&lt;'}}li class=\"item\" selected=\"true\">\n          {{'&lt;'}}label class=\"checkbox\" for=\"test17\">\n            {{'&lt;'}}input id=\"test17\" type=\"checkbox\" checked=\"checked\" />\n            {{'&lt;'}}span class=\"icon\">{{'&lt;'}}/span>\n            {{'&lt;'}}span class=\"u-supre-icon u-supre-icon--CPG-home\">{{'&lt;'}}/span>\n            Item name that is kind of long\n          {{'&lt;'}}/label>\n        {{'&lt;'}}/li>\n      {{'&lt;'}}/ul>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"dropdown-angular-sample\"></a>\n<h5 class=\"_mtxl\">Angular Component (Using Observables)</h5>\n<p class=\"_ts1\">(<a [routerLink]=\"['/section/checkboxes']\">Checkboxes Details</a>)</p>\n<div style=\"width: 260px\" class=\"_mtm\">\n  <div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    <div class=\"dropdown-label\">{{dropdownSelectionText}}</div>\n    <ul class=\"dropdown-content\">\n\n      <li *ngFor=\"let item of dropdownModel\" class=\"item\" [attr.selected]=\"item.selected\">\n        <label class=\"checkbox\" for=\"item-{{item.id}}\">\n          <input *ngIf=\"item.type === 'all'\" id=\"item-{{item.id}}\" type=\"checkbox\" [attr.checked]=\"item.selected ? 'checked' : null\" [attr.partial]=\"item.partial\" (click)=\"toggleAllItem(item.id);\" />\n          <input *ngIf=\"item.type === 'item'\" id=\"item-{{item.id}}\" type=\"checkbox\" [attr.checked]=\"item.selected ? 'checked' : null\" (click)=\"toggleItem(item.id);\" />\n          <span class=\"icon _mrs\"></span>\n          <span *ngIf=\"item.icon\" class=\"u-supre-icon {{item.icon}}\"></span>\n          {{item.label}}\n        </label>\n      </li>\n\n    </ul>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- \n    Component Template \n  -->\n  {{'&lt;'}}div tabindex=\"0\" class=\"dropdown-button min-fit\">\n    {{'&lt;'}}div class=\"dropdown-label\">Dropdown{{'&lt;'}}/div>\n    {{'&lt;'}}ul class=\"dropdown-content\">\n\n      {{'&lt;'}}li *ngFor=\"let item of dropdownModel\" class=\"item\" [attr.selected]=\"item.selected\">\n        {{'&lt;'}}label class=\"checkbox\" for=\"item-{{'&#123;'}}{{'&#123;'}}item.id{{'&#125;'}}{{'&#125;'}}\">\n          {{'&lt;'}}input *ngIf=\"item.type === 'all'\" id=\"item-{{'&#123;'}}{{'&#123;'}}item.id{{'&#125;'}}{{'&#125;'}}\" type=\"checkbox\" [attr.checked]=\"item.selected ? 'checked' : null\" [attr.partial]=\"item.partial\" (click)=\"toggleAllItem(item.id);\" />\n          {{'&lt;'}}input *ngIf=\"item.type === 'item'\" id=\"item-{{'&#123;'}}{{'&#123;'}}item.id{{'&#125;'}}{{'&#125;'}}\" type=\"checkbox\" [attr.checked]=\"item.selected ? 'checked' : null\" (click)=\"toggleItem(item.id);\" />\n          {{'&lt;'}}span class=\"icon _mrs\">{{'&lt;'}}/span>\n          {{'&lt;'}}span *ngIf=\"item.icon\" class=\"u-supre-icon {{'&#123;'}}{{'&#123;'}}item.icon{{'&#125;'}}{{'&#125;'}}\">{{'&lt;'}}/span>\n          {{'&#123;'}}{{'&#123;'}}item.label{{'&#125;'}}{{'&#125;'}}\n        {{'&lt;'}}/label>\n      {{'&lt;'}}/li>\n\n    {{'&lt;'}}/ul>\n  {{'&lt;'}}/div>\n  </code>\n  <code class=\"language-typescript\">\n  /**\n    * Sample Component Code \n    * \n    * In a real application it is recommended that the methods and model be implemented\n    * in a service, not within the component. It is recommended that the component uses \n    * unidirectional data flow.\n    *\n    * Also, always remember to unsubscribe all your subscriptions onDestory\n    */\n\n  // public members\n  public dropdownModel: Array{{'&lt;'}}any> = [];\n  public dropdownSelectionText: string = '';\n\n  // private members\n  private dropdown$: ReplaySubject{{'&lt;'}}any> = new ReplaySubject{{'&lt;'}}any>(1);\n  \n\n  /**\n  * Creates an instance of DropdownsComponent.\n  * \n  * @memberOf DropdownsComponent\n  */\n  constructor() {{'&#123;'}}\n\n    // init the model\n    this.dropdown$.next([\n      {{'&#123;'}}\n        id: 0,\n        label: 'All',\n        selected: false,\n        icon: null,\n        partial: false,\n        type: 'all'\n      },\n      {{'&#123;'}}\n        id: 1,\n        label: 'Auto',\n        icon: 'u-supre-icon--Auto',\n        selected: false,\n        type: 'item'\n      },\n      {{'&#123;'}}\n        id: 2,\n        label: 'Ecommerce',\n        icon: 'u-supre-icon--ecommerce',\n        selected: false,\n        type: 'item'\n      },\n      {{'&#123;'}}\n        id: 3,\n        label: 'Finance',\n        icon: 'u-supre-icon--finance',\n        selected: false,\n        type: 'item'\n      },\n      {{'&#123;'}}\n        id: 4,\n        label: 'Travel',\n        icon: 'u-supre-icon--travel',\n        selected: false,\n        type: 'item'\n      }\n    ]);\n\n  }\n\n\n  /**\n  * OnInit hook\n  * \n  * \n  * @memberOf DropdownsComponent\n  */\n  ngOnInit() {{'&#123;'}}\n    this.dropdown$.subscribe(model => {{'&#123;'}}\n      // sync the model\n      this.dropdownModel = model;\n      // make the button title human readable\n      if (model.filter(item => item.selected).length === 0) {{'&#123;'}}\n        this.dropdownSelectionText = \"Select Categories\";\n      } else \n      if (model.filter(item => item.selected).length === 1) {{'&#123;'}}\n        this.dropdownSelectionText = \"1 Category Selected\";\n      } else\n      if (model.filter(item => item.selected).length === model.length) {{'&#123;'}}\n        this.dropdownSelectionText = `All Categories Selected`;\n      } else {{'&#123;'}}\n        this.dropdownSelectionText = `${{'&#123;'}}model.filter(item => item.selected).length} Categories Selected`;\n      }\n    });\n  }\n\n\n  /**\n  * Toggle a single item\n  * \n  * @param {{'&#123;'}}number} itemId\n  * \n  * @memberOf DropdownsComponent\n  */\n  toggleItem(itemId: number) {{'&#123;'}}\n    this.dropdown$\n      .take(1)\n      .subscribe(state => this.dropdown$.next(\n        update(state, Number(itemId))\n      ));\n\n    function update(state, id) {{'&#123;'}}\n      return state.slice(0)\n        .map(item => {{'&#123;'}}\n          if(item.id === id){{'&#123;'}}\n            return Object.assign({{'&#123;'}}}, item, {{'&#123;'}}selected: !item.selected});\n          }\n          return item;\n        })\n        .reduce((items, item, index, orig_collection) => {{'&#123;'}}\n          if (item.type === 'all') {{'&#123;'}}\n            let all_items = orig_collection.slice(1).every(item => item.selected),\n                some_items = orig_collection.slice(1).some(item => item.selected);\n            if (some_items) {{'&#123;'}} item.selected = false; item.partial = true; }\n            if (all_items) {{'&#123;'}} item.selected = true; item.partial = false; }\n            if (!some_items && !all_items) {{'&#123;'}} item.selected = false; item.partial = false; }\n          }\n          return items.concat(item);\n        }, []);\n    }\n  }\n\n\n  /**\n  * Toggle all the items\n  * \n  * @param {{'&#123;'}}number} itemId\n  * \n  * @memberOf DropdownsComponent\n  */\n  toggleAllItem(itemId: number) {{'&#123;'}}\n    this.dropdown$\n      .take(1)\n      .subscribe(state => this.dropdown$.next(\n        update(state, Number(itemId))\n      ));\n\n    function update(state, id) {{'&#123;'}}\n      let selected = !state[id].selected;\n      return state.slice(0)\n        .map(item => {{'&#123;'}}\n          if (item.type === 'all') {{'&#123;'}}\n            return Object.assign({{'&#123;'}}}, item, {{'&#123;'}}selected, partial: false});\n          } else {{'&#123;'}}\n            return Object.assign({{'&#123;'}}}, item, {{'&#123;'}}selected});\n          }\n        });\n    }\n  }\n  </code>\n</pre>\n"

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Icons</h1><div id=\"all-icons\" class=\"_pbs _pts _mtxl _mbxl flex flex-wrap\"><div class=\"u-supre-icon u-supre-icon--checked\"></div><div class=\"u-supre-icon u-supre-icon--partial-check\"></div><div class=\"u-supre-icon u-supre-icon--unchecked\"></div><div class=\"u-supre-icon u-supre-icon--add-create\"></div><div class=\"u-supre-icon u-supre-icon--library\"></div><div class=\"u-supre-icon u-supre-icon--user-menu-icon\"></div><div class=\"u-supre-icon u-supre-icon--arrow-down-stroke\"></div><div class=\"u-supre-icon u-supre-icon--arrow-right-stroke\"></div><div class=\"u-supre-icon u-supre-icon--arrow-right-filled\"></div><div class=\"u-supre-icon u-supre-icon--arrow-down-filled\"></div><div class=\"u-supre-icon u-supre-icon--more-menu-dots-only\"></div><div class=\"u-supre-icon u-supre-icon--more-menu-stoke\"></div><div class=\"u-supre-icon u-supre-icon--more-menu-fill\"></div><div class=\"u-supre-icon u-supre-icon--search\"></div><div class=\"u-supre-icon u-supre-icon--edit\"></div><div class=\"u-supre-icon u-supre-icon--snapshot\"></div><div class=\"u-supre-icon u-supre-icon--export\"></div><div class=\"u-supre-icon u-supre-icon--refresh-clear\"></div><div class=\"u-supre-icon u-supre-icon--filter\"></div><div class=\"u-supre-icon u-supre-icon--audience\"></div><div class=\"u-supre-icon u-supre-icon--dollar-sign\"></div><div class=\"u-supre-icon u-supre-icon--number-sign\"></div><div class=\"u-supre-icon u-supre-icon--delete-x\"></div><div class=\"u-supre-icon u-supre-icon--Auto\"></div><div class=\"u-supre-icon u-supre-icon--CPG-food\"></div><div class=\"u-supre-icon u-supre-icon--CPG-health-beauty\"></div><div class=\"u-supre-icon u-supre-icon--CPG-home\"></div><div class=\"u-supre-icon u-supre-icon--Consumer-electronics\"></div><div class=\"u-supre-icon u-supre-icon--ecommerce\"></div><div class=\"u-supre-icon u-supre-icon--entertainment\"></div><div class=\"u-supre-icon u-supre-icon--finance\"></div><div class=\"u-supre-icon u-supre-icon--insurance\"></div><div class=\"u-supre-icon u-supre-icon--pharma\"></div><div class=\"u-supre-icon u-supre-icon--QSR\"></div><div class=\"u-supre-icon u-supre-icon--retail\"></div><div class=\"u-supre-icon u-supre-icon--telco\"></div><div class=\"u-supre-icon u-supre-icon--travel\"></div><div class=\"u-supre-icon u-supre-icon--other-category\"></div></div><div id=\"all-icon-list\" class=\"_bt1 border-active-stroke flex flex-wrap _mrxl _ptl\">\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--checked\"></span>\n    &nbsp;\n    u-supre-icon--checked\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--partial-check\"></span>\n    &nbsp;\n    u-supre-icon--partial-check\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--unchecked\"></span>\n    &nbsp;\n    u-supre-icon--unchecked\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--add-create\"></span>\n    &nbsp;\n    u-supre-icon--add-create\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--library\"></span>\n    &nbsp;\n    u-supre-icon--library\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--user-menu-icon\"></span>\n    &nbsp;\n    u-supre-icon--user-menu-icon\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--arrow-down-stroke\"></span>\n    &nbsp;\n    u-supre-icon--arrow-down-stroke\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--arrow-right-stroke\"></span>\n    &nbsp;\n    u-supre-icon--arrow-right-stroke\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--arrow-right-filled\"></span>\n    &nbsp;\n    u-supre-icon--arrow-right-filled\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--arrow-down-filled\"></span>\n    &nbsp;\n    u-supre-icon--arrow-down-filled\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--more-menu-dots-only\"></span>\n    &nbsp;\n    u-supre-icon--more-menu-dots-only\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--more-menu-stoke\"></span>\n    &nbsp;\n    u-supre-icon--more-menu-stoke\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--more-menu-fill\"></span>\n    &nbsp;\n    u-supre-icon--more-menu-fill\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--search\"></span>\n    &nbsp;\n    u-supre-icon--search\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--edit\"></span>\n    &nbsp;\n    u-supre-icon--edit\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--snapshot\"></span>\n    &nbsp;\n    u-supre-icon--snapshot\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--export\"></span>\n    &nbsp;\n    u-supre-icon--export\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span>\n    &nbsp;\n    u-supre-icon--refresh-clear\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--filter\"></span>\n    &nbsp;\n    u-supre-icon--filter\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--audience\"></span>\n    &nbsp;\n    u-supre-icon--audience\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--dollar-sign\"></span>\n    &nbsp;\n    u-supre-icon--dollar-sign\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--number-sign\"></span>\n    &nbsp;\n    u-supre-icon--number-sign\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--delete-x\"></span>\n    &nbsp;\n    u-supre-icon--delete-x\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--Auto\"></span>\n    &nbsp;\n    u-supre-icon--Auto\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--CPG-food\"></span>\n    &nbsp;\n    u-supre-icon--CPG-food\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--CPG-health-beauty\"></span>\n    &nbsp;\n    u-supre-icon--CPG-health-beauty\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--CPG-home\"></span>\n    &nbsp;\n    u-supre-icon--CPG-home\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--Consumer-electronics\"></span>\n    &nbsp;\n    u-supre-icon--Consumer-electronics\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--ecommerce\"></span>\n    &nbsp;\n    u-supre-icon--ecommerce\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--entertainment\"></span>\n    &nbsp;\n    u-supre-icon--entertainment\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--finance\"></span>\n    &nbsp;\n    u-supre-icon--finance\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--insurance\"></span>\n    &nbsp;\n    u-supre-icon--insurance\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--pharma\"></span>\n    &nbsp;\n    u-supre-icon--pharma\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--QSR\"></span>\n    &nbsp;\n    u-supre-icon--QSR\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--retail\"></span>\n    &nbsp;\n    u-supre-icon--retail\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--telco\"></span>\n    &nbsp;\n    u-supre-icon--telco\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--travel\"></span>\n    &nbsp;\n    u-supre-icon--travel\n</div>\n\n<div class=\"_pbs _pts \">\n    <span class=\"u-supre-icon u-supre-icon--other-category\"></span>\n    &nbsp;\n    u-supre-icon--other-category\n</div>\n</div>"

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Inline Dialog</h1>\n\n\n<a id=\"inline-dialog-install\"></a>\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-popover --save\n  \n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} PopoverModule } from 'suprematism-popover';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      PopoverModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n\n<a id=\"inline-dialog-simple-example\"></a>\n<h5 class=\"_mtxl\">Simple Example</h5>\n<div>\n  <button class=\"-action\" [supreInlineDialog]=\"dialogInstance\">Show Dialog</button>\n  <supre-inline-dialog #dialogInstance title=\"Title of the Dialog\">\n    <p class=\"_mbm\">Here is the text that could go inside the inline dialog?</p>\n    <div class=\"flex justify-end\">\n      <button class=\"-cancel-md\" (click)=\"dialogInstance.hide()\">Cancel</button>\n      <button class=\"-dialog\">Submit</button>\n    </div>\n  </supre-inline-dialog>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Bind the 'supre-inline-dialog' instance to anything, a button in this case -->\n  {{'&lt;'}}button class=\"-action\" [supreInlineDialog]=\"dialogInstance\">Show Dialog{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- Add a 'supre-inline-dialog' instance -->\n  {{'&lt;'}}supre-inline-dialog #dialogInstance title=\"Title of the Dialog\">\n    {{'&lt;'}}p class=\"_mbm\">Here is the text that could go inside the inline dialog?{{'&lt;'}}/p>\n    {{'&lt;'}}div class=\"flex justify-end\">\n      {{'&lt;'}}!-- We can directly access the 'supre-inline-dialog' api -->\n      {{'&lt;'}}button class=\"-cancel-md\" (click)=\"dialogInstance.hide()\">Cancel{{'&lt;'}}/button>\n      {{'&lt;'}}button class=\"-dialog\">Submit{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/supre-inline-dialog>\n  </code>\n</pre>\n\n\n<a id=\"inline-dialog-with-tooltip\"></a>\n<h5 class=\"_mtxl\">Combined with Tooltip</h5>\n<div>\n  <!-- Dialog Example -->\n  <div class=\"flex justify-start\">\n    <div class=\"flex _b1 border-gray\" style=\"max-width: 740px; width: 100%;\">\n      <div class=\"flex-auto bg-ice border-white _br1\">&nbsp;</div>\n      <button class=\"-toolbar\" disabled=\"disabled\"><span class=\"u-supre-icon u-supre-icon--add-create\"></span> Condition</button>\n      <button class=\"-toolbar\" supreTooltip=\"Clear All Conditions\" [supreInlineDialog]=\"clearAllConditions\" [onHover]=\"false\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span> Clear All</button>\n    </div>\n  </div>\n  <!-- We can place this anywhere -->\n  <supre-inline-dialog #clearAllConditions title=\"Clear All Conditions\" placement=\"auto bottom\">\n    <p class=\"_mbm\">Are you sure you want to clear all attributes and conditions?</p>\n    <div class=\"flex justify-end\">\n      <button class=\"-cancel-md\" (click)=\"clearAllConditions.hide()\">Cancel</button>\n      <button class=\"-dialog bg-aqua\"><span class=\"u-supre-icon u-supre-icon--refresh-clear\"></span> Clear All</button>\n    </div>\n  </supre-inline-dialog>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Condition Bar -->\n  {{'&lt;'}}div class=\"flex justify-start\">\n    {{'&lt;'}}div class=\"flex _b1 border-gray\">\n      {{'&lt;'}}div class=\"flex-auto bg-ice border-white _br1\">&nbsp;{{'&lt;'}}/div>\n      {{'&lt;'}}button class=\"-toolbar\" disabled=\"disabled\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--add-create\">{{'&lt;'}}/span> Condition{{'&lt;'}}/button>\n      {{'&lt;'}}button class=\"-toolbar\" supreTooltip=\"Clear All Conditions\" [supreInlineDialog]=\"clearAllConditions\" [onHover]=\"false\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span> Clear All{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n\n  {{'&lt;'}}!-- Clear Dialog Box -->\n  {{'&lt;'}}supre-inline-dialog #clearAllConditions title=\"Clear All Conditions\" placement=\"auto bottom\">\n    {{'&lt;'}}p class=\"_mbm\">Are you sure you want to clear all attributes and conditions?{{'&lt;'}}/p>\n    {{'&lt;'}}div class=\"flex justify-end\">\n      {{'&lt;'}}button class=\"-cancel-md\" (click)=\"clearAllConditions.hide()\">Cancel{{'&lt;'}}/button>\n      {{'&lt;'}}button class=\"-dialog bg-aqua\">{{'&lt;'}}span class=\"u-supre-icon u-supre-icon--refresh-clear\">{{'&lt;'}}/span> Clear All{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/supre-inline-dialog>\n  </code>\n</pre>\n\n\n<a id=\"inline-dialog-placement\"></a>\n<h5 class=\"_mtxl\">Placement</h5>\n<div>\n  Popovers can be positioned on the : \n  <button class=\"-action\" [supreInlineDialog]=\"dialogInstanceTop\">Top</button>\n  <button class=\"-action\" [supreInlineDialog]=\"dialogInstanceRight\">Right</button>\n  <button class=\"-action\" [supreInlineDialog]=\"dialogInstanceBottom\">Bottom</button>\n  <button class=\"-action\" [supreInlineDialog]=\"dialogInstanceLeft\">Left</button>\n\n  <supre-inline-dialog #dialogInstanceTop title=\"Title of the Dialog\" placement=\"top\">\n    <p class=\"_mbm\">Here is the text that could go inside the inline dialog?</p>\n    <div class=\"flex justify-end\">\n      <button class=\"-cancel-md\" (click)=\"dialogInstanceTop.hide()\">Cancel</button>\n      <button class=\"-dialog\">Submit</button>\n    </div>\n  </supre-inline-dialog>\n\n  <supre-inline-dialog #dialogInstanceRight title=\"Title of the Dialog\" placement=\"right\">\n    <p class=\"_mbm\">Here is the text that could go inside the inline dialog?</p>\n    <div class=\"flex justify-end\">\n      <button class=\"-cancel-md\" (click)=\"dialogInstanceRight.hide()\">Cancel</button>\n      <button class=\"-dialog\">Submit</button>\n    </div>\n  </supre-inline-dialog>\n\n  <supre-inline-dialog #dialogInstanceBottom title=\"Title of the Dialog\" placement=\"bottom\">\n    <p class=\"_mbm\">Here is the text that could go inside the inline dialog?</p>\n    <div class=\"flex justify-end\">\n      <button class=\"-cancel-md\" (click)=\"dialogInstanceBottom.hide()\">Cancel</button>\n      <button class=\"-dialog\">Submit</button>\n    </div>\n  </supre-inline-dialog>\n\n  <supre-inline-dialog #dialogInstanceLeft title=\"Title of the Dialog\" placement=\"left\">\n    <p class=\"_mbm\">Here is the text that could go inside the inline dialog?</p>\n    <div class=\"flex justify-end\">\n      <button class=\"-cancel-md\" (click)=\"dialogInstanceLeft.hide()\">Cancel</button>\n      <button class=\"-dialog\">Submit</button>\n    </div>\n  </supre-inline-dialog>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Buttons, one for each instance -->\n  {{'&lt;'}}button class=\"-action\" [supreInlineDialog]=\"dialogInstanceTop\">Top{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-action\" [supreInlineDialog]=\"dialogInstanceRight\">Right{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-action\" [supreInlineDialog]=\"dialogInstanceBottom\">Bottom{{'&lt;'}}/button>\n  {{'&lt;'}}button class=\"-action\" [supreInlineDialog]=\"dialogInstanceLeft\">Left{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- placement=\"top\" -->\n  {{'&lt;'}}supre-inline-dialog #dialogInstanceTop title=\"Title of the Dialog\" placement=\"top\">\n    {{'&lt;'}}p class=\"_mbm\">Here is the text that could go inside the inline dialog?{{'&lt;'}}/p>\n    {{'&lt;'}}div class=\"flex justify-end\">\n      {{'&lt;'}}button class=\"-cancel-md\" (click)=\"dialogInstanceTop.hide()\">Cancel{{'&lt;'}}/button>\n      {{'&lt;'}}button class=\"-dialog\">Submit{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/supre-inline-dialog>\n\n  {{'&lt;'}}!-- placement=\"right\" -->\n  {{'&lt;'}}supre-inline-dialog #dialogInstanceRight title=\"Title of the Dialog\" placement=\"right\">\n    {{'&lt;'}}p class=\"_mbm\">Here is the text that could go inside the inline dialog?{{'&lt;'}}/p>\n    {{'&lt;'}}div class=\"flex justify-end\">\n      {{'&lt;'}}button class=\"-cancel-md\" (click)=\"dialogInstanceRight.hide()\">Cancel{{'&lt;'}}/button>\n      {{'&lt;'}}button class=\"-dialog\">Submit{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/supre-inline-dialog>\n\n  {{'&lt;'}}!-- placement=\"bottom\" -->\n  {{'&lt;'}}supre-inline-dialog #dialogInstanceBottom title=\"Title of the Dialog\" placement=\"bottom\">\n    {{'&lt;'}}p class=\"_mbm\">Here is the text that could go inside the inline dialog?{{'&lt;'}}/p>\n    {{'&lt;'}}div class=\"flex justify-end\">\n      {{'&lt;'}}button class=\"-cancel-md\" (click)=\"dialogInstanceBottom.hide()\">Cancel{{'&lt;'}}/button>\n      {{'&lt;'}}button class=\"-dialog\">Submit{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/supre-inline-dialog>\n\n  {{'&lt;'}}!-- placement=\"left\" -->\n  {{'&lt;'}}supre-inline-dialog #dialogInstanceLeft title=\"Title of the Dialog\" placement=\"left\">\n    {{'&lt;'}}p class=\"_mbm\">Here is the text that could go inside the inline dialog?{{'&lt;'}}/p>\n    {{'&lt;'}}div class=\"flex justify-end\">\n      {{'&lt;'}}button class=\"-cancel-md\" (click)=\"dialogInstanceLeft.hide()\">Cancel{{'&lt;'}}/button>\n      {{'&lt;'}}button class=\"-dialog\">Submit{{'&lt;'}}/button>\n    {{'&lt;'}}/div>\n  {{'&lt;'}}/supre-inline-dialog>\n  </code>\n</pre>\n"

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Modal</h1>\n\n\n<a id=\"modal-install\"></a>\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-modal --save\n  \n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} ModalModule } from 'suprematism-modal';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      ModalModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n\n<a id=\"modal-simple-example\"></a>\n<h5 class=\"_mtxl\">Simple Example</h5>\n<div>\n  <button id=\"modal-1-button\" class=\"-action\" (click)=\"modal1.open();\">open basic modal</button>\n  <supre-modal #modal1>\n    <span modal-title class=\"flex justify-between\">\n      <h3 class=\"_p0 _m0\">Save Audience</h3>\n      <p class=\"_p0 _m0 _ptxs\">right Side Text</p>\n    </span>\n    <span modal-body>\n      This is the body section of the Modal.\n    </span>\n    <span modal-footer class=\"flex justify-end\">\n      <p class=\"flex-auto\">Error Message Here</p>\n      <div>\n        <button (click)=\"modal1.close();\" class=\"-dialog\">Do Stuff</button>\n      </div>\n    </span>\n  </supre-modal>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- call the modal.open() method -->\n  {{'&lt;'}}button id=\"modal-1-button\" class=\"-action\" (click)=\"modalInstance.open();\">open basic modal{{'&lt;'}}/button>\n\n  {{'&lt;'}}!-- add the modal on the page -->\n  {{'&lt;'}}supre-modal #modalInstance>\n\n    {{'&lt;'}}!-- Title Section -->\n    {{'&lt;'}}span modal-title>\n      ...\n    {{'&lt;'}}/span>\n\n    {{'&lt;'}}!-- Body Section -->\n    {{'&lt;'}}span modal-body>\n      ...\n    {{'&lt;'}}/span>\n\n    {{'&lt;'}}!-- footer Section -->\n    {{'&lt;'}}span modal-footer>\n      ...\n      {{'&lt;'}}!-- You can close the modal close() method from anywhere -->\n      {{'&lt;'}}button (click)=\"modalInstance.close();\" class=\"-dialog\">Do Stuff{{'&lt;'}}/button>\n      ...\n    {{'&lt;'}}/span>\n\n  {{'&lt;'}}/supre-modal>\n  </code>\n</pre>\n\n\n<a id=\"modal-sizing\"></a>\n<h5 class=\"_mtxl\">Sizes (Optional)</h5>\n<div>\n  <button id=\"modal-2-button\" class=\"-action\" (click)=\"modal2.open();\">small modal</button>\n  <button id=\"modal-3-button\" class=\"-action\" (click)=\"modal3.open();\">medium modal</button>\n  <button id=\"modal-4-button\" class=\"-action\" (click)=\"modal4.open();\">large modal</button>\n\n  <supre-modal #modal2 size=\"small\">\n    <span modal-title class=\"flex justify-between\">\n      <h3 class=\"_p0 _m0\">Save Audience</h3>\n      <p class=\"_p0 _m0 _ptxs\">right Side Text</p>\n    </span>\n    <span modal-body>\n      This is the body section of the Modal.\n    </span>\n    <span modal-footer class=\"flex justify-end\">\n      <p class=\"flex-auto\">Error Message Here</p>\n      <div>\n        <button (click)=\"modal2.close();\" class=\"-dialog\">Do Stuff</button>\n      </div>\n    </span>\n  </supre-modal>\n\n  <supre-modal #modal3 size=\"medium\">\n    <span modal-title class=\"flex justify-between\">\n      <h3 class=\"_p0 _m0\">Save Audience</h3>\n      <p class=\"_p0 _m0 _ptxs\">right Side Text</p>\n    </span>\n    <span modal-body>\n      This is the body section of the Modal.\n    </span>\n    <span modal-footer class=\"flex justify-end\">\n      <p class=\"flex-auto\">Error Message Here</p>\n      <div>\n        <button (click)=\"modal3.close();\" class=\"-dialog\">Do Stuff</button>\n      </div>\n    </span>\n  </supre-modal>\n\n  <supre-modal #modal4 size=\"large\">\n    <span modal-title class=\"flex justify-between\">\n      <h3 class=\"_p0 _m0\">Save Audience</h3>\n      <p class=\"_p0 _m0 _ptxs\">right Side Text</p>\n    </span>\n    <span modal-body>\n      This is the body section of the Modal.\n    </span>\n    <span modal-footer class=\"flex justify-end\">\n      <p class=\"flex-auto\">Error Message Here</p>\n      <div>\n        <button (click)=\"modal4.close();\" class=\"-dialog\">Do Stuff</button>\n      </div>\n    </span>\n  </supre-modal>\n\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- size=\"small\" (default) -->\n  {{'&lt;'}}supre-modal size=\"small\">\n    {{'&lt;'}}span modal-title>...{{'&lt;'}}/span>\n    {{'&lt;'}}span modal-body>...{{'&lt;'}}/span>\n    {{'&lt;'}}span modal-footer>...{{'&lt;'}}/span>\n  {{'&lt;'}}/supre-modal>\n\n  {{'&lt;'}}!-- size=\"medium\" (default) -->\n  {{'&lt;'}}supre-modal size=\"medium\">\n    {{'&lt;'}}span modal-title>...{{'&lt;'}}/span>\n    {{'&lt;'}}span modal-body>...{{'&lt;'}}/span>\n    {{'&lt;'}}span modal-footer>...{{'&lt;'}}/span>\n  {{'&lt;'}}/supre-modal>\n\n  {{'&lt;'}}!-- size=\"large\" (default) -->\n  {{'&lt;'}}supre-modal size=\"large\">\n    {{'&lt;'}}span modal-title>...{{'&lt;'}}/span>\n    {{'&lt;'}}span modal-body>...{{'&lt;'}}/span>\n    {{'&lt;'}}span modal-footer>...{{'&lt;'}}/span>\n  {{'&lt;'}}/supre-modal>\n  </code>\n</pre>\n\n\n\n<a id=\"modal-api\"></a>\n<h5 class=\"_mtxl\">API</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  /** \n   * Classes and Interfaces \n   */\n  import {{'&#123;'}}\n    ModalEvent, // an interface for the event emitted from the modal\n    ModalComponent // the component class\n  } from 'suprematism-modal';\n\n\n  /**\n   * Event (emitter)\n   */\n  {{'&lt;'}}supre-modal (onChange)=\"yourMethod($event: ModalEvent);\">...{{'&lt;'}}/supre-modal>\n\n\n  /**\n   * ModalEvent Interface\n   */\n  export interface ModalEvent {{'&#123;'}}\n    // tells you what method/action was called\n    methodCalled: 'open' | 'close' | null;\n    // the current state\n    isOpen: boolean;\n    // the value of the 'id' property/attribute on the {{'&lt;'}}supre-modal> element, null if there is none\n    id: string | null;\n  }\n\n\n  /** \n   * ModalComponent Class\n   */\n  ModalComponent.open();  // emits: {{'&#123;'}} methodCalled: 'open', isOpen: true, id: null }\n  ModalComponent.close(); // emits: {{'&#123;'}} methodCalled: 'close', isOpen: false, id: null }\n  // NOTE: if {{'&lt;'}}supre-modal id=\"myModal\">...{{'&lt;'}}/supre-modal> then the id would be: 'myModal'\n  </code>\n</pre>\n\n\n"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Tooltips</h1>\n\n\n<a id=\"tooltips-install\"></a>\n<h5 class=\"_mtxl\">Installation</h5>\n<pre class=\"code-block\">\n  <code class=\"language-javascript\">\n  // install the repo\n  npm install CINBCUniversal/suprematism-popover --save\n  \n  // add it to a module (app.module.ts)\n  import {{'&#123;'}} PopoverModule } from 'suprematism-popover';\n\n  @NgModule({{'&#123;'}}\n    ...\n    imports: [\n      ...\n      PopoverModule\n    ],\n    ...\n  })\n  </code>\n</pre>\n\n\n<a id=\"tooltips-title-only\"></a>\n<h5 class=\"_mtxl\">Title Only Tooltip</h5>\n<div>\n  Some text to<strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\"> test </strong>with.\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  Some text to{{'&lt;'}}strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\"> test {{'&lt;'}}/strong>with.\n  </code>\n</pre>\n\n\n<a id=\"tooltips-title-with-icon\"></a>\n<h5 class=\"_mtxl\">Title with Icon Tooltip</h5>\n<div>\n  Some text to<strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" icon=\"u-supre-icon--QSR\"> test </strong>with.\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  Some text to{{'&lt;'}}strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" icon=\"u-supre-icon--QSR\"> test {{'&lt;'}}/strong>with.\n  </code>\n</pre>\n\n\n<a id=\"tooltips-title-with-icon-and-description\"></a>\n<h5 class=\"_mtxl\">Title with a Description Tooltip</h5>\n<div>\n  Some text to<strong \n    class=\"color-aqua\" \n    supreTooltip=\"Title Goes Here\" \n    icon=\"u-supre-icon--QSR\"\n    content=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit id nunc blandit varius. Quisque malesuada nunc enim, in feugiat dolor porta in.\">\n    test\n  </strong>with. \n  And some more <strong \n    class=\"color-aqua\" \n    supreTooltip=\"Title Goes Here\" \n    content=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit id nunc blandit varius. Quisque malesuada nunc enim, in feugiat dolor porta in.\">\n    text\n  </strong>to test with.\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  Some text to{{'&lt;'}}strong \n    class=\"color-aqua\" \n    supreTooltip=\"Title Goes Here\" \n    icon=\"u-supre-icon--QSR\"\n    content=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit id nunc blandit varius. Quisque malesuada nunc enim, in feugiat dolor porta in.\">\n    test\n  {{'&lt;'}}/strong>with. \n  And some more {{'&lt;'}}strong \n    class=\"color-aqua\" \n    supreTooltip=\"Title Goes Here\" \n    content=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit id nunc blandit varius. Quisque malesuada nunc enim, in feugiat dolor porta in.\">\n    text\n  {{'&lt;'}}/strong>to test with.\n  </code>\n</pre>\n\n\n<a id=\"tooltips-placement\"></a>\n<h5 class=\"_mtxl\">Placement</h5>\n<div>\n  Popovers can be positioned on the: \n  <strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"top\"> top </strong>, \n  <strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"right\"> right </strong>, \n  <strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"bottom\"> bottom </strong>, and \n  <strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"left\"> left </strong>.\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!--\n    Valid settings are: \"top\", \"bottom\", \"left\", \"right\", \"auto\", \"auto top\", \"auto bottom\", \"auto left\", \"auto right\"\n  -->\n  Popovers can be positioned on the: \n  {{'&lt;'}}strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"top\"> top {{'&lt;'}}/strong>, \n  {{'&lt;'}}strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"right\"> right {{'&lt;'}}/strong>, \n  {{'&lt;'}}strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"bottom\"> bottom {{'&lt;'}}/strong>, and \n  {{'&lt;'}}strong class=\"color-aqua\" supreTooltip=\"Title Goes Here\" popoverPlacement=\"left\"> left {{'&lt;'}}/strong>\n  </code>\n</pre>\n"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Typography</h1>\n\n\n<a id=\"type-classes\"></a>\n<h5 class=\"_mtxl\">Classes</h5>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}-- font size classes -->\n  {{'&lt;'}}div class=\"u-type-xs\">9px{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-type-s\">10px{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-type-m\">12px{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-type-l\">16px{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-type-xl\">24px{{'&lt;'}}/div>\n\n  {{'&lt;'}}-- text transformations -->\n  {{'&lt;'}}div class=\"u-uppercase\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-captialize\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}-- text align -->\n  {{'&lt;'}}div class=\"u-type-left\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-type-center\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-type-right\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}-- emphasis -->\n  {{'&lt;'}}div class=\"u-bold\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"u-em\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}-- Wrap in Parenthesis -->\n  {{'&lt;'}}div class=\"u-parens\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}-- Colors, see colors section for more info -->\n  {{'&lt;'}}div class=\"color-ice\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-off-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-lemon\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-blue-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-mid-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-lite-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-white\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-black\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-lite-gray\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-active-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-disabled-stroke\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-soft-green\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-shark-skin\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"color-sequence-1\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-sequence-2\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-sequence-3\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-sequence-4\">...{{'&lt;'}}/div>\n\n  {{'&lt;'}}div class=\"color-viz-aqua\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-purple\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-lime\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-ocean\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-orange\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-blue\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"color-viz-yellow\">...{{'&lt;'}}/div>\n\n  </code>\n</pre>\n\n\n<a id=\"type-variables\"></a>\n<h5 class=\"_mtxl\">Size Variables</h5>\n<pre class=\"code-block\">\n  <code class=\"language-sass\">\n  @import \"../node_modules/suprematism-style-guide/dist/vars/_vars.suprematisim.scss\";\n  </code>\n</pre>\n<pre class=\"code-block\">\n  <code class=\"language-sass\">\n  $text-size-xs: 9;\n  $text-size-s: 10;\n  $text-size-m: 12;\n  $text-size-l: 16;\n  $text-size-xl: 24;\n  </code>\n</pre>\n\n\n<a id=\"type-placeholders\"></a>\n<h5 class=\"_mtxl\">Place Holders</h5>\n<pre class=\"code-block\">\n  <code class=\"language-sass\">\n  // sizes\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_text.scss.scss\";\n  \n  // colors\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_colors.scss\";\n  </code>\n</pre>\n<pre class=\"code-block\">\n  <code class=\"language-sass\">\n  // sizes\n  @extend %u-type-xs;   // 9px\n  @extend %u-type-s;    // 10px\n  @extend %u-type-m;    // 12px\n  @extend %u-type-l;    // 16px\n  @extend %u-type-xl;   // 24px \n\n  // colors\n  @extend %color-ice;\n  @extend %color-off-white;\n  @extend %color-gray;\n  @extend %color-lemon;\n  @extend %color-blue-gray;\n  @extend %color-aqua;\n  @extend %color-purple;\n  @extend %color-mid-gray;\n  @extend %color-blue;\n  @extend %color-green;\n  @extend %color-lite-green;\n  @extend %color-white;\n  @extend %color-black;\n  @extend %color-lite-gray;\n  @extend %color-active-stroke;\n  @extend %color-disabled-stroke;\n  @extend %color-soft-green;\n  @extend %color-shark-skin;\n\n  @extend %color-sequence-1;\n  @extend %color-sequence-2;\n  @extend %color-sequence-3;\n  @extend %color-sequence-4;\n\n  @extend %color-viz-aqua;\n  @extend %color-viz-purple;\n  @extend %color-viz-lime;\n  @extend %color-viz-ocean;\n  @extend %color-viz-orange;\n  @extend %color-viz-blue;\n  @extend %color-viz-yellow;\n  </code>\n</pre>\n\n\n<a id=\"type-samples\"></a>\n<h5 class=\"_mtxl\">Style Samples</h5>\n<div>\n    \n  <div class=\"_ptl _pbl\">\n    <h1 class=\"color-mid-gray u-type-xl _m0 _p\">Page Title</h1>\n  </div>\n  \n  <div class=\"_pbl\">\n    <h5 class=\"color-purple u-bold u-type-l _m0 _p\">123,456,789</h5>\n    <h6 class=\"color-mid-gray u-uppercase u-bold u-type-xs _m0 _p0\">total available audience</h6>\n\n    <h5 class=\"color-purple u-bold u-type-l _m0 _p0 _mts\">123,456,789 | 100%</h5>\n    <h6 class=\"color-mid-gray u-uppercase u-bold u-type-xs _m0 _p0\">estimated total available audience</h6>\n  </div>\n\n  <div class=\"_pbl\">\n    <span class=\"u-uppercase color-purple u-type-s u-bold\">Definition</span>\n    <span class=\"u-parens u-type-s color-mid-gray\">Males 25&ndash;49 OR Females 25&ndash;49</span>\n  </div>\n\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Page Title Styles -->\n  {{'&lt;'}}h1 class=\"color-mid-gray u-type-xl _m0 _p0\">Page Title{{'&lt;'}}/h1>\n  \n  {{'&lt;'}}!-- Numbers / Audience -->\n  {{'&lt;'}}h5 class=\"color-purple u-bold u-type-l _m0 _p0\">123,456,789{{'&lt;'}}/h5>\n  {{'&lt;'}}h6 class=\"color-mid-gray u-uppercase u-bold u-type-xs _m0 _p0\">total available audience{{'&lt;'}}/h6>\n\n  {{'&lt;'}}h5 class=\"color-purple u-bold u-type-l _m0 _p0 _mts\">123,456,789 | 100%{{'&lt;'}}/h5>\n  {{'&lt;'}}h6 class=\"color-mid-gray u-uppercase u-bold u-type-xs _m0 _p0\">estimated total available audience{{'&lt;'}}/h6>\n\n  {{'&lt;'}}!-- Defintion -->\n  {{'&lt;'}}span class=\"u-uppercase color-purple u-type-s u-bold\">Definition{{'&lt;'}}/span>\n  {{'&lt;'}}span class=\"u-parens u-type-s color-mid-gray\">Males 25&ndash;49 OR Females 25&ndash;49{{'&lt;'}}/span>\n  </code>\n</pre>\n\n\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Borders</h1>\n\n<a id=\"borders-adding\"></a>\n<h5 class=\"_mtxl\">Applying Borders 1px borders</h5>\n<div class=\"flex\">\n  <div class=\"_bt1 _mts _mrs _mbs _mls\">Top Border</div>\n  <div class=\"_br1 _mts _mrs _mbs _mls\">Right Border</div>\n  <div class=\"_bb1 _mts _mrs _mbs _mls\">Bottom Border</div>\n  <div class=\"_bl1 _mts _mrs _mbs _mls\">Left Border</div>\n  <div class=\"_b1 _mts _mrs _mbs _mls\">Border All</div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- 1px borders -->\n  {{'&lt;'}}div class=\"_bt1\">Top Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_br1\">Right Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bb1\">Bottom Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bl1\">Left Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b1\">Border All{{'&lt;'}}/div>\n\n  {{'&lt;'}}!-- 2px borders -->\n  {{'&lt;'}}div class=\"_bt2\">Top Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_br2\">Right Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bb2\">Bottom Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bl2\">Left Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b2\">Border All{{'&lt;'}}/div>\n\n  {{'&lt;'}}!-- 3px borders -->\n  {{'&lt;'}}div class=\"_bt3\">Top Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_br3\">Right Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bb3\">Bottom Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bl3\">Left Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b3\">Border All{{'&lt;'}}/div>\n\n  {{'&lt;'}}!-- 4px borders -->\n  {{'&lt;'}}div class=\"_bt4\">Top Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_br4\">Right Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bb4\">Bottom Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_bl4\">Left Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b4\">Border All{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"borders-clearing\"></a>\n<h5 class=\"_mtxl\">Clearing Borders</h5>\n<div class=\"flex\">\n  <div class=\"_b1 _bt0 _mts _mrs _mbs _mls\">Remove Top Border</div>\n  <div class=\"_b1 _br0 _mts _mrs _mbs _mls\">Remove Right Border</div>\n  <div class=\"_b1 _bb0 _mts _mrs _mbs _mls\">Remove Bottom Border</div>\n  <div class=\"_b1 _bl0 _mts _mrs _mbs _mls\">Remove Left Border</div>\n  <div class=\"_b1 _b0 _mts _mrs _mbs _mls\">Remove All</div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- removing borders -->\n  {{'&lt;'}}div class=\"_b1 _bt0\">Remove Top Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b1 _br0\">Remove Right Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b1 _bb0\">Remove Bottom Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b1 _bl0\">Remove Left Border{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_b1 _b0\">Remove All{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"borders-placeholders\"></a>\n<h5 class=\"_mtxl\">Border Placeholders</h5>\n<p>This will add border styles to any class you use it on.<br/> \nBorder placehoders are a Utility, add it to your SCSS file from here:</p>\n<pre class=\"code-block\">\n  <code class=\"language-sass\">\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_borders.scss\";\n  </code>\n</pre>\n<pre>\n  <code class=\"language-sass\">\n  // use the @extend directive, placholders start with '%', not a '.'\n  \n  @extend %_b0;  // border: none !important;\n  @extend %_bt0; // border-top: none !important;\n  @extend %_br0; // border-right: none !important;\n  @extend %_bb0; // border-bottom: none !important;\n  @extend %_bl0; // border-left: none !important;\n  \n  @extend %_b1;  // border: 1px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bt1; // border-top: 1px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_br1; // border-right: 1px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bb1; // border-bottom: 1px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bl1; // border-left: 1px solid {{'&lt;'}}color: $active-stroke>;\n  \n  @extend %_b2;  // border: 2px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bt2; // border-top: 2px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_br2; // border-right: 2px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bb2; // border-bottom: 2px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bl2; // border-left: 2px solid {{'&lt;'}}color: $active-stroke>;\n  \n  @extend %_b3;  // border: 3px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bt3; // border-top: 3px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_br3; // border-right: 3px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bb3; // border-bottom: 3px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bl3; // border-left: 3px solid {{'&lt;'}}color: $active-stroke>;\n  \n  @extend %_b4;  // border: 4px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bt4; // border-top: 4px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_br4; // border-right: 4px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bb4; // border-bottom: 4px solid {{'&lt;'}}color: $active-stroke>;\n  @extend %_bl4; // border-left: 4px solid {{'&lt;'}}color: $active-stroke>;\n  </code>\n</pre>\n"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Flex Box</h1>\n\n<a id=\"flexbox-flex\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Row</span></h5>\n<div>\n  <div class=\"flex\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"flexbox-flex-column\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Column</span></h5>\n<div>\n  <div class=\"flex flex-column\">\n    <div class=\"_b1 _mbxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mbxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _plxs _prxs\">Block 3</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex flex-column\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"flexbox-flex-wrap\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Wrap</span></h5>\n<div class=\"wrap-sample\">\n  <div class=\"flex flex-wrap\">\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 3</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 4</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 5</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 6</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- in this example each cell has a width of 200px -->  \n  {{'&lt;'}}div class=\"flex flex-wrap\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 4{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 5{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 6{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"flexbox-flex-fill-width\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Fill Width</span></h5>\n<div>\n  <div class=\"flex\">\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 1</div>\n    <div class=\"flex-auto _b1 _mrxs _mbxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"flex\">\n    <div class=\"flex-auto _b1 _mrxs _mbxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _mbxs _plxs _prxs\">Block 3</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- Make the center div fill -->\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"flex-auto\">Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n\n  {{'&lt;'}}!-- Make the left div fill -->\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div class=\"flex-auto\">Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"flexbox-flex-horiz-align\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Horizontal Alignment/Distribution</span></h5>\n<div>\n  <div class=\"_mbs flex justify-start\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"_bt1 _mbs _pts flex justify-center\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"_bt1 _mbs _pts flex justify-end\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"_bt1 _mbs _pts flex justify-between\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"_bt1 _mbs _pts flex justify-around\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex justify-start\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex justify-center\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex justify-end\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex justify-between\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex justify-around\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"flexbox-flex-vert-align\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Vertical Alignment/Distribution</span></h5>\n<div class=\"flex\">\n  <div class=\"column-sample _mls _mbs flex-auto flex flex-column justify-start\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"column-sample _mls _mbs flex-auto flex flex-column justify-center\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"column-sample _mls _mbs flex-auto flex flex-column justify-end\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"column-sample _mls _mbs flex-auto flex flex-column justify-between\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n  <div class=\"column-sample _mbs flex-auto flex flex-column justify-around\">\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 1</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 2</div>\n    <div class=\"_b1 _mrxs _plxs _prxs\">Block 3</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"flex flex-column justify-start\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex flex-column justify-center\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex flex-column justify-end\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex flex-column justify-between\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"flex flex-column justify-around\">\n    {{'&lt;'}}div>Block 1{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 2{{'&lt;'}}/div>\n    {{'&lt;'}}div>Block 3{{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"flexbox-flex-sizes\"></a>\n<h5 class=\"_mtxl\"><span class=\"size-xs\">Flex Cell Sizes</span></h5>\n<div>\n  <div class=\"flex _mbs\">\n    <div class=\"flex-1 _b1 _mrxs _plxs _prxs\">Block 1 (flex-1)</div>\n    <div class=\"flex-8 _b1 _mrxs _plxs _prxs\">Block 2 (flex-8)</div>\n    <div class=\"flex-2 _b1 _mrxs _plxs _prxs\">Block 3 (flex-2)</div>\n  </div>\n  <div class=\"flex\">\n    <div class=\"flex-2 _b1 _mrxs _plxs _prxs\">Block 1 (flex-2)</div>\n    <div class=\"flex-auto _b1 _mrxs _plxs _prxs\">Block 2 (flex-auto)</div>\n    <div class=\"flex-2 _b1 _mrxs _plxs _prxs\">Block 3 (flex-2)</div>\n  </div>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}!-- We have flex-1 through flex-50 for fine grain control -->\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div class=\"flex-1\">Block 1 (flex-1){{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"flex-8\">Block 2 (flex-8){{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"flex-2\">Block 3 (flex-2){{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n\n  {{'&lt;'}}!-- You can use flex-auto in combination -->\n  {{'&lt;'}}div class=\"flex\">\n    {{'&lt;'}}div class=\"flex-2\">Block 1 (flex-2){{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"flex-auto\">Block 2 (flex-auto){{'&lt;'}}/div>\n    {{'&lt;'}}div class=\"flex-2\">Block 3 (flex-2){{'&lt;'}}/div>\n  {{'&lt;'}}/div>\n  </code>\n</pre>\n\n"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Spacing</h1>\n\n<a id=\"spacing-margin-xs\"></a>\n<h5 class=\"_mtxl\">Margin &ndash; Extra Small <span class=\"size-xs\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mlxs\">&nbsp;</span>\n  </span>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_mxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mtxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mrxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mbxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mlxs\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-margin-s\"></a>\n<h5 class=\"_mtxl\">Margin &ndash; Small <span class=\"size-s\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_ms\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mts\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mls\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_ms\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mts\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mrs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mbs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mls\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-margin-m\"></a>\n<h5 class=\"_mtxl\">Margin &ndash; Medium <span class=\"size-m\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mlm\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_mm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mtm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mrm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mbm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mlm\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-margin-l\"></a>\n<h5 class=\"_mtxl\">Margin &ndash; Large <span class=\"size-l\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_ml\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mll\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_ml\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mtl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mrl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mbl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mll\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-margin-xl\"></a>\n<h5 class=\"_mtxl\">Margin &ndash; Extra Large <span class=\"size-xl\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mlxl\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_mxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mtxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mrxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mbxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_mlxl\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-margin-placeholders\"></a>\n<h5 class=\"_mtxl\">Margin SCSS Place Holders</h5>\n<p>This will add a margin style to any class you use it on.<br/>\nSpacing placehoders are a Utility, add it to your SCSS file from here:</p>\n<pre class=\"code-block\">\n  <code class=\"language-sass\">\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_spacing.scss\";\n  </code>\n</pre>\n<pre>\n  <code class=\"language-sass\">\n  // use the @extend directive, placholders start with '%', not a '.'\n\n  @extend %_mxs;  // margin: ...px;\n  @extend %_mtxs; // margin-top: ...px;\n  @extend %_mrxs; // margin-right: ...px;\n  @extend %_mbxs; // margin-bottom: ...px;\n  @extend %_mlxs; // margin-left: ...px;\n\n  @extend %_ms;  // margin: ...px;\n  @extend %_mts; // margin-top: ...px;\n  @extend %_mrs; // margin-right: ...px;\n  @extend %_mbs; // margin-bottom: ...px;\n  @extend %_mls; // margin-left: ...px;\n\n  @extend %_mm;  // margin: ...px;\n  @extend %_mtm; // margin-top: ...px;\n  @extend %_mrm; // margin-right: ...px;\n  @extend %_mbm; // margin-bottom: ...px;\n  @extend %_mlm; // margin-left: ...px;\n\n  @extend %_ml;  // margin: ...px;\n  @extend %_mtl; // margin-top: ...px;\n  @extend %_mrl; // margin-right: ...px;\n  @extend %_mbl; // margin-bottom: ...px;\n  @extend %_mll; // margin-left: ...px;\n\n  @extend %_mxl;  // margin: ...px;\n  @extend %_mtxl; // margin-top: ...px;\n  @extend %_mrxl; // margin-right: ...px;\n  @extend %_mbxl; // margin-bottom: ...px;\n  @extend %_mlxl; // margin-left: ...px;\n  </code>\n</pre>\n\n\n\n\n\n\n\n\n<a id=\"spacing-padding-xs\"></a>\n<h5 class=\"_mtxl\">Padding &ndash; Extra Small <span class=\"size-xs\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbxs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mlxs\">&nbsp;</span>\n  </span>\n</div>\n<pre class=\"code-block\">\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_pxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_ptxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_prxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pbxs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_plxs\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-padding-s\"></a>\n<h5 class=\"_mtxl\">Padding &ndash; Small <span class=\"size-s\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_ms\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mts\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbs\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mls\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_ps\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pts\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_prs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pbs\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pls\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-padding-m\"></a>\n<h5 class=\"_mtxl\">Padding &ndash; Medium <span class=\"size-m\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbm\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mlm\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_pm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_ptm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_prm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pbm\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_plm\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-padding-l\"></a>\n<h5 class=\"_mtxl\">Padding &ndash; Large <span class=\"size-l\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_ml\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mll\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_pl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_ptl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_prl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pbl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pll\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-padding-xl\"></a>\n<h5 class=\"_mtxl\">Padding &ndash; Extra Large <span class=\"size-xl\"></span></h5>\n<div>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mtxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mrxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mbxl\">&nbsp;</span>\n  </span>\n  <span class=\"outer-wrapper\">\n    <span class=\"_mlxl\">&nbsp;</span>\n  </span>\n</div>\n<pre>\n  <code class=\"language-markup\">\n  {{'&lt;'}}div class=\"_pxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_ptxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_prxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_pbxl\">...{{'&lt;'}}/div>\n  {{'&lt;'}}div class=\"_plxl\">...{{'&lt;'}}/div>\n  </code>\n</pre>\n\n\n<a id=\"spacing-padding-placeholders\"></a>\n<h5 class=\"_mtxl\">Padding SCSS Place Holders</h5>\n<p>This will add a padding style to any class you use it on.<br/> \nSpacing placehoders are a Utility, add it to your SCSS file from here:</p>\n<pre class=\"code-block\">\n  <code class=\"language-sass\">\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_spacing.scss\";\n  </code>\n</pre>\n<pre>\n  <code class=\"language-sass\">\n  // use the @extend directive, placholders start with '%', not a '.'\n  \n  @extend %_pxs;  // padding: ...px;\n  @extend %_ptxs; // padding-top: ...px;\n  @extend %_prxs; // padding-right: ...px;\n  @extend %_pbxs; // padding-bottom: ...px;\n  @extend %_plxs; // padding-left: ...px;\n\n  @extend %_ps;  // padding: ...px;\n  @extend %_pts; // padding-top: ...px;\n  @extend %_prs; // padding-right: ...px;\n  @extend %_pbs; // padding-bottom: ...px;\n  @extend %_pls; // padding-left: ...px;\n\n  @extend %_pm;  // padding: ...px;\n  @extend %_ptm; // padding-top: ...px;\n  @extend %_prm; // padding-right: ...px;\n  @extend %_pbm; // padding-bottom: ...px;\n  @extend %_plm; // padding-left: ...px;\n\n  @extend %_pl;  // padding: ...px;\n  @extend %_ptl; // padding-top: ...px;\n  @extend %_prl; // padding-right: ...px;\n  @extend %_pbl; // padding-bottom: ...px;\n  @extend %_pll; // padding-left: ...px;\n\n  @extend %_pxl;  // padding: ...px;\n  @extend %_ptxl; // padding-top: ...px;\n  @extend %_prxl; // padding-right: ...px;\n  @extend %_pbxl; // padding-bottom: ...px;\n  @extend %_plxl; // padding-left: ...px;\n  </code>\n</pre>\n"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"top\"></a>Z-Indexes</h1>\n\n<h5 class=\"_mtxl\">Variables</h5>\n<p>Z-Index variables are a Utility, add it to your SCSS file from here:</p>\n<pre class=\"code-block\">\n  <code class=\"language-sass\">\n  @import \"../node_modules/suprematism-style-guide/dist/utils/_z-indexes.scss\";\n  </code>\n</pre>\n<pre class=\"code-block\">\n  <code class=\"language-sass\">\n  $z-index-auto:                         auto;\n  $z-index-default:                      auto;\n\n\n  // ------ Regular Levels ----------------------------------\n\n  // Regular z-index levels (range 1,000 - 20,000)\n  // This list must be frozen and can never be added to.\n  $z-index-level-1:                      1000;\n  $z-index-level-2:                      2000;\n  $z-index-level-3:                      3000;\n  $z-index-level-4:                      4000;\n  $z-index-level-5:                      5000;\n  $z-index-level-6:                      6000;\n  $z-index-level-7:                      7000;\n  $z-index-level-8:                      8000;\n  $z-index-level-9:                      9000;\n  $z-index-level-10:                    10000;\n  $z-index-level-11:                    11000;\n  $z-index-level-12:                    12000;\n  $z-index-level-13:                    13000;\n  $z-index-level-14:                    14000;\n  $z-index-level-15:                    15000;\n  $z-index-level-16:                    16000;\n  $z-index-level-17:                    17000;\n  $z-index-level-18:                    18000;\n  $z-index-level-19:                    19000;\n  $z-index-level-20:                    20000;\n\n  $z-index-level-lowest:     $z-index-level-1;\n  $z-index-level-highest:   $z-index-level-20;\n\n\n  // ------ Meta Levels -------------------------------------\n\n  // \"Meta\" z-index levels, for elements of a qualitatively\n  // higher layer, eg: modal, popover, dropdown menu.\n  // (range 100,000 - 1,000,000)\n  // This list must be frozen and can never be added to.\n  $z-index-meta-1:                     100000;\n  $z-index-meta-2:                     200000;\n  $z-index-meta-3:                     300000;\n  $z-index-meta-4:                     400000;\n  $z-index-meta-5:                     500000;\n  $z-index-meta-6:                     600000;\n  $z-index-meta-7:                     700000;\n  $z-index-meta-8:                     800000;\n  $z-index-meta-9:                     900000;\n  $z-index-meta-10:                   1000000;\n\n  $z-index-meta-lowest:       $z-index-meta-1;\n  $z-index-meta-higest:      $z-index-meta-10;\n\n  // Semantic names\n  // Unlike regular z-index levels (and colors) semantic\n  // names for meta elements must be defined at the\n  // highest level, not per component but across all.\n  $z-index-dropdown-backdrop: $z-index-meta-1;\n  $z-index-navbar:            $z-index-meta-2;\n  $z-index-dropdown:          $z-index-meta-2;\n  $z-index-navbar-fixed:      $z-index-meta-4;\n  $z-index-navbar-sticky:     $z-index-meta-4;\n  $z-index-modal-backdrop:    $z-index-meta-6;\n  $z-index-modal:             $z-index-meta-7;\n  $z-index-popover:           $z-index-meta-8;\n  $z-index-tooltip:           $z-index-meta-9;\n\n\n  // ------ Absolutes ---------------------------------------\n\n  // Absoultes (do not use these; included for debugging)\n  $z-index-absolute-minimum:      −2147483648;\n  $z-index-absoulte-maximum:       2147483647;\n  </code>\n</pre>\n"

/***/ })

},[1050]);
//# sourceMappingURL=main.bundle.map