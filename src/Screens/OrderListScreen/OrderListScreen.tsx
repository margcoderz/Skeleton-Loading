import React, {Fragment, useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

import data from '../../db/Data.json';

type PRODUCT_TYPE = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  sku: string;
  category: string;
  stock: number;
  rating: number;
};

function OrderListScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.1, {duration: 500}), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <Fragment>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}: {item: PRODUCT_TYPE}) => {
            return (
              <>
                {loading ? (
                  <Animated.View style={animatedStyle}>
                    <LinearGradient
                      start={{x: 1, y: 1}}
                      end={{x: 0.3, y: 0.1}}
                      colors={['#f5f5f5', '#DFDFDF', '#f5f5f5']}
                      style={styles.skeletonContainer}
                    />
                  </Animated.View>
                ) : (
                  <View key={item.id} style={styles.listContainer}>
                    <View>
                      <Image
                        height={80}
                        width={80}
                        source={{
                          uri: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-1.jpg',
                        }}
                      />
                    </View>
                    <View style={styles.subRightContainer}>
                      <Text style={styles.productName}>{item.name}</Text>
                      <Text style={styles.descriptionText} numberOfLines={2}>
                        {item.description}
                      </Text>
                      <Text style={styles.price}>${item.price}</Text>
                      <Text style={styles.sku}>{item.sku}</Text>
                    </View>
                  </View>
                )}
              </>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.space} />}
          ListHeaderComponent={<View style={styles.listHead} />}
          showsVerticalScrollIndicator={false}
          refreshing={false}
          onRefresh={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 5000);
          }}
        />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  listContainer: {
    backgroundColor: '#e7efeb',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  space: {height: 10},
  listHead: {height: 10},
  descriptionText: {
    flexShrink: 1,
    lineHeight: 17,
    fontSize: 13,
  },
  productName: {fontSize: 16, color: 'black', fontWeight: '600'},
  subRightContainer: {marginHorizontal: 10, flex: 1, fontWeight: '400'},
  price: {fontSize: 11, color: 'green'},
  sku: {fontSize: 9, color: 'blue'},
  skeletonContainer: {
    padding: 20,
    height: 100,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skeleton: {
    marginBottom: 10,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    // transform: [{rotate: '80deg'}],
  },
});

export default OrderListScreen;
