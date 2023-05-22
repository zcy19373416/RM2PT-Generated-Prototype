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
       <el-form-item label="name">
       				<el-input
           					type="textarea"
           					autosize
           					v-model="form.name"
           					class="w-96">
           				</el-input>
       			</el-form-item>
       <el-form-item label="address">
       				<el-input
           					type="textarea"
           					autosize
           					v-model="form.address"
           					class="w-96">
           				</el-input>
       			</el-form-item>
    		</el-form>
  		<div class="m-4">
  			<el-button @click="$router.back()">Back</el-button>
  			<el-button @click="submit">Submit</el-button>
  		</div>
  		<el-dialog title="Return Message" :visible.sync="createUserShow">
    	<el-alert v-if="createUserData" type="success" title="True" :closable="false"></el-alert>
     			<el-alert v-else type="warning" title="False" :closable="false"></el-alert>
    	<template v-slot:footer>
    		<el-button @click="createUserShow = false">Close</el-button>
    		<el-button @click="Again">Again</el-button>
    	</template>
    </el-dialog>
	</div>
</template>

<script>
export default {
	name: "createUser",
 	data() {
 		return {
			form: {
    				userid: 0, 
        name: "", 
        address: "", 
    			},
    			createUserData: false, 
    			createUserShow: false,
 		};
 	},
 	created() {
	},
 	methods: {
 		submit() {
   			this.createUserShow = false;
      			this.$axios({
      				method: "post",
      				url: "/createUser",
      				data: this.form,
      			}).then(res => {
      				this.createUserData = res.data.data;
      				this.createUserShow = true;
      			});
   		},
 		Again() {
   	this.$router.push({name: "manageUser"});
   },
 	},
};
</script>