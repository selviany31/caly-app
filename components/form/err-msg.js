import { Text, View } from 'react-native';

const ErrMsg = ({ label }) => {
  return (
    <View>
      <Text className='text-[#ff0000] text-xs italic'>{`*${label} tidak boleh kosong`}</Text>
    </View>
  );
};

export default ErrMsg;
