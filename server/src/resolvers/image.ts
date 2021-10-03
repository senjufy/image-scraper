import { Image } from "../entities/Image";
import {
  Resolver,
  Query,
  Arg,
  Mutation,
  InputType,
  Field,
  Ctx,
  UseMiddleware,
  ObjectType,
} from "type-graphql";
import { MyContext } from "../types";
import { isAuth } from "../middleware/isAuth";
import { getConnection } from "typeorm";

@ObjectType()
class ImageError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class ImageResponse {
  @Field(() => [ImageError], { nullable: true })
  errors?: ImageError[];

  @Field(() => Image, { nullable: true })
  image?: Image;
}

@InputType()
class ImageInput {
  @Field()
  imgSmall: string;
  @Field()
  capturedBy: string;
  @Field()
  ownerProf: string;
  @Field()
  ownerName: string;
  @Field()
  regularImage: string;
  @Field()
  imgDownload: string;
}

//Declaring crud/other database related operations/tasks.
@Resolver()
export class ImageResolver {
  //Read all images
  @Query(() => [Image])
  async images(): Promise<Image[]> {
    return Image.find();
  }

  @Query(() => [Image])
  @UseMiddleware(isAuth)
  async imageByCreator(@Ctx() { req }: MyContext): Promise<Image[]> {
    return Image.find({ creatorId: req.session.userId });
  }

  //Mutations are updating.deleting and adding data
  @Mutation(() => ImageResponse)
  @UseMiddleware(isAuth)
  async createImage(
    @Arg("input") input: ImageInput,
    @Ctx() { req }: MyContext
  ): Promise<ImageResponse> {
    let image: any;
    try {
      // return Image.create({
      //   ...input,
      //   creatorId: req.session.userId,
      // }).save();
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Image)
        .values({
          ...input,
          creatorId: req.session.userId,
        })
        .returning("*")
        .execute();
      image = result.raw[0];
    } catch (err) {
      if (err.code === "23505") {
        return {
          errors: [
            {
              field: "imageDuplication",
              message: "Already added to your collection",
            },
          ],
        };
      }
    }
    return { image };
  }

  //Delete image
  @Mutation(() => Boolean)
  async deleteImage(@Arg("id") id: number): Promise<boolean> {
    await Image.delete(id);
    return true;
  }
}
