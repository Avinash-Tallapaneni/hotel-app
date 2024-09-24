import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const RIghtArrowIcon = ({
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
      d="m8.91 20.42 6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.58"
    />
  </Svg>
);
export default RIghtArrowIcon;
