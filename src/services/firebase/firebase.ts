import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'

const app =
  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

export default app
