import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import store from './store';
import fb from 'firebase';

Vue.use(Router);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
    var firebaseConfig = {
		apiKey: "AIzaSyD3gwunfj8lpAaFEeX_lS0EGu8nt3BPC1U",
		authDomain: "vue-app-anp.firebaseapp.com",
		projectId: "vue-app-anp",
		storageBucket: "vue-app-anp.appspot.com",
		messagingSenderId: "85250800462",
		appId: "1:85250800462:web:3ee93148d023a5b7e2bc1f",
		measurementId: "G-L96VHQ7H4W",
	};
	
	// Initialize Firebase
	fb.initializeApp(firebaseConfig);
	fb.getAnalytics();

	fb.auth().onAuthStateChanged(user => {
		if (user) {
			this.$store.dispatch('autoLoginUser', user)
		}
    })

   this.$store.dispatch('fetchAds')
  
}
}).$mount('#app');
