import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Tag, MapPinned, Users, Building2, Utensils, Image } from "lucide-react-native";

export type TripData = {
  id: string;
  title: string;
  price: string;
  points: string;
  tags: string[];
  imageUrl?: string;
  authorId?: string;
};

type TripCardProps = {
  trip: TripData;
  onPress?: () => void;
  showAuthor?: boolean;
};

export default function TripCard({ trip, onPress, showAuthor = false }: TripCardProps) {
  const getTagIcon = (tag: string) => {
    switch (tag) {
      case '2-4 Friends':
        return <Users size={12} color="#6B7280" />;
      case 'City Tourism':
        return <Building2 size={12} color="#6B7280" />;
      case 'Foodie':
        return <Utensils size={12} color="#6B7280" />;
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
      {showAuthor && (
        <View style={styles.authorAvatar}>
          <Users size={16} color="#6B7280" />
        </View>
      )}
      
      <View style={styles.content}>
        <View style={styles.info}>
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
            {trip.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                {getTagIcon(tag)}
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.imageContainer}>
          <View style={styles.imagePlaceholder}>
            <Image size={32} color="#9CA3AF" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  authorAvatar: {
    position: 'absolute',
    top: -8,
    left: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  content: {
    flexDirection: 'row',
  },
  info: {
    flex: 1,
    paddingRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E1E1E',
    marginBottom: 8,
  },
  stats: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    fontSize: 14,
    color: '#6B7280',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 14,
  },
  tagText: {
    fontSize: 11,
    color: '#6B7280',
    fontWeight: '500',
  },
  imageContainer: {
    width: 120,
    height: 130,
    borderRadius: 16,
    overflow: 'hidden',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E0F2FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
