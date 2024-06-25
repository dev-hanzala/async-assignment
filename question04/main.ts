function fetchWithError(){ return new Promise((resolve, reject) => {
	let rng = Math.round(Math.random());
	setTimeout(() => {
		if (rng == 0) {
			resolve("Data fetched succesfully!");
		} else {
			reject(new Error("Data fetch failed!"));
		}
	}, 1000);
	});
};	

fetchWithError().then(
  (result) => console.log(result),
  (error) => console.log(error)
);
