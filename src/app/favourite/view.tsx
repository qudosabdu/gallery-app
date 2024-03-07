"use client";
import { CldImage } from "next-cloudinary";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AddTags } from "../gallery/action";
import { useState } from "react";


function View({src, tag, fun}:{src: string, tag: string[], fun: any}) {
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
      <div className="absolute top-1 right-1" onClick={()=>{
        setTags(!tags)
        AddTags(src, tags)   
        fun(src)       
      }   
      }>
        {tags ? <AiFillHeart className="text-red-500 text-2xl cursor-pointer hover:text-red-600"/> : <AiOutlineHeart className="hover:text-red-500 text-2xl duration-300 cursor-pointer"/>}
      </div>
    </div>
  );
}

export default View;
