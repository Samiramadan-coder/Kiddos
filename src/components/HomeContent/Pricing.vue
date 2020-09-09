<template>
	<div class="pricing">
		<div class="container">
			<!-- Top Part -->
			<div class="top-cources text-center" :class="{ active: displayTitle }">
				<h2>Our <span>Pricing</span></h2>
				<p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
			</div>

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
				displayTitle: false,
				displayRow: false,
				windowScroll: window.scrollY
			}
		},
		methods: {
			showSection() {
				this.windowScroll = window.top.scrollY;
				if(this.windowScroll >= 4700) {
					this.displayTitle = true;
				}

				if(this.windowScroll >= 4800){
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
		padding: 4rem 0;
		font-family: var(--main-font);
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