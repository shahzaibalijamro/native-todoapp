import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        mainText: {
            textAlign: 'center',
            fontSize: 30,
            marginVertical: 20,
            fontWeight: "700"
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
        title: {
            textAlign: 'center',
            marginVertical: 8,
        },
        button: {
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 15,
            borderRadius: 10,
            marginBottom: 50,
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
        }
    }
)