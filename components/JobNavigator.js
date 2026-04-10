import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import NewJobsScreen from "../screens/NewJobsScreen";

import Button from "./Button";

const BottomTab = createBottomTabNavigator();

function JobNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#4b49ac" },
        tabBarStyle: { backgroundColor: "#4b49ac" },
        tabBarActiveTintColor: "#f3797e",
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="NewJobsScreen"
        component={NewJobsScreen}
        options={{
          tabBarLabel: "New Jobs",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "briefcase" : "briefcase-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default JobNavigator;
