<template>
	<header>

		<!-- Overlay -->
		<div class='overlay' :class="{ add: display }"></div>

		<!-- Toggeld Menu -->
		<div class="toggelr-menu" :class="{ show: active}">
			<!-- Logo -->
			<router-link to="/" tag='h2'>
				Kiddos
			</router-link>

			<!-- List Items -->
			<ul class="navbar-nav">
		      <router-link tag='li' to='/' class="nav-item">
		        <a class="nav-link"  :class="{ active: colored == 1 }" @click="activeLink(1)">Home <span class="sr-only">(current)</span></a>
		      </router-link>
		      <router-link tag='li' to='/about' class="nav-item">
		        <a class="nav-link" :class="{ active: colored == 2 }" @click="activeLink(2)">About</a>
		      </router-link>
		      <router-link tag='li' to='/teacher' class="nav-item">
		        <a class="nav-link" :class="{ active: colored == 3 }" @click="activeLink(3)">Teacher</a>
		      </router-link>
		      <router-link tag='li' to='/courses' class="nav-item">
		        <a class="nav-link" :class="{ active: colored == 4 }" @click="activeLink(4)">Courses</a>
		      </router-link>
		      <router-link tag='li' to='/pricing' class="nav-item">
		        <a class="nav-link"  :class="{ active: colored == 5 }" @click="activeLink(5)">Pricing</a>
		      </router-link>
		      <router-link tag='li' to='/blog' class="nav-item">
		        <a class="nav-link" :class="{ active: colored == 6 }" @click="activeLink(6)">Blogs</a>
		      </router-link>
		      <router-link tag='li' to='/login' class="nav-item">
		        <a class="nav-link" :class="{ active: colored == 7 }" @click="activeLink(7)">Log In</a>
		      </router-link>
		    </ul>

		</div>
		
		<!-- Upper Navigation -->
		<div class="upper-nav">
			<div class="container">
				<div class="row">
					
					<div class="col-md-5">
						<div class="left-upper-nav">
							<div class="upper-icon">
								<i class="fas fa-map"></i>
							</div>
							<h6>198 West 21th Street, Suite 721 New York NY 10016</h6>
						</div>
					</div>

					<div class="col-md-4">
						<div class="middle-upper-nav">
							<div class="upper-icon">
								<i class="fas fa-paper-plane"></i>
							</div>
							<h6>youremail@email.com</h6>
						</div>
					</div>

					<div class="col-md-3">
						<div class="right-upper-nav">
							<div class="upper-icon">
								<i class="fas fa-phone-volume"></i>
							</div>
							<h6>+ 1235 2355 98</h6>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- Main Navigation Bar -->
		<div class="main-nav">

			<div class="container">
				<nav class="navbar navbar-expand-lg navbar-light">
				  <!-- NavBar Brand -->
				  <router-link class="navbar-brand" to="/">Kiddos</router-link>
				  <!-- NavBar Toggle Button -->
				  <button @click="displaySidebar" class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span class="navbar-toggler-icon"></span>
				  </button>

				  <div class="collapse navbar-collapse">
				    <ul class="navbar-nav ml-auto">
				      <router-link tag='li' to='/' class="nav-item">
				        <a class="nav-link"  :class="{ active: colored == 1 }" @click="activeLink(1)">Home <span class="sr-only">(current)</span></a>
				      </router-link>
				      <router-link tag='li' to='/about' class="nav-item">
				        <a class="nav-link" :class="{ active: colored == 2 }" @click="activeLink(2)">About</a>
				      </router-link>
				      <router-link tag='li' to='/teacher' class="nav-item">
				        <a class="nav-link" :class="{ active: colored == 3 }" @click="activeLink(3)">Teacher</a>
				      </router-link>
				      <router-link tag='li' to='/courses' class="nav-item">
				        <a class="nav-link" :class="{ active: colored == 4 }" @click="activeLink(4)">Courses</a>
				      </router-link>
				      <router-link tag='li' to='/pricing' class="nav-item">
				        <a class="nav-link"  :class="{ active: colored == 5 }" @click="activeLink(5)">Pricing</a>
				      </router-link>
				      <router-link tag='li' to='/blog' class="nav-item">
				        <a class="nav-link" :class="{ active: colored == 6 }" @click="activeLink(6)">Blogs</a>
				      </router-link>
				      <router-link tag='li' to='/login' class="nav-item">
				        <a class="nav-link" :class="{ active: colored == 7 }" @click="activeLink(7)">Log In</a>
				      </router-link>
				    </ul>
				  </div>

				</nav>

			</div>

		</div>

	</header>
</template>

