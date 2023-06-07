import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopicComponent from '../components/TopicComponent';
import {
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  BannerAdSize,
} from 'react-native-google-mobile-ads';

const TopicScreen = props => {
  return (
    <View style={styles.mainScreenContainer}>
      <Header
        text={props.route.params.name}
        withBack={true}
        onPress={props.navigation}
        style
      />
      <TopicComponent
        navigation={props.navigation}
        topics={props.route.params.topics}
      />
      <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
        <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.BANNER} />
      </View>
    </View>
  );
};

export default TopicScreen;

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
