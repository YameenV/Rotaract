import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("../backend/config/serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()



# firebaseConfig = {
#   "apiKey": "AIzaSyBo7DCJgc-GhvK2Prayh_GGcV6rRP8kAa8",
#   "authDomain": "auth0-ebfb6.firebaseapp.com",
#   "databaseURL": "https://auth0-ebfb6-default-rtdb.europe-west1.firebasedatabase.app",
#   "projectId": "auth0-ebfb6",
#   "storageBucket": "auth0-ebfb6.appspot.com",
#   "messagingSenderId": "834379261190",
#   "appId": "1:834379261190:web:fc20ce6da86f31b2312a87",
#   "measurementId": "G-F4T5D62RN2"
# };

# firebase = pyrebase.initialize_app(firebaseConfig)
# db = firebase.database()