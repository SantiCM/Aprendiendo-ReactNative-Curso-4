import { Text,TouchableOpacity, View } from "react-native"
import { styles } from '../theme/appTheme';

interface Props{

    icon: string;

    color?: string;

    ancho?: boolean;

    action: (numeroTexto: string) => void;

}

export const BotonCal = ({ icon, color = "#2D2D2D", ancho = false, action }: Props) => {
  
    return (

        <TouchableOpacity onPress={() => action(icon)}>

            <View style={{  
        
                ...styles.boton,

                backgroundColor: color,

                width: (ancho) ? 170 : 80
    
            }}>

                <Text style={{
            
                    ...styles.botonTexto, 

                    color: (color === "#9B9B9B") ? "black" : "white"
            
                }}>
                    
                    {icon}
            
                </Text>

            </View>

        </TouchableOpacity>        

    )

}