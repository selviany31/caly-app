import { Picker } from '@react-native-picker/picker';
import { Text, View } from 'react-native';
import ErrMsg from './err-msg';

const FormSelect = ({ data, label, value, handleValue, error }) => {
  return (
    <View>
      <Text className='text-lg font-semibold text-primary mb-2'>{label}</Text>
      <View
        className={`border rounded-xl  border-2 ${
          error === 'error' ? 'border-[#ff0000]' : 'border-grey'
        } focus:border-secondary`}
      >
        <Picker selectedValue={value} onValueChange={handleValue}>
          <Picker.Item
            value=''
            label={`Masukkan ${label}`}
            style={{ color: 'grey' }}
          />
          {data?.map((el, i) => (
            <Picker.Item key={i} label={el.label} value={el.value} />
          ))}
        </Picker>
      </View>
      {error === 'error' && <ErrMsg label={label} />}
    </View>
  );
};

export default FormSelect;
