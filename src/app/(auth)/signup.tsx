import AppButton from "@/shared/components/button/AppButton";
import SocialButton from "@/shared/components/button/SocialButton";
import AppInput from "@/shared/components/input/AppInput";
import { APP_COLOR } from "@/shared/constants/colors";
import { registerAPI } from "@/utils/api";
import { SignupSchema } from "@/utils/validate.schema";
import { Link, router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-root-toast";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const SignUp = (props: Props) => {
  const handleSignUp = async (name: string, email: string, password: string) => {
    try {
      const res = await registerAPI(email, password, name);
      if (res.data) {
        // Use replace to prevent going back to the sign-up page
        router.replace({
          pathname: "/(auth)/verify",
          params: {
            email: email,
          },
        });
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
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleSignUp(values.name, values.email, values.password);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.content}>
            <View>
              <Text style={styles.title}>Đăng ký</Text>
            </View>
            <AppInput
              title="Họ tên"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              errors={errors.name}
            />
            <AppInput
              keyboardType="email-address"
              title="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              errors={errors.email}
            />
            <AppInput
              title="Mật khẩu"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              errors={errors.password}
            />
            <AppButton
              title="Đăng ký"
              onPress={handleSubmit as any}
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
            <SocialButton title="Đăng ký với" />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
export default SignUp;
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
