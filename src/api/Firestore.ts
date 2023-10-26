import { database } from "~/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const files = collection(database, "files");

export const addFiles = (
  imageLink: string,
  imageName: string,
  parentId: string,
) => {
  try {
    void addDoc(files, { imageLink, imageName, isFolder: false, parentId });
  } catch (error) {
    console.log(error);
  }
};

export const addFolder = (payload: {
  folderName: string;
  fileList: [];
  parentId: string;
  userEmail: string;
}) => {
  try {
    void addDoc(files, {
      folderName: payload.folderName,
      fileList: payload.fileList,
      isFolder: true,
      parentId: payload.parentId,
      userEmail: payload.userEmail,
    });
  } catch (error) {
    console.log(error);
  }
};
