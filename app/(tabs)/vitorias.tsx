import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function Vitorias() {
  return (
    <ImageBackground
      source={require("@/assets/images/corrida1.jpg")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
      blurRadius={3}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.boxShadow}>
            <Text style={styles.title}>Senna em Números</Text>
            <Text style={styles.subtitle}>
              Ele conquistou três títulos mundiais em 1988, 1990 e 1991, e
              ganhou 41 Grandes Prêmios e 65 pole positions.
            </Text>
            <View style={styles.rowView}>
              <Entypo name="trophy" size={25} color="#eecb01" />
              <Text style={styles.numberText}>161</Text>
              <Text style={styles.subtitle}>GPs DISPUTADOS</Text>
            </View>
            <View style={styles.rowView}>
              <Entypo name="trophy" size={25} color="#eecb01" />
              <Text style={styles.numberText}>65</Text>
              <Text style={styles.subtitle}>POLE POSITIONS</Text>
            </View>
            <View style={styles.rowView}>
              <Entypo name="trophy" size={25} color="#eecb01" />
              <Text style={styles.numberText}>41</Text>
              <Text style={styles.subtitle}>VITÓRIAS</Text>
            </View>
            <View style={styles.rowView}>
              <Entypo name="trophy" size={25} color="#eecb01" />
              <Text style={styles.numberText}>3x</Text>
              <Text style={styles.subtitle}>CAMPEÃO MUNDIAL</Text>
            </View>
          </View>
        </View>
        <View style={styles.boxImg}>
          <Text style={styles.textImg}>Campeonato Mundial - 1988</Text>
          <Image
            style={styles.img}
            source={require("@/assets/images/vitoria1.jpg")}
          />
        </View>
        <View style={styles.boxImg}>
          <Text style={styles.textImg}>Campeonato Mundial - 1990</Text>
          <Image
            style={styles.img}
            source={require("@/assets/images/vitoria2.jpg")}
          />
        </View>
        <View style={styles.boxImg}>
          <Text style={styles.textImg}>Campeonato Mundial - 1991</Text>
          <Image
            style={styles.img}
            source={require("@/assets/images/vitoria3.jpg")}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boxShadow: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
    maxWidth: 340,
    marginBottom: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: "grey",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  numberText: {
    color: "#eecb01",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 5,
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  boxImg: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    marginBottom: 20,
  },
  textImg: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 15,
  },
  img: {
    width: 300,
    height: 200,
    objectFit: "cover",
  },
});
