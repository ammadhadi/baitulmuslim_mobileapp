import Colors from '../constants/Colors';

export const CREATE_PROFILE_INPUTS = [
  {
    id: 'name',
    key: 'name',
    label: 'Name *',
    placeholder: null,
    placeholderTextColor: null,
    inputType: 'textInput',
    keyboardType: 'default',
    editable: true,
    desabled: false,
    required: true,
    autoCorrect: false,
    autoCapitalize: 'sentences',
    autoComplete: 'name',
    dataDetectorTypes: null,
    returnKeyType: 'next',
    field_name: 'name',
    error_text_message: 'Please enter a name',
  },
  {
    id: 'birthdate',
    key: 'birthdate',
    label: 'Birthdate *',
    placeholder: 'YYYY-MM-DD',
    placeholderTextColor: Colors.placeholder,
    inputType: 'inputMask',
    keyboardType: 'default',
    editable: true,
    desabled: false,
    required: true,
    autoCorrect: false,
    autoCapitalize: 'sentences',
    autoComplete: 'birthdate-day',
    dataDetectorTypes: 'calendarEvent',
    returnKeyType: 'next',
    field_name: 'birthdate',
    error_text_message: 'Please enter you birthdate',
  },
  {
    id: 'university',
    key: 'university',
    label: 'University',
    placeholder: null,
    placeholderTextColor: null,
    inputType: 'textInput',
    keyboardType: 'default',
    editable: true,
    desabled: false,
    required: false,
    autoCorrect: false,
    autoCapitalize: 'sentences',
    autoComplete: null,
    dataDetectorTypes: null,
    returnKeyType: 'next',
    field_name: 'university',
    error_text_message: null,
  },
  {
    id: 'gender',
    key: 'gender',
    label: 'Gender *',
    placeholder: { label: 'Select an item', value: 'Select an item' },
    placeholderTextColor: Colors.placeholder,
    inputType: 'picker',
    keyboardType: 'default',
    pickerRequired: true,
    editable: true,
    desabled: false,
    required: true,
    autoCorrect: false,
    autoCapitalize: 'sentences',
    autoComplete: null,
    dataDetectorTypes: null,
    returnKeyType: 'next',
    field_name: 'gender',
    error_text_message: 'Please enter your gender',
    items: [
      {
        label: 'Male',
        value: 'M',
      },
      {
        label: 'Female',
        value: 'W',
      },
      {
        label: 'Non-binary',
        value: 'X',
      },
    ],
  },
  {
    id: 'show_me',
    key: 'show_me',
    label: 'Show me *',
    placeholder: { label: 'Select an item', value: 'Select an item' },
    placeholderTextColor: Colors.placeholder,
    inputType: 'picker',
    keyboardType: 'default',
    pickerRequired: true,
    editable: true,
    desabled: false,
    required: true,
    autoCorrect: false,
    autoCapitalize: null,
    autoComplete: null,
    dataDetectorTypes: null,
    returnKeyType: 'next',
    field_name: 'show_me',
    error_text_message: 'Please select who you want to see in the swipe',
    items: [
      {
        label: 'Men',
        value: 'M',
      },
      {
        label: 'Women',
        value: 'W',
      },
      {
        label: 'Everyone',
        value: 'X',
      },
    ],
  },
];

