import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home";
import Name from "../Name";
import Information from "../Information";
import Results from "../Results";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="home" screenOptions={{headerShown: false}}>

            <Stack.Screen name="home" component={Home}></Stack.Screen>
            <Stack.Screen name="name" component={Name}></Stack.Screen>
            <Stack.Screen name="information" component={Information}></Stack.Screen>
            <Stack.Screen name="results" component={Results}></Stack.Screen>

        </Stack.Navigator>
    )
}    