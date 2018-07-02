<template>
<div class="wrap">

<div class="header">
{{comicHeader}}
</div>

<div class="content">
<div class="item comicPic">
<img :src="comicImg">
</div>
<div class="item comicInfo">
<div class="title">
MY HEXSCHOOL
</div>
<div class="info">
123
</div>
<div class="summary">
Summary
</div>
</div>
<div class="item chaprers">
<div class="title">
All Chapters
</div>
<div class="content">
content
</div>
</div>
</div>

</div>
</template>

<script>
// <!-- https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/comic%20cover.png -->

export default {
  data() {
    return {
      comicHeader: "Comicomic",
      comicImg:
        "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/comic%20cover.png"
    };
  }
};
</script>

<style lang='scss'>
@import url("https://fonts.googleapis.com/css?family=Roboto:700i");
$green: #50ff44;
$black: #000000;
$_font: "Roboto", sans-serif;
* {
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 1;
  outline: 1px solid #ff0000;
}

.wrap {
  width: 100%;
  margin: auto;
  :after {
    content: "";
    display: block;
    height: 0%;
    width: 100%;
    clear: both;
  }
  .header {
    color: $green;
    font-family: $_font;
    background-color: $black;
    font-size: 42px;
    padding: 12px;
  }
  .content {
    margin: 3% 10%;
    .item {
      position: relative;
      float: left;
    }
    .comicPic {
      width: 50%;
      img {
        border: black solid 5px;
        width: 98%;
        height: 600px;
        vertical-align: middle;
      }
    }
    .comicInfo {
      width: 50%;
      .title {
        color: white;
        background-color: $black;
        font-family: $_font;
        font-size: 50px;
      }
    }
    .chaprers {
      width: 100%;
    }
  }
}
</style>
