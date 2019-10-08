import { Component } from '@angular/core';
import { DataService } from './data.service'
import { User } from './user'; 

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})
export class AppComponent {

    title = 'Welcome, guys!';
    selectedUser: User = null;
    users: User[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getUsers().subscribe((users: User[]) => this.users = users);
    } 
}