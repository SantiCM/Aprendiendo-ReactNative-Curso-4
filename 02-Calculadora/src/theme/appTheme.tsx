import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    fondo: { 
        backgroundColor: "black",
        flex: 1,
    },

    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "flex-end"
    },

    resultado: {
        color: "white",
        fontSize: 60,
        textAlign: "right",
        marginBottom: 10

    }, 

    resultadoPequeño: {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: 30,
        textAlign: "right",
    },

    fila: { 
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 17,
        paddingHorizontal: 10,
    },

    boton:{
        height: 80,
        width: 80,
        backgroundColor: "#2D2D2D",
        borderRadius: 90,
        justifyContent: "center",
        marginHorizontal: 4
    },

    botonTexto: {
        textAlign: "center",
        padding: 10,
        fontSize: 30, 
        color: "white",
        fontWeight: "300"
    },
    
});