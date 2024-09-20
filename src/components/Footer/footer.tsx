import { Divider, Link, useColorMode } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <footer
      className={`px-12 pt-16 pb-12 ${
        colorMode === "light"
          ? "bg-[#fafafa]"
          : "shadow-md-[-10px_0px_0px_0px_rgba(255,255,255,1)]"
      }`}
    >
      <div className="flex gap-8 w-full max-w-[1540px] mx-auto">
        <div className="flex-1">
          <div>
            <h2 className="text-2xl font-bold">Wholesome</h2>
            <p>
              Your number one site for selling and buying clothes, cosmetics and
              home goods.
            </p>
          </div>
        </div>
        <Divider orientation="vertical" />
        <div className="flex-[3] flex flex-col gap-12">
          <div className="flex gap-12">
            <div className="flex-1">
              <p className="font-bold">Buy</p>
              <ul>
                <li>Create a profile</li>
                <li>Set up payment type</li>
                <li>Inbox</li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="font-bold">Sell</p>
              <ul>
                <li>Create a profile</li>
                <li>List your items</li>
                <li>Boost your items</li>
              </ul>
            </div>
            <div className="flex-1"></div>
          </div>
          <div className="flex items-end gap-12">
            <div className="flex-1">
              <p className="font-bold">Help</p>
              <ul>
                <li>
                  <Link href="">FAQ</Link>
                </li>
                <li>Customer service</li>
                <li>How to guides</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="flex-1">
              {/* <p>Sell</p> */}
              <ul>
                <li>Terms and conditions</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="font-bold">Follow us</p>
              <ul className="flex gap-4">
                <li>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2xl"
                  ></FontAwesomeIcon>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2xl"
                  ></FontAwesomeIcon>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="2xl"
                  ></FontAwesomeIcon>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
