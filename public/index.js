firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		// User is now signed in.
		// ...

		var user = firebase.auth().currentUser;
		var email_id = user.email;
		var user_id = user.uid;
		console.log(user_id)

		//export let user_id = [user_id];
		// ...

	} else {
		console.log('user not logged in')
		// No user is signed in.
		// ...

	}
});

function emailSignIn() {

	var userEmail = document.getElementById("email_field").value;
	var userPwd = document.getElementById("password_field").value;
	var userPwdConfirm = document.getElementById("passwordConfirm_field").value;
	var errorMessage = "";

	var uniqueUsername = document.getElementById("user_id").value;


	firebase.database().ref("usernames").update({[uniqueUsername]: true}, (error) => {
		if (error) {
			window.alert("You should choose another username :(");
		}
		else {
			continueSignIn()
		}
	})
	function continueSignIn() {
		if (userPwd == userPwdConfirm) {
			firebase.auth().createUserWithEmailAndPassword(userEmail, userPwd)
				.then(function (result) {
					window.alert("Account successfully created!");
					//window.alert(firebase.auth().currentUser.uid);
					firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
						username: uniqueUsername,
						email: userEmail,
						recList: ["bbb"],
						pastRecs: ["bbb"],
						myArtworks:["bbb"]
					});

					location.href = 'login.html';

				}).catch(function (error) {
					// Handle errors here
					var errorCode = error.code;
					console.log(errorCode);
					var errorMessage = error.message;
					window.alert("Error: " + errorMessage);
				});

		} else {
			window.alert("Error: You entered two different passwords. Please confirm the password.");
		}
	}

}

function login() {

	var userEmail = document.getElementById("email_field").value;
	var userPwd = document.getElementById("password_field").value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPwd).then(function (result) {
		window.alert("Successfully logged in!");
		location.href = 'home_registered_user.html';

	}).catch(function (error) {
		// Handle Errors here.
		// var errorCode = error.code;
		var errorMessage = error.message;
		console.log(userEmail)
		console.log(userPwd)

		window.alert("Error: " + errorMessage);
	});

}

function logout() {
	firebase.auth().signOut();
	location.href = 'home_unregistered_user.html';
	// maybe add where to redirect
}



function deleteUser() {
	var user = firebase.auth().currentUser; // get current user
	var userEmail = user.email;
	if (user) { // user is logged in
		user.delete().then(function () {
			window.alert("The user " + userEmail);
		}).catch(function (error) {
			var errorMessage = error.message;
			window.alert("Error : " + errorMessage);
		});

	} else {
		// No user is signed in.
		var user = firebase.auth().currentUser;

		// Prompt the user to re-provide their sign-in credentials
		var credential;
		// -> write a function that asks the user to enter his/her credentials

		user.reauthenticateWithCredential(credential).then(function () {
			// User re-authenticated.
		}).catch(function (error) {
			// An error happened.
		});

	}




}
