import { Role } from 'src/auth/enums/rol.enum';
import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity()
export class User {
  @Column({ primary: true, generated: true })
  id: number;
  @Column({ unique: true, nullable: false })
  email: string;
  @Column()
  name: string;
  @Column({ nullable: false, select: false })
  password: string;
  @Column({ type: 'enum', default: Role.USER, enum: Role })
  role: Role;
  @DeleteDateColumn()
  deletedAt: Date;
}
