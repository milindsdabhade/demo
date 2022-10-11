import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    FlatList
} from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
const friends = ({ navigation }) => {
    const [list, setList] = useState([]);
    const renderItem = ({ item }) => (
        <Item title={item.First_Name__c} />
    );

    useEffect(() => {
        fnGetFrnd();
    }, []);
    const fnGetFrnd = async () => {
        var api = "https://rnapp-mock-developer-edition.ap24.force.com/services/apexrest/apiservice";
        fetch(api, {
            method: "GET",
            body: "",
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
            {list.length > 0 ? <View style={{ flex: 1, padding: 16 }}>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('addFriend')}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>ADD</Text>
                    </View>
                </TouchableOpacity>
            </View> : null}

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
});

export default friends;