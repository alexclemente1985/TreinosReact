import React from 'react';
import {WebView} from 'react-native-webview'; //alteração pois WebView foi removida do core

const Product = ({navigation}) => (
  <WebView source={{uri: navigation.state.params.product.url}} />
);
//stateless component
Product.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.product.title,
});

export default Product;
