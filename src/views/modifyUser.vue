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
  		<el-dialog title="Return Message" :visible.sync="modifyUserShow">
    	<el-alert v-if="modifyUserData" type="success" title="True" :closable="false"></el-alert>
     			<el-alert v-else type="warning" title="False" :closable="false"></el-alert>
    	<template v-slot:footer>
    		<el-button @click="modifyUserShow = false">Close</el-button>
    		<el-button @click="Again">Again</el-button>
    	</template>
    </el-dialog>
	</div>
</template>

<script>
export default {
	name: "modifyUser",
 	data() {
 		return {
			form: {
    				userid: 0, 
        name: "", 
        address: "", 
    			},
    			modifyUserData: false, 
    			modifyUserShow: false,
 		};
 	},
 	created() {
	},
 	methods: {
 		submit() {
   			this.modifyUserShow = false;
      			this.$axios({
      				method: "post",
      				url: "/modifyUser",
      				data: this.form,
      			}).then(res => {
      				this.modifyUserData = res.data.data;
      				this.modifyUserShow = true;
      			});
   		},
 		Again() {
   	this.$router.push({name: "manageUser"});
   },
 	},
};
</script>