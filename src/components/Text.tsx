import React from 'react';
import { Text as TextItem, ViewStyle } from 'react-native';

interface TextI {
  children: React.ReactNode
  color?: string
  fontWeight?: '400' | '500' | '600' | '700'
  fontSize?: number
  opacity?: number
  style?: ViewStyle
  width?: number
}

const Text = ({ 
  children, 
  color, 
  fontWeight, 
  fontSize, 
  opacity, 
  style, 
  width }: TextI) => {
  return(
    <TextItem style={[
      style, {
      color,
      fontWeight,
      fontSize,
      opacity,
      width,
     }]}>{children}</TextItem>
  )
};

export default Text;