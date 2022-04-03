import AsyncStorage from '@react-native-async-storage/async-storage';

interface flashcard {
  native: string;
  translation: string;
  lastSeen: number;
}

export const storeData = async (value: flashcard) => {
  console.log('Saving!');
  const jsonValue = JSON.stringify(value);
  try {
    await AsyncStorage.setItem(String(Date.now()), jsonValue);
  } catch (e) {
    console.error('Error while saving data');
  }
};

export const fetchFlashcards = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    // @ts-ignore: keys unmodified
    const fl = await AsyncStorage.multiGet(keys);
    console.log(fl);
    return fl;
  } catch (e) {
    console.error("Can't fetch flashcards\n" + e);
  }
  return [];
};

export const delItem = async (id: string) => {
  console.log('Deleting!!!');
  try {
    await AsyncStorage.removeItem(id);
  } catch (e) {
    console.error("Couldn't delete item", e);
  }
};

export const getItem = async (id: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(id);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Couldn't fetch item", e);
  }
};

export const updateItem = async (id: string, flashcard: flashcard) => {
  console.log('Updating!');
  const jsonValue = JSON.stringify(flashcard);
  try {
    await AsyncStorage.setItem(id, jsonValue);
  } catch (e) {
    console.error('Error while updating data');
  }
};
