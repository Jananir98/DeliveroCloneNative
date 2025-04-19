import './global.css';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from 'components/Auth/Login';
import Signup from 'components/Auth/Signup';
import BasketScreen from 'components/Dishes/BasketScreen';
import { HomeScreen } from 'components/HomeScreen';
import DeliveryScreen from 'components/Order/DeliveryScreen';
import PaymentScreen from 'components/Order/PaymentScreen';
import PreparingOrderScreen from 'components/Order/PreparingOrderScreen';
import RazorpayWebView from 'components/Order/RazorpayWebView';
import RestaurentScreen from 'components/RestaurentScreen';
import { StatusBar } from "expo-status-bar";
import { Provider } from 'react-redux';
import { store } from 'store';
import { RootStackParamList } from 'types';

const Stack = createStackNavigator<RootStackParamList>(); // ✅ Correct usage

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurent" component={RestaurentScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} options={{ presentation: 'modal', headerShown: false }} />
          <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} options={{ presentation: 'modal', headerShown: false }} />
          <Stack.Screen name="Delivery" component={DeliveryScreen} options={{ presentation: 'modal', headerShown: false }} />
          <Stack.Screen name="Payment" component={PaymentScreen} options={{ presentation: 'modal', headerShown: false }} />
          <Stack.Screen name="RazorpayWebView" component={RazorpayWebView} options={{ presentation: 'modal', headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        </Stack.Navigator>

      </Provider>
      <StatusBar backgroundColor="white"  />
    </NavigationContainer>
  );
}
