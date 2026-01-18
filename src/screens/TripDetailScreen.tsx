/**
 * Pantalla de detalle con la informacion completa del viaje.
 */
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { User, Mountain, Map } from "lucide-react-native";

const { width } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "TripDetail">;

export default function TripDetailScreen({ navigation }: Props) {
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

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
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
          <View style={styles.tag}>
            <Text style={styles.tagText}>Cultural</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Adventure</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Food Tour</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>City</Text>
          </View>
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

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 120,
  },
  cloud: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 40,
  },
  dragIndicatorContainer: {
    alignItems: 'center',
    paddingTop: 8,
  },
  dragIndicator: {
    width: 40,
    height: 5,
    backgroundColor: '#D1D5DB',
    borderRadius: 3,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  imageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#E5E7EB',
  },
  mainImage: {
    width: '100%',
    height: 280,
    backgroundColor: '#4A7C59',
  },
  mainImagePlaceholder: {
    width: '100%',
    height: 280,
    backgroundColor: '#4A7C59',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainImageText: {
    color: 'white',
    fontSize: 16,
    marginTop: 8,
    fontWeight: '600',
  },
  avatarsContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  imageIndicators: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  imageIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  imageIndicatorActive: {
    backgroundColor: 'white',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  tag: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    color: '#4B5563',
  },
  tripTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E1E1E',
    marginTop: 20,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  statText: {
    fontSize: 14,
    color: '#4B5563',
  },
  statDivider: {
    width: 1,
    height: 16,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 20,
  },
  descriptionContainer: {
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#374151',
  },
  mapContainer: {
    marginBottom: 8,
  },
  mapPlaceholder: {
    height: 160,
    backgroundColor: '#E8F4FC',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  mapSubtext: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E1E1E',
    marginBottom: 16,
  },
  itineraryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dayBadge: {
    backgroundColor: '#DFF8AE',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 12,
  },
  dayText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1E1E1E',
  },
  itineraryText: {
    fontSize: 15,
    color: '#374151',
  },
});
