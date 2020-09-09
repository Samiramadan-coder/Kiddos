<template>
	<div class="quote">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-6 offset-md-3">
					<form class="form-group">

						<div class="item">
							<label>First Name</label>
							<input 
									type="text" 
									name="" 
									class="form-control" 
									placeholder="First Name" 
									v-model="quote.firstName">
						</div>
						
						<div class="item">
							<label>Last Name</label>
							<input 
									type="text" 
									name="" 
									class="form-control" 
									placeholder="Last Name" 
									v-model='quote.lastName'>
						</div>

						<div class="item">
							<label>Choose Your Course</label>
							<select class="form-control" v-model='quote.courseName'>
								<option value='english'>English</option>
								<option value='arts'>Arts</option>
								<option value='music'>Music</option>
								<option value='sport'>Sport</option>
							</select>
						</div>

						<div class="item">
							<label>Phone Number</label>
							<input 
									type="text" 
									name="" 
									class="form-control" 
									placeholder="Phone Number" 
									v-model='quote.phoneNumber'>
						</div>

						<div class="item">
							<label>Message</label>
							<textarea 
									class="form-control" 
									placeholder="Message" 
									v-model='quote.message'></textarea>
						</div>

					</form>

					<button class="btn btn-primary" @click="sendQuote">Send a Quote</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				quote: {
					firstName: "",
					lastName: "",
					courseName: "",
					phoneNumber: "",
					message: ""
				}
			}
		},
		methods: {
			sendQuote() {
				if(this.quote.firstName != '' && this.quote.lastName != '' && this.quote.courseName != "" && this.quote.phoneNumber != "" && this.quote.message != "") {
					this.$http.post('https://kiddos-85df9.firebaseio.com/data.json', this.quote)
						  .then((res) => {

						  		console.log(res);

						  }, (err) => {

						  		console.log(err);

						  });

						  this.quote.firstName = '';
						  this.quote.lastName = '';
						  this.quote.courseName = "";
						  this.quote.phoneNumber = "";
						  this.quote.message = ""
				} else {
					alert("Please Fill Your Request");
				}
			}	
		}
	};
</script>

<style scoped>
   	.quote{
   		font-family: var(--main-font);
   		padding: 3rem;
   	}

   	.quote .item{
   		margin-bottom: 1rem;
   	}

   	.quote .item label{
   		font-weight: 500;
   	}
</style>