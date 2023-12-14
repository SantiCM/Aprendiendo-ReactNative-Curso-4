import { useRef, useState } from "react"


export enum Operadores {

    sumar, restar, multiplicar, dividir

}

export const UseCalc = () => {

    const [numero, setNumero] = useState("0")

    const [numeroAnterior, setNumeroAnterior] = useState("0")

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () =>  {
        
        setNumero("0")

        setNumeroAnterior("0")
    
    }

    const armarNumero = (numeroTexto: string) => {

        //no aceptar doble punto

        if(numero.includes(".") && numeroTexto === ".") return

        // empieza por: startsWith
        if(numero.startsWith("0") || numero.startsWith("-0")) {
            
            // punto decimal
            if(numeroTexto === ".") {
                
                setNumero(numero + numeroTexto)
                
                // evaluar si es otro 0 y hay punto
            } else if(numeroTexto === "0" && numero.includes(".")) {
                
                setNumero(numero + numeroTexto)
                
                // si es diferente a 0 y no tiene un punto
            } else if(numeroTexto !== "0" && !numero.includes(".")) {
                
                setNumero(numeroTexto)

                // evitar 000.0
            } else if(numeroTexto === "0" && !numero.includes(".")) {
                
                setNumero(numero)
            
            } else {
                
                setNumero(numero + numeroTexto)
            
            }
        
        } else {

            setNumero(numero + numeroTexto)
        
        }
    
    }  

    const postivoNegativo = () => {
        
        if(numero.includes("-")) {
            
            setNumero(numero.replace("-", ""))
        
        } else {

            setNumero("-" + numero)
        
        }
    
    }

    const botonDelete = () => {
        
        let negativo = ""

        let numeroTemp = numero

        if(numero.includes("-")) {
            
            negativo = "-"

            numeroTemp = numero.substr(1)
        
        }

        if(numeroTemp.length > 1) {
            
            setNumero(negativo + numeroTemp.slice(0, -1))
        
        } else {
            
            setNumero("0")
        
        }

    }

    const cambiarNumeroPorAnterior = () => {
        
        if(numero.endsWith(".")) {
            
            setNumeroAnterior(numero.slice(0, -1))

        } else {
            
            setNumeroAnterior(numero)
        
        }

        setNumero("0")
    
    }

    const botonDividir = () => {

        cambiarNumeroPorAnterior()
        
        ultimaOperacion.current = Operadores.dividir
    
    }

    const botonMultiplicar = () => {

        cambiarNumeroPorAnterior()
        
        ultimaOperacion.current = Operadores.multiplicar
    
    }

    const botonRestar = () => {

        cambiarNumeroPorAnterior()
        
        ultimaOperacion.current = Operadores.restar
    
    }

    const botonSumar = () => {

        cambiarNumeroPorAnterior()
        
        ultimaOperacion.current = Operadores.sumar
    
    }

    const calcular = () => {
    
        const numero1 = Number(numero)

        const numero2 = Number(numeroAnterior)

        switch (ultimaOperacion.current) {

            case Operadores.sumar:

                setNumero(`${ numero1 + numero2 }`)
                
                break;
            
            case Operadores.restar:

                setNumero(`${ numero2 - numero1 }`)
                
                break;

            case Operadores.multiplicar:

                setNumero(`${ numero1 * numero2 }`)
                
                break;
        

            case Operadores.dividir:

                setNumero(`${ numero2 / numero1 }`)
                
            break;
        }

        setNumeroAnterior("0")
    
    }

    return {
    
        armarNumero, numeroAnterior, numero, limpiar, postivoNegativo,
        botonDelete,
        botonDividir,
        botonMultiplicar,
        botonRestar,
        botonSumar,
        calcular,
    
    }
  
}