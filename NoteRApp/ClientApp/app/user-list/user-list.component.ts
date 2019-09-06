import { Component, OnInit } from '@angular/core'
import { DataService } from '../data.service'
import { User } from '../user'

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    providers: [DataService]
})
export class UserListComponent implements OnInit {

    private users : User[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getProducts().subscribe((users: User[]) => this.users = users);
    } 
}