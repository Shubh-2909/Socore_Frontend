import React, { useState } from "react";
import Loader from "../../shared/Loader";
import FileUploader from "../../shared/FileUploader";

const EditPost = () => {
  let obj = {
    caption: "",
    url: "",
    location: "",
    tags: "",
  };

  const [isLoading, setIsLoading] = useState(true);
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");

  const handleCaption = (event) => {
    setCaption(event.target.value);
  };
  const handleUrl = (event) => {
    setUrl(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleTags = (event) => {
    setTags(event.target.value);
  };

  const handleSubmit = () => {
    obj = {
      caption: caption,
      location: location,
      tags: tags,
    };
    setCaption("");
    setLocation("");
    setTags("");
    console.log(obj);
  };

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex gap-3 w-full">
          <img src="/assets/add-post.svg" height={36} width={36} alt="add" />
          <h2 className="h3-bold md:h2-bold text-left w-full">Edit Post</h2>
        </div>
        <div className="max-w-5xl w-full gap-3">
          <div className="mb-5">
            <label
              htmlFor="caption"
              className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
            >
              Caption
            </label>
            <textarea
              rows={5}
              columns={50}
              id="caption"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="What a nice day!!"
              required
              value={caption}
              onChange={handleCaption}
            />
          </div>
        </div>
        <div className="max-w-5xl w-full gap-3">
          <div className="mb-5">
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
            >
              Add Location
            </label>
            <textarea
              rows={2}
              columns={10}
              id="location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Banglore"
              required
              value={location}
              onChange={handleLocation}
            />
          </div>
        </div>
        <div className="max-w-5xl w-full gap-3">
          <div className="mb-5">
            <label
              htmlFor="hashtags"
              className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
            >
              Add Hashtags (separated by space)
            </label>
            <textarea
              rows={2}
              columns={10}
              id="hashtags"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nice RCB Dashing"
              required
              value={tags}
              onChange={handleTags}
            />
          </div>
        </div>
        <button
            type="submit"
            class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            onClick={handleSubmit}
          >Edit post</button>
      </div>
    </div>
  );
};

export default EditPost;
