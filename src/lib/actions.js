"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {



  const { title, desc, slug, userId } = Object.fromEntries(formData)
  // console.log(title, desc, slug, userId)

  connectToDb()
  try {
    const exist = await Post.findOne({ slug: slug })
    if (exist) {
      throw new Error('post already exist')
    } else {

      const post = await Post.create({
        title: title,
        desc: desc,
        slug: slug,
        userId: userId
      })
      console.log('post created')
      post.save()
      revalidatePath('/blog')
    }


  } catch (err) {
    console.log(err)
    return { error: 'failed to add post' }
  }


}