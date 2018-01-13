const getText = () => {
	fetch('sample.txt')
	.then((res) => res.text())
	.then((data) => {
		document.getElementById('output').innerHTML = data;
	})
	.catch((err) => console.log(err));
};

const getUsers = () => {
	fetch('users.json')
	.then((res) => res.json())
	.then((data) => {
		let output = '<h2>Users</h2>';
		data.map((user) => {
			output += `
				<ul>
					<li>ID: ${user.id}</li>
					<li>Name: ${user.name}</li>
					<li>Email: ${user.email}</li>
				</ul>
			`;
		});
		document.getElementById('output').innerHTML = output;
	})
	.catch((err) => console.log(err));
};

const getPosts = () => {
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then((res) => res.json())
	.then((data) => {
		let output = '<h2>Posts</h2>';
		data.map((post) => {
			output += `
				<div>
					<h3>${post.title}</h3>
					<p>${post.body}</p>
				</div>
			`;
		});
		document.getElementById('output').innerHTML = output;
	})
	.catch((err) => console.log(err));
};

const addPost = (e) => {
	e.preventDefault();

	let title = document.getElementById('title').value;
	let body = document.getElementById('postContent').value;

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-type': 'application/json'
		},
		body: JSON.stringify({ title, body })
	})
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
	})
	.catch((err) => console.log(err));
};

document.getElementById('getTextBtn').addEventListener('click', getText);
document.getElementById('getUsersBtn').addEventListener('click', getUsers);
document.getElementById('getPostsBtn').addEventListener('click',  getPosts);
document.getElementById('addPost').addEventListener('submit',  addPost);