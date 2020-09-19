function inputCheck(username, password) {
  if (username != null && password != null) {
    if (username.length > 5 && password.length > 5) {
      console.log("hi worlds");
    } else {
      alert("Password or Name too short. Minimum 6 characters");
    }
  }
}

export { inputCheck };
