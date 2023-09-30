import React from "react";
import { StyleSheet, Image, View } from "react-native";

import { Topo } from "./Cesta/componentes/Topo";
import { Detalhes } from "./Cesta/componentes/Detalhes";

export function Cesta({ topo, detalhes }) {
  return (
    <>
      <Topo {...topo} />
      <View style={styles.cesta}>
        <Detalhes {...detalhes} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
