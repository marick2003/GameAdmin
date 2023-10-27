<template>
    <div>
        <Vue3Marquee 
            :gradient="true"
            gradient-length="30%"
        >
            <span
                v-for="(word, index) in props.announcement"
                :key="index"
            >
                {{ word }}
            </span>
        </Vue3Marquee>
    </div>

</template>
<script setup>
import { defineProps, ref, onMounted } from 'vue';
const props = defineProps({
    announcement: {
        type: Array,
        default:  ['hello', 'こんにちは', 'bonjour'],
    },
});


</script>