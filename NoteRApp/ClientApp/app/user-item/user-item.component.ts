import { Component, Input } from '@angular/core'
import { User } from '../user'

@Component({
    selector: 'user-item',
    templateUrl: './user-item.component.html',
    styleUrls : ['./user-item.component.css']
})

export class UserItemComponent {
    @Input() user: User;
    detailsHidden: boolean = true;
    
    changeDetailsVisibility() {
        this.detailsHidden = !this.detailsHidden;
    }
}