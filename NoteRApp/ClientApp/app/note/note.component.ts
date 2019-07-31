import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'note',
    templateUrl: './note.component.html',
    providers: [DataService]
})


export class NoteComponent {

    name = '';
    private url = '/api/check';

    constructor(private data: DataService) { }

    check() {
        this.data.getProducts().subscribe((str: string) => this.name = str);
    }
}