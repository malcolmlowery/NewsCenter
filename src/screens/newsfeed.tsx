import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import CardItem from '../components/Card-Item';
import HeroSection from '../components/HeroSection';
import Text from '../components/Text';

const Newsfeed = ({ navigation }) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false); 

  return(
    <ScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
      <View style={{ justifyContent: 'center', paddingTop: 20 }}>
        <HeroSection />
      </View>
      <View style={{ marginTop: 0, paddingTop: 6, paddingHorizontal: 16 }}>
        <Text fontSize={30} fontWeight='600' style={{ marginBottom: 14 }}>Trending</Text>
        <CardItem 
          handlePressBookmarkButton={() =>  setIsBookmarked(!isBookmarked)} 
          handleNavigationToArticle={() => {}}
          datePublished='Oct. 3, 2022'
          isBookmarked={isBookmarked}
          image='https://media14.s-nbcnews.com/i/mpx/2704722219/2022_10/1664969316767_tdy_news_7a_erin_ukraine_russia_221005_1920x1080-hrat4s.jpg' 
          summaryText='Chechen soldiers now fighting alongside Ukrainian forces' />
        <CardItem 
          handlePressBookmarkButton={() =>  setIsBookmarked(!isBookmarked)} 
          datePublished='Oct. 8, 2022'
          isBookmarked={isBookmarked}
          image='https://static01.nyt.com/images/2022/10/09/us/politics/09pol-sundayshows1/merlin_213573555_e76b1b77-3789-4e57-8b69-2348563cbaef-superJumbo.jpg?quality=75&auto=webp'
          summaryText='Arizona Governor Candidates Speak, and More Campaign' />
        <CardItem 
          handlePressBookmarkButton={() =>  setIsBookmarked(!isBookmarked)} 
          datePublished='Oct. 8, 2022'
          isBookmarked={isBookmarked}
          image='https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/13d693017471a1de3203894304b8c71b.jpg'
          summaryText='Nvidia Cancels Cheapest New PC Graphics Card...' />
        <CardItem 
          handlePressBookmarkButton={() =>  setIsBookmarked(!isBookmarked)} 
          datePublished='Oct. 8, 2022'
          isBookmarked={isBookmarked}
          image='https://static01.nyt.com/images/2022/10/09/us/politics/09pol-sundayshows1/merlin_213573555_e76b1b77-3789-4e57-8b69-2348563cbaef-superJumbo.jpg?quality=75&auto=webp'
          summaryText='Arizona Governor Candidates Speak, and More Campaign' />
        <CardItem 
          handlePressBookmarkButton={() =>  setIsBookmarked(!isBookmarked)} 
          datePublished='Oct. 8, 2022'
          isBookmarked={isBookmarked}
          image='https://static01.nyt.com/images/2022/10/09/us/politics/09pol-sundayshows1/merlin_213573555_e76b1b77-3789-4e57-8b69-2348563cbaef-superJumbo.jpg?quality=75&auto=webp'
          summaryText='Arizona Governor Candidates Speak, and More Campaign' />
      </View>
    </ScrollView>
  )
};

export default Newsfeed;