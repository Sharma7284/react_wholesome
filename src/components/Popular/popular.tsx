import React, { useEffect, useState } from "react";
import apiInstance from "../../core/apiService.ts";
import { Text } from "@chakra-ui/react";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Popular = ({ id }: any) => {
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
        <FontAwesomeIcon icon={faArrowTrendUp}></FontAwesomeIcon> Popular
      </Text>
      <div className="flex flex-col gap-6">
        {popularData.map((m: any, i: any) => (
          <div key={i}>
            <div>
              <Text fontSize={"xl"}>{`#${i + 1} ${m?.title}`}</Text>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
