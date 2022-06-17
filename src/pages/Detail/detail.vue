<template>
  <div id="detail">
    <section class="user-info">
      <img :alt="user.username" :src="user.avatar" :title="user.username" class="avatar">
      <h3>{{ title }}</h3>
      <p>
        <router-link :to="`/user/${user.id}`">{{ user.username }}</router-link>
        发布于{{ friendlyDate(createdAt) }}
      </p>
    </section>
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script src="./detail.js"></script>

<style lang="less" src="./detail.less"></style>
