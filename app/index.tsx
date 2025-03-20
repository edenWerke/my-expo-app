import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
export default function Index() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Home screen</Text>
    <Link style={styles.link} href='/about'> Go To About Page</Link>
    {/* <Link style={styles.link} href='/+not-found'> Go To About Page</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  link:{
    fontSize:20,
    textDecorationLine:'none',
    color:'pink'
  }
});
