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

const Profissoes = ({ navigation }) => {
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
            >Cursos Feitos</Text>

            <Text
            style={styles.Contet}
            >
                Término do Ensino médio em 2020 no I.E
            </Text>
            <text
            style={styles.Contet}>
                 Curso técnico de Desenvolvimento de sistemas, (1200 Horas) (ETEC)
            </text>
            <text
            style={styles.Contet}>
                 Curso de Arduino, (6 dias) (ETEC)
            </text>
            <text
            style={styles.title}>
                 Experiências Profissionais
            </text>
            <text
            style={styles.Contet}>
                 Recepcionista na Auto-mecânica JOAT (7 meses)
                 
            </text>
            <Button 
                style={styles.btn_GoBack}
                color={"red"}
                title="Voltar"
                onPress={ () => navigation.goBack() }
            />
        </View>
    );
}

export default Profissoes;