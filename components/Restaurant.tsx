import DeliveryIcon from "@/assets/icons/DeliveryIcon";
import StarIcon from "@/assets/icons/StarIcon";
import TimeIcon from "@/assets/icons/TImeIcon";
import { Image, ScrollView, Text, View } from "react-native";

export function Restaurant() {
  const data = [
    {
      id: 1,
      name: "RestoBar Restaurant",
      image:
        "https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=",
      items: ["Burger", "Chicken", "Riche", "Wings"],
      ratings: 4.7,
      delivery: "Free",
      time: 20,
    },
    {
      id: 2,
      name: "SeaShell Restaurant",
      image:
        "https://media.istockphoto.com/id/1343182422/photo/empty-rustic-design-restaurant-with-wooden-furniture-and-some-decorative-plants.jpg?s=612x612&w=0&k=20&c=NxyQLdiqVJrMQOfwCgnXGlxW9cXKa1Uk11xqfSaVPs8=",
      items: ["Chicken", "Riche", "Wings"],
      ratings: 4.0,
      delivery: "Free",
      time: 15,
    },
    {
      id: 3,
      name: "PamShore Restaurant",
      image:
        "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      items: ["Burger", "Chicken", "Wings"],
      ratings: 4.9,
      delivery: "Free",
      time: 10,
    },
  ];

  return (
    <ScrollView contentContainerClassName="flex gap-6 pb-10">
      {data.map((value, index) => (
        <View
          key={index}
          className="w-full h-80"
          style={{
            borderRadius: 15,
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
              height={170}
              className="rounded-xl"
            />
          </View>
          <View className="p-3 gap-1">
            <View>
              <Text className="font-bold text-2xl text-neutral-700">
                {value.name}
              </Text>
            </View>
            <View className="flex flex-row items-center pb-1">
              {value.items.map((v, i) => (
                <Text key={i} className="flex flex-row text-gray-500 text-lg">
                  {v}
                  <Text>{value.items.length === i + 1 ? "" : " - "}</Text>
                </Text>
              ))}
            </View>
            <View className="flex flex-row gap-4 items-center">
              <View className="flex flex-row items-center">
                <StarIcon />{" "}
                <Text className="font-semibold text-xl">
                  {" "}
                  {value.ratings.toString()}
                </Text>
              </View>
              <View className="flex flex-row items-center gap-2">
                <DeliveryIcon />
                <Text className="font-semibold text-xl">{value.delivery}</Text>
              </View>
              <View className="flex flex-row gap-1 items-center">
                <TimeIcon />
                <Text className="font-semibold text-neutral-500 text-xl">
                  {value.time.toString()} min
                </Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
