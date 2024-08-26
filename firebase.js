import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13/firebase-database.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.13/firebase-app-check.js";

const firebaseConfig = {
    apiKey: "AIzaSyAj3A2wkkMSktUeHs5r8SyMDN8aRvUSyW8",
    authDomain: "ibcall2action.firebaseapp.com",
    projectId: "ibcall2action",
    storageBucket: "ibcall2action.appspot.com",
    messagingSenderId: "150009273784",
    appId: "1:150009273784:web:4dcf980266800f8e22c34d",
    measurementId: "G-2HZQMDDC7C",
    databaseURL:
        "https://ibcall2action-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app2 = initializeApp(firebaseConfig);

// https://www.google.com/recaptcha/admin/site/707755302
const rProvider = new ReCaptchaV3Provider("6LcmfS8qAAAAAOYgmZA08o_CtG-9Sdm2f9z93ZFc");
initializeAppCheck(app2, {
    provider: rProvider
});

const db2 = getDatabase(app2);


export { db2 };