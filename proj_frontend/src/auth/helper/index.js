import { API } from "../../backend";
import axios from "axios";

export const signup = (user) => {
  console.log(user);
  return axios
    .post(`${API}signup/${user.role}`, user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signin = (user) => {
  console.log(JSON.stringify(user));
  return axios
    .post(`${API}signin/${user?.role}`, user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

// browser is unable to remember who's logged in, so let's put token for our ease
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    // if window object is accessible to us hence 'not undefined'
    // then access the local storage of the browser and set the property Item (setItem) with 'jwt' value to keep remember that user is signed-in
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = (next) => {
  // Let's remove the property 'jwt' from the localStorage, coz user will be signed out
  if (typeof window !== "undefined") {
    // if window object is accessible to us, hence 'not undefined'
    // then access the local storage of the browser and remove the property Item (removeItem) that contains 'jwt' value
    localStorage.removeItem("jwt");
    // next()
  }

  return fetch(`${API}/signout`, {
    method: "GET",
  })
    .then((response) => {
      console.log("signout successful");
    })
    .catch((error) => {
      console.log(error);
    });
};

// to check whether the user is authenticated (signed-in) or not
export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    // if window object is not accessible to us hence 'undefined'
    // then access the local storage of the browser and check whether the property (Item) has 'jwt' value or not
    return false;
  }

  if (localStorage.getItem("jwt")) {
    // if you're able to get the item of 'jwt' in the local storage
    // console.log(JSON.parse(localStorage.getItem('jwt')));
    return localStorage.getItem("jwt"); // instead of return true, we're returning jwt value and then in the frontend (component), we'll check over there as well if the jwt returned is same as the jwt of the user that is signed-in
  } else {
    return false;
  }
};

// --------------------- Student Controllers

export const setDocument = (document) => {
  // console.log("set document=?>" + JSON.stringify(document))

  // accessing the session information of the logged-in user from the local storage of the browser
  const needToParse = localStorage.getItem("jwt");
  const sessionInfo = JSON.parse(needToParse);

  return axios
    .post(`${API}manuscript/create/${sessionInfo.object._id}`, document)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const setNFT = (id) => {
  console.log("setNFT");
  return axios
    .put(`${API}manuscript/setNFT?manuscriptId=${id}`)
    .then((response) => {
      console.log("Yes, in setNFT");
      return response.data;
    })
    .catch((error) => {
      console.log("In error setNFT");
      console.log(error);
    });
};

export const getDocument = (document) => {
  // console.log("in getDocument")

  // accessing the session information of the logged-in user from the local storage of the browser
  const needToParse = localStorage.getItem("jwt");
  const sessionInfo = JSON.parse(needToParse);

  return fetch(
    `${API}manuscript/getStudentManuscripts/${sessionInfo.object._id}`,
    {
      method: "GET",
      headers: {
        Authorization: `bearer ${sessionInfo.token}`,
      },
    }
  )
    .then((response) => {
      // console.log("fetched data")
      return response.json();
    })
    .catch((error) => {
      // console.log("could not fetch data")
      console.log(error);
    });
};

export const getDocumentByCategory = (document) => {
  console.log(`in getDocumentByCategory ${document}`);

  // accessing the session information of the logged-in user from the local storage of the browser
  const needToParse = localStorage.getItem("jwt");
  const sessionInfo = JSON.parse(needToParse);
  // console.log(sessionInfo.token);
  // console.log(sessionInfo.object);
  console.log(sessionInfo.object._id);

  return fetch(
    `${API}manuscript/getManuscriptsByCategory/${sessionInfo.object._id}?document=${document}`,
    {
      method: "GET",
      headers: {
        Authorization: `bearer ${sessionInfo.token}`,
      },
    }
  )
    .then((response) => response.json())
    .then((jsonArray) => {
      // console.log(jsonArray)
      return jsonArray;
    })
    .catch((error) => {
      // console.log("could not fetch data")
      console.log(error);
    });
};

export const getAllManuscripts_NFT = (document) => {
  // console.log(`in getAllManuscripts_NFT ${document}`)

  // accessing the session information of the logged-in user from the local storage of the browser
  const needToParse = localStorage.getItem("jwt");
  const sessionInfo = JSON.parse(needToParse);

  return fetch(`${API}manuscript/getAllManuscripts_NFT?document=${document}`, {
    method: "GET",
    headers: {
      Authorization: `bearer ${sessionInfo.token}`,
    },
  })
    .then((response) => response.json())
    .then((jsonArray) => {
      console.log(jsonArray);
      return jsonArray;
    })
    .catch((error) => {
      console.log("could not fetch data");
      console.log(error);
    });
};

// --------------------- Supervisor Controllers

export const getSupervisorById = (id) => {
  return fetch(`${API}supervisor/getSupervisor/${id}`, {
    method: "GET",
  })
    .then(async (response) => {
      // const data = await response.json()
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log("could not fetch data");
      console.log(error);
    });
};

export const getAllSupervisors = () => {
  return fetch(`${API}supervisor/getAllSupervisors`, {
    method: "GET",
  })
    .then((response) => {
      // console.log("fetched data")
      console.log(response)
      return response.json();
    })
    .catch((error) => {
      console.log("could not fetch data");
      console.log(error);
    });
};

// ------------------ Ideas Controllers

export const createIdea = (document) => {
  // console.log("set Idea -> " + JSON.stringify(document));

  // accessing the session information of the logged-in user from the local storage of the browser
  const needToParse = localStorage.getItem("jwt");
  const sessionInfo = JSON.parse(needToParse);
  // console.log(sessionInfo.object._id);

  return fetch(`${API}idea/createIdea/${sessionInfo.object._id}`, {
    method: "POST",
    headers: {
      Authorization: `bearer ${sessionInfo.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(document),
  })
    .then((response) => {
      console.log("fetched data");
      return response.json();
    })
    .catch((error) => {
      console.log("could not fetch data");
      console.log(error);
    });
};

export const getAllIdeas = async () => {
  console.log("in proj_frintend/src/auth/helper/index.js");

  return await fetch(`${API}idea/getAllIdeas`, {
    method: "GET",
  })
    .then(async (response) => {
      console.log("fetched data");
      const data = await response.json();
      // console.log(data);
      return data;
    })
    .catch((error) => {
      console.log("could not fetch data");
      console.log(error);
    });
};

export const getIdeasBySupervisorId = async (id) => {
  console.log("in proj_frintend/src/auth/helper/index.js/getIdeasBySupervisorId");
  console.log(id);

  return await fetch(`${API}idea/getIdeasBySupervisorId?id=${id}`, {
    method: "GET",
  })
    .then(async (response) => {
      console.log("fetched data");
      const data = await response.json();
      // console.log(data);
      return data;
    })
    .catch((error) => {
      console.log("could not fetch data");
      console.log(error);
    });
};

// ------------------ Request Controllers

export const createRequest = (data) => {
  // console.log("set Idea -> " + JSON.stringify(document));

  // accessing the session information of the logged-in user from the local storage of the browser
  const needToParse = localStorage.getItem("jwt");
  const sessionInfo = JSON.parse(needToParse);
  // console.log(sessionInfo.object._id);

  return fetch(`${API}request/createRequest/${sessionInfo.object._id}`, {
    method: "POST",
    headers: {
      Authorization: `bearer ${sessionInfo.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("fetched data");
      return response.json();
    })
    .catch((error) => {
      console.log("could not fetch data");
      console.log(error);
    });
};

// ------------------ Admin Controllers

export const manageAccount = (data) => {
  console.log("in proj_frontend/src/auth/helper/index.js");
  console.log(data.selectedOption);
  console.log(data.email);
  console.log(data.status);

  // accessing the session information of the logged-in user from the local storage of the browser
  const needToParse = localStorage.getItem("jwt");
  const sessionInfo = JSON.parse(needToParse);
  // console.log(sessionInfo.object._id);

  return axios
    .put(`${API}admin/manageAccount/${sessionInfo.object._id}`, data)
    .then((response) => {
      console.log("Successfully changed the data");
      console.log(response.json());
      return response.json();
    })
    .catch((error) => {
      console.log("Failed to change the data");
      console.log(error);
    });
};
