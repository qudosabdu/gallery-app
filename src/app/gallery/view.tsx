"use client";
import { CldImage } from "next-cloudinary";
import { AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { AddTags } from "./action";
import { useState } from "react";
import Link from "next/link";
import AlbumDialog from "./albumDialog";

function View({ src, tag }: { src: string; tag: string[] }) {
  const [tags, setTags] = useState(tag.includes("favourite"));

  return (
    <div className="relative">
      {/* view image */}
      <CldImage
        className="rounded-lg w-full h-64 object-cover hover:opacity-75 transition duration-300 ease-in-out cursor-pointer shadow-lg hover:shadow-2xl"
        width="960"
        height="600"
        src={src}
        sizes="100vw"
        alt="Description of my image"
        priority
      />
      {/* edit icons */}
      <div className="absolute top-1 left-1">
        <Link href={`/edit/?publicId=${src}`} passHref>
          <BiEditAlt className="text-blue-500 text-2xl cursor-pointer hover:text-blue-600" />
        </Link>
      </div>


      {/* folder icons */}
      <div className="absolute bottom-1 left-1">
        {/* <Link href={`/gallery/?tag=${src}`} passHref>
        
        </Link> */}
        <AlbumDialog src={src}/>

      </div>

      {/* heart icons */}
      <div
        className="absolute top-1 right-1"
        onClick={() => {
          setTags(!tags);
          AddTags(src, tags);
        }}
      >
        {tags ? (
          <AiFillHeart className="text-red-500 text-2xl cursor-pointer hover:text-red-600" />
        ) : (
          <AiOutlineHeart className="hover:text-red-500 text-2xl duration-300 cursor-pointer" />
        )}
      </div>
    </div>
  );
}

export default View;
