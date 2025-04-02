import { APP_COLOR } from '@/shared/constants/colors'
import { useState } from 'react'
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'
type Props = {
  title?: string,
  keyboardType?: KeyboardTypeOptions
}
const AppInput = (props: Props) => {
  const { title, keyboardType } = props
  const [isFocus, setIsFocus] = useState<boolean>(false)
  return (
    <View style={styles.inputGroup}>
      {title && <Text style={styles.label}>{title}</Text>}
      <TextInput
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        keyboardType={keyboardType}
        style={[
          styles.input,
          {
            borderColor: isFocus ? APP_COLOR.BORDER_BUTTON_ACTIVE : APP_COLOR.BORDER_BUTTON_DEFAULT
          }
        ]}
      />
    </View>
  )
}
export default AppInput
const styles = StyleSheet.create({
  inputGroup: {
    rowGap: 10,
  },
  label: {
    color: APP_COLOR.SECONDARY_TEXT_COLOR,
    fontSize: 16,
    fontWeight: "400",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d0d0d0",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
  },
})