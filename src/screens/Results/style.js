import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        
    },
   
    
    label:{
        fontWeight:'bold',
        fontSize:20,
        paddingTop:4,
        paddingBottom:10
    },
    label2:{
        fontWeight:'bold',
        fontSize:40,
        paddingTop:40,
        
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
        marginLeft:10,
        alignItems:'center'
    },
    btnContainer:{
        flexDirection:'row',
    }
})