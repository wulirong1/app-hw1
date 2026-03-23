import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Navigation from "./Navigation";

const popularBooks = [
  {
    title: "Fashionopolis",
    author: "Dana Thomas",
    cover: require("./pic/img_book_fashinopolis.png"),
  } ,
  {
    title: "Chanel",
    author: "Patrick Mauriès",
    cover: require("./pic/img_book_chanel.png"),
  },
  {
    title: "Calligraphy",
    author: "June & Lucy",
    cover: require("./pic/img_book_calligraphy.png"),
  }
];

const newestBooks = [
  {
    title: "Yves Saint Laurent",
    author: "Susy Menkes",
    cover: require("./pic/img_book_ysl.png"),
    rating: 4,
  },
  {
    title: "The Book of Signs",
    author: "Rudolf Koch",
    cover: require("./pic/img_book_tbos.png"),
    rating: 5,
  },
  {
    title: "Stitched Up",
    author: "Tansy E.Hoskins",
    cover: require("./pic/img_book_stitchedup.png"),
    rating: 4,
  },
];

export default function Page() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => console.log("Menu pressed")}>  
          <Image source={require("./pic/icon_menu.png")} style={styles.appBarIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("Search pressed")}>  
          <Image source={require("./pic/icon_search.png")} style={styles.appBarIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} bounces={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Books</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={false} alwaysBounceHorizontal={false} style={styles.horizontalScroll}>
            {popularBooks.map((book) => (
              <View key={book.title} style={styles.card}>
                <TouchableOpacity onPress={() => router.push({ pathname: "/book", params: { title: book.title } })}>
                  <Image source={book.cover} style={styles.cover} />
                </TouchableOpacity>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookAuthor}>{book.author}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Newest</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={false} alwaysBounceHorizontal={false} style={styles.horizontalScroll}>
            {newestBooks.map((book) => (
              <View key={book.title} style={styles.card}>
                <TouchableOpacity onPress={() => router.push({ pathname: "/book", params: { title: book.title } })}>
                  <Image source={book.cover} style={styles.cover} />
                </TouchableOpacity>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookAuthor}>{book.author}</Text>
                <View style={styles.starContainer}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Image
                      key={i}
                      source={i < book.rating ? require("./pic/icon_star_filled.png") : require("./pic/icon_star_empty.png")}
                      style={styles.starIcon}
                    />
                  ))}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  appBar: {
    width: '100%',
    height: 56,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding:8,
  },

  appBarIcons: {
    flexDirection: "row",
  },
  appBarIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  content: {
    flex: 1,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 8,
    marginLeft: 16,
  },
  horizontalScroll: {
    marginLeft: 20,
  },
  
  card: {
    width: 140,
    marginRight: 20,
    borderRadius: 10,
    paddingBottom: 8,
  },
  cover: {
    width: 140,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 8,
    marginHorizontal: 8,
  },
  bookAuthor: {
    fontSize: 12,
    color: "#555",
    marginHorizontal: 8,
  },
  rating: {
    fontSize: 12,
    color: "#f5a623",
    marginHorizontal: 8,
    marginTop: 4,
  },
  starContainer: {
    flexDirection: "row",
    marginHorizontal: 8,
    marginTop: 4,
  },
  starIcon: {
    width: 14,
    height: 14,
    marginRight: 2,
  },
});
