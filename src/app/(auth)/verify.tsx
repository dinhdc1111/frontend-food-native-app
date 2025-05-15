import { View, Text, StyleSheet, Keyboard } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import OTPTextView from "react-native-otp-textinput";
import { APP_COLOR } from "@/shared/constants/colors";
import LoadingOverlay from "@/shared/components/loading/LoadingOverlay";
import { resendCodeAPI, verifyCodeAPI } from "@/utils/api";
import Toast from "react-native-root-toast";
import { router, useLocalSearchParams } from "expo-router";

type VerifyProps = {};

const Verify = (props: VerifyProps) => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const otpInput = useRef<OTPTextView>(null);
  const [code, setCode] = useState<string>("");
  const { email, isLogin } = useLocalSearchParams();

  const handleVerifyCode = async () => {
    // Call API to verify code
    setIsSubmit(true);
    Keyboard.dismiss();
    const res = await verifyCodeAPI(email as string, code);
    setIsSubmit(false);
    if (res.data) {
      // Handle success
      otpInput?.current?.clear();
      Toast.show("Kích hoạt tài khoản thành công", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        textColor: "#fff",
        backgroundColor: APP_COLOR.PRIMARY_COLOR,
        opacity: 1,
        shadow: true,
      });
      if (isLogin) {
        router.replace({ pathname: "/(tabs)" });
      } else {
        // Use replace to prevent going back to the verify page
        router.replace("/(auth)/login");
      }
    } else {
      // Handle error
      Toast.show(res.message as string, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        textColor: "#fff",
        backgroundColor: APP_COLOR.PRIMARY_COLOR,
        opacity: 1,
        shadow: true,
      });
    }
  };
  useEffect(() => {
    if (code && code.length === 6) {
      handleVerifyCode();
    }
  }, [code]);

  const handleResendCode = async () => {
    otpInput?.current?.clear();
    const res = await resendCodeAPI(email as string);
    const message = res.data ? "Gửi mã xác thực thành công" : res.message;
    Toast.show(message as string, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      textColor: "#fff",
      backgroundColor: APP_COLOR.PRIMARY_COLOR,
      opacity: 1,
      shadow: true,
    });
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Xác thực tài khoản</Text>
        <Text style={styles.subheading}>
          Vui lòng nhập mã xác thực được gửi tới địa chỉ email: nguyenvana@example.com
        </Text>
        <View style={{ marginVertical: 20 }}>
          <OTPTextView
            ref={otpInput}
            handleTextChange={setCode}
            inputCount={6}
            inputCellLength={1}
            tintColor={APP_COLOR.PRIMARY_COLOR}
            autoFocus
            textInputStyle={{
              borderWidth: 1,
              borderColor: APP_COLOR.PRIMARY_COLOR,
              borderBottomWidth: 1,
              borderRadius: 5,
              // @ts-ignore: next-line
              color: APP_COLOR.PRIMARY_COLOR,
            }}
          />
        </View>
        <View style={{ marginVertical: 20, flexDirection: "row" }}>
          <Text>Không nhận được mã xác thực, </Text>
          <Text onPress={handleResendCode} style={{ color: APP_COLOR.PRIMARY_COLOR, textDecorationLine: "underline" }}>
            Gửi lại mã xác thực
          </Text>
        </View>
      </View>
      {isSubmit && <LoadingOverlay />}
    </>
  );
};

export default Verify;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 20,
    color: APP_COLOR.PRIMARY_COLOR,
  },
  subheading: {
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 20,
  },
});
