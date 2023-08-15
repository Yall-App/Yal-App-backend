import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Arrendatario {
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
}
