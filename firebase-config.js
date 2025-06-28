// Initialize Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Auth State Listener
auth.onAuthStateChanged(user => {
  const protectedPages = ['dashboard.html'];
  const currentPage = window.location.pathname.split('/').pop();

  if (!user && protectedPages.includes(currentPage)) {
    window.location.href = 'index.html';
  } else if (user && currentPage === 'index.html') {
    window.location.href = 'dashboard.html';
  }

  if (user) {
    db.collection("users").doc(user.uid).get().then(doc => {
      if (doc.exists) {
        window.userRole = doc.data().role || 'member';
      }
    });
  }
});
