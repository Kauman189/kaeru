import React from "react";
import { View, Text, TouchableOpacity, Image as RNImage } from "react-native";
import { Tag, MapPinned, Users, Building2, Utensils, Image as ImageIcon } from "lucide-react-native";
import styles from "./TripCard.styles";
import { toTagLabelEs } from "../utils/tagLabels";

export type TripData = {
  id: string;
  title: string;
  price: string;
  points: string;
  tags: string[];
  imageUrl?: string;
  authorId?: string;
  badge?: string;
};

type TripCardProps = {
  trip: TripData;
  onPress?: () => void;
};

export default function TripCard({ trip, onPress }: TripCardProps) {
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

  const getTagIcon = (tag: string) => {
    const variant = getTagVariant(tag);
    const iconColor = variant === "default" ? "#6B7280" : "#1E1E1E";
    switch (tag) {
      case '2-4 Friends':
      case 'Solo':
      case 'Couple':
      case 'Family':
        return <Users size={12} color={iconColor} />;
      case 'City Tourism':
      case 'Cultural':
      case 'Adventure':
      case 'Nature':
      case 'City':
        return <Building2 size={12} color={iconColor} />;
      case 'Foodie':
      case 'Food Tour':
        return <Utensils size={12} color={iconColor} />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <View style={styles.info}>
          {trip.badge ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{trip.badge}</Text>
            </View>
          ) : null}
          <Text style={styles.title}>{trip.title}</Text>
          
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Tag size={14} color="#6B7280" />
              <Text style={styles.statText}>{trip.price}</Text>
            </View>
            <View style={styles.statItem}>
              <MapPinned size={14} color="#6B7280" />
              <Text style={styles.statText}>{trip.points}</Text>
            </View>
          </View>
          
          <View style={styles.tags}>
            {trip.tags.map((tag, index) => {
              const variant = getTagVariant(tag);
              const displayTag = toTagLabelEs(tag);
              return (
                <View
                  key={index}
                  style={[
                    styles.tag,
                    variant === "people" && styles.tagPeople,
                    variant === "tourism" && styles.tagTourism,
                    variant === "food" && styles.tagFood,
                    variant === "default" && styles.tagDefault,
                  ]}
                >
                  {getTagIcon(tag)}
                  <Text
                    style={[
                      styles.tagText,
                      variant === "default" ? styles.tagTextMuted : styles.tagTextDark,
                    ]}
                  >
                    {displayTag}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        
        <View style={styles.imageContainer}>
          {trip.imageUrl ? (
            <RNImage source={{ uri: trip.imageUrl }} style={styles.imagePlaceholder} />
          ) : (
            <View style={styles.imagePlaceholder}>
              <ImageIcon size={32} color="#9CA3AF" />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
