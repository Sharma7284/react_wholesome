import React from "react";
import { Input } from "@chakra-ui/react";

const SearchBox = ({ placeholder }: any) => {
  return (
    <div className="mb-4 mx-4">
      <Input type="text" variant={"filled"} placeholder={placeholder} />
    </div>
  );
};

export default SearchBox;
