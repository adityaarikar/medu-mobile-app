import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import Header from '../components/Header';
import SubjectComponents from './../components/SubjectComponent';
import {
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  BannerAdSize,
} from 'react-native-google-mobile-ads';

const SubjectScreen = ({navigation}) => {

  return (
    <View style={styles.mainScreenContainer}>
      {/* <Header text="Subjects" withBack={false}>
      </Header> */}
      <SubjectComponents navigation={navigation} />
          
      <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
        <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.BANNER} />
      </View>
    </View>
  );
};

export default SubjectScreen;

const styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerStyle: {
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
