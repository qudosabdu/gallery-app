// import Upload from "./upload";
import cloudinary from "cloudinary";
import View from "../gallery/view";

async function Page() {
  interface MyImage {
    public_id: string;
    tags: string[];
  }

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
        {/* <Upload /> */}
      </div>

      <div className="columns-4 gap-4 space-y-4 mx-auto px-4">
        {res.resources.map((image) => (
          <div key={image.public_id} className="">
            <View src={image.public_id} tag = {image.tags}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default Page;
