var posts=["posts/4a24.html","posts/2667.html","posts/943c.html","posts/5ca5.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"辰风","hundredSuffix":"!w120","link":"https://chenfengblog.eu.org/","avatar":"https://image.anheyu.com/useruploads/108/2023/03/12/640dac11413b0.png","descr":"超电磁炮永世长存","siteshot":"https://image.anheyu.com/useruploads/108/2023/05/26/64709d5e8b9c5.png"},{"name":"HiSuzume","hundredSuffix":"!w120","link":"https://hisuzume.github.io/","avatar":"https://image.anheyu.com/useruploads/108/2023/05/19/646795e9b24ca.jpg","descr":"恭喜你发现了宝藏","siteshot":"https://image.anheyu.com/useruploads/108/2023/05/20/646847c422ce1.png"},{"name":"王同学的blog","hundredSuffix":"!w120","link":"https://demo.wxz666.icu","avatar":"https://img1.baidu.com/it/u=1432388648,1216257200&fm=253&fmt=auto&app=138&f=JPEG?w=502&h=500","descr":"须知少年凌云志，曾许人间第一流","siteshot":"https://image.anheyu.com/useruploads/108/2023/05/20/6468dfdb4a6f8.png"},{"name":"朝而往","hundredSuffix":"!w120","link":"https://muerg.cn/","avatar":"https://image.muerg.cn/i/2023/05/01/644f6cebafd3d.jpg","descr":"四时之景不同，而乐亦无穷也。","siteshot":"https://image.muerg.cn/i/2023/05/01/644f6c9675c86.jpg"},{"name":"铭心石刻","hundredSuffix":"!w120","link":"https://blog.kouseki.cn/","avatar":"https://blog.kouseki.cn/imgs/avatar.webp","descr":"愿岁并谢，与友长兮","siteshot":"https://blog.kouseki.cn/imgs/siteshot.webp"},{"name":"🏴‍☠️浴巾的贼船🏴‍☠️","hundredSuffix":"!w120","link":"https://www.chunyujin.top/","avatar":"https://image.anheyu.com/useruploads/108/2023/05/13/645ef19022393.gif","descr":"水可载舟，亦可赛艇🚤","siteshot":null},{"name":"晓空/宇风博客","hundredSuffix":"!w120","link":"https://www.xkyfzs.top","avatar":"https://tuchuang.xkyfzs.top/img/touxiang.jpg","descr":"我的认知，远远不能超过别人的认知，向别人学习，那才是我最高的认知！","siteshot":null},{"name":"拾光博客","hundredSuffix":"!w120","link":"https://www.timebaoku.online/","avatar":"https://www.timebaoku.online/zb_users/theme/acgMora/usr/logo.png?1683030486","descr":"免费主机推动和发展者","siteshot":null},{"name":"Lil-knee的技术空间站","hundredSuffix":"!w120","link":"https://blog.lilknee.xyz/","avatar":"https://minio.lilknee.xyz/aurora/config/c51da5c5bc20440293cc0f6e76f62de2.png","descr":"这里是LIl-knee的个人博客，记录自己的成长","siteshot":null},{"name":"ZTY's Blog","hundredSuffix":"!w120","link":"https://zty-user.github.io/","avatar":"https://image.anheyu.com/useruploads/108/2023/04/04/642c3b37a384d.jpg","descr":"行百里者半九十","siteshot":null},{"name":"Tiamo","hundredSuffix":"!w120","link":"https://blog.xiaoadai.com/","avatar":"https://s1.ax1x.com/2023/04/06/ppotT6s.jpg","descr":"Tiamo is now 🍭🍭🍭","siteshot":null},{"name":"小明博客","hundredSuffix":"!w120","link":"http://124.71.236.153/blog/homepage","avatar":"https://image.anheyu.com/useruploads/108/2023/04/15/643ab8b55c476.webp","descr":"书山有路勤为径，学海无涯苦作舟","siteshot":null},{"name":"ikun博客","hundredSuffix":"!w120","link":"http://101.42.20.119:8080/","avatar":"https://image.anheyu.com/useruploads/108/2023/04/17/643d1c00daa65.png","descr":"欢迎互换友链~","siteshot":null},{"name":"召尘秘境","hundredSuffix":"!w120","link":"https://www.olive-r.cn","avatar":"https://www.olive-r.cn/favicon.ico","descr":"开放，共享，包容，团结","siteshot":null},{"name":"Edward","hundredSuffix":"!w120","link":"https://edwardshh.cn/","avatar":"https://image.anheyu.com/useruploads/160/2023/05/10/645ba0257beca.jpeg","descr":"恰如猛虎卧荒丘，潜伏爪牙忍受。","siteshot":"https://image.anheyu.com/useruploads/160/2023/05/10/645bbb98712aa.png"},{"name":"爱摸鱼的Mo","hundredSuffix":"!w120","link":"https://blog.xiowo.net/","avatar":"https://img01.anheyu.com/useruploads/108/2023/07/12/64aec718d5349.png","descr":"万年鸽王，哈哈OvO"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };