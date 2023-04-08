import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChapterComponent from '../components/ChapterComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';
import {BannerAd, TestIds, BannerAdSize} from 'react-native-google-mobile-ads';

const ChapterScreen = props => {
  return (
    <View style={styles.mainScreenContainer}>
      <Header
        text={props.route.params.name}
        withBack={true}
        onPress={props.navigation}
      >
            <MaterialCommunityIcons
              name="logout"
              size={25}
              backgroundColor="#fff"
              color="#000"
              onPress={() => logout()}
            />
      </Header>
      <ChapterComponent
        navigation={props.navigation}
        chapters={props.route.params.chapters}
      />
      <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
        <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.BANNER} />
      </View>
    </View>
  );
};

export default ChapterScreen;

const styles = StyleSheet.create({});
