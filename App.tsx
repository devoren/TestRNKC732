import React from 'react';
import {Button, ScrollView, StyleSheet} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  KeyboardProvider,
  KeyboardStickyView,
  useKeyboardController,
} from 'react-native-keyboard-controller';
import TextInputMask from 'react-native-text-input-mask';

const App = () => {
  const {setEnabled} = useKeyboardController();
  const [phone, setPhone] = React.useState('');

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        overScrollMode="never"
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled">
        <TextInputMask
          mask="+1 ([000]) [000] [00] [00]"
          onChangeText={(formatted, extracted) => {
            console.log(formatted); // +1 (123) 456-78-90
            setPhone(extracted ?? ''); // 1234567890
          }}
          keyboardType="phone-pad"
          placeholder="+1 (___) ___ __ __"
          style={{
            width: '100%',
            backgroundColor: '#e2e8f0',
            borderRadius: 4,
            paddingHorizontal: 12,
          }}
        />
      </ScrollView>
      <KeyboardStickyView>
        <Button title="Keyboard Sticky View" />
      </KeyboardStickyView>
    </>
  );
};

const AppWithProviders = () => {
  return (
    <KeyboardProvider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </KeyboardProvider>
  );
};

export default AppWithProviders;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
