import { Component } from '@angular/core';
import { DataService } from './data.service'
import { User } from './user'; 

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})
export class AppComponent {

    selectedUser: User = null;
    users: User[];

    constructor(private dataService: DataService) { }

    search(val : any) {
        this.dataService.getFilteredUsers(val.srcElement.value).subscribe((users: User[]) => this.users = users);
    }

    ngOnInit() {
        this.dataService.getUsers().subscribe((users: User[]) => this.users = users);
    } 
}