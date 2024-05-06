const signInBtn = document.getElementById("sign-btn");

signInBtn.addEventListener("click", async () => {
	const userName = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	const response = await fetch("/v1/users/signIn", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ userName, password }),
	});

	const data = await response.json();
	if (response.status === 200) {
		document.cookie = `current-user=${JSON.stringify(data)}`;
		window.location.href = "/tasks";
	} else {
		alert(data.error);
	}
});