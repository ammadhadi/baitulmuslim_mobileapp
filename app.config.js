import dotenv from 'dotenv';
import { color } from 'react-native-reanimated';
import Colors from './constants/Colors';
dotenv.config();

export default () => ({
  expo: {
    name: 'Toogether',
    description: 'Making university life more fun',
    slug: 'toogether-app',
    owner: 'damian_stone',
    privacy: 'public',
    version: '1.1.0',
    orientation: 'portrait',
    icon: './assets/images/favicon3.png',
    platforms: ['ios', 'android'],
    splash: {
      image: './assets/images/favicon2.png',
      resizeMode: 'contain',
      backgroundColor:'#FFFFFF',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    packagerOpts: {
      assetExts: ['png', 'js', 'jpg', 'tts'],
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/favicon3.png',
        backgroundColor:'#FFFFFF',
      },
      permissions: ['ACCESS_FINE_LOCATION', 'CAMERA', 'WRITE_EXTERNAL_STORAGE'],
      package: 'toogether.app',
      versionCode: 202304260, // Using the date + T (try number) format YYYYMMDDT as version code.
    },
    web: {
      favicon: './assets/images/favicon3.png',
    },
    extra: {
      MODE: process.env.MODE || null,
      ROCKET_API_URL: process.env.ROCKET_API_URL || null,
      IOS_LOCAL_URL: process.env.IOS_LOCAL_URL || null,
      ANDROID_LOCAL_URL: process.env.ANDROID_LOCAL_URL || null,
      eas: {
        projectId: '1bbdaff3-3c02-445d-97e6-bc150d65197e',
      },
    },
  },
});
