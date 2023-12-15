import { StyleSheet, View } from "react-native"

export const TareaScreen = () => {
    
    return (
    
        <View style={styles.container}>
            
            <View style={styles.cajaMorada}></View>

            <View style={styles.cajaNaranja}></View>

            <View style={styles.cajaAzul}></View>

        </View>
   
    )

}
 

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: "#28425B",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
        
        
    },

    cajaMorada: {
        top: 100,
        right: 100,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#5856D6"
    
    },

    cajaNaranja: {
        top: 50,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#F0A238"
    
    },

    cajaAzul: {
        left: 100,
        bottom: 100,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#28C4D6"
    
    }

});

/*1*/

// Caja Naranja, Flex en 2, Carpeta Public, Tarea-1

/*2*/

// Container: justifyContent: "center", 
// Caja Azul: 100% de width - Carpeta Public, Tarea-2

/*3*/

// En las 2 cajas, morada y azul poner alingSelf

/*4*/

// justifyContent: "center"- container
// cajaMorada:  position: "absolute" right: 0, top: 20,
// cajaNaranja: alignSelf: "center"
// cajaAzul: position: "absolute", bottom: 20

/*5*/

// container: flexDirection: "row", alignContent: "stretch", justifyContent: "space-between"
// quitar el height

/*6*/
// Quitarte a todas las cajas el width
// ponerle 1 flex al morado y naranja
// al azul ponerle 2 de flex


/*7*/

// container: justifyContent: "center", alignItems: "center"

/*8*/

// container alignItems: "center", justifyContent: "center",
// cajaNaranja: left: 100
// caja azul: bottom: 0

/*9*/

// container alignItems: "center", justifyContent: "center",
// cajaNaranja: left: 100
// caja morada, top: 100
// caja azul: bottom: 0

/*10*/

// container alignItems: "center", justifyContent: "center",
// cajaNaranja: top: 100,
// caja morada, top: 100, right: 100,
// caja azul: left: 100, bottom: 100,