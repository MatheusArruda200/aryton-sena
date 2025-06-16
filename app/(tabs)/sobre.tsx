import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <View style={{ maxWidth: 300, marginTop: 20, marginBottom: 20 }}>
        <Text style={styles.title}>Ayrton Senna</Text>
        <Image
          style={styles.profileImage}
          source={require("@/assets/images/foto-capa.jpg")}
        />
        <Text style={styles.subtitle}>
          No esporte mais global e veloz do mundo, um piloto é considerado o
          mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números
          ajudam a explicar porque o piloto ganhou status de mito do esporte.
          Mas Senna é mais do que isso: o brasileiro foi o responsável por
          alguns dos momentos mais mágicos da principal categoria do
          automobilismo mundial.
        </Text>
      </View>
      <ScrollView>
        <View style={styles.card}>
          <Image
            style={styles.imgCard}
            source={require("@/assets/images/rei-da-chuva.png")}
          />
          <View>
            <Text style={styles.title}> Rei da chuva</Text>
            <Text style={styles.textCard}>
              Aprimorou a pilotagem no asfalto molhando e mostrou ser um piloto
              de determinação, garra e persistência.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.imgCard}
            source={require("@/assets/images/rei-de-monaco.png")}
          />
          <View>
            <Text style={styles.title}> Rei de Mônaco</Text>
            <Text style={styles.textCard}>
              Conquistou o posto por ser o maior recordista de vitórias na pista
              de Mônaco, com seis triunfos.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.imgCard}
            source={require("@/assets/images/silvastone.png")}
          />
          <View>
            <Text style={styles.title}> Silvastone</Text>
            <Text style={styles.textCard}>
              Por seu impressionante desempenho na pista de Silverstone, onde
              conquistou cinco vitórias, Senna recebeu o apelido de "Silvastone"
              pela imprensa inglesa.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.imgCard}
            source={require("@/assets/images/preparacao.png")}
          />
          <View>
            <Text style={styles.title}>Prepração</Text>
            <Text style={styles.textCard}>
              Para vencer corridas e campeonatos o piloto precisava ter uma
              preparação física de atleta.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  profileImage: {
    maxWidth: 300,
    maxHeight: 200,
    borderRadius: 10,
    objectFit: "cover",
  },
  title: {
    color: "#000",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    marginTop: 10,
    color: "grey",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "left",
  },
  card: {
    maxWidth: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#bcbcbd",
    marginVertical: 10,
  },
  imgCard: {
    width: 100,
    height: 100,
  },
  textCard: {
    marginLeft: 10,
    width: "40%",
    textAlign: "left",
  },
});
