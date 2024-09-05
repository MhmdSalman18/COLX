<script>
export default{
    data(){
        return {
            name:"John Doe",
            status:true,
            tasks:['one','two','three'],
            link:"https://www.google.com/"
        }
    },
    methods:{
        toggleButton1(){
            if(this.status===true){
                this.status=false
            }
            else{
                this.status=true
            }
        }
    }
    
}
</script>

<template>
 <h1>{{ name }}</h1>
 <p v-if="status">User is active</p>
 <p v-else="status">User is not active</p>
 <a v-bind:href="link" href="">sdsdhcudsh</a>
 <h1>Tasks</h1>
 <ul>
    <li v-for="task in tasks">{{ task }}</li>
 </ul>
<button v-on:click="toggleButton1">set status</button>
</template>