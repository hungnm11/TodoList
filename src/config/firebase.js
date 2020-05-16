import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

export const todosRef = firebase.database().ref();
// export const todosRef = databaseRef.child("todolist-d0d35")
// export const todosRef = databaseRef;
