import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Image {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ type: "text" })
  imgSmall!: string;

  @Field()
  @Property({ type: "text" })
  capturedBy!: string;

  @Field()
  @Property({ type: "text" })
  ownerProf!: string;

  @Field()
  @Property({ type: "text" })
  ownerName!: string;

  @Field()
  @Property({ type: "text" })
  regularImage!: string;
}
