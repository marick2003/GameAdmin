<template>
  <el-menu class="navbar" mode="horizontal">
    <Hamburger class="hamburger-container" :is-active="opened" @toggleClick="toggleSideBar" />
    <div class="float-left flex  items-centertext-sm  w-1/2">
      公告:
      <Marquee :announcement="['hello', 'こんにちは', 'bonjour']"></Marquee>
    </div>
    <div class="right-menu">
      <div class="text-sm">
        在線:<span class="mx-2">1</span>
      </div>
      <el-button  round>在線客服</el-button>
      <el-button  round @click="openNetSpeed=true">網路測速</el-button>
      <el-dropdown class="avatar-container right-menu-item">
        <div class="avatar-wrapper">
          <!-- <img :src="avatar ? avatar : 'src/assets/img/defaultUser.svg'" class="user-avatar w-10" /> -->
          <el-avatar class="user-avatar" :icon="!avatar ? UserFilled : ''" :src="avatar ? avatar : ''" />
         
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.push('/')">首页</el-dropdown-item>
            <el-dropdown-item divided @click="editPossword">修改密码</el-dropdown-item>
            <el-dropdown-item divided @click="loginOut">登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div>
        {{ userName }}
      </div>
    </div>
  </el-menu>
  <el-dialog
    title=""
    v-model="openNetSpeed"
    width="30%"
    @close="">
    <span></span>
    <NetSpeed></NetSpeed>
  </el-dialog>
  
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ElMessage, ElMessageBox } from 'element-plus'
import Hamburger from './Hamburger.vue'
import Marquee from './Marquee.vue'
import Screenfull from './Screenfull.vue'
import { UserFilled } from '@element-plus/icons-vue'
import NetSpeed from '@/components/NetSeedTable/index.vue'
const router = useRouter()
const store = useStore()
const opened = computed(() => store.state.app.sidebar.opened)
const avatar = computed(() => store.state.user.avatar)
const userName= computed(()=> store.state.user.name)
const toggleSideBar = () => {
  store.dispatch('app/toggleSideBar')
}

const editPossword = () => {
  ElMessage.warning('请联系管理员')
}

const loginOut = () => {
  ElMessageBox.confirm('退出登录', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    console.log("退出登录");
      store.dispatch('user/logout').then(() => {
        router.push('/login')
      })
    })
    .catch(() => {})
}
/// 打開測速頁
const openNetSpeed= ref(false);

</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  line-height: 50px;
  display:block;

  .hamburger-container {
    float: left;
    height: 50px;
    padding: 0 10px;
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  :deep(.right-menu) {
    display: flex;
    align-items: center;
    float: right;
    height: 100%;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      margin: 0 4px;
      vertical-align: middle;
    }

    .international {
      vertical-align: top;
    }

    .theme-switch {
      vertical-align: 15px;
    }

    .avatar-container {
      // height: 50px;
      //margin-right: 30px;

      .avatar-wrapper {
        position: relative;
        margin-top: 5px;

        .user-avatar {
          width: 40px;
          height: 40px;
          cursor: pointer;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          position: absolute;
          top: 20px;
          right: -16px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
