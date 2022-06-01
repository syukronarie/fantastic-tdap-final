import { Navigate } from "react-router-dom";
import { axiosInstance } from "../apis";

axiosInstance.interceptors.request.use((request) => {

	store.dispatch(actionLoading(true))

	if(!accessToken) {
		const payload = 'refreshToken'
		store.dispatch(actionRefreshToken(payload));
	}

	const result = await respondRefreshToken()

	request.headers['accesstoken'] = result.data
});

axiosInstance.interceptors.response.use(response => {
	
	store.dispatch(actionLoading(false))
	
	if(response.data.status === '404'){
		Navigate('/page-404')
	}

	if(response.data.status === '500'){
		Navigate('/page-server-error')
	}

})



