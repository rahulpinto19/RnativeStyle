import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>What's New js</Text>
        </View>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            In the serene twilight, a gentle breeze rustles through the leaves,
            carrying the sweet scent of blooming flowers. Nature's orchestra
            plays, creating a moment of tranquil beauty and serenity.
          </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>openWebsite('facebook.com')}>
                <Text>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>openWebsite('facebook.com')}>
                <Text>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,

  },
  card: {
    width:350,
    height:360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16,
  },
  elevatedCard: {
    backgroundColor:'#ffffff',
    elevation:3,
    shadowOffset:{
        width:1,
        height:1,
    },
    shadowColor:'#333',
    shadowOpacity:0.4,
  },
  headingContainer: {
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  headerText:{
    color:'#000',
    fontSize:16,
    fontWeight:'600',
  },
  cardImage: {height: 190},
  bodyContainer: {
    padding:10,
  },
  footerContainer: {
    padding:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  socialLinks:{
    fontSize:14,
    color:'#000',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6,
  }
});
