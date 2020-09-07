import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  YellowBox,
  KeyboardAvoidingView,
  Linking,
  Clipboard,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";
import Spinner from "react-native-loading-spinner-overlay";
export default class HomeScreen extends Component {
  constructor(props) {
    YellowBox.ignoreWarnings(["Setting a timer"]);
    super(props);
    this.state = {
      copied: "",
      config: "",
      spinner: false,
      copied: "",
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      data: {},
    };
  }
  fetchCopiedText = async () => {
    const copied = await Clipboard.getString();
    this.setState({ copied });
  };
  componentDidMount() {
    setInterval(() => {
      this.fetchCopiedText();
    }, 1000);
  }
  copyapiKey = () => {
    this.state.apiKey = this.state.copied;
    this.state.copied = "";
  };
  copyauthDomain = () => {
    this.state.authDomain = this.state.copied;
    this.state.copied = "";
  };
  copydatabaseURL = () => {
    this.state.databaseURL = this.state.copied;
    this.state.copied = "";
  };
  copyprojectId = () => {
    this.state.projectId = this.state.copied;
    this.state.copied = "";
  };
  copystorageBucket = () => {
    this.state.storageBucket = this.state.copied;
    this.state.copied = "";
  };
  copymessagingSenderId = () => {
    this.state.messagingSenderId = this.state.copied;
    this.state.copied = "";
  };
  copyappId = () => {
    this.state.appId = this.state.copied;
    this.state.copied = "";
  };
  handleClick = () => {
    Linking.openURL("https://akhilchaudhary.in/").catch((err) =>
      console.error("An error occurred", err)
    );
  };
  handleSubmit = async () => {
    // console.log((this.state.config.replace(/\s+/g, '')));
    // var firebaseConfig = JSON.parse(tmp.replace('0',(this.state.config.replace(/\s+/g, ''))));
    // this.state.config=((((((((this.state.config).replace('apiKey','"apiKey"')).replace('authDomain','"authDomain"')).replace('databaseURL','"databaseURL"')).replace('projectId','"projectId"')).replace('storageBucket','"storageBucket"')).replace('messagingSenderId','"messagingSenderId"')).replace('appId','"appId"'));
    // console.log(((JSON.stringify(this.state.config.replace(/\s+/g, ''))).replace(/\\/g, '')));
    // var firebaseConfig=JSON.parse(((JSON.stringify(this.state.config.replace(/\s+/g, ''))).replace(/\\/g, '')));
    var firebaseConfig = {
      apiKey: this.state.apiKey,
      authDomain: this.state.authDomain,
      databaseURL: this.state.databaseURL,
      projectId: this.state.projectId,
      storageBucket: this.state.storageBucket,
      messagingSenderId: this.state.messagingSenderId,
      appId: this.state.appId,
    };
    if (!firebase.apps.length) {
      await firebase.initializeApp(firebaseConfig);
    }
    this.setState({ spinner: true });
    global.history.push(firebaseConfig);
    await firebase
      .database()
      .ref()
      .on("value", (snapshot) => {
        this.setState({ data: JSON.parse(JSON.stringify(snapshot)) });
        this.props.navigation.navigate("Database", {
          JSON_ListView_Clicked_Item: this.state.data,
        });

        this.setState({
          config: "",
          spinner: false,
          apiKey: "",
          authDomain: "",
          databaseURL: "",
          projectId: "",
          storageBucket: "",
          messagingSenderId: "",
          appId: "",
          data: {},
        });
      });
  };

