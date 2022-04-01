import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Task = (props) => {

    return ( 
        <View >
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <View style={styles.square}></View>
                    <Text style={styles.itemText}>{props.text}</Text>
                </View>
                <View style={styles.cercular}></View>

            </View>
            

        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection:'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width:24,
        height:24,
        backgroundColor: '#7CA4C0',
        borderRadius: 5,
        opacity: 0.4,
        marginRight: 20,
    },
    itemText: {
        maxWidth: '80%',

    },
    cercular: {
        width: 12,
        height: 12,
        borderColor: '#284457',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;