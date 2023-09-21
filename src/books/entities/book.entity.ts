import { Column, DeleteDateColumn, Entity } from 'typeorm';

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
}
