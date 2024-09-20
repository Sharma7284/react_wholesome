import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import apiInstance from "../../core/apiService.ts";
import { Input, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import APP_LOGO from "../../assets/images/app_logo.png";

const Header = () => {
  //   const [list, setList] = useState([]);
  const { toggleColorMode, colorMode } = useColorMode();

  useEffect(() => {
    handleSearch();
  }, []);

  //   Search website
  const handleSearch = async () => {
    try {
      const { data } = await apiInstance.post(`articles/getArticles`, {});
      if (data) {
        // setList(data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="flex justify-between items-center max-w-[1540px] mx-auto py-4">
      <div>
        <img src={APP_LOGO} className="h-16" alt="" />
      </div>
      <div>
        <Input variant="filled" placeholder="Search" className="rounded-full" />
      </div>
      <div className="flex items-center gap-4">
        <IconButton
          aria-label="toggle theme"
          rounded="full"
          size="sm"
          onClick={toggleColorMode}
          icon={
            <FontAwesomeIcon
              icon={colorMode === "dark" ? faSun : faMoon}
              className="text-2xl"
            />
          }
        ></IconButton>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
          ></MenuButton>
          <MenuList>
            <MenuItem>Community</MenuItem>
            <MenuItem>Login</MenuItem>
            <MenuItem>Register</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
