/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : 'rgba(233, 244, 250, 1)',
  };

  const data = [
    {
      stockName: 'Strategic Contribution',
      holderName: 'Ravi Kant',
      tags: ['BONDS', 'COMMODITIES', 'FUTURES & OPTIONS', 'CURRENCIES'],
      following: true,
      watching: true,
      params: [
        {label: 'AUM', value: '12L'},
        {label: 'GAINS/MONTH', value: '12.3%'},
        {label: 'INDEX', value: '1028.5'},
        {label: 'FOLLOWERS', value: '700K'},
        {label: 'MIN FOLLOW AMOUNT', value: '22, 025.00'},
      ],
      ctas: ['UNFOLLOW', 'UNWATCH'],
    },
    {
      stockName: 'Strategic Contribution',
      holderName: 'Ravi Kant',
      tags: ['BONDS', 'COMMODITIES', 'FUTURES & OPTIONS', 'CURRENCIES'],
      following: true,
      watching: true,
      params: [
        {label: 'AUM', value: '12L'},
        {label: 'GAINS/MONTH', value: '12.3%'},
        {label: 'INDEX', value: '1028.5'},
        {label: 'FOLLOWERS', value: '700K'},
        {label: 'MIN FOLLOW AMOUNT', value: '22, 025.00'},
      ],
      ctas: ['UNFOLLOW', 'UNWATCH'],
    },
    {
      stockName: 'Strategic Contribution',
      holderName: 'Ravi Kant',
      tags: ['BONDS', 'COMMODITIES', 'FUTURES & OPTIONS', 'CURRENCIES'],
      following: true,
      watching: true,
      params: [
        {label: 'AUM', value: '12L'},
        {label: 'GAINS/MONTH', value: '12.3%'},
        {label: 'INDEX', value: '1028.5'},
        {label: 'FOLLOWERS', value: '700K'},
        {label: 'MIN FOLLOW AMOUNT', value: '22, 025.00'},
      ],
      ctas: ['UNFOLLOW', 'UNWATCH'],
    },
    {
      stockName: 'Strategic Contribution',
      holderName: 'Ravi Kant',
      tags: ['BONDS', 'COMMODITIES', 'FUTURES & OPTIONS', 'CURRENCIES'],
      following: true,
      watching: true,
      params: [
        {label: 'AUM', value: '12L'},
        {label: 'GAINS/MONTH', value: '12.3%'},
        {label: 'INDEX', value: '1028.5'},
        {label: 'FOLLOWERS', value: '700K'},
        {label: 'MIN FOLLOW AMOUNT', value: '22, 025.00'},
      ],
      ctas: ['UNFOLLOW', 'UNWATCH'],
    },
    {
      stockName: 'Strategic Contribution',
      holderName: 'Ravi Kant',
      tags: ['BONDS', 'COMMODITIES', 'FUTURES & OPTIONS', 'CURRENCIES'],
      following: true,
      watching: true,
      params: [
        {label: 'AUM', value: '12L'},
        {label: 'GAINS/MONTH', value: '12.3%'},
        {label: 'INDEX', value: '1028.5'},
        {label: 'FOLLOWERS', value: '700K'},
        {label: 'MIN FOLLOW AMOUNT', value: '22, 025.00'},
      ],
      ctas: ['UNFOLLOW', 'UNWATCH'],
    },
    {
      stockName: 'Strategic Contribution',
      holderName: 'Ravi Kant',
      tags: ['BONDS', 'COMMODITIES', 'FUTURES & OPTIONS', 'CURRENCIES'],
      following: true,
      watching: true,
      params: [
        {label: 'AUM', value: '12L'},
        {label: 'GAINS/MONTH', value: '12.3%'},
        {label: 'INDEX', value: '1028.5'},
        {label: 'FOLLOWERS', value: '700K'},
        {label: 'MIN FOLLOW AMOUNT', value: '22, 025.00'},
      ],
      ctas: ['UNFOLLOW', 'UNWATCH'],
    },
    {
      stockName: 'Strategic Contribution',
      holderName: 'Ravi Kant',
      tags: ['BONDS', 'COMMODITIES', 'FUTURES & OPTIONS', 'CURRENCIES'],
      following: true,
      watching: true,
      params: [
        {label: 'AUM', value: '12L'},
        {label: 'GAINS/MONTH', value: '12.3%'},
        {label: 'INDEX', value: '1028.5'},
        {label: 'FOLLOWERS', value: '700K'},
        {label: 'MIN FOLLOW AMOUNT', value: '22, 025.00'},
      ],
      ctas: ['UNFOLLOW', 'UNWATCH'],
    },
    {
      stockName: 'Strategic Contribution',
      holderName: 'Ravi Kant',
      tags: ['BONDS', 'COMMODITIES', 'FUTURES & OPTIONS', 'CURRENCIES'],
      following: true,
      watching: true,
      params: [
        {label: 'AUM', value: '12L'},
        {label: 'GAINS/MONTH', value: '12.3%'},
        {label: 'INDEX', value: '1028.5'},
        {label: 'FOLLOWERS', value: '700K'},
        {label: 'MIN FOLLOW AMOUNT', value: '22, 025.00'},
      ],
      ctas: ['UNFOLLOW', 'UNWATCH'],
    },
    {
      stockName: 'Strategic Contribution',
      holderName: 'Ravi Kant',
      tags: ['BONDS', 'COMMODITIES', 'FUTURES & OPTIONS', 'CURRENCIES'],
      following: true,
      watching: true,
      params: [
        {label: 'AUM', value: '12L'},
        {label: 'GAINS/MONTH', value: '12.3%'},
        {label: 'INDEX', value: '1028.5'},
        {label: 'FOLLOWERS', value: '700K'},
        {label: 'MIN FOLLOW AMOUNT', value: '22, 025.00'},
      ],
      ctas: ['UNFOLLOW', 'UNWATCH'],
    },
    {
      stockName: 'Strategic Contribution',
      holderName: 'Ravi Kant',
      tags: ['BONDS', 'COMMODITIES', 'FUTURES & OPTIONS', 'CURRENCIES'],
      following: true,
      watching: true,
      params: [
        {label: 'AUM', value: '12L'},
        {label: 'GAINS/MONTH', value: '12.3%'},
        {label: 'INDEX', value: '1028.5'},
        {label: 'FOLLOWERS', value: '700K'},
        {label: 'MIN FOLLOW AMOUNT', value: '22, 025.00'},
      ],
      ctas: ['UNFOLLOW', 'UNWATCH'],
    },
  ];
  const renderItem = ({item, index}) => (
    <View style={styles.itemContainer}>
      <View style={styles.introContainer}>
        <Image
          source={require('./icon.png')}
          resizeMode={'contain'}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.stockName}</Text>
          <View style={styles.otherInfoContainer}>
            <Text style={styles.byTitle}>
              {'by '}
              <Text style={styles.holderName}>{item.holderName}</Text>
            </Text>
          </View>
          <View style={styles.otherInfoContainer}>
            {item.tags.map(tag => (
              <View style={styles.tag}>
                <Text>{tag}</Text>
              </View>
            ))}
            {item.following && (
              <View style={styles.textContainer}>
                <Text style={styles.boldText}>{'FOLLOWING'}</Text>
              </View>
            )}
            {item.watching && (
              <View style={styles.textContainer}>
                <Text style={styles.boldText}>{'WATCHING'}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={styles.paramsContainer}>
        {item.params.map(param => (
          <View style={styles.paramsTitle}>
            <Text style={styles.greyText}>{param.label}</Text>
            <Text>{param.value}</Text>
          </View>
        ))}
        {item.ctas.map(cta => (
          <Text style={[styles.boldText, styles.centeredtext]}>{cta}</Text>
        ))}
      </View>
    </View>
  );
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 2,
    padding: 10,
    borderRightWidth: 2,
    borderRightColor: 'red',
  },
  introContainer: {flexDirection: 'row'},
  image: {width: 70, height: 120, marginEnd: 10},
  name: {
    marginEnd: 30,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    fontSize: 20,
  },
  infoContainer: {flexDirection: 'column', marginEnd: 30},
  otherInfoContainer: {flexDirection: 'row', flexWrap: 'wrap', marginEnd: 30},
  byTitle: {
    flexWrap: 'wrap',
    marginTop: 5,
    color: 'rgba(0,0,0,0.4)',
  },
  holderName: {
    color: 'rgba(146, 190, 227,1)',
    fontWeight: 'bold',
    marginEnd: 30,
  },
  tag: {
    marginTop: 5,
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 2,
    marginStart: 10,
  },
  textContainer: {
    marginTop: 5,
    borderRadius: 5,
    padding: 2,
    marginStart: 10,
  },
  boldText: {
    color: 'rgba(50, 250, 50, 1)',
    fontWeight: 'bold',
    marginStart: 10,
  },
  paramsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  paramsTitle: {marginStart: 10, alignItems: 'center', marginTop: 5},
  greyText: {color: 'rgba(0,0,0,0.4)'},
  centeredtext: {alignSelf: 'center'},
});

export default App;
