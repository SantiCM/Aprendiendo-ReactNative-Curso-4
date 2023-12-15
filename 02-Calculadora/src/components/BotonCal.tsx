import { Text,TouchableOpacity, View } from "react-native"
import { styles } from '../theme/appTheme';

// Damos una interface de las props
interface Props{

    // damos el icono del string
    icon: string;

    // damos el color, como string
    // y le damos el "?" que es opcional
    color?: string;

    // damos el ancho como boolean que es del boton "0", estirar el estilo
    ancho?: boolean;    

    // la accion recibe el numero de texto como string y no retornamos nada
    action: (numeroTexto: string) => void;

}

// recojemos las propiedades que viene de la interface
export const BotonCal = ({ icon, color = "#2D2D2D", ancho = false, action }: Props) => {
  
    return (

        // damos un boton
        // le damos el onPress que es como el onClick
        // damos funcion de accion y recojemos el icono
        <TouchableOpacity onPress={() => action(icon)}>

            {/* Damos el div */}
            <View style={{  

                // recojemos los estilos, osea le damos copia
                ...styles.boton,

                // el fondo dependera del color que queremos para el boton
                backgroundColor: color,

                // y el ancho, recibe un ancho si es asi damos 170 de width y sino es 80 (por defecto)
                width: (ancho) ? 170 : 80
    
            }}>

                <Text style={{

                    // le damos la copia de los estilos
                    ...styles.botonTexto, 

                    // recojemo el color
                    // decimos si el color es igual al gris, sera negro y si no es blanco
                    color: (color === "#9B9B9B") ? "black" : "white"
            
                }}>

                    {/* Recojemos el icono */}
                    {icon}
            
                </Text>

            </View>

        </TouchableOpacity>        

    )

}