import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import UserInputs from "./UserInputs";
import BagIcon from "./BagIcon";
import Fonts from "../Fonts/Fonts";
import styles from "./stylesUser";

const User = ({ name, address, hour }) => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
  return (
    <Fonts>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.row}>
            <Text style={styles.name}>{name}</Text>
            <BagIcon
              number={totalItems}
              navigation={navigation}
              color={"white"}
            />
          </View>
          <View style={styles.searchContainer}>
            <View style={styles.searchInnerContainer}>
              <Ionicons
                name="search-outline"
                size={18}
                color="white"
                style={styles.icon}
              />
              <UserInputs />
            </View>
          </View>
          <View style={styles.textrow}>
            <View>
              <Text style={styles.smallText}>DELIVERY TO</Text>
              <Text style={styles.baseText}>
                {address}{" "}
                <Entypo name="chevron-small-down" size={16} color="white" />
              </Text>
            </View>
            <View>
              <Text style={styles.smallText}>WITHIN</Text>
              <Text style={styles.baseText}>
                {hour} Hour{" "}
                <Entypo name="chevron-small-down" size={16} color="white" />
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Fonts>
  );
};

export default User;
