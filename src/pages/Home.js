import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    Contet: {
        paddingTop: 10, 
        width: 180,
        height: 180,
        fontSize: 16,
        alignSelf: 'center',
    },
    title:{
        paddingTop: 26,
        fontSize: 26,
        alignSelf: 'center',
    },
    btn_GoIn:{
        height: 30,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'green',
    },
    btn_GoBack:{
        height: 30,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'red',
    },
    main:{
        width: "50%",
        height: "100%",
        alignSelf: "center",
        backgroundColor: "gray",
        paddingTop: 10,
        

        },
    sub_main:{
        width: "50%",
        height: "100%",
        alignSelf: "center",
        backgroundColor: "gray",
        paddingTop: 10,
        flex: 1,   
        margin: 150,

    }


})


const Home = ({ navigation }) => {
    return (
        <View
        style={styles.main}
        >
            <Text
            style={styles.title}
            >Curriculo de Felipe Chapinotti Cazetto</Text>
            <View
            style={styles.sub_main}
            >
            <Button 
                title="Informações pessoais"
                style={styles.btn_GoIn}
                onPress={ () => navigation.navigate('Sobre') }
            />
            <Button
                title="Capacidades"
                onPress={ () => navigation.navigate('Capacidades') }
            />
            <Button
                title="Profissoes"
                onPress={ () => navigation.navigate('Profissoes') }
            />
            </View>
        </View>
    );
}

export default Home;

