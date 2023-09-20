import { User } from 'src/users/entities/user.entity';
export declare class Book {
    id: number;
    name: string;
    author: string;
    date: string;
    isReseved: boolean;
    deletedAt: Date;
    users: User[];
}
