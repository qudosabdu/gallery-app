// import Upload from "./upload";
import cloudinary from "cloudinary";
import View from "../gallery/view";
import FavouriteList from "./favouriteList";

export interface MyImage {
  public_id: string;
  tags: string[];
}


async function Page() {
  
  let res = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("public_id", "desc")
    // .max_results(5)
    .with_field("tags")
    .execute()) as { resources: MyImage[] };
    // console.log(res.resources);
  return (
    <>
      <div className="py-4 px-4 flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tighter">Favourites</h1>
      </div>
      <FavouriteList resources={res.resources} />
    </>
  );
}

export default Page;
