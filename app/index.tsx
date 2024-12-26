import CartIcon from '@/assets/icons/CartIcon';
import ExploreIcon from '@/assets/icons/ExploreIcon';
import RightArrowIcon from '@/assets/icons/RightArrowIcon';
import { CategoriesCard } from '@/components/CategoriesCard';
import { Restaurant } from '@/components/Restaurant';
import { SearchBox } from '@/components/SearchBox';
import { Link } from 'expo-router';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView className="p-6 pt-10 bg-white h-screen gap-8">
      <View className="flex flex-row justify-between">
        <View className="flex flex-row gap-5 items-center">
          <View
            className="bg-ash p-4 font-bold"
            style={{
              borderRadius: 25,
            }}
          >
            <ExploreIcon />
          </View>
          <View>
            <Text className="text-[#FC6E2A] font-bold text-lg">DELIVER TO</Text>
            <Text className="text-neutral-600 font-medium text-lg">
              Sheninth Jr
            </Text>
          </View>
        </View>
        <View className="bg-[#181C2E] p-4 rounded-full">
          <CartIcon />
        </View>
      </View>
      <View className="flex flex-row">
        <Text className="text-xl">Hey, Sheninth Jr,</Text>
        <Text className="font-bold text-xl"> Good Afternoon!</Text>
      </View>
      <View>
        <SearchBox />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 18,
        }}
      >
        <View>
          <View className="flex flex-row justify-between items-center">
            <View>
              <Text className="font-bold text-neutral-500 text-2xl">
                All Categories
              </Text>
            </View>
            <Link href={'/search'}>
              <View className="flex flex-row items-center">
                <Text className="text-xl font-semibold text-neutral-700">
                  See All
                </Text>
                <RightArrowIcon />
              </View>
            </Link>
          </View>
        </View>
        <View>
          <CategoriesCard />
        </View>
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text className="font-bold text-neutral-500 text-2xl">
              Open Restaurants
            </Text>
          </View>
          <Link href={'/search'}>
            <View className="flex flex-row items-center">
              <Text className="text-xl font-semibold text-neutral-700">
                See All
              </Text>
              <RightArrowIcon />
            </View>
          </Link>
        </View>
        <View>
          <Restaurant />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
