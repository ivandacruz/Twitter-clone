import { Link, useNavigation, useRouter } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, Pressable, SafeAreaView } from 'react-native';

const user = {
    id: 'u1',
    username: 'VadimNotJustDev',
    name: 'Vadim',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
    // 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png', colocar o avatar que está hospedado no json,
};

export default function NewTweet() {
    const [text, setText] = useState("");
    const navigation = useRouter();

    const onTweetPress = () => {
        console.warn('Positing the tweet: ', text);
        
        setText('');
        navigation.back();
        // navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Link href="../" style={{ fontSize: 18 }}>
                        Cancel
                    </Link>
                    <Pressable onPress={onTweetPress} style={styles.button}>
                        <Text style={styles.buttonText}>Tweet</Text>
                    </Pressable>
                </View>

                <View style={styles.inputContainer}>
                    <Image src={user.image} style={styles.image} />
                    <TextInput
                        value={text}
                        onChangeText={setText}
                        placeholder="What's happening?"
                        multiline
                        numberOfLines={5}
                        style={{ flex: 1 }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    body: {
        flex: 1, 
        justifyContent: 'space-between',
        backgroundColor: 'white', 
        marginVertical: 30, 
        // padding: 20,
    },
    container: {
        paddingHorizontal: 10,
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#1C9BF0',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    inputContainer: {
        flexDirection: 'row',
    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10,
    },

});
