import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import Contact from './kontak.js';

const DATA = [
  {
    id: '1',
    judul: 'Muhammad Prasetyo',
    telpon: '+62 896-1709-5839',
    gambar: require('../assets/pras.jpg'), 
  },
  {
    id: '2',
    judul: 'Lingga Sepria',
    telpon: '+62 895-0266-4920',
    gambar: require('../assets/lingga.jpg'), 
  },
  {
    id: '3',
    judul: 'Daniel Aprilio',
    telpon: '+62 813-5464-6306',
    gambar: require('../assets/daniel.jpg'), 
  },
];

export default function Daftar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>List Teman</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Contact judul={item.judul} telpon={item.telpon} gambar={item.gambar} />
        )}
        keyExtractor={item => item.id}
      />
      <Button title="Menu Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
  },
});
