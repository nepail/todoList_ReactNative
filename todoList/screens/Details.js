import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components";

const Details = ({route, navigation}) => {
  const {data} = route.params;
  return (
    <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}/>
        
      </View>
    </SafeAreaView>
  )
};

export default Details;
