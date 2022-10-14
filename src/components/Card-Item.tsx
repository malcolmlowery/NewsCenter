import { Image, Pressable, useWindowDimensions, View, ViewStyle } from "react-native";
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import Text from "./Text";

interface CardItemI {
  handlePressBookmarkButton: () => void
  handleNavigationToArticle: () => void
  datePublished: string
  isBookmarked: boolean
  image: string
  summaryText: string
  style?: ViewStyle
}

const CardItem = ({ 
  handlePressBookmarkButton,
  handleNavigationToArticle,
  datePublished,
  isBookmarked, 
  image,
  summaryText, 
  style }: CardItemI) => {
  const { width } = useWindowDimensions();

  return(
    <View style={{ marginBottom: 12 }}>
      <Pressable onPress={handleNavigationToArticle} style={{ alignItems: 'center', flexDirection: 'row' }}>
        <Image style={{ borderRadius: 11, flex: 1, height: 57, maxWidth: 74 }} source={{ uri: image }} />
        <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
          <View style={{ width: 240 }}>
            <Text fontWeight='500'>{summaryText}</Text>
            <Text fontSize={13} fontWeight='400' opacity={0.4} style={{ marginTop: 3}}>{datePublished}</Text>
          </View>
          <Pressable onPress={handlePressBookmarkButton} style={{ alignItems: 'flex-start', flex: 1, justifyContent: 'center' }}>
            <Ionicons color={isBookmarked ? '#39ACFF' : '#e0e0e0'} name='bookmark' size={25} />
          </Pressable>
        </View>
      </Pressable>
      <View style={{ backgroundColor: '#000', height: 1, marginTop: 12, opacity: 0.04 }}></View>
    </View>
  )
};

export default CardItem;