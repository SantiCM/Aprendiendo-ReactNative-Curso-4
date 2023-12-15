import { StyleSheet, Text, TouchableNativeFeedback, View , Platform, TouchableOpacity} from "react-native"

// damos la interface de las props
interface Props {

    // la cual recibe el titulo como string
    title: string;

    // la posicion del css 
    // el "?" es decir que esta propiedad se puede utilizar o no 
    // damos el br (right) or bl (left)
    position?: "br" | "bl";

    // el dar click, es una funcion que no regresa nada
    onPress: () => void; 

}

// recojemos las propiedades de las interfaces
// 
export const FabButton = ({ title, onPress, position = "br" }: Props) => {

    const ios = () => {

        return (

            <TouchableOpacity

                onPress={onPress}

                activeOpacity={ 0.75 }
            
                style={[
                    
                    styles.fabLocation,
    
                    (position === "bl") ? styles.left : styles.right
            
                ]}>
                
                <View style={styles.fab}>
    
                    <Text style={styles.fabText}>{title}</Text>
    
                </View>

            </TouchableOpacity>
        
        )
        
    }

    const android = () => {
        
        return (

            <View style={[
                    
                styles.fabLocation,
    
                (position === "bl") ? styles.left : styles.right
            
            ]}>
                
                <TouchableNativeFeedback 
                
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple("#28425B", false, 30)} 
    
                >
                    
                    <View style={styles.fab}>
    
                        <Text style={styles.fabText}>{title}</Text>
    
                    </View>
    
                </TouchableNativeFeedback>
    
            </View>
        
        )
    
    }

    return (Platform.OS === "ios") ? ios() : android()
     
}

const styles = StyleSheet.create({

    fabLocation: {

        position: "absolute",
        // pegado al borde de abajo
        bottom: 20,
        // lo mandamos a la izquiersas
        //right: 20
    
    },

    right: { right: 20 },

    left: { left: 20 },

    fab: {
        
        backgroundColor: "#5856D6",
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,

    },

    fabText: {
        
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center"
    }

})

/*fabLocationR: {

    position: "absolute",
    // pegado al borde de abajo
    bottom: 20,
    // lo mandamos a la izquiersas
    left: 20
    
}*/