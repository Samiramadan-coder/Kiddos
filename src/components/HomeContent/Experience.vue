<template>
	<div class="experience">
		<!-- Overlay -->
		<div class="overlay"></div>

		<!-- Main Content -->
		<div class="container">
			<!-- Top Section -->
			<div class="top-section text-center">
				<h2>20 Years of <span>Experience</span></h2>
				<p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
			</div>
			<!-- Bottom Section -->
			<div class="row">

				<div class="col-sm-6 col-md-3">
					<div class="item text-center">
						<h2>18</h2>
						<span>Certified Teachers</span>
					</div>	
				</div>

				<div class="col-sm-6 col-md-3">
					<div class="item text-center">
						<h2>351</h2>
						<span>Successful Kids</span>
					</div>	
				</div>

				<div class="col-sm-6 col-md-3">
					<div class="item text-center">
						<h2>564</h2>
						<span>Happy Parents</span>
					</div>	
				</div>

				<div class="col-sm-6 col-md-3">
					<div class="item text-center">
						<h2>300</h2>
						<span>Awards Won</span>
					</div>	
				</div>

			</div>
		</div>

	</div>
</template>

<style scoped>
	.experience{
		padding: 3rem 0 5rem;
		font-family: var(--main-font);
		background: url('../../assets/experience/experience.jpg') fixed;
		position: relative;
	}

	.experience .overlay{
		position: absolute;
		top: 0; left: 0;
		right: 0; bottom: 0;
		background-color: rgba(0,0,0,.5);
		z-index: 0;
	}

	.experience .container{
		position: relative;
		z-index: 1;
	}

	.experience .top-section{
		padding: 8rem 0 5rem;
	}

	.experience .top-section h2{
		font-size: 3rem;
		font-weight: 600;
		color: #fff
	}

	.experience .top-section h2 span{
		color: #000;
	}

	.experience .top-section p{
		width: 70%;
	    margin: 2rem auto;
	    color: #d0caca;
	    line-height: 2
	}

	.experience .item {
		margin-bottom: 2rem;
	}

	.experience .item h2{
		color: var(--main-color);
		font-size: 3rem;
	}

	.experience .item span{
		color: #fff;
		color: #d0caca;
	}
</style>