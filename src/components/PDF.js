import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';

const PDF = () => {
  const source = {
    uri: 'https://firebasestorage.googleapis.com/v0/b/m-edu-6ab12.appspot.com/o/pdf%2FResume.pdf?alt=media&token=3a7ab242-1e30-4bd6-88c0-6e99db893835',
  };

  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

export default PDF;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
