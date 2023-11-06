import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import styles from "../styles";

const List = ({ data }) => {
  const renderItem = ({ item }) => (

      <View key={item.id} style={styles.cardContainer}>
        <View style={styles.cardWrapper}>
          <Image style={styles.card} source={{ uri: item.coverImageUri }} />
          <View
            style={[
              styles.cornerLabel,
              { backgroundColor: item.cornerLabelColor },
            ]}
          >
            <Text style={styles.cornerLabelText}>{item.cornerLabelText}</Text>
          </View>
        </View>
      </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default List;
