import React, { useEffect, useState } from "react";
import apiInstance from "../../core/apiService.ts";
import { Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

const Discover = ({ id }: any) => {
  const [discoverData, setDiscoverData] = useState([]);

  useEffect(() => {
    apiInstance.post(`posts/getPostsCategory`, {}).then((res) => {
      setDiscoverData(
        res.data.data?.map((m) => ({ title: m.name?.replace(`Wellness`, ``) }))
      );
    });
  }, [id]);

  return (
    <div className="flex flex-col gap-4">
      <Text fontSize="2xl" className="font-bold">
        <FontAwesomeIcon icon={faCompass}></FontAwesomeIcon> Discover
      </Text>
      <div className="flex flex-wrap gap-4">
        {discoverData.map((m: any, i: any) => (
          <div key={i} className="inline-block">
            <Text
              fontSize={"xl"}
              className="bg-[#f3f4f6] py-2 px-4 rounded-full"
            >
              {m?.title}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
