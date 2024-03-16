import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./pages/Homepage.vue";
import ReportDetail from "./pages/ReportDetail.vue"
import { reportSonarArray } from "../storeManager";


const router = createRouter({
	history: createWebHistory(),
	routes: [
        {
			path: "/",
			name: "home",
			component: Homepage,
		},
		{
			path: "/ReportDetail/:slug",
			props: function (route)  {
				const report = reportSonarArray.results.filter(
				(report) => report.domain_name === route.params.slug
				)
				return {
					slug: route.params.slug,
					report: report
				}
			},
			name: "ReportDetail",
			component: ReportDetail,
		}
	],
});
export { router };