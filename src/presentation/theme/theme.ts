import { StyleSheet } from "react-native";


export const colorPalette = {
    // Colores primarios
    primaryColor: '#3498db',
    primaryDark: '#2980b9',
    primaryLight: '#5dade2',

    // Colores secundarios
    secondaryColor: '#9b59b6',
    secondaryDark: '#8e44ad',
    secondaryLight: '#bb8fce',

    // Colores terciarios
    tertiaryColor: '#f39c12',
    tertiaryDark: '#d35400',
    tertiaryLight: '#f8c471',

    // Colores de advertencia
    warningColor: '#f1c40f',
    warningDark: '#f39c12',
    warningLight: '#f9e79f',

    // Colores de éxito
    successColor: '#2ecc71',
    successDark: '#27ae60',
    successLight: '#58d68d',

    // Colores de error
    errorColor: '#e74c3c',
    errorDark: '#c0392b',
    errorLight: '#f1948a',

    backgroundColor1: '#f5f5f5', // Gris claro
    backgroundColor2: '#ececec', // Gris medio
    backgroundColor3: '#dcdcdc', // Gris oscuro
};



export const globalstyle = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colorPalette.backgroundColor2
    },

    primaryButton: {
        backgroundColor: colorPalette.primaryColor,
        borderRadius: 5,
        padding: 10,
        marginVertical: 4,
        width: "100%",
        alignItems: 'center'
    },
    buttonText: {
        color: colorPalette.backgroundColor1,
        fontSize: 18
    },

    StackHeaderStyle: {
        elevation: 0,
        shadowColor: 'transparent',
        backgroundColor: colorPalette.backgroundColor2
    }

})