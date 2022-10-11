import React, { useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TextInput,
    ScrollView,
    Alert,
    KeyboardAvoidingView
} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'friend.db' });

const addFriend = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    const fnAddFriend = () => {
        console.log(firstName, lastName, age);
        db.transaction(function (tx) {
            console.log("transaction");
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tbl_friends(user_id INTEGER PRIMARY KEY AUTOINCREMENT, firstName VARCHAR(20), lastName VARCHAR(20), age INT(10))');
            tx.executeSql(
                'INSERT INTO tbl_friends (firstName, lastName, age) VALUES (?,?,?)',
                [firstName, lastName, age],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        console.log("Registration ");
                    
                    } else{ console.log("Registrationfailed");}
                }
            );
        });
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <KeyboardAvoidingView
                            behavior="padding"
                            style={{ flex: 1, justifyContent: 'space-between' }}>
                            <TextInput
                                placeholder="First Name"
                                onChangeText={
                                    (name) => setFirstName(name)
                                }
                                style={styles.txtinput}
                            />
                            <TextInput
                                placeholder="Last Name"
                                onChangeText={
                                    (lastname) => setLastName(lastname)
                                }
                                style={styles.txtinput}
                            />
                            <TextInput
                                placeholder="Age"
                                onChangeText={
                                    (age) => setAge(age)
                                }
                                maxLength={2}
                                keyboardType="numeric"
                                style={styles.txtinput}
                            />
                            {/* <Mybutton title="Submit" customClick={register_user} /> */}
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
                <TouchableOpacity
                    onPress={() => fnAddFriend()}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>ADD</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 5,
    },
    button: {
        alignItems: 'center',
        borderRadius: 5,

        backgroundColor: '#008000',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 16,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    txtinput: {
        padding: 10,
        margin: 10,
        borderWidth: 1,

    }
});
export default addFriend;