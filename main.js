(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var _services_youtubeApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/youtubeApi */ "./src/app/services/youtubeApi.ts");
/* harmony import */ var _services_local_youtube_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/local-youtube-api.service */ "./src/app/services/local-youtube-api.service.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _movie_upload_form_movie_upload_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movie-upload-form/movie-upload-form.component */ "./src/app/movie-upload-form/movie-upload-form.component.ts");
/* harmony import */ var _group_card_group_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./group-card/group-card.component */ "./src/app/group-card/group-card.component.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/group.service */ "./src/app/services/group.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"],
                _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselItemTemplate"],
                _safe_pipe__WEBPACK_IMPORTED_MODULE_10__["SafePipe"],
                _movie_upload_form_movie_upload_form_component__WEBPACK_IMPORTED_MODULE_11__["MovieUploadFormComponent"],
                _group_card_group_card_component__WEBPACK_IMPORTED_MODULE_12__["GroupCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                { provide: _services_youtubeApi__WEBPACK_IMPORTED_MODULE_8__["YoutubeApiService"], useClass: _services_local_youtube_api_service__WEBPACK_IMPORTED_MODULE_9__["LocalYoutubeApiService"] },
                _services_group_service__WEBPACK_IMPORTED_MODULE_13__["GroupService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/carousel/carousel.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.itemsContainer {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-perspective: 2000px;\r\n            perspective: 2000px;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n}\r\n\r\n.prevBtn, .nextBtn {\r\n    position: absolute;\r\n    width: 35px;\r\n    height: 50px;\r\n    top: 50%;\r\n    background-color: white;\r\n    box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.5);\r\n}\r\n\r\n.prevBtn {\r\n    left: 0;\r\n    -webkit-transform: translateY(-50%) translateX(-100%);\r\n            transform: translateY(-50%) translateX(-100%);\r\n    border-top-left-radius: 50px;\r\n    border-bottom-left-radius: 50px;\r\n}\r\n\r\n.nextBtn {\r\n    right: 0;\r\n    -webkit-transform: translateY(-50%) translateX(100%);\r\n            transform: translateY(-50%) translateX(100%);\r\n    border-top-right-radius: 50px;\r\n    border-bottom-right-radius: 50px;\r\n}\r\n\r\n.prevBtn:before, .nextBtn:before {\r\n    position: absolute;\r\n    font-size: 25px;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n            transform: translateX(-50%) translateY(-50%);\r\n}\r\n\r\n.prevBtn:before {\r\n    content: '';\r\n    width: 0; \r\n    height: 0; \r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent; \r\n    \r\n    border-right: 10px solid black; \r\n}\r\n\r\n.nextBtn:before {\r\n    content: '';\r\n    width: 0; \r\n    height: 0; \r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n    \r\n    border-left: 10px solid black;\r\n}\r\n\r\n.itemContainer {\r\n    transition: all 0.5s;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n            transform: translateX(-50%) translateY(-50%);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n    -webkit-perspective: 1000px;\r\n            perspective: 1000px;\r\n}\r\n\r\n.itemContainer:after {\r\n    width: 100%;\r\n    height: 10%;\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    -webkit-transform-origin: 50% 0%;\r\n            transform-origin: 50% 0%;\r\n    -webkit-transform: translateY(1100%) rotateX(90deg);\r\n            transform: translateY(1100%) rotateX(90deg);\r\n    background: rgba(0,0,0,0.15);\r\n    box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.2);\r\n}"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Templates -->\n<ng-template #itemDefaultTemplate let-data>\n  <div class=\"item\">\n    {{data.content}}\n  </div>\n</ng-template>\n\n<div class=\"container\" [style.overflow]=\"itemsInContainer ? 'hidden' : 'visible'\">\n  <div class=\"itemsContainer\">\n    <ng-template ngFor\n                  [ngForOf]=\"itemsToRender\"\n                  [ngForTrackBy]=\"trackItems\"\n                  let-item\n                  let-first=\"first\"\n                  let-last=\"last\">\n      <div class=\"itemContainer\"\n            [@itemState]=\"item.state\"\n            [style.transform]=\"item.transform\"\n            [style.-webkit-transform]=\"item.transform\">\n        <div class=\"prevBtn\"\n          *ngIf=\"ltr ? !first : !last\"\n          (touchstart)=\"moveOne((ltr ? false : true), $event)\"\n          (click)=\"moveOne((ltr ? false : true), $event)\">\n        </div>\n        <div class=\"item\" (click)=\"moveToItem(item.id)\">\n          <ng-container *ngTemplateOutlet=\"carouselItemTemplate ? carouselItemTemplate : itemDefaultTemplate; context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <div class=\"nextBtn\"\n          *ngIf=\"ltr ? !last : !first\"\n          (touchstart)=\"moveOne((ltr ? true : false), $event)\"\n          (click)=\"moveOne((ltr ? true : false), $event)\">\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CItem, CarouselItemTemplate, CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CItem", function() { return CItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemTemplate", function() { return CarouselItemTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CItem = /** @class */ (function () {
    function CItem() {
    }
    return CItem;
}());

