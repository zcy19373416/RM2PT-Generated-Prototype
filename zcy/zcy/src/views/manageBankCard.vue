<template>
	<div class="h-full flex justify-center items-center">
		<el-card class="box-card">
			<template v-slot:header>
				manageBankCard
			</template>
			<el-button-group>
				<el-button @click="$router.push({name: 'createBankCard'})">createBankCard</el-button><el-button @click="$router.push({name: 'queryBankCard'})">queryBankCard</el-button><el-button @click="$router.push({name: 'modifyBankCard'})">modifyBankCard</el-button><el-button @click="$router.push({name: 'deleteBankCard'})">deleteBankCard</el-button>
			</el-button-group>
		</el-card>
	</div>
</template>