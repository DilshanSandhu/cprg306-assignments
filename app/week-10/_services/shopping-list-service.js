import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export async function getItems(userId) {
  const itemsCollection = collection(db, "users", userId, "items");
  const snapshot = await getDocs(itemsCollection);

  const items = [];
  snapshot.forEach((docSnap) => {
    items.push({
      id: docSnap.id,
      ...docSnap.data(),
    });
  });

  return items;
}

export async function addItem(userId, item) {
  const itemsCollection = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCollection, item);
  return docRef.id;
}