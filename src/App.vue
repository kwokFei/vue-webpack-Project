<template>
  <div class="app-container">
    <!-- header -->
    <mt-header fixed title="固定在顶部"></mt-header>

    <!-- center -->

    <router-view></router-view>

    <!-- bothrefm -->

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item mui-active" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/message">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item" to="">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </router-link>
      <router-link class="mui-tab-item" to="">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>

export default {};
</script>

<style scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 55px;
}
</style>