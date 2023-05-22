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
			<el-button @click="submit">Submit</el-button>
  		</div>
  		<el-dialog title="Return Message" :visible.sync="inputCardShow">
    	<el-alert v-if="inputCardData" type="success" title="True" :closable="false"></el-alert>
     			<el-alert v-else type="warning" title="False" :closable="false"></el-alert>
    	<template v-slot:footer>
    		<el-button @click="inputCardShow = false">Close</el-button>
    		<el-button @click="Next">Next</el-button>
    	</template>
    </el-dialog>
	</div>
</template>

<script>
export default {
	name: "inputCard",
 	data() {
 		return {
			form: {
    				cardid: 0, 
    			},
    			inputCardData: false, 
    			inputCardShow: false,
 		};
 	},
 	created() {
	},
 	methods: {
 		submit() {
   			this.inputCardShow = false;
      			this.$axios({
      				method: "post",
      				url: "/inputCard",
      				data: this.form,
      			}).then(res => {
      				this.inputCardData = res.data.data;
      				this.inputCardShow = true;
      			});
   		},
 		Next() {
   	this.$router.push({name: "inputPassword"});
   },
 	},
};
</script>