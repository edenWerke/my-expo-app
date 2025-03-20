import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
    <Stack.Screen name="index" options={{ headerTitle:'edu shkor',headerLeft:()=><></> }}/>
 <Stack.Screen  name="about" options={{ title:'About' }}/>
          <Stack.Screen name="+not-found" options={{ title: 'Oops! Not Found' }} />
    </Stack>
  );
}
