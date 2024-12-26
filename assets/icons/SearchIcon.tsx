import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SearchIcon = (props:any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.1111 18.2222C15.0385 18.2222 18.2222 15.0385 18.2222 11.1111C18.2222 7.18375 15.0385 4 11.1111 4C7.18375 4 4 7.18375 4 11.1111C4 15.0385 7.18375 18.2222 11.1111 18.2222Z"
      stroke="#A0A5BA"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 20L16.1333 16.1333"
      stroke="#A0A5BA"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SearchIcon;
