import { Pressable, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Checkbox = ({ checked, label, handleCheck, containerStyles }) => {
  return (
    <>
      <Pressable
        className={`flex-row items-center ${containerStyles}`}
        onPress={handleCheck}
      >
        <View
          className={`${
            checked ? 'bg-primary' : 'border-2 border-grey'
          } rounded-lg w-full h-full flex items-center justify-center w-[24px] h-[24px]`}
        >
          {checked && <AntDesign name='check' size={18} color='#fff' />}
        </View>
        <Text className='ml-2 text-md font-semibold text-primary'>{label}</Text>
      </Pressable>
    </>
  );
};

export default Checkbox;
