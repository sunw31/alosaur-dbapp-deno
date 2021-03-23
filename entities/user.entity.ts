import { Entity, PrimaryGeneratedColumn, Column } from "typeorm/mod.ts";
@Entity("users")
export class User{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar", { length: 255 })
    name!: string;
}