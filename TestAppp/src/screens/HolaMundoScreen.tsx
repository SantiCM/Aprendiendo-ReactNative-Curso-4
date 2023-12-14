import { Text, View } from "react-native"

export const HolaMundoScreen = () => {
  
    return (
    
        // El View es como un div, por defecto tiene 0 pixeles en todos lados 
        // le damos el tipo estilo a los componentes
        <View style={{ 
      
            flex: 1,
            backgroundColor: "aqua",
            justifyContent: 'center',
            alignItems: "center"
  
        }}
      
        >
  
            {/*El text es como un p*/}
            <Text style={{
          
                fontSize: 35,
                color: "black"
          
            }}
  
            >
          
                Holaa Mundo
          
            </Text>
  
        </View>
    
    )

}