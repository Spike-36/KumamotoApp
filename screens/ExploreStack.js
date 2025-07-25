// screens/ExploreStack.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreListScreen from './ExploreListScreen';
import WordRecordScreen from './WordRecordScreen';

const Stack = createNativeStackNavigator();

export default function ExploreStack() {
  return (
    <Stack.Navigator
      initialRouteName="ExploreList"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'black' },
      }}
    >
      <Stack.Screen name="ExploreList" component={ExploreListScreen} />
      <Stack.Screen name="WordRecord" component={WordRecordScreen} />
    </Stack.Navigator>
  );
}
