<template>
    <el-content v-loading="loading">
        <keep-alive>
            <iframe :src="src" frameborder="0"  id="_iframe"></iframe>  
        </keep-alive>
    </el-content>
</template>
<script setup>
import { reactive, onMounted, nextTick, KeepAlive } from "vue"      
const props = defineProps({ 
     src:String,
})      
const state = reactive({
    loading:true
})
function init(){
     const iframe = document.getElementById('_iframe');
     if (!iframe) return false; 
     iframe.onload = () => { 
        state.loading = false; 
      };
}       
onMounted(()=>
   nextTick(()=>init())
)

</script>