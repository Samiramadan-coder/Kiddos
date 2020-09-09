<template>
	<div class="control">
		<div class="container">
			<div class="row">
				
				<app-control-data v-for="quote in quotes">
					<table>
						<tr>
							<td>Full Name: {{ quote.firstName +  quote.lastName }}</td>
							<td>CourseName Is: {{ quote.courseName }}</td>
							<td>Phone Number Is: {{ quote.phoneNumber }}</td>
							<td>Message Is: {{ quote.message }}</td>
						</tr>
					</table>
				</app-control-data>

			</div>
		</div>
	</div>
</template>

<script>
	import ControlData from './ControlData.vue'
	export default{
		data() {
			return {
				quotes: []
			}
		},
		created() {
			this.$http.get('https://kiddos-85df9.firebaseio.com/data.json')
					  .then((res) => {
					  		const receivedData = res.body;
					  		for (let key in receivedData) {
					  			this.quotes.push(receivedData[key]);
					  		}

					  		console.log(this.quotes);
					  })
		},
		components: {
			appControlData: ControlData
		}
	};

</script>

<style scoped>
	.control{
		padding: 5rem 0;
		font-family: var(--main-font);
	}
</style>