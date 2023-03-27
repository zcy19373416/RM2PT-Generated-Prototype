import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("@/home.vue"),
	},
	{
 		path: "/Customer",
 		name: "Customer",
 		component: () => import("@/views/Customer.vue"),
 		children: [ 
			 
       {
       				path: "inputCard",
       				name: "inputCard",
       				component: () => import("@/views/inputCard.vue"),
       			}, 
       {
       				path: "inputPassword",
       				name: "inputPassword",
       				component: () => import("@/views/inputPassword.vue"),
       			}, 
       {
       				path: "withdrawCash",
       				name: "withdrawCash",
       				component: () => import("@/views/withdrawCash.vue"),
       			}, 
       {
       				path: "ejectCard",
       				name: "ejectCard",
       				component: () => import("@/views/ejectCard.vue"),
       			}, 
    			 
       {
       				path: "inputCard",
       				name: "inputCard",
       				component: () => import("@/views/inputCard.vue"),
       			}, 
       {
       				path: "inputPassword",
       				name: "inputPassword",
       				component: () => import("@/views/inputPassword.vue"),
       			}, 
       {
       				path: "ejectCard",
       				name: "ejectCard",
       				component: () => import("@/views/ejectCard.vue"),
       			}, 
    			 
       {
       				path: "inputCard",
       				name: "inputCard",
       				component: () => import("@/views/inputCard.vue"),
       			}, 
       {
       				path: "inputPassword",
       				name: "inputPassword",
       				component: () => import("@/views/inputPassword.vue"),
       			}, 
       {
       				path: "depositFunds",
       				name: "depositFunds",
       				component: () => import("@/views/depositFunds.vue"),
       			}, 
       {
       				path: "ejectCard",
       				name: "ejectCard",
       				component: () => import("@/views/ejectCard.vue"),
       			}, 
 		],
 	},
 {
 		path: "/BankClerk",
 		name: "BankClerk",
 		component: () => import("@/views/BankClerk.vue"),
 		children: [ 
 			{
    				path: "manageBankCard",
    				name: "manageBankCard",
    				component: () => import("@/views/manageBankCard.vue"),
    			},
    			 
        
        
       {
       				path: "createBankCard",
       				name: "createBankCard",
       				component: () => import("@/views/createBankCard.vue"),
       			}, 
        
       {
       				path: "queryBankCard",
       				name: "queryBankCard",
       				component: () => import("@/views/queryBankCard.vue"),
       			}, 
        
       {
       				path: "modifyBankCard",
       				name: "modifyBankCard",
       				component: () => import("@/views/modifyBankCard.vue"),
       			}, 
        
       {
       				path: "deleteBankCard",
       				name: "deleteBankCard",
       				component: () => import("@/views/deleteBankCard.vue"),
       			}, 
    {
    				path: "manageUser",
    				name: "manageUser",
    				component: () => import("@/views/manageUser.vue"),
    			},
    			 
        
        
       {
       				path: "createUser",
       				name: "createUser",
       				component: () => import("@/views/createUser.vue"),
       			}, 
        
       {
       				path: "queryUser",
       				name: "queryUser",
       				component: () => import("@/views/queryUser.vue"),
       			}, 
        
       {
       				path: "modifyUser",
       				name: "modifyUser",
       				component: () => import("@/views/modifyUser.vue"),
       			}, 
        
       {
       				path: "deleteUser",
       				name: "deleteUser",
       				component: () => import("@/views/deleteUser.vue"),
       			}, 
 		],
 	},
];

export default new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});