import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import Navigation from "./Navigation";

const bookDatabase = {
  "Fashionopolis": {
    title: "Fashionopolis",
    author: "Dana Thomas",
    cover: require("./pic/img_book_fashinopolis.png"),
    rating: 4,
    description: "A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.",
    price: "$46.99",
  },
  "Chanel": {
   title: "Chanel",
    author: "Patrick Mauriès",
    cover: require("./pic/img_book_chanel.png"),
    rating: 4,
    description: "A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.",
    price: "$46.99",
  },
  "Calligraphy": {
     title: "Calligraphy",
    author: "June & Lucy",
    cover: require("./pic/img_book_calligraphy.png"),
    rating: 4,
    description: "A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.",
    price: "$46.99",
  },
  "Yves Saint Laurent": {
    title: "Yves Saint Laurent",
    author: "Susy Menkes",
    cover: require("./pic/img_book_ysl.png"),
    rating: 4,
    description: "A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.",
    price: "$46.99",
  },
  "The Book of Signs": {
    title: "The Book of Signs",
    author: "Rudolf Koch",
    cover: require("./pic/img_book_tbos.png"),
    rating: 4,
    description: "A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.",
    price: "$46.99",
  },
  "Stitched": {
    title: "Stitched Up",
    author: "Tansy E.Hoskins",
    cover: require("./pic/img_book_stitchedup.png"),
    rating: 4,
    description: "A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.",
    price: "$46.99",
  },
};

export default function BookDetail() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const bookTitle = params.title || "Yves Saint Laurent";
  const book = bookDatabase[bookTitle];

  if (!book) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Image source={require("./pic/icon_back.png")} style={styles.backIcon} />
        </TouchableOpacity>
        <Text>Book not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/")} style={styles.backButton}>
          <Image source={require("./pic/icon_back.png")} style={styles.backIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsBookmarked(!isBookmarked)}
          style={styles.bookmarkButton}
        >
          <Image
            source={isBookmarked ? require("./pic/icon_bookmark_actived.png") : require("./pic/icon_bookmark.png")}
            style={styles.bookmarkIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={book.cover} style={styles.bookImage} />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.bookTitle}>{book.title}</Text>
          <Text style={styles.bookAuthor}>{book.author}</Text>

          <View style={styles.ratingContainer}>
            <View style={styles.starContainer}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Image
                  key={i}
                  source={i < book.rating ? require("./pic/icon_star_filled.png") : require("./pic/icon_star_empty.png")}
                  style={styles.starIcon}
                />
              ))}
            </View>
            <Text style={styles.ratingText}>{book.rating.toFixed(1)} / 5.0</Text>
          </View>

          <Text style={styles.description}>{book.description}</Text>

          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>BUY NOW FOR {book.price}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>

      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 16,
  },
  header: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  bookmarkButton: {
    padding: 8,
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    padding: 20,
  },
  bookImage: {
    width: 210,
    height: 300,
    borderRadius: 8,
    paddingBottom: 60,
  },
  infoContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    alignItems: 'center',
  },
  bookTitle: {
    width:320,
    height:28,
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 8,
    textAlign: 'center',
  },
  bookAuthor: {
    width:320,
    height:16,
    fontSize: 14,
    fontWeight: 400,
    color: "#666666",
    marginBottom: 12,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    alignSelf: 'center',
  },
  rating: {
    fontSize: 14,
  },
  ratingText: {
    fontSize: 14,
    color: "#999",
  },
  description: {
    fontWeight:400,
    fontSize: 17,
    color: "#131313",
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 24,
    
  },
  buyButton: {
    width:190,
    
    backgroundColor: "#6200EE",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  buyButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: 500,
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
