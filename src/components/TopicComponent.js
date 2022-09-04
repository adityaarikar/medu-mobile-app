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

const TopicComponent = props => {
  const navigation = props.navigation;

  const goToPDF = (pdfLink, name) => {
    return navigation.navigate('PDF', {pdfLink, name});
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
              <Button title="Video" />
              <Button
                title="Pdf"
                onPress={() => goToPDF(item.pdfLink, item.name)}
              />
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
  },
});
