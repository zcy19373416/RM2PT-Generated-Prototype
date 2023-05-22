<template>
	<div>
		<el-form label-width="100px">
    			<el-form-item label="cardid">
       				<el-input
           					type="textarea"
           					autosize
           					v-model="form.cardid"
           					class="w-96">
           				</el-input>
       			</el-form-item>
    		</el-form>
  		<div class="m-4">
  			<el-button @click="$router.back()">Back</el-button>
  			<el-button @click="submit">Submit</el-button>
  		</div>
  		<el-dialog title="Return Message" :visible.sync="deleteBankCardShow">
    	<el-alert v-if="deleteBankCardData" type="success" title="True" :closable="false"></el-alert>
     			<el-alert v-else type="warning" title="False" :closable="false"></el-alert>
    	<template v-slot:footer>
    		<el-button @click="deleteBankCardShow = false">Close</el-button>
    		<el-button @click="Again">Again</el-button>
    	</template>
    </el-dialog>
	</div>
</template>

<script>
export default {
	name: "deleteBankCard",
 	data() {
 		return {
			form: {
    				cardid: 0, 
    			},
    			deleteBankCardData: false, 
    			deleteBankCardShow: false,
 		};
 	},
 	created() {
	},
 	methods: {
 		submit() {
   			this.deleteBankCardShow = false;
      			this.$axios({
      				method: "post",
      				url: "/deleteBankCard",
      				data: this.form,
      			}).then(res => {
      				this.deleteBankCardData = res.data.data;
      				this.deleteBankCardShow = true;
      			});
   		},
 		Again() {
   	this.$router.push({name: "manageBankCard"});
   },
 	},
};
</script>