import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRol {
  ADMIN = 'ADMIN',
  ARRENDATARIO = 'ARRENDATARIO',
  CO_PROPIETARIO = 'CO_PROPIETARIO',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

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

  @Column()
  rol: UserRol;
}
