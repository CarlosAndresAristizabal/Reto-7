import { Role } from '../../common/enums/rol.enum';
export declare class User {
    id: number;
    email: string;
    name: string;
    password: string;
    rol: string;
    role: Role;
    deletedAt: Date;
}
