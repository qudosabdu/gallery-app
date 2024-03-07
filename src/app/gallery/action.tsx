"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export async function AddTags(publicId:string, tag: boolean){
    if(tag){
        await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
    }
    else{
        await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
    }

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("done");
        }, 1000);
    });
    revalidatePath("/gallery")

}
