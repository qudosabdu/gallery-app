"use client";
import Image from "next/image";
import { CldUploadButton,  CldImage} from "next-cloudinary";

export default function Home() {

   
  return (
    <div>
      Hello World
      <CldUploadButton uploadPreset="tjg2hgjg" onUploadAdded={(results, widget) => { console.log(results, widget)}}/>
      <CldImage
        width="960"
        height="600"
        src="cld-sample-5"
        sizes="100vw"
        alt="Description of my image"
      />
    </div>
  );
}
