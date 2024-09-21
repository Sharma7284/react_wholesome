import React, { useEffect } from "react";

const CommunityTabDesign = ({ data }: any) => {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    data && (
      <div>
        {data?.length > 0 ? (
          data?.map((m: any, i: any) => <p key={i}>{m?.label}</p>)
        ) : (
          <p>{data?.label}</p>
        )}
      </div>
    )
  );
};

export default CommunityTabDesign;
