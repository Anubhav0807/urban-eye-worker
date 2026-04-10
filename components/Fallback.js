import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";

function Fallback({ refreshing, onRefresh }) {
  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <Text style={styles.text}>Currently no new jobs are available...</Text>
      </View>
    </ScrollView>
  );
}

export default Fallback;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 152,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
  image: {
    height: 94,
    width: 200,
    marginTop: 60,
  },
});
