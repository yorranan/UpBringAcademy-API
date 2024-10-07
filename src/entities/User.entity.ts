import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from './Task.entity';
import { Reward } from './Rewards.entity';

Entity();
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'integer' })
  score: number;

  @Column({ type: 'boolean' })
  admin: boolean;

  @ManyToMany(() => Task, (task) => task.users, { cascade: true })
  @JoinTable()
  tasks: Task[];

  @ManyToMany(() => Reward, (reward) => reward.users, { cascade: true })
  rewards: Reward[];
}
