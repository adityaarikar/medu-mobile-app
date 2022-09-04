import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';

const PdfComponent = props => {
  const source = {
    uri: props.pdfLink,
  };

  return (
    <View style={styles.container}>
      <Pdf trustAllCerts={false} source={source} style={styles.pdf} />
    </View>
  );
};

export default PdfComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pdf: {
    width: Dimensions.get('window').width,
    marginBottom: 150,
    height: Dimensions.get('window').height,
  },
});
