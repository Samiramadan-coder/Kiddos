<template>
	<div class="certified-teacher">
		<div class="container">
			<!-- Top Part -->
			<div class="top-cert-tech text-center" :class="{ active: showSectionOne}">
				<h2>Certified <span>Teachers</span></h2>
				<p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
			</div>

			<!-- Bottom Part -->
			<div class="row" :class="{ active: showSectionTwo }">

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
				if(this.windowScroll >= 1650) {
					this.showSectionOne = true;
				}
				if(this.windowScroll >= 1750) {
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
		padding: 4rem 0;
		font-family: var(--main-font);
	}

	.certified-teacher .top-cert-tech{
		padding-bottom: 4rem;
		opacity: 0;
		transform: scale(.9);
		transition: all 1s
	}

	.certified-teacher .top-cert-tech.active{
		opacity: 1;
		transform: none;
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

	.certified-teacher .row{
		opacity: 0;
		transform: scale(.8);
		transition: all 1s;
	}

	.certified-teacher .row.active{
		opacity: 1;
		transform: none;
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