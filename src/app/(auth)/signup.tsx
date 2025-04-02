import AppButton from '@/shared/components/button/AppButton'
import SocialButton from '@/shared/components/button/SocialButton'
import AppInput from '@/shared/components/input/AppInput'
import { APP_COLOR } from '@/shared/constants/colors'
import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const SignUp = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <AppInput title='Full name' />
        <AppInput keyboardType='email-address' title='E-mail' />
        <AppInput title='Password' />
        <AppButton
          title='Register'
          onPress={() => alert(1)}
          textStyle={{ color: "#fff", paddingVertical: 5, textTransform: "uppercase" }}
          pressStyle={{ alignSelf: "stretch" }}
          btnStyle={{
            backgroundColor: APP_COLOR.PRIMARY_COLOR,
            justifyContent: "center",
            paddingHorizontal: 22,
            marginHorizontal: 40,
            marginTop: 30,
            maxWidth: 315
          }}
        />
        <View style={{
          marginVertical: 15,
          flexDirection: "row",
          gap: 10,
          justifyContent: "center"
        }}>
          <Text style={{
            color: "black",
          }}>
            Already have an account?
          </Text>
          <Link href={"/(auth)/login"}>
            <Text style={{ color: "black", textDecorationLine: 'underline' }}>
              SignIn
            </Text>
          </Link>

        </View>
        <SocialButton />
      </View>
    </SafeAreaView>
  )
}
export default SignUp
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    marginHorizontal: 26,
    gap: 10
  },
  title: {
    fontWeight: "600",
    fontSize: 37,
    marginVertical: 30
  },
})