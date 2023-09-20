import { User } from 'src/users/entities/user.entity';
import { Column, DeleteDateColumn, Entity, OneToMany } from 'typeorm';

@Entity()
export class Book {
  @Column({ primary: true, generated: true })
  id: number;
  @Column()
  name: string;
  @Column()
  author: string;
  @Column()
  date: string;
  @Column()
  isReseved: boolean;
  @DeleteDateColumn()
  deletedAt: Date;
  @OneToMany(() => User, (user) => user.book)
  users: User[];
}
