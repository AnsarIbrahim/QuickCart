import React from "react";
import { useSelector } from "react-redux";
import { View, FlatList, Text, StyleSheet } from "react-native";
import ProductCard from "../../Components/Card/ProductCard";
import User from "../../Components/User/User";
import Card from "../../Components/Card/Card";
import Loader from "../../Components/Loader/Loader";

const Favourite = () => {
  const favoriteProducts = useSelector((state) => state.favorite.products);
  const loading = useSelector((state) => state.favorite.loading);

  if (loading) {
    return <Loader />;
  }
  const EmptyListComponent = () => (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListText}>No favorite products found.</Text>
    </View>
  );

  class ProductCardItem extends React.PureComponent {
    render() {
      const { product } = this.props;
      return product && <ProductCard product={product} />;
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <User name="Hey, Ansar" address="Coimbatore, Tamilnadu, India" hour={2} />
      <Card />
      <View
        style={{
          flex: 1,
          padding: 10,
          marginTop: -400,
          marginLeft: 10,
        }}
      >
        <FlatList
          style={{ margin: 10 }}
          data={favoriteProducts}
          renderItem={({ item: product }) => (
            <ProductCardItem product={product} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          ListEmptyComponent={<EmptyListComponent />}
        />
      </View>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  emptyListContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  emptyListText: {
    fontSize: 18,
    color: "#333",
  },
});
