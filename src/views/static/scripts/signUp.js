const signUpBtn = document.getElementById("sign-up");

signUpBtn.addEventListener("click", async (e) => {
	e.preventDefault();
	const username = document.getElementById("username").value;
	const name = document.getElementById("name").value;
	const lastName = document.getElementById("last-name").value;
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	const genre = document.getElementById("genre").value;

	if (
		/^\w{4,20}/.test(username) &&
		(name.length > 2 && name.length < 100) &&
		(lastName.length > 10 && lastName.length < 200) &&
		/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) &&
		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password) &&
		genre !== "Select..."
	) {
		const response = await fetch("/v1/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"userName": username,
				name,
				lastName,
				email,
				password,
				genre,
			}),
		});
		const users = await response.json();
		console.log(users);
		if (response.status === 201) {
			window.location.href = "/sign-in";
		}
	} else {
		alert("Please fill all the fields correctly");
	}
});