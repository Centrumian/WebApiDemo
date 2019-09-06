import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
    selector: 'note',
    templateUrl: './note.component.html',
    providers: [DataService]
})


export class NoteComponent {

    private users: User[];
    private usersData: string = '';

    constructor(private data: DataService) { }

    check() {
        this.data.getProducts().subscribe((users: User[]) => this.users = users);
        this.InitUsersData();
    }

    InitUsersData() {
        for (var u in this.users) {
            this.usersData += this.users[u].name + '\n';
        }
    }
}