import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CoPropietario {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  apartment: string;
}