import { View, Text, StyleSheet } from "react-native";
import React from "react";
import OTPTextView from "react-native-otp-textinput";
import { APP_COLOR } from "@/shared/constants/colors";

type VerifyProps = {};

const Verify = (props: VerifyProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Xác thực tài khoản</Text>
      <Text style={styles.subheading}>
        Vui lòng nhập mã xác thực được gửi tới địa chỉ email: nguyenvana@example.com
      </Text>
      <View style={{ marginVertical: 20 }}>
        <OTPTextView
          inputCount={6}
          inputCellLength={1}
          tintColor={APP_COLOR.PRIMARY_COLOR}
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
        <Text style={{ color: APP_COLOR.PRIMARY_COLOR, textDecorationLine: "underline" }}>Gửi lại mã xác thực</Text>
      </View>
    </View>
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
