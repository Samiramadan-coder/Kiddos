<template>
	<div class="login">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-4 offset-md-4">
					<div class="logo-page">

						<div>
							<label>Username</label>
							<input type="text" v-model="userName">
						</div>

						<div>
							<label>Password</label>
							<input type="password" v-model="password">
						</div>

						<div class="button">
							<button class="btn btn-primary" @click="logIn">Log In</button>
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
			return{
				users: [],
				userName: "",
				password: ""
			}
		},
		methods: {
			logIn() {
				if(this.users[0].userName == this.userName && this.users[0].password == this.password) {
					this.$router.push('/control');
				}
			}
		},
		created() {
			this.$http.get('https://kiddos-85df9.firebaseio.com/user.json')
					  .then((res) => {
					  		const receivedData = res.body;
					  		for(let key in receivedData) {
					  			this.users.push(receivedData[key]);
					  		}
					  		//console.log(this.users[0]);
					  })
		}
	};
</script>

<style scoped>
	.login{
		padding: 5rem 0;
		font-family: var(--main-font);
	}

	.logo-page{
		background-color: var(--main-color);
		padding: 2rem 2rem;
		border-radius: 1rem;
	}

	.logo-page div{
		padding: .5rem 1rem;
	    display: flex;
	    justify-content: space-around
	}

	.logo-page div label{
	    font-weight: 500;
    	font-size: 1rem
	}

	.logo-page div input{
		width: 160px;
		border: 0;
		border-radius: 5px;
	}

	.logo-page div input:focus{
		outline: 0;

	}
</style>