import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function getProductsFB(){
    const querySnapshot = await getDocs(collection(db, 'ecommerce-coder'));
    querySnapshot.forEach (doc => console.log(`${doc.id} => ${doc.data().nombre} ${doc.data().precio}`));
}

const getProductos = async () => {
    try {
        const productosRef = collection(db, "ecommerce-coder");
        const snapshot = await getDocs(productosRef);
        
        const productos = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        
        return productos;
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        return [];
    }
};

const getProductoById = async (id) => {
    try {
        const docRef = doc(db, "ecommerce-coder", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.log("No se encontró el producto!");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el producto por ID:", error);
        return null;
    }
};

const getProductosByCategory = async (categoryId) => {
    try {
        const productosRef = collection(db, "ecommerce-coder");
        const q = query(productosRef, where("categoria", "==", categoryId));
        
        const snapshot = await getDocs(q);
        
        const productosCategoria = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));

        return productosCategoria;
    } catch (error) {
        console.error("Error al obtener productos por categoría:", error);
        return [];
    }
};

export { getProductos, getProductoById, getProductosByCategory };