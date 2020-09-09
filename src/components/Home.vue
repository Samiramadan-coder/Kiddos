<template>
	<div class="home">

		<!-- Carousel -->
		<app-carousel></app-carousel>

		<!-- Features -->
		<app-features></app-features>

		<!-- Offers -->
		<app-offers></app-offers>

		<!-- Announce -->
		<app-announce></app-announce>

		<!-- CertifiedTeacher -->
		<app-certified></app-certified>

		<!-- OurCourses -->
		<app-courses></app-courses>

		<!-- Experience -->
		<app-experience></app-experience>

		<!-- Testimonials -->
		<app-parent></app-parent>

		<!-- RequestQuote -->
		<app-request></app-request>

		<!-- Pricing -->
		<app-pricing></app-pricing>

		<!-- Blog -->
		<app-blog></app-blog>

		<!-- Picture -->
		<app-picture></app-picture>
		
	</div>
</template>

<script>
	// import the components
	import Carousel from './HomeContent/Carousel.vue'
	import Features from './HomeContent/Features.vue'
	import Offers from './HomeContent/Offers.vue'
	import Announce from './HomeContent/Announce.vue'
	import CertifiedTeacher from './HomeContent/CertifiedTeacher.vue'
	import OurCourses from './HomeContent/OurCourses.vue'
	import Experience from './HomeContent/Experience.vue'
	import Testimonials from './HomeContent/Parents.vue'
	import RequestQuote from './HomeContent/RequestQuote.vue'
	import Pricing from './HomeContent/Pricing.vue'
	import Blog from './HomeContent/Blog.vue'
	import Picture from './HomeContent/Picture.vue'

	export default{
		components: {
			appCarousel: Carousel,
			appFeatures: Features,
			appOffers: Offers,
			appAnnounce: Announce,
			appCertified: CertifiedTeacher,
			appCourses: OurCourses,
			appExperience: Experience,
			appParent: Testimonials,
			appRequest: RequestQuote,
			appPricing: Pricing,
			appBlog: Blog,
			appPicture: Picture
		}
	};
</script>

<style scoped>
	
</style>