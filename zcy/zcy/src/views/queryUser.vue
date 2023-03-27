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
  		<el-dialog title="Return Message" :visible.sync="queryUserShow">
    	<el-descriptions border>
     				<el-descriptions-item label="UserID">
         	{{queryUserData.userid}}
         </el-descriptions-item>
         <el-descriptions-item label="Name">
         	{{queryUserData.name}}
         </el-descriptions-item>
         <el-descriptions-item label="Address">
         	{{queryUserData.address}}
         </el-descriptions-item>
     			</el-descriptions>
    	<template v-slot:footer>
    		<el-button @click="queryUserShow = false">Close</el-button>
    		<el-button @click="Again">Again</el-button>
    	</template>
    </el-dialog>
	</div>
</template>

<script>
export default {
	name: "queryUser",
 	data() {
 		return {
			form: {
    				userid: 0, 
    			},
    			queryUserData: {}, 
    			queryUserShow: false,
 		};
 	},
 	created() {
	},
 	methods: {
 		submit() {
   			this.queryUserShow = false;
      			this.$axios({
      				method: "post",
      				url: "/queryUser",
      				data: this.form,
      			}).then(res => {
      				this.queryUserData = res.data.data;
      				this.queryUserShow = true;
      			});
   		},
 		Again() {
   	this.$router.push({name: "manageUser"});
   },
 	},
};
</script>