<template>
  <div>
    <h1 class="sr-only">命运石之门</h1>
    <div class="banner"></div>
    <div class="container">
      <div class="intro-container section-block">
        <h2 class="title">
          <span>简介</span>
          <span class="sub-title-text">Intro</span>
        </h2>
        <div class="row">
          <div class="intro-item-block col-lg-6 col-md-12">
            <div class="intro-content">
              <p
                class="drop-cap"
              >命运石之门（Steins;Gate）的Steins德语的意思是石头，音译：斯坦因）。强调：在故事中，名词创造者本人——冈部伦太郎/凤凰院凶真明确地指出：这个名词是没有任何含义的，与任何人和事件亦或者物件无关，而没有含义才导致了它却是本作最终的关键词。</p>
              <p>5pb.Games于2008年推出了由社长志仓千代丸亲自企划并担当制作人的科学幻想作品[Chaos;Head]后，取得了非凡的成功与不俗的成绩。在改编为新番动画后人气更是经久不衰，在2009年年初推出的“增强完整版”性质的[Chaos;Head Noah]在次时代主机Xbox360上首周竟也卖出万套以上。携此作的空前成功之势，5pb.Games在2009年10月15日推出同系列新作[Steins;Gate]，前作的核心团队新加入话题人物组成了更强的制作团队。本作在发售后取得了超高的人气，超高的口碑与超高的销量。可以视为5pb.游戏分公司成立以来最为成功的一款作品。而其制作人志仓千代丸、剧本家林直孝也因此成为了人气飙升的话题人物。</p>
              <p>冈部伦太郎–中二病的大学生，自称疯狂科学家-凤凰院凶真。他在“未来机械研究所”里发明了“电话烤箱（暂定）”，这个道具有着是类似时空旅行的惊人机能，能够对过去寄送电子邮件。某日，主角遇到了18岁的天才少女-牧瀬红莉栖，但是，就在数个小时前，主角才亲眼目击到她在大厦的屋顶遭到杀害……故事由此展开。</p>
            </div>
          </div>
          <div class="img-container intro-item-block col-lg-6 col-md-12">
            <div class="img-box">
              <img src="~/assets/img/sg/sg_logo.jpg" alt="steins gate logo" />
            </div>
            <div class="img-box">
              <img src="~/assets/img/sg/sg_zero_logo.jpg" alt="steins gate 0 logo" />
            </div>
          </div>
        </div>
      </div>
      <div class="section-block">
        <h2 class="title">
          <span>角色汇总</span>
          <span class="sub-title-text">Character</span>
        </h2>
        <div class="row wiki-list">
          <div
            class="wiki-item-container col-lg-2 col-md-3 col-sm-6"
            v-for="item in characterItems"
            :key="item.title"
          >
            <div class="wiki-item">
              <nuxt-link class="item-title" :to="item.to" :title="item.title" tag="div">
                <span class="item-title-text">{{ item.title }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="section-block">
        <h2 class="title">
          <span>作品分类</span>
          <span class="sub-title-text">Categroy</span>
        </h2>
        <div class="category-list row">
          <nuxt-link
            class="list-item-container col-lg-4 col-md-6 col-sm-12"
            v-for="item in categoryItems"
            :key="item.title"
            :to="item.to"
            :title="item.title"
            tag="div"
          >
            <div class="list-item" :style="{'background-image': `url(${item.image})`}">
              <h3 class="item-title">
                <span class="item-title-text">{{ item.title }}</span>
              </h3>
              <div class="list-item-shade"></div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="section-block">
        <h2 class="title">
          <span>游戏</span>
          <span class="sub-title-text">Game</span>
        </h2>
        <div class="row wiki-list">
          <div
            class="wiki-item-container col-lg-2 col-md-3 col-sm-6"
            v-for="item in gameItems"
            :key="item.title"
          >
            <div class="wiki-item">
              <nuxt-link class="item-title" :to="item.to" :title="item.title" tag="div">
                <span class="item-title-text">{{ item.title }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="section-block">
        <h2 class="title">
          <span>动画</span>
          <span class="sub-title-text">Anime</span>
        </h2>
        <div class="character-list row wiki-list">
          <div
            class="wiki-item-container col-lg-2 col-md-3 col-sm-6"
            v-for="item in animeItems"
            :key="item.title"
          >
            <div class="wiki-item">
              <nuxt-link class="item-title" :to="item.to" :title="item.title" tag="div">
                <span class="item-title-text">{{ item.title }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="section-block">
        <h2 class="title">
          <span>漫画</span>
          <span class="sub-title-text">Comic</span>
        </h2>
        <div class="row wiki-list">
          <div
            class="wiki-item-container col-lg-2 col-md-3 col-sm-6"
            v-for="item in comicItems"
            :key="item.title"
          >
            <div class="wiki-item">
              <nuxt-link class="item-title" :to="item.to" :title="item.title" tag="div">
                <span class="item-title-text">{{ item.title }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="section-block">
        <h2 class="title">
          <span>广播剧</span>
          <span class="sub-title-text">Drama</span>
        </h2>
        <div class="row wiki-list">
          <div
            class="wiki-item-container col-lg-2 col-md-3 col-sm-6"
            v-for="item in dramaItems"
            :key="item.title"
          >
            <div class="wiki-item">
              <nuxt-link class="item-title" :to="item.to" :title="item.title" tag="div">
                <span class="item-title-text">{{ item.title }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="section-block">
        <h2 class="title">
          <span>官方小说</span>
          <span class="sub-title-text">Novel</span>
        </h2>
        <div class="row wiki-list">
          <div
            class="wiki-item-container col-lg-2 col-md-3 col-sm-6"
            v-for="item in novelItems"
            :key="item.title"
          >
            <div class="wiki-item">
              <nuxt-link class="item-title" :to="item.to" :title="item.title" tag="div">
                <span class="item-title-text">{{ item.title }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="section-block">
        <h2 class="title">
          <span>音乐</span>
          <span class="sub-title-text">Album</span>
        </h2>
        <div class="row wiki-list">
          <div
            class="wiki-item-container col-lg-2 col-md-3 col-sm-6"
            v-for="item in albumItems"
            :key="item.title"
          >
            <div class="wiki-item">
              <nuxt-link class="item-title" :to="item.to" :title="item.title" tag="div">
                <span class="item-title-text">{{ item.title }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="placeholder" style="min-height:200px"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SteinsGate",
    head() {
      return {
        title: '命运石之门 | 科学ADV中文维基'
      }
    },
    data() {
      return {
        characterItems: [
          {
            title: '冈部伦太郎',
            to: '/'
          },
          {
            title: '牧濑红莉栖',
            to: '/'
          },
          {
            title: '椎名真由理',
            to: '/'
          },
          {
            title: '桥田至',
            to: '/'
          },
          {
            title: '桐生萌郁',
            to: '/'
          },
          {
            title: '漆原琉华',
            to: '/'
          },
          {
            title: '菲利斯·喵喵',
            to: '/'
          },
          {
            title: '阿万音铃羽',
            to: '/'
          },
          {
            title: '比屋定真帆',
            to: '/'
          },
          {
            title: '椎名篝',
            to: '/'
          },
          {
            title: '阿万音由季',
            to: '/'
          },
          {
            title: '天王寺裕吾',
            to: '/'
          },
          {
            title: '天王寺绹',
            to: '/'
          },
          {
            title: '中钵博士',
            to: '/'
          },
          {
            title: '中濑克美',
            to: '/'
          },
          {
            title: '来岛枫',
            to: '/'
          },
          {
            title: '石膏',
            to: '/'
          },
          {
            title: '硅胶',
            to: '/'
          },
          {
            title: '秋叶幸孝',
            to: '/'
          },
          {
            title: '4°C',
            to: '/'
          },
          {
            title: 'さんぼ老板娘',
            to: '/'
          },
          {
            title: '母与子',
            to: '/'
          },
        ],
        categoryItems: [
          {
            title: '游戏',
            image: require('~/assets/img/sg/sg_game_cover.jpg'),
            to: '/'
          },
          {
            title: '动画',
            image: require('~/assets/img/sg/sg_animate_cover.jpg'),
            to: '/'
          },
          {
            title: '漫画',
            image: require('~/assets/img/sg/sg_comic_cover.jpg'),
            to: '/'
          },
          {
            title: '广播剧',
            image: require('~/assets/img/sg/sg_drama_cover.jpg'),
            to: '/'
          },
          {
            title: '官方小说',
            image: require('~/assets/img/sg/sg_novel_cover.jpg'),
            to: '/'
          },
          {
            title: '音乐',
            image: require('~/assets/img/sg/sg_album_cover.jpg'),
            to: '/'
          },
        ],
        gameItems: [
          {
            title: '命运石之门',
            to: '/'
          },
          {
            title: '命运石之门 比翼恋理的爱人',
            to: '/'
          },
          {
            title: '命运石之门 线性拘束的树状图‎‎',
            to: '/'
          },
          {
            title: '命运石之门0‎‎‎‎',
            to: '/'
          },
        ],
        animeItems: [
          {
            title: '命运石之门',
            to: '/'
          },
          {
            title: '命运石之门 负荷领域的既视感',
            to: '/'
          },
          {
            title: '命运石之门 聪明睿智的感知运算',
            to: '/'
          },
          {
            title: '命运石之门0',
            to: '/'
          },
        ],
        comicItems: [
        ],
        dramaItems: [
          {
            title: '时限轮转的琶音',
            to: '/'
          },
        ],
        novelItems: [
          {
            title: '圆环连锁のウロボロス(',
            to: '/'
          },
          {
            title: 'STEINS;GATE 蝶翼のダイバージェンス: Reverse',
            to: '/'
          },
          {
            title: 'STEINS;GATE2 形而上のネクローシス: Reverse',
            to: '/'
          },
          {
            title: '命运石之门：闭时曲线的碑铭',
            to: '/'
          },
          {
            title: '命运石之门：永劫回归的潘朵拉',
            to: '/'
          },
          {
            title: '命运石之门：无限远点的天鹰座α',
            to: '/'
          },
          {
            title: '命运石之门 承认共鸣的容赦',
            to: '/'
          },
          {
            title: '命运石之门 承认共鸣的赠呈',
            to: '/'
          },
          {
            title: '命运石之门 反物质委员会',
            to: '/'
          },
        ],
        albumItems: [
        ],
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/_column_main.scss";

  .banner {
    background-image: url("~assets/img/sg/steins_gate_banner.jpg");
  }
</style>
