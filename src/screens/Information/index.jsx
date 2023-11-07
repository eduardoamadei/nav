import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

export default function Information({ route }) {

    const { nome, lastName } = route.params;

    const navigation = useNavigation()

    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')

    back = () => {
        navigation.goBack()
    }
    goResults = () => {
        navigation.navigate('results', { nome, lastName, cpf, rg })
    }

    return (
        <View style={styles.containerPrincipal}>
            <Text style={styles.label}>Informe seu CPF</Text>
            <TextInput style={styles.txtInput} onChangeText={setCpf} value={cpf} ></TextInput>

            <Text style={styles.label}>Informe seu RG</Text>
            <TextInput style={styles.txtInput} onChangeText={setRg} value={rg} ></TextInput>

            <View style={styles.btnContainer}>

                <View>
                    <TouchableOpacity onPress={back} style={[styles.btn, { backgroundColor: 'red' }]}><Text style={styles.label3}>Voltar</Text></TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.btn} onPress={goResults}><Text style={styles.label3}>Finalizar</Text></TouchableOpacity>

                </View>
            </View>

        </View>
    )
}