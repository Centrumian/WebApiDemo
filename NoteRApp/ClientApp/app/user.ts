import { Note } from "./note"

export class User {
    id: number;
    name: string;
    age: number;
    country: string;
    notes: Note[];
}