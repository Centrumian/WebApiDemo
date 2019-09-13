var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { User } from '../user';
var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.select = function (data) {
        alert('zzz');
        //this.selectedUser = selectedUser;
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], UserListComponent.prototype, "users", void 0);
    __decorate([
        Input(),
        __metadata("design:type", User)
    ], UserListComponent.prototype, "selectedUser", void 0);
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