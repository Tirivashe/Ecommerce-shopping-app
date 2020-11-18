import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider)

export const handleUserProfile = async (user, data) => {
  if(!user) return
  const { uid } = user
  const userRef = firestore.doc(`users/${uid}`)
  const { displayName, email} = user

  try {
    await userRef.set({
      displayName,
      email,
      ...data
    })
  } catch (error) {
    console.log(error)
  }
  return userRef
}