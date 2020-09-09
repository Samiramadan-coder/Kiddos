<template>
	<div class="offers">
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
	.offers{
		font-family: var(--main-font);
		background-color: #fff;
	}

	.offers .left-item{
		padding: 4rem 0
	}

	.offers .top-part{
		padding-bottom: 2rem
	}

	.offers .top-part h3{
		margin-bottom: 2rem;
    	font-weight: 500
	}

	.offers .top-part p{
		line-height: 2;
    	color: #868484
	}

	.offers .item{
		display: flex;
		align-items: center;
		padding: 0;
		margin-bottom: 1rem;
	}

	.offers .item .icon{
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

	.offers .item .icon i{
		font-size: 1.8rem;
	}

	.offers .item .info{
		padding-right: 1rem;
	}

	.offers .item .info h4{
		font-size: 1.2rem;
		color: #3c3939;
		letter-spacing: 1px;
	}

	.offers .item .info p{
		color: #868484;
		line-height: 1.5;
		font-size: 1rem
	}

	.offers .right-part{
		padding: 4rem 2rem;
		background-color: #f7f7f7;
	}

	.offers .right-part h3{
		margin-bottom: 2rem;
    	font-weight: 500
	}

	.offers .right-part p{
		color: #868484;
		line-height: 2;
	}

	.offers .right-part button{
		padding: 1rem 1.5rem;
	    border-radius: 1.5rem;
	    background-color: var(--second-color);
	    color: #fff;
	    font-weight: 600;
	    border: 2px solid transparent;
	    transition: all .5s;
	}
	.offers .right-part button:hover{
		background-color: transparent;
		border: 2px solid var(--second-color);
		color: var(--second-color);
	}

	/* Media Screen */

	@media screen and (max-width: 575px) {
		.offers .left-item{
			padding: 4rem 2rem;
		}
	}
</style>