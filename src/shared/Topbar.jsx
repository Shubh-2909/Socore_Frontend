import React from "react";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

const Topbar = () => {
  const user={};
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img src="/assets/logo.svg" alt="logo" width={130} height={30} />
        </Link>
        <div className="flex gap-4">
          
            <BiLogOut size={30} onClick={()=> {
                console.log("Signed Out")
            }}/>
            <Link to={`/profile/${user.id}`} className="flex-center gap-3">
              <img src={user.imageUrl || '/assets/profile.jpg'} alt="profile" className="h-8 w-8 rounded-full" />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
