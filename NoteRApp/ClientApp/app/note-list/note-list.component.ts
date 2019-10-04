import { Component, Input } from '@angular/core'
import { Note } from '../note'

@Component({
    selector: 'note-list',
    templateUrl: './note-list.component.html',
})


export class NoteListComponent {
    @Input() notes: Note[]


}