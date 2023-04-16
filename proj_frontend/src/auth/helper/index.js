import { API } from "../../backend"
import axios from "axios"

export const signup = (user) => {
    console.log(user)
    return axios
        .post(`${API}signup/student`, user)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })
}

export const signin = (user) => {
    console.log(JSON.stringify(user))
    return axios
        .post(`${API}signin/${user?.role}`, user)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })
}

// browser is unable to remember who's logged in, so let's put token for our ease
export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        // if window object is accessible to us hence 'not undefined'
        // then access the local storage of the browser and set the property Item (setItem) with 'jwt' value to keep remember that user is signed-in
        localStorage.setItem("jwt", JSON.stringify(data))
        next()
    }
}

export const signout = (next) => {
    // Let's remove the property 'jwt' from the localStorage, coz user will be signed out
    if (typeof window !== "undefined") {
        // if window object is accessible to us, hence 'not undefined'
        // then access the local storage of the browser and remove the property Item (removeItem) that contains 'jwt' value
        localStorage.removeItem("jwt")
        // next()
    }

    return fetch(`${API}/signout`, {
        method: "GET",
    })
        .then((response) => {
            console.log("signout successful")
        })
        .catch((error) => {
            console.log(error)
        })
}

// to check whether the user is authenticated (signed-in) or not
export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        // if window object is not accessible to us hence 'undefined'
        // then access the local storage of the browser and check whether the property (Item) has 'jwt' value or not
        return false
    }

    if (localStorage.getItem("jwt")) {
        // if you're able to get the item of 'jwt' in the local storage
        // console.log(JSON.parse(localStorage.getItem('jwt')));
        return JSON.parse(localStorage.getItem("jwt")) // instead of return true, we're returning jwt value and then in the frontend (component), we'll check over there as well if the jwt returned is same as the jwt of the user that is signed-in
    } else {
        return false
    }
}

export const setDocument = (document) => {
    return axios
        .post(`${API}manuscript/create/64262eca47ff817ff021ad88`, document, {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDI2MmVjYTQ3ZmY4MTdmZjAyMWFkODgiLCJpYXQiOjE2ODAyMzMyMzV9.cvXyK4Tgp72fMvtbf67WnSUUuLaWhMDmqN9DDorkX5E",
            },
        })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })
}

export const getDocument = (document) => {
    console.log("in getDocument")
    return fetch(
        `${API}manuscript/getStudentManuscripts/64262eca47ff817ff021ad88`,
        {
            method: "GET",
            headers: {
                Authorization:
                    "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDI2MmVjYTQ3ZmY4MTdmZjAyMWFkODgiLCJpYXQiOjE2ODAyMzMyMzV9.cvXyK4Tgp72fMvtbf67WnSUUuLaWhMDmqN9DDorkX5E",
            },
        }
    )
        .then((response) => {
            // console.log("fetched data")
            return response.json()
        })
        .catch((error) => {
            // console.log("could not fetch data")
            console.log(error)
        })
}
