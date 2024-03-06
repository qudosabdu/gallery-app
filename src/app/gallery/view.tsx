"use client";
import { CldImage } from "next-cloudinary";

function View({src}:{src: string}) {
  return (
    <div>
      {/* view image */}
      <CldImage
        width="960"
        height="600"
        src={src}
        sizes="100vw"
        alt="Description of my image"
        priority
      />
    </div>
  );
}

export default View;
