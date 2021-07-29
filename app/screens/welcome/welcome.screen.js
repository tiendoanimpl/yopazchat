import React from 'react'
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import StreamLogo from '../../resources/images/stream_logo.svg'
import strings from '../../resources/strings'
import colors from '../../resources/colors'
import ItemUser from './item_user'
import pkg from '../../../package.json'

const WelcomeScreen = () => {
  //todo remove fake data
  const fakeImageUrl =
    'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2019/05/15/c436a58e-73e5-11e9-b91a-87f62b76a5ee_image_hires_115320.jpg?itok=k4qsPEgO&v=1557892405'
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.root}>
        <View style={styles.logo}>
          <StreamLogo />
        </View>
        <Text style={styles.welcomeText}>{strings.welcome.welcome}</Text>
        <Text style={styles.selectText}>{strings.welcome.select}</Text>
        <FlatList
          style={styles.list}
          data={[
            //todo remove fake data
            {
              key: 1,
              imageUrl: fakeImageUrl,
              name: 'Andrew Jones',
              des: 'Stream test account',
            },
            {
              key: 2,
              imageUrl: fakeImageUrl,
              name: 'Bryce Mosley',
              des: 'Stream test account',
            },
            {
              key: 3,
              imageUrl: fakeImageUrl,
              name: 'Bryce Mosley',
              des: 'Stream test account',
            },
            {
              key: 4,
              imageUrl: fakeImageUrl,
              name: 'Bryce Mosley',
              des: 'Stream test account',
            },
            {
              key: 5,
              imageUrl: fakeImageUrl,
              name: 'Bryce Mosley',
              des: 'Stream test account',
            },
            {
              key: 6,
              imageUrl: fakeImageUrl,
              name: 'Bryce Mosley',
              des: 'Stream test account',
            },
            {
              key: 7,
              imageUrl: fakeImageUrl,
              name: 'Bryce Mosley',
              des: 'Stream test account',
            },
            {
              key: 8,
              imageUrl: fakeImageUrl,
              name: 'Andrew Jones',
              des: 'Stream test account',
            },
            {
              key: 9,
              imageUrl: fakeImageUrl,
              name: 'Bryce Mosley',
              des: 'Stream test account',
            },
            {
              key: 10,
              imageUrl: fakeImageUrl,
              name: 'Bryce Mosley',
              des: 'Stream test account',
            },
            {
              key: 11,
              imageUrl: fakeImageUrl,
              name: 'Bryce Mosley',
              des: 'Stream test account',
            },
            {
              key: 12,
              imageUrl: fakeImageUrl,
              name: 'Bryce Mosley',
              des: 'Stream test account',
            },
            {
              key: 13,
              imageUrl: fakeImageUrl,
              name: 'Bryce Mosley',
              des: 'Stream test account',
            },
            {
              key: 14,
              imageUrl: fakeImageUrl,
              name: 'Bryce Mosley',
              des: 'Stream test account',
            },
          ]}
          renderItem={ItemUser}
        />
        <Text style={styles.bottomText}>
          {strings.welcome.version}
          {pkg.version}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: colors['light/white-snow'],
  },
  root: {
    height: '100%',
  },
  logo: {
    alignItems: 'center',
    marginTop: 34,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
  selectText: {
    fontWeight: '500',
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 12,
  },
  list: {
    marginTop: 32,
    marginBottom: 40,
  },
  bottomText: {
    fontWeight: '500',
    color: colors['light/grey-gainsboro'],
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 13,
  },
})

export default WelcomeScreen
