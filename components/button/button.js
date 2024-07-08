import { TouchableOpacity, Text } from 'react-native';

const Button = ({
  title,
  handlePress,
  containerStyles,
  textStyle,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`rounded-xl p-3 ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      }`}
      disabled={isLoading}
    >
      <Text className={`text-calm font-bold text-center ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
