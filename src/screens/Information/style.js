import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'flex-start',
        flex:1,
        paddingLeft:45
    },
    txtInput:{
        borderColor:'black',
        borderRadius:15,
        borderWidth:1,
        width:300,
        height:50,
        backgroundColor:'#f5f5f5'
    },
    label:{
        fontWeight:'bold',
        fontSize:20,
        paddingTop:40,
        paddingBottom:10
    },
    label2:{
        fontWeight:'bold',
        fontSize:24,
        color:'#fff',
        textAlign:'center'
    },    

    btnContainer:{
        flexDirection:'row',
    },

    label3:{
        fontWeight:'bold',
        fontSize:20,
        color:'#fff',
        paddingBottom:10
    },      
    btn:{
        backgroundColor:'green',
        borderRadius:15,
        width:170,
        height:50,
        paddingTop:9,
        marginTop:200,
        alignItems:'center',
        marginLeft:1
    }    
})