import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  StatusBar,
} from "react-native";
import Theme from "./theme";
import * as Font from "expo-font";
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = { fontsLoaded: false };
  }
  loadFonts() {
    return Font.loadAsync({
      "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
      "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
      "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
      "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    });
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  async componentDidMount() {
    console.log(this.props);
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    await this.loadFonts();
    this.setState({ fontsLoaded: true });
  }

  handleBackButton = () => {
    this.props.currentIndex({ index: 3 });
    console.log(this.props.index);
    this.props.navigation.navigate("Entry");
    return true;
  };
  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={{ flex: 1, backgroundColor: Theme.bgcolor }}>
          <StatusBar backgroundColor="#020cab" barStyle="light-content" />
          <View style={styles.aboutContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={() => this.handleBackButton()}>
                <Icon
                  family="MaterialIcons"
                  name="arrow-back"
                  size={23}
                  color="#FFF"
                />
              </TouchableOpacity>
              <Text style={styles.abouttxt}>About</Text>
            </View>
          </View>
          <ScrollView>
            <View style={{ margin: 5 }}>
              <Text style={styles.headerTxt}>Terms Conditions:</Text>
              <View style={{ paddingLeft: 20 }}>
                <Text style={styles.pgpointTxt}>
                  1. Proper or expected usage; definition of misuse
                </Text>
                <Text style={styles.pgpointTxt}>
                  2. Accountability for online actions, behavior, and conduct
                </Text>
                <Text style={styles.pgpointTxt}>
                  3. Privacy policy outlining the use of personal data
                </Text>
                <Text style={styles.pgpointTxt}>
                  4. Payment details such as membership or subscription fees,
                  etc.
                </Text>
                <Text style={styles.pgpointTxt}>
                  5. User notification upon modification of terms, if offered
                </Text>
              </View>

              <Text style={styles.headerTxt}>Eligibility:</Text>
              <View style={{ paddingLeft: 20 }}>
                <Text style={styles.pgTxt}>
                  Proper or expected usage definition of misuseProper or
                  expected usage definition of misuse Proper or expected usage
                  definition of misuse
                </Text>
                <Text style={styles.pgpointTxt}>
                  1. Accountability for online actions, behavior, and conduct
                </Text>
                <Text style={styles.pgpointTxt}>
                  2. Privacy policy outlining the use of personal data
                </Text>
                <Text style={styles.pgpointTxt}>
                  3. Payment details such as membership or subscription fees,
                  etc.
                </Text>
              </View>

              <Text style={styles.headerTxt}>Registration:</Text>
              <View style={{ paddingLeft: 20 }}>
                <Text style={styles.pgTxt}>
                  Payment details such as membership or subscription fees, etc.
                  Accountability for online actions, behavior, and conduct
                  Proper or expected usage definition of misuseProper or
                  expected usage definition of misuse Proper or expected usage
                  definition of misuse
                </Text>
                <Text style={styles.pgTxt}>
                  Membership Accountability for online actions, behavior, and
                  conduct Proper or expected usage definition of misuse Proper
                  or expected usage definition{" "}
                </Text>
              </View>
              <Text style={styles.headerTxt}>Privacy:</Text>
              <View style={{ paddingLeft: 20 }}>
                <Text style={styles.pgTxt}>
                  Payment details such as membership or subscription fees, etc.
                  Accountability for online actions, behavior, and conduct
                  Proper or expected usage definition of misuseProper or
                  expected usage definition of misuse Proper or expected usage
                  definition of misuse
                </Text>
                <Text style={styles.pgpointTxt}>
                  1. Accountability for online actions, behavior, and conduct
                </Text>
                <Text style={styles.pgpointTxt}>
                  2. Privacy policy outlining the use of personal data
                </Text>
                <Text style={styles.pgpointTxt}>
                  3. Payment details such as membership or subscription fees,
                  etc.
                </Text>
                <Text style={styles.pgpointTxt}>
                  4. Accountability for online actions, behavior, and conduct
                </Text>
                <Text style={styles.pgpointTxt}>
                  5. Privacy policy outlining the use of personal data
                </Text>
                <Text style={styles.pgpointTxt}>
                  6. Payment details such as membership or subscription fees,
                  etc.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return <View />;
    }
  }
}

const styles = StyleSheet.create({
  aboutContainer: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#020cab",
  },
  abouttxt: {
    color: "#FFF",
    fontSize: 17,
    fontFamily: "Poppins-Bold",
    marginHorizontal: 20,
  },
  headerTxt: {
    fontFamily: "Poppins-Medium",
    color: "#000",
    padding: 10,
    fontSize: 20,
  },
  pgpointTxt: {
    color: "#000",
    paddingVertical: 2,
    fontFamily: "Poppins-Regular",
  },
  pgTxt: {
    color: "#000",
    paddingVertical: 2,
    fontFamily: "Poppins-Light",
    fontSize: 14,
  },
});
