import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';

const PdfComponent = props => {
  const source = {
    uri: props.pdfLink,
    cache: true,
  };

  return (
    <View style={styles.container}>
      <Pdf
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
        trustAllCerts={false}
        source={source}
        style={{
          flex: 1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      />
    </View>
  );
};

export default PdfComponent;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: Dimensions.get('window').height - 100,
    width: '100%',
  },
});
