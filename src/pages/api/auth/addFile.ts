import { storage, database } from "~/firebaseConfig";
import { NextApiRequest, NextApiResponse } from "next";

const firestore = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).send({ hello: "world" });
};

export default firestore;
