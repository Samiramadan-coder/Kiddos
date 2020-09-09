<template>
	<div class="footer">
		<div class="container">
			<div class="row">

				<div class="col-md-6 col-lg-3">
					<div class="item">
						<h4>Have a Questions?</h4>

						<div class="nested-item">
							<i class="fas fa-map-marker-alt"></i>
							<p>203 Fake St. Mountain View, San Francisco, California, USA</p>
						</div>

						<div class="nested-item">
							<i class="fas fa-phone"></i>
							<p>+2 392 3929 210</p>
						</div>

						<div class="nested-item">
							<i class="fas fa-envelope"></i>
							<p>info@yourdomain.com</p>
						</div>
					</div>
				</div>

				<div class="col-md-6 col-lg-3">
					
					<div class="item-two">
						<h4>Recent Blog</h4>
						<div class="item-two-cont">
							<img src="../assets/footer/footer01.jpg" width="70px" height="70px">
							<div class="right-item">
								<p>Even the all-powerful Pointing has no control about</p>
								<div class="nested-right-item">
									<i class="far fa-calendar-alt"></i>
									<span>25 December 2019</span>
								</div>
							</div>
						</div>
					</div>
					<div class="item-two">
						<div class="item-two-cont">
							<img src="../assets/footer/footer01.jpg" width="70px" height="70px">
							<div class="right-item">
								<p>Even the all-powerful Pointing has no control about</p>
								<div class="nested-right-item">
									<i class="far fa-calendar-alt"></i>
									<span>25 December 2019</span>
								</div>
							</div>
						</div>
					</div>	
				</div>

				<div class="col-md-6 col-lg-3">
					<div class="item-three">
						<h4>Links</h4>
						<ul class="list-unstyled">
							<li><i class="fas fa-arrow-right"></i><a href="#">Home</a></li>
							<li><i class="fas fa-arrow-right"></i><a href="#">About</a></li>
							<li><i class="fas fa-arrow-right"></i><a href="#">Services</a></li>
							<li><i class="fas fa-arrow-right"></i><a href="#">Department</a></li>
							<li><i class="fas fa-arrow-right"></i><a href="#">Contact</a></li>
						</ul>
					</div>
				</div>

				<div class="col-md-6 col-lg-3">
					<div class="subscribe">
						<h4>Subscribe Us!</h4>
						<div class="form-group">
							<input type="text" name="" class="form-control" placeholder="Enter email address">
						</div>

						<button class="btn">Subscribe</button>

						<div class="connect-with-us">
							<h4>Connect With Us</h4>
							<div class="icon">
								<i class="fab fa-facebook-f"></i>
								<i class="fab fa-twitter"></i>
								<i class="fab fa-instagram"></i>
							</div>
						</div>

					</div>
				</div>

			</div>

			<div class="copyright text-center">
				<p>Copyright ©2020 All rights reserved | This template is made by Sami Ramadan</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.footer{
		padding: 4rem 0;
		background-color: #232323;
		font-family: var(--main-font);
		color: #fff;
	}

	.footer .item{

	}

	.footer .item h4{
	    margin-bottom: 2rem;
    	font-weight: 300;
    	font-size: 1.3rem;
	}

	.footer .item .nested-item{
		display: flex;
	}

	.footer .item i{
		font-size: .7rem;
		color: #cac7c7;
		position: relative;
		top: 3px;
	}

	.footer .item p{
	    font-size: .8rem;
    	margin-left: 1rem;
    	color: #cac7c7;
	}

	.footer .item-two{
		margin-bottom: 2rem;
	}

	.footer .item-two h4{ 
		margin-bottom: 2rem;
    	font-weight: 300;
    	font-size: 1.3rem;
	}

	.footer .item-two .item-two-cont{
		display: flex;
	}

	.footer .item-two .item-two-cont img{
		margin-right: 1.5rem;
	}

	.footer .item-two .item-two-cont .right-item p{
		font-size: .9rem;
		color: #cac7c7;
	}

	.footer .item-two .item-two-cont .right-item .nested-right-item{
		font-size: .9rem;
		color: #cac7c7; 
	}

	.item-three{
		padding: 0 2rem;
	}

	.item-three h4{
		margin-bottom: 2rem;
    	font-weight: 300;
    	font-size: 1.3rem;
	}

	.item-three ul li i{
	    font-size: .7rem;
    	color: #cac7c7
	}

	.item-three ul li a{
		color: #cac7c7;
	    font-size: .9rem;
	    display: inline-block;
	    margin-left: .5rem
	}

	.subscribe h4{
		margin-bottom: 2rem;
    	font-weight: 300;
    	font-size: 1.3rem;
	}

	.subscribe input{
	    background-color: #4e4a4a;
	    text-align: center;
	    border: 0;
	    color: #cac7c7;
	    font-size: .9rem;
	    padding: 1.5rem;
	    display: block;
	    border-radius: 0
	}

	.subscribe button{
	    background-color: #5d50c6;
	    display: block;
	    width: 100%;
	    color: #cac7c7;
	    font-size: .9rem;
	    padding: .7rem;
	    border-radius: 0
	}

	.subscribe .connect-with-us{
		margin-top: 2.5rem;
	}

	.subscribe .connect-with-us .icon i{
	    margin-right: rem;
	    display: inline-block;
	    width: 40px;
	    height: 40px;
	    line-height: 40px;
	    text-align: center;
	    border-radius: 50%;
	    background-color: #4e4a4a;
	    cursor: pointer
	}

	.footer .copyright{
		padding: 3rem 0 0 0
	}

	.footer .copyright p{
		font-size: .9rem;
    	margin-left: 1rem;
    	color: #cac7c7;
	}
</style>