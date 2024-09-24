import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const BookmarkIcon = ({
  strokeWidth = 1.5,
  stroke = '#101010',
  ...props
}: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M17 2.44v9.98c0 1.97-1.41 2.74-3.14 1.7l-1.32-.79c-.3-.18-.78-.18-1.08 0l-1.32.79C8.41 15.15 7 14.39 7 12.42V2.44"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M17 2.44v9.98c0 1.97-1.41 2.74-3.14 1.7l-1.32-.79c-.3-.18-.78-.18-1.08 0l-1.32.79C8.41 15.15 7 14.39 7 12.42V2.44"
    />
  </Svg>
);
export default BookmarkIcon;
