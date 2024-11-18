import {
  Viro3DObject,
  ViroAmbientLight,
  ViroAnimations,
  ViroARScene,
  ViroARSceneNavigator,
  ViroMaterials,
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const InitialScene = (props: {
  sceneNavigator: { viroAppProps: { object: string } };
}) => {
  let data = props.sceneNavigator.viroAppProps;

  ViroMaterials.createMaterials({
    kinder: {
      diffuseTexture: require("./assets/chocolate_gift.obj/00.png"),
    },
    dice: {
      diffuseTexture: require("./assets/Die-OBJ/ClassicColor/Die_Die_base_BaseColor.png"),
    },
  });

  ViroAnimations.registerAnimations({
    rotate: {
      properties: {
        rotateY: "+=90",
      },
      duration: 2500, //250 milliseconds
    },
  });

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" />
      {data.object === "kinder" ? (
        <Viro3DObject
          source={require("./assets/chocolate_gift.obj/chocolate_gift.obj")}
          materials={["kinder"]}
          type="OBJ"
          position={[0, 0, -5]}
          scale={[0.1, 0.1, 0.1]}
          rotation={[0, 20, 0]}
        />
      ) : (
        <Viro3DObject
          source={require("./assets/Die-OBJ/Die-OBJ.obj")}
          materials={["dice"]}
          type="OBJ"
          position={[0, 0, -5]}
          scale={[1, 1, 1]}
          rotation={[0, 20, 0]}
        />
      )}
    </ViroARScene>
  );
};

export default () => {
  const [object, setObject] = useState("kinder");
  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
        initialScene={{ scene: InitialScene }}
        viroAppProps={{ object: object }}
        style={{ flex: 1 }}
      />
      <View style={styles.controlsView}>
        <TouchableOpacity onPress={() => setObject("kinder")}>
          <Text style={styles.text}>display old man</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setObject("dice")}>
          <Text style={styles.text}>display second object</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },

  controlsView: {
    width: "100%",
    height: 100,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "blue",
    margin: 20,
    padding: 10,
  },
});
