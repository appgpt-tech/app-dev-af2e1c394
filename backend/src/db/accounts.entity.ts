//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accounts')
export class accountsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  accountNumber: string;

  @Column('integer', { nullable: true })
  userId: number;

  @Column('real', { nullable: true })
  balance: number;

  @Column('integer', { nullable: true })
  currency: number;
}
