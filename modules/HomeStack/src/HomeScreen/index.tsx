import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://in.bold.pro/my/rahulpachahra' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
