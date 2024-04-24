import React from "react";
import PostCard from "../../shared/PostCard";
import Loader from "../../shared/Loader"; // Assuming Loader is a React component

const Home = () => {
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          <ul className="flex flex-col flex-1 gap-9 w-full">
            <li>
              {/* Example of passing props to PostCard component */}
              <PostCard title="Example Post" content="Lorem ipsum dolor sit amet." />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

