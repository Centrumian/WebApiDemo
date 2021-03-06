var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
        this.selectedUserChange = new EventEmitter();
    }
    Object.defineProperty(UserListComponent.prototype, "selectedUser", {
        get: function () {
            return this.selUser;
        },
        set: function (value) {
            this.selUser = value;
            this.selectedUserChange.emit(this.selUser);
        },
        enumerable: true,
        configurable: true
    });
    UserListComponent.prototype.select = function (data) {
        this.selectedUser = data;
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "selectedUserChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], UserListComponent.prototype, "users", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UserListComponent.prototype, "selectedUser", null);
    UserListComponent = __decorate([
        Component({
            selector: 'user-list',
            templateUrl: './user-list.component.html'
        })
    ], UserListComponent);
    return UserListComponent;
}());
export { UserListComponent };
//# sourceMappingURL=user-list.component.js.map