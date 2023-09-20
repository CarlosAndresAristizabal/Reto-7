import { Column, DeleteDateColumn, Entity } from 'typeorm';
import { Role } from '../../common/enums/rol.enum';

@Entity()
export class User {
  @Column({ primary: true, generated: true })
  id: number;
  @Column({ unique: true, nullable: false })
  email: string;
  @Column()
  name: string;
  @Column({ unique: true, nullable: false })
  password: string;
  @Column({ default: 'user' })
  rol: string;
  @Column({ type: 'enum', default: Role.USER, enum: Role })
  role: Role;
  @DeleteDateColumn()
  deletedAt: Date;
}
