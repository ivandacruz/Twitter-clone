import { FlatList, StyleSheet, View } from 'react-native';

import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';

const tweet = tweets[0];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList data={tweets} renderItem={({ item }) => <Tweet tweet={item} />} />

      {/* <Tweet tweet={tweets[0]} />
      <Tweet tweet={tweets[1]} />
      <Tweet tweet={tweets[2]} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
