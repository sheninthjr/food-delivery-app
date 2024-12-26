import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LeftArrowIcon = (props:any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.6113 18.8184L8.61133 11.8184L15.6113 4.81836"
      stroke="#181C2E"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default LeftArrowIcon;
