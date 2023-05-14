import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MetarialCommunityIcons from "react-native-vector-icons/MetarialCommunityIcons";
import categoryData from "../assets/data/categoriesData";
import popularData from "../assets/data/pupularData";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";

export default function Home() {

  const categoryItem = ({item}) => {
    return (
      <View style={[styles.categoryItemWrapper, {
        backgroundColor: item.selected ? colors.primary : colors.white
      }]}>
        <Image style={styles.categoryItemImage} source={ item.image } />
        <Text style={styles.categoryItemTitle}>{ item.title }</Text>
        <View style={[styles.categorySelectWrapper, {
          backgroundColor: item.selected ? colors.white : colors.secondary
        }]}>
          <Feather name="chevron-right" size={8} color={ item.selected ? colors.black : colors.white } />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require("../assets/images/profile.png")}
            style={styles.profileImage}
          />
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
      </SafeAreaView>

      {/* title */}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleSubTitle}>Food</Text>
        <Text style={styles.titleTitle}>Delivery</Text>
      </View>

      {/* search */}
      <View style={styles.searchWrapper}>
        <Feather name="search" size={16} color={colors.textDark} />
        <View style={styles.search}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>

      {/* categories */}
      <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View style={styles.categoriesListWrapper}>
          <FlatList
            data={ categoryData }
            renderItem={ categoryItem }
            keyExtractor={ item => item.id }
            horizontal={ true }
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40
  },

  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20
  },
  titleSubTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-regular',
    color: colors.textDark 
  },
  titleTitle: {
    fontSize: 32,
    fontFamily: 'Montserrat-bold',
    color: colors.textDark,
    marginTop: 5
  },

  searchWrapper: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 30
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2
  },
  searchText: {
    fontFamily: 'Montserrat-semibold',
    color: colors.textLight,
    marginBottom: 5,
    fontSize: 14
  },

  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-bold',
    fontSize: 16,
    paddingHorizontal: 20,
    color: colors.textDark
  },
  categoriesListWrapper: {
    paddingTop: 15,
    marginLeft: 20
  },

  categoryItemWrapper: {
    paddingBottom: 20,
    backgroundColor: colors.primary,
    marginRight: 20,
    borderRadius: 20
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20
  },
  categoryItemTitle: {
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Montserrat-medium',
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 26,
    height: 26,
    backgroundColor: colors.white,
    borderRadius: 26,
    marginVertical: 20
  },
  categoryIcon: {

  }
});
