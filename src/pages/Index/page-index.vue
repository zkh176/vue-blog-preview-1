<template>
  <div id="index">
    <section class="blog-posts">
      <router-link v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`" class="item">
        <figure class="avatar">
          <img :alt="blog.user.username" :src="blog.user.avatar">
          <figcaption>{{ blog.user.username }}</figcaption>
        </figure>
        <h3>{{ blog.title }} <span> {{ friendlyDate(blog.createdAt) }} </span></h3>
        <p>{{ blog.description }}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        :current-page="page"
        :total="total"
        layout="prev,pager,next"
        @current-change="onPageChange">
      </el-pagination>
    </section>
  </div>
</template>


<script src="./page-index.js">

</script>

<style lang="less" src="./page-index.less"></style>
