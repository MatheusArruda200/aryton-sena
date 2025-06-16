import React from "react";
import { Image, ImageBackground, Text, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <ImageBackground 
      source={require('@/assets/images/fundo.jpg')} 
      style={styles.backgroundImage} 
      blurRadius={3} 
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image 
          style={styles.profileImage} 
          source={require('@/assets/images/foto-capa.jpg')}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Aryton Senna</Text>
          <Text style={styles.subtitle}>
            Através desse APP, você vai conhecer um pouco de quem foi esse grande piloto.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
  },
  infoContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'grey',
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 10,
  },
});