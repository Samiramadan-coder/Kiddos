<template>
	<div class="pricing">

		<!-- Landing Page -->
		<div class="landing">
			<div class="overlay"></div>

			<h2>Pricing</h2>
			<ul class="list-unstyled">
				<router-link tag='li' to='/'>
					<a>Home</a>
				</router-link>
				<router-link tag='li' to='/pricing'>
					<a>Pricing</a>
				</router-link>
			</ul>
		</div>

		<div class="container">

			<!-- Bottom row -->
			<div class="row" :class="{ active: displayRow }">
				<div class="col-md-6 col-lg-3">
					<div class="item text-center">
						<div class="top-item">
							<h3>Basic</h3>
							<h2>$24.50<span> / 5mos</span></h2>
						</div>

						<div class="middle-item">
							<img src="../../assets/pricing/pricing01.jpg" width="100%">
							<p>
								Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
							</p>				
						</div>

						<div class="bottom-item">
							<button class="btn first-item">Take a Course</button>
						</div>
					</div>
				</div>

				<div class="col-md-6 col-lg-3">
					<div class="item text-center">
						<div class="top-item">
							<h3>Basic</h3>
							<h2>$24.50<span> / 5mos</span></h2>
						</div>

						<div class="middle-item">
							<img src="../../assets/pricing/pricing01.jpg" width="100%">
							<p>
								Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
							</p>				
						</div>

						<div class="bottom-item">
							<button class="btn second-item">Take a Course</button>
						</div>
					</div>
				</div>

				<div class="col-md-6 col-lg-3">
					<div class="item text-center">
						<div class="top-item">
							<h3>Basic</h3>
							<h2>$24.50<span> / 5mos</span></h2>
						</div>

						<div class="middle-item">
							<img src="../../assets/pricing/pricing01.jpg" width="100%">
							<p>
								Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
							</p>				
						</div>

						<div class="bottom-item">
							<button class="btn third-item">Take a Course</button>
						</div>
					</div>
				</div>

				<div class="col-md-6 col-lg-3">
					<div class="item text-center">
						<div class="top-item">
							<h3>Basic</h3>
							<h2>$24.50<span> / 5mos</span></h2>
						</div>

						<div class="middle-item">
							<img src="../../assets/pricing/pricing01.jpg" width="100%">
							<p>
								Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
							</p>				
						</div>

						<div class="bottom-item">
							<button class="btn fourth-item">Take a Course</button>
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
				displayRow: false,
				windowScroll: window.scrollY
			}
		},
		methods: {
			showSection() {
				this.windowScroll = window.top.scrollY;

				if(this.windowScroll >= 0){
					this.displayRow = true;
				}
			}
		},
		created() {
			window.addEventListener('scroll', this.showSection);
		}
	};
</script>

<style scoped>
	.pricing{
		padding:0 0 4rem;
		font-family: var(--main-font);
	}

	.pricing .landing{
		padding: 10rem 0;
		background: url('../../assets/pages/pricing.jpg') fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
		margin-bottom: 8rem;
	}

	.pricing .landing .overlay{
		position: absolute;
		top: 0; left: 0;
		bottom: 0; right: 0;
		background-color: rgba(0,0,0,.4);
		z-index: 0;
	}

	.pricing .landing h2{
		color: #fff;
		position: relative;
		z-index: 1;
		font-weight: bold;
		font-size: 2.5rem;
	}

	.pricing .landing ul{
		display: flex;
		position: relative;
		z-index: 1;

	}

	.pricing .landing ul li{
		margin: 0 1rem;
	}

	.pricing .landing ul li a{
		text-decoration: none;
		color: #fff;
	}

	.pricing .top-cources{
		padding-bottom: 4rem;
		opacity: 0;
		transform: scale(.6);
		transition: all 1s;
	}

	.pricing .top-cources.active{
		opacity: 1;
		transform: none;
	}

	.pricing .top-cources h2{
		font-weight: 600;
		font-size: 2.8rem;
		color: #5d50c6;
	}

	.pricing .top-cources h2 span{
		color: var(--second-color);
	}

	.pricing .top-cources p{
		width: 70%;
		margin: 1rem auto;
		color: #868484;
		line-height: 2;
	}

	.pricing .row{
		opacity: 0;
		transform: scale(.6);
		transition: all 1s;
	}

	.pricing .row.active{
		opacity: 1;
		transform: none;
	}

	.pricing .item{
		background-color: #fbf8f8;
	}

	.pricing .top-item{
		
    	padding: 1.5rem 1rem
	}

	.pricing .top-item h3{
		font-size: 1.5rem;
	    color: #000;
	    font-weight: 500
	}

	.pricing .top-item h2{
		margin: 0;
    	color: var(--main-color)
	}

	.pricing .top-item h2 span{
		color: #5a5959;
   		font-size: .7rem;
	}

	.pricing .middle-item{

	}

	.pricing .middle-item p{
		padding: 1rem 1rem 0;
		color:  #5a5959;
	}

	.pricing .bottom-item{
		padding-bottom: .5rem;
	}

	.pricing .bottom-item button{
		padding: .8rem 1rem;
	    border-radius: 2rem;
	    color: #fff;
	    font-weight: 400
	}

	.pricing .bottom-item button.first-item{
		background-color: var(--main-color);
	}

	.pricing .bottom-item button.second-item{
		background-color: var(--second-color);
	}

	.pricing .bottom-item button.third-item{
		background-color: #8cc152;
	}

	.pricing .bottom-item button.fourth-item{
		background-color: #f1453d;
	}

	@media screen and (max-width: 991px) {
		.pricing .item{
			margin-bottom: 2rem;
		}
	}

</style>