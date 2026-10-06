import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default function App() {
  const [jogador1, setJogador1] = useState(0);
  const [jogador2, setJogador2] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Marcador de Truco</Text>
      <View style={styles.jogo}>
        <View style={styles.jogador}>
          <Text>Jogador 1</Text>
          <Text style={styles.pontos}>{jogador1}</Text>
          <Button
            title="+1"
            onPress={() => {
              if (jogador1 < 12) {
                setJogador1(jogador1 + 1);
              }
            }}
          />

          <Button
            title="-1"
            onPress={() => {
              if (jogador1 > 0) {
                setJogador1(jogador1 - 1);
              }
            }}
          />
        </View>

        <View style={styles.jogador}>
          <Text>Jogador 2</Text>
          <Text style={styles.pontos}>{jogador2}</Text>

          <Button
            title="+1"
            onPress={() => {
              if (jogador2 < 12) {
                setJogador2(jogador2 + 1);
              }
            }}
          />

          <Button
            title="-1"
            onPress={() => {
              if (jogador2 > 0) {
                setJogador2(jogador2 - 1);
              }
            }}
          />
        </View>

      </View>

      {jogador1 == 12 && (
        <Text style={styles.vitoria}>Jogador 1 venceu!</Text>
      )}

      {jogador2 == 12 && (
        <Text style={styles.vitoria}>Jogador 2 venceu!</Text>
      )}

      <Button
        title="Zerar Placar"
        onPress={() => {
          setJogador1(0);
          setJogador2(0);
        }}
      />

      <Text style={styles.info}>Primeiro a chegar em 12 ganha!</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40
  },

  jogo: {
    flexDirection: 'row',
    gap: 50
  },

  jogador: {
    alignItems: 'center',
    gap: 10
  },

  pontos: {
    fontSize: 50,
    fontWeight: 'bold'
  },

  vitoria: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 30
  },

  info: {
    marginTop: 20
  }

});