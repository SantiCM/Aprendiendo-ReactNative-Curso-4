import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FabButton } from '../components/FabButton';

export const CounterScreen = () => {

    const [counter, setCounter] = useState(0)
    
    return (

        <View style={styles.container}>
            
            <Text style={styles.title}>   
                
                Contador: {counter}
            
            </Text>

            <FabButton 

                position='br'
                title="+1"
                onPress={() => setCounter(counter + 1)}
                
            />

            <FabButton 

                position="bl"
                title="-1"
                onPress={() => setCounter(counter - 1)}
            
            />
                
            {/*<TouchableOpacity 
            
                onPress={() => setCounter(counter - 1)}
                style={styles.fabLocationR}
                
            >

                <View style={styles.fab}>

                    <Text style={styles.fabText}>-1</Text>

                </View>

            </TouchableOpacity>*/}
            
        </View>
    
    )

}

// Forma de dar estilos
const styles = StyleSheet.create({

    container : {
        
        flex: 1,
        justifyContent: "center",

    },

    title: {
        
        textAlign: 'center', 
        fontSize: 40, 
        top: -10, // por defecto el text tiene posicion relative
    
    },

})


/* 
    <Button /> // este es el boton en react native, sin embargo no es la mejor opcion, ya que 
    tiene pocas propiedades y el estilo no lo tiene
*/