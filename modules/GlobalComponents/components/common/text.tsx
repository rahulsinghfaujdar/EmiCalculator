import React from 'react';
import { Text as RNText, TextStyle, TouchableOpacity } from 'react-native';

interface CustomTextProps {
  style?: TextStyle;
  children: React.ReactNode;
  onPress?: () => void;
  activeOpacity?: number;
}

const CustomText: React.FC<CustomTextProps> = ({ style, children, onPress, activeOpacity = 0.8 }) => {
  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
        <RNText style={style}>{children}</RNText>
      </TouchableOpacity>
    );
  }
  return <RNText style={style}>{children}</RNText>;
};

export default CustomText;
