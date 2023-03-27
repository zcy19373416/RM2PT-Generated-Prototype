<template>
	<el-container class="h-full">
		<el-header height="80px" class="text-center text-2xl p-6 border-b">
			<span class="cursor-pointer" @click="$router.push({name: 'home'})">AutomatedTellerMachine</span>
		</el-header>
		<el-container style="height: calc(100% - 80px)">
			<el-aside width="240px">
				<el-menu router class="h-full">
					<el-menu-item index="/Customer/inputCard" class="border-b">
     	<i class="el-icon-setting"></i>
     	<span>withdrawCash</span>
     </el-menu-item>
     <el-menu-item index="/Customer/inputCard" class="border-b">
     	<i class="el-icon-setting"></i>
     	<span>checkBalance</span>
     </el-menu-item>
     <el-menu-item index="/Customer/inputCard" class="border-b">
     	<i class="el-icon-setting"></i>
     	<span>depositFunds</span>
     </el-menu-item>
				</el-menu>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>