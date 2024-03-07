"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CldImage } from "next-cloudinary";

export function TabsDemo({ src }: { src: string }) {
  return (
    <Tabs defaultValue="original" className="w-full py-4 px-4">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="oil">Oil</TabsTrigger>
        <TabsTrigger value="blur">Blur</TabsTrigger>
        <TabsTrigger value="gray">Gray</TabsTrigger>
      </TabsList>
      <div className="py-4 px-4">
        <TabsContent value="original">
          <CldImage
            width="400"
            height="400"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            priority
          />
        </TabsContent>
        <TabsContent value="oil">
          {/* view image */}
          <CldImage
            width="400"
            height="400"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            priority
            oilPaint={true}
          />
        </TabsContent>
        <TabsContent value="blur">
          {/* view image */}
          <CldImage
            width="400"
            height="400"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            priority
            blur={500}
          />
        </TabsContent>
        <TabsContent value="gray">
          {/* view image */}
          <CldImage
            width="400"
            height="400"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            priority
            grayscale={true}
          />
        </TabsContent>
      </div>
    </Tabs>
  );
}

// "use client";
// import { CldUploadButton, CldImage } from "next-cloudinary";

// function Tabs() {
//   return (
//     <div className="py-4 px-4"></div>
//   );
// }

// export default Tabs;

// {/* view image */}
// <CldImage
// width="400"
// height="400"
// src={src}
// sizes="100vw"
// alt="Description of my image"
// priority
// blur={500}
// />
