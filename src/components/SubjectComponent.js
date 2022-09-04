import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomCard from './CustomCard';
import axios from 'axios';
import constants from '../constants';

const SubjectComponent = props => {
  const [subject, setSubjects] = useState();
  const [loading, setLoading] = useState(true);
  const navigation = props.navigation;

  const goToChapter = (chapters, name) => {
    return navigation.navigate('Chapter', {chapters, name});
  };

  const fetchData = async () => {
    const responce = await axios.get(
      'https://m-edu-apis.herokuapp.com/subject',
    );
    const data = responce.data;
    setLoading(false);
    setSubjects(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={subject}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => goToChapter(item.chapters, item.name)}>
              <CustomCard style={styles.card}>
                <Text style={styles.title}>{item.name}</Text>
              </CustomCard>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.sId}
        />
      )}
    </SafeAreaView>
  );
};

export default SubjectComponent;

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
    height: 100,
    marginVertical: 20,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    color: '#000000',
    fontFamily: constants.primaryFont,
  },
});
