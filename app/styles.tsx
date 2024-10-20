import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        mainText: {
            textAlign: 'center',
            fontSize: 30,
            marginVertical: 20,
            fontWeight: "700"
        },
        secondText: {
            textAlign: 'center',
            fontSize: 25,
            marginBottom: 20,
            fontWeight: "600"
        },
        input: {
            height: 60,
            width: '90%',
            margin: 12,
            borderWidth: 1,
            padding: 20,
            borderRadius: 15,
            fontSize: 16,
            marginBottom: 20,
        },
        modalInput: {
            height: 50,
            width: '100%',
            // margin: 12,
            borderWidth: 1,
            padding: 15,
            borderRadius: 15,
            fontSize: 15,
            marginBottom: 10,
        },
        title: {
            textAlign: 'center',
            marginVertical: 8,
        },
        button: {
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 15,
            borderRadius: 10,
            marginBottom: 30,
        },
        editButton: {
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 15,
            borderRadius: 10,
            // marginBottom: 30,
        },
        container: {
            // flex: 1,
            width: '40%',
            justifyContent: 'center',
            paddingHorizontal: 10,
        },
        noTodoText: {
            textAlign: 'center',
            fontSize: 19,
            marginVertical: 10,
            fontWeight: "600"
        },
        singleTodoWrapper: {
            width: '86%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginVertical: 10
        },
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
        },
        modalView: {
            margin: 10,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 30,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            width: '90%'
        },
        modalButton: {
            borderRadius: 20,
            padding: 10,
            elevation: 2,
        },
        buttonOpen: {
            backgroundColor: '#F194FF',
        },
        buttonClose: {
            backgroundColor: '#2196F3',
        },
        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        modalText: {
            marginBottom: 15,
            textAlign: 'center',
        },
    }
)