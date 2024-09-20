import React from "react";

const TabContainerDesign = ({ data }: any) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data?.length > 0 &&
        data?.map((m: any, i: any) => (
          <div
            key={i}
            className="flex flex-col gap-2 max-w-[100%] mx-auto w-[-webkit-fill-available]"
          >
            {m.postImage ? (
              <div className="h-full w-full max-h-[250px]">
                <img
                  src={m.postImage}
                  alt=""
                  loading="lazy"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            ) : (
              <div className="bg-grey"></div>
            )}
            <div className="flex-1">
              <p className="text-xl font-bold text-left line-clamp-2">{m?.title}</p>
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
