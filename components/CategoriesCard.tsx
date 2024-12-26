import { data } from '@/data';
import { useRouter } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

export function CategoriesCard() {
  const router = useRouter();
  const handlePress = (id: string) => {
    router.push(`/items/${id}`);
  };

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{ gap: 8 }}
      showsHorizontalScrollIndicator={false}
    >
      {data.map((value, index) => (
        <Pressable
          onPress={() => handlePress(value.id)}
          key={index}
          className="rounded-xl w-44 h-60 m-2"
          style={{
            borderRadius: 14,
            backgroundColor: 'white',
            shadowColor: 'gray',
            shadowOpacity: 0.1,
            shadowRadius: 1,
            elevation: 5,
          }}
        >
          <View>
            <Image
              source={{ uri: value.image }}
              height={120}
              className="rounded-t-xl"
            />
          </View>
          <View className="m-2 flex-1 flex-col justify-evenly">
            <View>
              <Text className="font-bold text-2xl">{value.name}</Text>
            </View>
            <View className="flex flex-row justify-between items-center">
              <View>
                <Text className="text-gray-500 text-lg">Starting</Text>
              </View>
              <View>
                <Text className="text-gray-800 font-bold text-lg">
                  ${value.price}
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}
