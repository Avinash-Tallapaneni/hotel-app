import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CoffeeMugIcon = ({
  strokeWidth = 1.5,
  stroke = '#101010',
  ...props
}: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.825 8.725v6.1a3.508 3.508 0 0 1-3.508 3.508H5.175a3.514 3.514 0 0 1-3.508-3.508v-6.1a3.508 3.508 0 0 1 3.508-3.508h6.142a3.514 3.514 0 0 1 3.508 3.508ZM4.583 3.333V1.875M7.917 3.333V1.875M11.25 3.333V1.875M18.333 10.967a3.514 3.514 0 0 1-3.508 3.508V7.458a3.508 3.508 0 0 1 3.508 3.509ZM1.667 10h12.925"
    />
  </Svg>
);
export default CoffeeMugIcon;
