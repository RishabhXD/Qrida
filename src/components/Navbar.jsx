import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl" href="/">
          <img
            src="https://media.discordapp.net/attachments/1088927203477172328/1088927331831255131/qrida.png?width=625&height=625"
            alt=""
            className="w-full h-full"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex"> </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Join Group</a>
      </div>
    </div>
  );
};

export default Navbar;
