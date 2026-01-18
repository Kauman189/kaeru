import React, { useRef, useState } from "react";
import {
  Animated,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { User, Mic, SlidersHorizontal, Briefcase, Globe } from "lucide-react-native";
import TripCard, { TripData } from "../components/TripCard";

const TRIPS: TripData[] = [
  { id: '1', title: 'Trip to Tokyo 5 days', price: '600$avg', points: '5 points', tags: ['2-4 Friends', 'City Tourism', 'Foodie'], authorId: 'user1' },
  { id: '2', title: 'Trip to Tokyo 5 days', price: '600$avg', points: '5 points', tags: ['2-4 Friends', 'City Tourism', 'Foodie'] },
  { id: '3', title: 'Trip to Tokyo 5 days', price: '600$avg', points: '5 points', tags: ['2-4 Friends', 'City Tourism', 'Foodie'] },
  { id: '4', title: 'Trip to Tokyo 5 days', price: '600$avg', points: '5 points', tags: ['2-4 Friends', 'City Tourism', 'Foodie'] },
];

const FILTERS = ['2-4 Friends', '< 600 $'];

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const [tabBarVisible, setTabBarVisible] = useState(true);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
      listener: (event: any) => {
        const currentY = event.nativeEvent.contentOffset.y;
        if (currentY > lastScrollY.current && currentY > 50) {
          setTabBarVisible(false);
        } else if (currentY < lastScrollY.current) {
          setTabBarVisible(true);
        }
        lastScrollY.current = currentY;
      },
    }
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Text style={styles.title}>Let's plan your</Text>
              <Text style={styles.title}>next trip</Text>
            </View>
            <View style={styles.avatarContainer}>
              <User size={28} color="#4B5563" />
            </View>
          </View>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search preffer destination"
              placeholderTextColor="#9CA3AF"
            />
            <Mic size={20} color="#9CA3AF" />
          </View>

          <View style={styles.discoverHeader}>
            <View style={styles.discoverLeft}>
              <Text style={styles.discoverTitle}>Discover</Text>
              {FILTERS.map((filter, index) => (
                <View key={index} style={styles.filterChip}>
                  <Text style={styles.filterText}>{filter}</Text>
                </View>
              ))}
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <SlidersHorizontal size={20} color="#4B5563" />
              <View style={styles.filterBadge}>
                <Text style={styles.filterBadgeText}>2</Text>
              </View>
            </TouchableOpacity>
          </View>

          {TRIPS.map((trip, index) => (
            <TripCard
              key={trip.id}
              trip={trip}
              showAuthor={index === 0}
              onPress={() => console.log('Trip pressed:', trip.id)}
            />
          ))}

          <View style={{ height: 120 }} />
        </Animated.ScrollView>
      </SafeAreaView>

      <View style={styles.bottomGradient} pointerEvents="none">
        <View style={[styles.gradientLayer, { opacity: 0 }]} />
        <View style={[styles.gradientLayer, { opacity: 0.3 }]} />
        <View style={[styles.gradientLayer, { opacity: 0.5 }]} />
        <View style={[styles.gradientLayer, { opacity: 0.7 }]} />
        <View style={[styles.gradientLayer, { opacity: 0.85 }]} />
        <View style={[styles.gradientLayer, { opacity: 1 }]} />
      </View>

      <Animated.View
        style={[
          styles.tabBar,
          {
            transform: [{ translateY: tabBarVisible ? 0 : 100 }],
            opacity: tabBarVisible ? 1 : 0,
          },
        ]}
      >
        <TouchableOpacity style={styles.tabItem}>
          <Globe size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Briefcase size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <User size={24} color="white" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  headerLeft: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E1E1E',
    lineHeight: 36,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginBottom: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#1E1E1E',
  },
  discoverHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  discoverLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
    flex: 1,
  },
  discoverTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E1E1E',
    marginRight: 4,
  },
  filterChip: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  filterText: {
    fontSize: 13,
    color: '#4B5563',
    fontWeight: '500',
  },
  filterButton: {
    position: 'relative',
    padding: 8,
  },
  filterBadge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#1E1E1E',
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    flexDirection: 'column',
  },
  gradientLayer: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  tabBar: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    borderRadius: 32,
    paddingVertical: 14,
    paddingHorizontal: 28,
    gap: 36,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
