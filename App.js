import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import MyBottomSheet from "./components/bottomsheet";
import { AntDesign } from "@expo/vector-icons";
import Dial from "./components/dial";

export default function App() {
  const [sheet, setSheet] = useState(null);
  const onPress = () => setSheet(1);
  const onPress2 = () => setSheet((sheet2) => !sheet2);

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    onPress2();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View>
          <Text style={styles.textHead}>Dial Star</Text>
        </View>

        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={onPress2}>
                <Dial text={item} />
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity style={styles.newText} onPress={onPress}>
          <AntDesign name="pluscircle" size={24} color="black" />
          <Text style={{ margin: 8 }}>New Dial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.newText2} onPress={onPress}>
          <AntDesign name="pluscircle" size={24} color="black" />
          <Text style={{ margin: 8 }}> Dial</Text>
        </TouchableOpacity>
        {sheet && (
          <MyBottomSheet
            onPress2={onPress2}
            task={task}
            setTask={setTask}
            handleAddTask={handleAddTask}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    height: "100%",
  },
  text: {
    color: "#fff",
  },
  textHead: {
    color: "gray",
    fontSize: 40,
    margin: 10,
  },
  newText: {
    color: "blue",
    fontSize: 20,
    position: "absolute",
    bottom: 8,
    left: 8,
    width: 130,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 11,
    margin: 8,
  },
  newText2: {
    color: "blue",
    fontSize: 20,
    position: "absolute",
    bottom: 8,
    right: 8,
    width: 130,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 11,
    margin: 8,
  },
});
