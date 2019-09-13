import { Component, Input } from '@angular/core'
import { User } from '../user'

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})

export class UserListComponent  {
    @Input() users: User[];
    @Input() selectedUser: User;

    select(data : User) {
        alert('zzz');
        //this.selectedUser = selectedUser;
    }
}