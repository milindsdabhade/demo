import * as React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

const home = ({ navigation }) => {
    const [dataTosend, setSendData] = useState('');
    NetInfo.fetch().then(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);

        if( state.isConnected){
            db.transaction((tx) => {
                tx.executeSql(
                  'SELECT * FROM tbl_friends',
                  [],
                  (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                      temp.push(results.rows.item(i));
                    setSendData(temp);
                  }
                );
              });
        }
      });
      const sendData = async () => {
        var api = "https://rnapp-mock-developer-edition.ap24.force.com/services/apexrest/apiservice";
        fetch(api, {
            method: "POST",
            body: JSON.stringify(dataTosend),
            header: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("data" + JSON.stringify(json[0].First_Name__c));
                setList(json);
            })
            .catch((error) => {
                console.log("Error" + error);
            });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: 'center',
                            marginBottom: 16
                        }}>
                        You are on Home Screen
                    </Text>


                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
});
export default home;