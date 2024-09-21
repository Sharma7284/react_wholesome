import { Text } from "@chakra-ui/react";
import React from "react";
import DUMMYIMG from "../../../assets/images/dummy_img.jpg";

const DashboardTabDesign = ({ data }: any) => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        {data.map((m: any, i: any) => (
          <div key={i} className="flex gap-12 max-sm:flex-col">
            <div className="flex-1">
              <Text fontSize={"2xl"} className="text-start font-bold">
                {m?.title}
              </Text>
              <Text fontSize={"lg"} className="text-start line-clamp-3">
                {m?.description}
              </Text>
            </div>
            <div className="h-[150px] w-[300px] max-sm:w-full border rounded-2xl overflow-hidden">
              <img
                src={m?.postImage || DUMMYIMG}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardTabDesign;
