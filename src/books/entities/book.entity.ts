import {
  Column,
  DeleteDateColumn,
  Entity,
} from 'typeorm';

@Entity()
export class Book {
  @Column({ primary: true, generated: true })
  id: number;
  @Column()
  name: string;
  @Column()
  author: string;
  @Column()
  date: Date;
  @Column()
  isReserved: boolean;
  @DeleteDateColumn()
  deletedAt:Date;
}
