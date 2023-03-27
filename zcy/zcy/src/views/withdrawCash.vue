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
  		<el-dialog title="Return Message" :visible.sync="withdrawCashShow">
    	<el-alert v-if="withdrawCashData" type="success" title="True" :closable="false"></el-alert>
     			<el-alert v-else type="warning" title="False" :closable="false"></el-alert>
    	<template v-slot:footer>
    		<el-button @click="withdrawCashShow = false">Close</el-button>
    		<el-button @click="Next">Next</el-button>
    	</template>
    </el-dialog>
	</div>
</template>

<script>
export default {
	name: "withdrawCash",
 	data() {
 		return {
			form: {
    				quantity: 0, 
    			},
    			withdrawCashData: false, 
    			withdrawCashShow: false,
 		};
 	},
 	created() {
	},
 	methods: {
 		submit() {
   			this.withdrawCashShow = false;
      			this.$axios({
      				method: "post",
      				url: "/withdrawCash",
      				data: this.form,
      			}).then(res => {
      				this.withdrawCashData = res.data.data;
      				this.withdrawCashShow = true;
      			});
   		},
 		Next() {
   	this.$router.push({name: "ejectCard"});
   },
 	},
};
</script>