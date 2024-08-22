const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [

			],
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
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadContacts: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/agendaLuis",{
					method: "GET"
				})
				const data = await response.json();
				setStore({contactList: data.contacts})
			},

			createContact: async (newContact) => {
				console.log(newContact)
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/agendaLuis/contacts",{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(newContact)
					})
					if(!response.ok){
						throw new Error("There has been an error creating this contact, please check again") 
					}
					const data = await response.json();
					setStore({ contactList: data.contacts });

					getActions().loadContacts();
				}
				catch(error){
					console.error("There has been an error creating this contact",error)
				}
			},


			deleteContact: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/agendaLuis/contacts/{contacts_id}",{
					method: "DELETE"
				})
				const data = await response.json();
				setStore({contactList: data.contacts})
				
			},




			
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
