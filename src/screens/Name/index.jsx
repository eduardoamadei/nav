
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


export default function Name(){

const [nome, setNome] = useState('')
const [lastName, setLastName] = useState('')

    const navigation = useNavigation()


    goInformation = () =>{
        navigation.navigate('information', {nome, lastName,})
    }

    return(
        <View style={styles.containerPrincipal}>
            <Text style={styles.label}>Informe seu nome</Text>
            <TextInput style={styles.txtInput} onChangeText={setNome} value={nome} ></TextInput>

            <Text style={styles.label}>Informe seu sobrenome</Text>
            <TextInput style={styles.txtInput} onChangeText={setLastName} value={lastName} ></TextInput>

            <TouchableOpacity style={styles.btn} onPress={goInformation}><Text style={styles.label2}>Próxima</Text></TouchableOpacity>
        </View>
    )
}