import React from 'react';
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

function Card({ id, title, description, image, stock}) {

    const navigation = useNavigation();

    return (
        <View style={styles.root}>

            <Image source={{uri: image}} resizeMode="contain" style={styles.image}/>
            
            <View style={styles.infoContainer}>
                
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{description}</Text>
                <Button
                    color="#455a64"
                    title="Ver"
                    onPress={
                        () => navigation.navigate('Details', {
                        id: id,
                        title: title,
                        description: description,
                        image: image,
                        stock: stock,
                    })}
                />
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        width: 162,
        /* height: 160, */
        //justifyContent: "center",
        //alignItems: "center",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "darkslategray",
        borderRadius: 4,
        margin: 5,
    },

    infoContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 16
    },

    image: {
        height: 162,
        justifyContent: "center",
        borderRadius: 3,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },

    title: {
        fontSize: 16,
        fontWeight: "bold",
    },

    text: {
        fontSize: 12,
        marginBottom: 8,
    }

})

export default Card;