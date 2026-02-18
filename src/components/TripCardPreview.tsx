/**
 * Tarjeta de vista previa usada en el onboarding.
 */
import React from "react";
import { Image as RNImage, View, Text, TouchableOpacity } from "react-native";
import { DollarSign, MapPin, Users, Building2, Utensils, Image as ImageIcon } from "lucide-react-native";
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
          <Text style={styles.title}>Barcelona en 4 días</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <DollarSign size={14} color="#4B5563" />
              <Text style={styles.stat}>580 € aprox.</Text>
            </View>
            <View style={styles.statItem}>
              <MapPin size={14} color="#4B5563" />
              <Text style={styles.stat}>8 puntos</Text>
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
              <Text style={[styles.tagText, styles.tagTextDark]}>2-4 amigos</Text>
            </View>
            <View
              style={[
                styles.tag,
                styles.tagTourism,
              ]}
            >
              <Building2 size={10} color="#1E1E1E" />
              <Text style={[styles.tagText, styles.tagTextDark]}>Turismo urbano</Text>
            </View>
            <View
              style={[
                styles.tag,
                styles.tagFood,
              ]}
            >
              <Utensils size={10} color="#1E1E1E" />
              <Text style={[styles.tagText, styles.tagTextDark]}>Gastronómico</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.imageContainer}>
          <RNImage
            source={{
              uri: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80",
            }}
            style={styles.image}
          />
          <View style={styles.imageOverlay}>
            <ImageIcon size={24} color="#FFFFFF" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
