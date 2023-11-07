import { Text, TouchableOpacity, TextInput, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Results({route}){

const {nome, lastName, cpf, rg} = route.params;

const navigation = useNavigation()

back = () =>{
    navigation.goBack()
}

goHome = () =>{
    navigation.navigate('home')
}

    return(

    <View style={styles.containerPrincipal}>
        <Text style={styles.label}>Olá, {route.params?.nome} {route.params?.lastName}</Text>

        <Text style={styles.label}>Portador do documento</Text>
        <Text style={styles.label2}>CPF</Text>
        <Text style={styles.label}>{route.params?.cpf}</Text>
        <Text style={styles.label2}>RG</Text>
        <Text style={styles.label}>{route.params?.rg}</Text>
        <View style={styles.btnContainer}>

            <View>
                <TouchableOpacity onPress={back} style={[styles.btn, {backgroundColor:'red'}]}><Text style={styles.label3}>Voltar</Text></TouchableOpacity>
            </View>
                <TouchableOpacity style={styles.btn} onPress={goHome}><Text style={styles.label3}>Finalizar</Text></TouchableOpacity>

            <View>
            </View>
        </View>
    </View>
    )
}