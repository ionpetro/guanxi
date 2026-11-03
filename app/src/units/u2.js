// Original Guanxi learning content.
(function () {
  const unit = {
  "id": "u2",
  "title": "Names, people, hometowns",
  "blurb": "Introduce yourself, learn how others want to be addressed, and connect names to real people.",
  "place": "Nanshan, Shenzhen",
  "focus": "Names, roles, origins, and introductions",
  "lessons": [
    {
      "id": "u2l1",
      "title": "Names first",
      "scene": "Lin welcomes you into her Nanshan hardware studio.",
      "mission": "Learn the two parts of a name before using it.",
      "items": [
        {
          "id": "u2-1-1",
          "kind": "word",
          "say": "Use 姓 (xìng) for “surname; to be surnamed.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "姓",
          "pinyin": "xìng",
          "meaning": "surname; to be surnamed",
          "distractors": [
            "given name only",
            "office",
            "address"
          ]
        },
        {
          "id": "u2-1-2",
          "kind": "word",
          "say": "Use 叫 (jiào) for “be called.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "叫",
          "pinyin": "jiào",
          "meaning": "be called",
          "distractors": [
            "leave",
            "order",
            "return"
          ]
        },
        {
          "id": "u2-1-3",
          "kind": "word",
          "say": "Use 什么 (shénme) for “what.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "什么",
          "pinyin": "shénme",
          "meaning": "what",
          "distractors": [
            "when",
            "where",
            "how many"
          ]
        },
        {
          "id": "u2-1-4",
          "kind": "word",
          "say": "Use 怎么 (zěnme) for “how.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "怎么",
          "pinyin": "zěnme",
          "meaning": "how",
          "distractors": [
            "who",
            "where",
            "which day"
          ]
        },
        {
          "id": "u2-1-5",
          "kind": "word",
          "say": "Use 称呼 (chēnghu) for “address; call someone.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "称呼",
          "pinyin": "chēnghu",
          "meaning": "address; call someone",
          "distractors": [
            "buy a ticket",
            "send a file",
            "make tea"
          ]
        },
        {
          "id": "u2-1-6",
          "kind": "word",
          "say": "Use 老师 (lǎoshī) for “teacher; respectful title in some contexts.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "老师",
          "pinyin": "lǎoshī",
          "meaning": "teacher; respectful title in some contexts",
          "distractors": [
            "factory",
            "surname",
            "customer"
          ]
        },
        {
          "id": "u2-1-7",
          "kind": "sentence",
          "say": "How should I address you?",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "您怎么称呼？",
          "pinyin": "nín zěnme chēnghu?",
          "meaning": "How should I address you?",
          "tiles": [
            {
              "hanzi": "您",
              "pinyin": "nín"
            },
            {
              "hanzi": "怎么",
              "pinyin": "zěnme"
            },
            {
              "hanzi": "称呼",
              "pinyin": "chēnghu"
            },
            {
              "hanzi": "？",
              "pinyin": ""
            }
          ],
          "distractors": [
            {
              "hanzi": "哪里",
              "pinyin": "nǎlǐ"
            }
          ],
          "transfer": true
        },
        {
          "id": "u2-1-8",
          "kind": "grammar",
          "say": "Ask with 怎么 (zěnme)",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Ask with 怎么 (zěnme)",
          "explanation": "A question word stays where the missing information belongs. 您 (nín) is a polite “you”; it is optional depending on relationship and setting.",
          "examples": [
            {
              "hanzi": "您怎么称呼？",
              "pinyin": "nín zěnme chēnghu?",
              "meaning": "How should I address you?"
            }
          ],
          "quiz": {
            "q": "What is this question requesting?",
            "options": [
              "Preferred form of address",
              "A price",
              "A meeting time"
            ],
            "answer": "Preferred form of address",
            "why": "称呼 (chēnghu) concerns how to address a person."
          }
        },
        {
          "id": "u2-1-9",
          "kind": "culture",
          "say": "Names and titles",
          "src": "Original language practice; cn-business contextual guidance",
          "status": "general",
          "title": "Names and titles",
          "place": "Nanshan studio",
          "body": "林 (Lín) is Lin Yue’s family name; 悦 (Yuè) is her given name. In a formal introduction, a surname plus role—such as 李经理 (Lǐ jīnglǐ), Manager Li—can be useful. Then use the form the person asks you to use.",
          "quiz": {
            "q": "A manager introduces herself as 李经理 (Lǐ jīnglǐ). How can you address her initially?",
            "options": [
              "李经理 (Lǐ jīnglǐ)",
              "经理李 (jīnglǐ Lǐ)",
              "Use only an English name you choose for her"
            ],
            "answer": "李经理 (Lǐ jīnglǐ)",
            "why": "In this title pattern, the surname comes before the role."
          }
        },
        {
          "id": "u2-1-10",
          "kind": "scenario",
          "say": "Name order",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Name order",
          "scene": "Lin says 林悦 (Lín Yuè), but you are unsure which part is her family name.",
          "q": "Which question resolves that uncertainty?",
          "options": [
            {
              "text": "请问，您姓什么？ (qǐngwèn, nín xìng shénme?)",
              "why": "It asks for her surname."
            },
            {
              "text": "您几点来？ (nín jǐ diǎn lái?)",
              "why": "It asks arrival time."
            },
            {
              "text": "您在哪儿？ (nín zài nǎr?)",
              "why": "It asks location."
            }
          ],
          "answer": 0,
          "transfer": true
        }
      ]
    },
    {
      "id": "u2l2",
      "title": "People at work",
      "scene": "Zhou introduces Chen at a Nanshan prototype bench.",
      "mission": "Separate person, company and job role.",
      "items": [
        {
          "id": "u2-2-1",
          "kind": "word",
          "say": "Use 公司 (gōngsī) for “company.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "公司",
          "pinyin": "gōngsī",
          "meaning": "company",
          "distractors": [
            "station",
            "family",
            "receipt"
          ]
        },
        {
          "id": "u2-2-2",
          "kind": "word",
          "say": "Use 同事 (tóngshì) for “colleague.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "同事",
          "pinyin": "tóngshì",
          "meaning": "colleague",
          "distractors": [
            "supplier",
            "customer",
            "neighbor"
          ]
        },
        {
          "id": "u2-2-3",
          "kind": "word",
          "say": "Use 朋友 (péngyou) for “friend.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "朋友",
          "pinyin": "péngyou",
          "meaning": "friend",
          "distractors": [
            "manager",
            "driver",
            "engineer"
          ]
        },
        {
          "id": "u2-2-4",
          "kind": "word",
          "say": "Use 老板 (lǎobǎn) for “boss; owner.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "老板",
          "pinyin": "lǎobǎn",
          "meaning": "boss; owner",
          "distractors": [
            "assistant",
            "sample",
            "deadline"
          ]
        },
        {
          "id": "u2-2-5",
          "kind": "word",
          "say": "Use 供应商 (gōngyìngshāng) for “supplier.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "供应商",
          "pinyin": "gōngyìngshāng",
          "meaning": "supplier",
          "distractors": [
            "buyer",
            "designer",
            "cashier"
          ]
        },
        {
          "id": "u2-2-6",
          "kind": "word",
          "say": "Use 客户 (kèhù) for “client; customer.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "客户",
          "pinyin": "kèhù",
          "meaning": "client; customer",
          "distractors": [
            "supplier",
            "relative",
            "landlord"
          ]
        },
        {
          "id": "u2-2-7",
          "kind": "sentence",
          "say": "He is our supplier.",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "他是我们的供应商。",
          "pinyin": "tā shì wǒmen de gōngyìngshāng.",
          "meaning": "He is our supplier.",
          "tiles": [
            {
              "hanzi": "他",
              "pinyin": "tā"
            },
            {
              "hanzi": "是",
              "pinyin": "shì"
            },
            {
              "hanzi": "我们的",
              "pinyin": "wǒmen de"
            },
            {
              "hanzi": "供应商",
              "pinyin": "gōngyìngshāng"
            },
            {
              "hanzi": "。",
              "pinyin": ""
            }
          ],
          "distractors": [
            {
              "hanzi": "客户",
              "pinyin": "kèhù"
            }
          ],
          "transfer": true
        },
        {
          "id": "u2-2-8",
          "kind": "grammar",
          "say": "Possession with 的 (de)",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Possession with 的 (de)",
          "explanation": "Put 的 (de) after the possessor: 我们的 (wǒmen de) means “our.” It can link a group to a role or object.",
          "examples": [
            {
              "hanzi": "我们的同事",
              "pinyin": "wǒmen de tóngshì",
              "meaning": "our colleague"
            }
          ],
          "quiz": {
            "q": "What does 我们的 (wǒmen de) mean?",
            "options": [
              "Our",
              "His",
              "Their"
            ],
            "answer": "Our",
            "why": "我们 (wǒmen) is “we”; 的 (de) links it to a noun."
          }
        },
        {
          "id": "u2-2-9",
          "kind": "culture",
          "say": "The person behind the introduction",
          "src": "sz-huaqiangbei",
          "status": "sourced",
          "title": "The person behind the introduction",
          "place": "Nanshan prototype bench",
          "body": "Zhou introduces Chen as a supplier from Huaqiangbei, the electronics-market area in Futian. That tells you where this connection began. Ask what his company supplies and what he handles; a market contact may have a different role from a factory manager.",
          "quiz": {
            "q": "You need someone to answer a component question. What should you establish first?",
            "options": [
              "What Chen supplies and which questions he handles",
              "Whether every Huaqiangbei seller makes the same product",
              "Whether Zhou’s introduction guarantees the sample quality"
            ],
            "answer": "What Chen supplies and which questions he handles",
            "why": "A useful introduction gives you a starting point; a role question makes it actionable."
          }
        },
        {
          "id": "u2-2-10",
          "kind": "scenario",
          "say": "Who is who?",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Who is who?",
          "scene": "Zhou says Chen supplies parts; Lin is the founder. You need the supplier’s name for a note.",
          "q": "Which follow-up targets the missing fact?",
          "options": [
            {
              "text": "供应商叫什么名字？ (gōngyìngshāng jiào shénme míngzi?)",
              "why": "This asks the supplier’s name."
            },
            {
              "text": "公司在哪儿？ (gōngsī zài nǎr?)",
              "why": "This asks for the company location."
            },
            {
              "text": "你几点来？ (nǐ jǐ diǎn lái?)",
              "why": "This asks arrival time."
            }
          ],
          "answer": 0,
          "transfer": true
        }
      ]
    },
    {
      "id": "u2l3",
      "title": "Hometowns without assumptions",
      "scene": "At lunch in Nanshan, Zhou mentions she grew up in Chengdu.",
      "mission": "Ask about origins without deciding someone belongs to one city.",
      "items": [
        {
          "id": "u2-3-1",
          "kind": "word",
          "say": "Use 哪里 (nǎlǐ) for “where.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "哪里",
          "pinyin": "nǎlǐ",
          "meaning": "where",
          "distractors": [
            "when",
            "who",
            "how"
          ]
        },
        {
          "id": "u2-3-2",
          "kind": "word",
          "say": "Use 人 (rén) for “person; people.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "人",
          "pinyin": "rén",
          "meaning": "person; people",
          "distractors": [
            "day",
            "money",
            "road"
          ]
        },
        {
          "id": "u2-3-3",
          "kind": "word",
          "say": "Use 家 (jiā) for “home; family.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "家",
          "pinyin": "jiā",
          "meaning": "home; family",
          "distractors": [
            "company",
            "station",
            "market"
          ]
        },
        {
          "id": "u2-3-4",
          "kind": "word",
          "say": "Use 家乡 (jiāxiāng) for “hometown.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "家乡",
          "pinyin": "jiāxiāng",
          "meaning": "hometown",
          "distractors": [
            "current office",
            "supplier",
            "client"
          ]
        },
        {
          "id": "u2-3-5",
          "kind": "word",
          "say": "Use 成都 (Chéngdū) for “Chengdu.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "成都",
          "pinyin": "Chéngdū",
          "meaning": "Chengdu",
          "distractors": [
            "Shenzhen",
            "Guangzhou",
            "Shanghai"
          ]
        },
        {
          "id": "u2-3-6",
          "kind": "word",
          "say": "Use 深圳 (Shēnzhèn) for “Shenzhen.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "深圳",
          "pinyin": "Shēnzhèn",
          "meaning": "Shenzhen",
          "distractors": [
            "Chengdu",
            "Guangzhou",
            "Dongguan"
          ]
        },
        {
          "id": "u2-3-7",
          "kind": "sentence",
          "say": "Where are you from?",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "你是哪里人？",
          "pinyin": "nǐ shì nǎlǐ rén?",
          "meaning": "Where are you from?",
          "tiles": [
            {
              "hanzi": "你",
              "pinyin": "nǐ"
            },
            {
              "hanzi": "是",
              "pinyin": "shì"
            },
            {
              "hanzi": "哪里",
              "pinyin": "nǎlǐ"
            },
            {
              "hanzi": "人",
              "pinyin": "rén"
            },
            {
              "hanzi": "？",
              "pinyin": ""
            }
          ],
          "distractors": [
            {
              "hanzi": "公司",
              "pinyin": "gōngsī"
            }
          ],
          "transfer": true
        },
        {
          "id": "u2-3-8",
          "kind": "grammar",
          "say": "Question word 哪里 (nǎlǐ)",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Question word 哪里 (nǎlǐ)",
          "explanation": "哪里 (nǎlǐ) asks for a place. In 你是哪里人 (nǐ shì nǎlǐ rén), the answer may be a hometown or origin; let the person choose how much to share.",
          "examples": [
            {
              "hanzi": "你是哪里人？",
              "pinyin": "nǐ shì nǎlǐ rén?",
              "meaning": "Where are you from?"
            }
          ],
          "quiz": {
            "q": "What kind of answer does 哪里 (nǎlǐ) request?",
            "options": [
              "A place",
              "A number",
              "A title"
            ],
            "answer": "A place",
            "why": "哪里 (nǎlǐ) means “where.”"
          }
        },
        {
          "id": "u2-3-9",
          "kind": "culture",
          "say": "Where home is",
          "src": "sz-inclusion",
          "status": "sourced",
          "title": "Where home is",
          "place": "Nanshan lunch",
          "body": "Shenzhen’s welcoming civic slogan sits alongside many individual stories of home. Zhou tells you about Chengdu while working in Shenzhen. 家乡 (jiāxiāng), hometown, is a way into her story; listen to her answer rather than assigning tastes or habits by province.",
          "quiz": {
            "q": "Zhou mentions Chengdu. Which follow-up leaves room for her preferences?",
            "options": [
              "What food do you miss from home?",
              "You must want every meal very spicy, right?",
              "So you will not enjoy Cantonese food, right?"
            ],
            "answer": "What food do you miss from home?",
            "why": "Ask about her experience. A place of origin does not decide a person’s tastes."
          }
        },
        {
          "id": "u2-3-10",
          "kind": "scenario",
          "say": "Two city answers",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Two city answers",
          "scene": "Zhou says 我是成都人 (wǒ shì Chéngdū rén) and 我在深圳工作 (wǒ zài Shēnzhèn gōngzuò).",
          "q": "What should your note record?",
          "options": [
            {
              "text": "From Chengdu; works in Shenzhen",
              "why": "That preserves both statements."
            },
            {
              "text": "From Shenzhen; works in Chengdu",
              "why": "It reverses the two cities."
            },
            {
              "text": "From Guangzhou; works in Shenzhen",
              "why": "Guangzhou was not mentioned."
            }
          ],
          "answer": 0,
          "transfer": true
        }
      ]
    },
    {
      "id": "u2l4",
      "title": "Contact details",
      "scene": "After the studio tour, Chen offers to exchange contact details.",
      "mission": "Ask permission and confirm the right person.",
      "items": [
        {
          "id": "u2-4-1",
          "kind": "word",
          "say": "Use 电话 (diànhuà) for “phone; telephone.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "电话",
          "pinyin": "diànhuà",
          "meaning": "phone; telephone",
          "distractors": [
            "address",
            "schedule",
            "sample"
          ]
        },
        {
          "id": "u2-4-2",
          "kind": "word",
          "say": "Use 号码 (hàomǎ) for “number; identifier.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "号码",
          "pinyin": "hàomǎ",
          "meaning": "number; identifier",
          "distractors": [
            "name",
            "city",
            "meeting"
          ]
        },
        {
          "id": "u2-4-3",
          "kind": "word",
          "say": "Use 微信 (Wēixìn) for “WeChat.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "微信",
          "pinyin": "Wēixìn",
          "meaning": "WeChat",
          "distractors": [
            "email",
            "invoice",
            "map"
          ]
        },
        {
          "id": "u2-4-4",
          "kind": "word",
          "say": "Use 加 (jiā) for “add.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "加",
          "pinyin": "jiā",
          "meaning": "add",
          "distractors": [
            "remove",
            "wait",
            "decline"
          ]
        },
        {
          "id": "u2-4-5",
          "kind": "word",
          "say": "Use 联系 (liánxì) for “contact.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "联系",
          "pinyin": "liánxì",
          "meaning": "contact",
          "distractors": [
            "inspect",
            "order",
            "deliver"
          ]
        },
        {
          "id": "u2-4-6",
          "kind": "word",
          "say": "Use 方便 (fāngbiàn) for “convenient; suitable.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "方便",
          "pinyin": "fāngbiàn",
          "meaning": "convenient; suitable",
          "distractors": [
            "expensive",
            "urgent",
            "finished"
          ]
        },
        {
          "id": "u2-4-7",
          "kind": "sentence",
          "say": "Would it be convenient to add you on WeChat?",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "方便加您微信吗？",
          "pinyin": "fāngbiàn jiā nín Wēixìn ma?",
          "meaning": "Would it be convenient to add you on WeChat?",
          "tiles": [
            {
              "hanzi": "方便",
              "pinyin": "fāngbiàn"
            },
            {
              "hanzi": "加",
              "pinyin": "jiā"
            },
            {
              "hanzi": "您",
              "pinyin": "nín"
            },
            {
              "hanzi": "微信",
              "pinyin": "Wēixìn"
            },
            {
              "hanzi": "吗",
              "pinyin": "ma"
            },
            {
              "hanzi": "？",
              "pinyin": ""
            }
          ],
          "distractors": [
            {
              "hanzi": "今天",
              "pinyin": "jīntiān"
            }
          ],
          "transfer": true
        },
        {
          "id": "u2-4-8",
          "kind": "grammar",
          "say": "Convenience as an invitation",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Convenience as an invitation",
          "explanation": "方便 (fāngbiàn) asks whether something suits the other person. A yes/no question with 吗 (ma) allows them to decline or suggest another channel.",
          "examples": [
            {
              "hanzi": "现在方便吗？",
              "pinyin": "xiànzài fāngbiàn ma?",
              "meaning": "Is now convenient?"
            }
          ],
          "quiz": {
            "q": "What does 方便 (fāngbiàn) ask about here?",
            "options": [
              "Whether it suits the person",
              "The exact price",
              "A factory address"
            ],
            "answer": "Whether it suits the person",
            "why": "It asks about convenience in this context."
          }
        },
        {
          "id": "u2-4-9",
          "kind": "culture",
          "say": "Cards and QR codes",
          "src": "cn-business-current",
          "status": "sourced",
          "title": "Cards and QR codes",
          "place": "Nanshan studio",
          "body": "Business cards still appear in introductions, and WeChat contact exchange is increasingly common. Chen offers his QR code. After adding him, a short message with your name and where you met helps connect the new contact to the real conversation.",
          "quiz": {
            "q": "Which first message helps Chen place you?",
            "options": [
              "Your name and “We met at Lin’s studio today”",
              "Only “Hello” with no identifying detail",
              "A long quotation request without an introduction"
            ],
            "answer": "Your name and “We met at Lin’s studio today”",
            "why": "Give the new contact enough context to recognize you."
          }
        },
        {
          "id": "u2-4-10",
          "kind": "scenario",
          "say": "Two Chens on a screen",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Two Chens on a screen",
          "scene": "Your phone shows two contacts named 陈伟 (Chén Wěi). One is the Huaqiangbei supplier.",
          "q": "What should you confirm before sending project notes?",
          "options": [
            {
              "text": "Confirm his company or number with him",
              "why": "This distinguishes the intended recipient."
            },
            {
              "text": "Send both contacts the notes",
              "why": "This may expose information to the wrong person."
            },
            {
              "text": "Choose the first result",
              "why": "Order on a screen does not prove identity."
            }
          ],
          "answer": 0,
          "transfer": true
        }
      ]
    },
    {
      "id": "u2l5",
      "title": "Introduce a colleague",
      "scene": "Zhou joins a meeting in Lin’s Nanshan studio.",
      "mission": "Make a short, accurate introduction and check preferred roles.",
      "items": [
        {
          "id": "u2-5-1",
          "kind": "word",
          "say": "Use 介绍 (jièshào) for “introduce.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "介绍",
          "pinyin": "jièshào",
          "meaning": "introduce",
          "distractors": [
            "negotiate",
            "assemble",
            "cancel"
          ]
        },
        {
          "id": "u2-5-2",
          "kind": "word",
          "say": "Use 这位 (zhè wèi) for “this person (polite).”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "这位",
          "pinyin": "zhè wèi",
          "meaning": "this person (polite)",
          "distractors": [
            "that place",
            "this price",
            "that day"
          ]
        },
        {
          "id": "u2-5-3",
          "kind": "word",
          "say": "Use 我们 (wǒmen) for “we; us.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "我们",
          "pinyin": "wǒmen",
          "meaning": "we; us",
          "distractors": [
            "they",
            "you plural",
            "he"
          ]
        },
        {
          "id": "u2-5-4",
          "kind": "word",
          "say": "Use 经理 (jīnglǐ) for “manager.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "经理",
          "pinyin": "jīnglǐ",
          "meaning": "manager",
          "distractors": [
            "supplier",
            "sample",
            "factory"
          ]
        },
        {
          "id": "u2-5-5",
          "kind": "word",
          "say": "Use 工程师 (gōngchéngshī) for “engineer.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "工程师",
          "pinyin": "gōngchéngshī",
          "meaning": "engineer",
          "distractors": [
            "accountant",
            "driver",
            "customer"
          ]
        },
        {
          "id": "u2-5-6",
          "kind": "word",
          "say": "Use 负责 (fùzé) for “be responsible for.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "负责",
          "pinyin": "fùzé",
          "meaning": "be responsible for",
          "distractors": [
            "be late for",
            "pay for",
            "listen to"
          ]
        },
        {
          "id": "u2-5-7",
          "kind": "sentence",
          "say": "This is our engineer.",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "这位是我们的工程师。",
          "pinyin": "zhè wèi shì wǒmen de gōngchéngshī.",
          "meaning": "This is our engineer.",
          "tiles": [
            {
              "hanzi": "这位",
              "pinyin": "zhè wèi"
            },
            {
              "hanzi": "是",
              "pinyin": "shì"
            },
            {
              "hanzi": "我们的",
              "pinyin": "wǒmen de"
            },
            {
              "hanzi": "工程师",
              "pinyin": "gōngchéngshī"
            },
            {
              "hanzi": "。",
              "pinyin": ""
            }
          ],
          "distractors": [
            {
              "hanzi": "供应商",
              "pinyin": "gōngyìngshāng"
            }
          ],
          "transfer": true
        },
        {
          "id": "u2-5-8",
          "kind": "grammar",
          "say": "Introduce with 这位 (zhè wèi)",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Introduce with 这位 (zhè wèi)",
          "explanation": "这位 (zhè wèi) can introduce a person politely. Follow with 是 (shì), then a name or role that you have verified.",
          "examples": [
            {
              "hanzi": "这位是周敏。",
              "pinyin": "zhè wèi shì Zhōu Mǐn.",
              "meaning": "This is Zhou Min."
            }
          ],
          "quiz": {
            "q": "What follows 是 (shì) in this introduction?",
            "options": [
              "A verified name or role",
              "A random city",
              "A time marker"
            ],
            "answer": "A verified name or role",
            "why": "The sentence identifies the person."
          }
        },
        {
          "id": "u2-5-9",
          "kind": "culture",
          "say": "Who handles this?",
          "src": "Original fictional workplace practice",
          "status": "general",
          "title": "Who handles this?",
          "place": "Nanshan meeting",
          "body": "At Lin’s hardware studio, the founder, supplier and tester handle different parts of the project. 谁负责测试？ (shéi fùzé cèshì?)—“Who handles testing?”—is a useful way to learn the team, without guessing authority from age or how much someone speaks.",
          "quiz": {
            "q": "Zhou says she organizes testing, while Lin approves changes. Who should receive a test-schedule question first?",
            "options": [
              "Zhou, who organizes testing",
              "Lin solely because she is the founder",
              "Chen solely because he introduced himself first"
            ],
            "answer": "Zhou, who organizes testing",
            "why": "Follow the responsibility the team actually described."
          }
        },
        {
          "id": "u2-5-10",
          "kind": "scenario",
          "say": "A missing responsibility",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "A missing responsibility",
          "scene": "Zhou is introduced as a colleague, but you need to know who handles prototype testing.",
          "q": "Which question fits?",
          "options": [
            {
              "text": "谁负责测试？ (shéi fùzé cèshì?)",
              "why": "It asks who is responsible for testing."
            },
            {
              "text": "谁是成都人？ (shéi shì Chéngdū rén?)",
              "why": "It asks about hometown, not the task."
            },
            {
              "text": "谁有微信？ (shéi yǒu Wēixìn?)",
              "why": "It asks about contact access."
            }
          ],
          "answer": 0,
          "transfer": true
        }
      ]
    }
  ]
};
;unit.assessment=[{"id": "u2-assess1", "kind": "scenario", "say": "Which question targets the missing detail?", "src": "Original teaching example; standard Mandarin", "status": "general", "title": "Ask a role", "scene": "At a new supplier meeting, you know Li’s name but not their responsibility.", "q": "Which question targets the missing detail?", "options": [{"text": "您负责什么？ (nín fùzé shénme?)", "why": "It asks their responsibility."}, {"text": "您姓什么？ (nín xìng shénme?)", "why": "The name is already known."}, {"text": "您哪里人？ (nín nǎlǐ rén?)", "why": "It asks origin."}], "answer": 0, "transfer": true}, {"id": "u2-assess2", "kind": "scenario", "say": "Which introduction preserves that role?", "src": "Original teaching example; standard Mandarin", "status": "general", "title": "Introduce accurately", "scene": "Zhou introduces a teammate as an engineer, not the manager.", "q": "Which introduction preserves that role?", "options": [{"text": "这位是我们的工程师。 (zhè wèi shì wǒmen de gōngchéngshī.)", "why": "It says engineer."}, {"text": "这位是我们的经理。 (zhè wèi shì wǒmen de jīnglǐ.)", "why": "It changes the role."}, {"text": "这位是我们的客户。 (zhè wèi shì wǒmen de kèhù.)", "why": "It calls them a client."}], "answer": 0, "transfer": true}]
unit.lessons[0].items.push({"id": "u2-ch-1", "kind": "character", "say": "Notice 木 (mù) as a visible form in this chapter.", "src": "Original teaching example; standard Mandarin", "status": "general", "hanzi": "木", "pinyin": "mù", "meaning": "tree; wood", "distractors": ["water", "person", "month"], "component": "木", "note": "林 (Lín) shows two 木 shapes side by side."});
unit.lessons[0].items.push({"id": "u2-ch-2", "kind": "character", "say": "Notice 女 (nǚ) as a visible form in this chapter.", "src": "Original teaching example; standard Mandarin", "status": "general", "hanzi": "女", "pinyin": "nǚ", "meaning": "woman; female", "distractors": ["man", "child", "friend"], "component": "女", "note": "The left side of 姓 (xìng) has the 女 shape."});
unit.lessons[0].dialogue=[{"speaker": "Lin", "hanzi": "您好，怎么称呼？", "pinyin": "nín hǎo, zěnme chēnghu?", "meaning": "Hello, how should I address you?"}, {"speaker": "Chen", "hanzi": "我姓陈。", "pinyin": "wǒ xìng Chén.", "meaning": "My surname is Chen."}];
  if (typeof module !== "undefined" && module.exports) module.exports = unit;
  if (typeof window !== "undefined") { window.GUANXI_UNITS = window.GUANXI_UNITS || []; window.GUANXI_UNITS.push(unit); }
})();
