import React from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import NavigationButtons from './NavigationButtons';


function DetailScreen({route, navigation}) {
    
    const {title, description, image, stock} = route.params;

    navigation.setOptions({
        title: title,
        headerRight: () => (
          <Button 
            title="Buy"
            onPress={() => {}}
            disabled={stock === 0}
          />
        ),
    });

    return (
        <View style={styles.root}>
            
            <Image
                source={{uri: image}}
                style={{width: 200, height: 200}} 
            />
            <Text>{title}</Text>
            <Text>{description}</Text>
            
             {/* Bottom Navigation */}
            <NavigationButtons/>

        </View>
    );
}

const styles = StyleSheet.create({ 
    root: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#c8e6c9",
        margin: 0,
        padding: 0
    },  
     
});

export default DetailScreen;
