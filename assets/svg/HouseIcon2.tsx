import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const HouseIcon2 = ({
  strokeWidth = 1.5,
  stroke = '#101010',
  ...props
}: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={strokeWidth}
      d="M2 22h20"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={strokeWidth}
      d="M2.95 22 3 9.97c0-.61.29-1.19.77-1.57l7-5.45a2.01 2.01 0 0 1 2.46 0l7 5.44c.49.38.77.96.77 1.58V22"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={strokeWidth}
      d="M13 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5ZM9.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1ZM16.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={strokeWidth}
      d="m19 7-.03-3h-4.4"
    />
  </Svg>
);
export default HouseIcon2;