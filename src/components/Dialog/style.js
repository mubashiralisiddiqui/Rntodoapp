import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        // flex: 1,
    },
    heading: {
        textAlign: 'center',
        alignSelf: 'center',
        width: '75%'
    },
    headingContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-around'
    },
    backText: {
        fontSize: 16,
        fontWeight: '700'
    },
    DatePickerContainer: {
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        height: 40,
        // paddingTop: 10,
        flexDirection: "row",
        width: '90%',
        alignSelf: 'center',
        marginBottom: 15
    },
    PlaceHoldertime: {
        fontSize: 16,
        fontStyle: "normal",
        letterSpacing: 0,
        // lineHeight: 20,
        // top: 15,
        paddingLeft: 20,
        color: "#a9b2be",
    },
    dateField: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    button: {

    },
    overlayStyle: {
        borderRadius: 10,
        height: 300,
        width: '90%'
    }

})
export default styles