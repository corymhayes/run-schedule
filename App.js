import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import schedule from './schedule.json';
import Swiper from 'react-native-swiper';
import styles from './Style.js';


/*
  TODO:
  WORK ON GETTING SWIPER PAGINATION TO DEFAULT TO THE CURRENT WEEK BASED ON THE DAY
*/

export default class App extends React.Component {
  render() {
    const currentDate = new Date('January 05, 2018');
    currentDate.getDate() < 10 ? currentDay = '0' + currentDate.getDate() : currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const testDate = currentMonth + '' + currentDay;
    return (
      <Swiper
        loop={false}
        showsPagination={false}
        index={currentDate.getDate()}
      >
        {
          schedule.plan.map((planItem, planKey) => {
            return(
              <View key={planKey} style={styles.container}>
                {
                  (testDate >= planItem.calcDateStart && testDate <= planItem.calcDateEnd) ?
                    <View style={styles.weekHeaderView}>
                      <Image source={require('./img/current-week-bullet.png')} style={styles.currentWeekBullet} />
                      <Text style={styles.weekHeader}>{planItem.planWeekNum}</Text>
                    </View>
                    :
                    <View style={styles.weekHeaderView}>
                      <Text style={styles.weekHeader}>{planItem.planWeekNum}</Text>
                    </View>
                }
                <Text style={styles.weekSubheader}>{planItem.planWeekDate}</Text>
                <View style={styles.activitySchedule}>
                  {
                    planItem.weeklyPlan.map((activityItem, activityKey) => {
                      return(
                        <View key={activityKey} style={styles.daySchedule}>
                          <View style={styles.daysOfWeek}>
                            <Text style={styles.scheduleDay}>{activityItem.dayOfWeek}</Text>
                          </View>
                          <View style={styles.bulletImage}>
                              {
                                activityItem.activity === 'Rest' ?
                                  <Image source={require('./img/rest-day-bullet.png')} style={styles.bulletImage} />
                                : activityItem.activity === 'Short Run' ?
                                  <Image source={require('./img/run-bullet.png')} style={styles.bulletImage} />
                                : activityItem.activity === 'Cross Train' ?
                                  <Image source={require('./img/cross-train-bullet.png')} style={styles.bulletImage} />
                                :
                                  <Image source={require('./img/long-run-bullet.png')} style={styles.lastBulletImage} />
                              }
                          </View>
                          <View>
                            <Text style={styles.scheduleActivity}>{activityItem.activity}</Text>
                            <Text style={styles.scheduleDuration}>{activityItem.duration}</Text>
                          </View>
                        </View>
                      )
                    })
                  }
                </View>
              </View>
            )
          })
        }
      </Swiper>
    );
  }
}
