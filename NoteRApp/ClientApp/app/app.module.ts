import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { UserListComponent } from './user-list/user-list.component'
import { UserItemComponent } from './user-item/user-item.component'

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AppComponent, NoteComponent, UserListComponent, UserItemComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }