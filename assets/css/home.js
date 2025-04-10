import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, marginTop: 40 },
    title: {
        marginBottom: 50,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    card: {
        marginBottom: 15,
        borderRadius: 12,
        elevation: 3,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginRight: 15,
    },
    userInfo: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    email: {
        color: '#777',
    },
});