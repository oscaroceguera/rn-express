import React from 'react'
import {ScrollView, View, Text, StyleSheet } from 'react-native'
import UserInput from './UserInput'
import List from './Lists'
import Memo from './Memo'
import UseState from './UseState'
import UseReducer from './UseReducer'
import UseEffect from './UseEffect'
import Layout from './Layout'
import FlatList from './FlatList'
import SectionList from './SectionList'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>USER INPUT</Text>
      <UserInput />
      <Text style={styles.title}>LIST</Text>
      <List />
      <Text style={styles.title}>MEMO</Text>
      <Memo />
      <Text style={styles.title}>USE STATE</Text>
      <UseState />
      <Text style={styles.title}>USE REDUCER</Text>
      <UseReducer />
      <Text style={styles.title}>USE EFFECT</Text>
      <UseEffect />
      <Text style={styles.title}>LAYOUT</Text>
      <Layout />
      <Text style={styles.title}>FLatlist</Text>
      <FlatList />
      <Text style={styles.title}>SectionList</Text>
      <SectionList />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    color: 'blue'
  }
});