var CarouselItemTemplate = /** @class */ (function () {
    function CarouselItemTemplate() {
    }
    ;
    CarouselItemTemplate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[cItemTemplate]'
        }),
        __metadata("design:paramtypes", [])
    ], CarouselItemTemplate);
    return CarouselItemTemplate;
}());

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.dir = 'ltr';
        this.itemsInContainer = true;
        this.baseTransform = 'translateX(-50%) translateY(-50%)';
        this.getNextItems = false;
        this.currentItemIndex = 0;
        this.ltr = true;
        this.renderBuffer = 5;
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent.prototype.ngOnChanges = function (changes) {
        if ('dir' in changes && this.dir) {
            this.ltr = (this.dir === 'ltr');
        }
        if ('items' in changes && this.items) {
            this.initItems();
            this.calcTransforms();
        }
    };
    CarouselComponent.prototype.initItems = function () {
        // new list of items
        if (!this.getNextItems) {
            this.itemsMap = {};
            this.itemsArray = this.items.slice();
            this.currentItemIndex = 0;
            for (var index in this.items) {
                var itemIndex = +index;
                var item = this.items[itemIndex];
                this.itemsMap[item.id] = itemIndex;
            }
        }
        else {
            var oldLength = this.itemsArray.length;
            this.itemsArray = this.itemsArray.concat(this.items);
            for (var itemIndex in this.items) {
                var item = this.items[itemIndex];
                this.itemsMap[item.id] = oldLength + itemIndex;
            }
        }
        this.calcItemsToRender();
    };
    CarouselComponent.prototype.trackItems = function (index, item) {
        return item.id;
    };
    CarouselComponent.prototype.getItemTransform = function (itemId) {
        var itemIndex = this.itemsMap[itemId];
        var delta = itemIndex - this.currentItemIndex;
        var translateZ = Math.abs(delta) * -500;
        var translateX = delta * (this.ltr ? 100 : -100);
        var rotateY = 0;
        if (delta < 0) {
            rotateY = (this.ltr ? 40 : -40);
        }
        else if (delta > 0) {
            rotateY = (this.ltr ? -40 : 40);
        }
        return this.sanitizer.bypassSecurityTrustStyle(this.baseTransform + " translateZ(" + translateZ + "px) translateX(" + translateX + "%) rotateY(" + rotateY + "deg)");
    };
    CarouselComponent.prototype.calcItemsToRender = function () {
        this.itemsToRender = [];
        for (var index = this.currentItemIndex - this.renderBuffer; index <= this.currentItemIndex + this.renderBuffer; index++) {
            if (this.itemsArray[index]) {
                if (index === this.currentItemIndex) {
                    this.itemsArray[index]['state'] = 'active';
                }
                else {
                    if (index < this.currentItemIndex) {
                        this.itemsArray[index]['state'] = this.ltr ? 'left' : 'right';
                    }
                    else {
                        this.itemsArray[index]['state'] = this.ltr ? 'right' : 'left';
                    }
                }
                this.itemsToRender.push(this.itemsArray[index]);
            }
        }
    };
    CarouselComponent.prototype.calcTransforms = function () {
        for (var _i = 0, _a = this.itemsToRender; _i < _a.length; _i++) {
            var item = _a[_i];
            item['transform'] = this.getItemTransform(item.id);
        }
    };
    CarouselComponent.prototype.moveToItem = function (itemId) {
        this.moveToIndex(this.itemsMap[itemId]);
    };
    CarouselComponent.prototype.moveOne = function (next, e) {
        e.preventDefault();
        var newIndex = this.currentItemIndex + (next ? 1 : -1);
        if (newIndex < 0) {
            newIndex = 0;
        }
        if (newIndex > this.itemsArray.length - 1) {
            newIndex = this.itemsArray.length - 1;
        }
        this.moveToIndex(newIndex);
    };
    CarouselComponent.prototype.moveToIndex = function (index) {
        this.currentItemIndex = index;
        this.calcItemsToRender();
        this.calcTransforms();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CarouselComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CarouselComponent.prototype, "dir", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "itemsInContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(CarouselItemTemplate, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "carouselItemTemplate", void 0);
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/components/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/components/carousel/carousel.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('itemState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => left', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateZ(-5000px) translateX(-1000%) translateY(-50%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => right', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateZ(-5000px) translateX(1000%) translateY(-50%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('left => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateZ(-5000px) translateX(-1000%) translateY(-50%)', opacity: 0 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('right => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateZ(-5000px) translateX(1000%) translateY(-50%) ', opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/group-card/group-card.component.css":
/*!*****************************************************!*\
  !*** ./src/app/group-card/group-card.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".group {\r\n    transition: all 0.3s;\r\n    position: relative;\r\n    width: 100%;\r\n    min-height: 50px;\r\n    background: white;\r\n    border-radius: 5px;\r\n    padding: 10px 10px 10px 150px;\r\n    text-align: right;\r\n    font-size: 22px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.group:hover {\r\n    z-index: 2;\r\n    box-shadow: 0px 20px 40px 0px rgba(0,0,0,0.2)\r\n}\r\n\r\n.group .joinBtnCont {\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 150px;\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/group-card/group-card.component.html":
/*!******************************************************!*\
  !*** ./src/app/group-card/group-card.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"group\">\n  <div class=\"groupName\">\n      {{name}}\n  </div>\n  <div class=\"joinBtnCont\">\n    <div class=\"joinBtn\" (click)=\"goToRegistrationPage()\">\n      הצטרפות\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/group-card/group-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/group-card/group-card.component.ts ***!
  \****************************************************/
/*! exports provided: GroupCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCardComponent", function() { return GroupCardComponent; });
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

var GroupCardComponent = /** @class */ (function () {
    function GroupCardComponent() {
    }
    GroupCardComponent.prototype.ngOnInit = function () {
    };
    GroupCardComponent.prototype.goToRegistrationPage = function () {
        var win = window.open(this.url, '_blank');
        win.focus();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GroupCardComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GroupCardComponent.prototype, "url", void 0);
    GroupCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-card',
            template: __webpack_require__(/*! ./group-card.component.html */ "./src/app/group-card/group-card.component.html"),
            styles: [__webpack_require__(/*! ./group-card.component.css */ "./src/app/group-card/group-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GroupCardComponent);
    return GroupCardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* \r\n.addMyMovieBtn {\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n    transition: all 0.5s;\r\n    width: 400px;\r\n    height: 50px;\r\n    margin: 20px auto;\r\n    color: darkblue;\r\n    background-color: springgreen;\r\n    box-shadow: 0px 5px 20px 2px rgba(0,0,0,0.5);\r\n    text-align: center;\r\n    font-size: 25px;\r\n    padding: 10px;\r\n    user-select: none;\r\n}\r\n\r\n.addMyMovieBtn:hover {\r\n    box-shadow: 0px 5px 20px 5px rgba(0,0,0,0.5);\r\n}\r\n\r\n.addMyMovieBtn:active {\r\n    box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.5);\r\n}\r\n\r\n.formContiner {\r\n    max-width: 1000px;\r\n    width: calc(100% - 40px);\r\n    margin: 0 auto;\r\n} */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"warpper\">\n    <h1>הייטקיסטים</h1>\n    <div class=\"subHeader\">\n      <div class=\"subHeaderText\">\n        האתר הישראלי להייטקיסטים\n      </div>\n    </div>\n    <div class=\"headerInfo\">\n      הצטרפו עכשיו לחברים שלכם בקבוצות המקצועיות\n    </div>\n  </div>\n</div>\n<div class=\"content\">\n  <div class=\"warpper\">\n    <div class=\"sectionContainer introCont\">\n      <div class=\"sectionHeader\">\n        מי אנחנו?\n      </div>\n      <div class=\"sectionText\">\n        הי,<br/>בטח כבר שמעתם מחברים על הקבוצות הטכנולוגיות המובילות בארץ, אז ריכזנו עבורכם את כל הלינקים להצטרפות לכל הקבוצות.<br><br>לחצו על הקבוצה אליה אתם מעוניינים להצטרף, מלאו את הפרטים ותתחילו להנות מקהילה של אנשי מקצוע בעלי אותם תחומי עניין משותפים.<br><br>בקבוצות המקצועיות כל אחד יכול לשאול, להתייעץ, לסייע ולהתעדכן בכל מה שקורה בחברות המרכזיות בארץ. כמו כן, תוכלו לתרום מהידע והניסיון שלכם לאנשים אחרים בתעשיית ההייטק הישראלי.<br><br>היתרון של הקבוצות המקצועיות של הייטקיסטים הוא שתוכלו באמצעותן לקבל מענה מהיר, איכותי, קצר ולעניין וכמובן בעברית! אין שום פלטפורמה אחרת כיום המספקת מענה כזה בשום מקום ובמהירות הוואטסאפ !<br><br>בקבוצות תקבלו טונות של מידע זמין, יעיל, איכותי ורלוונטי וכמו כן תוכלו לתרום מהידע והניסיון שלכם להייטק הישראלי.<br><br>וכל זה בחינם ובקלות!<br>אז קדימה הצטרפו ותגלו מי מהחברים שלכם כבר איתנו.<br>נשמח לראותכם מצטרפים לאחת או יותר מהקבוצות שלנו.\n      </div>\n    </div>\n    <div class=\"sectionContainer groupsCont\">\n      <div class=\"sectionHeader\">\n        רשימת הקבוצות\n      </div>\n      <ng-template ngFor [ngForOf]=\"groups\" let-group>\n        <app-group-card \n          [name]=\"group.name\"\n          [url]=\"group.url\">\n        </app-group-card>\n      </ng-template>\n      <div class=\"contanctUsText sectionText\">\n        נשמח לקבל הצעות ייעול, בקשות ותגובות באימייל: <a target=\"_blank\" href=\"mailto:hitechistimil@gmail.com\">hitechistimil@gmail.com</a>\n      </div>\n    </div>\n    <hr class=\"hr\"/>\n    <div class=\"sectionContainer ytChanelCont\">\n      <div class=\"sectionHeader\">\n          ערוץ היוטיוב של הייטקיסטים – הבמה שלכם\n      </div>\n      <div class=\"sectionText\">\n          עכשיו יש לכם הזדמנות של ממש לתרום מנסיונכם ולקבל את הבמה שלנו ביוטיוב.<br>אנו בטוחים שלכל אחד ואחת מכם יש מה לתרום ולתת, אז נצלו את הבמה והפיצו את הידע שלכם לעולם. כל חבר בקבוצות הייטקיסטים רשאי להעלות עד 10 סרטונים.<br>\n          העריכה והפרסום עלינו :-) אז לכו לצלם ו\n          <a target=\"_blank\" href=\"https://docs.google.com/forms/d/1M-jxLquvKc00jiKhygIAXKTzDewvymYHQdd7yLqJozo/edit\">שלחו אלינו את הוידאו</a>.\n      </div>\n    </div>\n    <div class=\"sectionContainer meetupsCont\">\n      <div class=\"sectionHeader\">\n        ערוץ היוטיוב\n      </div>\n      <div class=\"carouselContainer\">\n        <app-carousel [items]=\"items\" [dir]=\"'rtl'\" [itemsInContainer]=\"false\">\n          <ng-template cItemTemplate let-data>\n            <div class=\"youTubeItem\">\n              <div class=\"embedIFrame\" [innerHtml]=\"data.content.embed | safe: 'html'\">\n              </div>\n            </div>\n          </ng-template>\n        </app-carousel>\n      </div>\n      <div class=\"sectionHeader\">\n        <a target=\"_blank\" href=\"https://www.youtube.com/channel/UCxYE6lDOnBC5JOaDeGSSaCQ/featured\">קישור לערוץ היוטיוב שלנו</a>\n      </div>\n    </div>\n    <hr class=\"hr\"/>\n  </div>\n</div>\n<div class=\"footer\">\n  <div class=\"sectionContainer\">\n    <div class=\"sectionHeader\">\n      התרשמתם ממה שעשינו וגם אתם רוצים לארח מיטאפ אצלכם בחברה דרך הייטקיסטים?\n    </div>\n    <div class=\"meetupSponsorLink sectionText\">\n      <a target=\"_blank\" href=\"https://docs.google.com/forms/d/1oPJohTRBik0izf5tHDHmgZSwk41NHqgfafYzjjj-grs/edit\">מלאו פרטים וניצור עמכם קשר</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_youtubeApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/youtubeApi */ "./src/app/services/youtubeApi.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/group.service */ "./src/app/services/group.service.ts");
// let mockvids: any = {
//   "kind": "youtube#searchListResponse",
//   "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/L4Puv_ACSaas-cJlrNnKwCDo8pU\"",
//   "regionCode": "IL",
//   "pageInfo": {
//    "totalResults": 3,
//    "resultsPerPage": 25
//   },
//   "items": [
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/3hby7JaYQKCabb8Zg0FQKUzsBlc\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "pUcAcdhU2DY"
//     },
//     "player": {
//      "embedHtml": "\u003ciframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/pUcAcdhU2DY\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen\u003e\u003c/iframe\u003e"
//     },
//     "snippet": {
//      "publishedAt": "2018-06-29T12:46:23.000Z",
//      "channelId": "UC7pgdKCTFejYBL05lAlMOng",
//      "title": "QA Managers IL - Changing role of QA manager in agile world - By Shlomi Zalma",
//      "description": "מיטאפ מנהלים שלישי של קבוצת QA Managers IL בנושא תפקיד המנהלים בעולם האג'ייל.",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/pUcAcdhU2DY/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/pUcAcdhU2DY/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/pUcAcdhU2DY/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "QA Managers IL Whatsapp Group",
//      "liveBroadcastContent": "none"
//     }
//    },
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/YdKfVocfjT5UW0Ou7Dw0k92We00\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "7C-CpTbDEGw"
//     },
//     "player": {
//      "embedHtml": "\u003ciframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/7C-CpTbDEGw\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen\u003e\u003c/iframe\u003e"
//     },
//     "snippet": {
//      "publishedAt": "2018-05-30T07:04:27.000Z",
//      "channelId": "UC7pgdKCTFejYBL05lAlMOng",
//      "title": "QA Managers IL - Automation - By Gil Klein",
//      "description": "מיטאפ מנהלים שני של קבוצת QA Managers IL בנושא אוטומציה. ניתן להצטרף לקבוצת הוואטסאפ למנהלי QA ע\"י הקישור הבא: https://goo...",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/7C-CpTbDEGw/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/7C-CpTbDEGw/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/7C-CpTbDEGw/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "QA Managers IL Whatsapp Group",
//      "liveBroadcastContent": "none"
//     }
//    },
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/rsMwijPKUtd3oDkNOG3uCMeNTBk\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "7zEK4LYgKMY"
//     },
//     "player": {
//      "embedHtml": "\u003ciframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/7zEK4LYgKMY\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen\u003e\u003c/iframe\u003e"
//     },
//     "snippet": {
//      "publishedAt": "2018-01-21T11:18:42.000Z",
//      "channelId": "UC7pgdKCTFejYBL05lAlMOng",
//      "title": "QA Managers IL - Employee retention - By Gavriel Hakimi",
//      "description": "מיטאפ מנהלים ראשון של קבוצת QA Managers IL בנושא שימור עובדים. ניתן להצטרף לקבוצת הוואטסאפ למנהלי QA ע\"י הקישור...",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/7zEK4LYgKMY/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/7zEK4LYgKMY/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/7zEK4LYgKMY/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "QA Managers IL Whatsapp Group",
//      "liveBroadcastContent": "none"
//     }
//    }
//   ]
//  }
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(youtubeApiService, groupsService) {
        this.youtubeApiService = youtubeApiService;
        this.groupsService = groupsService;
        this.showMovieForm = false;
        this.groups = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupsService.getGroups().subscribe(function (groups) {
            _this.groups = groups;
        });
        this.getLeatestVids();
    };
    HomeComponent.prototype.getLeatestVids = function () {
        var _this = this;
        // this.youtubeApiService.getLeatestVideosFromChanel('UCYzPXprvl5Y-Sf0g4vX-m6g').subscribe((videosPage) => {
        this.youtubeApiService.getLeatestVideosFromChanel('UCxYE6lDOnBC5JOaDeGSSaCQ').subscribe(function (videosPage) {
            _this.initVideoList(videosPage);
        });
        // this.initVideoList(mockvids);
    };
    HomeComponent.prototype.initVideoList = function (videosPage) {
        var _this = this;
        this.items = [];
        this.videosMap = {};
        videosPage.items.forEach(function (videoInfo) {
            var videoId = videoInfo.id['videoId'];
            _this.videosMap[videoId] = _this.items.length;
            _this.items.push({
                id: videoId,
                content: {
                    title: videoInfo.snippet.title,
                    description: videoInfo.snippet.description
                }
            });
            _this.youtubeApiService.getVideoPlayerById(videoId).subscribe(function (videoPlayer) {
                _this.items[_this.videosMap[videoPlayer.videoId]].content.embed = videoPlayer.embedHtml;
            });
        });
    };
    HomeComponent.prototype.addMovieClicked = function () {
        this.showMovieForm = true;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_youtubeApi__WEBPACK_IMPORTED_MODULE_1__["YoutubeApiService"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/movie-upload-form/movie-upload-form.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/movie-upload-form/movie-upload-form.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    direction: rtl;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    position: relative;\r\n}\r\n\r\n.label {\r\n    width: 100%;\r\n    text-align: right;\r\n    font-size: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.label.required::before {\r\n    content: ' * ';\r\n    font-size: 20px;\r\n    color: red;\r\n}\r\n\r\n.inputContiner, .checkBox {\r\n    text-align: right;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.inputContiner.categoryInput {\r\n    display: none;\r\n}\r\n\r\n.inputContiner.categoryInput.show {\r\n    display: block;\r\n}\r\n\r\ninput, select {\r\n    font-size: 16px;\r\n    box-sizing: border-box;\r\n    max-width: 500px;\r\n    width: 100%;\r\n    height: 40px;\r\n    padding: 5px;\r\n}\r\n\r\ninput:focus, select:focus {\r\n    background-color: lavender;\r\n}\r\n\r\n.submitBtn {\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n    transition: all 0.5s;\r\n    width: 200px;\r\n    height: 50px;\r\n    margin: 20px auto;\r\n    color: darkblue;\r\n    background-color: springgreen;\r\n    box-shadow: 0px 5px 20px 2px rgba(0,0,0,0.5);\r\n    text-align: center;\r\n    font-size: 25px;\r\n    padding: 10px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.submitBtn:hover {\r\n    box-shadow: 0px 5px 20px 5px rgba(0,0,0,0.5);\r\n}\r\n\r\n.submitBtn:active {\r\n    box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.5);\r\n}\r\n\r\n.submitBtn.disabled {\r\n    opacity: 0.5;\r\n}\r\n\r\n.errors {\r\n    position: relative;\r\n    color: red;\r\n    width: 100%;\r\n    font-size: 20px;\r\n    margin-bottom: 10px;\r\n    top: -20px;\r\n}\r\n\r\n.error::before {\r\n    content: '*';\r\n    color: red;\r\n}\r\n\r\n/* CheckBox CSS */\r\n\r\n.checkBox {\r\n    position: relative;\r\n    height: 24px;\r\n    width: 100%;\r\n}\r\n\r\n.checkBox > [type=\"checkbox\"] {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\n\r\n.checkBox::before {\r\n    content: '';\r\n    float: right;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 2px solid #ccc;\r\n    background: #fff;\r\n    border-radius: 4px;\r\n    box-shadow: inset 0 1px 3px rgba(0,0,0,.1);\r\n}\r\n\r\n.checkBox::after {\r\n    content: '✔';\r\n    position: absolute;\r\n    right: 5px;\r\n    top: -2px;\r\n    font-size: 20px;\r\n    color: #09ad7e;\r\n    transition: all .2s;\r\n    font-family: Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.checkBox::after {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n}\r\n\r\n.checkBox.checked::after {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n}\r\n\r\n.checkBox > label {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    float: left;\r\n    width: calc(100% - 24px);\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    padding: 0 10px;\r\n}\r\n\r\n/* End of CheckBox CSS*/"

/***/ }),

/***/ "./src/app/movie-upload-form/movie-upload-form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/movie-upload-form/movie-upload-form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div [formGroup]=\"uploadMovieForm\">\n      <div class=\"label required\">כתובת אימייל</div>\n      <div class=\"inputContiner\">\n        <input type=\"text\" formControlName=\"email\" placeholder=\"Your email address\"/>\n      </div>\n      <div class=\"errors\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n        <div class=\"error\" *ngIf=\"email.errors.required\">\n          אנא הכנס אימייל\n        </div>\n        <div class=\"error\" *ngIf=\"email.errors.email\">\n          אנא הכנס אימייל תקין\n        </div>\n      </div>\n\n      <div class=\"label\">\n        שם הסרטון\n      </div>\n      <div class=\"inputContiner\">\n        <input type=\"text\" formControlName=\"videoName\" placeholder=\"כמו שיופיע ביוטיוב\"\n              style=\"text-align: right;\"/>\n      </div>\n\n      <div class=\"label required\">קטגוריה</div>\n      <div class=\"inputContiner\">\n        <select (change)=\"onChangeCategory($event.target.value)\">\n          <ng-template ngFor [ngForOf]=\"categories\" let-category>\n            <option [value]=\"category\">{{category}}</option>\n          </ng-template>\n        </select>\n      </div>\n      <div class=\"inputContiner categoryInput\" [class.show]=\"customCategory\">\n        <input type=\"text\" formControlName=\"category\" placeholder=\"קטגוריה\"/>\n      </div>\n      <div class=\"errors\" *ngIf=\"category.invalid && (category.dirty || category.touched)\">\n        <div class=\"error\" *ngIf=\"category.errors.required\">\n          אנא בחר קטגוריה\n        </div>\n      </div>\n\n      <div class=\"label\">העלאת סרטון</div>\n      <div class=\"inputContiner\">\n        <input type=\"file\" formControlName=\"file\" />\n      </div>\n\n      <div class=\"label required\">\n        שם מלא באנגלית\n      </div>\n      <div class=\"inputContiner\">\n        <input type=\"text\" formControlName=\"name\" placeholder=\"Full Name\"/>\n      </div>\n      <div class=\"errors\" *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n        <div class=\"error\" *ngIf=\"name.errors.required\">\n          אנא הכנס שם מלא באנגלית\n        </div>\n      </div>\n\n      <div class=\"label required\">\n        תפקיד\n      </div>\n      <div class=\"inputContiner\">\n        <input type=\"text\" formControlName=\"jobDesc\" placeholder=\"הגדרת התפקיד שלכם שיוצג בסרטון\"\n              style=\"text-align: right;\"/>\n      </div>\n      <div class=\"errors\" *ngIf=\"jobDesc.invalid && (jobDesc.dirty || jobDesc.touched)\">\n        <div class=\"error\" *ngIf=\"jobDesc.errors.required\">\n          אנא הכנס תיאור תפקיד\n        </div>\n      </div>\n\n      <div class=\"label\">\n        חברה\n      </div>\n      <div class=\"inputContiner\">\n        <input type=\"text\" formControlName=\"company\" placeholder=\"מלאו רק אם אתם מעוניינים שנוסיף בסרטון\"\n              style=\"text-align: right;\"/>\n      </div>\n\n      <div class=\"label required\">\n        בהעלותכם את הסרטונים אתם מסירים מעצמכם כל זכות יוצרים על הסרטונים שהעלתם ומתירים למנהלי הקבוצה לעשות שימוש עתידי בסרטונים, כולל רווחים מפרסומות יוטיוב וכדומה.\n      </div>\n      <div class=\"checkBox\" (click)=\"uploadMovieForm.get('approve').setValue(!uploadMovieForm.get('approve').value)\"\n           [class.checked]=\"uploadMovieForm.get('approve').value\">\n        <input type=\"checkbox\" id=\"approve\" formControlName=\"approve\"/>\n        <label>מאשר</label>\n      </div>\n      <div class=\"errors\" *ngIf=\"approve.invalid && (approve.dirty || approve.touched)\">\n        <div class=\"error\" *ngIf=\"approve.errors.required\">\n          אנא אשר את התנאים\n        </div>\n      </div>\n\n      <div class=\"submitBtn\" (click)=\"submitForm()\" [class.disabled]=\"!uploadMovieForm.valid\">העלה סרטון</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/movie-upload-form/movie-upload-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/movie-upload-form/movie-upload-form.component.ts ***!
  \******************************************************************/
/*! exports provided: MovieUploadFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieUploadFormComponent", function() { return MovieUploadFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieUploadFormComponent = /** @class */ (function () {
    function MovieUploadFormComponent(fb) {
        this.fb = fb;
        this.uploadMovieForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            videoName: [''],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            jobDesc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            company: [''],
            approve: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]
        });
        this.categories = [
            'Choose...',
            'גיוס עובדים וראיונות עבודה',
            'אוטומציה',
            'אתגרים ניהוליים',
            'מדידה ומדדים',
            'כלי בדיקה',
            'מטודולוגיות בדיקה',
            'Management skills',
            'Cloud Testing',
            'CI CD',
            'Security Testing',
            'Mobile Testing',
            'Agile Testing',
            'Test Types',
            'Other'
        ];
        this.customCategory = false;
    }
    Object.defineProperty(MovieUploadFormComponent.prototype, "email", {
        get: function () { return this.uploadMovieForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovieUploadFormComponent.prototype, "category", {
        get: function () { return this.uploadMovieForm.get('category'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovieUploadFormComponent.prototype, "file", {
        get: function () { return this.uploadMovieForm.get('file'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovieUploadFormComponent.prototype, "name", {
        get: function () { return this.uploadMovieForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovieUploadFormComponent.prototype, "jobDesc", {
        get: function () { return this.uploadMovieForm.get('jobDesc'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovieUploadFormComponent.prototype, "approve", {
        get: function () { return this.uploadMovieForm.get('approve'); },
        enumerable: true,
        configurable: true
    });
    MovieUploadFormComponent.prototype.ngOnInit = function () {
    };
    MovieUploadFormComponent.prototype.onChangeCategory = function (category) {
        this.uploadMovieForm.get('category').markAsTouched();
        if (category === 'Other') {
            this.customCategory = true;
            this.uploadMovieForm.get('category').setValue('');
        }
        else {
            this.customCategory = false;
            if (category !== 'Choose...') {
                this.uploadMovieForm.get('category').setValue(category);
            }
            else {
                this.uploadMovieForm.get('category').setValue('');
            }
        }
    };
    MovieUploadFormComponent.prototype.submitForm = function () {
        if (this.uploadMovieForm.valid) {
        }
        else {
            for (var i in this.uploadMovieForm.controls) {
                this.uploadMovieForm.controls[i].markAsTouched();
            }
        }
    };
    MovieUploadFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-upload-form',
            template: __webpack_require__(/*! ./movie-upload-form.component.html */ "./src/app/movie-upload-form/movie-upload-form.component.html"),
            styles: [__webpack_require__(/*! ./movie-upload-form.component.css */ "./src/app/movie-upload-form/movie-upload-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], MovieUploadFormComponent);
    return MovieUploadFormComponent;
}());



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/group.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/group.service.ts ***!
  \*******************************************/
/*! exports provided: Group, GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Group = /** @class */ (function () {
    function Group() {
    }
    return Group;
}());

var GroupService = /** @class */ (function () {
    function GroupService() {
        this.groupsSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.localGroups = [
            {
                name: 'מנהלי QA',
                url: 'https://goo.gl/forms/JnKjTk9bWuiuXzOi1'
            },
            {
                name: 'בודקים ידניים',
                url: 'https://goo.gl/forms/TIKTPSmrZRHG0PXI2'
            },
            {
                name: 'מהנדסי אוטומציה',
                url: 'https://goo.gl/forms/eaSd2IZ6NCX1jdd32'
            },
            {
                name: 'אנשי Security',
                url: 'https://goo.gl/forms/agrwtVb4oH8tdjrz2'
            },
            {
                name: 'מנהלי פיתוח',
                url: 'https://goo.gl/forms/IhobajwfiRMcXMZA3'
            },
            {
                name: 'אנשי DevOps',
                url: 'https://docs.google.com/forms/d/e/1FAIpQLSfSIFR9NtKjHPyRO0pxRDsQxWWOPxXFUFTVWj8XSgiFxV6QLA/viewform'
            },
            {
                name: 'נשים מובילות בהייטק',
                url: 'https://goo.gl/forms/qOx95VJuWhdslAHr2'
            },
            {
                name: 'מקפתחים',
                url: 'https://docs.google.com/forms/d/1R8yViGaVts2_Xq5fwzScTQb7CBY-jNr-UKkVDRyA90Y/edit'
            },
            {
                name: 'Java Developers IL',
                url: 'https://goo.gl/forms/XbVed7tlVPyhZ2T42'
            },
            {
                name: 'JavaScript Developers',
                url: 'https://goo.gl/forms/CSIZXUb2aQLIfsx73'
            },
            {
                name: 'Python Developers',
                url: 'https://goo.gl/forms/xzCpASTAR02bPyxp2'
            },
            {
                name: 'C Developers',
                url: 'https://goo.gl/forms/TkYwrzCUck7r9gie2'
            },
            {
                name: 'C++ Developers',
                url: 'https://goo.gl/forms/0gG7ZRdGsCR4ksX53'
            },
            {
                name: 'Go Developers',
                url: 'https://goo.gl/forms/6NJDsHzMMs61Dmnp1'
            }
        ];
    }
    GroupService.prototype.getGroups = function () {
        // Call Server API
        this.groupsSub.next(this.localGroups);
        return this.groupsSub;
    };
    GroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "./src/app/services/local-youtube-api.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/local-youtube-api.service.ts ***!
  \*******************************************************/
/*! exports provided: LocalYoutubeApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalYoutubeApiService", function() { return LocalYoutubeApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _youtubeApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./youtubeApi */ "./src/app/services/youtubeApi.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeApiRequest = /** @class */ (function () {
    function YoutubeApiRequest(action, params) {
        this.action = action;
        this.params = params;
        this.apiKey = 'AIzaSyDw1vHytK3wp-sruxWEW3ML-dubaoHCQLw';
        this.yab = 'https://www.googleapis.com/youtube/v3/';
    }
    ;
    YoutubeApiRequest.prototype.getRequestUrl = function () {
        var requestUrl = this.yab;
        requestUrl += this.action + "?";
        for (var index = 0; index < this.params.length; index++) {
            requestUrl += this.params[index].name + "=" + this.params[index].value + "&";
        }
        requestUrl += "key=" + this.apiKey;
        return requestUrl;
    };
    return YoutubeApiRequest;
}());
var LocalYoutubeApiService = /** @class */ (function (_super) {
    __extends(LocalYoutubeApiService, _super);
    function LocalYoutubeApiService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    ;
    LocalYoutubeApiService.prototype.getVideoPlayerById = function (videoId) {
        var requestObject = new YoutubeApiRequest('videos', [
            {
                name: 'part',
                value: 'player'
            },
            {
                name: 'id',
                value: videoId
            }
        ]);
        return this.http.get(requestObject.getRequestUrl()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return {
                videoId: videoId,
                embedHtml: res.items[0].player.embedHtml
            };
        }));
    };
    LocalYoutubeApiService.prototype.getChanelPlaylists = function (channelId, part) {
        throw new Error("Method not implemented.");
    };
    LocalYoutubeApiService.prototype.getVideosFromPlaylist = function (playlistId, part) {
        throw new Error("Method not implemented.");
    };
    LocalYoutubeApiService.prototype.getLeatestVideosFromChanel = function (channelId, part) {
        if (part === void 0) { part = 'snippet'; }
        var requestObject = new YoutubeApiRequest('search', [
            {
                name: 'part',
                value: part
            },
            {
                name: 'channelId',
                value: channelId
            },
            {
                name: 'maxResults',
                value: '25'
            },
            {
                name: 'order',
                value: 'date'
            },
            {
                name: 'type',
                value: 'video'
            }
        ]);
        return this.http.get(requestObject.getRequestUrl());
    };
    LocalYoutubeApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LocalYoutubeApiService);
    return LocalYoutubeApiService;
}(_youtubeApi__WEBPACK_IMPORTED_MODULE_3__["YoutubeApiService"]));



/***/ }),

/***/ "./src/app/services/youtubeApi.ts":
/*!****************************************!*\
  !*** ./src/app/services/youtubeApi.ts ***!
  \****************************************/
/*! exports provided: YoutubeApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeApiService", function() { return YoutubeApiService; });
var YoutubeApiService = /** @class */ (function () {
    function YoutubeApiService() {
    }
    return YoutubeApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Projects\Gavriel\YTChanelViewer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map