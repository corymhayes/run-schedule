import React, {StyleSheet} from 'react-native'

export default StyleSheet.create({

  container:{
    paddingTop: 100,
    paddingLeft: 50
  },
  weekHeaderView: {
    flexDirection: 'row',
  },
  weekHeader: {
    fontSize: 36,
    fontWeight: 'bold'
  },
  currentWeekBullet: {
    height: 14,
    width: 14,
    marginTop: 16,
    marginRight: 20
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
  }
})
