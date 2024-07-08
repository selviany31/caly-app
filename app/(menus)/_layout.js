import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

const MenusLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='menu' options={{ headerShown: false }} />
    </Stack>
  );
};

export default MenusLayout;
