import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

const MyBottomSheet = ({ onPress2, task, setTask, handleAddTask }) => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "75%", "100%"], []);

  // renders
  return (
    <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
      <TouchableOpacity style={styles.button} onPress={onPress2}>
        <Text style={styles.button}>Cancel</Text>
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"Write a task"}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "blue",
    fontSize: 20,
    position: "absolute",
    top: 8,
    left: 8,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 5,
    width: "20%",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 5,
  },
  addText: {
    color: "red",
  },
  writeTaskWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default MyBottomSheet;
