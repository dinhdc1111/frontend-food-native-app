import AppButton from '@/shared/components/button/AppButton'
import { APP_COLOR } from '@/shared/constants/colors'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const SignUp = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full name</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} />
        </View>
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
    padding: 20,
    borderRadius: 10,
  },
})