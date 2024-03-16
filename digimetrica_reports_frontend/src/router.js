import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./pages/Homepage.vue";
import ReportDetail from "./pages/ReportDetail.vue"




const router = createRouter({
	history: createWebHistory(),
	routes: [
        {
			path: "/",
			name: "home",
			component: Homepage,
		},
		{
			path: "/ReportDetail",
			props: true,
			name: "ReportDetail",
			component: ReportDetail,
		}
	],
});
export { router };