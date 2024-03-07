"use client";
import { useState } from "react";
import { CldUploadButton, CldImage } from "next-cloudinary";

export default function Home() {
  const [image, setImage] = useState("cld-sample-5");

  interface UplaodImage {
    event: "success";
    info: { public_id: string };
  }

  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      min-h-screen
      py-2  
    "
    >
      <CldUploadButton
        uploadPreset="tjg2hgjg"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        onUploadAdded={(results) => {
          let res = results as UplaodImage;
          setImage(res.info.public_id);
        }}
      />

      {/* view image */}
      <CldImage
        width="960"
        height="600"
        src={image}
        sizes="100vw"
        alt="Description of my image"
        priority
      />
    </div>
  );
}
