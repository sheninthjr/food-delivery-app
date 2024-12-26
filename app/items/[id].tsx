import DeliveryIcon from '@/assets/icons/DeliveryIcon';
import LeftArrowIcon from '@/assets/icons/LeftArrowIcon';
import StarIcon from '@/assets/icons/StarIcon';
import TimeIcon from '@/assets/icons/TImeIcon';
import { ItemData } from '@/data';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

export default function Item() {
  const { id } = useLocalSearchParams();
  const item = ItemData.find((v) => v.id === id);
  const router = useRouter();

  const handlePress = () => {
    router.push('/');
  };

  return (
    <SafeAreaView className="bg-white h-screen">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative">
          <Pressable
            onPress={handlePress}
            className="bg-white flex flex-row absolute z-50 top-8 left-6 p-3"
            style={{
              borderRadius: 25,
              alignItems: 'center',
            }}
          >
            <LeftArrowIcon />
          </Pressable>
          <Image
            source={{
              uri: item?.image,
            }}
            height={350}
            style={{
              borderBottomRightRadius: 25,
              borderBottomLeftRadius: 25,
            }}
          />
        </View>
        <View className="p-4 gap-2">
          <View>
            <Text className="font-bold text-4xl">{item?.name}</Text>
            <Text className="text-neutral-500 text-lg font-semibold">
              Rose Garden
            </Text>
          </View>
          <View className="flex flex-row gap-6 items-center">
            <View className="flex flex-row items-center">
              <StarIcon />{' '}
              <Text className="font-semibold text-xl">
                {' '}
                {item?.ratings.toString()}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <DeliveryIcon />
              <Text className="font-semibold text-xl">{item?.delivery}</Text>
            </View>
            <View className="flex flex-row gap-1 items-center">
              <TimeIcon />
              <Text className="font-semibold text-neutral-500 text-xl">
                {item?.time.toString()} min
              </Text>
            </View>
          </View>
          <View>
            <Text className="font-medium text-neutral-500 text-lg tracking-wider">
              {item?.description}
            </Text>
          </View>
          <View className="gap-2">
            <Text className="font-semibold text-neutral-700 text-2xl">
              SIZE:
            </Text>
            <View className="flex flex-row items-center gap-4">
              <Text
                className="bg-ash p-4 font-semibold"
                style={{
                  borderRadius: 25,
                }}
              >
                10
              </Text>
              <Text
                className="bg-[#FC6E2A] text-white font-semibold p-4"
                style={{
                  borderRadius: 25,
                }}
              >
                14
              </Text>
              <Text
                className="bg-ash p-4 font-semibold"
                style={{
                  borderRadius: 25,
                }}
              >
                16
              </Text>
            </View>
          </View>
          <View>
            <Text className="font-semibold text-neutral-700 text-2xl">
              INGRIDENTS
            </Text>
            <View className="p-2">
              <Text className="text-lg">- Vegetables</Text>
              <Text className="text-lg">- Chicken</Text>
              <Text className="text-lg">- Cheese</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        className="bg-ash h-52 p-8 flex justify-evenly"
        style={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <View className="flex flex-row justify-between items-center">
          <Text className="font-bold text-xl">${item?.price}</Text>
          <View className="bg-black w-32 h-12 flex flex-row justify-between items-center rounded-2xl p-2">
            <Text
              className="text-white bg-gray-700 rounded-2xl w-8 h-8 text-xl"
              style={{
                textAlign: 'center',
              }}
            >
              -
            </Text>
            <Text className="text-white font-bold text-xl">2</Text>
            <Text
              className="text-white bg-gray-700 rounded-2xl w-8 h-8 text-xl"
              style={{
                textAlign: 'center',
              }}
            >
              +
            </Text>
          </View>
        </View>
        <View
          className="bg-[#FC6E2A] p-6"
          style={{
            borderRadius: 15,
          }}
        >
          <Text
            className="font-bold text-white flex justify-center items-center self-center text-xl"
            style={{
              textAlign: 'center',
            }}
          >
            ADD TO CART
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
