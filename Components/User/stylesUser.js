import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "31%",
    backgroundColor: "#2A4BA0",
  },
  innerContainer: {
    flexDirection: "column",
    marginTop: 30,
    padding: 25,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
    marginTop: 20,
  },
  name: {
    color: "#F8F9FB",
    fontFamily: "ManropeMedium",
    fontSize: 22,
    fontWeight: "600",
    lineHeight: 30,
    letterSpacing: 0,
  },
  searchContainer: {
    backgroundColor: "#153075",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
    borderRadius: 50,
    marginTop: 30,
    alignSelf: "center",
    marginHorizontal: "auto",
    width: "95%",
  },
  searchInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    marginRight: 10,
    paddingLeft: 10,
  },
  textrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 4,
  },
  smallText: {
    color: "gray",
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 14,
    letterSpacing: 0.2,
    fontFamily: "ManropeLight",
    marginBottom: 5,
  },
  baseText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    fontFamily: "ManropeRegular",
  },
});

export default styles;
