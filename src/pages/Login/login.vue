<template>
  <div id="login">
    <h4>用户名</h4>
    <input v-model="username" placeholder="用户名">
    <h4>密码</h4>
    <input v-model="password" placeholder="密码" type="password" @keyup.enter="onLogin">
    <el-button size="medium" @click="onLogin">立即登录</el-button>
    <p class="notice">没有账号？
      <router-link to="/register">注册新用户</router-link>
    </p>
  </div>
</template>

<script src="./login.js"></script>

<style lang="less" src="./login.less"></style>
