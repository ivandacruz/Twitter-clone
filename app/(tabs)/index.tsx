import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import tweets from '../../assets/data/tweets';

const tweet = tweets[3];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />

      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    // borderBottomWidth: 1,

    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    // backgroundColor: 'gray',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: '700',
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
});
