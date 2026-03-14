/* ═══════════════════════════════════════════════════════════
 *  Little_100 — Site Configuration
 *  ─────────────────────────────────────────────────────────
 *  Fork this repo as a template?  Just edit this file!
 *  All personal data, featured repos, and i18n strings are
 *  collected here for easy customization.
 * ═══════════════════════════════════════════════════════════ */

/* eslint-disable no-unused-vars */
var SITE_CONFIG = {

  /* ── Personal ────────────────────────────────────────── */
  name: 'Little_100',
  birthYear: 2008,
  birthMonth: 5,        // 1-indexed  (5 = May)
  birthDay: 1,
  githubUsername: 'Little100',
  bilibiliUid: '1492647738',
  avatarQQ: '2662308929',   // Used for QQ avatar URL

  /* ── Social Links ────────────────────────────────────── */
  links: {
    github:           'https://github.com/Little100',
    bilibili:         'https://space.bilibili.com/1492647738',
    qqFriend:         'tencent://message/?uin=2662308929&Site=qq&Menu=yes',
    qqDisplay:        '2662308929',
    qqGroup:          'https://qm.qq.com/q/fFCJ8JrXhu',
    qqGroupDisplay:   'Little_100 Community',
    website:          'https://www.little100.cn/',
    websiteDisplay:   'little100.cn',
    docs:             'https://docs.little100.cn/',
    docsDisplay:      'docs.little100.cn',
    afdian:           'https://afdian.com/a/little100',
    afdianDisplay:    'little100',
    email:            '2662308929@qq.com'
  },

  /* ── About Section — Skill Tags ──────────────────────── */
  skills: ['Java', 'TypeScript', 'Tauri', 'Python', 'Minecraft', 'Open Source'],

  /* ── Featured Repos ──────────────────────────────────── *
   *  key   = exact GitHub repo name
   *  tags  = shown as pill badges on each card
   *  descKey = i18n key that maps to a description string
   */
  featured: {
    'Minecraft-Resourcespack-Editor': { tags: ['TypeScript', 'Tauri'],    descKey: 'work.p1'  },
    'ProjectE-plugin':                { tags: ['Java', 'Spigot'],         descKey: 'work.p2'  },
    'ConstructionWand_Pugin':         { tags: ['Java', 'Spigot'],         descKey: 'work.p3'  },
    'pluginmarket':                   { tags: ['TypeScript', 'Platform'], descKey: 'work.p4'  },
    'AntiSeedMine':                   { tags: ['Java', 'Anti-Cheat'],     descKey: 'work.p5'  },
    'DomAreaLimitComman':             { tags: ['Java', 'Spigot'],         descKey: 'work.p6'  },
    'Minecraft_Server_Manager':       { tags: ['JavaScript', 'Tool'],     descKey: 'work.p7'  },
    'Avaritia_Plugin':                { tags: ['Java', 'Spigot'],         descKey: 'work.p8'  },
    'DomMobsManager':                 { tags: ['Java', 'Dominion'],       descKey: 'work.p9'  },
    'Minecraft_Online_Issues':        { tags: ['HTML', 'Community'],      descKey: 'work.p10' }
  },

  /** Display order — first card appears first in the 3D showcase */
  featuredOrder: [
    'Minecraft-Resourcespack-Editor',
    'ProjectE-plugin',
    'ConstructionWand_Pugin',
    'pluginmarket',
    'AntiSeedMine',
    'DomAreaLimitComman',
    'Minecraft_Server_Manager',
    'Avaritia_Plugin',
    'DomMobsManager',
    'Minecraft_Online_Issues'
  ],

  /* ── Bilibili — Fallback / Default Values ───────────── */
  biliFallback: {
    follower: 524,
    following: 227,
    videoCount: 100,
    level: 5
  },
  biliCategories: { gaming: 93, tech: 3, life: 2, animals: 2 },
  biliCategoryNames: {
    zh: { gaming: '游戏', tech: '科技', life: '生活', animals: '动物' },
    en: { gaming: 'Gaming', tech: 'Tech', life: 'Life', animals: 'Animals' }
  },

  /* ── Preloader — Minecraft Tips ──────────────────────── */
  tips: {
    zh: [
      '不要挖脚下的方块!',
      '钻石在Y=11层最常见。',
      '苦力怕怕猫。',
      '记得带足食物。',
      '末影珍珠可以用来传送。',
      '水桶能救你一命。',
      '用火把照亮你的世界。'
    ],
    en: [
      "Don't dig straight down!",
      'Diamonds are most common at Y=11.',
      'Creepers are afraid of cats.',
      'Always carry enough food.',
      'Ender pearls can teleport you.',
      'A water bucket can save your life.',
      'Light up your world with torches.'
    ]
  },

  /* ── i18n Strings ────────────────────────────────────── *
   *  Every data-i18n key used in HTML + JS is listed here.
   *  To localise your fork, just translate the values.
   */
  i18n: {
    zh: {
      /* Navigation */
      'nav.about':    '关于',
      'nav.work':     '作品',
      'nav.bilibili': 'B站',
      'nav.contact':  '联系',

      /* Hero */
      'hero.tag':    'MINECRAFT 生态开发者',
      'hero.sub1':   'Minecraft 生态开发者',
      'hero.sub2':   '桌面应用作者',
      'hero.sub3':   'Bilibili UP主',
      'hero.repos':  'REPOS',
      'hero.fans':   'B站粉丝',
      'hero.videos': '投稿视频',
      'hero.scroll': '向下滚动',

      /* About */
      'about.heading.1': '关于',
      'about.heading.2': '我',
      'about.age':       '岁',
      'about.bio1':      '我是 Little_100，来自中国的 Minecraft 生态开发者。',
      'about.bio2':      '专注于将经典 Minecraft 模组以 Spigot/Paper 插件的形式重新实现，同时打造桌面端资源包编辑器等开发工具。在 Bilibili 上分享游戏内容与技术创作。大部分项目以 GPL-3.0 协议开源，欢迎社区参与。',

      /* Work — project descriptions */
      'work.p1':  'Minecraft 资源包可视化编辑器 — 支持材质、模型、音效的图形化编辑与实时预览',
      'work.p2':  '经典等价交换 (ProjectE) 模组移植为 Spigot 插件 — 完整 EMC 系统与炼金术',
      'work.p3':  '建筑之杖 (Construction Wand) 模组以 Spigot 插件形式重新实现',
      'work.p4':  'Minecraft 插件 & 资源包市场平台 — 一站式搜索、下载与管理',
      'work.p5':  '反种子矿透 Spigot 插件 — 防止利用种子信息作弊挖矿',
      'work.p6':  '区域限制指令插件 — 管理特定区域内的命令使用权限',
      'work.p7':  'Minecraft 服务器管理器 — 便捷的服务端部署与管理工具',
      'work.p8':  '无尽贪婪 (Avaritia) 模组以 Spigot 插件形式重新实现',
      'work.p9':  'Dominion 领地生物管理扩展插件',
      'work.p10': 'MOL 帮助玩家解决 Minecraft 联机的疑难杂症',
      'work.viewAll': '查看全部仓库',

      /* Work — 3D showcase UI */
      'work.gate':     '作品',
      'work.gate.sub': 'WORK',
      'work.gate.hint': '向下滚动',
      'work.enter3d':  '进入展示',
      'work.exit3d':   '✕ 关闭展示',
      'work.dragTip':  '拖拽或滚动查看',

      /* Bilibili */
      'bili.follower':   '粉丝',
      'bili.following':  '关注',
      'bili.videos':     '投稿',
      'bili.categories': '内容分区',
      'bili.visit':      '访问B站空间',
      'bili.update':     '数据由 GitHub Actions 每日自动更新',

      /* Contact */
      'contact.h1':       '联系',
      'contact.h2':       '我',
      'contact.qq.friend': '添加QQ好友',
      'contact.qq.group':  '加入QQ群',
      'contact.afdian':    '爱发电',

      /* Footer */
      'footer.craft': '用热爱铸造',

      /* Preloader stages */
      'loader.stage.0': '采集木头...',
      'loader.stage.1': '合成工具...',
      'loader.stage.2': '深入挖矿...',
      'loader.stage.3': '寻找钻石...',
      'loader.stage.4': '建造传送门...',
      'loader.stage.5': '进入末地...',
      'loader.stage.6': '击败末影龙!',
      'loader.tip':     '不要挖脚下的方块!'
    },

    en: {
      /* Navigation */
      'nav.about':    'About',
      'nav.work':     'Work',
      'nav.bilibili': 'Bilibili',
      'nav.contact':  'Contact',

      /* Hero */
      'hero.tag':    'MINECRAFT ECOSYSTEM DEVELOPER',
      'hero.sub1':   'Minecraft Ecosystem Dev',
      'hero.sub2':   'Desktop App Builder',
      'hero.sub3':   'Bilibili Creator',
      'hero.repos':  'REPOS',
      'hero.fans':   'FANS',
      'hero.videos': 'VIDEOS',
      'hero.scroll': 'SCROLL',

      /* About */
      'about.heading.1': 'About',
      'about.heading.2': 'Me',
      'about.age':       'yrs',
      'about.bio1':      "I'm Little_100, a Minecraft ecosystem developer from China.",
      'about.bio2':      'Focused on reimplementing classic Minecraft mods as Spigot/Paper plugins, while building desktop tools like resource pack editors. Sharing game content and tech creations on Bilibili. Most projects are open-source under GPL-3.0.',

      /* Work — project descriptions */
      'work.p1':  'Minecraft resource pack visual editor — graphical editing and live preview for textures, models, and sounds',
      'work.p2':  'Classic Equivalent Exchange (ProjectE) mod ported to Spigot plugin — full EMC system and alchemy',
      'work.p3':  'Construction Wand mod reimplemented as a Spigot plugin',
      'work.p4':  'Minecraft plugin & resource pack marketplace — one-stop search, download, and management',
      'work.p5':  'Anti seed mine-through Spigot plugin — prevent cheating with seed information',
      'work.p6':  'Area command restriction plugin — manage command permissions in specific regions',
      'work.p7':  'Minecraft server manager — easy deployment and management tool',
      'work.p8':  'Avaritia mod reimplemented as a Spigot plugin',
      'work.p9':  'Dominion territory mob management addon plugin',
      'work.p10': 'MOL — helps players troubleshoot Minecraft multiplayer connection issues',
      'work.viewAll': 'View all repos',

      /* Work — 3D showcase UI */
      'work.gate':     'Work',
      'work.gate.sub': 'PROJECTS',
      'work.gate.hint': 'SCROLL DOWN',
      'work.enter3d':  'Enter Immersive 3D Showcase',
      'work.exit3d':   '✕ Close Showcase',
      'work.dragTip':  'Drag or scroll to explore',

      /* Bilibili */
      'bili.follower':   'Followers',
      'bili.following':  'Following',
      'bili.videos':     'Videos',
      'bili.categories': 'Content Categories',
      'bili.visit':      'Visit Bilibili Space',
      'bili.update':     'Data refreshed daily via GitHub Actions',

      /* Contact */
      'contact.h1':       "Let's",
      'contact.h2':       'Connect',
      'contact.qq.friend': 'Add QQ Friend',
      'contact.qq.group':  'Join QQ Group',
      'contact.afdian':    'Afdian',

      /* Footer */
      'footer.craft': 'Crafted with passion',

      /* Preloader stages */
      'loader.stage.0': 'Gathering wood...',
      'loader.stage.1': 'Crafting tools...',
      'loader.stage.2': 'Mining deeper...',
      'loader.stage.3': 'Finding diamonds...',
      'loader.stage.4': 'Building portal...',
      'loader.stage.5': 'Entering the End...',
      'loader.stage.6': 'Dragon slain!',
      'loader.tip':     "Don't dig straight down!"
    }
  }
};
