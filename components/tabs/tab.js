import { Text, TouchableOpacity, View } from 'react-native';

const CustomTabs = ({ active, handleTab }) => {
  return (
    <View className='bg-grey rounded-full p-1 flex-row w-full mb-4'>
      <TouchableOpacity
        className={`${
          active === 1 ? 'bg-light' : ''
        } rounded-full flex-row justify-center w-1/2 py-2`}
        onPress={() => handleTab(1)}
      >
        <Text
          className={`${
            active === 1 ? 'text-[#fff] font-semibold' : 'text-[#e8ebea]'
          } `}
        >
          Hitung Potongan Admin
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`${
          active === 2 ? 'bg-light' : ''
        } rounded-full flex-row justify-center w-1/2 py-2`}
        onPress={() => handleTab(2)}
      >
        <Text
          className={`${
            active === 2 ? 'text-[#fff] font-semibold' : 'text-[#e8ebea]'
          } `}
        >
          Hitung Harga Jual
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomTabs;
