import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// To use navigation you most import NavigationContainer and add navigation inside that.
// The below navigaition is bottom navigation(like instagram) and for more read the documentions (https://reactnavigation.org/docs)

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  const color = "black";
  const size = 24;
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: () => (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Categories"
            component={HomeScreen}
            options={{
              tabBarIcon: () => (
                <Ionicons name="list" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="New product"
            component={HomeScreen}
            options={{
              tabBarIcon: () => (
                <MaterialIcons
                  name="add-box"
                  size={40}
                  color={"black"}
                  style={{}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Products"
            component={HomeScreen}
            options={{
              tabBarIcon: () => (
                <AntDesign name="inbox" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Dashboard"
            component={HomeScreen}
            options={{
              tabBarIcon: () => (
                <AntDesign name="user" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default BottomNavigator;
