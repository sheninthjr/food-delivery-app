import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CartIcon = (props: any) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4 0.999756L1 4.99976V18.9998C1 19.5302 1.21071 20.0389 1.58579 20.414C1.96086 20.789 2.46957 20.9998 3 20.9998H17C17.5304 20.9998 18.0391 20.789 18.4142 20.414C18.7893 20.0389 19 19.5302 19 18.9998V4.99976L16 0.999756H4Z"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1 4.99976H19"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 8.99976C14 10.0606 13.5786 11.078 12.8284 11.8282C12.0783 12.5783 11.0609 12.9998 10 12.9998C8.93913 12.9998 7.92172 12.5783 7.17157 11.8282C6.42143 11.078 6 10.0606 6 8.99976"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CartIcon;
