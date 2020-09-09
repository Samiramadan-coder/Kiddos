<template>
	<div class="testimonials">
		<div class="container">
			<!-- Top Part -->
			<div class="top-cources text-center" :class="{ active: displayTitle }">
				<h2>What Parents <span>Says About Us</span></h2>
				<p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
			</div>

			<!-- Carousel -->
			<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

			  <ol class="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			  </ol>

			  <div class="carousel-inner">

			    <div class="carousel-item active">

			      <div class="img">
			      	<img src="../../assets/certified/03.jpg">
			      </div>

			      <div class="info">
			      	<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
			      	<h3>Mark Huff</h3>
			      	<span>Mother</span>
			      </div>

			    </div>

			    <div class="carousel-item">

			      <div class="img">
			      	<img src="../../assets/certified/03.jpg">
			      </div>

			      <div class="info">
			      	<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
			      	<h3>Mark Huff</h3>
			      	<span>Mother</span>
			      </div>

			    </div>

			    <div class="carousel-item">

			    	<div class="img">
				      	<img src="../../assets/certified/03.jpg">
				    </div>

			      	<div class="info">
			      	  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
			          <h3>Mark Huff</h3>
			      	  <span>Mother</span>
			      	</div>
			      
			    </div>

			  </div>

			</div>

		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				displayTitle: false,
				displayRow: false,
				windowScroll: window.scrollY
			}
		},
		methods: {
			showSection() {
				this.windowScroll = window.top.scrollY;
				if(this.windowScroll >= 4000) {
					this.displayTitle = true;
				}
			}
		},
		created() {
			window.addEventListener('scroll', this.showSection);
		}
	};
</script>

<style scoped>
	.testimonials{
		padding: 4rem 0;
		font-family: var(--main-font);
	}

	.testimonials .top-cources{
		padding-bottom: 4rem;
		transition: all 1s;
		opacity: 0;
		transform: scale(.6);
	}

	.testimonials .top-cources.active{
		opacity: 1;
		transform: none;
	}


	.testimonials .top-cources h2{
		font-weight: 600;
		font-size: 2.8rem;
		color: #5d50c6;
	}

	.testimonials .top-cources h2 span{
		color: var(--second-color);
	}

	.testimonials .top-cources p{
		width: 70%;
		margin: 1rem auto;
		color: #868484;
		line-height: 2;
	}

	.carousel .carousel-item{
		overflow: hidden;
	}

	.carousel .carousel-item .img{
		float: left;
		margin-right: 2rem;
		border-radius: 50%;
		overflow: hidden;
		position: relative;
		left: 15rem;
	}

	.carousel .carousel-item .img img{
		
	}

	.carousel .carousel-item .info{
		float: left;
		position: relative;
		top: 2rem;
		left: 15rem;
	}

	.carousel .carousel-item .info p{
		width: 50%;
		margin-bottom: 2rem;
		color: #868484;
	}

	.carousel .carousel-item .info h3{
		font-size: 1.5rem;
		font-weight: 400;
	}

	.carousel .carousel-item .info span{
		color: var(--main-color);
	}

	.carousel .carousel-item .info{

	}

	@media screen and (max-width: 767px) {
		.carousel .carousel-item .info,
		.carousel .carousel-item .img{
			left: 7rem;
		}	
	}
</style>