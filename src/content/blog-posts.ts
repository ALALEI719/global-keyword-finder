import type { BlogPost } from "@/lib/blog"

export const blogPosts: BlogPost[] = [
  {
    slug: "international-seo-keyword-research",
    publishedAt: "2026-05-19",
    readMinutes: 12,
    en: {
      title: "How I Actually Do Keyword Research for International SEO",
      excerpt:
        "Most international SEO advice is just “translate your homepage and add hreflang.” That almost never works. Here is the workflow I run instead—calls, thresholds, and the mistakes I keep watching teams make.",
      blocks: [
        {
          type: "p",
          text: "“International SEO” may be the most misunderstood phrase in marketing. Translate the homepage, bolt on hreflang, wait for traffic. That is the playbook most teams run. It almost never works.",
        },
        {
          type: "p",
          text: "I have watched companies spend six figures on multi-language launches that produced single-digit weekly clicks for an entire year. The pattern is identical every time: they optimised for keywords that look correct in a translator and have zero pull in the market they actually care about.",
        },
        {
          type: "p",
          text: "The good news is that the real work is not complicated—just specific. Below is the workflow I run when expanding a site into a new country, in the order I run it, with the calls I would actually make. If you came here looking for a polite, balanced overview, this is not that. I have opinions, and the opinions are what saves you from burning a year.",
        },
        {
          type: "h2",
          text: "1. Stop thinking in languages. Think in country × language pairs.",
        },
        {
          type: "p",
          text: "If you remember nothing else from this article, remember this: in SEO, “language” is a useless unit of work.",
        },
        {
          type: "p",
          text: "The most expensive mistake I see is “we will do German content for the DACH region.” DACH is three countries with three economies, three retail landscapes, and three sets of default search results. Roboter-Rasenmäher trends differently in Germany than in Austria. The top ten domains for Auto kaufen in Switzerland barely overlap with the ones in Germany. Treat those as a single market and your budget evaporates.",
        },
        {
          type: "p",
          text: "The same trap exists everywhere:",
        },
        {
          type: "ul",
          items: [
            "Mexican Spanish uses computadora; Castilian Spanish uses ordenador. Same device, two completely different keywords.",
            "Brazilian Portuguese says celular; European Portuguese says telemóvel. One word picks the wrong country.",
            "British shoppers search trainers, Americans search sneakers, Australians alternate between both depending on the brand.",
            "Quebec French diverges from Parisian French in tech vocabulary so severely that some queries return entirely different SERPs—even though the headline language is “French.”",
          ],
        },
        {
          type: "p",
          text: "Your real unit of work is country × language. Switzerland-de is a separate plan, separate volume data, and separate priority list from Germany-de—even if you reuse 70% of the underlying copy. Lump them together and Google's local intent layer will quietly punish you.",
        },
        {
          type: "callout",
          label: "Hot take",
          text: "If your project plan says “we are launching in German next quarter,” the plan is already wrong. Rewrite it as “Germany-de and Austria-de” and watch how much your scope changes. The teams that pretend this scope does not exist are the same teams that wonder why traffic is flat at month 9.",
        },
        {
          type: "h2",
          text: "2. Mine seed keywords properly. Most lists I see are garbage.",
        },
        {
          type: "p",
          text: "Most seed keyword lists I review are a copy of the company's product feature page. That is not where keywords come from. That is where keywords end—after a marketing team has already sanitised the language.",
        },
        {
          type: "p",
          text: "A useful seed list pulls from the places where real customers describe their own problem, before they have learned the company's vocabulary:",
        },
        {
          type: "ul",
          items: [
            "Your own site search log. What people type into the search box when they cannot find something. This is gold, and roughly 90% of teams never open it.",
            "Support tickets and chat transcripts. Read the first 50 chat openings. Customers describe a problem in everyday language—not the categorised product name the marketing team uses.",
            "Reddit and niche forums. Search your category and read the titles. Forums are full of natural-language phrasing that no translation engine will ever produce.",
            "YouTube comments under competitor explainer videos. People ask questions using the exact words they would type into Google.",
            "Competitor H1s and breadcrumbs—not just page titles. Breadcrumbs reveal the competitor's category taxonomy, which is roughly a map of how the market thinks about the space.",
          ],
        },
        {
          type: "p",
          text: "Aim for 20–40 seeds in your source language. Anything narrower will give you a narrow keyword list and you will miss the long tail that makes international SEO worth doing in the first place. Anything wider and you will dilute attention.",
        },
        {
          type: "p",
          text: "One contrarian position: do not start by translating your homepage. Start with a 20-minute call with one real customer in the target country. That single call gives you better phrasing than a week of competitor scraping. Most teams skip the call because it feels slower than running a translation script. They are wrong. The script feels productive and produces nothing.",
        },
        {
          type: "h2",
          text: "3. Translation is a draft. Treat it as a hypothesis.",
        },
        {
          type: "p",
          text: "The “robot lawn mower / mähroboter” example is now cited everywhere and I am tired of seeing it. So here are three less famous ones I keep encountering:",
        },
        {
          type: "ul",
          items: [
            "“Cheap flights” → French. Direct translation: vols pas chers. Real high-volume term: vols low cost. Yes, English. The English loanword owns the French SERP.",
            "“Notebook” in Germany. Germans say Notebook far more often than Laptop for the exact same device. If your German page title says “Laptop kaufen,” you are handing traffic to whoever wrote “Notebook kaufen.”",
            "“Mobile phone” in Brazil → celular, not telefone móvel. In Portugal the same product is telemóvel. One word can multiply traffic 5–10x in one of the two markets and tank it in the other.",
          ],
        },
        {
          type: "p",
          text: "The pattern is always the same. Machine translation gives you a grammatically correct word that local users do not actually type. Real users use loanwords, slang, brand-as-category, or shortened forms. None of that comes out of a translation engine.",
        },
        {
          type: "p",
          text: "Three checks I run on every translated seed before it earns a place in the priority list:",
        },
        {
          type: "ul",
          items: [
            "Native sanity read. One fluent local reads the list aloud. Anything they pause on—“we would never say that”—becomes a kill candidate. Five minutes of work; saves months of writing.",
            "In-country autocomplete. Open Google in incognito with the target country region set. Type each seed and watch the dropdown. Autocomplete is Google telling you, free of charge, what people most commonly type next in that market.",
            "First-page commercial intent check. If the first page is dominated by Wikipedia, government sites, or pure encyclopaedic content, you picked the wrong word—even if it is technically correct. There is no buyer there.",
          ],
        },
        {
          type: "callout",
          label: "Opinion",
          text: "If a translated keyword passes all three checks, ship it. If it fails any of them, do not compromise. Go back and find the word your audience actually types. Shipping a half-right keyword and hoping Google smooths it out is how thin-content empires get built.",
        },
        {
          type: "h2",
          text: "4. Validate with data—and read it sceptically",
        },
        {
          type: "p",
          text: "Once your translated list survives the native pass, push it into Ahrefs, SEMrush, or your data source of choice. Three numbers per market are non-negotiable:",
        },
        {
          type: "ul",
          items: [
            "Country-specific monthly search volume. Not global. The global aggregate hides the cliff between markets.",
            "Keyword Difficulty (KD). Useful as a directional signal. Useless as a hard rule, especially for sites under DR 40.",
            "CPC. A surprisingly underused intent indicator.",
          ],
        },
        {
          type: "p",
          text: "A few things I learned the painful way:",
        },
        {
          type: "ul",
          items: [
            "Stop trusting KD alone. A KD of 35 looks doable on paper—but if the top 10 results are all DR 80+ retailers with a decade of backlinks, you are not realistically beating them in 12 months. Always look at competitor DR distribution before committing budget.",
            "Watch the “EU” or “Worldwide” volume trap. Some tools default to aggregate volume, which lumps in markets where you do not operate. A keyword that looks like 50,000 monthly searches collapses to 4,000 when you filter to Germany only.",
            "Treat CPC as a signal, not a target. A €0.20 CPC on your main term means advertisers are not bidding it up. Either the term is too informational or the conversion economics are bad. You want to know that before you write the brief.",
          ],
        },
        {
          type: "p",
          text: "What I cut: anything with country-level volume of zero, KD over 60 if my site is below DR 30, or top-10 SERPs that are 100% YouTube, Wikipedia, or Reddit (commercial intent absent).",
        },
        {
          type: "p",
          text: "What I promote: the surprise winners. Keywords the translator produced that I would have ignored on instinct, but the data shows 8,000 monthly searches with a KD of 18 and SERPs dominated by mid-sized affiliates. Those are the unglamorous compound-traffic plays that pay rent six months from now.",
        },
        {
          type: "h2",
          text: "5. Intent is local. Read the SERP before you write a word.",
        },
        {
          type: "p",
          text: "Intent labels (informational, commercial, transactional) are SEO 101. The problem is most teams apply the labels they learned from the English market, then copy-paste them onto translated keywords—where the actual SERP may look completely different.",
        },
        {
          type: "p",
          text: "Real example: “best CRM.”",
        },
        {
          type: "ul",
          items: [
            "US SERP: dominated by listicles from G2, Capterra, Forbes Advisor. Pure comparison content. You write a comparison article.",
            "DE SERP: the listicles get pushed down. The first page often shows direct vendor pages (HubSpot, Pipedrive, Salesforce DE). Intent is more product-direct, less editorial.",
            "JP SERP: a frequent mix of company-run owned-media articles and review aggregator sites that simply do not exist in Western markets.",
          ],
        },
        {
          type: "p",
          text: "Same query, three completely different winning formats. If you wrote a US-style listicle for the German SERP, you would lose to the vendor landing page every single time, no matter how good the listicle is.",
        },
        {
          type: "p",
          text: "How I read a SERP fast, in this exact order:",
        },
        {
          type: "ul",
          items: [
            "Top three ads. Tells you whether advertisers value the term commercially.",
            "Top three organic. What is the dominant format—product page, listicle, blog post?",
            "SERP features. People Also Ask, video carousel, Shopping, image pack. They tell you what Google thinks users want and how much space is left for you.",
            "Domain mix. Big retailers, small affiliates, news sites, or vendor pages? The mix decides whether you can realistically squeeze in.",
          ],
        },
        {
          type: "p",
          text: "Decide page format from the SERP. Not from the content calendar your CMO printed out in January.",
        },
        {
          type: "h2",
          text: "6. Cluster aggressively. Prioritise honestly.",
        },
        {
          type: "p",
          text: "Three hundred keywords for one market is not a content plan. It is anxiety in spreadsheet form.",
        },
        {
          type: "p",
          text: "Cluster keywords by topic and intent until you have 20–40 page concepts. Each page owns one primary keyword (the most-searched, intent-matched term) and 3–7 supporting long-tail terms. The supporting terms live on the same page—as H2s, FAQ blocks, body paragraphs. They do not become separate pages.",
        },
        {
          type: "p",
          text: "A note on cannibalisation: publish two pages targeting near-identical clusters and you split your own ranking strength. One primary keyword per cluster, full stop.",
        },
        {
          type: "p",
          text: "Prioritisation is where most teams cheat. They sort by volume descending and attack from the top. Wrong. The correct order is:",
        },
        {
          type: "ul",
          items: [
            "First, filter to keywords where your DR can realistically compete with the top 10—or where you can outflank with content depth no one else has produced.",
            "Then sort the survivors by volume × commercial intent.",
            "Finally, pick clusters where you already have adjacent topical authority. New territory takes longer than people promise.",
          ],
        },
        {
          type: "callout",
          label: "Hard truth",
          text: "If you do not have topical authority in this market yet, your first 5–10 pages should chase mid-volume, low-KD long tails—not the head term you wish you could rank for. The head term comes later, once you have proof you can rank for anything in this country. Skip this step and you will spend six months writing pages that never reach page two.",
        },
        {
          type: "h2",
          text: "7. Brief, ship, audit. Nothing else counts.",
        },
        {
          type: "p",
          text: "Keyword research only matters if it ships. The deliverable is a brief another human can act on, not an Excel file in a shared drive. Each brief should answer:",
        },
        {
          type: "ul",
          items: [
            "Target country, language, and audience persona.",
            "Primary keyword + 3–7 supporting long-tail terms.",
            "Search intent and the page format that fits the local SERP.",
            "Suggested H1 and H2 outline. Do not make the writer invent a structure from scratch.",
            "Internal links from existing pages with topical relevance.",
            "Success metric: ranking position, organic clicks, or both—and the threshold that means “this worked.”",
          ],
        },
        {
          type: "p",
          text: "Hand the brief to a writer who lives in the target country, or at minimum to a writer who works with a native reviewer in a tight loop. Machine-translating one English brief into five languages and assuming all five will rank is exactly how thin-content empires get built.",
        },
        {
          type: "p",
          text: "Audit cadence: 60 days after shipping the first batch, then quarterly after that. International SERPs reshuffle faster than English-market SERPs because competitive density is lower—your competitors are also still figuring it out. If a page is on page two at the 60-day mark, the right call is usually “improve,” not “abandon.” Most teams abandon too early because they have no audit ritual at all.",
        },
        {
          type: "h2",
          text: "8. The mistakes I keep watching teams make",
        },
        {
          type: "ul",
          items: [
            "Treating one language as one market. German content for Germany is not German content for Switzerland.",
            "Optimising for volume without ever opening the local SERP.",
            "Reusing meta titles across countries because “they are all in German.” A Berliner and a Viennese viewer click on different titles.",
            "Hreflang implemented wrong—every language variant pointing to a single canonical, which collapses the multi-market signal back into one.",
            "Failing to localise images, prices, dates, and units. A page that ranks but feels foreign to local visitors does not convert.",
            "Serving B2B content to a B2C audience (or vice versa) because the source page was written for a different audience and nobody re-thought it.",
            "No post-launch audit. The site quietly underperforms for nine months and eventually someone asks, “why is this not working?”",
            "Letting the marketing team approve translations. Marketing knows the product. It does not know how a 32-year-old Tokyo office worker actually searches.",
          ],
        },
        {
          type: "h2",
          text: "9. The honest tool stack",
        },
        {
          type: "p",
          text: "You do not need a stack. You need three things that work.",
        },
        {
          type: "ul",
          items: [
            "A volume + difficulty source. I use Ahrefs. SEMrush is a real alternative. Ubersuggest is not.",
            "A SERP-checking habit. Google's own search, region set correctly, in incognito. That is enough. Tooling around this is overrated.",
            "A native reviewer per market. The single highest-ROI hire on an international SEO project. The next-cheapest version is a freelancer reviewed on Upwork or Malt for less than the cost of one Ahrefs seat.",
          ],
        },
        {
          type: "p",
          text: "A multilingual keyword explorer—like the one on this site—compresses steps three through five (translation, country-level volume, intent labelling) into a single search. Use it for the first-pass filter so you are not pinballing between a translator and a keyword tool. Then verify the survivors in your main data source.",
        },
        {
          type: "h2",
          text: "Your 7-step checklist",
        },
        {
          type: "ul",
          items: [
            "Define country × language pairs, not language plans.",
            "Mine 20–40 seed keywords from search logs, support tickets, forums, and one real customer call.",
            "Translate as a draft, then run native, autocomplete, and SERP checks before anything moves forward.",
            "Pull country-specific volume, KD, and CPC. Cut the dead. Promote the surprises.",
            "Read the target-country SERP and let it decide your page format.",
            "Cluster into 20–40 page concepts. One primary keyword per page. Prioritise where you can actually win.",
            "Brief, ship, and audit at 60 days. Then quarterly. Forever.",
          ],
        },
        {
          type: "p",
          text: "International SEO is not hard. It is just specific. Most teams lose because they want the work to be language-agnostic, when the work is country-specific. The teams that win pick fewer markets, do them properly, and re-audit faster than the competition.",
        },
        {
          type: "p",
          text: "If you want to compress the seed → translation → validation loop into one tool, the keyword explorer on this site is built for exactly that workflow. Drop in a seed, pick a country, and read what people actually type. Then come back here and brief the page.",
        },
      ],
    },
    zh: {
      title: "国际 SEO 的关键词研究，我是这么干的",
      excerpt:
        "大多数国际 SEO 的建议都是「翻译首页 + 上 hreflang」。这套几乎从来不奏效。下面是我实际跑的流程——具体到判断、阈值，和我反复看到团队踩的坑。",
      blocks: [
        {
          type: "p",
          text: "「国际 SEO」可能是营销圈里最被误解的一个词。翻译首页、配上 hreflang、然后等流量。大部分团队跑的就是这个流程。几乎从来不奏效。",
        },
        {
          type: "p",
          text: "我见过 6 位数预算的多语言上线项目，跑一整年自然点击维持在个位数。每次的问题都一样：他们优化的是「翻译器看上去对」的词，而不是「目标市场真的会搜」的词。",
        },
        {
          type: "p",
          text: "好消息是，真正要做的事并不复杂，只是必须够具体。下面是我把一个站点扩展到新国家时实际跑的流程，按顺序写，包含我会实际下的判断。如果你想看的是一篇「客观全面」的指南，那这篇不是。我有观点，而这些观点能帮你不烧掉一年。",
        },
        {
          type: "h2",
          text: "一、别再按「语言」想，按「国家 × 语言」想",
        },
        {
          type: "p",
          text: "如果这篇文章你只记一句，记这句：在 SEO 里，「语言」是没有用的工作单位。",
        },
        {
          type: "p",
          text: "最贵的错误我见得最多的是：「我们下季度做德语区。」DACH 不是一个市场，是三个国家、三套零售生态、三种默认搜索结果。Roboter-Rasenmäher 在德国和奥地利的曲线完全不同；瑞士「Auto kaufen」前 10 个域名和德国几乎不重合。把它们当一个市场处理，预算就是这么烧光的。",
        },
        {
          type: "p",
          text: "类似的坑哪里都有：",
        },
        {
          type: "ul",
          items: [
            "墨西哥西班牙语用 computadora，西班牙本土用 ordenador。同一个产品，两个完全不同的关键词。",
            "巴西葡萄牙语说 celular，欧洲葡萄牙语说 telemóvel。一个词错，就走错国家。",
            "英国人搜 trainers，美国人搜 sneakers，澳大利亚人按品牌混着用。",
            "魁北克法语和巴黎法语在科技词上分歧大到 SERP 完全不同——尽管标题语言都是「法语」。",
          ],
        },
        {
          type: "p",
          text: "你真正的工作单位是「国家 × 语言对」，不是语言。瑞士德语版和德国德语版是两份计划、两套数据、两个优先级清单——就算正文能复用 70%。把它们捏成一个项目，Google 的本地意图层会悄悄惩罚你。",
        },
        {
          type: "callout",
          label: "暴论",
          text: "如果你的项目计划写「下季度上德语」，这份计划已经错了。改成「德国-de 和 奥地利-de」，看看 scope 会膨胀多少。装作这个 scope 不存在的团队，就是 9 个月后疑惑「流量为什么平」的同一批团队。",
        },
        {
          type: "h2",
          text: "二、种子词要会挖。我见过的大多数清单是垃圾。",
        },
        {
          type: "p",
          text: "我审过的大多数种子词清单，本质是公司「产品功能页」的拷贝。但那里不是关键词的来源，是关键词的终点——市场部已经把语言「漂白」过一遍了。",
        },
        {
          type: "p",
          text: "有用的种子词来自这些地方——用户用自己的话描述问题、还没学会公司话术之前：",
        },
        {
          type: "ul",
          items: [
            "你自己的站内搜索日志。用户在搜索框里输入但找不到的词。这是金矿，大约 90% 的团队从来不打开。",
            "客服工单和聊天记录。翻最近 50 段开场白。用户描述的是问题，不是产品——而问题，才是 Google 上被搜的形态。",
            "Reddit 和细分论坛。搜你的品类，读标题。论坛里全是机器翻译永远翻不出来的口语化表达。",
            "YouTube 评论区。特别是竞品讲解视频下面，用户提问用的就是他们在 Google 里会敲的词。",
            "竞品的 H1 与面包屑导航，不只是标题。面包屑暴露竞品的品类分类——基本等同于市场对这个空间的心智地图。",
          ],
        },
        {
          type: "p",
          text: "源语言侧目标 20–40 个种子。再窄，你的关键词列表就会窄，错过国际 SEO 真正值得做的长尾。再宽，注意力会被稀释，最后什么都做不深。",
        },
        {
          type: "p",
          text: "一个反共识的建议：不要从翻译首页开始。先约一个目标国家的真实用户，聊 20 分钟。一通电话拿到的措辞，比一周扒竞品都准。多数团队跳过这一步是因为它比跑翻译脚本慢。脚本看起来高效，但什么都生产不出来。",
        },
        {
          type: "h2",
          text: "三、翻译是初稿。把它当假设，不是答案。",
        },
        {
          type: "p",
          text: "「robot lawn mower / mähroboter」这个例子已经被引用到烂了。换三个没那么有名的：",
        },
        {
          type: "ul",
          items: [
            "「Cheap flights」翻成法语：直译是 vols pas chers，实际高量词是 vols low cost——对，英语 loanword。英语借词在这条 SERP 上完胜。",
            "「Notebook」在德国：德国人说 Notebook 比说 Laptop 多得多，同一种设备。德语标题写「Laptop kaufen」，就是把流量送给写「Notebook kaufen」的人。",
            "「手机」在巴西：用户输入 celular，不输 telefone móvel；葡萄牙人输入的是 telemóvel。一个词的差别，可以让两个市场之一的流量差 5–10 倍。",
          ],
        },
        {
          type: "p",
          text: "规律不变：机器翻译给你「语法对」的词，但本地用户实际不打。真实用户用借词、俚语、品牌词当品类词、缩写——这些翻译引擎都生产不出来。",
        },
        {
          type: "p",
          text: "每个翻译过的种子，进优先级清单前必跑三件事：",
        },
        {
          type: "ul",
          items: [
            "母语者通读。找一个住在目标国的母语者，把单词列表念一遍。任何一个让他卡顿、说「我们不这么讲」的，列为击杀候选。五分钟的活，省下几个月。",
            "当地区的 Google 自动补全。区域切到目标国家，无痕模式，逐个种子输入，看下拉框。自动补全是 Google 免费告诉你的「当地最常见的搜索补全」。",
            "首页商业意图检查。搜出来的首页如果被维基百科、政府站、纯百科类内容霸占，那这个词哪怕语法上对，也没有买家——别浪费产能。",
          ],
        },
        {
          type: "callout",
          label: "观点",
          text: "三项都过，上。任一项没过，别凑合——回去找用户真正在打的那个词。上一个「半对」的词，指望 Google 帮你把缺口抹平，这是 thin content 帝国的起点。",
        },
        {
          type: "h2",
          text: "四、数据要看，但要带怀疑去读",
        },
        {
          type: "p",
          text: "母语审阅过的清单，丢进 Ahrefs / SEMrush 或同类数据源。每个市场看三个数，不能省：",
        },
        {
          type: "ul",
          items: [
            "目标国家的月搜索量。不是全球总和。全球数字会掩盖国家之间的悬崖。",
            "关键词难度 KD。作为方向性参考有用，作为硬规则没用，尤其对 DR 40 以下的站。",
            "CPC。被严重低估的意图指标。",
          ],
        },
        {
          type: "p",
          text: "我后来吃亏吃出来的几件事：",
        },
        {
          type: "ul",
          items: [
            "别单独信 KD。KD 35 看起来「能打」，但如果前 10 全是 DR 80+、做了十年外链的老牌零售商，你 12 个月内打不过去。提交清单前一定看 SERP 的竞品 DR 分布。",
            "小心「EU / Worldwide」陷阱。有些工具默认显示「欧盟」或「全球」搜索量，把你不做的市场都算进去。看上去月搜 50,000 的词，过滤到德国可能只剩 4,000。",
            "CPC 当信号读，不当目标读。主关键词 CPC € 0.20 通常意味着广告商不愿出价。要么意图偏信息型，要么这个品类的转化经济不好。提前知道，永远比上线后才发现强。",
          ],
        },
        {
          type: "p",
          text: "砍掉的：本地搜索量为零、KD 高于 60 但你 DR 不到 30、前 10 全是 YouTube / Wikipedia / Reddit（商业意图缺失）。",
        },
        {
          type: "p",
          text: "提级的：意外赢家。翻译跑出来的、你本来直觉会忽略，但数据显示月搜 8,000、KD 18、SERP 由中型联盟站主导的词。这些不性感、但是半年后真正给你交房租的复利流量。",
        },
        {
          type: "h2",
          text: "五、意图是当地的。写一个字之前先读 SERP。",
        },
        {
          type: "p",
          text: "意图分类（信息型、商业型、交易型）是 SEO 入门内容。问题在于，多数团队是按英语市场的标准做的分类，然后复制粘贴到别的市场——而别的市场的真实 SERP 长得完全不一样。",
        },
        {
          type: "p",
          text: "举例：「best CRM」。",
        },
        {
          type: "ul",
          items: [
            "美国 SERP：G2、Capterra、Forbes Advisor 主导，全是榜单文。该做对比文。",
            "德国 SERP：榜单文常常被压下去，首页大量是 HubSpot、Pipedrive、Salesforce DE 的厂商落地页。意图更偏「直接进产品」。",
            "日本 SERP：经常是企业自营 owned media + 评测聚合站的混合，欧美几乎没有这种生态位。",
          ],
        },
        {
          type: "p",
          text: "同一个词，三种完全不同的胜出页面形态。如果你按美式榜单文写德语版，每次都会输给厂商落地页——不管你的榜单文写得多好。",
        },
        {
          type: "p",
          text: "我读 SERP 的固定顺序：",
        },
        {
          type: "ul",
          items: [
            "前三个广告。判断广告主愿不愿意出钱，决定这个词的商业价值。",
            "前三个自然排名。主导的页面形态是什么——产品页、榜单、博客？",
            "SERP 特征。People Also Ask、视频卡、Shopping、图片栏。它们告诉你 Google 认为用户想要什么，以及给你留了什么空位。",
            "域名构成。大零售商、小联盟站、新闻站、还是厂商站？域名构成决定你能不能挤进去。",
          ],
        },
        {
          type: "p",
          text: "页面形态由 SERP 决定。不由 CMO 一月份打印出来的内容日历决定。",
        },
        {
          type: "h2",
          text: "六、大力做聚类，诚实排优先级",
        },
        {
          type: "p",
          text: "一个市场 300 个关键词，不是内容计划，是 Excel 焦虑症。",
        },
        {
          type: "p",
          text: "按主题 + 意图聚类，聚到 20–40 个页面概念。每页拥有一个主词（搜索量最高、意图匹配）+ 3–7 个长尾。长尾在同一页面里——做成 H2、FAQ、正文段落，**不要另起页面**。",
        },
        {
          type: "p",
          text: "关于自家关键词竞食：两个页面打几乎一样的词，你只是把自己的排名权重分掉。一个聚类一个主词，定死。",
        },
        {
          type: "p",
          text: "排优先级是大多数团队偷懒的地方。他们按搜索量降序排，从最大的开始打。错了。正确顺序是：",
        },
        {
          type: "ul",
          items: [
            "先过滤出你的 DR 能竞争（或能用内容深度绕过去）的词。",
            "再按 搜索量 × 商业意图 排序。",
            "最后挑你已有相邻话题权重的聚类。新领域的爬坡比所有人说的都久。",
          ],
        },
        {
          type: "callout",
          label: "狠话",
          text: "如果你目前没有话题权重，前 5–10 页面就该打中等搜索量、低 KD 的长尾，**不要追你最想排的头词**。头词留到你能在这个市场证明自己「至少能排上去」之后。跳过这一步，你接下来六个月就是在写永远进不了第二页的页面。",
        },
        {
          type: "h2",
          text: "七、写 Brief，上线，复盘。其他都不重要。",
        },
        {
          type: "p",
          text: "关键词研究只有最后能上线才有意义。交付物是「另一个人拿到就能执行」的 Brief，不是一份 Excel。每份 Brief 要回答：",
        },
        {
          type: "ul",
          items: [
            "目标国家、语言、读者画像。",
            "主关键词 + 3–7 个长尾词。",
            "搜索意图 + 当地 SERP 上能打的页面形态。",
            "建议的 H1 与 H2 大纲。不要让写手自己从零编结构。",
            "已有页面里有话题相关性的内链锚点。",
            "成功指标：排名位置、自然点击、还是两者都看——并写明「什么算成」的阈值。",
          ],
        },
        {
          type: "p",
          text: "把 Brief 交给一个住在目标国的写手，至少也要交给一个有母语审阅协作的写手。把英文 Brief 机翻成 5 种语言、然后假设 5 个市场都会自然排上去——这就是 thin content 帝国的搭建方式。",
        },
        {
          type: "p",
          text: "复盘节奏：第一批页面上线后 60 天复盘一次，之后每季度一次。国际 SERP 的洗牌速度比英语市场快，因为整体竞争密度低——对手也还在摸索。如果 60 天还在第二页，结论通常是「改」，不是「放弃」。多数团队过早放弃，是因为他们根本没有复盘机制。",
        },
        {
          type: "h2",
          text: "八、我反复看到团队踩的坑",
        },
        {
          type: "ul",
          items: [
            "把一种语言当一个市场。给德国用的德语内容不是给瑞士用的德语内容。",
            "只看搜索量，从来不打开当地 SERP。",
            "多市场复用同一份 meta title，因为「都是德语」——但柏林的德国人和维也纳的奥地利人点不同的标题。",
            "Hreflang 写错——所有语言版都指向同一个 canonical，把多市场信号塌缩回单一信号。",
            "没本地化的图片、价格、日期、单位。页面排上去但对当地用户来说「外人感」很重，转化不会有。",
            "B2B 内容拿给 B2C 受众用（或反过来），因为源页面本来面向另一类人，没人重写。",
            "上线后不复盘。9 个月默默不出量，最后才有人问「为什么不行」。",
            "让市场部审定翻译。他们懂产品，但不懂东京 32 岁上班族实际怎么搜索。",
          ],
        },
        {
          type: "h2",
          text: "九、诚实的工具配置",
        },
        {
          type: "p",
          text: "不需要一整套 stack。需要三样东西能用就够。",
        },
        {
          type: "ul",
          items: [
            "搜索量 + KD 数据源。我用 Ahrefs。SEMrush 是替代品。Ubersuggest 不是。",
            "看 SERP 的习惯。Google 自己的搜索 + 地区设置 + 无痕，就够了。这件事工具化是被高估的。",
            "每个市场一个母语审阅。国际 SEO 项目里 ROI 最高的招聘。最便宜的替代方案是 Upwork / Malt 上的自由职业者，花费低于一个 Ahrefs 席位。",
          ],
        },
        {
          type: "p",
          text: "多语言关键词探索工具——比如本站这个——把第三到第五步（翻译、国家级搜索量、意图标签）压缩到一次搜索里。用它做第一轮快速筛，幸存者再到你主用的工具里二次验证。",
        },
        {
          type: "h2",
          text: "七步清单",
        },
        {
          type: "ul",
          items: [
            "定义「国家 × 语言」配对，不是「做哪几种语言」。",
            "从站内搜索、客服工单、论坛、一通用户电话里挖 20–40 个种子。",
            "翻译是初稿，必须过母语 + 自动补全 + SERP 三关，再往下走。",
            "拉出目标国家的搜索量、KD、CPC；砍死的、提级意外赢家。",
            "写页面前先读目标国 SERP，让 SERP 决定页面形态。",
            "聚类成 20–40 个页面，每页一个主词，按你打得过的优先级排序。",
            "写 Brief、上线、60 天复盘，然后每季度。永远。",
          ],
        },
        {
          type: "p",
          text: "国际 SEO 不难，只是要够具体。多数团队输是因为他们希望工作可以「跨语言通吃」，但实际工作必须「按国家分别处理」。赢的团队选更少的市场、做得更细、复盘比对手勤。",
        },
        {
          type: "p",
          text: "想把「种子 → 翻译 → 验证」这一段压缩到一个工具里，本站首页的关键词工具就是按这个流程设计的。塞一个种子词、选一个国家，看用户真正在打什么，然后回到这里写 Brief。",
        },
      ],
    },
    fr: {
      title: "Recherche de mots-clés en SEO international : ma vraie méthode",
      excerpt:
        "La plupart des conseils en SEO international se résument à « traduire la homepage et coller hreflang ». Ça ne marche presque jamais. Voici le workflow que j'utilise réellement—décisions, seuils, et les erreurs que je vois en boucle.",
      blocks: [
        {
          type: "p",
          text: "« SEO international » est probablement l'expression la plus mal comprise du marketing. Traduire la page d'accueil, brancher hreflang, attendre le trafic. C'est le playbook que la plupart des équipes appliquent. Ça ne fonctionne presque jamais.",
        },
        {
          type: "p",
          text: "J'ai vu des projets multilingues à six chiffres produire un trafic hebdomadaire à un chiffre pendant un an entier. Le pattern est toujours le même : ils optimisent des mots-clés qui « semblent corrects dans un traducteur » et qui n'ont aucune traction sur le marché qu'ils ciblent réellement.",
        },
        {
          type: "p",
          text: "La bonne nouvelle : le vrai travail n'est pas compliqué. Juste précis. Voici le workflow que j'utilise pour étendre un site à un nouveau pays, dans l'ordre où je le fais, avec les décisions que je prends réellement. Si vous cherchez un panorama poli et équilibré, ce n'est pas ce billet. J'ai des avis, et ce sont ces avis qui vous évitent de brûler un an.",
        },
        {
          type: "h2",
          text: "1. Arrêtez de penser en langues. Pensez en couples pays × langue.",
        },
        {
          type: "p",
          text: "S'il ne reste qu'une seule chose : en SEO, « la langue » n'est pas une unité de travail utile.",
        },
        {
          type: "p",
          text: "L'erreur la plus coûteuse que je vois est « on va faire du contenu allemand pour la DACH ». DACH, ce sont trois pays, trois économies, trois paysages retail, trois SERP par défaut différentes. Roboter-Rasenmäher ne suit pas la même courbe en Allemagne et en Autriche. Le top 10 des domaines pour « Auto kaufen » en Suisse n'a presque rien en commun avec celui d'Allemagne. Traitez ça comme un seul marché et le budget disparaît.",
        },
        {
          type: "p",
          text: "Le même piège, partout :",
        },
        {
          type: "ul",
          items: [
            "L'espagnol mexicain dit computadora ; l'espagnol castillan dit ordenador. Même produit, deux mots-clés totalement différents.",
            "Le portugais brésilien dit celular ; le portugais européen dit telemóvel. Un mot mal choisi vous envoie dans le mauvais pays.",
            "Les Britanniques cherchent « trainers », les Américains « sneakers », les Australiens alternent selon la marque.",
            "Le français québécois diverge tellement du français parisien sur les sujets tech que certaines requêtes renvoient des SERP totalement différentes—même si la langue affichée est « français ».",
          ],
        },
        {
          type: "p",
          text: "Votre vraie unité de travail, c'est la paire pays × langue. La Suisse-fr est un plan séparé, des données séparées, une priorisation séparée par rapport à la France-fr—même si la copie est réutilisable à 70 %. Mélangez les deux et la couche d'intention locale de Google vous punit en silence.",
        },
        {
          type: "callout",
          label: "Avis tranché",
          text: "Si votre plan dit « on lance en allemand le trimestre prochain », il est déjà faux. Réécrivez-le en « Allemagne-de et Autriche-de » et regardez le scope changer. Les équipes qui ignorent ce scope sont exactement celles qui s'étonnent que le trafic soit plat au mois 9.",
        },
        {
          type: "h2",
          text: "2. Minez vos seeds correctement. La plupart des listes sont des poubelles.",
        },
        {
          type: "p",
          text: "La plupart des listes de seeds que je revois sont une copie de la page « fonctionnalités produit » de l'entreprise. Mais ce n'est pas la source des mots-clés. C'est leur destination—après que le marketing a déjà aseptisé la langue.",
        },
        {
          type: "p",
          text: "Une liste utile vient des endroits où des clients réels décrivent leur problème avec leurs propres mots, avant d'avoir appris le vocabulaire de l'entreprise :",
        },
        {
          type: "ul",
          items: [
            "Votre propre log de recherche interne. Ce que les utilisateurs tapent dans la barre quand ils ne trouvent pas. C'est de l'or, et 90 % des équipes ne l'ouvrent jamais.",
            "Tickets support et transcripts de chat. Lisez les 50 premières ouvertures. Les clients décrivent un problème en langage courant—pas le nom catégorisé que le marketing utilise.",
            "Reddit et forums de niche. Cherchez votre catégorie et lisez les titres. Les forums regorgent de formulations naturelles qu'aucun traducteur ne produit.",
            "Commentaires YouTube sous les vidéos explicatives concurrentes. Les gens posent des questions avec les mots exacts qu'ils taperaient dans Google.",
            "H1 et fil d'Ariane des concurrents—pas seulement les meta titles. Le fil d'Ariane révèle la taxonomie de catégorie du concurrent. C'est en gros une carte de comment le marché pense la catégorie.",
          ],
        },
        {
          type: "p",
          text: "Visez 20–40 seeds en langue source. Plus étroit, votre liste de mots-clés sera étroite et vous raterez la longue traîne qui fait tout l'intérêt du SEO international. Plus large, l'attention se dilue, et au final rien ne se fait en profondeur.",
        },
        {
          type: "p",
          text: "Une position à contre-courant : ne commencez pas par traduire la homepage. Commencez par un appel de 20 minutes avec un vrai client dans le pays cible. Cet appel vous donne de meilleures formulations qu'une semaine de scraping concurrentiel. La plupart des équipes sautent cette étape parce qu'elle paraît plus lente. Elles ont tort. Le script paraît productif et ne produit rien.",
        },
        {
          type: "h2",
          text: "3. La traduction est un brouillon. Traitez-la comme une hypothèse.",
        },
        {
          type: "p",
          text: "L'exemple « robot lawn mower / mähroboter » est cité partout et je n'en peux plus. Voici trois exemples moins célèbres que je croise en boucle :",
        },
        {
          type: "ul",
          items: [
            "« Cheap flights » → français. Traduction directe : vols pas chers. Mot-clé à fort volume réel : vols low cost. Oui, l'anglais. Le loanword anglais possède la SERP française.",
            "« Notebook » en Allemagne. Les Allemands disent Notebook bien plus souvent que Laptop pour le même appareil. Un titre allemand « Laptop kaufen » donne le trafic à celui qui écrit « Notebook kaufen ».",
            "« Mobile phone » au Brésil → celular, pas telefone móvel. Au Portugal, c'est telemóvel. Un seul mot peut multiplier le trafic par 5–10 dans l'un des deux marchés et le couler dans l'autre.",
          ],
        },
        {
          type: "p",
          text: "Le pattern est constant : la traduction automatique donne le mot grammaticalement correct que les utilisateurs réels ne tapent pas. Les vrais utilisateurs utilisent des loanwords, de l'argot, des marques comme catégories, des formes abrégées. Rien de tout ça ne sort d'un moteur de traduction.",
        },
        {
          type: "p",
          text: "Trois vérifications systématiques avant qu'un seed traduit gagne sa place dans la priorisation :",
        },
        {
          type: "ul",
          items: [
            "Lecture native. Un locuteur natif du pays lit la liste à voix haute. Tout terme sur lequel il bute (« on ne dit jamais ça ») devient candidat à la suppression. Cinq minutes de travail, des mois de rédaction sauvés.",
            "Autocomplete dans la région cible. Google en navigation privée, région du pays cible, tapez chaque seed, observez le menu déroulant. Google vous donne gratuitement les complétions les plus fréquentes du marché.",
            "Vérification d'intention commerciale. Si la première page est dominée par Wikipedia, des sites gouvernementaux ou du contenu purement encyclopédique, vous avez choisi le mauvais mot—même grammaticalement parfait. Il n'y a pas d'acheteur.",
          ],
        },
        {
          type: "callout",
          label: "Position",
          text: "Si une traduction passe les trois tests, livrez. Si elle en rate ne serait-ce qu'un seul, ne compromettez pas—retournez chercher le mot que votre audience tape réellement. Livrer un mot « à moitié juste » en espérant que Google rattrape le gap, c'est le point de départ des empires de thin content.",
        },
        {
          type: "h2",
          text: "4. Valider avec des données—en lecture sceptique",
        },
        {
          type: "p",
          text: "Une fois la liste validée par un natif, passez-la dans Ahrefs, SEMrush ou votre source de données. Trois chiffres par marché, non négociables :",
        },
        {
          type: "ul",
          items: [
            "Volume mensuel par pays. Pas global. L'agrégat global cache la falaise entre marchés.",
            "Difficulté du mot-clé (KD). Signal directionnel utile. Règle dure inutile, surtout pour un site sous DR 40.",
            "CPC. Indicateur d'intention sérieusement sous-utilisé.",
          ],
        },
        {
          type: "p",
          text: "Quelques leçons apprises à mes dépens :",
        },
        {
          type: "ul",
          items: [
            "Ne faites pas confiance au KD seul. KD 35 semble « faisable » sur le papier—mais si le top 10 est composé de revendeurs DR 80+ avec dix ans de backlinks, vous ne les battez pas en 12 mois. Regardez toujours la distribution DR des concurrents avant d'engager un budget.",
            "Méfiez-vous des agrégats « UE » ou « Mondial ». Certains outils affichent ces volumes par défaut, et mélangent des marchés où vous n'opérez pas. Un mot-clé à 50 000 recherches mensuelles peut tomber à 4 000 quand vous filtrez sur la France seule.",
            "Le CPC est un signal, pas une cible. Un CPC à 0,20 € sur votre mot-clé principal signifie que les annonceurs ne misent pas dessus. Soit l'intention est trop informationnelle, soit l'économie de conversion est mauvaise. Mieux vaut le savoir avant de rédiger le brief.",
          ],
        },
        {
          type: "p",
          text: "Ce que je coupe : tout mot-clé à volume nul localement, KD > 60 si je suis sous DR 30, top-10 100 % YouTube / Wikipedia / Reddit (intention commerciale absente).",
        },
        {
          type: "p",
          text: "Ce que je remonte : les bonnes surprises. Mots-clés que le traducteur a sortis et que j'aurais ignorés à l'instinct, mais que les données montrent à 8 000 recherches mensuelles, KD 18, SERP dominée par des affiliés moyens. C'est là votre trafic composé des semaines suivantes—pas glamour, mais c'est ce qui paie le loyer.",
        },
        {
          type: "h2",
          text: "5. L'intention est locale. Lisez la SERP avant d'écrire le moindre mot.",
        },
        {
          type: "p",
          text: "Classer l'intention (informationnelle, commerciale, transactionnelle) est du SEO de base. Le problème : la plupart des équipes appliquent les étiquettes apprises sur le marché anglophone, puis les recopient sur les traductions—alors que la SERP réelle est complètement différente.",
        },
        {
          type: "p",
          text: "Exemple concret : « best CRM ».",
        },
        {
          type: "ul",
          items: [
            "SERP US : G2, Capterra, Forbes Advisor en haut. Listicles purs. Vous écrivez un comparatif.",
            "SERP DE : les listicles sont souvent poussés vers le bas. La première page montre des pages éditeurs (HubSpot, Pipedrive, Salesforce DE). Intention plus produit-direct.",
            "SERP JP : mélange fréquent d'owned media d'entreprises et d'agrégateurs de reviews qui n'existent pas en Occident.",
          ],
        },
        {
          type: "p",
          text: "Même requête, trois formats gagnants totalement différents. Un listicle façon US sur la SERP DE perd à chaque fois face à la landing page éditeur—peu importe la qualité du listicle.",
        },
        {
          type: "p",
          text: "Comment je lis une SERP rapidement, dans cet ordre exact :",
        },
        {
          type: "ul",
          items: [
            "Trois premières annonces. Indique si les annonceurs valorisent commercialement le mot.",
            "Trois premiers résultats organiques. Quel est le format dominant—produit, listicle, blog ?",
            "SERP features. People Also Ask, carrousel vidéo, Shopping, image pack. Ils disent ce que Google pense que les utilisateurs veulent, et combien d'espace il vous reste.",
            "Mix de domaines. Grands retailers, petits affiliés, médias, éditeurs ? Le mix décide si vous pouvez réellement vous insérer.",
          ],
        },
        {
          type: "p",
          text: "Le format de page se décide à partir de la SERP. Pas du calendrier de contenu que votre CMO a imprimé en janvier.",
        },
        {
          type: "h2",
          text: "6. Clusteriser à fond, prioriser honnêtement",
        },
        {
          type: "p",
          text: "Trois cents mots-clés pour un marché, ce n'est pas un plan de contenu. C'est de l'angoisse en feuille de calcul.",
        },
        {
          type: "p",
          text: "Regroupez par thème et intention jusqu'à obtenir 20–40 concepts de page. Chaque page possède un mot-clé principal (le plus recherché et le plus aligné sur l'intention) et 3 à 7 longues traînes de support. Les longues traînes vivent dans la même page—H2, FAQ, corps. **Elles ne deviennent pas des pages distinctes.**",
        },
        {
          type: "p",
          text: "Note sur la cannibalisation : si vous publiez deux pages sur des clusters quasi identiques, vous divisez votre propre force de positionnement. Un mot-clé principal par cluster, point.",
        },
        {
          type: "p",
          text: "La priorisation, c'est là que la plupart des équipes trichent. Tri par volume descendant, attaque par le haut. Faux. Le bon ordre :",
        },
        {
          type: "ul",
          items: [
            "D'abord, filtrez les mots où votre DR peut rivaliser avec le top 10—ou que vous pouvez contourner par une profondeur de contenu que personne d'autre n'a produite.",
            "Ensuite, triez les survivants par volume × intention commerciale.",
            "Enfin, choisissez les clusters où vous avez déjà une autorité thématique adjacente. Un terrain neuf prend toujours plus de temps que ce qu'on promet.",
          ],
        },
        {
          type: "callout",
          label: "Vérité dure",
          text: "Si vous n'avez pas encore d'autorité thématique sur ce marché, vos 5 à 10 premières pages doivent viser des longues traînes à volume moyen et faible KD—pas la tête de pont que vous rêvez d'atteindre. La tête de pont vient plus tard, une fois prouvé que vous pouvez classer quoi que ce soit sur ce pays. Sautez cette étape et vous passez six mois à écrire des pages qui n'atteignent jamais la page 2.",
        },
        {
          type: "h2",
          text: "7. Brief, livrer, auditer. Rien d'autre ne compte.",
        },
        {
          type: "p",
          text: "La recherche de mots-clés n'a de valeur que si elle livre. Le livrable est un brief actionnable—pas un Excel dans un drive partagé. Chaque brief doit répondre à :",
        },
        {
          type: "ul",
          items: [
            "Pays cible, langue, persona.",
            "Mot-clé principal + 3 à 7 longues traînes.",
            "Intention de recherche et format de page qui colle à la SERP locale.",
            "Plan H1 / H2 suggéré. N'obligez pas le rédacteur à inventer la structure depuis zéro.",
            "Maillage interne depuis les pages existantes pertinentes.",
            "Métrique de succès : position, clics organiques, ou les deux—et le seuil qui signifie « ça a marché ».",
          ],
        },
        {
          type: "p",
          text: "Confiez le brief à un rédacteur basé dans le pays cible, ou au minimum à un rédacteur travaillant en boucle serrée avec un relecteur natif. Traduire automatiquement un brief anglais en cinq langues en espérant que cinq marchés rankent—c'est exactement comme ça que se construisent les empires de thin content.",
        },
        {
          type: "p",
          text: "Cadence d'audit : J+60 après la première vague, puis trimestriellement. Les SERP internationales bougent plus vite que les SERP anglophones parce que la densité concurrentielle est plus faible—vos concurrents tâtonnent aussi. Si une page est en page 2 à J+60, la bonne décision est « améliorer », pas « abandonner ». La plupart des équipes abandonnent trop tôt parce qu'elles n'ont aucun rituel d'audit.",
        },
        {
          type: "h2",
          text: "8. Les erreurs que je vois en boucle",
        },
        {
          type: "ul",
          items: [
            "Traiter une langue comme un seul marché. Du contenu allemand pour l'Allemagne n'est pas du contenu allemand pour la Suisse.",
            "Optimiser le volume sans jamais ouvrir la SERP locale.",
            "Réutiliser les meta titles entre pays parce que « c'est tout du français ». Un Parisien et un Bruxellois ne cliquent pas sur les mêmes accroches.",
            "Hreflang mal implémenté—toutes les variantes pointent vers un même canonical, ce qui efface le signal multi-marché.",
            "Pas de localisation des images, prix, dates, unités. Une page qui rank mais « sent l'étranger » ne convertit pas.",
            "Servir du contenu B2B à une audience B2C (ou l'inverse) parce que la page source visait un autre public et que personne ne l'a repensée.",
            "Pas d'audit post-lancement. Le site sous-performe pendant 9 mois en silence, et quelqu'un finit par demander « pourquoi ça ne marche pas ? ».",
            "Faire valider les traductions par l'équipe marketing. Elle connaît le produit. Pas la façon dont un cadre tokyoïte de 32 ans cherche réellement.",
          ],
        },
        {
          type: "h2",
          text: "9. La stack outils honnête",
        },
        {
          type: "p",
          text: "Pas besoin d'une stack. Trois choses qui fonctionnent suffisent.",
        },
        {
          type: "ul",
          items: [
            "Une source de volume + difficulté. J'utilise Ahrefs. SEMrush est une alternative sérieuse. Ubersuggest non.",
            "Une habitude de lecture de SERP. Google avec paramètre de région, en navigation privée. C'est tout. L'outillage autour est surestimé.",
            "Un relecteur natif par marché. Le recrutement avec le ROI le plus élevé sur un projet de SEO international. Alternative low-cost : un freelance trouvé sur Upwork / Malt pour moins cher qu'une seat Ahrefs.",
          ],
        },
        {
          type: "p",
          text: "Un explorateur multilingue—comme celui sur ce site—compresse les étapes 3 à 5 (traduction, volume par pays, étiquetage d'intention) en une seule recherche. Utilisez-le pour le premier passage rapide ; ramenez ensuite les survivants dans votre outil principal pour validation.",
        },
        {
          type: "h2",
          text: "Checklist en 7 étapes",
        },
        {
          type: "ul",
          items: [
            "Définir des couples pays × langue, pas des plans de langues.",
            "Miner 20–40 seeds depuis le search interne, le support, les forums et un appel client réel.",
            "Traduire comme un brouillon, puis tests natif + autocomplete + SERP avant tout reste.",
            "Tirer volume, KD, CPC par pays. Couper les morts. Remonter les surprises.",
            "Lire la SERP du pays cible et la laisser décider du format de page.",
            "Clusteriser en 20–40 concepts de page. Un mot-clé principal par page. Prioriser là où vous pouvez réellement gagner.",
            "Brief, ship, audit à J+60. Puis trimestriel. Pour toujours.",
          ],
        },
        {
          type: "p",
          text: "Le SEO international n'est pas difficile. Il est juste précis. Les équipes qui perdent veulent du travail « pan-langue », alors que le travail est « pays par pays ». Les équipes qui gagnent choisissent moins de marchés, les traitent en profondeur, et auditent plus vite que la concurrence.",
        },
        {
          type: "p",
          text: "Si vous voulez compresser la boucle seed → traduction → validation dans un outil, l'explorateur de mots-clés de ce site est conçu exactement pour ce workflow. Insérez une racine, choisissez un pays, lisez ce que les gens tapent réellement. Puis revenez ici rédiger le brief.",
        },
      ],
    },
  },
]
