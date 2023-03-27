<template>
	<div>
		<el-form label-width="100px">
    			<el-form-item label="userid">
       				<el-input
           					type="textarea"
           					autosize
           					v-model="form.userid"
           					class="w-96">
           				</el-input>
       			</el-form-item>
    		</el-form>
  		<div class="m-4">
  			<el-button @click="$router.back()">Back</el-button>
  			<el-button @click="submit">Submit</el-button>
  		</div>
  		<el-dialog title="Return Message" :visible.sync="deleteUserShow">
    	<el-alert v-if="deleteUserData" type="success" title="True" :closable="false"></el-alert>
     			<el-alert v-else type="warning" title="False" :closable="false"></el-alert>
    	<template v-slot:footer>
    		<el-button @click="deleteUserShow = false">Close</el-button>
    		<el-button @click="Again">Again</el-button>
    	</template>
    </el-dialog>
	</div>
</template>

<script>
export default {
	name: "deleteUser",
 	data() {
 		return {
			form: {
    				userid: 0, 
    			},
    			deleteUserData: false, 
    			deleteUserShow: false,
 		};
 	},
 	created() {
	},
 	methods: {
 		submit() {
   			this.deleteUserShow = false;
      			this.$axios({
      				method: "post",
      				url: "/deleteUser",
      				data: this.form,
      			}).then(res => {
      				this.deleteUserData = res.data.data;
      				this.deleteUserShow = true;
      			});
   		},
 		Again() {
   	this.$router.push({name: "manageUser"});
   },
 	},
};
</script>