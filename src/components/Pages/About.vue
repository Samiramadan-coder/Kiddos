<template>
	<div class="about">

		<!-- Landing Page -->
		<div class="landing">
			<div class="overlay"></div>

			<h2>About Us</h2>
			<ul class="list-unstyled">
				<router-link tag='li' to='/'>
					<a>Home</a>
				</router-link>
				<router-link tag='li' to='/about'>
					<a>About</a>
				</router-link>
			</ul>
		</div>
		<!-- Content Of the Page -->
		<div class="container">
			<div class="row">
				
				<div class="col-md-12 col-lg-7 left-item">
					<div class="top-part">
						<h3>What We Offer</h3>
						<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
					</div>

					<div class="row nested-row">

						<div class="col-md-6 item">
							<div class="icon">
								<i class="fas fa-book"></i>
							</div>

							<div class="info">
								<h4>Safety First</h4>
								<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
							</div>
						</div>

						<div class="col-md-6 item">
							<div class="icon">
								<i class="fas fa-book-reader"></i>
							</div>

							<div class="info">
								<h4>Regular Classes</h4>
								<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
							</div>
						</div>

						<div class="col-md-6 item">
							<div class="icon">
								<i class="fab fa-readme"></i>
							</div>

							<div class="info">
								<h4>Certified Teachers</h4>
								<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
							</div>
						</div>

						<div class="col-md-6 item">
							<div class="icon">
								<i class="fas fa-glasses"></i>
							</div>

							<div class="info">
								<h4>Sufficient Classrooms</h4>
								<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
							</div>
						</div>

						<div class="col-md-6 item">
							<div class="icon">
								<i class="fas fa-book"></i>
							</div>

							<div class="info">
								<h4>Creative Lessons</h4>
								<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
							</div>
						</div>

						<div class="col-md-6 item">
							<div class="icon">
								<i class="fas fa-volleyball-ball"></i>>
							</div>

							<div class="info">
								<h4>Sports Facilities</h4>
								<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-12 col-lg-5">
					<div class="right-part">
						<h3>Welcome to Kiddos <br> Learning School</h3>
						<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
						<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. And if she hasn’t been rewritten, then they are still using her.</p>

						<button class="btn">Read More</button>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<style scoped>

/*******************************/
/******* About  Styling *****/
	.about{
		font-family: var(--main-font);
		background-color: #fff;
	}

	.about .landing{
		padding: 10rem 0;
		background: url('../../assets/pages/about.jpg') fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
	}

	.about .landing .overlay{
		position: absolute;
		top: 0; left: 0;
		bottom: 0; right: 0;
		background-color: rgba(0,0,0,.4);
		z-index: 0;
	}

	.about .landing h2{
		color: #fff;
		position: relative;
		z-index: 1;
		font-weight: bold;
		font-size: 2.5rem;
	}

	.about .landing ul{
		display: flex;
		position: relative;
		z-index: 1;

	}

	.about .landing ul li{
		margin: 0 1rem;
	}

	.about .landing ul li a{
		text-decoration: none;
		color: #fff;
	}

	.about .left-item{
		padding: 4rem 0
	}

	.about .top-part{
		padding-bottom: 2rem
	}

	.about .top-part h3{
		margin-bottom: 2rem;
    	font-weight: 500
	}

	.about .top-part p{
		line-height: 2;
    	color: #868484
	}

	.about .item{
		display: flex;
		align-items: center;
		padding: 0;
		margin-bottom: 1rem;
	}

	.about .item .icon{
		width: 40%;
		height: 70px;
		background-color: var(--main-color);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 1rem;
		color: #fff;
	}

	.about .item .icon i{
		font-size: 1.8rem;
	}

	.about .item .info{
		padding-right: 1rem;
	}

	.about .item .info h4{
		font-size: 1.2rem;
		color: #3c3939;
		letter-spacing: 1px;
	}

	.about .item .info p{
		color: #868484;
		line-height: 1.5;
		font-size: 1rem
	}

	.about .right-part{
		padding: 4rem 2rem;
		background-color: #f7f7f7;
	}

	.about .right-part h3{
		margin-bottom: 2rem;
    	font-weight: 500
	}

	.about .right-part p{
		color: #868484;
		line-height: 2;
	}

	.about .right-part button{
		padding: 1rem 1.5rem;
	    border-radius: 1.5rem;
	    background-color: var(--second-color);
	    color: #fff;
	    font-weight: 600;
	    border: 2px solid transparent;
	    transition: all .5s;
	    -webkit-transition: all .5s;
	    -moz-transition: all .5s;
	    -o-transition: all .5s;
	    -ms-transition: all .5s;
	}
	.about .right-part button:hover{
		background-color: transparent;
		border: 2px solid var(--second-color);
		color: var(--second-color);
	}

	/* Media Screen */

	@media screen and (max-width: 575px) {
		.about .left-item{
			padding: 4rem 2rem;
		}
	}

/*****X******************X******/
/******* About Styling *****/
</style>