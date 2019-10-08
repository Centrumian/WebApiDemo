import { Component, Input, EventEmitter, Output } from '@angular/core'
import { User } from '../user'
import { PersonGender } from '../user'
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
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
})

export class UserItemComponent {
    @Input() user: User;
    @Input() detailsHidden: boolean;
    @Output() onSelect: EventEmitter<User> = new EventEmitter<User>();

    animationState: string = 'hide';
    GenderTypesDisplay: { [index: number]: string } = {};

    constructor() {
        this.GenderTypesDisplay[PersonGender.Male] = "Male";
        this.GenderTypesDisplay[PersonGender.Female] = "Female";
    }

    public select() {
        this.onSelect.emit(this.user);
    }   
}