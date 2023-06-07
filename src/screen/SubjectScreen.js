import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
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
import home_img from '../../assets/img/Home_vector.png';

const SubjectScreen = ({navigation}) => {

  return (
    <View style={styles.mainScreenContainer}>
      {/* <Header text="Subjects" withBack={false}>
      </Header> */}
      <Image source={home_img} alt="m.edu" style={styles.homeimg} />
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
  homeimg: {
    height: 250,
    width: 250,
    alignSelf: 'center',
  },
});
