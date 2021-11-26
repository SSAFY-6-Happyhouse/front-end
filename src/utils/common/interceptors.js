function setInterceptors(instance) {
    instance.interceptors.request.use(
      function(config) {
        return config;
      },
      function(error) {
        return Promise.reject(error);
      },
    );
  
    // Add a response interceptor
    instance.interceptors.response.use(
      function(response) {
        return response;
      },
      function(error) {
        return Promise.reject(error);
      },
    );
  
    return instance;
  }
  
  export default setInterceptors;
  