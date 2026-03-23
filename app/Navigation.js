import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter, usePathname } from "expo-router";

const tabs = [
  {
    key: "home",
    label: "Home",
    icon: require("./pic/icon_home.png"),
    activeIcon: require("./pic/icon_home_actived.png"),
    route: "/",
  },
  {
    key: "wishlist",
    label: "Wishlist",
    icon: require("./pic/icon_bookmark.png"),
    activeIcon: require("./pic/icon_bookmark_actived.png"),
    route: "/",
  },
  {
    key: "mybooks",
    label: "My books",
    icon: require("./pic/icon_mybook.png"),
    activeIcon: require("./pic/icon_mybook_actived.png"),
    route: "/",
  },
];

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const handleTabPress = (tab) => {
    router.push(tab.route);
  };

  const getActiveTab = () => {
    if (pathname === "/") return "home";
    return pathname.replace("/", "");
  };

  const activeTab = getActiveTab();

  return (
    <View style={styles.bottomTab}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={styles.tabItem}
          onPress={() => handleTabPress(tab)}
        >
          <Image
            source={activeTab === tab.key ? tab.activeIcon : tab.icon}
            style={styles.tabIcon}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === tab.key && styles.tabTextActive,
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomTab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 64,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
    
  },
  tabItem: {
    alignItems: "center",
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabText: {
    fontWeight:400,
    fontSize: 12,
    color: "#666",
  },
  tabTextActive: {
    color: "#4b7bec",
    fontWeight: "700",
  },
});