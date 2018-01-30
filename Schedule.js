import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import activities from './activities.json';

export default class App extends React.Component {
  render() {
    activities.schedule.map((item) => {
      console.log(items)
    })
    return (
        <View style={styles.container}>
          <Text style={styles.weekHeader}>Week Four</Text>
          <Text style={styles.weekSubheader}>January 22 - 28</Text>
          <View style={styles.activitySchedule}>
            {this.renderPlan('Week One')}
          </View>
        </View>
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
