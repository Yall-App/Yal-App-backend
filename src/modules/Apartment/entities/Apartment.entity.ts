import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  condominio: string;

  @Column()
  tower: string;

  @Column()
  floor: string;

  @Column()
  number: string;
}
