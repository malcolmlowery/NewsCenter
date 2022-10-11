import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import CardItem from '../components/Card-Item';

const Newsfeed = () => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false); 

  return(
    <ScrollView style={{ backgroundColor: '#fff', paddingTop: 10 }} contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <CardItem 
          handlePressBookmarkButton={() =>  setIsBookmarked(!isBookmarked)} 
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
      </View>
    </ScrollView>
  )
};

export default Newsfeed;