import { storage, app, database } from "~/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export const fileUpload = (file: File) => {
  const storageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
      );
    },
    (error) => {
      alert(error);
    },
    () => {
      void getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("1");
      });
    },
  );
};
