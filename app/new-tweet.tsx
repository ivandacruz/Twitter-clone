import { View, StyleSheet, Text, Image, TextInput } from 'react-native';

const user = {
    id: 'u1',
    username: 'VadimNotJustDev',
    name: 'Vadim',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
    // 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png', colocar o avatar que está hospedado no json,
};

export default function NewTweet() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Image src={user.image} style={styles.image} />
                <TextInput 
                    placeholder="What's happening?"
                    multiline
                    numberOfLines={5} 
                    style={{ flex: 1 }}
                />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10,
    },
    inputContainer: {
        flexDirection: 'row',
    },
});
