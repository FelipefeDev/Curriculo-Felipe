import React from 'react';
import { View, Text, Button, Image, StyleSheet } from "react-native";


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
        backgroundColor: "gray"

        }


})


const Sobre = ({ navigation }) => {
    return (
        <View
        style={styles.main}
        >
            <image
            style={styles.image}
            source = {require('../../Images/Curriculo_image.jpg')}
            />
            <Text 
            style={styles.title}
            >Sobre mim</Text>

            <Text
            style={styles.Contet}
            >
                Sou um aluno do ETEC, que atualmente está cursando o 3º módulo do curso técnico de Desenvolvimento de sistemas.
            </Text>
            <Text
            style={styles.Contet}
            >
                Gosto de pescar, tenho grandes objetivos, e sempre estou seguindo em frente, tentando aprender cada vez mais.
            </Text>
            <Button 
                style={styles.btn_GoBack}
                color={"red"}
                title="Voltar"
                onPress={ () => navigation.goBack() }
            />
        </View>
    );
}

export default Sobre;