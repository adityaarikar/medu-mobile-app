import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import Header from '../components/Header';
import constants from '../constants';

const VideoScreen = props => {
  const [loading, setLoading] = useState(true);
  const videoId = props.route.params.videoId.replace('https://youtu.be/', '');
  console.log(videoId);
  return (
    <View>
      <Header
        text={props.route.params.name}
        withBack={true}
        onPress={props.navigation}
      />
      {loading ? (
        <ActivityIndicator size="large" color={constants.primaryColor} />
      ) : null}
      <YoutubePlayer
        height={300}
        videoId={videoId}
        onReady={() => setLoading(false)}
      />
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({});
