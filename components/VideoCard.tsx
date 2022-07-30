import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsFillPlayFill, BsFillPauseFill, BsPlay } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

import { Video } from "../types";

interface IProps {
  post: Video;
}
export const VideoCard = ({ post }: IProps) => {
  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
          <div className="md:w-16 md:h-16 w-10 h-10">
            <Link href="/">
              <>
                {post.postedBy.image ? (
                  <Image
                    width={62}
                    height={62}
                    className="rounded-full"
                    src={post.postedBy.image}
                    alt="profile photo"
                    layout="responsive"
                  />
                ) : (
                  <img
                    src="/"
                    alt="avatar"
                    width={62}
                    height={62}
                    className=" border-gray-200 border-2"
                  />
                )}
              </>
            </Link>
          </div>
          <Link href="/">
            <div>
              <p>
                {post.postedBy.userName} {` `}
              </p>
              <GoVerified className="text-blue-400 text-sm" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
