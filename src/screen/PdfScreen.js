import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import PdfComponent from '../components/PdfComponent';

const PdfScreen = props => {
  return (
    <View>
      <Header
        text={props.route.params.name}
        withBack={true}
        onPress={props.navigation}
      />
      <PdfComponent pdfLink={props.route.params.pdfLink} />
    </View>
  );
};

export default PdfScreen;

const styles = StyleSheet.create({});
