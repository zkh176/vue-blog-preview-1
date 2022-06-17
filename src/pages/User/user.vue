<template>
  <div id="user">
    <section class="user-info">
      <img :alt="user.username" :src="user.avatar" class="avatar">
      <h3>{{ user.username }}</h3>
    </section>
    <section>
      <router-link v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`" class="item">
        <div class="date">
          <span class="day">{{ splitDate(blog.createdAt).date }}</span>
          <span class="month">{{ splitDate(blog.createdAt).month }}月</span>
          <span class="year">{{ splitDate(blog.createdAt).year }}</span>
        </div>
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.description }}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        :current-page="page"
        :total="total"
        layout="prev, pager, next"
        @current-change="onPageChange">
      </el-pagination>
    </section>
  </div>
</template>

<script src="./user.js">

</script>

<style lang="less" src="../My/my.less"></style>
