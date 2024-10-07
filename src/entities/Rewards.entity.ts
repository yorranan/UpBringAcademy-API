import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User.entity';
import { userInfo } from 'os';

@Entity()
export class Reward {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column()
  name: string;

  @Column({ type: 'tinytext' })
  description: string;

  @Column({ type: 'integer' })
  pointegers: number;

  @ManyToMany(() => User, (user) => user.tasks)
  users: User[];
}
