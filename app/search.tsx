import CartIcon from "@/assets/icons/CartIcon";
import LeftArrowIcon from "@/assets/icons/LeftArrowIcon";
import StarIcon from "@/assets/icons/StarIcon";
import { CategoriesCard } from "@/components/CategoriesCard";
import { SearchBox } from "@/components/SearchBox";
import { SuggestedRestaurants } from "@/data";
import { useRouter } from "expo-router";
import { useRef } from "react";
import {
  Animated,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Search() {
  const router = useRouter();
  const animated = useRef(new Animated.Value(1)).current;
  const onPressHandler = () => {
    router.replace("/");
  };
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  return (
    <SafeAreaView className="p-6 pt-10 bg-white h-screen gap-7">
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row gap-4 items-center">
          <Pressable
            onPress={onPressHandler}
            onPressIn={fadeIn}
            className="bg-ash p-4"
            style={{
              borderRadius: 25,
            }}
          >
            <LeftArrowIcon />
          </Pressable>
          <Text className="font-semibold text-2xl text-neutral-600">
            Search
          </Text>
        </View>
        <View className="bg-[#181C2E] p-4 rounded-full">
          <CartIcon />
        </View>
      </View>
      <View>
        <SearchBox />
      </View>
      <ScrollView
        contentContainerStyle={{
          gap: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="gap-6">
          <View>
            <Text className="font-semibold text-gray-600 text-2xl">
              Recent Keywords
            </Text>
          </View>
          <View>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                gap: 10,
              }}
              showsHorizontalScrollIndicator={false}
            >
              {["Burger", "Sandwich", "Pizza", "HotDog"].map((value, index) => (
                <View
                  key={index}
                  className="px-3 py-2 border border-gray-500"
                  style={{
                    borderRadius: 18,
                  }}
                >
                  <Text className="font-semibold text-2xl text-gray-500">
                    {value}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        <View className="gap-4">
          <View>
            <Text className="font-semibold text-gray-600 text-2xl">
              Suggested Restaurants
            </Text>
          </View>
          <View className="gap-6 p-1">
            {SuggestedRestaurants.map((value, index) => (
              <View
                key={index}
                className="flex p-2 flex-row gap-4 items-center"
                style={{
                  elevation: 3,
                  borderRadius: 14,
                  backgroundColor: "white",
                  shadowOffset: {
                    height: 4,
                    width: 0,
                  },
                  shadowColor: "gray",
                }}
              >
                <View>
                  <Image
                    source={{ uri: value.image }}
                    width={80}
                    height={60}
                    style={{
                      borderRadius: 15,
                    }}
                  />
                </View>
                <View className="flex gap-1">
                  <Text className="font-bold text-xl text-slate-700">
                    {value.name}
                  </Text>
                  <View className="flex flex-row items-center gap-1">
                    <StarIcon />
                    <Text className="font-semibold text-neutral-500 text-lg">
                      {value.ratings.toString()}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <View className="gap-4">
            <Text className="font-semibold text-gray-600 text-2xl">
              Popular Fast Food
            </Text>
            <View>
              <CategoriesCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
