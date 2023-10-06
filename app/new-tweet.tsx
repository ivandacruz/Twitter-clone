import { View, StyleSheet, Text, Image } from 'react-native';

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
            <Image src={user.image} style={styles.image} />
            <Text>Create new tweet</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
    }
});
