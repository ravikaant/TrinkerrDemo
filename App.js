/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import fetchAPIData from './fetchData';

const {width, height} = Dimensions.get('window');

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : 'rgba(233, 244, 250, 1)',
    
  };

  const [apiData, setApiData] = useState(null);
  
  const renderItem = ({item, index}) => (
    <View style={styles.itemContainer}>
      <View style={styles.introContainer}>
        <Image
          source={require('./icon.png')}
          resizeMode={'contain'}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.otherInfoContainer}>
            <Text style={styles.byTitle}>
              {'by '}
              <Text style={styles.holderName}>{item.portfolio.trader.name}</Text>
            </Text>
          </View>
          <View style={styles.otherInfoContainer}>
            {item.isFollowed && (
              <View style={[styles.textContainer, {marginStart: -10}]}>
                <Text style={styles.boldText}>{'FOLLOWING'}</Text>
              </View>
            )}
            {item.inWatchlist && (
              <View style={styles.textContainer}>
                <Text style={styles.boldText}>{'WATCHING'}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
        justifyContent: 'space-between',}}>
        {item.portfolio.assetClasses?.map(tag => (
          <View style={styles.tag}>
            <Text style={{color: '#FFFFFF'}}>{tag}</Text>
          </View>
        ))}
      </View>
      <View style={styles.paramsContainer}>
        {item.AUM !== null ? <View style={styles.paramsTitle}>
            <Text style={styles.greyText}>{'AUM'}</Text>
            <Text>{item.AUM}</Text>
          </View> : null}
        {item.returns !== null ? <View style={styles.paramsTitle}>
            <Text style={styles.greyText}>{'GAINS/Month'}</Text>
            <Text>{item.returns}</Text>
          </View> : null}
        {item.indexValue !== null ? <View style={styles.paramsTitle}>
            <Text style={styles.greyText}>{'INDEX'}</Text>
            <Text>{item.indexValue}</Text>
          </View> : null}
        {item.minFollowAmount !== null ? <View style={styles.paramsTitle}>
            <Text style={styles.greyText}>{'MIN FOLLOW AMOUNT'}</Text>
            <Text>{item.minFollowAmount}</Text>
          </View> : null}
        {item.followersCount !== null ? <View style={styles.paramsTitle}>
            <Text style={styles.greyText}>{'FOLLOWERS'}</Text>
            <Text>{item.followersCount}</Text>
          </View> : null}
        {/* item.followerReturns !== null ? <View style={styles.paramsTitle}>
            <Text style={styles.greyText}>{'FOLLOWER RETURNS'}</Text>
            <Text>{item.followerReturns}</Text>
          </View> : null */}
        
      </View>
      <View style={styles.ctaContainer}>
        { item.isFollowed ? <Text style={[styles.boldText]}>{'UNFOLLOW'}</Text> : null}
        {item.inWatchlist ? <Text style={[styles.boldText]}>{'UNWATCH'}</Text> : null}
      </View>
    </View>
  );

  useEffect( () => {
    fetchAPIData({
      url: 'http://3.108.244.88:3010/api/portfolios?skip=0&limit=5&portfolioGroup=my',
      config: {
        headers: {
          "Accept": "application/json", 
          "Content-Type": "application/json", 
          "user-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY2NWE0YWVhY2I4NGNiYjI2ODJmOTQiLCJ1c2VybmFtZSI6ImtldGFudGVzdCIsImlhdCI6MTYyNzQ1NTI5NSwiZXhwIjoxNjQzMDA3Mjk1fQ.xcA1PxdHUHVRG-r1oRSCp9kzC32ojPurpobfdZBbc3I"
        },
      },
      onSuccess: setApiData
    })
  })
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList data={apiData} renderItem={renderItem} horizontal={true} />
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
    borderStartWidth: 2,
    borderStartColor: 'red',
    maxWidth: width-100,
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
    borderRadius: 10,
    padding: 5,
    marginStart: 10,
  },
  textContainer: {
    marginTop: 5,
    borderRadius: 5,
    padding: 2,
    marginStart: 10,
  },
  boldText: {
    color: 'blue',
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
  ctaContainer: {
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 5
  }
});

export default App;
