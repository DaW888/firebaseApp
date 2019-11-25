import {createStackNavigator, createAppContainer} from "react-navigation";
import Main from "./screens/Main";
import Auth from "./screens/Auth";
import Stations from "./screens/Stations";
import Map from "./screens/Map";

const Root = createStackNavigator({
    Main: {screen: Main},
    Auth: {screen: Auth},
    Stations: {screen: Stations},
    Map: {screen: Map}
});

const App = createAppContainer(Root);

export default App;
