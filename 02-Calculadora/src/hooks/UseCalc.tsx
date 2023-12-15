import { useRef, useState } from "react"

// recojemos el enum
// definir un conjunto de constantes con nombre
export enum Operadores {

    sumar, restar, multiplicar, dividir

}

// hook
export const UseCalc = () => {

    // recojemos el state que recibe un string del numero
    const [numero, setNumero] = useState("0")
 
    // recojemos el state que recibe un string del num anterior
    const [numeroAnterior, setNumeroAnterior] = useState("0")

    // la ultima operacione es ref de los operadores
    const ultimaOperacion = useRef<Operadores>()

    // limpiar
    const limpiar = () =>  {

        // segundo estado se pone por defefecto en 0
        setNumero("0")

        setNumeroAnterior("0")
    
    }

    // recojemo el numero que se pone como string
    const armarNumero = (numeroTexto: string) => {

        //no aceptar doble punto
        // si el numero del primer estado
        // incluye el . y el numero que pone el usuario es igual a ., retornamos
        if(numero.includes(".") && numeroTexto === ".") return

        // empieza por: startsWith
        // si el numero empieza por 0 y el numero empieza por -0
        if(numero.startsWith("0") || numero.startsWith("-0")) {
            
            // punto decimal
            // si el numero que pone el usuario es igual a .
            if(numeroTexto === ".") {

                // el segundo estado recibe el numero mas el numero que pone el usuario
                setNumero(numero + numeroTexto)
                
                // evaluar si es otro 0 y hay punto
                // si el numero que pone el usuario es igual a 0
                // y si el numero del estado incluye . 
            } else if(numeroTexto === "0" && numero.includes(".")) {

                // el 2 estado recibe el numero mas el numero del usuario
                setNumero(numero + numeroTexto)
                
                // si es diferente a 0 y no tiene un punto
                // si el num del usuario es diferente a "0" y si el numero no existe e incluye el .
            } else if(numeroTexto !== "0" && !numero.includes(".")) {

                // el segundo estado del num del usuario
                setNumero(numeroTexto)

                // evitar 000.0
                // si el num del usuario es igual a "0" y si el numero no existe e incluye el .
            } else if(numeroTexto === "0" && !numero.includes(".")) {

                // el segundo estado del numero del estado
                setNumero(numero)
                
                // si no se da nada
            } else {

                // damos el segundo estado del numero del estado y le concatenamos el num del usuario
                setNumero(numero + numeroTexto)
            
            }

            // si no se da nada
        } else {

            // damos el segundo estado del numero del estado y le concatenamos el num del usuario
            setNumero(numero + numeroTexto)
        
        }
    
    }  

    // positivo or negativo
    const postivoNegativo = () => {

        // si el num incluye un "-"
        if(numero.includes("-")) {
            
            // damos el segundo estado
            // recibe el primer estado y remplazamos el "-" por nada
            // porque por defecto es positivo
            setNumero(numero.replace("-", ""))
            
            // si falla
        } else {

            // el segundo estado del num, le damos el "-" y el num, osea negativo
            setNumero("-" + numero)
        
        }
    
    }

    // boton eliminar
    const botonDelete = () => {

        // negativo como cadena de texto vacio
        let negativo = ""

        // num temp recibe el numero
        let numeroTemp = numero

        // si el numero incluye -
        if(numero.includes("-")) {

            // damos el negativo como "-"
            negativo = "-"

            // el num temp damos el num y le damos el substr
            //  devuelve los caracteres de una cadena que comienzan en una localización 
            //especificada y de acuerdo al número de caracteres que se especifiquen
            // le damos 1
            numeroTemp = numero.substr(1)
        
        }

        // si el numero temp en su totalidad es mayor a 1
        if(numeroTemp.length > 1) {

            // el 2 estado le damos el negativo
            // lo concatenamos el numTemp y le damos el slice,
            // da copia del array, le damos el 0 y le restamos 1
            setNumero(negativo + numeroTemp.slice(0, -1))
            
            // si falla todo
        } else {

            // damos el segundo estado en "0"
            setNumero("0")
        
        }

    }

    // subir el numero anterior
    const cambiarNumeroPorAnterior = () => {

        // si el numero, que empieza por el ultimo, tiene el "."
        if(numero.endsWith(".")) {

            // el 2 estado del num anterior
            // damos el numero del slice
            // entramos al arreglo y le damos 0 menos 1
            setNumeroAnterior(numero.slice(0, -1))

            // falla
        } else {

            // el 2 estado del num anterior, damos el 1 estado del num
            setNumeroAnterior(numero)
        
        }

        // damos el numero por defecto de 0
        setNumero("0")
    
    }

    // dividir
    const botonDividir = () => {

        // damos el cambiar numero
        cambiarNumeroPorAnterior()

        // damos el ref del current
        // = a los enum de dividir
        ultimaOperacion.current = Operadores.dividir
    
    }

    const botonMultiplicar = () => {
        
        // damos el cambiar numero
        cambiarNumeroPorAnterior()

        // damos el ref del current
        // = a los enum de multiplicar
        ultimaOperacion.current = Operadores.multiplicar
    
    }

    const botonRestar = () => {

        // damos el cambiar numero
        cambiarNumeroPorAnterior()

        // damos el ref del current
        // = a los enum de restar
        ultimaOperacion.current = Operadores.restar
    
    }

    const botonSumar = () => {

        // damos el cambiar numero
        cambiarNumeroPorAnterior()

        // damos el ref del current
        // = a los enum de sumar
        ultimaOperacion.current = Operadores.sumar
    
    }

    // calcular
    const calcular = () => {
        
        // damos el numero 1, volvemos el string a numero y recibe el numero
        const numero1 = Number(numero)

        //damos el numero 2, volvemos el string a numero y recibe el numeroAnterior
        const numero2 = Number(numeroAnterior)

        // switch de la ref de la operacion del current
        switch (ultimaOperacion.current) {

            // caso del enum de los operadores del sumar
            case Operadores.sumar:

                // el 2 estado le concatenamos
                // el num1 mas el numm 2
                setNumero(`${ numero1 + numero2 }`)
                
                break;
            
            // caso del enum de los operadores del restar
            case Operadores.restar:

                // el 2 estado le concatenamos
                // el num2 menos el numm 1
                setNumero(`${ numero2 - numero1 }`)
                
                break;

            // caso del enum de los operadores del multiplicar
            case Operadores.multiplicar:

                // el 2 estado le concatenamos
                // el num1 multiplicado el numm 2
                setNumero(`${ numero1 * numero2 }`)
                
                break;
            
            // caso del enum de los operadores del dividir
            case Operadores.dividir:

                // el 2 estado le concatenamos
                // el num2 dividir el numm 1
                setNumero(`${ numero2 / numero1 }`)
                
            break;
        }

        // damos el 2 estado del numero anterior en "0"
        setNumeroAnterior("0")
    
    }

    // retornamos las propiedades
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