import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, Easing, TouchableOpacity, View } from "react-native";
import PagerView from "react-native-pager-view";
import { Briefcase, Globe, User } from "lucide-react-native";
import HomeScreen from "./HomeScreen";
import MyTripsScreen from "./MyTripsScreen";
import styles from "./TabsPager.styles";

const TAB_SIZE = 36;
const TAB_GAP = 14;
const TAB_PADDING = 14;
const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export default function TabsPager() {
  const pagerRef = useRef<PagerView>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tabBarVisible, setTabBarVisible] = useState(true);
  const barTranslate = useRef(new Animated.Value(0)).current;
  const barOpacity = useRef(new Animated.Value(1)).current;
  const pagerPosition = useRef(new Animated.Value(0)).current;
  const pagerOffset = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(barTranslate, {
        toValue: tabBarVisible ? 0 : 70,
        duration: 240,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(barOpacity, {
        toValue: tabBarVisible ? 1 : 0,
        duration: 220,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [barOpacity, barTranslate, tabBarVisible]);

  const setPage = (index: number) => {
    pagerRef.current?.setPage(index);
    setActiveIndex(index);
    setTabBarVisible(true);
  };

  const indicatorTranslate = useMemo(() => {
    return Animated.multiply(
      Animated.add(pagerPosition, pagerOffset),
      TAB_SIZE + TAB_GAP
    );
  }, [pagerOffset, pagerPosition]);

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  const mixColor = (startHex: string, endHex: string, t: number) => {
    const normalize = (hex: string) => hex.replace("#", "");
    const start = normalize(startHex);
    const end = normalize(endHex);
    const sr = parseInt(start.slice(0, 2), 16);
    const sg = parseInt(start.slice(2, 4), 16);
    const sb = parseInt(start.slice(4, 6), 16);
    const er = parseInt(end.slice(0, 2), 16);
    const eg = parseInt(end.slice(2, 4), 16);
    const eb = parseInt(end.slice(4, 6), 16);
    const r = Math.round(sr + (er - sr) * t);
    const g = Math.round(sg + (eg - sg) * t);
    const b = Math.round(sb + (eb - sb) * t);
    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  const getIconColor = (index: number) => {
    const distance = Math.abs(scrollProgress - index);
    const weight = clamp(1 - distance, 0, 1);
    return mixColor("#FFFFFF", "#1E1E1E", weight);
  };

  return (
    <View style={styles.container}>
      <AnimatedPagerView
        ref={pagerRef}
        style={styles.pager}
        initialPage={0}
        onPageSelected={(event) => {
          setActiveIndex(event.nativeEvent.position);
          setScrollProgress(event.nativeEvent.position);
          setTabBarVisible(true);
        }}
        onPageScroll={Animated.event(
          [{ nativeEvent: { position: pagerPosition, offset: pagerOffset } }],
          {
            useNativeDriver: true,
            listener: (event) => {
              const { position, offset } = event.nativeEvent;
              setScrollProgress(position + offset);
            },
          }
        )}
      >
        <View key="home" style={{ flex: 1 }}>
          <HomeScreen onTabBarVisibilityChange={setTabBarVisible} />
        </View>
        <View key="my-trips" style={{ flex: 1 }}>
          <MyTripsScreen onTabBarVisibilityChange={setTabBarVisible} />
        </View>
      </AnimatedPagerView>

      <Animated.View
        style={[
          styles.tabBar,
          {
            transform: [{ translateY: barTranslate }],
            opacity: barOpacity,
          },
        ]}
      >
        <Animated.View
          pointerEvents="none"
          style={[
            styles.tabIndicator,
            {
              left: TAB_PADDING,
              transform: [{ translateX: indicatorTranslate }],
            },
          ]}
        />
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setPage(0)}
          accessibilityRole="button"
        >
          <Globe size={20} color={getIconColor(0)} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setPage(1)}
          accessibilityRole="button"
        >
          <Briefcase size={20} color={getIconColor(1)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} accessibilityRole="button">
          <User size={20} color={getIconColor(2)} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
