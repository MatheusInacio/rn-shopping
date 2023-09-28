import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

export function Cesta() {
  return <>
    <Image source={topo} style={styles.topo} />;
    <Text style={styles.titulo}>Detalhes da Cesta</Text>
    <View style={styles.cesta}>
      <Text style={styles.nome}>Cesta de Verduras</Text>

      <View style={styles.fazenda}>
        <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text>
        <Image source={logo} style={styles.imagemFazenda} />;
      </View>

      <Text style={styles.descricao}>
        Produtos selecionados diretamente da fazenda para a sua cozinha
      </Text>
      <Text>R$ 40,00</Text>
    </View>
  </>;
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
    fontFamily: "Montserrat",
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
    fontFamily: "MontserratBold",
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "MontserratRegular",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "MontserratRegular",
  },
  preco: {
    color: "2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
