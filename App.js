import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import NewJobsScreen from "./screens/NewJobsScreen";
import PrevJobsScreen from "./screens/PrevJobsScreen";

import Button from "./components/Button";
import ProfileMenu from "./components/ProfileMenu";

const BottomTab = createBottomTabNavigator();

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function toggleProfileMenu() {
    setIsModalVisible((curState) => !curState);
  }

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerRight: () => (
              <>
                <Button
                  iconLeft="person-circle"
                  color="#f3797e"
                  size={36}
                  onPress={toggleProfileMenu}
                />
                <ProfileMenu
                  isModalVisible={isModalVisible}
                  onClose={toggleProfileMenu}
                />
              </>
            ),
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#4b49ac" },
            tabBarStyle: { backgroundColor: "#4b49ac" },
            tabBarActiveTintColor: "#f3797e",
          }}
        >
          <BottomTab.Screen
            name="NewJobs"
            component={NewJobsScreen}
            options={{
              title: "New Jobs",
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                  name={focused ? "briefcase" : "briefcase-outline"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <BottomTab.Screen
            name="PrevJobs"
            component={PrevJobsScreen}
            options={{
              title: "Previous Jobs",
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                  name={focused ? "time" : "time-outline"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}
