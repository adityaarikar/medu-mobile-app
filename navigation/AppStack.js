import React,{useContext} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from './AuthProvider';


import SubjectScreen from '../src/screen/SubjectScreen';
import ChapterScreen from '../src/screen/ChapterScreen';
import TopicScreen from '../src/screen/TopicScreen';
import PdfScreen from '../src/screen/PdfScreen';
import VideoScreen from '../src/screen/VideoScreen';

const Stack = createStackNavigator();

const AppStack = () => {

  const {user, logout} = useContext(AuthContext);

  return (
    <Stack.Navigator initialRouteName="Subject">
      <Stack.Screen
        name="Subject"
        component={SubjectScreen}
        options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#000',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 22,
          fontWeight: 'bold',
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <MaterialCommunityIcons
              name="logout"
              size={25}
              backgroundColor="#fff"
              color="#000"
              onPress={() => logout()}
            />
          </View>
        ),
      }}
      />
      <Stack.Screen
        name="Chapter"
        component={ChapterScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Topic"
        component={TopicScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PDF"
        component={PdfScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Video"
        component={VideoScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
