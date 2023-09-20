import { User } from 'src/users/entities/user.entity';
export declare class UpdateBookDto {
    name?: string;
    author?: string;
    date?: string;
    isReseved?: boolean;
    users: User[];
}
