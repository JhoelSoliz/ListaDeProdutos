import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA_FI9PRO3iWLL9Dzaw22BdX_v1d1FF2T8",
  authDomain: "pwiii-c707e.firebaseapp.com",
  databaseURL: "https://pwiii-c707e-default-rtdb.firebaseio.com",
  projectId: "pwiii-c707e",
  storageBucket: "pwiii-c707e.appspot.com",
  messagingSenderId: "70800164576",
  appId: "1:70800164576:web:68fd05dc9995e485607285",
  measurementId: "G-YV9EDVKNB5"
};



if (firebase.apps.length) {
  firebase.apps[0].delete()
    .then(() => {
      console.log('Firebase App excluído com sucesso');
      // Inicialize o Firebase com a nova configuração
      firebase.initializeApp(firebaseConfig);
    })
    .catch(error => {
      console.error('Erro ao excluir o Firebase App:', error);
    });
} else {
  console.log('Nenhum Firebase App encontrado para excluir');
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
