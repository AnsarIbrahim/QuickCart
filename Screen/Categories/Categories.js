import React from "react";
import { useSelector } from "react-redux";
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import User from "../../Components/User/User";
import Card from "../../Components/Card/Card";
import Loader from "../../Components/Loader/Loader";

const Categories = () => {
  const products = useSelector((state) => state.products.products.products);
  const loading = useSelector((state) => state.products.loading);

  let uniqueCategories = [];
  if (products) {
    uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];
  }

  if (loading) {
    return <Loader />;
  }

  class CategoryItem extends React.PureComponent {
    render() {
      const { item } = this.props;
      return (
        <View style={styles.card}>
          <Text style={styles.text}>{item}</Text>
        </View>
      );
    }
  }

  return (
    <SafeAreaView>
      <User name="Hey, Ansar" address="Coimbatore, Tamilnadu, India" hour={2} />
      <Card />
      <ScrollView style={{ margin: 5 }}>
        {uniqueCategories.map((item, index) => (
          <CategoryItem key={index.toString()} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});
