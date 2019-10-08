var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../user';
import { PersonGender } from '../user';
import { trigger, state, style, animate, transition } from '@angular/animations';
var UserItemComponent = /** @class */ (function () {
    function UserItemComponent() {
        this.onSelect = new EventEmitter();
        this.animationState = 'hide';
        this.GenderTypesDisplay = {};
        this.GenderTypesDisplay[PersonGender.Male] = "Male";
        this.GenderTypesDisplay[PersonGender.Female] = "Female";
    }
    UserItemComponent.prototype.select = function () {
        this.onSelect.emit(this.user);
    };
    __decorate([
        Input(),
        __metadata("design:type", User)
    ], UserItemComponent.prototype, "user", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], UserItemComponent.prototype, "detailsHidden", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], UserItemComponent.prototype, "onSelect", void 0);
    UserItemComponent = __decorate([
        Component({
            selector: 'user-item',
            templateUrl: './user-item.component.html',
            styleUrls: ['./user-item.component.css'],
            animations: [
                trigger('showHide', [
                    state('show', style({
                        opacity: 1
                    })),
                    state('hide', style({
                        opacity: 0
                    })),
                    transition('hide => show', [
                        animate('0.3s')
                    ]),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [])
    ], UserItemComponent);
    return UserItemComponent;
}());
export { UserItemComponent };
//# sourceMappingURL=user-item.component.js.map