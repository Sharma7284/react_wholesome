import React from "react";
import DUMMYIMG from "../../../assets/images/dummy_img.jpg";

const TabContainerDesign = ({ data }: any) => {
  return (
    <div className="grid grid-cols-3 gap-12 max-sm:grid-cols-2">
      {data?.length > 0 &&
        data?.map((m: any, i: any) => (
          <div
            key={i}
            className="flex flex-col gap-2 max-w-[100%] mx-auto w-[-webkit-fill-available]"
          >
            <div className="h-full w-full max-h-[250px]">
              <img
                src={m?.postImage || DUMMYIMG}
                alt=""
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-xl font-bold text-left line-clamp-2">
                {m?.title}
              </p>
            </div>
            {/* <div className="flex gap-4">
              <p className="text-2xl text-left">{m?.author_name}</p>
              <p>{new Date(m?.created_at)?.toISOString().split(`T`)[0]}</p>
            </div> */}
            <div className="flex gap-4 justify-between">
              <p>{m?.postCategoryId?.name}</p>
              <p>{new Date(m?.created_at)?.toISOString().split(`T`)[0]}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TabContainerDesign;
