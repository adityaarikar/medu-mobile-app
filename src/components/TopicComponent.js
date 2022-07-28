import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomCard from './CustomCard';
import PDF from './PDF';

const TopicComponent = props => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <FlatList
        data={props.topics}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => goToChapter(item.topics, item.name)}>
            <CustomCard style={styles.card}>
              <Text style={styles.title}>{item.name}</Text>
              <Button title="Video" />
              <Button title="Pdf" onPress={() => <PDFExample />} />
            </CustomCard>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.cId}
      /> */}
      <PDF />
    </SafeAreaView>
  );
};

export default TopicComponent;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    padding: 20,
    paddingTop: 0,
    paddingBottom: 50,
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    marginVertical: 20,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
  },
});
