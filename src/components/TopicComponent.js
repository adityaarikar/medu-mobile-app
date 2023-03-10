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
import constants from '../constants';

const TopicComponent = props => {
  const navigation = props.navigation;

  const goToPDF = (pdfLink, name) => {
    return navigation.navigate('PDF', {pdfLink, name});
  };
  const goToVideo = (videoId, name) => {
    return navigation.navigate('Video', {videoId, name});
  };

  console.log(props.topics);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        data={props.topics}
        renderItem={({item}) => (
          <View>
            <CustomCard style={styles.card}>
              <Text style={styles.title}>{item.name}</Text>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => goToVideo(item.englishVideoLink, item.name)}>
                  <Text style={styles.btnTitle}>English Video</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => goToVideo(item.hindiVideoLink, item.name)}>
                  <Text style={styles.btnTitle}>Hindi Video</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => goToPDF(item.pdfLink, item.name)}>
                  <Text style={styles.btnTitle}>PDF</Text>
                </TouchableOpacity>
              </View>
            </CustomCard>
          </View>
        )}
        keyExtractor={item => item.tId}
      />
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
    textAlign: 'center',
    fontFamily: constants.primaryFont,
  },
  btnContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  btn: {
    width: 150,
    height: 50,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: 'white',
    marginTop: 20,
  },
  btnTitle: {
    fontSize: 17,
    fontFamily: constants.boldFont,
  },
});
