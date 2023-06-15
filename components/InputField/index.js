import { TextInput } from "react-native"
import { StyleSheet } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"

const InputField = props => {
    return (
        <View>
            <Text>{props.label}</Text>
            <TextInput style={style.input} value={props.value} placeholder={props.placeholder} onChangeText={props.onChangeText}/>
        </View>
    )
}
const style = StyleSheet.create({
    input:{
    borderColor: 'black',
         borderWidth: 1,
         padding: 2,
    },

})

export default InputField;