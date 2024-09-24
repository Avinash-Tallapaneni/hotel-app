import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const WifiIcon = ({
  strokeWidth = 1.5,
  stroke = '#101010',
  ...props
}: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 8.3c3.025-2.342 6.975-2.342 10 0M6.333 10.875c2.225-1.717 5.117-1.717 7.342 0M8.167 13.45c1.108-.858 2.558-.858 3.666 0"
    />
    <Path
      stroke="#101010"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M7.5 18.333h5c4.167 0 5.833-1.666 5.833-5.833v-5c0-4.167-1.666-5.833-5.833-5.833h-5c-4.167 0-5.833 1.666-5.833 5.833v5c0 4.167 1.666 5.833 5.833 5.833Z"
    />
  </Svg>
);
export default WifiIcon;
