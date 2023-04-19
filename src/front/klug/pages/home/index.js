import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";
import StudentStatisticsCard from "../../components/StudentStatisticsCard";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Página Principal!</Text>
      <Text>Exemplos de Componentes</Text>
      <StudentStatisticsCard />
      <StatusBar style="auto" />
    </View>
  );
}