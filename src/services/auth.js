import Firebase from "../configs/firebaseConfig"

const socialmediaAuth = async (provider) => {
    const popUpSignIn = await Firebase.auth().signInWithPopup(provider);
    console.log("popUp.>" , popUpSignIn)
    return popUpSignIn

    
}

export default socialmediaAuth