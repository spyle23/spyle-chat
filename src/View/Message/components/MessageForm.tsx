import { StyleSheet, View } from "react-native";
import {
  MessageInput,
  UploadMutation,
  UploadMutationVariables,
} from "../../../gql/graphql";
import { MD3Theme, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  CameraType,
  ImagePickerAsset,
  MediaTypeOptions,
  launchCameraAsync,
  launchImageLibraryAsync,
  requestCameraPermissionsAsync,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import { FC, useEffect, useState } from "react";
import { ReactNativeFile } from "../../../utils/ReactNative";

type MessageFormProps = {
  theme: MD3Theme;
  sendMessage: (data: any[], message: MessageInput) => Promise<void>;
};

const defaultValues: MessageInput = {
  content: "",
  files: [],
};

export const MessageForm: FC<MessageFormProps> = ({ theme, sendMessage }) => {
  const [message, setMessage] = useState<MessageInput>(defaultValues);
  const [images, setImages] = useState<ImagePickerAsset[]>([]);
  const handleSubmit = async () => {
    if (!message.content) return;
    await sendMessage(images, message);
    setMessage(defaultValues);
    setImages([]);
  };
  const cameraPress = async () => {
    try {
      await requestCameraPermissionsAsync();
      let result = await launchCameraAsync({
        cameraType: CameraType.back,
        allowsEditing: false,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        // const reponse = await fetch(result.assets[0].uri);
        // const blob = await reponse.blob();
        // const file = new File([blob], result.assets[0].fileName as string, {
        //   type: result.assets[0].mimeType,
        // });
        const asset = result.assets[0];
        const file = new ReactNativeFile({
          uri: asset.uri,
          name: asset.fileName,
          type: asset.mimeType,
        });
        await sendMessage([file], message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const galleriePress = async () => {
    try {
      await requestMediaLibraryPermissionsAsync();
      let result = await launchImageLibraryAsync({
        allowsEditing: false,
        mediaTypes: MediaTypeOptions.Images,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        const responses = await Promise.all(
          result.assets.map((val) => fetch(val.uri))
        );
        const blob = await Promise.all(responses.map((a) => a.blob()));
        await sendMessage(blob, message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View
      style={{
        ...styles.containerForm,
        backgroundColor: theme.colors.background,
      }}
    >
      <Icon
        name="photo-camera"
        onPress={cameraPress}
        size={24}
        color={theme.dark ? "#fff" : "#000"}
      />
      <Icon
        name="image"
        onPress={galleriePress}
        size={24}
        color={theme.dark ? "#fff" : "#000"}
      />
      <TextInput
        mode="outlined"
        value={message.content}
        theme={{ roundness: 30 }}
        onChangeText={(e) => setMessage((curr) => ({ ...curr, content: e }))}
        onSubmitEditing={handleSubmit}
        placeholder="Votre message"
        style={styles.input}
      />
      <Icon
        name="play-arrow"
        onPress={handleSubmit}
        size={24}
        color={theme.dark ? "#fff" : "#000"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerForm: {
    display: "flex",
    height: 80,
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    flex: 0.8,
  },
});
