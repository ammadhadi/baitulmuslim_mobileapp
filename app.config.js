import dotenv from 'dotenv';
import { color } from 'react-native-reanimated';
import Colors from './constants/Colors';
dotenv.config();

export default () => ({
  expo: {
<<<<<<< HEAD
    name: 'BaitUlMuslim',
    description: 'Making life connections easy',
    slug: 'baitulmuslim-app',
    owner: 'Ammad Hadi',
    privacy: 'public',
    version: '1.1.0',
    orientation: 'portrait',
    icon: './assets/images/favicon3.png',
=======
    name: 'BaitulMuslim',
    description: 'Making life easy with BaitulMuslim',
    slug: 'baitulmuslim-app',
    owner: 'ammad_hadi',
    privacy: 'public',
    version: '1.1.0',
    orientation: 'portrait',
    icon: './assets/images/baitulmuslim-icon.png',
>>>>>>> 707286ddc060d9f5b96f44a9fb82b8ac7b6a07cf
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
<<<<<<< HEAD
        foregroundImage: './assets/images/favicon3.png',
        backgroundColor:'#FFFFFF',
=======
        foregroundImage: './assets/images/baitulmuslim-icon.png',
        backgroundColor: '#FFFFFF',
>>>>>>> 707286ddc060d9f5b96f44a9fb82b8ac7b6a07cf
      },
      permissions: ['ACCESS_FINE_LOCATION', 'CAMERA', 'WRITE_EXTERNAL_STORAGE'],
      package: 'baitulmuslim.app',
      versionCode: 202304260, // Using the date + T (try number) format YYYYMMDDT as version code.
    },
    web: {
<<<<<<< HEAD
      favicon: './assets/images/favicon3.png',
=======
      favicon: './assets/images/baitulmuslim-icon.png',
>>>>>>> 707286ddc060d9f5b96f44a9fb82b8ac7b6a07cf
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
