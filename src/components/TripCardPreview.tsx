/**
 * Tarjeta de vista previa usada en el onboarding.
 */
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DollarSign, MapPin, Users, Building2, Utensils, Image } from "lucide-react-native";
import styles from "./TripCardPreview.styles";

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
            <View
              style={[
                styles.tag,
                styles.tagPeople,
              ]}
            >
              <Users size={10} color="#1E1E1E" />
              <Text style={[styles.tagText, styles.tagTextDark]}>2-4 Friends</Text>
            </View>
            <View
              style={[
                styles.tag,
                styles.tagTourism,
              ]}
            >
              <Building2 size={10} color="#1E1E1E" />
              <Text style={[styles.tagText, styles.tagTextDark]}>City Tourism</Text>
            </View>
            <View
              style={[
                styles.tag,
                styles.tagFood,
              ]}
            >
              <Utensils size={10} color="#1E1E1E" />
              <Text style={[styles.tagText, styles.tagTextDark]}>Foodie</Text>
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
