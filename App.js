import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SubjectScreen from './src/screen/SubjectScreen';
import ChapterScreen from './src/screen/ChapterScreen';
import TopicScreen from './src/screen/TopicScreen';

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator initialRouteName="Subject">
      <Stack.Screen
        name="Subject"
        component={SubjectScreen}
        options={{
          headerShown: false,
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
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
};

export default App;
