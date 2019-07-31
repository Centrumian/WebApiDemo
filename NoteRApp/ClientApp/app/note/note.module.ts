import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NoteComponent } from './note.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [NoteComponent],
    bootstrap: [NoteComponent]
})
export class NoteModule { }