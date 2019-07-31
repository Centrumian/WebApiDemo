var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
var NoteComponent = /** @class */ (function () {
    function NoteComponent(data) {
        this.data = data;
        this.name = '';
        this.url = '/api/check';
    }
    NoteComponent.prototype.check = function () {
        var _this = this;
        this.data.getProducts().subscribe(function (str) { return _this.name = str; });
    };
    NoteComponent = __decorate([
        Component({
            selector: 'note',
            templateUrl: './note.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], NoteComponent);
    return NoteComponent;
}());
export { NoteComponent };
//# sourceMappingURL=note.component.js.map