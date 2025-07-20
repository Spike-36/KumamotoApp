// App.js — Bottom tabs disabled, only ExploreStack shown

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Audio } from 'expo-av';
import { useEffect } from 'react';

// Screens
import ExploreStack from './screens/ExploreStack';

// Use this instead of bottom tabs (tabs temporarily disabled)
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator(); // Tabs preserved but inactive

export default function App() {
  useEffect(() => {
    const configureAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: true,
          playsInSilentModeIOS: true,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });
      } catch (err) {
        console.warn('Audio mode setup failed:', err);
      }
    };

    configureAudio();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ExploreStack" component={ExploreStack} />
      </Stack.Navigator>

      {/*
      // Original bottom tab structure retained here for future use:

      <Tab.Navigator
        initialRouteName="Explore"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#FFD700',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopColor: '#222',
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tab.Screen
          name="Explore"
          component={ExploreStack}
          options={{
            tabBarLabel: 'Level 1',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="grid" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Listen"
          component={PracticeListenScreen}
          options={{
            tabBarLabel: 'Level 2',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="headphones" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Speak"
          component={PracticeSpeakScreen}
          options={{
            tabBarLabel: 'Level 3',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="microphone" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Review"
          component={ReviewStack}
          options={{
            tabBarLabel: 'Level 4',
            tabBarIcon: ({ color, size }) => (
              <Feather name="check-circle" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Find"
          component={FindStack}
          options={{
            tabBarButton: () => null,
            tabBarItemStyle: { display: 'none' },
            tabBarLabel: () => null,
          }}
        />
      </Tab.Navigator>
      */}
    </NavigationContainer>
  );
}
