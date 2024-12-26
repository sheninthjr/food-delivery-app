import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RightArrowIcon = (props: any) => (
  <Svg
    width={18}
    height={18}
    viewBox="-77 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M98 460L64 426 227 262 64 98 98 64 294 262 98 460Z" />
  </Svg>
);
export default RightArrowIcon;
