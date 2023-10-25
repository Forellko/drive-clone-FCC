import { database } from "~/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const files = collection(database, "files");

export const addFiles = (imageLink: string, imageName: string) => {
  try {
    void addDoc(files, { imageLink, imageName, isFolder: false });
  } catch (error) {
    console.log(error);
  }
};

export const addFolder = (payload: { folderName: string; fileList: [] }) => {
  try {
    void addDoc(files, {
      folderName: payload.folderName,
      fileList: payload.fileList,
      isFolder: true,
    });
  } catch (error) {
    console.log(error);
  }
};
