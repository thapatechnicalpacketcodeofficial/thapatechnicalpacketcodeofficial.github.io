/*global require */
require.config(
	 {
		 baseUrl:"./",
		 /*enforceDefine: true,*/
		 // Loads non-AMD libraries and declares their dependencies
		 shim: {
			 'jquery': {
				 exports: '$'
			 }
		 },
		 // Location of libraries
		 paths: {
			 appName:'app',
			 
			
			 jquery:'jquery-1.11.0.min'
		 },

		 packages: [
			 {
				 name: 'identification',
				 location: 'app'
			 }
		 ]
	 }
);
