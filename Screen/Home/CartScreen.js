import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../Store/Redux/Https";
import Fonts from "../../Components/Fonts/Fonts";
import Loader from "../../Components/Loader/Loader";
import styles from "./StylesCartScreen";

const CartScreen = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const loading = useSelector((state) => state.cart.loading);

  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <Fonts>
      <View style={styles.minHScreen}>
        <View>
          <ScrollView style={styles.scrollView}>
            {cart.map((product, index) => (
              <View key={index} style={styles.productContainer}>
                <View style={styles.productInnerContainer}>
                  <View style={styles.productDetails}>
                    <View>
                      <Image
                        source={{ uri: product.thumbnail }}
                        style={{ width: 30, height: 30, borderRadius: 8 }}
                        onError={(error) => {
                          throw new Error("Error loading image:" + error);
                        }}
                      />
                    </View>
                    <View style={styles.titleContainer}>
                      <Text style={[styles.title, { flexShrink: 1 }]}>
                        {product.brand}
                      </Text>
                      <Text style={[styles.price, { flexShrink: 1 }]}>
                        ${product.price}
                      </Text>
                    </View>
                  </View>
                  {isEditMode && (
                    <View>
                      <TouchableOpacity
                        onPress={() => dispatch(removeFromCart(product))}
                      >
                        <MaterialIcons name="delete" size={24} color="red" />
                      </TouchableOpacity>
                    </View>
                  )}
                  <View style={styles.plusMinus}>
                    <View style={styles.plusminusBG}>
                      <TouchableOpacity
                        onPress={() => dispatch(decreaseQuantity(product.id))}
                        style={styles.button}
                      >
                        <Text>
                          <AntDesign name="minus" size={15} color="black" />
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.quantity}>{product.quantity}</Text>
                    <View style={styles.plusminusBG}>
                      <TouchableOpacity
                        onPress={() => dispatch(increaseQuantity(product.id))}
                        style={styles.button}
                      >
                        <Text>
                          <AntDesign name="plus" size={15} color="black" />
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={styles.editButtonContainer}>
            <TouchableOpacity onPress={() => setIsEditMode(!isEditMode)}>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.totalContainer}>
          <View style={styles.totalDetails}>
            <View style={styles.gaptext}>
              <Text style={styles.text}>Subtotal </Text>
              <Text style={styles.text}>Delivery</Text>
              <Text style={styles.text}>Total</Text>
            </View>
            <View style={styles.gapamount}>
              <Text style={styles.amount}>${total.toFixed(2)}</Text>
              <Text style={styles.amount}>
                ${(total > 0 ? 2.0 : 0).toFixed(2)}
              </Text>
              <Text style={styles.amount}>
                ${total > 0 ? (total + 2).toFixed(2) : (0).toFixed(2)}
              </Text>
            </View>
          </View>
          <View style={styles.buttonCheckout}>
            {total > 0 ? (
              <Text style={styles.buttonText}>Proceed To Checkout</Text>
            ) : (
              <Text style={styles.buttonText}>Your cart is empty</Text>
            )}
          </View>
        </View>
      </View>
    </Fonts>
  );
};

export default CartScreen;
