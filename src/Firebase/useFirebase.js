import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const useFirebase = () => {
    initializeApp(firebaseConfig);
}
export default useFirebase;