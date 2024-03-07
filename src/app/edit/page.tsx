import { TabsDemo } from "./tabs";

function Page({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) {
  console.log(publicId);
  return (
    <>
      <div className="py-4 px-4">
        <h1 className="text-3xl font-semibold tracking-tighter">
          Edit Picture
        </h1>
      </div>
      <TabsDemo src={publicId} />
    </>
  );
}

export default Page;
