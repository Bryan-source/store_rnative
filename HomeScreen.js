import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './styles/styles';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button
                title="Tienda"
                onPress={
                    () => navigation.navigate('Store')
                }     
            />
        </View>
    );
}


export default HomeScreen;