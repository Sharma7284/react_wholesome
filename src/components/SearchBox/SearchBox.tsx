import React from "react";
import { Input } from "@chakra-ui/react";

const SearchBox = ({ placeholder }: any) => {
  return (
    <div>
      <Input type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchBox;
