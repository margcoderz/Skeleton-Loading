/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';

const Loader = () => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 500,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedStyle]}>
        <View
          style={{
            //  backgroundColor: 'green',
            //    padding: 10,
            height: 50,
            width: 50,
            borderRadius: 25,
            //   borderBlockColor: 'black',
            borderWidth: 5,
            borderBlockStartColor: 'white',
            borderBlockEndColor: 'white',
            borderColor: 'blue',

            // borderStyle: 'dashed',
          }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Loader;
