import type { BlogPost } from "@/lib/blog"

export const blogPosts: BlogPost[] = [
  {
    slug: "international-seo-keyword-research",
    publishedAt: "2026-05-19",
    readMinutes: 8,
    en: {
      title: "How to Do Keyword Research for International SEO: A 7-Step Workflow",
      excerpt:
        "A practical framework to find the keywords your target market actually searches for—not just the ones a translator hands back.",
      blocks: [
        {
          type: "p",
          text: "When you launch a website in a second country, the temptation is simple: take your top keywords, run them through Google Translate, and publish. Months later, the traffic curve is still flat. The problem is rarely your product or content quality—it is that you optimised for translated keywords instead of local keywords.",
        },
        {
          type: "p",
          text: "This guide walks through a repeatable workflow that holds up for cross-border e-commerce stores, SaaS landing pages, and content sites entering new markets. Each step has a concrete output you can hand to the next person on the team.",
        },
        {
          type: "h2",
          text: "1. Define markets, not just languages",
        },
        {
          type: "p",
          text: "Most teams start with a sentence like “we want to rank in German, French, and Spanish.” That is the wrong unit. Search behaviour shifts by country, not by language. American shoppers search for “trash can,” British shoppers for “rubbish bin.” French Canadians and Parisians often pick different verbs for the same task.",
        },
        {
          type: "p",
          text: "Output of this step: a clear table of country × language pairs you actually want to win in—Germany-de, Austria-de, Switzerland-de listed separately, not lumped together.",
        },
        {
          type: "h2",
          text: "2. Build a seed keyword list in your source language",
        },
        {
          type: "p",
          text: "Before going multilingual, get the foundation right. List 10–30 seed keywords in the language you know best, drawn from three sources:",
        },
        {
          type: "ul",
          items: [
            "Your product features, customer pain points, and core use cases.",
            "Your own data: internal site search queries and top-converting landing pages.",
            "Competitor pages: titles, H1s, and category names.",
          ],
        },
        {
          type: "p",
          text: "These seeds anchor every market you expand into. Spending two extra hours here saves weeks later.",
        },
        {
          type: "h2",
          text: "3. Translation is the start, not the finish",
        },
        {
          type: "p",
          text: "Run your seeds through a translator, but treat the output as a hypothesis—not the answer. The classic example: “robot lawn mower” translates to Roboter-Rasenmäher in German, with only modest search volume. The word German buyers actually type is mähroboter—often an order of magnitude higher demand for the same product category.",
        },
        {
          type: "p",
          text: "Three quick checks for every translated term:",
        },
        {
          type: "ul",
          items: [
            "Ask a native speaker to read the list and flag what sounds “off” or “too formal.”",
            "Type each term into Google with the target country region setting and watch the autocomplete suggestions.",
            "Open the first page of results—are the listings selling what you sell, or something unrelated?",
          ],
        },
        {
          type: "h2",
          text: "4. Validate with real search data",
        },
        {
          type: "p",
          text: "Once your list survives the native review, plug it into a keyword data source (Ahrefs, SEMrush, or similar) and look at three numbers per market:",
        },
        {
          type: "ul",
          items: [
            "Monthly search volume in the target country—not the global number.",
            "Keyword Difficulty (KD), so you know whether a newer site can realistically rank.",
            "CPC, as a rough proxy for commercial value.",
          ],
        },
        {
          type: "p",
          text: "Reject any keyword that reads well in your language but shows near-zero volume locally. Promote any keyword you almost ignored that turns out to have surprising volume in the target market.",
        },
        {
          type: "h2",
          text: "5. Check search intent in the target country",
        },
        {
          type: "p",
          text: "Intent classification (informational, commercial, transactional) is standard SEO advice. In international SEO it deserves extra attention because intent is not stable across markets. The same query can lean transactional in one country and informational in another, depending on how local retailers and publishers shaped the SERP.",
        },
        {
          type: "p",
          text: "Before deciding what kind of page to build, always open the first page of results in the target country:",
        },
        {
          type: "ul",
          items: [
            "Mostly product or category pages → build a transactional page.",
            "Mostly guides, comparisons, or news → build a long-form content piece.",
            "A clear mix → choose the format that better fits your funnel.",
          ],
        },
        {
          type: "h2",
          text: "6. Group and prioritise",
        },
        {
          type: "p",
          text: "After collecting data, you will likely have 100–300 keywords per market. Do not assign them one-by-one to pages. Group them first.",
        },
        {
          type: "p",
          text: "Cluster keywords by topic and intent. Each cluster gets one primary keyword (the most-searched, intent-matched term) and several supporting long-tail terms that live on the same page.",
        },
        {
          type: "p",
          text: "Then prioritise using a simple three-part lens:",
        },
        {
          type: "ul",
          items: [
            "Relevance to your product or content angle.",
            "Search volume in the target country.",
            "Difficulty you can realistically beat in 6–12 months.",
          ],
        },
        {
          type: "p",
          text: "Avoid the “all keywords are equal” trap—you will burn months chasing volume that does not convert.",
        },
        {
          type: "h2",
          text: "7. Deliver a brief, not a spreadsheet",
        },
        {
          type: "p",
          text: "The output of keyword research is not an Excel file in a folder. It is a brief another person can act on. For each priority cluster, write down:",
        },
        {
          type: "ul",
          items: [
            "Target country and language.",
            "Primary keyword plus 3–5 supporting long-tail terms.",
            "Search intent and the page type that fits.",
            "Suggested title, URL slug, and internal links.",
          ],
        },
        {
          type: "p",
          text: "Hand this brief to the writer, translator, or developer building the page. Revisit volume and rankings every 60–90 days—international SERPs shift faster than people assume.",
        },
        {
          type: "h2",
          text: "Common pitfalls",
        },
        {
          type: "ul",
          items: [
            "Treating one language as one market (German content for Germany ≠ German content for Switzerland).",
            "Optimising only for search volume and ignoring intent.",
            "Reusing the same machine-translated meta titles across countries.",
            "Skipping the SERP check and shipping the wrong page format.",
            "Never auditing keyword performance after launch.",
          ],
        },
        {
          type: "h2",
          text: "A realistic tool stack",
        },
        {
          type: "p",
          text: "You do not need ten tools. A practical international SEO setup usually includes:",
        },
        {
          type: "ul",
          items: [
            "A volume and difficulty source (Ahrefs, SEMrush, or similar).",
            "Google Trends for regional comparisons.",
            "A translation pass plus a native reviewer.",
            "A cross-language intent explorer such as Multi-Language Keyword Finder, which takes one seed keyword and returns local high-traffic terms with volume, KD, and intent labels per market.",
          ],
        },
        {
          type: "h2",
          text: "Your 7-step checklist",
        },
        {
          type: "ul",
          items: [
            "Define country × language pairs, not just languages.",
            "Build 10–30 source-language seed keywords.",
            "Translate, then run a native-speaker sanity check.",
            "Pull country-specific volume, KD, and CPC.",
            "Open the target-country SERP to confirm intent.",
            "Cluster keywords and pick one primary keyword per page.",
            "Write a brief, ship, and re-audit after 60 days.",
          ],
        },
        {
          type: "p",
          text: "Want to compress steps 3 to 5 into a single tool? Try the keyword discovery on this site—enter one seed keyword and get translated variants plus Ahrefs-backed volume, KD, and intent for each market you care about.",
        },
      ],
    },
    zh: {
      title: "国际 SEO 的关键词研究怎么做？一份可执行的 7 步流程",
      excerpt:
        "一套面向出海团队的可重复关键词研究流程，帮你找到目标市场用户真正会搜的词，而不只是翻译过的词。",
      blocks: [
        {
          type: "p",
          text: "把网站开到新国家时，最常见的做法是：把中文或英文核心词丢进翻译工具，再照着译文写页面、铺广告。几个月后会发现自然流量曲线几乎是平的。问题往往不是产品或内容质量，而是你优化的是「翻译词」，而不是「本地真实搜索词」。",
        },
        {
          type: "p",
          text: "下面这套流程在出海独立站、SaaS 落地页和内容站进入新市场时都验证过，可以直接照搬。每一步都有明确的输出物，能交付给下一个执行人。",
        },
        {
          type: "h2",
          text: "1. 定义市场，而不是只定语言",
        },
        {
          type: "p",
          text: "很多团队的第一句话是「我要做德语、法语、西语」。这是错误的颗粒度。搜索行为是按国家变化，不是按语言。美国人搜 trash can，英国人搜 rubbish bin；法国本土用户和加拿大法语用户对同一件事的用词也不一样。",
        },
        {
          type: "p",
          text: "这一步的输出：一张「国家 × 语言」清单。例如把德国-de、奥地利-de、瑞士-de 分别单列，而不是合并成一份「德语市场」。",
        },
        {
          type: "h2",
          text: "2. 在源语言里搭建种子词清单",
        },
        {
          type: "p",
          text: "做多语言之前，先把母语侧的基础打牢。列 10–30 个种子词，灵感来自三个地方：",
        },
        {
          type: "ul",
          items: [
            "你的产品功能、用户痛点、典型使用场景。",
            "自己的数据：站内搜索词、转化最好的落地页。",
            "竞品的标题、H1 与品类页名称。",
          ],
        },
        {
          type: "p",
          text: "这些种子词是你所有海外市场的「源头」。在这一步多花两个小时，能省下后面几周。",
        },
        {
          type: "h2",
          text: "3. 翻译只是开始，本地化校验才是关键",
        },
        {
          type: "p",
          text: "把种子词跑一遍翻译，但要把结果当作「假设」，不是「答案」。一个经典反例：robot lawn mower 翻译成德语是 Roboter-Rasenmäher，月搜索量平平；德国买家真正在搜的是 mähroboter，同一品类的量级可能高出十倍。",
        },
        {
          type: "p",
          text: "每一个翻译词都做三件事来验证：",
        },
        {
          type: "ul",
          items: [
            "请目标语言母语者通读一遍，标出「听起来奇怪」或「太书面」的词。",
            "把词输入 Google，把地区切到目标国家，看自动补全提示。",
            "翻一下首页前几条结果，看排在那里的页面卖的是不是你卖的东西。",
          ],
        },
        {
          type: "h2",
          text: "4. 用真实搜索数据再筛一遍",
        },
        {
          type: "p",
          text: "通过母语审阅的词，再丢进 Ahrefs、SEMrush 这类数据源，每个市场看三个数字：",
        },
        {
          type: "ul",
          items: [
            "目标国家的月搜索量（不是全球总和）。",
            "关键词难度 KD，判断新站点是否够得着。",
            "CPC，作为商业价值的粗略参考。",
          ],
        },
        {
          type: "p",
          text: "看上去顺眼但本地搜索量接近零的词，要忍痛删掉。反过来，那些你差点忽略、但本地量出乎意料的词，要提级。",
        },
        {
          type: "h2",
          text: "5. 在目标国家的 SERP 上确认搜索意图",
        },
        {
          type: "p",
          text: "搜索意图（信息型 / 商业型 / 交易型）是 SEO 常识，但在国际 SEO 里要格外小心：同一个词在不同国家的意图可能不一样，因为本地零售商和媒体塑造了不同形态的 SERP。",
        },
        {
          type: "p",
          text: "写页面之前，先把搜索区域切到目标国家，打开搜索结果首页：",
        },
        {
          type: "ul",
          items: [
            "首页大部分是产品 / 品类页 → 做交易型页面。",
            "首页大部分是教程、对比、新闻 → 做长内容。",
            "两类都有 → 选你漏斗里更需要的形态切入。",
          ],
        },
        {
          type: "h2",
          text: "6. 关键词分组与优先级",
        },
        {
          type: "p",
          text: "一通操作下来，每个市场可能有 100–300 个词。不要一个个分给页面，先分组。",
        },
        {
          type: "p",
          text: "按主题 + 意图聚类，每组挑一个主词（搜索量最高、意图匹配），再配 3–5 个长尾词，统一放在同一个页面里。",
        },
        {
          type: "p",
          text: "排优先级时只看三个维度：",
        },
        {
          type: "ul",
          items: [
            "与产品 / 内容方向的相关度。",
            "目标国家的搜索量。",
            "6–12 个月内能不能现实地打上去。",
          ],
        },
        {
          type: "p",
          text: "不要陷入「所有词都重要」的陷阱——那会让你花几个月追根本不带转化的流量。",
        },
        {
          type: "h2",
          text: "7. 交付的是 Brief，不是一份表格",
        },
        {
          type: "p",
          text: "关键词研究的产出不是「躺在文件夹里的 Excel」，而是「另一个人拿到就能执行的 Brief」。每个优先组里都要写清：",
        },
        {
          type: "ul",
          items: [
            "目标国家与语言。",
            "主关键词 + 3–5 个长尾词。",
            "搜索意图与对应页面类型。",
            "建议的标题、URL slug、内链。",
          ],
        },
        {
          type: "p",
          text: "把这份 Brief 交给写手、翻译或开发人员去做页面，然后每 60–90 天复盘一次搜索量和排名——国际 SERP 的变化比想象中快。",
        },
        {
          type: "h2",
          text: "常见踩坑",
        },
        {
          type: "ul",
          items: [
            "把一种语言当一个市场（给德国用的德语内容 ≠ 给瑞士用的德语内容）。",
            "只看搜索量、不看意图。",
            "多市场之间复用同一份机翻 meta title。",
            "跳过 SERP 检查，写错页面形态。",
            "上线之后再也不复盘。",
          ],
        },
        {
          type: "h2",
          text: "工具配置建议",
        },
        {
          type: "p",
          text: "不需要十款工具。一个实用的国际 SEO 配置通常是这样：",
        },
        {
          type: "ul",
          items: [
            "搜索量 / KD 数据源（Ahrefs、SEMrush 或同类）。",
            "Google Trends，用于地区对比。",
            "翻译 + 母语审阅人。",
            "跨语言意图发现工具，例如本站的 Multi-Language Keyword Finder：输入一个种子词，直接给出目标市场的高流量本地词、月搜索量与意图标签。",
          ],
        },
        {
          type: "h2",
          text: "一份可勾选的 7 步清单",
        },
        {
          type: "ul",
          items: [
            "定义「国家 × 语言」配对，而不只是语言。",
            "在源语言里列 10–30 个种子词。",
            "翻译完先做母语审阅。",
            "拉出目标国家的搜索量、KD 与 CPC。",
            "打开当地 SERP 校验搜索意图。",
            "关键词聚类，每页定一个主词。",
            "写 Brief，上线后 60 天必须复盘。",
          ],
        },
        {
          type: "p",
          text: "想把第 3–5 步合并到一个工具里完成？试试本站首页的关键词工具——输入一个种子词，自动给出翻译变体、Ahrefs 真实搜索量、KD 与意图标签。",
        },
      ],
    },
    fr: {
      title: "Comment faire une recherche de mots-clés en SEO international : guide en 7 étapes",
      excerpt:
        "Une méthode reproductible pour identifier les mots-clés que vos marchés cibles tapent réellement—pas seulement leur traduction littérale.",
      blocks: [
        {
          type: "p",
          text: "Au moment de lancer un site dans un nouveau pays, la tentation est simple : prendre vos mots-clés principaux, les passer dans Google Traduction, puis publier. Quelques mois plus tard, la courbe de trafic reste plate. Le problème n'est presque jamais le produit ou la qualité du contenu—c'est que vous avez optimisé des mots-clés « traduits » au lieu de mots-clés « locaux ».",
        },
        {
          type: "p",
          text: "Voici un workflow reproductible, validé sur des sites e-commerce cross-border, des landing pages SaaS et des sites éditoriaux en phase d'expansion. Chaque étape a un livrable concret, que l'on peut transmettre à la personne suivante.",
        },
        {
          type: "h2",
          text: "1. Définir des marchés, pas seulement des langues",
        },
        {
          type: "p",
          text: "La plupart des équipes commencent par : « on veut se positionner en allemand, en français, en espagnol. » Mauvaise granularité. Le comportement de recherche varie par pays, pas par langue. Les Américains cherchent « trash can », les Britanniques « rubbish bin ». Les Québécois et les Parisiens n'emploient pas les mêmes termes pour le même objet.",
        },
        {
          type: "p",
          text: "Livrable de cette étape : une table claire de paires pays × langue (par exemple Belgique-fr, Suisse-fr et Canada-fr listés séparément).",
        },
        {
          type: "h2",
          text: "2. Construire une liste de mots-clés sources",
        },
        {
          type: "p",
          text: "Avant de passer en multilingue, posez la base dans la langue que vous maîtrisez le mieux. 10 à 30 mots-clés racines, issus de trois sources :",
        },
        {
          type: "ul",
          items: [
            "Les caractéristiques produit, les points de douleur et les cas d'usage clients.",
            "Vos propres données : recherches internes et pages de conversion.",
            "Les concurrents : titres, H1 et pages catégorie.",
          ],
        },
        {
          type: "p",
          text: "Ces graines alimentent toutes vos extensions de marché. Deux heures investies ici font gagner plusieurs semaines plus tard.",
        },
        {
          type: "h2",
          text: "3. La traduction est un point de départ, pas la conclusion",
        },
        {
          type: "p",
          text: "Passez vos mots-clés dans un traducteur, mais traitez les résultats comme une hypothèse. Exemple classique : « robot lawn mower » devient Roboter-Rasenmäher en allemand, avec un volume modeste ; les acheteurs allemands tapent en réalité mähroboter—parfois dix fois plus de volume sur la même catégorie produit.",
        },
        {
          type: "p",
          text: "Trois vérifications rapides pour chaque terme traduit :",
        },
        {
          type: "ul",
          items: [
            "Faire relire par un locuteur natif et marquer ce qui sonne « bizarre » ou « trop formel ».",
            "Taper chaque terme dans Google avec la région du pays cible et observer l'autocomplete.",
            "Parcourir la première page de résultats—vendent-ils ce que vous vendez ou autre chose ?",
          ],
        },
        {
          type: "h2",
          text: "4. Valider avec des données de recherche réelles",
        },
        {
          type: "p",
          text: "Une fois la revue native passée, faites tourner la liste dans Ahrefs, SEMrush ou équivalent. Trois chiffres par marché :",
        },
        {
          type: "ul",
          items: [
            "Volume de recherche mensuel dans le pays cible (pas le volume global).",
            "Difficulté du mot-clé (KD), pour savoir si un site récent peut se positionner.",
            "CPC, comme indicateur grossier de valeur commerciale.",
          ],
        },
        {
          type: "p",
          text: "Éliminez tout mot-clé séduisant dans votre langue mais quasi sans volume localement. Promouvez ceux que vous aviez négligés mais qui affichent un volume étonnant dans le marché cible.",
        },
        {
          type: "h2",
          text: "5. Vérifier l'intention de recherche dans le pays cible",
        },
        {
          type: "p",
          text: "Classer l'intention (informationnelle, commerciale, transactionnelle) est un classique du SEO. En international, cela mérite une attention supplémentaire : l'intention varie selon le marché, parce que les retailers et médias locaux ont façonné des SERP différentes.",
        },
        {
          type: "p",
          text: "Avant d'écrire la page, ouvrez la première page de résultats avec la région du pays cible :",
        },
        {
          type: "ul",
          items: [
            "Surtout des fiches produit ou catégorie → page transactionnelle.",
            "Surtout des guides, comparatifs ou actualités → contenu long.",
            "Mixte → choisissez le format qui sert votre tunnel.",
          ],
        },
        {
          type: "h2",
          text: "6. Regrouper et hiérarchiser",
        },
        {
          type: "p",
          text: "Vous vous retrouverez probablement avec 100 à 300 mots-clés par marché. N'assignez pas un mot par page. Regroupez d'abord.",
        },
        {
          type: "p",
          text: "Clusterisez par thème et intention. Chaque cluster a un mot-clé principal (le plus recherché, aligné sur l'intention) et 3 à 5 longues traînes qui vivent sur la même page.",
        },
        {
          type: "p",
          text: "Priorisez ensuite selon trois critères :",
        },
        {
          type: "ul",
          items: [
            "Pertinence par rapport à votre produit ou angle éditorial.",
            "Volume dans le pays cible.",
            "Difficulté réaliste à battre en 6 à 12 mois.",
          ],
        },
        {
          type: "p",
          text: "Évitez le piège « tous les mots-clés sont égaux »—vous brûleriez des mois sur du volume qui ne convertit pas.",
        },
        {
          type: "h2",
          text: "7. Livrer un brief, pas une feuille de calcul",
        },
        {
          type: "p",
          text: "Le livrable de la recherche de mots-clés n'est pas un Excel oublié dans un dossier. C'est un brief actionnable. Pour chaque cluster prioritaire :",
        },
        {
          type: "ul",
          items: [
            "Pays cible et langue.",
            "Mot-clé principal + 3 à 5 termes longue traîne.",
            "Intention de recherche et type de page associé.",
            "Titre, slug d'URL et maillage interne suggérés.",
          ],
        },
        {
          type: "p",
          text: "Transmettez ce brief au rédacteur, au traducteur ou au développeur. Réauditez volume et positions tous les 60 à 90 jours—les SERP internationales bougent plus vite qu'on ne le pense.",
        },
        {
          type: "h2",
          text: "Erreurs fréquentes",
        },
        {
          type: "ul",
          items: [
            "Traiter une langue comme un seul marché (allemand pour l'Allemagne ≠ allemand pour la Suisse).",
            "Optimiser uniquement le volume et ignorer l'intention.",
            "Réutiliser les mêmes meta titles machine-traduits sur plusieurs marchés.",
            "Sauter la vérification SERP et choisir le mauvais format de page.",
            "Ne plus jamais auditer après le lancement.",
          ],
        },
        {
          type: "h2",
          text: "Une stack outils raisonnable",
        },
        {
          type: "p",
          text: "Pas besoin de dix outils. Un setup pratique en SEO international tient à :",
        },
        {
          type: "ul",
          items: [
            "Une source volume et difficulté (Ahrefs, SEMrush ou équivalent).",
            "Google Trends pour les comparaisons régionales.",
            "Une passe de traduction + un relecteur natif.",
            "Un explorateur d'intention multilingue, comme Multi-Language Keyword Finder : à partir d'une racine, il renvoie les termes locaux à fort trafic avec volume, KD et intention par marché.",
          ],
        },
        {
          type: "h2",
          text: "Votre checklist en 7 étapes",
        },
        {
          type: "ul",
          items: [
            "Définir des paires pays × langue, pas juste des langues.",
            "10 à 30 mots-clés racines en langue source.",
            "Traduire puis faire valider par un natif.",
            "Volume, KD et CPC dans le pays cible.",
            "Vérifier l'intention via la SERP locale.",
            "Clusteriser et choisir un mot-clé principal par page.",
            "Rédiger un brief, lancer, réauditer à 60 jours.",
          ],
        },
        {
          type: "p",
          text: "Vous voulez fusionner les étapes 3 à 5 dans un seul outil ? Essayez l'explorateur en page d'accueil : à partir d'une racine, il affiche les variantes traduites avec volume, KD et intention pour chaque marché.",
        },
      ],
    },
  },
]
