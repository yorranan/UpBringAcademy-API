import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'datetime',
    default: () => new Date(),
  })
  begin: Date;

  @Column({ type: 'datetime' })
  end: Date;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'integer' })
  points: number;

  @ManyToMany(() => User, (user) => user.tasks)
  users: User[];
}
