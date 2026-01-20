import React, { useCallback, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
  ViewToken,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import PaginationDots from "../components/PaginationDots";
import PrimaryButton from "../components/PrimaryButton";
import TextButton from "../components/TextButton";
import TripCardPreview from "../components/TripCardPreview";
import { setOnboardingSeen } from "../storage/onboardingStorage";
import { RootStackParamList } from "../navigation/RootNavigator";
import styles from "./OnboardingScreen.styles";

type Slide = {
  key: string;
  title: string;
  subtitle: string;
  helper: string;
  image?: number;
};

const { width, height } = Dimensions.get("window");

const slides: Slide[] = [
  {
    key: "onboarding-1",
    title: "Bienvenido",
    subtitle: "Planifica tus viajes,\nestés donde estés.",
    helper: "",
    image: require("../../assets/onboarding/onboarding-1.png"),
  },
  {
    key: "onboarding-2",
    title: "Viaja acompañado",
    subtitle: "Invita a amigos y planificad\njuntos cada parte del viaje.",
    helper: "",
    image: require("../../assets/onboarding/onboarding-2.png"),
  },
  {
    key: "onboarding-3",
    title: "Kaeru",
    subtitle: "Viaja sin preocupaciones",
    helper: "Explora viajes de la comunidad\no crea el tuyo desde cero.",
    image: null,
  },
];

type Props = NativeStackScreenProps<RootStackParamList, "Onboarding">;

export default function OnboardingScreen({ navigation }: Props) {
  const listRef = useRef<FlatList<Slide>>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems[0]?.index != null) {
        setActiveIndex(viewableItems[0].index);
      }
    }
  ).current;

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const handleSkip = useCallback(() => {
    listRef.current?.scrollToIndex({ index: 1, animated: true });
  }, []);

  const handleCreateTrip = useCallback(() => {
    // TODO: Tras autenticar, persistir onboarding y reiniciar a Home.
    // await setOnboardingSeen();
    // navigation.reset({ index: 0, routes: [{ name: "Tabs" }] });
    navigation.navigate("CreateTrip");
  }, [navigation]);

  const handleExplore = useCallback(async () => {
    // Persistir el onboarding y entrar directo a Home.
    await setOnboardingSeen();
    navigation.reset({
      index: 0,
      routes: [{ name: "Tabs" }],
    });
  }, [navigation]);

  const renderItem = useCallback(
    ({ item, index }: { item: Slide; index: number }) => {
      const imageSize = Math.min(width * 0.55, 280);

      if (index === 0) {
        return (
          <View style={[styles.slide, styles.skyBackground]}>
            <View style={styles.cloudsContainer}>
              <View style={[styles.cloud, { left: -30, top: -20, width: 120, height: 80 }]} />
              <View style={[styles.cloud, { left: 50, top: -40, width: 100, height: 70 }]} />
              <View style={[styles.cloud, { right: -20, top: 10, width: 110, height: 75 }]} />
              <View style={[styles.cloud, { right: 60, top: -30, width: 90, height: 60 }]} />
            </View>

            <View style={styles.contentContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.subtitleText}>{item.subtitle}</Text>
            </View>

            <View style={styles.grassContainer}>
              <View style={styles.grass} />
            </View>

            <View style={styles.frogContainer}>
              {item.image && (
                <Image
                  source={item.image}
                  style={{ width: imageSize, height: imageSize }}
                  resizeMode="contain"
                />
              )}
            </View>

          </View>
        );
      }

      if (index === 1) {
        return (
          <View style={[styles.slide, styles.skyBackground]}>
            <View style={styles.cloudsContainer}>
              <View style={[styles.cloud, { left: 40, top: 30, width: 200, height: 100 }]} />
              <View style={[styles.cloud, { left: 150, top: 10, width: 150, height: 80 }]} />
              <View style={[styles.cloud, { right: -40, top: 50, width: 140, height: 70 }]} />
            </View>

            <View style={styles.slide2Content}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.slide2Subtitle}>{item.subtitle}</Text>
              
              <View style={styles.cardWithHand}>
                <TripCardPreview onPress={() => navigation.navigate('TripDetail')} />
                <View style={styles.handIconContainer}>
                  <Text style={styles.handEmoji}>👆</Text>
                </View>
              </View>
            </View>

            <View style={styles.grassContainer}>
              <View style={styles.grass} />
            </View>

            <View style={styles.frogContainer}>
              {item.image && (
                <Image
                  source={item.image}
                  style={{ width: imageSize * 1.3, height: imageSize * 1.1 }}
                  resizeMode="contain"
                />
              )}
            </View>
          </View>
        );
      }

      return (
        <View style={[styles.slide, styles.skyBackground]}>
          <View style={styles.cloudsContainer}>
            <View style={[styles.cloud, { left: 60, top: 20, width: 180, height: 90 }]} />
            <View style={[styles.cloud, { left: 140, top: 0, width: 140, height: 70 }]} />
            <View style={[styles.cloud, { right: -30, top: 40, width: 120, height: 60 }]} />
          </View>

          <View style={styles.slide3Content}>
            <Text style={styles.titleTextLarge}>{item.title}</Text>
            <Text style={styles.slide3Subtitle}>{item.subtitle}</Text>
            <Text style={styles.slide3Helper}>{item.helper}</Text>

            <View style={styles.ctaContainer}>
              <PrimaryButton label="Crear mi primer viaje" onPress={handleCreateTrip} />
              <Pressable onPress={handleExplore} style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Explorar viajes</Text>
              </Pressable>
              <Text style={styles.noLoginText}>No es necesario iniciar sesión ahora!</Text>
            </View>
          </View>

          <View style={styles.grassContainer}>
            <View style={styles.grass} />
          </View>
        </View>
      );
    },
    [handleCreateTrip, handleExplore, navigation]
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {activeIndex === 0 && (
        <SafeAreaView edges={['top']} style={styles.skipButtonContainer}>
          <TextButton
            label="Saltar"
            onPress={handleSkip}
            textStyle={styles.skipButtonText}
          />
        </SafeAreaView>
      )}

      <FlatList
        ref={listRef}
        data={slides}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        style={{ flex: 1 }}
      />

      <View style={styles.paginationContainer}>
        <PaginationDots count={slides.length} activeIndex={activeIndex} />
      </View>

      <View style={styles.copyrightContainer}>
        <Text style={styles.copyrightText}>Copyright Kauman 2025</Text>
      </View>
    </View>
  );
}
