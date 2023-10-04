import { Text } from "react-native";
import tweets from "../../assets/data/tweets"
import Tweet from "../../components/Tweet"
import { useLocalSearchParams, useSearchParams } from 'expo-router';

export default function TweetScreen() {
    const {id, filter} = useLocalSearchParams();
    
    const tweet = tweets.find((t) => t.id === id);
    
    console.warn(filter);

    if(!tweet) {
        return <Text>Tweet {id} not found!</Text>;
    }

    return <Tweet tweet={tweet} />;
};