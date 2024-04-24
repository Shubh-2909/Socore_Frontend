import { multiFormatDateString } from "../../lib/utils";
import Loader from "../../shared/Loader";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import PostStats from "../../shared/PostStats";

const PostDetails = ({ post }) => {
  const [isPending, setIsPending] = useState(false);
  const posts = {
    caption : "Hey , I am in Spain",
    tags : ["Spain" , "Enjoying"],
  }
  const user = {
    id:"yqw98"
  }


  const handleDeletePost = () => {};
  return (
    <div className="post_details-container">
      {isPending ? (
        <Loader />
      ) : (
        <div className="post_details-card">
          <img
            src="/assets/spain.jpg"
            alt="post"
            className="post_details-img"
          />

          <div className="post_details-info">
            <div className="flex-between w-full">
              <Link to={`/profile`} className="flex items-center gap-3">
                <img
                  src={post || "/assets/profile.jpg"}
                  className="rounded-full w-12 lg:h-12"
                />

                <div className="flex flex-col">
                  <p>Shubh Shubhanjal</p>
                  <div>
                    <p>{multiFormatDateString(new Date().toUTCString())}</p>
                    <div className="flex">
                      <IoLocation className="mt-1" />
                      <p className="ml-2">Spain</p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="flex-center gap-3">
                <Link to={`/update-post/:id`}>
                  <img
                    src="/assets/edit.svg"
                    alt="edit"
                    width={25}
                    height={25}
                  />
                </Link>
                <button
                  onClick={handleDeletePost}
                  className="ghost_details-delete_btn"
                >
                  <img
                    src="/assets/delete.svg"
                    alt="delete"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
            <hr className="border w-full border-dark-4/80" />
            <div className="flex flex-col flex-1 w-full small-medium lg:base-regular">
              <p>{posts.caption}</p>
              <ul className="flex gap-1 mt-2">
                {posts.tags.map((tag) => (
                  <li key={tag} className="text-light-3">
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full">
               <PostStats/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
