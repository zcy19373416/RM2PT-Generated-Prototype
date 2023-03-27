<template>
	<div class="h-full flex justify-center items-center">
		<el-card class="box-card">
			<template v-slot:header>
				AutomatedTellerMachine
			</template>
			<el-button-group>
				<el-button @click="$router.push({name: 'Customer'})">Customer</el-button><el-button @click="$router.push({name: 'BankClerk'})">BankClerk</el-button>
			</el-button-group>
		</el-card>
	</div>
</template>