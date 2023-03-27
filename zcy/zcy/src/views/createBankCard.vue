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
       <el-form-item label="cardstatus">
			</el-form-item>
       <el-form-item label="catalog">
			</el-form-item>
       <el-form-item label="password">
       				<el-input
           					type="textarea"
           					autosize
           					v-model="form.password"
           					class="w-96">
           				</el-input>
       			</el-form-item>
       <el-form-item label="balance">
       				<el-input
           					type="textarea"
           					autosize
           					v-model="form.balance"
           					class="w-96">
           				</el-input>
       			</el-form-item>
    		</el-form>
  		<div class="m-4">
  			<el-button @click="$router.back()">Back</el-button>
  			<el-button @click="submit">Submit</el-button>
  		</div>
  		<el-dialog title="Return Message" :visible.sync="createBankCardShow">
    	<el-alert v-if="createBankCardData" type="success" title="True" :closable="false"></el-alert>
     			<el-alert v-else type="warning" title="False" :closable="false"></el-alert>
    	<template v-slot:footer>
    		<el-button @click="createBankCardShow = false">Close</el-button>
    		<el-button @click="Again">Again</el-button>
    	</template>
    </el-dialog>
	</div>
</template>

<script>
export default {
	name: "createBankCard",
 	data() {
 		return {
			form: {
    				cardid: 0, 
        cardstatus: null, 
        catalog: null, 
        password: 0, 
        balance: 0.0, 
    			},
    			createBankCardData: false, 
    			createBankCardShow: false,
 		};
 	},
 	created() {
	},
 	methods: {
 		submit() {
   			this.createBankCardShow = false;
      			this.$axios({
      				method: "post",
      				url: "/createBankCard",
      				data: this.form,
      			}).then(res => {
      				this.createBankCardData = res.data.data;
      				this.createBankCardShow = true;
      			});
   		},
 		Again() {
   	this.$router.push({name: "manageBankCard"});
   },
 	},
};
</script>