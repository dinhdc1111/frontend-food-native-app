import AppButton from "@/shared/components/button/AppButton";
import SocialButton from "@/shared/components/button/SocialButton";
import AppInput from "@/shared/components/input/AppInput";
import { APP_COLOR } from "@/shared/constants/colors";
import { loginAPI } from "@/utils/api";
import { Link, router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-root-toast";

type Props = {};

const Login = (props: Props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSignUp = async () => {
    try {
      const res = await loginAPI(username, password);
      if (res.data) {
        // Use replace to prevent going back to the sign-up page
        router.replace({ pathname: "/(tabs)" });
      } else {
        const message = Array.isArray(res.message) ? res.message[0] : res.message;
        Toast.show(message, {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          textColor: "#fff",
          backgroundColor: APP_COLOR.PRIMARY_COLOR,
          opacity: 1,
          shadow: true,
        });
        // Tài khoản chưa được kích hoạt statusCode 400
        if (res.statusCode === 400) {
          Toast.show(res.message as string, {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            textColor: "#fff",
            backgroundColor: APP_COLOR.PRIMARY_COLOR,
            opacity: 1,
            shadow: true,
          });
          router.replace({
            pathname: "/(auth)/verify",
            params: {
              email: username,
              isLogin: 1,
            },
          });
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.title}>Đăng nhập</Text>
      </View>
      <AppInput keyboardType="default" title="E-mail" value={username} setValue={setUsername} />
      <AppInput title="Mật khẩu" secureTextEntry={true} value={password} setValue={setPassword} />
      <Text style={{ color: APP_COLOR.PRIMARY_COLOR, textAlign: "center", paddingTop: 20 }}>Quên mật khẩu?</Text>
      <AppButton
        title="Đăng nhập"
        onPress={handleSignUp}
        textStyle={{ color: "#fff", paddingVertical: 5, textTransform: "uppercase" }}
        pressStyle={{ alignSelf: "stretch" }}
        btnStyle={{
          backgroundColor: APP_COLOR.PRIMARY_COLOR,
          justifyContent: "center",
          paddingHorizontal: 20,
          marginHorizontal: 40,
          marginTop: 20,
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
          Bạn chưa có tài khoản?
        </Text>
        <Link href={"/(auth)/signup"}>
          <Text style={{ color: "#002c8c" }}>Đăng ký ngay</Text>
        </Link>
      </View>
      <SocialButton title="Đăng nhập với" />
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
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
