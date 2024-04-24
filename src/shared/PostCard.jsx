import React from "react";
import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { formatDateString  , multiFormatDateString} from "../lib/utils";
import PostStats from "./PostStats";

const PostCard = ({ post }) => {
  const posts = {
    caption : "Hey , I am in Spain",
    tags : ["Spain" , "Enjoying"],
  }
  const user = {
    id:"yqw98"
  }

  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to={`/profile`}>
            <img
              src={post || "/assets/profile.jpg"}
              className="rounded-full w-12 lg:h-12"
            />
          </Link>

          <div className="flex flex-col">
            <p>
                Shubh Shubhanjal
            </p>
            <div>
              <p>
                {multiFormatDateString(new Date().toUTCString())}
              </p>
              <div className="flex">
                <IoLocation className="mt-1"/>
                <p className="ml-2">Spain</p>
              </div>
            </div>
          </div>
        </div>
        <Link to={`/update-post/:id`}>
          <img src="/assets/edit.svg" alt="edit" width={20} height={20} />
        </Link>
      </div>
      <Link to={"/posts/:id"}>
        <div className="small-medium lg:base-medium py-5">
          <p>{posts.caption}</p>
          <ul className="flex gap-1 mt-2">
           {posts.tags.map((tag)=> (
            <li key={tag} className="text-light-3">#{tag}</li>
           ))}
          </ul>
        </div>
        <img src={posts.Imgaeurl || "/assets/spain.jpg" } className="post-card_img" alt="Post image" />
      </Link>

      <PostStats post={posts} userId={user.id}></PostStats>
    </div>
  );
};

export default PostCard;
