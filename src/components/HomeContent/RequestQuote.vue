<template>
	<div class="quote">
		
		<router-link tag='button' to='/quote' class="btn">Request a Quote</router-link>		

	</div>
</template>

<style scoped>
	.quote{
		padding: 3rem 0;
		background-color: var(--main-color);
	}

	.quote button{
	    padding: 1.5rem 2rem;
	    background-color: var(--second-color);
	    color: #fff;
	    font-weight: 400;
	    border: 2px solid transparent;
	    transition: all .5s;
	    position: relative;
	    margin: auto;
	    display: block;
	    font-size: 1.1rem;
	    border-radius: 1.5rem
	}

	.quote button:hover{
	    background-color: transparent;
	    border: 2px solid var(--second-color);
	    color: var(--second-color);
	}
</style>