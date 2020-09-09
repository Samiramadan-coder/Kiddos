<template>
	<div class="carousel">
		<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">

		  <div class="overlay"></div>

		  <ol class="carousel-indicators">
		    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
		    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
		  </ol>

		  <div class="carousel-inner">

		    <div class="carousel-item active">
		      <img src="../../assets/carousel/carousel01.jpg" class="d-block w-100" alt="">
		      <div class="carousel-caption d-none d-md-block">
		        <h2>Kids are The Best <br> Explorer in The World</h2>
		        <button class="btn">Read More</button>
		      </div>
		    </div>

		    <div class="carousel-item">
		      <img src="../../assets/carousel/carousel01.jpg" class="d-block w-100" alt="">
		      <div class="carousel-caption d-none d-md-block">
		        <h2>Perfect Learned <br> for Your Child</h2>
		        <button class="btn">Read More</button>
		      </div>
		    </div>

		  </div>

		  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
		    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span class="sr-only">Previous</span>
		  </a>

		  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
		    <span class="carousel-control-next-icon" aria-hidden="true"></span>
		    <span class="sr-only">Next</span>
		  </a>

		</div>
	</div>
</template>

<style scoped>

/*******************************/
/******* Carousel Styling *****/

	.carousel .overlay{
		position: absolute;
		top: 0; bottom: 0;
		left: 0;right: 0;
		background-color: rgba(0,0,0,.5);
		z-index: 1;
	}

	.carousel-indicators{
		bottom: 12%;
	}

	.carousel-indicators .active{
		color: var(--main-color)
	}

	.carousel-indicators li{
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}

	.carousel-caption{
		top: 50%;
		left: 50%;
		bottom: 0;
		right: 0;
		transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		font-family: var(--main-font);
		animation: slide-up 1s ease forwards;
		-webkit-animation: slide-up 1s ease forwards;
		-moz-animation: slide-up 1s ease forwards;
		-o-animation: slide-up 1s ease forwards;
		-ms-animation: slide-up 1s ease forwards;
	}

	.carousel-caption h2{
		font-weight: 800;
		font-size: 3.5rem;
		margin-bottom: 1.8rem
	}

	.carousel-caption button{
		padding: 1rem 1.5rem;
	    border-radius: 1.5rem;
	    background-color: var(--second-color);
	    color: #fff;
	    font-weight: 600;
	    border: 2px solid transparent;
	    transition: all .5s;
	}

	.carousel-caption button:hover{
		background-color: transparent;
		border: 2px solid var(--second-color);
		color: var(--second-color);
	}

	/* Animation */
	@keyframes slide-up{
		from {
			transform: translate(-50%, -30%);
			opacity: .4;
		}
		to {
			transform: translate(-50%, -50%);
			opacity: 1;
		}
	}

	-webkit-@keyframes slide-up{
		from {
			transform: translate(-50%, -30%);
			opacity: .4;
		}
		to {
			transform: translate(-50%, -50%);
			opacity: 1;
		}
	}

	-moz-@keyframes slide-up{
		from {
			transform: translate(-50%, -30%);
			opacity: .4;
		}
		to {
			transform: translate(-50%, -50%);
			opacity: 1;
		}
	}

	-o-@keyframes slide-up{
		from {
			transform: translate(-50%, -30%);
			opacity: .4;
		}
		to {
			transform: translate(-50%, -50%);
			opacity: 1;
		}
	}

	-ms-@keyframes slide-up{
		from {
			transform: translate(-50%, -30%);
			opacity: .4;
		}
		to {
			transform: translate(-50%, -50%);
			opacity: 1;
		}
	}

	@media screen and (max-width: 991px) {
		.carousel-indicators{
			bottom: 2%;
		}
		.carousel-caption h2{
			font-size: 2rem
		}
	}

	
/*****X******************X******/
/**X**** Carousel Styling *X***/

</style>