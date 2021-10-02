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
} from "type-graphql";
import { MyContext } from "../types";
import { isAuth } from "../middleware/isAuth";

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
  @Mutation(() => Image)
  @UseMiddleware(isAuth)
  async createImage(
    @Arg("input") input: ImageInput,
    @Ctx() { req }: MyContext
  ): Promise<Image> {
    return Image.create({
      ...input,
      creatorId: req.session.userId,
    }).save();
  }

  //Delete image
  @Mutation(() => Boolean)
  async deleteImage(@Arg("id") id: number): Promise<boolean> {
    await Image.delete(id);
    return true;
  }
}
