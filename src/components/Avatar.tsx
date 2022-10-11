import { Image, View, ViewStyle } from 'react-native';

interface AvatarI {
  borderRadius: number
  height: number
  style: ViewStyle
  uri: string
  width: number
}

const Avatar = ({
  height = 32,
  width = 32,
  borderRadius = height / 2,
  style,
  uri,
}: AvatarI) => {
  return(
    <View style={[
      style, { 
      borderRadius, 
      height, 
      width, 
      overflow: 'hidden' }]}>
      <Image style={{ height, width }} source={{ uri }} />
    </View>
  )
};

export default Avatar;