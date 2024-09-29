import { View, ImageBackground, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import beachImage from "@/assets/meditation-images/beach.webp";
import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

const App = () => {
    const router = useRouter();

    return (
        <View className="flex-1">
            <ImageBackground
                source={beachImage}
                resizeMode="cover"
                className="flex-1"
            >
              <AppGradient
                    colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
              >
                    <SafeAreaView className="flex flex-1 px-1 justify-between">
                        <Text className="text-center text-white font-bold text-4xl">
                            Simple Meditation
                        </Text>
                        <Text className="text-center text-white font-regular text-2xl mt-3">
                            Simplifying Meditation for Everyone
                        </Text>
                        <CustomButton
                            onPress={() => router.push("/nature-meditate")}
                            title="Get Started"
                        />
                        <StatusBar style="light" />
                    </SafeAreaView>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default App;
