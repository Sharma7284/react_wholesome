import { Center, Divider } from "@chakra-ui/react";
import React from "react";

const Design = () => {
  return (
    <div className="max-w-[1540px] w-full mx-auto my-8 max-sm:mt-0">
      <div className="flex gap-2">
        <div className="flex-1 flex flex-col gap-2">
          <div className="bg-[#ff00ff]">1</div>
          <Divider></Divider>
          <div className="bg-[#ff00ff]">2</div>
        </div>
        <Center>
          <Divider orientation="vertical"></Divider>
        </Center>
        <div className="flex-1 bg-black">3</div>
        <Center>
          <Divider orientation="vertical"></Divider>
        </Center>
        <div className="flex-1 flex flex-col gap-2">
          <div className="bg-[#ffd]">4</div>
          <Divider></Divider>
          <div className="bg-[#ffd]">5</div>
        </div>
      </div>
    </div>
  );
};

export default Design;
