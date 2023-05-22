<template>
	<div>
		<el-collapse v-model="activeNames">
  			<el-collapse-item name="printReceipt">
     	<template v-slot:title>
     		<i class="el-icon-document mx-4"></i>
     		<span>printReceipt</span>
     	</template>
     	<div v-if="printReceiptShow" class="p-4">
     		<div>{{printReceiptData}}</div>
     	</div>
     </el-collapse-item>
     <el-collapse-item name="ejectCard">
     	<template v-slot:title>
     		<i class="el-icon-document mx-4"></i>
     		<span>ejectCard</span>
     	</template>
     	<div v-if="ejectCardShow" class="p-4">
     		<el-alert v-if="ejectCardData" type="success" title="True" :closable="false"></el-alert>
       			<el-alert v-else type="warning" title="False" :closable="false"></el-alert>
     	</div>
     </el-collapse-item>
  		</el-collapse>
		<div class="m-4">
  			<el-button @click="$router.back()">Back</el-button>
  			<el-button @click="Again">Again</el-button>
  		</div>
	</div>
</template>

<script>
export default {
	name: "ejectCard",
 	data() {
 		return {
 			activeNames: [
    "printReceipt", 
    "ejectCard"
 			],
 			printReceiptData: 0.0, 
    			printReceiptShow: false,
    ejectCardData: false, 
    			ejectCardShow: false,
		};
 	},
 	created() {
 		this.printReceiptShow = false;
   			this.$axios({
   				method: "post",
   				url: "/printReceipt",
   				data: this.form,
   			}).then(res => {
   				this.printReceiptData = res.data.data;
   				this.printReceiptShow = true;
   			});
   this.ejectCardShow = false;
   			this.$axios({
   				method: "post",
   				url: "/ejectCard",
   				data: this.form,
   			}).then(res => {
   				this.ejectCardData = res.data.data;
   				this.ejectCardShow = true;
   			});
 	},
 	methods: {
		Again() {
   	this.$router.push({name: "inputCard"});
   },
 	},
};
</script>