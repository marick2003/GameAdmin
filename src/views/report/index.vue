<template>
    <el-form :model="form" ref="form" :rules="rules" label-width="100px"  class="border" :inline="false" size="normal">
        <table>
            <thead> 
                <tr>
                    <th colspan="2">报表</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="title text-left pl-30">游戏</td>
                    <td class="text-left pl-30">
                        <div class="mt-5">
                        <input type="button" class="btn_select_all"
                            :class="game_lottery_type1_all && game_lottery_type3_all && game_lottery_type4_all ? 'btn-report-select' : ''"
                            value="全部选择" @click="allSelectBtn" />
                        <input type="button" class="btn_select_none ml-10"
                            :class="!game_lottery_type1_all && !game_lottery_type3_all && !game_lottery_type4_all && !game_lottery_type1.length && !game_lottery_type3.length && !game_lottery_type4.length ? 'btn-report-select' : ''"
                            value="全部不选择" @click="allUnselectBtn" />
                        </div>
                        <template v-for="(GroupItem, i) in CompanyGames.Collections.Group">
                            <div class="mt-10">
                                <span class="inline-block font-bold text-black">{{ CompanyGames.Collections.gameGroupName[i] }}</span>
                                <span class="inline-block">
                                <hr style="height:3px;" class="bg-gray-500 mb-4 w-150 mx-6"/>
                                </span>
                                <span class="inline-block">
                                <template v-if="i == 1"><label class="mr10"><input type="checkbox"
                                        :balanceGroup_all="i" v-model="selectAllTricks1" />全部选择</label></template>
                                <template v-if="i == 3"><label class="mr10"><input type="checkbox"
                                        :balanceGroup_all="i" v-model="selectAllTricks3" />全部选择</label></template>
                                <template v-if="i == 4"><label class="mr10"><input type="checkbox"
                                        :balanceGroup_all="i" v-model="selectAllTricks4" />全部选择</label></template>
                                </span>
                            </div>
                            <div class="mt-5">
                                <template v-for="(item, j) in GroupItem">
                                <template v-if="(j) % 5 == 0">
                                    <div :key="j" id="" style="display: flex;">
                                    <template v-for="(_item, _j) in GroupItem">
                                        <template v-if="_j - j >= 0 && _j - j < 5">
                                        <div :key="_j" class="w-120">
                                            <label>
                                            <template v-if="i == 1">
                                                <input type="checkbox" class="checkbox"
                                                :value="_item.LotteryId"
                                                v-model="game_lottery_type1" @click="checkReportType(1)" />{{ _item.LotteryName }}
                                            </template>
                                            <template v-if="i == 3">
                                                <input type="checkbox" class="checkbox"
                                                :value="_item.LotteryId"
                                                v-model="game_lottery_type3" />{{ _item.LotteryName }}
                                            </template>
                                            <template v-if="i == 4">
                                                <input type="checkbox" class="checkbox"
                                                :value="_item.LotteryId"
                                                v-model="game_lottery_type4" @click="checkReportType(1)" />{{ _item.LotteryName }}
                                            </template>
                                            </label>
                                        </div>
                                        </template>
                                    </template>
                                    </div>
                                </template>
                                </template>
                            </div>
                        </template>
                    </td>
                </tr>
            </tbody>

        </table>
        <el-form-item label="游戏">
            <el-button @click="allSelectBtn">全部选择</el-button>
            <el-button  @click="allUnselectBtn">全部不选择</el-button>
            <template v-for="(GroupItem, i) in CompanyGames.Collections.Group">
                <div class="mt-10">
                    <span class="inline-block font-bold text-black">{{ CompanyGames.Collections.gameGroupName[i] }}</span>
                    <span class="inline-block">
                      <hr style="height:3px;" class="bg-gray-500 mb-4 w-150 mx-6"/>
                    </span>
                    <span class="inline-block">
                      <template v-if="i == 1"><label class="mr10"><input type="checkbox"
                            :balanceGroup_all="i" v-model="selectAllTricks1" />全部选择</label></template>
                      <template v-if="i == 3"><label class="mr10"><input type="checkbox"
                            :balanceGroup_all="i" v-model="selectAllTricks3" />全部选择</label></template>
                      <template v-if="i == 4"><label class="mr10"><input type="checkbox"
                            :balanceGroup_all="i" v-model="selectAllTricks4" />全部选择</label></template>
                    </span>
                  </div>
            </template>
        </el-form-item>
        <el-form-item>
            <el-button  @click="onSubmit">查询</el-button>
        </el-form-item>
    </el-form>
    
</template>
<script setup>
    import { reactive, ref,computed,onBeforeMount, onMounted, onBeforeUnmount,onServerPrefetch } from 'vue'
    import { useStore } from 'vuex'
    const formSize = ref('default')
    const gameLotteryAll=ref([])
    const ruleForm = reactive({
    name: 'Hello',
    region: '',
    count: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
    })
    onMounted(() => {
        store.dispatch('setting/fetchCompanyGames');
    });
    const store = useStore();
    const CompanyGames=computed(()=>store.state.setting.CompanyGames)
    console.log(CompanyGames)
    const allSelectBtn=()=>{

    }  
    const allUnselectBtn=()=>{

    }   
    const onSubmit=()=>{

    }
</script>