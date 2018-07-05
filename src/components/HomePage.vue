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
          <div class="detail">
            <div class="data">
              <span class="col1">Genres</span>
              <span class="col2">Fusce/vehicula/dolor</span>
            </div>
            <div class="data">
              <span class="col1">Author</span>
              <span class="col2">Namae Shiranai</span>
            </div>
            <div class="data">
              <span class="col1">Status</span>
              <span class="col2">Ongoing</span>
            </div>
            <div class="data">
              <span class="col1">Rate</span>
              <span class="col2">
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
              </span>
            </div>
          </div>
          <div class="summary">
            <div class="sumTitle">
              Summary
            </div>
            <p class="sumContent">
              If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die.<br/><br/> Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals.
            </p>
          </div>
        </div>
      </div>
      <div class="item chapters">
        <div class="chTitle">
          All Chapters
        </div>
        <div class="chContent">
          <div class="chDetail">
            Chapter 1: The F2E Challenge Start!
          </div>
          <div class="chDetail">
            Chapter 2: Todo List is Going Crazy!
            <span class="new">New</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
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
@import "../assets/scss/variables";

* {
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 1;
  // outline: 1px solid #ff0000;
  font-family: $_font;
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
    font-style: italic;
    font-weight: bold;
    background-color: $black;
    font-size: 42px;
    padding: 12px;
  }
  .content {
    padding: 3% 15%;
    .item {
      position: relative;
      float: left;
    }
    .comicPic {
      width: 50%;
      img {
        border: black solid 5px;
        width: auto;
        height: auto;
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
      }
    }
    .comicInfo {
      width: 50%;
      .title {
        color: $white;
        background-color: $black;
        font-family: $_font;
        font-weight: bold;
        font-size: 50px;
        padding: 5px;
        margin-left: 5px;
      }
      .info {
        padding: 30px;
        text-align: left;
        font-size: 22px;
        color: $black;
        .detail {
          display: table;
          margin-bottom: 20%;
          border-spacing: 13px;
          .data {
            display: table-row;
            .col1 {
              display: table-cell;
              font-weight: bold;
              padding-right: 5%;
            }
            .col2 {
              display: table-cell;
            }
          }
        }
      }
      .summary {
        .sumTitle {
          font-weight: bold;
          margin-bottom: 15px;
        }
      }
    }
    .chapters {
      width: 100%;
      text-align: left;
      margin-top: 5%;
      .chTitle {
        background-color: $black;
        color: $white;
        font-size: 28px;
        font-weight: bold;
        width: 18%;
        padding: 10px;
      }
      .chContent {
        border: black solid 3px;
        color: $black;
        font-size: 18px;
        font-weight: bold;
        .chDetail {
          padding: 12px;
          cursor: pointer;
          &:hover {
            background-color: $black;
            color: $white;
          }
          .new {
            background-color: $green;
            color: $black;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 400px) and (max-width: 767px) {
  .wrap {
    font-size: 12px;
    .content {
      .comicInfo {
        width: 100%;
        .info {
          .detail {
            margin-bottom: 5%;
          }
        }
      }
      .comicPic {
        width: 100%;
      }
      .chapters {
        .chTitle {
          width: 33%;
        }
      }
    }
  }
}
@media screen and (max-width: 400px) {
  .wrap {
    font-size: 12px;
    .content {
      .comicInfo {
        width: 100%;
        .info {
          padding: 20px;
          font-size: 14px;
          .detail {
            margin-bottom: 2%;
          }
        }
        .title {
          font-size: 32px;
        }
      }
      .comicPic {
        width: 100%;
      }
      .chapters {
        .chTitle {
          font-size: 16px;
          width: 40%;
        }
        .chContent {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