export const UPDATE_PROFILE_INPUTS = [
  {
    id: 'name',
    key: 'name',
    label: 'Name',
    placeholder: null,
    placeholderTextColor: null,
    inputType: 'textInput',
    keyboardType: 'default',
    editable: false,
    desabled: true,
    required: true,
    autoCorrect: false,
    autoCapitalize: 'sentences',
    autoComplete: 'name',
    dataDetectorTypes: null,
    returnKeyType: 'next',
    field_name: 'name',
    error_text_message: 'Please enter a name',
  },
  {
    id: 'email',
    key: 'email',
    label: 'Email',
    placeholder: null,
    placeholderTextColor: null,
    inputType: 'textInput',
    keyboardType: 'default',
    editable: false,
    desabled: true,
    required: true,
    autoCorrect: false,
    autoCapitalize: null,
    autoComplete: 'email',
    dataDetectorTypes: null,
    returnKeyType: 'next',
    field_name: 'email',
    error_text_message: 'Please enter your Email',
  },
  {
    id: 'birthdate',
    key: 'birthdate',
    label: 'Birthdate',
    placeholder: 'YYYY-MM-DD',
    placeholderTextColor: Colors.placeholder,
    inputType: 'inputMask',
    keyboardType: 'default',
    editable: false,
    desabled: true,
    required: true,
    autoCorrect: false,
    autoCapitalize: 'sentences',
    autoComplete: 'birthdate-day',
    dataDetectorTypes: 'calendarEvent',
    returnKeyType: 'next',
    field_name: 'birthdate',
    error_text_message: 'Please enter you birthdate',
  },
  {
    id: 'age',
    key: 'age',
    label: 'Age',
    placeholder: null,
    placeholderTextColor: null,
    inputType: 'textInput',
    keyboardType: 'numeric',
    editable: false,
    desabled: true,
    required: false,
    autoCorrect: false,
    autoCapitalize: null,
    autoComplete: null,
    dataDetectorTypes: null,
    maxLength: 2,
    returnKeyType: 'next',
    field_name: 'age',
    error_text_message: 'Enter your age',
  },
  {
    id: 'instagram',
    key: 'instagram',
    label: 'Instagram',
    placeholder: null,
    placeholderTextColor: null,
    inputType: 'textInput',
    keyboardType: 'default',
    editable: true,
    desabled: false,
    required: false,
    autoCorrect: false,
    autoCapitalize: 'sentences',
    autoComplete: null,
    dataDetectorTypes: null,
    returnKeyType: 'next',
    field_name: 'instagram',
    error_text_message: null,
  },
  {
    id: 'nationality',
    key: 'nationality',
    label: 'Where are you from?',
    placeholder: null,
    placeholderTextColor: null,
    inputType: 'textInput',
    keyboardType: 'default',
    editable: true,
    desabled: false,
    required: false,
    autoCorrect: false,
    autoCapitalize: 'sentences',
    autoComplete: null,
    dataDetectorTypes: null,
    returnKeyType: 'next',
    field_name: 'nationality',
    error_text_message: null,
  },
  {
    id: 'city',
    key: 'city',
    label: 'City',
    placeholder: null,
    placeholderTextColor: null,
    inputType: 'textInput',
    keyboardType: 'default',
    editable: true,
    desabled: false,
    required: false,
    autoCorrect: false,
    autoCapitalize: 'sentences',
    autoComplete: null,
    dataDetectorTypes: null,
    returnKeyType: 'next',
    field_name: 'city',
    error_text_message: null,
  },
  {
    id: 'university',
    key: 'university',
    label: 'University',
    placeholder: null,
    placeholderTextColor: null,
    inputType: 'textInput',
    keyboardType: 'default',
    editable: true,
    desabled: false,
    required: false,
    autoCorrect: false,
    autoCapitalize: 'sentences',
    autoComplete: null,
    dataDetectorTypes: null,
    returnKeyType: 'next',
    field_name: 'university',
    error_text_message: null,
  },
  {
    id: 'gender',
    key: 'gender',
    label: 'Gender *',
    placeholder: {},
    placeholderTextColor: Colors.placeholder,
    inputType: 'picker',
    keyboardType: 'default',
    pickerRequired: true,
    editable: true,
    desabled: false,
    required: false,
    autoCorrect: false,
    autoCapitalize: 'sentences',
    autoComplete: null,
    dataDetectorTypes: null,
    returnKeyType: 'next',
    field_name: 'gender',
    error_text_message: 'Please enter your gender',
    items: [
      {
        label: 'Male',
        value: 'M',
      },
      {
        label: 'Female',
        value: 'W',
      },
      {
        label: 'Non-binary',
        value: 'X',
      },
    ],
  },
  {
    id: 'show_me',
    key: 'show_me',
    label: 'Show me *',
    placeholder: {},
    placeholderTextColor: Colors.placeholder,
    inputType: 'picker',
    keyboardType: 'default',
    pickerRequired: true,
    editable: true,
    desabled: false,
    required: false,
    autoCorrect: false,
    autoCapitalize: null,
    autoComplete: null,
    dataDetectorTypes: null,
    returnKeyType: 'next',
    field_name: 'show_me',
    error_text_message: 'Please select who you want to see in the swipe',
    items: [
      {
        label: 'Men',
        value: 'M',
      },
      {
        label: 'Women',
        value: 'W',
      },
      {
        label: 'Everyone',
        value: 'X',
      },
    ],
  },
];
