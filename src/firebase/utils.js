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
  const { uid, displayName, email } = user
  const userRef = firestore.doc(`users/${uid}`)
  const snapshot = await userRef.get()
  const userRoles = ['user']

  try {
    if(!snapshot.exists){
      await userRef.set({
        displayName,
        email,
        userRoles,
        ...data
      })
    }
  } catch (error) {
    console.log(error)
  }
  return userRef
}

export const checkUserAdmin = user => {
  if(!user || !Array.isArray(user.userRoles)){
    return false
  }
  if(user.userRoles.includes('admin')){
    return true
  }
}