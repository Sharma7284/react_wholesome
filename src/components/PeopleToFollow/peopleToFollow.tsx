import { Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import apiInstance from "../../core/apiService.ts";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";

const PeopleToFollow = ({ id }: any) => {
  const [popularData, setPopularData] = useState([]);

  useEffect(() => {
    apiInstance
      .post(`posts/getPostsByCategory`, {
        pageNumber: 1,
        postCategoryId: id,
      })
      .then((res) => {
        setPopularData(res.data.data);
      });
  }, [id]);

  return (
    <div className="flex flex-col gap-4">
      <Text fontSize="2xl" className="font-bold">
        <FontAwesomeIcon icon={faThumbTack}></FontAwesomeIcon> People to follow
      </Text>
      <div className="flex flex-col gap-6">
        {popularData.map((m: any, i: any) => (
          <div key={i}>
            <div>
              <Text fontSize={"xl"} className="line-clamp-2">{`#${i + 1} ${
                m?.title
              }`}</Text>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleToFollow;
