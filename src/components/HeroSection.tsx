import { Image, useWindowDimensions, View } from 'react-native';
import Text from './Text';

const HeroSection = () => {
  const { width } = useWindowDimensions();
  return(
    <View style={{ paddingHorizontal: 10, width }}>
      <View style={{ backgroundColor: '#f0f0f0', borderRadius: 24, height: 150, overflow: 'hidden' }}>
        <Image style={{ flex: 1 }} source={{ uri: 'https://www.politico.com/dims4/default/603bae4/2147483647/resize/817x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F1e%2F9a%2F775a85324c71965b1fdac62afa39%2Fcapitol-riot-oath-keepers-33859.jpg' }} />
      </View>
      <View style={{ padding: 6 }}>
        <Text color='tomato' fontSize={26} fontWeight='700' style={{ marginTop: 6 }}>BREAKING NEWS</Text>
        <Text fontSize={19} fontWeight='500' opacity={0.9} style={{ marginTop: 4 }}>Why Jan. 6 is mostly absent from the midterms</Text>
        <Text color='#000' fontSize={15} fontWeight='400' opacity={0.3} style={{ lineHeight: 17, marginTop: 10 }}>Most House Republicans voted for Trump-backed election challenges after a violent riot. Less than 2 percent of broadcast TV spending this cycle has focused on it.</Text>
        <View style={{ backgroundColor: '#000', height: 2, marginTop: 16, opacity: 0.04 }}></View>
      </View>
    </View>
  )
};

export default HeroSection;