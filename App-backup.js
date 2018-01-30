import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import schedule from './activities.json';
import Swiper from 'react-native-swiper';

export default class App extends React.Component {
  renderPlan(week) {
    return(
      schedule[week]['plan'].map((item, key) => {
        return (
          <View style={styles.daySchedule} key={key}>
            <View style={styles.daysOfWeek}>
              <Text style={styles.scheduleDay}>{item.dayOfWeek}</Text>
            </View>
            <View style={styles.bulletImage}>
                {
                  item.activity === 'Rest' ?
                    <Image source={require('./img/rest-day-bullet.png')} style={styles.bulletImage} />
                  : item.activity === 'Short Run' ?
                    <Image source={require('./img/run-bullet.png')} style={styles.bulletImage} />
                  : item.activity === 'Cross Train' ?
                    <Image source={require('./img/cross-train-bullet.png')} style={styles.bulletImage} />
                  :
                    <Image source={require('./img/long-run-bullet.png')} style={styles.lastBulletImage} />
                }
            </View>
            <View>
              <Text style={styles.scheduleActivity}>{item.activity}</Text>
              <Text style={styles.scheduleDuration}>{item.duration}</Text>
            </View>
          </View>
        )
      })
    )
  }

  render() {
    return (
      <Swiper
        loop={false}
        showsPagination={false}
      >
        <View style={styles.container}>
          <Text style={styles.weekHeader}>Week Four</Text>
          <Text style={styles.weekSubheader}>January 22 - 28</Text>
          <View style={styles.activitySchedule}>
            {this.renderPlan('Week One')}
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.weekHeader}>Week Four</Text>
          <Text style={styles.weekSubheader}>January 22 - 28</Text>
          <View style={styles.activitySchedule}>
            {this.renderPlan('weekTwo')}
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.weekHeader}>Week Four</Text>
          <Text style={styles.weekSubheader}>January 22 - 28</Text>
          <View style={styles.activitySchedule}>
            {this.renderPlan('weekThree')}
          </View>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 100,
    paddingLeft: 50
  },
  weekHeader: {
    fontSize: 36,
    fontWeight: 'bold'
  },
  weekSubheader: {
    fontSize: 20,
    color: 'rgba(0,0,0,.5)',
    marginBottom: 50
  },
  daySchedule: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 80,
  },
  daysOfWeek: {
    marginRight: 30,
    width: 35,
    marginTop: 3
  },
  scheduleDay: {
    fontSize: 16,
    color: 'rgba(0,0,0,.25)',
    textAlign: 'right'
  },
  bulletImage: {
    height: 75,
    width: 14,
    marginTop: 3,
    marginRight: 32
  },
  lastBulletImage: {
    height: 14,
    width: 14,
    marginTop: 3,
    marginRight: 32
  },
  scheduleActivity: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  scheduleDuration: {
    fontSize: 18,
    color: 'rgba(0,0,0,.5)'
  },
});
