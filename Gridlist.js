import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const data = [
    { id: 1, title: 'Item 1', price: '10$', discount: '20%', image: 'image_url_1' },
    { id: 2, title: 'Item 2', price: '15$', discount: '10%', image: 'image_url_2' },
    // Add more items as needed
  ]
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

  const GridItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.discount}>{item.discount}</Text>
    </View>
  );

  const GridList = () => (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2} // Number of columns for the grid
      renderItem={({ item }) => <GridItem item={item} />}
    />
  );

  const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 1,
      padding: 1,
      backgroundColor: '#efefef',
    },
    image: {
      width: windowWidth/2,
      height: 100,
      marginBottom: 10,
    },
    title: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    price: {
      color: 'green',
      marginBottom: 5,
    },
    discount: {
      color: 'red',
    },
  });

  export default GridList;