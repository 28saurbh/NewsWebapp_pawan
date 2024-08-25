import axios from "axios";


const API_PATH = process.env.REACT_APP_API_PATH;


export const axiosInstance = axios.create({
  // baseURL: API_URL
});


axiosInstance.interceptors.request.use(
  async config => {
    
    config.headers['Content-Type'] = 'application/json';

    // SENT DEFAULT PARAMS TO GET API :
    if (config.method === "get") {
      const DefaultParams = {
        logged_in_company_id: "123"

      }
      config["params"] = (config["params"] !== undefined) ? { ...DefaultParams, ...config.params } : DefaultParams;
      config["data"] = {};
    }

    // SENT DEFAULT JSON DATA TO POST API :
    if (config.method === "post") {


      const DefaultData = {

      }
      const contentType = config["data"].contentType;

      if (contentType === 'multipart/form-data') {
        config.headers['Content-Type'] = 'multipart/form-data';
        const formdata = config["data"].formData;
        Object.keys(DefaultData).forEach(key => {
          // formdata.append(key, DefaultData[key])
          formdata.set(key, DefaultData[key])
        });
        config["data"] = formdata;
      }
      else {
        config["data"] = (config["data"] !== undefined) ? { ...DefaultData, ...config.data } : DefaultData;
      }
    }

    return config;
  },
  error => {
    Promise.reject(error)
  });

axiosInstance.interceptors.response.use(
  // function (response) {
  //   if (response.config.method === 'post') {
  //     if (response.config.url == "/api/staging/v1/isDefaultConfigCheck") {
  //       return
  //     }

  //     store.dispatch({ type: "closeModal" })
  //     if (response.config.headers['Content-Type'] == "application/json") {
  //       const reqData = JSON.parse(response.config.data);
  //       if (!reqData.swalhidden) {
  //         Swal.fire({
  //           icon: 'success',
  //           title: response.data.message,
  //           timer: 1000,
  //           willClose: () => {
  //             clearInterval(1000)
  //           }
  //         })
  //       }
  //     }
  //     else {
  //       Swal.fire({
  //         icon: 'success',
  //         title: response.data.message,
  //         timer: 1000,
  //         willClose: () => {
  //           clearInterval(1000)
  //         }
  //       })
  //     }

  //   }


  //   return response;
  // },
  // function (error) {

  //   const state = store.getState();
  //   const { userdata, tokens, currTeamObj } = state.userReducer;
  //   const refreshtoken = tokens.refresh_token || '';
  //   const apikey = userdata.api_key || '';
  //   const user_id = userdata.user_id || '';

  //   // ################-----Refresh Token---------code------------###################
  //   if ((error && error.response && error.response.status === 401)) {
  //     return axios.post(`${ API_PATH }/v1/jwtrefresh`, {}, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "api-key": apikey,
  //         "user-id": user_id,
  //         "Authorization": "Bearer " + refreshtoken
  //       },
  //     }).then(async (response) => {
  //       if (response.status === 200) {
  //         const { access_token, refresh_token } = response.data;

  //         //--------------Set new Refresh Tokens in redux ----------------------
  //         const newtokens = {
  //           access_token: access_token,
  //           refresh_token: refresh_token
  //         }
  //         store.dispatch({ type: "updatetokens", payload: newtokens })
  //         // ---------------------------------------------------------------

  //         error.config.headers.Authorization = "Bearer " + response.data.access_token;
  //         // Resend post request with json data
  //         if (error.config.headers['Content-Type'] == 'application/json') {
  //           error.config.data = JSON.parse(error.config.data);
  //         }

  //         // Resend post request with form data
  //         else if (error.config.headers['Content-Type'] == false) {
  //           error.config.headers['Content-Type'] = 'multipart/form-data'
  //           const postData = {
  //             contentType: "multipart/form-data",
  //             formData: error.config.data,
  //           };
  //           error.config["data"] = postData;
  //         }

  //         return axiosInstance.request(error.config);

  //       } else {
  //         console.log("refresh token api error : ", response)
  //       }
  //     }).catch((err) => {
  //       console.log(err)
  //       // Auto Logout ======================================
  //       if (err.response.status === 401) {
  //         window.location.href = `/${ROOT_FOLDER}/logout`;
  //       }
  //     })
  //   }

  //   if (error && error.config && error.config.method === 'post') {

  //     if (error.config.headers['Content-Type']) {
  //       const errData = JSON.parse(error.config.data);
  //       if (!errData.swalhidden) {
  //         Swal.fire({
  //           imageUrl: errorGif,
  //           showConfirmButton: false,
  //           imageWidth: 50,
  //           title: (error.response &&
  //             error.response.data &&
  //             error.response.data.message) ||
  //             error.message ||
  //             error.toString(),
  //           willClose: () => {
  //             clearInterval(1000)
  //           }
  //         })
  //       }
  //     }
  //     else {
  //       Swal.fire({
  //         imageUrl: errorGif,
  //         showConfirmButton: false,
  //         imageWidth: 50,
  //         title: (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //           error.message ||
  //           error.toString(),
  //         willClose: () => {
  //           clearInterval(1000)
  //         }
  //       })
  //     }
  //   }

  //   return Promise.reject(error);
  // }
);