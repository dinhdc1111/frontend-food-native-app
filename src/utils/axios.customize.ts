import axios from "axios";
import { Platform } from "react-native";

const API_BASE_URL =
  Platform.OS === "android" 
  ? process.env.EXPO_PUBLIC_ANDROID_API_URL
  : process.env.EXPO_PUBLIC_IOS_API_URL;

// https://github.com/axios/axios?tab=readme-ov-file#instance-methods
const instance = axios.create({
  baseURL: API_BASE_URL,
});

export default instance;
