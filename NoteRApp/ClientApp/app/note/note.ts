import { User } from '../user'

export class Note {

    id: number;
    header: string;
    content: string;
    user: User;
    date: Date;
}