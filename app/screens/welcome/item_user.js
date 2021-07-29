import React from 'react'
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native'
import {Image} from 'react-native-elements'
import colors from '../../resources/colors'
import ArrowRight from '../../resources/images/arrow_right.svg'
import Ripple from 'react-native-material-ripple'

const ItemUser = props => {
  const item = props.item
  return (
    <Ripple>
      <View style={styles.root}>
        <Image
          style={styles.avatar}
          source={{uri: item.imageUrl}}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={styles.nameParent}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.des}>{item.des}</Text>
        </View>
        <View style={styles.arrowRight}>
          <ArrowRight />
        </View>
      </View>
    </Ripple>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 12,
    paddingStart: 8,
    marginBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors['light/border-bottom'],
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  nameParent: {
    marginStart: 8,
    justifyContent: 'center',
  },
  name: {fontWeight: '700'},
  des: {
    color: colors['light/grey'],
    fontSize: 12,
  },
  arrowRight: {
    marginStart: 'auto',
    marginEnd: 20,
    justifyContent: 'center',
  },
})

export default ItemUser
