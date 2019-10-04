import { Component, Input, Output, EventEmitter } from '@angular/core'
import { User } from '../user'

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})

export class UserListComponent  {
    selUser: User;

    @Output() selectedUserChange = new EventEmitter();

    @Input() users: User[];
    @Input()
    get selectedUser() {
        return this.selUser;
    }
    set selectedUser(value) {
        this.selUser = value;
        this.selectedUserChange.emit(this.selUser)
    }

    select(data : User) {
        this.selectedUser = data;
    }
}