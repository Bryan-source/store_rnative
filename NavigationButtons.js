import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Button } from "react-native";

function NavigationButtons() {

    const navigation = useNavigation();
    
    return (

        <View style={styles.root}>
            {/* Ir atrás */}
            <Button 
                    color="#455a64"
                    title="Atrás" 
                    onPress={() => navigation.goBack()} 
                />

            {/* Ir a la pantalla de inicio (home) */}
            <Button
                color="#455a64"
                title="Home"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

const styles = StyleSheet.create({ 
    root: { 
        
        flexDirection:"row", 
        justifyContent: "space-around", 
        alignItems: "center", 
        backgroundColor: "#ffffc2",
        borderTopWidth: 1,
        borderColor: "grey",
        padding: 5,

        width: '100%',
        height: 50,

        position: "absolute",
        bottom: 0,
    },
     
});

export default NavigationButtons;