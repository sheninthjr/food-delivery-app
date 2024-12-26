import { CategoriesTypes } from "@/types";
import { Image, ScrollView, Text, View } from "react-native";

export function CategoriesCard() {
  const data: CategoriesTypes[] = [
    {
      id: 1,
      name: "Pizza",
      image:
        "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
      price: 70,
    },
    {
      id: 2,
      name: "Bugger",
      image:
        "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=",
      price: 50,
    },
    {
      id: 3,
      name: "Sandwich",
      image:
        "https://media.istockphoto.com/id/1397193477/photo/club-sandwich-made-with-bacon-ham-turkey-cheese-lettuce-and-tomato.jpg?s=612x612&w=0&k=20&c=fjNyxTEA0L88bqENs8_SKMnfAOyWlNPGxLIxz9nsSss=",
      price: 100,
    },
    {
      id: 4,
      name: "Coffee",
      image:
        "https://media.istockphoto.com/id/1426308134/photo/south-indian-filter-coffee-served-in-a-traditional-tumbler-or-cup-over-roasted-raw-beans.jpg?s=612x612&w=0&k=20&c=0_pG57x7SK2y8hEBpcMvUrmBLtkwwWfdKDD4p4BZqhk=",
      price: 20,
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{ gap: 8 }}
      showsHorizontalScrollIndicator={false}
    >
      {data.map((value, index) => (
        <View
          key={index}
          className="rounded-xl w-44 h-60 m-2"
          style={{
            borderRadius: 14,
            backgroundColor: "white",
            shadowColor: "gray",
            shadowOpacity: 0.1,
            shadowRadius: 1,
            elevation: 5
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
        </View>
      ))}
    </ScrollView>
  );
}
