import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const LocationIcon = (props: SvgProps) => (
  <Svg width={20} height={21} fill="none" {...props}>
    <Path
      stroke="#4C4DDC"
      strokeWidth={1.5}
      d="M10 11.692a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"
    />
    <Path
      stroke="#4C4DDC"
      strokeWidth={1.5}
      d="M3.017 7.575C4.658.358 15.35.367 16.983 7.583c.959 4.234-1.675 7.817-3.983 10.034a4.328 4.328 0 0 1-6.008 0c-2.3-2.217-4.934-5.809-3.975-10.042Z"
    />
  </Svg>
);

export default LocationIcon;
