import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function NewJobsScreen() {
  return (
    <SafeAreaView style={styles.root} edges={["bottom"]}>
      <Text>New Jobs will be shown here!</Text>
    </SafeAreaView>
  );
}

export default NewJobsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#98bdff",
  },
});
