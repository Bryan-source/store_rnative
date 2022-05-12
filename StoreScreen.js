import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Card from './Card';
import NavigationButtons from './NavigationButtons';
import products from './data/products';

//const Cards = new Array(10).fill(null).map((v, i) => i + 1);

function StoreScreen() {

    return (
        <View style={styles.root}>
            
            <ScrollView>
            <View style={styles.containerCard}>
                
                {
                    products.map((product, i) => (
                        <Card 
                            key = {i}
                            id = {product.id}
                            title = {product.title}
                            description = {product.description}
                            image = {product.image}
                            stock = {product.stock}
                        />
                    ))
                }
                
            </View>
            </ScrollView>
            
            {/* Bottom Navigation */}
            <NavigationButtons />
            
            
        </View>
    );
}

const styles = StyleSheet.create({ 
    root: { 
        flex: 1, 
        flexDirection: 'column', 
        backgroundColor: "#f1f8e9"
    },

    containerCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 8,
        marginBottom: 50,
    },  
     
});

export default StoreScreen;
