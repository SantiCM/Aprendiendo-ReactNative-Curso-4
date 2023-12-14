import { Text, View } from "react-native"
import { styles } from "../theme/appTheme"
import { BotonCal } from "../components/BotonCal"
import { UseCalc } from "../hooks/UseCalc"

export const CalculadoraScreen = () => {

    const { numeroAnterior, numero, limpiar, postivoNegativo, armarNumero, botonDelete, 
        
        botonDividir, botonMultiplicar, botonRestar, botonSumar,calcular} 
        
    = UseCalc()

    return (
        
        <View style={styles.container}>

            {   (numeroAnterior !== "0") && 
                (
                    <Text style={styles.resultadoPequeño}>{ numeroAnterior }</Text>
                )
            }

            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit={true}>{ numero }</Text>

            <View style={styles.fila}>

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