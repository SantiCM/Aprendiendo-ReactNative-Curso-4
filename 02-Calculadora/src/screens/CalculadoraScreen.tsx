import { Text, View } from "react-native"
import { styles } from "../theme/appTheme"
import { BotonCal } from "../components/BotonCal"
import { UseCalc } from "../hooks/UseCalc"

// damos la pantalla de la calculadora
export const CalculadoraScreen = () => {

    // recojemos todas laas propiedades del hook
    const { numeroAnterior, numero, limpiar, postivoNegativo, armarNumero, botonDelete, 
        
        botonDividir, botonMultiplicar, botonRestar, botonSumar,calcular} 
        
    = UseCalc()

    return (

        // damos un view que es como un div y le damos su estilo
        <View style={styles.container}>

            {/*El numero anterior si es diferente a 0  y*/}
            {   (numeroAnterior !== "0") && 
                (   // el texto, le damos el estilo y le damos el num anterior puesto por primera vez 
                    <Text style={styles.resultadoPequeño}>{ numeroAnterior }</Text>
                )
            }

            {/*Damos el text, le damos el estilo
                damos el numero de lineas y ajustar el fontSize
            */}
            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit={true}>{ numero }</Text>

            {/*Damos el view con su estilo */}
            <View style={styles.fila}>

                {/*Damos el boton, con el icon que es string, damos el estilo, que se da como string la propiedad
                    la accion es una funcion que recibe el numero del texto 
                */}
                <BotonCal icon="C" color="#9B9B9B" action={limpiar}/>

                <BotonCal icon="+/-" color="#9B9B9B" action={postivoNegativo}/>

                <BotonCal icon="del" color="#9B9B9B" action={botonDelete}/>

                <BotonCal icon="/" color="#FF9427" action={botonDividir}/>

            </View>

            {/*Numeros*/}
            <View style={styles.fila}>

                <BotonCal icon="7" action={armarNumero}/>

                <BotonCal icon="8" action={armarNumero}/>

                <BotonCal icon="9" action={armarNumero}/>

                <BotonCal icon="X" color="#FF9427" action={botonMultiplicar}/>

            </View>

            <View style={styles.fila}>

                <BotonCal icon="4" action={armarNumero}/>

                <BotonCal icon="5" action={armarNumero}/>

                <BotonCal icon="6" action={armarNumero}/>

                <BotonCal icon="-" color="#FF9427" action={botonRestar}/>

            </View>

            <View style={styles.fila}>

                <BotonCal icon="1" action={armarNumero}/>

                <BotonCal icon="2" action={armarNumero}/>

                <BotonCal icon="3" action={armarNumero}/>

                <BotonCal icon="+" color="#FF9427" action={botonSumar}/>

            </View>

            <View style={styles.fila}>

                <BotonCal icon="0" ancho action={armarNumero}/>

                <BotonCal icon="." action={armarNumero}/>

                <BotonCal icon="=" color="#FF9427" action={calcular}/>

            </View>

        </View>

    )

}