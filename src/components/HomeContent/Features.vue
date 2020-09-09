<template>
	<div class="features" :class="{active: active}">
		<div class="fluid-container">
			<div class="row">
				
				<div class="col-md-6 col-lg-3 item text-center">
					<div class="icon">
						<i class="fas fa-child"></i>
					</div>
					<div class="info">
						<h4>Certified Teachers</h4>
						<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
					</div>
				</div>

				<div class="col-md-6 col-lg-3 item item2 text-center">
					<div class="icon">
						<i class="fas fa-user-graduate"></i>
					</div>
					<div class="info">
						<h4>Certified Teachers</h4>
						<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
					</div>
				</div>

				<div class="col-md-6 col-lg-3 item item3 text-center">
					<div class="icon">
						<i class="fas fa-book-open"></i>
					</div>
					<div class="info">
						<h4>Certified Teachers</h4>
						<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
					</div>
				</div>

				<div class="col-md-6 col-lg-3 item item4 text-center">
					<div class="icon">
						<i class="fas fa-book"></i>
					</div>
					<div class="info">
						<h4>Certified Teachers</h4>
						<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
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
				windowScroll: window.scrollY,
				active: false
			}
		},
		methods: {
			calcScroll() {
				this.windowScroll = window.top.scrollY;
				if(this.windowScroll >= 0) {
					this.active = true;
				}
			}
		},
		created() {
			window.addEventListener('scroll', this.calcScroll);
		}
	};
</script>

<style>
/*******************************/
/******* Features Styling *****/
	.features{
		transform: translateY(4rem);
		-webkit-transform: translateY(4rem);
		-moz-transform: translateY(4rem);
		-o-transform: translateY(4rem);
		-ms-transform: translateY(4rem);
	}
	.features.active{
		animation: slide-up 1s ease forwards;
		-webkit-animation: slide-up 1s ease forwards;
		-moz-animation: slide-up 1s ease forwards;
		-o-animation: slide-up 1s ease forwards;
		-ms-animation: slide-up 1s ease forwards;
	}

	.features .row{
		margin: 0;
	}

	.features .row .item{
		position: relative;
		background-color: var(--main-color);
		padding: 3rem 1rem;
		color: #fff;
		font-family: var(--main-font);
	}

	.features .row .item.item2{
		background-color: #8cc152; 
	}

	.features .row .item.item3{
		background-color: #5d50c6;
	}

	.features .row .item.item4{
		background-color: #f1453d;
	}

	.features .row .item .icon{
		position: absolute;
		left: 50%;
		top: 0;
		transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		z-index: 2;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 1px solid #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
	}

	.features .row .item .icon i{
		font-size: 3rem;
		color: var(--main-color);
	}

	.features .row .item .info{
		position: relative;
		top: 1rem;
	}

	.features .row .item .info h4{
		font-size: 1.5rem;
		font-weight: 600;
	}

	.features .row .item .info p{
		color: #b8dff8;
		line-height: 2;
		font-weight: 500;
	}

	/* Animation */
	@keyframes slide-up{
		from {
			transform: translateY(4rem);
		}

		to {
			transform: none;

		}
	}

	-webkit-@keyframes slide-up{
		from {
			transform: translateY(4rem);
		}

		to {
			transform: none;

		}
	}

	-moz-@keyframes slide-up{
		from {
			transform: translateY(4rem);
		}

		to {
			transform: none;

		}
	}

	-o-@keyframes slide-up{
		from {
			transform: translateY(4rem);
		}

		to {
			transform: none;

		}
	}

	-ms-@keyframes slide-up{
		from {
			transform: translateY(4rem);
		}

		to {
			transform: none;

		}
	}
/*****X******************X******/
/**X**** Features Styling ***X**/
</style>