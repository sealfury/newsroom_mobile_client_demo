import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ArticleShow = (props) => {
  const {article} = props.route.params
  return (
    <View>
      <Text>{article.title}</Text>
    </View>
  )
}

export default ArticleShow

const styles = StyleSheet.create({})
