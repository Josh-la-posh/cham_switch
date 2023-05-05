import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import PrimaryButton from "../../components/UI/PrimaryButton";


const PushBroadcast = ({ navigation }) => {

  return (
    <View style={{width: "100%", alignItems: "center"}}>
      <View style={styles.imageHeader}>
        <Image source={require("../../assets/images/SentSuccessfully.png")} />
      </View>
      <View style={{backgroundColor: "white", height: "50%", width: "100%", alignItems: "center"}}>
        <Text style={{fontSize: 30, fontWeight: 600, color: "#1B4760", marginLeft: 20, marginTop: 10, width: "100%"}}>Message</Text>
        {/* <TextInput
            multiline={true}
            numberOfLines={4}
            style={{ margin: 20, padding: 20, height:200, textAlignVertical: 'top', backgroundColor: 'lightgray'}}
        /> */}
        <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Type your message here..."
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
        />
        <View style={styles.btnContainer}>
            <PrimaryButton onPress={() => navigation.navigate("Sent Successfully")} btnStyle={styles.btnStyle}>
            <Text style={styles.btnText}>Send Message</Text>
            </PrimaryButton>
        </View>
        {/* <View style={styles.btnContainer}>
            <PrimaryButton onPress={() => navigation.navigate("Sent Successfully")}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Send Message</Text>
              </View>
            </PrimaryButton>
          </View> */}
      </View>
    </View>
  )
}

export default PushBroadcast

const styles = StyleSheet.create({
  imageHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#8DC2A9", 
    height: "50%",
    width: "100%"
    // marginTop: 20,
    // height: "100%",
    // width: "80%"
  },
//   btnContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     overflow: "hidden",
//     marginTop: 20,
//   },
//   btn: {
//     height: 46,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 12,
//     borderRadius: 22
//   },
//   btnText: {
//     fontSize: 20,
//     fontWeight: 700,
//     color: "#fff",
//   },
 btnContainer: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  btnStyle: {
    width: 334,
    height: 46,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 700,
  },
  textAreaContainer: {
    // borderColor: "grey",
    borderWidth: 1,
    padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    backgroundColor: "#F5F5F5",
    margin: 20,
    padding: 10,
     width: "90%"
  }
});
