"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var list_colors_component_1 = require("./listColors/list-colors.component");
var log_users_component_1 = require("./logUser/log-users.component");
var list_color_service_1 = require("./listColors/list-color.service");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var forms_1 = require("@angular/forms");
var log_user_service_1 = require("./logUser/log-user.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_1.routing, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, list_colors_component_1.ListColorsComponent, log_users_component_1.LogUserComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [list_color_service_1.ListColorService, log_user_service_1.LogService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map