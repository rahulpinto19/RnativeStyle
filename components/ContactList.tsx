import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      UID: 12345,
      Name: 'Sparky',
      Status: 'Chasing sunsets',
      ImageURL:
        'https://images.pexels.com/photos/17774309/pexels-photo-17774309/free-photo-of-smiling-man-in-jacket-and-with-camera.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    },
    {
      UID: 67890,
      Name: 'Bella',
      Status: 'Exploring new trails',
      ImageURL:
        'https://images.pexels.com/photos/14193493/pexels-photo-14193493.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    },
    {
      UID: 54321,
      Name: 'Whiskers',
      Status: 'Napping in the sun',
      ImageURL:
        'https://images.pexels.com/photos/15759859/pexels-photo-15759859/free-photo-of-a-film-photograph-of-an-asphalt-road-on-a-countryside-in-summer.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    },
    {
      UID: 98765,
      Name: 'Charlie',
      Status: 'Fetching endless balls',
      ImageURL:
        'https://images.pexels.com/photos/5687494/pexels-photo-5687494.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    },
    {
      UID: 45678,
      Name: 'Luna',
      Status: 'Chasing moonbeams',
      ImageURL:
        'https://images.pexels.com/photos/19804308/pexels-photo-19804308/free-photo-of-aisha_.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({UID, Name, Status, ImageURL}) => (
          <View key={UID} style={styles.userCard}>
            <Image
              source={{
                uri: ImageURL,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{Name}</Text>
              <Text style={styles.userStatus}>{Status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom:4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:3,
    backgroundColor:'#8d3daf',
    padding:8,
    borderRadius:10
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight:14
  },
  userName: {
    fontSize:16,
    fontWeight:'600',
    color:'#ffffff'
  },
  userStatus: {
    fontSize:12,
    color:'#ffff23'
  },
});
