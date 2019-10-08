export enum PersonGender{
    Male,
    Female
}

export class User {
    id: number;
    name: string;
    age: number;
    registryDate: Date;
    gender: PersonGender;
    isAdmin: boolean;
}