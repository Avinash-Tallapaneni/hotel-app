import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const FilledHouseIcon = ({...props}: SvgProps) => (
  <Svg width={20} height={21} fill="none" {...props}>
    <Path
      fill="#4C4DDC"
      d="m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 17.99v-3"
    />
  </Svg>
);

export default FilledHouseIcon;