  render() {
    
    try{
      // console.log(this.props.navigation.state.params.index);
      this.setState({
        apiKey:this.props.navigation.state.params.index.apiKey,
        authDomain: this.props.navigation.state.params.index.authDomain,
        databaseURL: this.props.navigation.state.params.index.databaseURL,
        projectId: this.props.navigation.state.params.index.projectId,
        storageBucket: this.props.navigation.state.params.index.storageBucket,
        messagingSenderId: this.props.navigation.state.params.index.messagingSenderId,
        appId: this.props.navigation.state.params.index.appId,
      });
      this.props.navigation.state.params.index=null;
    }
    catch{
      
    }
    return (
      <View style={{ backgroundColor: "#272727", flex: 1 }}>
        <ScrollView style={styles.container}>
          <Spinner
            visible={this.state.spinner}
            textContent={"Verifying.."}
            textStyle={styles.spinnerTextStyle}
          />
          <KeyboardAvoidingView
            style={styles.subcontainer}
            behavior="padding"
            enabled
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Image
                    style={{ width: 100, height: 100, alignSelf: "flex-end" }}
                    source={require("../../assets/logo-main.png")}
                  />
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ alignSelf: "flex-start", fontSize: 22 }}>
                    Firebase{"\n"}Configuration
                  </Text>
                </View>
              </View>

              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("History");
                  }}
                >
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      alignSelf: "flex-end",
                      margin: 10,
                    }}
                    source={require("../../assets/history.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.parent}>
              <TextInput
                placeholder="apiKey"
                placeholderTextColor="#272727"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(apiKey) => this.setState({ apiKey })}
                value={this.state.apiKey}
              />
              <TouchableOpacity
                style={styles.closeButtonParent}
                onPress={this.copyapiKey.bind()}
              >
                <Image
                  style={styles.closeButton}
                  source={require("../../assets/paper.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.parent}>
              <TextInput
                placeholder="authDomain"
                placeholderTextColor="#272727"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(authDomain) => this.setState({ authDomain })}
                value={this.state.authDomain}
              />
              <TouchableOpacity
                style={styles.closeButtonParent}
                onPress={this.copyauthDomain.bind()}
              >
                <Image
                  style={styles.closeButton}
                  source={require("../../assets/paper.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.parent}>
              <TextInput
                placeholder="databaseURL"
                placeholderTextColor="#272727"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(databaseURL) => this.setState({ databaseURL })}
                value={this.state.databaseURL}
              />
              <TouchableOpacity
                style={styles.closeButtonParent}
                onPress={this.copydatabaseURL.bind()}
              >
                <Image
                  style={styles.closeButton}
                  source={require("../../assets/paper.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.parent}>
              <TextInput
                placeholder="projectId"
                placeholderTextColor="#272727"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(projectId) => this.setState({ projectId })}
                value={this.state.projectId}
              />
              <TouchableOpacity
                style={styles.closeButtonParent}
                onPress={this.copyprojectId.bind()}
              >
                <Image
                  style={styles.closeButton}
                  source={require("../../assets/paper.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.parent}>
              <TextInput
                placeholder="storageBucket"
                placeholderTextColor="#272727"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(storageBucket) =>
                  this.setState({ storageBucket })
                }
                value={this.state.storageBucket}
              />
              <TouchableOpacity
                style={styles.closeButtonParent}
                onPress={this.copystorageBucket.bind()}
              >
                <Image
                  style={styles.closeButton}
                  source={require("../../assets/paper.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.parent}>
              <TextInput
                placeholder="messagingSenderId"
                placeholderTextColor="#272727"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(messagingSenderId) =>
                  this.setState({ messagingSenderId })
                }
                value={this.state.messagingSenderId}
              />
              <TouchableOpacity
                style={styles.closeButtonParent}
                onPress={this.copymessagingSenderId.bind()}
              >
                <Image
                  style={styles.closeButton}
                  source={require("../../assets/paper.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.parent}>
              <TextInput
                placeholder="appId"
                placeholderTextColor="#272727"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(appId) => this.setState({ appId })}
                value={this.state.appId}
              />
              <TouchableOpacity
                style={styles.closeButtonParent}
                onPress={this.copyappId.bind()}
              >
                <Image
                  style={styles.closeButton}
                  source={require("../../assets/paper.png")}
                />
              </TouchableOpacity>
            </View>
            {/*             
          <TextInput
            placeholder="Firebase Configuration"
            placeholderTextColor="#272727"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(config) => this.setState({ config })}
            value={this.state.config}
          />  */}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#FFCA28" }]}
              onPress={this.handleSubmit}
            >
              <Text style={{ color: "#272727", fontSize: 20 }}>Submit</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          <Text
            onPress={this.handleClick}
            style={{ textAlign: "center", marginTop: 20, color: "#F5F5F5" }}
          >
            Made with ❤ by Akhil Chaudhary
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#272727",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 100,
  },
  parent: {
    marginHorizontal: 15,
    marginVertical: 20,
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  textInput: {
    height: 40,
    fontSize: 20,
    width: "90%",
  },
  closeButton: {
    height: 24,
    width: 24,
  },
  closeButtonParent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerTextStyle: {
    color: "#FFCA28",
    width: 100,
  },
  container1: {
    flex: 1,
    paddingBottom: 150,
  },
  subcontainer: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    // alignContent: "center",
    // justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3DB8FF",
  },
  button: {
    marginVertical: 20,
    alignSelf: "flex-end",
    borderRadius: 5,
    height: 40,
    width: 100,
    marginHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
