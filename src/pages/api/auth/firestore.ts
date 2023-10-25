import { storage, app, database } from "~/firebaseConfig";
import { NextApiRequest, NextApiResponse } from "next";

const firestore = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.method);
  return res.status(200).send({ hello: "world" });
};

export default firestore;
