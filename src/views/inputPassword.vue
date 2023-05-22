<template>
	<div>
		<el-form label-width="100px">
    			<el-form-item label="password">
       				<el-input
           					type="textarea"
           					autosize
           					v-model="form.password"
           					class="w-96">
           				</el-input>
       			</el-form-item>
    		</el-form>
  		<div class="m-4">
  			<el-button @click="$router.back()">Back</el-button>
  			<el-button @click="submit">Submit</el-button>
  		</div>
  		<el-dialog title="Return Message" :visible.sync="inputPasswordShow">
    	<el-alert v-if="inputPasswordData" type="success" title="True" :closable="false"></el-alert>
     			<el-alert v-else type="warning" title="False" :closable="false"></el-alert>
    	<template v-slot:footer>
    		<el-button @click="inputPasswordShow = false">Close</el-button>
    		<el-button @click="Next">Next</el-button>
    	</template>
    </el-dialog>
	</div>
</template>

<script>
export default {
	name: "inputPassword",
 	data() {
 		return {
			form: {
    				password: 0, 
    			},
    			inputPasswordData: false, 
    			inputPasswordShow: false,
 		};
 	},
 	created() {
	},
 	methods: {
 		submit() {
   			this.inputPasswordShow = false;
      			this.$axios({
      				method: "post",
      				url: "/inputPassword",
      				data: this.form,
      			}).then(res => {
      				this.inputPasswordData = res.data.data;
      				this.inputPasswordShow = true;
      			});
   		},
 		Next() {
   	this.$router.push({name: "depositFunds"});
   },
 	},
};
</script>