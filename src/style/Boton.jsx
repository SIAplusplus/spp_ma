import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Boton = (props) =>{

    const {onPress, text} = props

    return(
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress = {onPress}
        >
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Boton

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: '#5F5F5F',
        marginTop: 15,
        marginBottom: 10,
        paddingHorizontal:20,
        paddingVertical: 10,
        borderRadius: 30,
    },

    buttonText:{ 
        color: '#f9f9f9',
    },
})