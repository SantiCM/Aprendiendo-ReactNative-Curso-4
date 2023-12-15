import { StyleSheet, View } from "react-native"


export const PositionScreen = () => {
    
    return (
    
        <View style={styles.container}>
            
            <View style={styles.cajaMorada}></View>

            <View style={styles.cajaMoNaranja}></View>

            <View style={styles.cajaVerde}></View>

        </View>
    
    )

}

const styles = StyleSheet.create({

    container: {
        
        backgroundColor: "#28C4D9",
        flex: 1,
        //justifyContent: "center",
        //alignItems: "center"
    
    },

    cajaMorada: {
        
        width: 100,
        height: 100,
        backgroundColor: "#5856D6",
        borderWidth: 10,
        borderColor: "white",
        position: "absolute",
        top: 0,
        right: 0
    
    },

    cajaMoNaranja: {
        
        width: 100,
        height: 100,
        backgroundColor: "#F0A238",
        borderWidth: 10,
        borderColor: "white",
        position: "absolute",
        bottom: 0,
        left: 0        
    },

    cajaVerde: {
        
        width: 100,
        height: 100,
        backgroundColor: "green",
        borderWidth: 10,
        borderColor: "white",
        /*position: "absolute",
        bottom: 0,
        right: 0  */
        ...StyleSheet.absoluteFillObject      
    }

});