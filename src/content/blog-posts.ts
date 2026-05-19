import type { BlogPost } from "@/lib/blog"

export const blogPosts: BlogPost[] = [
  {
    slug: "why-translation-is-not-seo",
    publishedAt: "2026-04-12",
    readMinutes: 5,
    en: {
      title: "Why Direct Translation Fails in International SEO",
      excerpt:
        "Literal translations rarely match what users actually type into Google. Here is how to find real local search demand.",
      blocks: [
        {
          type: "p",
          text: "Many cross-border teams start international SEO by translating their homepage keywords word-for-word. The result looks correct on paper but often brings almost zero traffic.",
        },
        {
          type: "h2",
          text: "Translation ≠ search intent",
        },
        {
          type: "p",
          text: "Search engines rank pages that match how people search in a market—not how a dictionary translates a phrase. Cultural habits, slang, and product naming conventions all change the winning keyword.",
        },
        {
          type: "h2",
          text: "A real example: robot lawn mowers in Germany",
        },
        {
          type: "p",
          text: "“Robot lawn mower” translates to Roboter-Rasenmäher in German, but monthly search volume can stay very low. German shoppers often search mähroboter instead—sometimes an order of magnitude higher volume for the same product category.",
        },
        {
          type: "h2",
          text: "What to do instead",
        },
        {
          type: "ul",
          items: [
            "Start from a seed keyword in your source language, then discover terms natives use in the target country.",
            "Validate volume and difficulty with trusted SEO data (e.g. Ahrefs).",
            "Align page titles, URLs, and copy with the highest-intent local phrase—not the literal translation.",
          ],
        },
        {
          type: "p",
          text: "Multi-Language Keyword Finder automates this workflow: translate for context, then surface market-backed keywords with volume, KD, and intent labels.",
        },
      ],
    },
    zh: {
      title: "为什么直译做不好国际 SEO？",
      excerpt:
        "字面翻译往往不等于用户真实搜索词。本文说明如何找到目标市场的真实搜索需求。",
      blocks: [
        {
          type: "p",
          text: "很多出海团队做国际 SEO 时，会把中文或英文首页关键词直接丢进翻译工具，再拿去投放或写页面。语法上没问题，流量却常常几乎为零。",
        },
        {
          type: "h2",
          text: "翻译 ≠ 搜索意图",
        },
        {
          type: "p",
          text: "搜索引擎奖励的是「当地人怎么搜」，而不是「词典怎么译」。俚语、品类叫法、平台习惯都会改变真正能带来流量的词。",
        },
        {
          type: "h2",
          text: "实例：德国的割草机器人",
        },
        {
          type: "p",
          text: "“Robot lawn mower” 直译成德语 Roboter-Rasenmäher，月搜索量可能很低；而德国用户更常搜 mähroboter，同一品类流量可能高出几个数量级。",
        },
        {
          type: "h2",
          text: "正确做法",
        },
        {
          type: "ul",
          items: [
            "用源语言种子词出发，在目标国家发现本地人真实使用的搜索词。",
            "用 Ahrefs 等数据验证搜索量与难度。",
            "标题、URL、正文对齐高意图本地词，而不是直译。",
          ],
        },
        {
          type: "p",
          text: "多语言关键词工具就是为此设计：先理解语义，再给出带搜索量、KD 与意图标签的市场级关键词建议。",
        },
      ],
    },
    fr: {
      title: "Pourquoi la traduction directe échoue en SEO international",
      excerpt:
        "Une traduction littérale ne correspond souvent pas aux requêtes réelles. Voici comment repérer la vraie demande locale.",
      blocks: [
        {
          type: "p",
          text: "Beaucoup d'équipes internationales traduisent leurs mots-clés français ou anglais mot pour mot, puis les utilisent en Allemagne, aux États-Unis ou au Japon. Le texte est correct, le trafic reste faible.",
        },
        {
          type: "h2",
          text: "Traduction ≠ intention de recherche",
        },
        {
          type: "p",
          text: "Google classe les pages qui correspondent à la façon dont les internautes cherchent sur un marché—pas à la version dictionnaire d'une expression.",
        },
        {
          type: "h2",
          text: "Exemple : tondeuses robot en Allemagne",
        },
        {
          type: "p",
          text: "« Robot lawn mower » devient Roboter-Rasenmäher, avec peu de volume. Les acheteurs allemands tapent souvent mähroboter, parfois avec un volume bien supérieur.",
        },
        {
          type: "h2",
          text: "La bonne approche",
        },
        {
          type: "ul",
          items: [
            "Partir d'un mot-clé source, puis découvrir les termes locaux réellement utilisés.",
            "Valider volume et difficulté (Ahrefs).",
            "Aligner titres et contenus sur la requête locale à forte intention.",
          ],
        },
        {
          type: "p",
          text: "Multi-Language Keyword Finder automatise ce flux : contexte multilingue, puis suggestions validées par les données de marché.",
        },
      ],
    },
  },
  {
    slug: "cross-border-keyword-workflow",
    publishedAt: "2026-04-08",
    readMinutes: 4,
    en: {
      title: "A Simple Cross-Border Keyword Workflow for E-commerce",
      excerpt:
        "A two-step process from seed keyword to export-ready local terms—built for Shopify and marketplace sellers.",
      blocks: [
        {
          type: "p",
          text: "Cross-border sellers rarely lack ideas—they lack confidence that a keyword will convert in the target language. This workflow keeps research fast and repeatable.",
        },
        {
          type: "h2",
          text: "Step 1: Discovery",
        },
        {
          type: "ul",
          items: [
            "Pick source language and target country.",
            "Enter one seed keyword (product, category, or pain point).",
            "Review translated variants plus Ahrefs-backed related terms.",
          ],
        },
        {
          type: "h2",
          text: "Step 2: Prioritize",
        },
        {
          type: "ul",
          items: [
            "Sort by relevance score and monthly search volume.",
            "Check KD and intent (informational vs transactional).",
            "Export CSV for listing titles, ads, or content briefs.",
          ],
        },
        {
          type: "p",
          text: "Repeat per market. The same product may need completely different primary keywords in Germany, France, and Japan.",
        },
      ],
    },
    zh: {
      title: "跨境电商关键词研究：两步工作流",
      excerpt:
        "从种子词到可导出的本地高流量词——适合独立站与平台卖家。",
      blocks: [
        {
          type: "p",
          text: "出海卖家通常不缺产品想法，缺的是「这个词在目标国能不能带来订单」的信心。下面是一套可重复的两步流程。",
        },
        {
          type: "h2",
          text: "第一步：发现",
        },
        {
          type: "ul",
          items: [
            "选择源语言与目标国家。",
            "输入一个种子词（产品、品类或痛点）。",
            "查看翻译结果与 Ahrefs 相关词建议。",
          ],
        },
        {
          type: "h2",
          text: "第二步：筛选",
        },
        {
          type: "ul",
          items: [
            "按相关度与月搜索量排序。",
            "查看 KD 与搜索意图（信息型 / 交易型等）。",
            "导出 CSV，用于 Listing、广告或内容大纲。",
          ],
        },
        {
          type: "p",
          text: "每个市场单独跑一遍：同一款产品在德国、法国、日本的主关键词往往完全不同。",
        },
      ],
    },
    fr: {
      title: "Workflow mots-clés cross-border pour l'e-commerce",
      excerpt:
        "De la requête source aux termes locaux exportables—pour vendeurs Shopify et marketplaces.",
      blocks: [
        {
          type: "p",
          text: "Les vendeurs internationaux manquent rarement d'idées produits ; ils manquent de certitude sur la conversion d'un mot-clé dans la langue cible.",
        },
        {
          type: "h2",
          text: "Étape 1 : Découverte",
        },
        {
          type: "ul",
          items: [
            "Langue source et pays cible.",
            "Un mot-clé racine (produit ou problème client).",
            "Variantes traduites + termes associés Ahrefs.",
          ],
        },
        {
          type: "h2",
          text: "Étape 2 : Priorisation",
        },
        {
          type: "ul",
          items: [
            "Trier par pertinence et volume mensuel.",
            "Vérifier KD et intention.",
            "Exporter en CSV pour fiches produit ou campagnes.",
          ],
        },
        {
          type: "p",
          text: "Recommencez par marché : un même SKU peut exiger des mots-clés principaux différents en DE, FR et JP.",
        },
      ],
    },
  },
  {
    slug: "search-intent-across-languages",
    publishedAt: "2026-03-28",
    readMinutes: 6,
    en: {
      title: "Search Intent Across Languages: What Global SEO Teams Miss",
      excerpt:
        "Informational, commercial, and transactional intent do not map 1:1 between languages. Learn what to check before you publish.",
      blocks: [
        {
          type: "p",
          text: "Intent classification is standard in English SEO—but applying English intent labels to translated keywords can mislead entire content strategies abroad.",
        },
        {
          type: "h2",
          text: "Same word, different intent",
        },
        {
          type: "p",
          text: "A query that looks informational in English may be commercial in another market because of how retailers and media shaped search behavior. Always inspect SERP patterns in the target country.",
        },
        {
          type: "h2",
          text: "Use intent + volume together",
        },
        {
          type: "ul",
          items: [
            "High volume + transactional intent → product and category pages.",
            "High volume + informational → guides, comparisons, FAQs.",
            "Low volume but high relevance → long-tail landing tests.",
          ],
        },
        {
          type: "h2",
          text: "Tooling helps—but judgment matters",
        },
        {
          type: "p",
          text: "Automated intent tags from SEO APIs are a starting point. Final decisions should combine native-language review and SERP spot checks. Our explorer surfaces intent labels alongside volume and KD so you can shortlist faster.",
        },
      ],
    },
    zh: {
      title: "多语言搜索意图：全球 SEO 团队常忽略的坑",
      excerpt:
        "信息型、商业型、交易型意图不能跨语言 1:1 套用。发布前请先核对这几点。",
      blocks: [
        {
          type: "p",
          text: "英文 SEO 里讲搜索意图已是常识，但若把英文意图标签直接贴在翻译词上，海外内容策略很容易全盘跑偏。",
        },
        {
          type: "h2",
          text: "同一个词，意图可能不同",
        },
        {
          type: "p",
          text: "在英语里偏「科普」的词，在另一市场可能因电商与媒体生态而偏「比价/购买」。务必查看目标国真实 SERP。",
        },
        {
          type: "h2",
          text: "意图要与搜索量一起看",
        },
        {
          type: "ul",
          items: [
            "高流量 + 交易型 → 产品页、类目页。",
            "高流量 + 信息型 → 教程、对比、FAQ。",
            "流量不高但相关性强 → 长尾落地页测试。",
          ],
        },
        {
          type: "h2",
          text: "工具辅助，仍需人工判断",
        },
        {
          type: "p",
          text: "API 返回的意图标签是起点，最终还要结合母语同事审阅与 SERP 抽查。我们的工具在展示搜索量、KD 的同时给出意图标签，帮助您更快筛出候选词。",
        },
      ],
    },
    fr: {
      title: "Intention de recherche multilingue : ce que les équipes SEO oublient",
      excerpt:
        "Les intentions ne se recollent pas mot pour mot entre langues. Points à vérifier avant publication.",
      blocks: [
        {
          type: "p",
          text: "Classifier l'intention est courant en SEO anglophone ; coller les mêmes étiquettes sur des traductions peut fausser toute une stratégie éditoriale à l'étranger.",
        },
        {
          type: "h2",
          text: "Un même concept, une intention différente",
        },
        {
          type: "p",
          text: "Une requête « informationnelle » en anglais peut être commerciale ailleurs selon les SERP locaux. Inspectez toujours les résultats dans le pays cible.",
        },
        {
          type: "h2",
          text: "Croiser intention et volume",
        },
        {
          type: "ul",
          items: [
            "Volume élevé + transactionnel → pages produit.",
            "Volume élevé + informationnel → guides et comparatifs.",
            "Volume modeste mais forte pertinence → tests longue traîne.",
          ],
        },
        {
          type: "h2",
          text: "Outils + jugement humain",
        },
        {
          type: "p",
          text: "Les étiquettes d'intention API sont un point de départ. Validez avec des relecteurs natifs et un échantillon SERP. Notre outil affiche intention, volume et KD sur un même tableau.",
        },
      ],
    },
  },
]
