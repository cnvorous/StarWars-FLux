const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
			,
			characters: [],
			planets: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			getPeople: () => {
				fetch("https://swapi.dev/api/people/")
			.then(response => response.json())
			.then(resultJsonified => {
				setStore({characters: resultJsonified.results})
			})
				.catch(error => console.log(error));
			},
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
			.then(response => response.json())
			.then(resultJsonified => {
				setStore({planets: resultJsonified.results})
			})
				.catch(error => console.log(error));
			},


			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
				// });

				// //reset the global store
				// setStore({ demo: demo });
			//}
		}
	};
};

export default getState;
