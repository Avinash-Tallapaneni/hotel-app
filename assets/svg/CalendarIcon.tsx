import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CalendarIcon = ({
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
      d="M8 2v3M16 2v3M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5ZM3.5 9.09h17"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={(strokeWidth = 2)}
      d="M15.695 13.7h.009M15.695 16.7h.009M11.995 13.7h.01M11.995 16.7h.01M8.294 13.7h.01M8.294 16.7h.01"
    />
  </Svg>
);
export default CalendarIcon;
