import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_num: number;

    @Column()
    user_name: string;

    @Column()
    user_affiliation: string;

    @Column()
    user_id: string;

    @Column()
    user_state: string;

    @Column()
    user_email: string;

    @Column({ unique: true })
    user_phone: string;

    @Column()
    created_at: Date;

    @Column()
    deleted_at : Date;
}
