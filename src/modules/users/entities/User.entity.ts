import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  apartment: string;

  @Column()
  document: number;

  @Column()
  email: string;

  @Column()
  phoneNumber: number;

  @Column()
  password: string;
}
