import { Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CommunityTabDesign = ({ data, isSkeleton = true }: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
    }
  }, [data]);

  return (
    data &&
    data.length > 0 && (
      <div className="flex flex-col gap-4">
        {data?.map((m: any, i: any) => (
          <div
            onClick={() => navigate(`/community/${m?.title.toLowerCase()}`)}
            key={i}
            className="bg-[#f3f4f6] rounded-lg p-4 flex justify-between cursor-pointer"
          >
            <div className="flex">
              <Text fontSize={`xl`} className="text-start font-bold">
                {m.title}
              </Text>
              {/* <Text fontSize={`lg`} className="text-start">
                {m.title}
              </Text> */}
            </div>
            <div className="">
              <Text fontSize={`lg`} className="text-center font-bold">
                {m?.messages?.value}
                {m?.messages?.unit}
              </Text>
              <Text fontSize={`lg`} className="text-start">
                Message
              </Text>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default CommunityTabDesign;
