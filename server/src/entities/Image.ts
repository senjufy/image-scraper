import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Image extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  imgSmall!: string;

  @Field()
  @Column()
  capturedBy!: string;

  @Field()
  @Column()
  ownerProf!: string;

  @Field()
  @Column()
  ownerName!: string;

  @Field()
  @Column()
  regularImage!: string;

  @Field()
  @Column()
  creatorId: number;

  @ManyToOne(() => User, (user) => user.images)
  creator: User;
}
