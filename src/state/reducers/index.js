// import all of your reducers into this file, and export them back out. 

// This allows for the simplification of flow when importing reducers into your actions throughout your appp.

export const initialState = {
    id: "",
    orgs: [],
    applcations: [],
    errorMessage: "",
    user: {
        name: "Michael Johnson",
        org: "Apple",
        email: "michael@johnson.com",
        description: "Blonde, shaggy hair almost fully covers a thin, sad face. Hollow blue eyes, set seductively within their sockets, watch attentively over the lands they've sworn to protect for so long A gunshot left a mark reaching from the bottom of the left cheekbone , running towards his right nostril and ending on his right nostril leaves a pleasant memory of former love This is the face of Bruce Falcon, a true spectacle among dwarves. He stands gracefully among others, despite his brawny frame. There's something misleading about him, perhaps it's his painful past or perhaps it's simply a feeling of remorse. But nonetheless, people tend to assist him, while hoping he will one day be their leader"
    }
};


export const microfundReducer = (state = initialState, action) => {

};


export default microfundReducer;