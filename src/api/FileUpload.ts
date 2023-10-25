import { storage } from "~/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { addFiles } from "./Firestore";

export const fileUpload = (file: File) => {
  const storageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      console.log(snapshot);
    },
    (error) => {
      alert(error);
    },
    () => {
      void getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        addFiles(downloadURL, file.name);
      });
    },
  );
};
