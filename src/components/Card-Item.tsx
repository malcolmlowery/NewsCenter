import { Image, Pressable, View, ViewStyle } from "react-native";
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import Text from "./Text";

interface CardItemI {
  handlePressBookmarkButton: () => void
  datePublished: string
  isBookmarked: boolean
  image: string
  summaryText: string
  style?: ViewStyle
}

const CardItem = ({ 
  handlePressBookmarkButton,
  datePublished,
  isBookmarked, 
  image, 
  summaryText, 
  style }: CardItemI) => {
  return(
    <View style={[
      style, {
      backgroundColor: '#fff',
      borderRadius: 30,
      height: 348,
      marginBottom: 20,
      shadowColor: '#000',
      shadowRadius: 10,
      shadowOpacity: 0.25,
      shadowOffset: { height: 10, width: 0 },
      width: 373,
    }]}>
      <View style={{ position: 'absolute', zIndex: 100 }}>
        <Image 
          style={{ 
            borderTopRightRadius: 30, 
            borderTopLeftRadius: 30,
            height: 250, 
            width: 373, 
            zIndex: 110, 
          }} 
          source={{ uri: image }} />
        <Image 
          style={{ 
            borderBottomRightRadius: 30, 
            borderBottomLeftRadius: 30,
            height: 100, 
            width: 373, 
            zIndex: 108, 
          }} 
          source={{ uri: image }} />
      </View>

      <View style={{ 
        backgroundColor: 'transparent', 
        bottom: -3, 
        borderBottomRightRadius: 30, 
        borderBottomLeftRadius: 30,
        height: 124, 
        overflow: 'hidden',
        position: 'absolute', 
        padding: 20,
        width: 373, 
        zIndex: 120,
      }}>
        <BlurView style={{ height: 124, position: 'absolute', width: 373 }} tint='dark' intensity={80} />
        <View>
          <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 6 }}>
            <Text color='#fff' fontSize={19} fontWeight='600' width={292}>{summaryText}</Text>
            <Pressable onPress={handlePressBookmarkButton}>
              {<Ionicons color={isBookmarked ? '#39ACFF' : '#39adff9d'} name={isBookmarked ? 'bookmark' : 'bookmark-outline'} size={36} />}
            </Pressable>
          </View>
          <Text color='#fff' fontSize={16} fontWeight='600' opacity={0.65}>{datePublished}</Text>
        </View>
      </View>
    </View>
  )
};

export default CardItem;