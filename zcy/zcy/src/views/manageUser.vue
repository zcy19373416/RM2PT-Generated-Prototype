<template>
	<div class="h-full flex justify-center items-center">
		<el-card class="box-card">
			<template v-slot:header>
				manageUser
			</template>
			<el-button-group>
				<el-button @click="$router.push({name: 'createUser'})">createUser</el-button><el-button @click="$router.push({name: 'queryUser'})">queryUser</el-button><el-button @click="$router.push({name: 'modifyUser'})">modifyUser</el-button><el-button @click="$router.push({name: 'deleteUser'})">deleteUser</el-button>
			</el-button-group>
		</el-card>
	</div>
</template>