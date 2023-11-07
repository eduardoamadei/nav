import {Text, TouchableOpacity, View} from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { styles } from "./style"

export default function Home() {

    const navigation = useNavigation()

    goName = () =>{
        navigation.navigate('name')
    }


    return(

        <View style={styles.containerPrincipal}>
            
            <Text style={styles.label}>UNIPAR</Text>
            <TouchableOpacity style={styles.btn} onPress={goName}><Text style={styles.label2}>INICIAR</Text></TouchableOpacity>
            
        </View>
            
        
    )
}