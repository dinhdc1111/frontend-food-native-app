import { APP_COLOR } from "@/shared/constants/colors";
import { useState } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
type Props = {
  title?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  value: any;
  setValue?: (value: any) => void;
  onChangeText?: any;
  onBlur?: any;
  errors?: any;
};

const AppInput = (props: Props) => {
  const { title, keyboardType, secureTextEntry = false, value, setValue, onChangeText, onBlur, errors } = props;
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  return (
    <View style={styles.inputGroup}>
      {title && <Text style={styles.label}>{title}</Text>}
      <View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocus(true)}
          onBlur={(e) => {
            if (onBlur) onBlur(e);
            setIsFocus(false);
          }}
          keyboardType={keyboardType}
          style={[
            styles.input,
            {
              borderColor: isFocus ? APP_COLOR.BORDER_BUTTON_ACTIVE : APP_COLOR.BORDER_BUTTON_DEFAULT,
            },
          ]}
          selectionColor={APP_COLOR.PRIMARY_COLOR}
          secureTextEntry={secureTextEntry && !isShowPassword}
        />
        {errors && <Text style={{ color: APP_COLOR.ERROR_COLOR, fontSize: 12, marginTop: 5 }}>{errors}</Text>}
        {secureTextEntry && (
          <FontAwesome
            name={isShowPassword ? "eye-slash" : "eye"}
            style={styles.showPassword}
            size={15}
            color="black"
            onPress={() => setIsShowPassword(!isShowPassword)}
          />
        )}
      </View>
    </View>
  );
};
export default AppInput;
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
    paddingVertical: 10,
    borderRadius: 10,
  },
  showPassword: {
    position: "absolute",
    right: 15,
    top: 22,
  },
});
