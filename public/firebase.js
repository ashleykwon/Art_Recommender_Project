var app_firebase = {};
(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyCtheaNwuEp6_i6TNoPdUmVqTQt3_h0_IU",
        authDomain: "se-project-yonsei-2020.firebaseapp.com",
        databaseURL: "https://se-project-yonsei-2020.firebaseio.com/",
        projectId: "se-project-yonsei-2020",
        storageBucket: "se-project-yonsei-2020.appspot.com",
        messagingSenderId: "573871454794",
        appId: "1:573871454794:web:f5168998e6b71a60eb84b3",
        measurementId: "G-XWS7NGCT2F"
    };
    firebase.initializeApp(firebaseConfig);

    app_firebase = firebase

})()