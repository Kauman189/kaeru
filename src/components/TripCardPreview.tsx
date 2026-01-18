/**
 * Tarjeta de vista previa usada en el onboarding.
 */
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DollarSign, MapPin, Users, Building2, Utensils, Image } from "lucide-react-native";

type TripCardPreviewProps = {
  onPress?: () => void;
};

export default function TripCardPreview({ onPress }: TripCardPreviewProps) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={styles.contentRow}>
        <View style={styles.infoSection}>
          <Text style={styles.title}>Trip to Tokyo 5 days</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <DollarSign size={14} color="#4B5563" />
              <Text style={styles.stat}>600$avg</Text>
            </View>
            <View style={styles.statItem}>
              <MapPin size={14} color="#4B5563" />
              <Text style={styles.stat}>5 points</Text>
            </View>
          </View>
          <View style={styles.tagsRow}>
            <View style={styles.tag}>
              <Users size={10} color="#4B5563" />
              <Text style={styles.tagText}>2-4 Friends</Text>
            </View>
            <View style={styles.tag}>
              <Building2 size={10} color="#4B5563" />
              <Text style={styles.tagText}>City Tourism</Text>
            </View>
            <View style={styles.tag}>
              <Utensils size={10} color="#4B5563" />
              <Text style={styles.tagText}>Foodie</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.imageContainer}>
          <View style={styles.imagePlaceholder}>
            <Image size={40} color="#9CA3AF" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    width: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  contentRow: {
    flexDirection: 'row',
  },
  infoSection: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E1E1E',
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  stat: {
    fontSize: 13,
    color: '#4B5563',
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  tagText: {
    fontSize: 10,
    color: '#4B5563',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E8F4FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
