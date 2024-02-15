import { Post, User } from "./models";
import { connectToDb } from "./utils";

/**
 * Imports the Post and User models and the connectToDb utility function.
 *
 * The models provide access to the Post and User database tables/collections.
 * connectToDb establishes a connection to the database.
 */


export const getPosts = async () => {
  try {
    connectToDb()
    const posts = await Post.find()
    return posts
  } catch (e) {
    console.log(e);
    throw new Error('failed to get all posts')
  }
}

export const getPost = async (slug) => {
  try {
    connectToDb()
    const post = await Post.findOne({ slug: slug })
    return post
  } catch (e) {
    console.log(e);
    throw new Error('failed to find post')
  }
}


export const getUser = async (id) => {
  try {
    connectToDb()
    const user = await User.findById({ _id: id })
    // console.log(user,'from db');
    return user;
  } catch (e) {
    console.log(e);
    throw new Error('failed to get user')
  }
}

export const getUsers = async () => {
  try {
    connectToDb()
    const users = await User.find()
    return users;
  } catch (e) {
    console.log(e);
    throw new Error('failed to get all users')
  }
}