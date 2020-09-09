<template>
	<div class="our-courses">

		<!-- Landing Page -->
		<div class="landing">
			<div class="overlay"></div>

			<h2>Our Courses</h2>
			<ul class="list-unstyled">
				<router-link tag='li' to='/'>
					<a>Home</a>
				</router-link>
				<router-link tag='li' to='/courses'>
					<a>Courses</a>
				</router-link>
			</ul>
		</div>

		<div class="container">

			<!-- Bottom Part -->
			<div class="row row-one" :class="{ active: show }">
				<div class="col-lg-6">
					<div class="item">
						<div class="img">
							<img src="../../assets/ourcourses/course01.jpg" width="250px" height="100%">
						</div>
						<div class="info">
							<h3>Arts Lesson</h3>
							<h4>Class time:<span> 9:00am - 10am</span></h4>
							<p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
						</div>
					</div>
				</div>

				<div class="col-lg-6">
					<div class="item">
						<div class="img">
							<img src="../../assets/ourcourses/course02.jpg" width="250px" height="100%">
						</div>
						<div class="info">
							<h3>Language Lesson</h3>
							<h4>Class time:<span> 9:00am - 10am</span></h4>
							<p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
						</div>
					</div>
				</div>
			</div>

			<div class="row row-two" :class="{ active: active }">
				<div class="col-lg-6">
					<div class="item">
						<div class="img">
							<img src="../../assets/ourcourses/course03.jpg" width="250px" height="100%">
						</div>
						<div class="info">
							<h3>Music Lesson</h3>
							<h4>Class time:<span> 9:00am - 10am</span></h4>
							<p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
						</div>
					</div>
				</div>

				<div class="col-lg-6">
					<div class="item">
						<div class="img">
							<img src="../../assets/ourcourses/course04.jpg" width="250px" height="100%">
						</div>
						<div class="info">
							<h3>Sports Lesson</h3>
							<h4>Class time:<span> 9:00am - 10am</span></h4>
							<p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
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
				show: false,
				active: false,
				windowScroll: window.scrollY,
			}
		},
		methods: {
			showSections() {
				this.windowScroll = window.top.scrollY;
				if(this.windowScroll >= 0) {
					this.show = true;
				}
				if(this.windowScroll >= 0) {
					this.active = true;
				}
			}
		},
		created() {
			window.addEventListener('scroll', this.showSections);
		}
	};
</script>

<style scoped>
	.our-courses{
		padding: 0 0 4rem;
		font-family: var(--main-font);
	}

	.our-courses .landing{
		padding: 10rem 0;
		background: url('../../assets/pages/courses.jpg') fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
		margin-bottom: 8rem;
	}

	.our-courses .landing .overlay{
		position: absolute;
		top: 0; left: 0;
		bottom: 0; right: 0;
		background-color: rgba(0,0,0,.4);
		z-index: 0;
	}

	.our-courses .landing h2{
		color: #fff;
		position: relative;
		z-index: 1;
		font-weight: bold;
		font-size: 2.5rem;
	}

	.our-courses .landing ul{
		display: flex;
		position: relative;
		z-index: 1;

	}

	.our-courses .landing ul li{
		margin: 0 1rem;
	}

	.our-courses .landing ul li a{
		text-decoration: none;
		color: #fff;
	}

	.our-courses .top-cources{
		padding-bottom: 4rem;
		transition: all 1s;
		opacity: 0;
		transform: scale(.6);
		transition: all 1s;
	}

	.our-courses .top-cources.active{
		opacity: 1;
		transform: none;	
	}

	.our-courses .top-cources h2{
		font-weight: 600;
		font-size: 2.8rem;
		color: #5d50c6;
	}

	.our-courses .top-cources h2 span{
		color: var(--second-color);
	}

	.our-courses .top-cources p{
		width: 70%;
		margin: 1rem auto;
		color: #868484;
		line-height: 2;
	}

	.our-courses .row-one{
		margin-bottom: 4rem;
		opacity: 0;
		transform: scale(.5);
		transition: all 1.5s;
	}

	.our-courses .row-one.active{
		opacity: 1;
		transform: none;
	}

	.our-courses .row-two{
		opacity: 0;
		transform: scale(.5);
		transition: all 1.5s;
	}

	.our-courses .row-two.active{
		opacity: 1;
		transform: none;
	}

	.our-courses .item{
		display: flex;
		background-color: #f9f9f9;
	}

	.our-courses .item .img{
		margin-right: 1rem;
	}

	.our-courses .item .info{
		padding: 1rem 1rem;
	}

	.our-courses .item .info h3{
		color: var(--main-color);
		font-size: 1.5rem;
		font-weight: 500;
	}

	.our-courses .item .info h4{
		font-size: .9rem;
		color: var(--second-color);
	}

	.our-courses .item .info h4 span{
		color: #000;
	}

	.our-courses .item .info p{
		line-height: 1.8;
		color: #716f6f;
	}

	/* Media Screen */
	@media screen and (max-width: 991px) {
		.our-courses .item{
			margin-bottom: 2rem;
		}

		.our-courses .row-one{
			margin-bottom: 0;
		}
	}

</style>