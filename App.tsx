import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView style = {styles.setbg}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards/>
        <FancyCard/>
        <ContactList/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  setbg:{backgroundColor:'#454545'}
})
export default App;
