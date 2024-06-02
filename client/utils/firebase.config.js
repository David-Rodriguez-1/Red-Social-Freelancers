import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage'
import { v4 } from 'uuid'

const firebaseConfig = {
  apiKey: 'AIzaSyD3ZH_I3h6twM_L32OEyPU5kRfcuU3WIfY',
  authDomain: 'freelanceapp-firebase.firebaseapp.com',
  projectId: 'freelanceapp-firebase',
  storageBucket: 'freelanceapp-firebase.appspot.com',
  messagingSenderId: '494969015045',
  appId: '1:494969015045:web:c55c662e79b529ac16056c',
  measurementId: 'G-SCPRPMJVGD'
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const analytics = getAnalytics(app)

export function uploadFile(file) {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `media-posts/${v4()}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
      },
      (error) => {
        console.log(error)
        reject(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL)
          resolve(downloadURL)
        })
      }
    )
  })
}
// export function uploadFile(file) {
//   const storageRef = ref(storage, `media-posts/${v4()}`)
//   const uploadTask = uploadBytesResumable(storageRef, file)

//   uploadTask.on(
//     'state_changed',
//     (snapshot) => {
//       let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//       console.log('Upload is ' + progress + '% done')
//       return progress
//     },
//     (error) => {
//       console.log(error)
//     },
//     () => {
//       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//         console.log('File available at', downloadURL)
//         return downloadURL
//       })
//     }
//   )
//   return uploadTask
// }
