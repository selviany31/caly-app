import { Text, TextInput, View } from 'react-native';
import ErrMsg from './err-msg';
import { addCommas, removeNonNumeric } from '../../utils/utils';

const FormText = ({ label, value, placeholder, handleChangeText, error }) => {
  return (
    <View>
      <Text className='text-lg font-semibold text-primary mb-2'>{label}</Text>
      <View
        className={`w-full py-[12px] px-4 rounded-xl border-2 ${
          error === 'error' ? 'border-[#ff0000]' : 'border-grey'
        } focus:border-secondary flex flex-row items-center`}
      >
        <TextInput
          value={addCommas(value)}
          placeholder={placeholder}
          placeholderTextColor='grey'
          onChangeText={(e) => handleChangeText(removeNonNumeric(e))}
          className='text-[16px] w-full'
        />
      </View>
      {error === 'error' && <ErrMsg label={label} />}
    </View>
  );
};

export default FormText;
