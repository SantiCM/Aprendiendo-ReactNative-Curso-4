import { StyleSheet, Text, View } from "react-native"

export const BoxObjectsModelPage = () => {
  
    return (
        
        <View style={styles.container}>
            
            <Text style={styles.title}>Box Object Model</Text>

        </View>
    
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "red"
    },

    title: {
        //padding: 20,
        paddingHorizontal: 100,
        paddingVertical: 20,
        marginHorizontal:20,
        fontSize: 20,
        //width: 250,
        borderWidth: 10
        //backgroundColor: "red"
    }

});