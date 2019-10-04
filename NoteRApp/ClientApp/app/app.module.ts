import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component'
import { UserItemComponent } from './user-item/user-item.component'
import { NoteListComponent } from './note-list/note-list.component'
import { NoteItemComponent } from './note-item/note-item.component';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule],
    declarations: [
        AppComponent,
        UserListComponent,
        UserItemComponent,
        NoteListComponent,
        NoteItemComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }