import React, { useReducer } from "react";

import { NextPage } from "next";
import Link from "next/link";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import GoogleLogin from "react-google-login";
import { Discover } from "./Discover";
import { SuggestedAccounts } from "./SuggestedAccounts";
import { Footer } from "./Footer";

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = React.useState(true);
  const userProfile = false;

  const normalLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-poiner font-semibold text-[#f51997] rounded";

  return (
    <div>
      <button
        type="button"
        className="block xl:hidden m-2 ml-4 mt-3"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </button>
      {showSidebar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="text-xl hidden xl:block">For you</span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className="px-2 py-4 xl:block">
              <p className="text-gray-400">
                Log in to like and comment on videos
              </p>
              <div className="pr-4">
                {/* <GoogleLogin
                  clientId="soddy"
                  render={renderProps => (
                    <button
                      className="bg-white text-lg text-[#f51997] border-[1px] border-[#f51997] font-semibold px-6 py-3 rounded-md w-full mt-3 hover:text-white hover:bg-[#f51997] cursor-pointer"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >Log in
                    </button>
                  )}
                  onSuccess={() = {}}
                  onFailure={() = {}}
                  cookiePolicy="single_host_origin"
                /> */}
              </div>
            </div>
          )}

          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};
