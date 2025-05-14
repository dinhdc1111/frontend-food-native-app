import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '@/shared/components/button/AppButton'
import { APP_COLOR } from '@/shared/constants/colors'
import backgroundImage from '@/assets/auth/welcome-background.png';
import facebookIcon from '@/assets/auth/facebook.png';
import googleIcon from '@/assets/auth/google.png';
import { LinearGradient } from 'expo-linear-gradient';
import TextBetweenLine from '@/shared/components/text/TextBetweenLine';
import { Link, Redirect } from 'expo-router';
type Props = {}
const WelcomePage = (props: Props) => {
  // Test screen SignUp
  // if(true) return <Redirect href={"/(auth)/signup"}/>
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={backgroundImage}
    >
      <LinearGradient
        style={{ flex: 1 }}
        colors={['transparent', '#191B2F']}
        locations={[0.1, 0.8]}
      >
        <View style={styles.container}>
          <View style={styles.welcomeContent}>
            <Text style={styles.header}>Welcome to</Text>
            <Text style={styles.brand}>ShopeeFood</Text>
            <Text style={styles.description}>Your favourite foods delivered fast at your door.</Text>
          </View>
          <View style={styles.welcomeGroupButton}>
            <TextBetweenLine title='Sign in with' />
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 40,
            }}>
              <AppButton
                title='facebook'
                onPress={() => alert(1)}
                textStyle={{ textTransform: "uppercase" }}
                btnStyle={{ justifyContent: "center", backgroundColor: "#fff", }}
                icons={<Image source={facebookIcon} />}
              />
              <AppButton
                title='google'
                onPress={() => alert(1)}
                textStyle={{ textTransform: "uppercase" }}
                btnStyle={{
                  backgroundColor: "#fff",
                  justifyContent: "center",
                  paddingHorizontal: 22
                }}
                icons={<Image source={googleIcon} />}
              />
            </View>
            <View>
              <AppButton
                title='Start with your email'
                onPress={() => alert(1)}
                textStyle={{ color: "#fff", paddingVertical: 5 }}
                pressStyle={{ alignSelf: "stretch" }}
                btnStyle={{
                  backgroundColor: "#2c2c2c",
                  justifyContent: "center",
                  paddingHorizontal: 22,
                  marginHorizontal: 40,
                  borderWidth: 1,
                  borderColor: "#505050",
                  maxWidth: 315
                }}
              />
            </View>
            <View style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "center"
            }}>
              <Text style={{
                color: "white",
              }}>
                Chưa có tài khoản?
              </Text>
              <Link href={"/(auth)/signup"}>
                <Text style={{ color: "white", textDecorationLine: 'underline' }}>
                  Đăng ký.
                </Text>
              </Link>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  )
}
export default WelcomePage
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  welcomeContent: {
    flex: .6,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 28,
  },
  header: {
    fontSize: 53,
    fontWeight: '700'
  },
  brand: {
    fontSize: 53,
    fontWeight: '700',
    color: APP_COLOR.PRIMARY_COLOR,
    marginVertical: 5
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: "#30384F"
  },
  welcomeGroupButton: {
    flex: .4,
    gap: 30
  },
})