/**
 * Pantalla de detalle con la informacion completa del viaje.
 */
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { User, Mountain, Map, Copy, Heart, MessageCircle } from "lucide-react-native";
import styles from "./TripDetailScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "TripDetail">;

export default function TripDetailScreen({ navigation }: Props) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const [tabBarVisible, setTabBarVisible] = useState(true);
  const barTranslate = useRef(new Animated.Value(0)).current;
  const barOpacity = useRef(new Animated.Value(1)).current;

  const getTagVariant = (tag: string) => {
    const lower = tag.toLowerCase();
    if (lower.includes("friend") || lower.includes("people") || lower.includes("solo") || lower.includes("couple") || lower.includes("family")) {
      return "people";
    }
    if (lower.includes("food")) {
      return "food";
    }
    if (lower.includes("tourism") || lower.includes("city") || lower.includes("cultural") || lower.includes("adventure") || lower.includes("nature")) {
      return "tourism";
    }
    return "default";
  };

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

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <View style={[styles.cloud, { left: 20, top: 20, width: 150, height: 60 }]} />
        <View style={[styles.cloud, { right: -20, top: 40, width: 120, height: 50 }]} />
      </View>

      {/* Indicador de arrastre */}
      <SafeAreaView edges={['top']} style={styles.dragIndicatorContainer}>
        <View style={styles.dragIndicator} />
      </SafeAreaView>

      <Animated.ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.imageContainer}>
          <View style={styles.mainImagePlaceholder}>
            <Mountain size={80} color="white" />
            <Text style={styles.mainImageText}>Great Buddha of Kamakura</Text>
          </View>
          <View style={styles.avatarsContainer}>
            <View style={[styles.avatar, { backgroundColor: '#E8F4E8' }]}>
              <User size={20} color="#4B5563" />
            </View>
            <View style={[styles.avatar, { backgroundColor: '#F4E8F4', marginLeft: -10 }]}>
              <User size={20} color="#4B5563" />
            </View>
            <View style={[styles.avatar, { backgroundColor: '#F4F4E8', marginLeft: -10 }]}>
              <User size={20} color="#4B5563" />
            </View>
          </View>
          <View style={styles.imageIndicators}>
            <View style={[styles.imageIndicator, styles.imageIndicatorActive]} />
            <View style={styles.imageIndicator} />
            <View style={styles.imageIndicator} />
            <View style={styles.imageIndicator} />
          </View>
        </View>

        <View style={styles.tagsContainer}>
          {["Cultural", "Adventure", "Food Tour", "City"].map((tag) => {
            const variant = getTagVariant(tag);
            return (
              <View
                key={tag}
                style={[
                  styles.tag,
                  variant === "people" && styles.tagPeople,
                  variant === "tourism" && styles.tagTourism,
                  variant === "food" && styles.tagFood,
                  variant === "default" && styles.tagDefault,
                ]}
              >
                <Text
                  style={[
                    styles.tagText,
                    variant === "default" ? styles.tagTextMuted : styles.tagTextDark,
                  ]}
                >
                  {tag}
                </Text>
              </View>
            );
          })}
        </View>

        <Text style={styles.tripTitle}>Trip to Tokyo 5 days</Text>
        
        <View style={styles.statsRow}>
          <Text style={styles.statText}>600$avg</Text>
          <View style={styles.statDivider} />
          <Text style={styles.statText}>5 points</Text>
          <View style={styles.statDivider} />
          <Text style={styles.statText}>October 3 days</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            En este viaje pasamos por Tokio, recorriendo barrios como Shibuya Crossing y Asakusa, combinando modernidad y tradición visitamos templos, parques y mercados locales, y dedicamos un día a una excursión a Monte Fuji para disfrutar del paisaje.
          </Text>
        </View>

        <View style={styles.mapContainer}>
          <View style={styles.mapPlaceholder}>
            <Map size={32} color="#6B7280" />
            <Text style={styles.mapSubtext}>Tokyo, Japan</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Itinerary</Text>
        
        <View style={styles.itineraryItem}>
          <View style={styles.dayBadge}>
            <Text style={styles.dayText}>Day 1</Text>
          </View>
          <Text style={styles.itineraryText}>Llegada a Tokyo - Shibuya</Text>
        </View>
        
        <View style={styles.itineraryItem}>
          <View style={styles.dayBadge}>
            <Text style={styles.dayText}>Day 2</Text>
          </View>
          <Text style={styles.itineraryText}>Asakusa - Senso-ji Temple</Text>
        </View>
        
        <View style={styles.itineraryItem}>
          <View style={styles.dayBadge}>
            <Text style={styles.dayText}>Day 3</Text>
          </View>
          <Text style={styles.itineraryText}>Excursión Monte Fuji</Text>
        </View>

        <View style={styles.bottomSpacer} />
      </Animated.ScrollView>

      <Animated.View
        style={[
          styles.floatingBar,
          {
            transform: [{ translateY: barTranslate }],
            opacity: barOpacity,
          },
        ]}
      >
        <Pressable onPress={() => console.log("Copy trip")} accessibilityRole="button">
          <View style={styles.actionItem}>
            <View style={[styles.actionButton, styles.actionCopy]}>
              <Copy size={18} color="#1E1E1E" />
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => console.log("Like trip")} accessibilityRole="button">
          <View style={styles.actionItem}>
            <View style={[styles.actionButton, styles.actionLike]}>
              <Heart size={18} color="#1E1E1E" />
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => console.log("Ask creator")} accessibilityRole="button">
          <View style={styles.actionItem}>
            <View style={[styles.actionButton, styles.actionAsk]}>
              <MessageCircle size={18} color="#1E1E1E" />
            </View>
          </View>
        </Pressable>
      </Animated.View>
    </View>
  );
}
