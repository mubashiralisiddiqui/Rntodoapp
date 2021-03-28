import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    header: {
        height: '40%'
    },
    form: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    inputContainer: {
        textAlign: 'center',
        height: 50,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        borderRadius: 20,
        backgroundColor: "#F6F6F6",
        paddingLeft: 10
    },
    inputStyle: {
        // backgroundColor: '#F6F6F6'
    },
    button: {
        width: 300,
        backgroundColor: '#000000',
        borderRadius: 20,
        height: 50
    },
    buttonTitle: {
        color: '#ffffff',
    }

})
export default styles