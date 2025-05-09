import AppButton from "@/shared/components/button/AppButton";
import SocialButton from "@/shared/components/button/SocialButton";
import AppInput from "@/shared/components/input/AppInput";
import { APP_COLOR } from "@/shared/constants/colors";
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type Props = {};
const SignUp = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Đăng ký</Text>
        </View>
        <AppInput title="Họ tên" value={name} setValue={setName} />
        <AppInput keyboardType="email-address" title="Email" value={email} setValue={setEmail} />
        <AppInput title="Mật khẩu" secureTextEntry={true} value={password} setValue={setPassword} />
        <AppButton
          title="Đăng ký"
          onPress={() => console.log("Register", { name, email, password })}
          textStyle={{ color: "#fff", paddingVertical: 5, textTransform: "uppercase" }}
          pressStyle={{ alignSelf: "stretch" }}
          btnStyle={{
            backgroundColor: APP_COLOR.PRIMARY_COLOR,
            justifyContent: "center",
            paddingHorizontal: 22,
            marginHorizontal: 40,
            marginTop: 30,
            maxWidth: 315,
          }}
        />
        <View
          style={{
            marginVertical: 15,
            flexDirection: "row",
            gap: 5,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "black",
            }}
          >
            Bạn đã có tài khoản?
          </Text>
          <Link href={"/(auth)/login"}>
            <Text style={{ color: "#002c8c" }}>Đăng nhập ngay</Text>
          </Link>
        </View>
        <SocialButton />
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginHorizontal: 26,
    gap: 10,
  },
  title: {
    fontWeight: "600",
    fontSize: 37,
    marginVertical: 30,
  },
});
