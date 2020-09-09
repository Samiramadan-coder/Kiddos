<template>
	<div class="certified-teacher">

		<!-- Landing Page -->
		<div class="landing">
			<div class="overlay"></div>

			<h2>Teachers</h2>
			<ul class="list-unstyled">
				<router-link tag='li' to='/'>
					<a>Home</a>
				</router-link>
				<router-link tag='li' to='/teacher'>
					<a>Teacher</a>
				</router-link>
			</ul>
		</div>

		<div class="container">

			<!-- Bottom Part -->
			<div class="row">

				<div class="col-md-6 col-lg-3">
					<div class="item">
						
						<div class="pic-cont"  @mouseover="showSocial = 1" @mouseleave="showSocial = 0">
							<img src="../../assets/certified/01.jpg">
							<div class="icons" :class="{ active: showSocial == 1}">
								<i class="fab fa-twitter"></i>
								<i class="fab fa-facebook-f"></i>
								<i class="fab fa-google"></i>
								<i class="fab fa-instagram"></i>
							</div>
						</div>

						<div class="info text-center">
							<h3>Bianca Wilson</h3>
							<span class="text-uppercase">teacher</span>
							<p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
						</div>

					</div>
				</div>

				<div class="col-md-6 col-lg-3">
					<div class="item">
						
						<div class="pic-cont"  @mouseover="showSocial = 2" @mouseleave="showSocial = 0">
							<img src="../../assets/certified/02.jpg">
							<div class="icons" :class="{ active: showSocial == 2}">
								<i class="fab fa-twitter"></i>
								<i class="fab fa-facebook-f"></i>
								<i class="fab fa-google"></i>
								<i class="fab fa-instagram"></i>
							</div>
						</div>

						<div class="info text-center">
							<h3>Mitch Parker</h3>
							<span class="text-uppercase">ENGLISH TEACHER</span>
							<p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
						</div>

					</div>
				</div>

				<div class="col-md-6 col-lg-3">
					<div class="item">
						
						<div class="pic-cont"  @mouseover="showSocial = 3" @mouseleave="showSocial = 0">
							<img src="../../assets/certified/03.jpg">
							<div class="icons" :class="{ active: showSocial == 3}">
								<i class="fab fa-twitter"></i>
								<i class="fab fa-facebook-f"></i>
								<i class="fab fa-google"></i>
								<i class="fab fa-instagram"></i>
							</div>
						</div>

						<div class="info text-center">
							<h3>Stella Smith</h3>
							<span class="text-uppercase">ART TEACHER</span>
							<p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
						</div>

					</div>
				</div>

				<div class="col-md-6 col-lg-3">
					<div class="item">
						
						<div class="pic-cont"  @mouseover="showSocial = 4" @mouseleave="showSocial = 0">
							<img src="../../assets/certified/04.jpg">
							<div class="icons" :class="{ active: showSocial == 4}">
								<i class="fab fa-twitter"></i>
								<i class="fab fa-facebook-f"></i>
								<i class="fab fa-google"></i>
								<i class="fab fa-instagram"></i>
							</div>
						</div>

						<div class="info text-center">
							<h3>Monshe Henderson</h3>
							<span class="text-uppercase">SCIENCE TEACHER</span>
							<p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
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
				showSocial: 0,
				windowScroll: window.ScrollY,
				showSectionOne: false,
				showSectionTwo: false,
			}
		},
		methods: {
			getScroll() {
				this.windowScroll = window.top.scrollY;
				if(this.windowScroll >= 1800) {
					this.showSectionOne = true;
				}
				if(this.windowScroll >= 1900) {
					this.showSectionTwo = true;
				}
			}
		},
		created() {
			window.addEventListener('scroll', this.getScroll);
		}
	};
</script>

<style scoped>

	.certified-teacher{
		padding: 0 0 4rem 0;
		font-family: var(--main-font);
	}

	.certified-teacher .landing{
		padding: 10rem 0;
		background: url('../../assets/pages/teacher.jpg') fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
		margin-bottom: 8rem;
	}

	.certified-teacher .landing .overlay{
		position: absolute;
		top: 0; left: 0;
		bottom: 0; right: 0;
		background-color: rgba(0,0,0,.4);
		z-index: 0;
	}

	.certified-teacher .landing h2{
		color: #fff;
		position: relative;
		z-index: 1;
		font-weight: bold;
		font-size: 2.5rem;
	}

	.certified-teacher .landing ul{
		display: flex;
		position: relative;
		z-index: 1;

	}

	.certified-teacher .landing ul li{
		margin: 0 1rem;
	}

	.certified-teacher .landing ul li a{
		text-decoration: none;
		color: #fff;
	}

	.certified-teacher .top-cert-tech{
		padding-bottom: 4rem;
	}

	.certified-teacher .top-cert-tech h2{
		font-weight: 600;
		font-size: 2.8rem;
		color: #5d50c6;
	}

	.certified-teacher .top-cert-tech h2 span{
		color: var(--second-color);
	}

	.certified-teacher .top-cert-tech p{
		width: 70%;
		margin: 1rem auto;
		color: #868484;
		line-height: 2;
	}

	.certified-teacher .item{

	}

	.certified-teacher .item .pic-cont{
		position: relative;
		overflow: hidden;
	}

	.certified-teacher .item .pic-cont img{
		width: 100%;	
		transition: all .5s
	}

	.certified-teacher .item .pic-cont:hover img{
		transform: scale(1.1);	
	}

	.certified-teacher .item .pic-cont .icons{
		position: absolute;
		bottom: 0;
		width: 100%;
		background-color: #fff;
		display: flex;
		justify-content: center;
		padding: 1rem 0;
		opacity: 0;
		transition: opacity 1s;
	}

	.certified-teacher .item .pic-cont .icons.active{
		opacity: 1;
	}

	.certified-teacher .item .pic-cont .icons i{
		margin: 0 .5rem;
		color: var(--second-color);
		font-size: 15px;
		cursor: pointer;
	}

	.certified-teacher .item .info{
		padding: 1rem 0;
	}

	.certified-teacher .item .info h3{
	    font-size: 1.5rem;
    	font-weight: 600
	}

	.certified-teacher .item .info span{
		color: #737171;
	    display: block;
	    margin-bottom: .7rem;
	    letter-spacing: 1px;
	    font-size: 17px
	}

	.certified-teacher .item .info p{
	    line-height: 1.6;
    	color: #333232
	}


</style>