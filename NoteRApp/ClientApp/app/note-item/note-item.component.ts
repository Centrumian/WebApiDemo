import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Note } from '../note'

@Component({
    selector: 'note-item',
    templateUrl: './note-item.component.html',
    styleUrls: ['./note-item.component.css']
})

export class NoteItemComponent {
    @Input() note : Note
}