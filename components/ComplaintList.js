import { useContext } from "react";
import { Text, FlatList, StyleSheet } from "react-native";

import { ComplaintsContext } from "../store/complaints-context";
import Card from "./Card";
import { titleCase } from "../utils";

// https://stackoverflow.com/questions/54564136/react-native-flatlist-extending-beyond-screen-when-rendered-with-a-header

function ComplaintList({ refreshing, onRefresh, type }) {
  const complaintsCtx = useContext(ComplaintsContext);

  return (
    <>
      <Text style={styles.text}>{titleCase(type)} complaints</Text>
      <FlatList
        data={
          type === "new"
            ? complaintsCtx.newComplaints
            : complaintsCtx.assignedComplaints
        }
        renderItem={(itemData) => <Card item={itemData.item} />}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </>
  );
}

export default ComplaintList;

const styles = StyleSheet.create({
  text: {
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 24,
  },
});