<script>
	export default{
		data() {
			return{
				active: false,
				display: false,
				colored: 1
			}
		},
		methods: {
			removeLay(e) {
				if(e.target.classList.contains('overlay')){
					this.active = false;
					this.display = false;
					// console.log('Hello');
				}
			},
			displaySidebar() {
				this.active = true;
				this.display = true;
			},
			activeLink(v) {
				this.colored = v;
			}
		},
		created() {
			window.addEventListener('click', this.removeLay)
		}
	};
</script>

<style scoped>

/*************************************/
/******* Overlay and Mobile Menu *****/

	header .overlay{
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background-color: rgba(0,0,0,.3);
		z-index: 9999;
		display: none;
	}

	header .overlay.add{
		display: block;
	}

	.toggelr-menu{
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 400px;
		background-color: rgba(0,0,0,.8);
		z-index: 10000;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: var(--main-font);
		transform: translateX(-400px);
		-webkit-transform: translateX(-400px);
		-moz-transform: translateX(-400px);
		-o-transform: translateX(-400px);
		-ms-transform: translateX(-400px);
		transition: all 1s;
		-webkit-transition: all 1s;
		-moz-transition: all 1s;
		-o-transition: all 1s;
		-ms-transition: all 1s;
	}

	.toggelr-menu.show{
		transform: none;
		-webkit-transform: none;
		-moz-transform: none;
		-o-transform: none;
		-ms-transform: none;	
	}

	.toggelr-menu h2{
		color: #fff;
		font-weight: 800;
		font-size: 2.5rem;
	}

	.toggelr-menu ul .nav-item .nav-link{
		color: #fff;
	}

	.toggelr-menu ul .nav-item .nav-link.active{
		color: var(--main-color)
	}
/**X*******************************X**/
/**X**** Overlay and Mobile Menu **X**/

/*******************************/
/******* Upper Nav Styling *****/
	.upper-nav{
		background-color: var(--main-color);
		padding: .4rem 0;
	}

	.upper-nav .left-upper-nav, .upper-nav .middle-upper-nav, .upper-nav .right-upper-nav{
		display: flex;
		color: #b8dff8;
		align-items: center;
	}

	.upper-nav .right-upper-nav{
		justify-content: flex-end;
	}

	.upper-nav .left-upper-nav h6, .upper-nav .middle-upper-nav h6, .upper-nav .right-upper-nav h6{
		font-size: 1rem;
		margin: 0;
		position: relative;
		left: .6rem;
		font-weight: 400;
		font-family: var(--main-font);
	}

	.upper-nav .right-upper-nav h6{
		left: 0;
	}

	.upper-nav .left-upper-nav .upper-icon, 
	.upper-nav .middle-upper-nav .upper-icon, 
	.upper-nav .right-upper-nav .upper-icon{
		border-radius: 50%;
		font-size: 14px;
		color: #fff;
		width: 28px;
		height: 28px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: var(--main-font);
	}

	.upper-nav .left-upper-nav .upper-icon{
		background-color: #5d50c6;
	}

	.upper-nav .middle-upper-nav .upper-icon{
		background-color: var(--second-color);
	}

	.upper-nav .right-upper-nav .upper-icon{
		background-color: #8cc152;
	}

	.upper-nav .right-upper-nav .upper-icon{
		position: relative;
		right: .6rem
	}

	/* Media Query */
	@media screen and (max-width: 767px) {
		.upper-nav .left-upper-nav, .upper-nav .middle-upper-nav, .upper-nav .right-upper-nav{
			margin-bottom: .5rem;
		}
		.upper-nav .right-upper-nav{
			justify-content: flex-start;
		}
		.upper-nav .right-upper-nav h6{
			left: .6rem;
		}
		.upper-nav .right-upper-nav .upper-icon{
			right: 0;
		}
	}
/*******X****************X******/
/***X*** Upper Nav Styling **X**/

/*******************************/
/******* Main Nav Styling *****/
	.navbar{
		padding: 1.5rem 0;
		border-bottom: 1px solid var(--second-color);
	}

	.navbar .navbar-brand{
		font-weight: 900;
		font-size: 1.6rem;
		font-family: var(--main-font);
	}

	.navbar-expand-lg .navbar-nav .nav-link{
		padding-right: 1.3rem;
		padding-left: 1.3rem;
		font-size: 14px;
		color: #000 !important;
		font-family: var(--main-font);
		font-weight: 500;
	}

	.navbar-expand-lg .navbar-nav .nav-link.active{
		color: var(--main-color) !important;
	}
/*******X****************X******/
/***X*** Main Nav Styling **X**/
</style> 





