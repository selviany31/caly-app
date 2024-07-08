import { Stack, usePathname } from 'expo-router';
import { Provider } from '../store/store';

export default function App() {
  const pathname = usePathname();
  return (
    <Provider>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(menus)' options={{ headerShown: false }} />
        <Stack.Screen name='(tokopedias)' options={{ headerShown: false }} />
        <Stack.Screen name='(shopees)' options={{ headerShown: false }} />
        <Stack.Screen name='(tiktoks)' options={{ headerShown: false }} />
        <Stack.Screen name='(profiles)' options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
