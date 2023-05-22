<template>
	<div>
		<el-form label-width="100px">
    			<el-form-item label="quantity">
       				<el-input
           					type="textarea"
           					autosize
           					v-model="form.quantity"
           					class="w-96">
           				</el-input>
       			</el-form-item>
    		</el-form>
  		<div class="m-4">
  			<el-button @click="$router.back()">Back</el-button>
  			<el-button @click="submit">Submit</el-button>
  		</div>
  		<el-dialog title="Return Message" :visible.sync="depositFundsShow">
    	<el-alert v-if="depositFundsData" type="success" title="True" :closable="false"></el-alert>
     			<el-alert v-else type="warning" title="False" :closable="false"></el-alert>
    	<template v-slot:footer>
    		<el-button @click="depositFundsShow = false">Close</el-button>
    		<el-button @click="Next">Next</el-button>
    	</template>
    </el-dialog>
	</div>
</template>

<script>
export default {
	name: "depositFunds",
 	data() {
 		return {
			form: {
    				quantity: 0.0, 
    			},
    			depositFundsData: false, 
    			depositFundsShow: false,
 		};
 	},
 	created() {
	},
 	methods: {
 		submit() {
   			this.depositFundsShow = false;
      			this.$axios({
      				method: "post",
      				url: "/depositFunds",
      				data: this.form,
      			}).then(res => {
      				this.depositFundsData = res.data.data;
      				this.depositFundsShow = true;
      			});
   		},
 		Next() {
   	this.$router.push({name: "ejectCard"});
   },
 	},
};
</script>