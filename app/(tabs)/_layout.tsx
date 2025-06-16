import { Tabs } from "expo-router";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eecb01",
        },
        headerTitleStyle: {
          color: "#000",
          fontWeight: "bold",
        },

        tabBarStyle: {
          backgroundColor: "#eecb01",
        },
        tabBarActiveTintColor: "#bb2511",
        tabBarInactiveTintColor: "#000",
        tabBarActiveBackgroundColor: "#ffff",
        tabBarInactiveBackgroundColor: "#eecb01",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: "Sobre",
          tabBarIcon: ({ color }) => (
            <Entypo name="info" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="vitorias"
        options={{
          title: "Vitórias",
          tabBarIcon: ({ color }) => (
            <Entypo name="trophy" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
