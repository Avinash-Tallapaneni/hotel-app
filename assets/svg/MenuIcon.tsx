import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const MenuIcon = ({
  strokeWidth = 1.5,
  stroke = '#101010',
  ...props
}: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeWidth={strokeWidth}
      d="M5 10.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM19 10.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM12 10.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
    />
  </Svg>
);
export default MenuIcon;
