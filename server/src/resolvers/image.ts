import { Image } from "../entities/Image";
import { MyContext } from "../types";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";

//Declaring crud/other database related operations/tasks.
@Resolver()
export class ImageResolver {
  //Read all posts
  @Query(() => [Image])
  images(@Ctx() { em }: MyContext): Promise<Image[]> {
    return em.find(Image, {});
  }

  //Mutations are updating.deleting and adding data
  @Mutation(() => Image)
  async createImage(
    @Arg("imgSmall") imgSmall: string,
    @Arg("capturedBy") capturedBy: string,
    @Arg("ownerProf") ownerProf: string,
    @Arg("ownerName") ownerName: string,
    @Arg("regularImage") regularImage: string,
    @Ctx() { em }: MyContext
  ): Promise<Image> {
    const image = em.create(Image, {
      imgSmall,
      capturedBy,
      ownerProf,
      ownerName,
      regularImage,
    });
    await em.persistAndFlush(image);
    return image;
  }

  //Delete Post
  @Mutation(() => Boolean)
  async deleteImage(
    @Arg("id") id: number,
    @Ctx() { em }: MyContext
  ): Promise<boolean> {
    await em.nativeDelete(Image, { id });
    return true;
  }
}
