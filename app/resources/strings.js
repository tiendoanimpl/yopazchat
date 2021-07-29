import LocalizedStrings from 'react-native-localization'

let strings = new LocalizedStrings({
  en: {
    welcome: {
      welcome: 'Welcome to Stream Chat',
      select: 'Select a user to try the Android SDK:',
      version: 'Stream SDK v ',
    },
  },
})

export default strings
