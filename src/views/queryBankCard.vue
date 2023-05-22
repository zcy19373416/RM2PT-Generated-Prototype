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
  		<el-dialog title="Return Message" :visible.sync="queryBankCardShow">
    	<el-descriptions border>
     				<el-descriptions-item label="CardID">
         	{{queryBankCardData.cardid}}
         </el-descriptions-item>
         <el-descriptions-item label="CardStatus">
         	{{queryBankCardData.cardstatus}}
         </el-descriptions-item>
         <el-descriptions-item label="Catalog">
         	{{queryBankCardData.catalog}}
         </el-descriptions-item>
         <el-descriptions-item label="Password">
         	{{queryBankCardData.password}}
         </el-descriptions-item>
         <el-descriptions-item label="Balance">
         	{{queryBankCardData.balance}}
         </el-descriptions-item>
     			</el-descriptions>
    	<template v-slot:footer>
    		<el-button @click="queryBankCardShow = false">Close</el-button>
    		<el-button @click="Again">Again</el-button>
    	</template>
    </el-dialog>
	</div>
</template>

<script>
export default {
	name: "queryBankCard",
 	data() {
 		return {
			form: {
    				cardid: 0, 
    			},
    			queryBankCardData: {}, 
    			queryBankCardShow: false,
 		};
 	},
 	created() {
	},
 	methods: {
 		submit() {
   			this.queryBankCardShow = false;
      			this.$axios({
      				method: "post",
      				url: "/queryBankCard",
      				data: this.form,
      			}).then(res => {
      				this.queryBankCardData = res.data.data;
      				this.queryBankCardShow = true;
      			});
   		},
 		Again() {
   	this.$router.push({name: "manageBankCard"});
   },
 	},
};
</script>