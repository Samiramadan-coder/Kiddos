<template>
	<div class="blog">
		<div class="container">
			<!-- Top Part -->
			<div class="top-cources text-center" :class="{ active: displayTitle}">
				<h2>Recent <span>Blog</span></h2>
				<p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
			</div>

			<!-- Bottom Row -->
			<div class="row" :class="{ active: displayRow}">
				<div class="col-md-6 col-lg-4">
					<div class="item">

						<div class="top-item">
							<img src="../../assets/blog/blog01.jpg" width="100%">
							<div class="date text-center">
								<h5>27<br><span>January 2020</span></h5>
							</div>
						</div>

						<div class="middle-item">
							<h4><a href="#">Skills To Develop Your Child Memory</a></h4>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>

						<div class="bottom-item">
							<button class="btn">Read More<i class="fas fa-arrow-right"></i></button>
							<div class="message">
								<span>admin</span>
								<i class="fas fa-comment-alt">&nbsp;3</i>
							</div>
						</div>

					</div>
				</div>

				<div class="col-md-6 col-lg-4">
					<div class="item">

						<div class="top-item">
							<img src="../../assets/blog/blog01.jpg" width="100%">
							<div class="date text-center">
								<h5>27<br><span>January 2020</span></h5>
							</div>
						</div>

						<div class="middle-item">
							<h4><a href="#">Skills To Develop Your Child Memory</a></h4>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>

						<div class="bottom-item">
							<button class="btn">Read More<i class="fas fa-arrow-right"></i></button>
							<div class="message">
								<span>admin</span>
								<i class="fas fa-comment-alt">&nbsp;3</i>
							</div>
						</div>

					</div>
				</div>

				<div class="col-md-6 col-lg-4">
					<div class="item">

						<div class="top-item">
							<img src="../../assets/blog/blog01.jpg" width="100%">
							<div class="date text-center">
								<h5>27<br><span>January 2020</span></h5>
							</div>
						</div>

						<div class="middle-item">
							<h4><a href="#">Skills To Develop Your Child Memory</a></h4>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>

						<div class="bottom-item">
							<button class="btn">Read More<i class="fas fa-arrow-right"></i></button>
							<div class="message">
								<span>admin</span>
								<i class="fas fa-comment-alt">&nbsp;3</i>
							</div>
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
				if(this.windowScroll >= 5450) {
					this.displayTitle = true;
				}

				if(this.windowScroll >= 5600){
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

	.blog{
		padding: 4rem 0;
		font-family: var(--main-font);
		background-color: #fbf8f8;
	}

	.blog .top-cources{
		padding-bottom: 4rem;
		transition: all 1s;
		opacity: 0;
		transform: scale(.6);
	}

	.blog .top-cources.active{
		opacity: 1;
		transform: none;
	}

	.blog .top-cources h2{
		font-weight: 600;
		font-size: 2.8rem;
		color: #5d50c6;
	}

	.blog .top-cources h2 span{
		color: var(--second-color);
	}

	.blog .top-cources p{
		width: 70%;
		margin: 1rem auto;
		color: #868484;
		line-height: 2;
	}

	.blog .row{
		opacity: 0;
		transition: all 1s;
		transform: scale(.6);
	}

	.blog .row.active{
		opacity: 1;
		transform: none;
	}

	.blog .item{
		background-color: #fff;
	}

	.blog .item .top-item{
		position: relative;
	}

	.blog .item .top-item .date{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 65px;
		height: 80px;
		background-color: #5d50c6;
		color: #fff;
		padding-top: .2rem;
	}

	.blog .item .top-item .date h5{
		margin: 0;
    	font-weight: 400
	}

	.blog .item .top-item .date h5 span{
		font-size: .8rem
	}

	.blog .middle-item {
		padding: 1.5rem 2rem;
	}

	.blog .middle-item h4{
		font-weight: 400;
	}

	.blog .middle-item h4 a{
		text-decoration: none;
		color: #000;
		transition: all .5s;
		font-size: 1.2rem;	
	}

	.blog .middle-item h4 a:hover{
		color: 	#5d50c6;
	}

	.blog .middle-item p{
		color: #868484;
	}

	.blog .bottom-item{
		display: flex;
		justify-content: space-between;
		padding: 0 2rem 2rem;
	}

	.blog .bottom-item button{
		padding: .5rem 1rem;
	    border-radius: 1.5rem;
	    background-color: var(--second-color);
	    color: #fff;
	    font-weight: 500;
	    font-size: .9rem;
	    display: flex;
	    justify-content: space-around;
	    align-items: center;
	}

	.blog .bottom-item button i{
		font-weight: 600;
		position: relative;
		left: .4rem;
		top: 1px;
		font-size: .7rem;
	}

	.blog .bottom-item .message{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: .5rem;
		width: 100px;
	}

	.blog .bottom-item .message span{
		color: var(--main-color);
	}

	.blog .bottom-item .message i{
		color: #868484;
	}

	@media screen and (max-width: 991px) {
		.blog .item{
			margin-bottom: 2rem
		}
	}
</style>