import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/widgets/tabs/Tabs'
import * as Location from 'expo-location'
import { WEATHER_API_KEY, DEMO_WEATHER_API_KEY } from '@env'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  //api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

  useEffect(() => {
    // ;(async () => {
    //   let { status } = await Location.requestForegroundPermissionsAsync()
    //   if (status !== 'granted') {
    //     setError('permission to access location was denied')
    //     return
    //   }
    //   let location = await Location.getCurrentPositionAsync({
    //     accuracy: Location.Accuracy.Highest,
    //     maximumAge: 10000
    //   })
    //   setLocation(location)
    //   setLat(location.coords.latitude)
    //   setLon(location.coords.longitude)
    //   await fetchWeatherData()
    // })()

    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.log('please grant location permission')
        return
      }
      let currentLocation = await Location.getCurrentPositionAsync({})
      setLocation(currentLocation)
      console.log('Current Location:')
      console.log(currentLocation)
    }
    getPermissions()
  }, [])

  // const fetchWeatherData = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
  //     )
  //     const json = await response.json()
  //     const data = json.data

  //     console.log('cek data', data)
  //     setWeather([{ asu: 'ajg' }])
  //     setLoading(false)
  //   } catch (error) {
  //     setError('Could not set weather')
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // if (weather) {
  //   console.log(weather)
  //   console.log(location)
  //   console.log(WEATHER_API_KEY)
  //   console.log(lat)
  //   console.log(lon)
  // }

  // if (location) {
  //   console.log('location', location)
  // }

  // if (loading) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size={'large'} color={'blue'} />
  //     </View>
  //   )
  // }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App
