import SearchIcon from '@/assets/icons/SearchIcon';
import { Text, TextInput, View } from 'react-native';

export function SearchBox() {
  return (
    <View
      className="bg-box p-2"
      style={{
        borderRadius: 12,
      }}
    >
      <View className="flex flex-row items-center gap-2">
        <SearchIcon />
        <TextInput
          placeholder="Search dishes, restaurants"
          className="font-medium text-lg"
        />
      </View>
    </View>
  );
}
