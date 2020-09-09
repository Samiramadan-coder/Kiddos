<template>
	<div class="announce">
		<div class="overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-md-10">
					<h2>Teaching Your Child Some Good Manners</h2>
					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
				</div>
				<div class="col-md-2">
					<button class="btn">Take a Cource</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.announce{
		height: 400px;
		background: url(../../assets/announce/announce.jpg) fixed;
		display: flex;
		align-items: center;
		position: relative;
		color: #fff;
		font-family: var(--main-font);
	}

	.announce .overlay{
		position: absolute;
		top: 0; bottom: 0;
		left: 0; right: 0;
		background-color: rgb(0,0,0,.5);
		z-index: 0;
	}

	.announce h2{
	    font-weight: bold;
	    font-size: 2.5rem;
	    margin-bottom: 1rem
	}

	.announce p{
		font-size: 1.1rem;
    	color: #d2cbcb
	}

	.announce button{
	    padding: 1rem 1.2rem;
	    border-radius: 2rem;
	    background-color: var(--second-color);
	    color: #fff;
	    font-weight: 600;
	    border: 2px solid transparent;
	    transition: all .5s;
	    position: relative;
	    top: 1rem
	}

 	.announce button:hover{
 		background-color: transparent;
		border: 2px solid var(--second-color);
		color: var(--second-color);
 	}

 	@media screen and (max-width: 575px) {
 		.announce h2{
		    font-weight: bold;
		    font-size: 2rem;
		    margin-bottom: 1rem
		}

		.announce p{
			font-size: .9rem;
	    	color: #d2cbcb
		}

 	}

</style>