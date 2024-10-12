export const SETTINGS_ACCOUNT_DATA = [
  {
    id: 'blocked-users',
    action: {
      type: 'NAVIGATE_TO_SCREEN',
      screen: 'Blocked',
    },
    icon: 'user-x',
    feather: true,
    title: 'Blocked users',
  },
  {
    id: 'delete-account',
    action: {
      type: 'DELETE_ACCOUNT',
      action_type: 'delete',
      alert_data: {
        title: 'Are you sure you want to delete your account?',
        text: 'All your data will be deleted forever',
        cancelButtonText: 'Keep my account',
        okButtonText: 'Delete',
      },
    },
    icon: 'deleteuser',
    antdesign: true,
    title: 'Delete account',
  },
  {
    id: 'privacy-policy',
    action: {
      type: 'REDIRECT_TO_URL',
<<<<<<< HEAD
      url: 'https://baitulmuslim.com.my/privacy-policy',
=======
      url: 'https://baitulmuslim.com/privacy-policy',
>>>>>>> 707286ddc060d9f5b96f44a9fb82b8ac7b6a07cf
    },
    icon: 'lock-closed-outline',
    ionicons: true,
    title: 'Privacy',
  },
];

export const SETTINGS_APP_DATA = [
  {
    id: 'share-app',
    action: {
      type: 'SHARE_APP',
    },
    icon: 'share-outline',
    ionicons: true,
    title: 'Share app',
  },
  {
    id: 'FAQ',
    action: {
      type: 'REDIRECT_TO_URL',
<<<<<<< HEAD
      url: 'https://baitulmuslim.com.my/',
=======
      url: 'https://baitulmuslim.com/',
>>>>>>> 707286ddc060d9f5b96f44a9fb82b8ac7b6a07cf
    },
    icon: 'chat-question-outline',
    materialcommunityicons: true,
    title: 'FAQ',
  },
  {
    id: 'terms-of-conditions',
    action: {
      type: 'REDIRECT_TO_URL',
<<<<<<< HEAD
      url: 'https://baitulmuslim.com.my/terms-and-conditions',
=======
      url: 'https://baitulmuslim.com/terms-and-conditions',
>>>>>>> 707286ddc060d9f5b96f44a9fb82b8ac7b6a07cf
    },
    icon: 'warning',
    antdesign: true,
    title: 'Terms and conditions',
  },
  {
    id: 'community-guidelines',
    action: {
      type: 'REDIRECT_TO_URL',
<<<<<<< HEAD
      url: 'https://baitulmuslim.com.my/community-guidelines',
=======
      url: 'https://baitulmuslim.com/community-guidelines',
>>>>>>> 707286ddc060d9f5b96f44a9fb82b8ac7b6a07cf
    },
    icon: 'team',
    antdesign: true,
    title: 'Community guidelines',
  },
  {
    id: 'safety-tips',
    action: {
      type: 'REDIRECT_TO_URL',
<<<<<<< HEAD
      url: 'https://baitulmuslim.com.my/safety-tips',
=======
      url: 'https://baitulmuslim.com/safety-tips',
>>>>>>> 707286ddc060d9f5b96f44a9fb82b8ac7b6a07cf
    },
    icon: 'Safety',
    antdesign: true,
    title: 'Safety tips',
  },
  {
    id: 'about-us',
    action: {
      type: 'REDIRECT_TO_URL',
<<<<<<< HEAD
      url: 'https://baitulmuslim.com.my/',
=======
      url: 'https://baitulmuslim.com/',
>>>>>>> 707286ddc060d9f5b96f44a9fb82b8ac7b6a07cf
    },
    icon: 'alert-circle',
    feather: true,
    title: 'About',
  },
  {
    id: 'contact-us',
    action: {
      type: 'REDIRECT_TO_URL',
<<<<<<< HEAD
      url: 'https://baitulmuslim.com.my/',
=======
      url: 'https://baitulmuslim.com/',
>>>>>>> 707286ddc060d9f5b96f44a9fb82b8ac7b6a07cf
    },
    icon: 'grid',
    feather: true,
    title: 'Contact',
  },
];
