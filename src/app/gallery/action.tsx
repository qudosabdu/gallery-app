"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export async function AddTags(publicId: string, tag: boolean) {
  if (tag) {
    await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
  } else {
    await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
  }

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
  revalidatePath("/gallery");
}



// export async function DeleteImage(publicId: string) {
//   await cloudinary.v2.uploader.destroy(publicId);
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("done");
//     }, 1000);
//   });
//   revalidatePath("/gallery");
// }

export async function AddAlbum(album: string, image: string) {
  await cloudinary.v2.api.create_folder(album);
  await cloudinary.v2.uploader.rename(image, `${album}/deleted`);
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
  revalidatePath("/gallery");
}

// export async function DeleteAlbum(album: string, image: string) {
//   await cloudinary.v2.api.delete_folder(album);
//   await cloudinary.v2.uploader.rename(images, `${album}/deleted`);
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("done");
//     }, 1000);
//   });
//   revalidatePath("/gallery");
// }
