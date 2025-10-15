import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function PrevJobsScreen() {
  return (
    <SafeAreaView style={styles.root} edges={["bottom"]}>
      <Text>Ongoing and Previous Jobs will be shown here!</Text>
    </SafeAreaView>
  );
}

export default PrevJobsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#98bdff",
  },
});
