import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Success from "./components/Success";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MyStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
};

const MyDrawers = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Success" component={Success} />
    </Drawer.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Menu") {
            iconName = focused ? "restaurant" : "restaurant-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Success") {
            iconName = focused
              ? "checkmark-circle"
              : "checkmark-circle-outline";
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#c5705d", // Active tab color
        tabBarInactiveTintColor: "gray", // Inactive tab color
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Success" component={Success} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <MyStacks />
      </NavigationContainer>
    </>
  );
}
