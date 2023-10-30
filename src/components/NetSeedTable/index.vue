<template>
        <el-row class="border border-b-0 flex justify-between p-4">
            <el-col span="12">
                当前IP：<span>1.2.3.4</span>
            </el-col>
            <el-col span="12">
                当前时间：<span>2023/10/30</span>
            </el-col>
        </el-row>
        <el-table :data="tableData" border stripe height="420">
            <el-table-column label="线路">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <span>{{ scope.row.line }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="时间">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                    <el-icon><timer /></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="详情" >
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                    <el-icon><timer /></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </div>
                </template>
            </el-table-column>
        </el-table>
</template>
<script setup>
import { ref, computed } from 'vue'
const tableData=[

];
const columns= [{id:'线路'},]
const setStatus=(time)=>{

}

</script>