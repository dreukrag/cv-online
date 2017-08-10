var Rebase = require('re-base');
var firebase = require('firebase/app');
var database = require('firebase/database');
var app = firebase.initializeApp({
    apiKey: "AIzaSyBifxZqt1Y6qRmBXReZlrvUDDgAtvmwg-4",
    authDomain: "cv-online-6f2f3.firebaseapp.com",
    databaseURL: "https://cv-online-6f2f3.firebaseio.com",
    projectId: "cv-online-6f2f3",
    storageBucket: "",
    messagingSenderId: "415561658036"
});
const RebaseHelper = {}
RebaseHelper.db = database(app);
RebaseHelper.base = Rebase.createClass(RebaseHelper.db);

export default RebaseHelper;