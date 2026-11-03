// Original Guanxi learning content.
(function () {
  const unit = {
  "id": "u5",
  "title": "Keep in touch",
  "blurb": "Connect, write concise messages, and follow up without guessing from silence.",
  "place": "Shenzhen",
  "focus": "Contacts, short messages, channel preferences and permission",
  "lessons": [
    {
      "id": "u5l1",
      "title": "Add the right contact",
      "scene": "After meeting in Huaqiangbei, Chen offers to connect.",
      "mission": "Ask which contact method Chen prefers.",
      "items": [
        {
          "id": "u5-1-1",
          "kind": "word",
          "say": "Use 二维码 (èrwéimǎ) for “QR code.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "二维码",
          "pinyin": "èrwéimǎ",
          "meaning": "QR code",
          "distractors": [
            "phone number",
            "street address",
            "invoice"
          ]
        },
        {
          "id": "u5-1-2",
          "kind": "word",
          "say": "Use 扫描 (sǎomiáo) for “scan.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "扫描",
          "pinyin": "sǎomiáo",
          "meaning": "scan",
          "distractors": [
            "print",
            "delete",
            "deliver"
          ]
        },
        {
          "id": "u5-1-3",
          "kind": "word",
          "say": "Use 账号 (zhànghào) for “account ID.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "账号",
          "pinyin": "zhànghào",
          "meaning": "account ID",
          "distractors": [
            "banknote",
            "delivery date",
            "building"
          ]
        },
        {
          "id": "u5-1-4",
          "kind": "word",
          "say": "Use 通过 (tōngguò) for “approve; pass through.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "通过",
          "pinyin": "tōngguò",
          "meaning": "approve; pass through",
          "distractors": [
            "reject",
            "forget",
            "eat"
          ]
        },
        {
          "id": "u5-1-5",
          "kind": "word",
          "say": "Use 申请 (shēnqǐng) for “request; application.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "申请",
          "pinyin": "shēnqǐng",
          "meaning": "request; application",
          "distractors": [
            "receipt",
            "sample",
            "meal"
          ]
        },
        {
          "id": "u5-1-6",
          "kind": "word",
          "say": "Use 备注 (bèizhù) for “note; contact label.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "备注",
          "pinyin": "bèizhù",
          "meaning": "note; contact label",
          "distractors": [
            "price",
            "station",
            "password"
          ]
        },
        {
          "id": "u5-1-7",
          "kind": "sentence",
          "say": "May I add you on WeChat?",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "我可以加您微信吗？",
          "pinyin": "wǒ kěyǐ jiā nín Wēixìn ma?",
          "meaning": "May I add you on WeChat?",
          "tiles": [
            {
              "hanzi": "我",
              "pinyin": "wǒ"
            },
            {
              "hanzi": "可以",
              "pinyin": "kěyǐ"
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
              "hanzi": "价格",
              "pinyin": "jiàgé"
            }
          ],
          "transfer": true
        },
        {
          "id": "u5-1-8",
          "kind": "grammar",
          "say": "Permission before an action",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Permission before an action",
          "explanation": "我可以…吗 (wǒ kěyǐ…ma) asks whether you may do something. It leaves space for an alternative channel.",
          "examples": [
            {
              "hanzi": "我可以联系您吗？",
              "pinyin": "wǒ kěyǐ liánxì nín ma?",
              "meaning": "May I contact you?"
            }
          ],
          "quiz": {
            "q": "What is being requested?",
            "options": [
              "Permission to add a contact",
              "A price cut",
              "A delivery date"
            ],
            "answer": "Permission to add a contact",
            "why": "可以 (kěyǐ) with 吗 (ma) asks whether the action is okay."
          }
        },
        {
          "id": "u5-1-9",
          "kind": "culture",
          "say": "Relationships begin with consent",
          "src": "Original fictional communication practice",
          "status": "general",
          "title": "Relationships begin with consent",
          "place": "Huaqiangbei",
          "body": "Zhou has introduced you to Chen in person. Before sending project files, ask whether he wants to use his shop account, personal account or another channel.",
          "quiz": {
            "q": "Chen gives you a shop account for project files. Where should you send them?",
            "options": [
              "To that account, with a short introduction and project name",
              "To the first contact with the same surname",
              "To the group chat from an earlier project"
            ],
            "answer": "To that account, with a short introduction and project name",
            "why": "Use the agreed recipient and give enough context to recognize the file."
          }
        },
        {
          "id": "u5-1-10",
          "kind": "scenario",
          "say": "Wrong profile",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Wrong profile",
          "scene": "Two QR codes are posted at Chen’s counter: a shop account and a personal account. You need the work channel.",
          "q": "What should you ask?",
          "options": [
            {
              "text": "哪个是工作账号？ (nǎge shì gōngzuò zhànghào?)",
              "why": "It distinguishes the work account."
            },
            {
              "text": "这个多少钱？ (zhège duōshao qián?)",
              "why": "It asks a price."
            },
            {
              "text": "你几点来？ (nǐ jǐ diǎn lái?)",
              "why": "It asks arrival time."
            }
          ],
          "answer": 0,
          "transfer": true
        }
      ]
    },
    {
      "id": "u5l2",
      "title": "Send one clear message",
      "scene": "You message Lin after a short Nanshan meeting.",
      "mission": "Write a greeting, purpose and simple request.",
      "items": [
        {
          "id": "u5-2-1",
          "kind": "word",
          "say": "Use 消息 (xiāoxi) for “message.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "消息",
          "pinyin": "xiāoxi",
          "meaning": "message",
          "distractors": [
            "invoice",
            "meeting room",
            "sample"
          ]
        },
        {
          "id": "u5-2-2",
          "kind": "word",
          "say": "Use 发送 (fāsòng) for “send.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "发送",
          "pinyin": "fāsòng",
          "meaning": "send",
          "distractors": [
            "receive",
            "cancel",
            "pay"
          ]
        },
        {
          "id": "u5-2-3",
          "kind": "word",
          "say": "Use 收到 (shōudào) for “receive.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "收到",
          "pinyin": "shōudào",
          "meaning": "receive",
          "distractors": [
            "send",
            "write",
            "delete"
          ]
        },
        {
          "id": "u5-2-4",
          "kind": "word",
          "say": "Use 文件 (wénjiàn) for “file; document.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "文件",
          "pinyin": "wénjiàn",
          "meaning": "file; document",
          "distractors": [
            "dish",
            "ticket",
            "floor"
          ]
        },
        {
          "id": "u5-2-5",
          "kind": "word",
          "say": "Use 问题 (wèntí) for “question; problem.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "问题",
          "pinyin": "wèntí",
          "meaning": "question; problem",
          "distractors": [
            "answer",
            "contract",
            "map"
          ]
        },
        {
          "id": "u5-2-6",
          "kind": "word",
          "say": "Use 请问 (qǐngwèn) for “may I ask.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "请问",
          "pinyin": "qǐngwèn",
          "meaning": "may I ask",
          "distractors": [
            "I confirm",
            "I decline",
            "I am late"
          ]
        },
        {
          "id": "u5-2-7",
          "kind": "sentence",
          "say": "May I ask, did you receive the file?",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "请问，您收到文件了吗？",
          "pinyin": "qǐngwèn, nín shōudào wénjiàn le ma?",
          "meaning": "May I ask, did you receive the file?",
          "tiles": [
            {
              "hanzi": "请问",
              "pinyin": "qǐngwèn"
            },
            {
              "hanzi": "，",
              "pinyin": ""
            },
            {
              "hanzi": "您",
              "pinyin": "nín"
            },
            {
              "hanzi": "收到",
              "pinyin": "shōudào"
            },
            {
              "hanzi": "文件",
              "pinyin": "wénjiàn"
            },
            {
              "hanzi": "了吗",
              "pinyin": "le ma"
            },
            {
              "hanzi": "？",
              "pinyin": ""
            }
          ],
          "distractors": [
            {
              "hanzi": "价格",
              "pinyin": "jiàgé"
            }
          ],
          "transfer": true
        },
        {
          "id": "u5-2-8",
          "kind": "grammar",
          "say": "Ask about completion with 了吗 (le ma)",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Ask about completion with 了吗 (le ma)",
          "explanation": "Verb + 了 (le) + 吗 (ma) can ask whether an action has happened. This example checks receipt; it does not presume the file has been read.",
          "examples": [
            {
              "hanzi": "您收到了吗？",
              "pinyin": "nín shōudào le ma?",
              "meaning": "Did you receive it?"
            }
          ],
          "quiz": {
            "q": "What is being checked?",
            "options": [
              "Whether the file arrived",
              "Whether it was approved",
              "Whether it was paid for"
            ],
            "answer": "Whether the file arrived",
            "why": "收到 (shōudào) means receive."
          }
        },
        {
          "id": "u5-2-9",
          "kind": "culture",
          "say": "A courteous follow-up",
          "src": "Original fictional communication practice",
          "status": "general",
          "title": "A courteous follow-up",
          "place": "Nanshan",
          "body": "Lin has not replied since you sent the file. A brief receipt check keeps the exchange clear while allowing for her schedule; her silence does not tell you whether she has approved it.",
          "quiz": {
            "q": "No reply has arrived. What can your project note say?",
            "options": [
              "Receipt or review is still unconfirmed",
              "Lin rejected the file",
              "Lin approved the file"
            ],
            "answer": "Receipt or review is still unconfirmed",
            "why": "Do not infer a hidden decision from silence."
          }
        },
        {
          "id": "u5-2-10",
          "kind": "scenario",
          "say": "Two different checks",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Two different checks",
          "scene": "Your file was sent; you need to know only whether Lin received it.",
          "q": "Which message asks exactly that?",
          "options": [
            {
              "text": "您收到文件了吗？ (nín shōudào wénjiàn le ma?)",
              "why": "It asks about receipt."
            },
            {
              "text": "您同意价格了吗？ (nín tóngyì jiàgé le ma?)",
              "why": "It asks price approval."
            },
            {
              "text": "您到车站了吗？ (nín dào chēzhàn le ma?)",
              "why": "It asks location."
            }
          ],
          "answer": 0,
          "transfer": true
        }
      ]
    },
    {
      "id": "u5l3",
      "title": "Text or voice",
      "scene": "Zhou is traveling and tells you text is easier to review.",
      "mission": "Choose the channel that fits the current task.",
      "items": [
        {
          "id": "u5-3-1",
          "kind": "word",
          "say": "Use 文字 (wénzì) for “written text.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "文字",
          "pinyin": "wénzì",
          "meaning": "written text",
          "distractors": [
            "voice recording",
            "picture",
            "number"
          ]
        },
        {
          "id": "u5-3-2",
          "kind": "word",
          "say": "Use 语音 (yǔyīn) for “voice message.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "语音",
          "pinyin": "yǔyīn",
          "meaning": "voice message",
          "distractors": [
            "written text",
            "video call",
            "invoice"
          ]
        },
        {
          "id": "u5-3-3",
          "kind": "word",
          "say": "Use 打字 (dǎzì) for “type.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "打字",
          "pinyin": "dǎzì",
          "meaning": "type",
          "distractors": [
            "speak",
            "scan",
            "print"
          ]
        },
        {
          "id": "u5-3-4",
          "kind": "word",
          "say": "Use 说话 (shuōhuà) for “speak.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "说话",
          "pinyin": "shuōhuà",
          "meaning": "speak",
          "distractors": [
            "type",
            "read silently",
            "pay"
          ]
        },
        {
          "id": "u5-3-5",
          "kind": "word",
          "say": "Use 清楚 (qīngchu) for “clear.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "清楚",
          "pinyin": "qīngchu",
          "meaning": "clear",
          "distractors": [
            "urgent",
            "expensive",
            "small"
          ]
        },
        {
          "id": "u5-3-6",
          "kind": "word",
          "say": "Use 听不清 (tīng bu qīng) for “cannot hear clearly.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "听不清",
          "pinyin": "tīng bu qīng",
          "meaning": "cannot hear clearly",
          "distractors": [
            "cannot read",
            "cannot pay",
            "cannot go"
          ]
        },
        {
          "id": "u5-3-7",
          "kind": "sentence",
          "say": "Is it convenient to send text?",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "发文字方便吗？",
          "pinyin": "fā wénzì fāngbiàn ma?",
          "meaning": "Is it convenient to send text?",
          "tiles": [
            {
              "hanzi": "发",
              "pinyin": "fā"
            },
            {
              "hanzi": "文字",
              "pinyin": "wénzì"
            },
            {
              "hanzi": "方便",
              "pinyin": "fāngbiàn"
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
              "hanzi": "语音",
              "pinyin": "yǔyīn"
            }
          ],
          "transfer": true
        },
        {
          "id": "u5-3-8",
          "kind": "grammar",
          "say": "Potential with 不 (bu)",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Potential with 不 (bu)",
          "explanation": "听不清 (tīng bu qīng) means being unable to hear clearly. The middle 不 (bu) is neutral in this potential complement; it describes an ability in a situation.",
          "examples": [
            {
              "hanzi": "我听不清。",
              "pinyin": "wǒ tīng bu qīng.",
              "meaning": "I cannot hear clearly."
            }
          ],
          "quiz": {
            "q": "What is the difficulty in 听不清 (tīng bu qīng)?",
            "options": [
              "Hearing clearly",
              "Typing quickly",
              "Finding the station"
            ],
            "answer": "Hearing clearly",
            "why": "听 (tīng) is hear; 清 (qīng) is clear."
          }
        },
        {
          "id": "u5-3-9",
          "kind": "culture",
          "say": "Shekou and work preferences",
          "src": "Original fictional communication practice",
          "status": "general",
          "title": "The channel serves the conversation",
          "place": "Shenzhen transit",
          "body": "Zhou uses several channels for work, but while traveling she asks you to send the part number as text. An exact code is easier to check in writing. Use her stated preference and confirm that she received the right version.",
          "quiz": {
            "q": "Zhou is on a train and asks for text. How should you send the part number?",
            "options": [
              "Type the complete part number in the agreed chat",
              "Send a voice message because it is faster for you",
              "Send only a photograph of a similar model"
            ],
            "answer": "Type the complete part number in the agreed chat",
            "why": "Her request and the need for an exact code determine the useful format."
          }
        },
        {
          "id": "u5-3-10",
          "kind": "scenario",
          "say": "A noisy workshop",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "A noisy workshop",
          "scene": "Chen says 听不清 (tīng bu qīng) while machinery runs. You need to send a part number.",
          "q": "What response best preserves the number?",
          "options": [
            {
              "text": "我发文字。 (wǒ fā wénzì.)",
              "why": "Text makes the exact number reviewable."
            },
            {
              "text": "我再发语音。 (wǒ zài fā yǔyīn.)",
              "why": "Another recording may remain hard to hear."
            },
            {
              "text": "我不说。 (wǒ bù shuō.)",
              "why": "It stops communication without conveying the number."
            }
          ],
          "answer": 0,
          "transfer": true
        }
      ]
    },
    {
      "id": "u5l4",
      "title": "Reply and follow up",
      "scene": "Lin said she will review a sample later this week.",
      "mission": "Reply briefly and avoid treating a tentative plan as approval.",
      "items": [
        {
          "id": "u5-4-1",
          "kind": "word",
          "say": "Use 回复 (huífù) for “reply.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "回复",
          "pinyin": "huífù",
          "meaning": "reply",
          "distractors": [
            "forward",
            "delete",
            "scan"
          ]
        },
        {
          "id": "u5-4-2",
          "kind": "word",
          "say": "Use 稍后 (shāohòu) for “later.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "稍后",
          "pinyin": "shāohòu",
          "meaning": "later",
          "distractors": [
            "now",
            "yesterday",
            "never"
          ]
        },
        {
          "id": "u5-4-3",
          "kind": "word",
          "say": "Use 已经 (yǐjīng) for “already.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "已经",
          "pinyin": "yǐjīng",
          "meaning": "already",
          "distractors": [
            "not yet",
            "maybe",
            "again"
          ]
        },
        {
          "id": "u5-4-4",
          "kind": "word",
          "say": "Use 还没 (hái méi) for “not yet.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "还没",
          "pinyin": "hái méi",
          "meaning": "not yet",
          "distractors": [
            "already",
            "always",
            "soon"
          ]
        },
        {
          "id": "u5-4-5",
          "kind": "word",
          "say": "Use 谢谢 (xièxie) for “thanks.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "谢谢",
          "pinyin": "xièxie",
          "meaning": "thanks",
          "distractors": [
            "sorry",
            "goodbye",
            "please"
          ]
        },
        {
          "id": "u5-4-6",
          "kind": "word",
          "say": "Use 等 (děng) for “wait.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "等",
          "pinyin": "děng",
          "meaning": "wait",
          "distractors": [
            "buy",
            "send",
            "arrive"
          ]
        },
        {
          "id": "u5-4-7",
          "kind": "sentence",
          "say": "Okay, I’ll wait for your reply.",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "好的，我等您回复。",
          "pinyin": "hǎo de, wǒ děng nín huífù.",
          "meaning": "Okay, I’ll wait for your reply.",
          "tiles": [
            {
              "hanzi": "好的",
              "pinyin": "hǎo de"
            },
            {
              "hanzi": "，",
              "pinyin": ""
            },
            {
              "hanzi": "我",
              "pinyin": "wǒ"
            },
            {
              "hanzi": "等",
              "pinyin": "děng"
            },
            {
              "hanzi": "您",
              "pinyin": "nín"
            },
            {
              "hanzi": "回复",
              "pinyin": "huífù"
            },
            {
              "hanzi": "。",
              "pinyin": ""
            }
          ],
          "distractors": [
            {
              "hanzi": "已经",
              "pinyin": "yǐjīng"
            }
          ],
          "transfer": true
        },
        {
          "id": "u5-4-8",
          "kind": "grammar",
          "say": "Not yet: 还没 (hái méi)",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Not yet: 还没 (hái méi)",
          "explanation": "还没 (hái méi) says an event has not happened yet. It does not tell you why or whether it will happen.",
          "examples": [
            {
              "hanzi": "我还没收到回复。",
              "pinyin": "wǒ hái méi shōudào huífù.",
              "meaning": "I have not received a reply yet."
            }
          ],
          "quiz": {
            "q": "What does 还没 (hái méi) state?",
            "options": [
              "An event has not occurred yet",
              "The event is refused forever",
              "The event happened yesterday"
            ],
            "answer": "An event has not occurred yet",
            "why": "It reports current status only."
          }
        },
        {
          "id": "u5-4-9",
          "kind": "culture",
          "say": "Patience without guessing",
          "src": "Original fictional communication practice",
          "status": "general",
          "title": "Patience without guessing",
          "place": "Nanshan",
          "body": "Lin said she would review the sample later. A patient follow-up can ask when she expects an answer; a delay by itself does not tell you her decision.",
          "quiz": {
            "q": "Lin has not replied by evening. What belongs in your status note?",
            "options": [
              "Review still pending",
              "Sample approved",
              "Sample rejected"
            ],
            "answer": "Review still pending",
            "why": "Record only the known status and follow up when appropriate."
          }
        },
        {
          "id": "u5-4-10",
          "kind": "scenario",
          "say": "Tentative review",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Tentative review",
          "scene": "Lin writes 我稍后看 (wǒ shāohòu kàn), “I’ll look later.” Your notes need an approval status.",
          "q": "What should you record now?",
          "options": [
            {
              "text": "Review pending",
              "why": "She has promised to look, not approved."
            },
            {
              "text": "Approved",
              "why": "That has not been said."
            },
            {
              "text": "Rejected",
              "why": "That has not been said."
            }
          ],
          "answer": 0,
          "transfer": true
        }
      ]
    },
    {
      "id": "u5l5",
      "title": "Ask before sharing",
      "scene": "A colleague asks for Chen’s personal contact and a prototype photo.",
      "mission": "Check permission and the correct work channel.",
      "items": [
        {
          "id": "u5-5-1",
          "kind": "word",
          "say": "Use 照片 (zhàopiàn) for “photo.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "照片",
          "pinyin": "zhàopiàn",
          "meaning": "photo",
          "distractors": [
            "invoice",
            "address",
            "sample price"
          ]
        },
        {
          "id": "u5-5-2",
          "kind": "word",
          "say": "Use 分享 (fēnxiǎng) for “share.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "分享",
          "pinyin": "fēnxiǎng",
          "meaning": "share",
          "distractors": [
            "hide",
            "delete",
            "measure"
          ]
        },
        {
          "id": "u5-5-3",
          "kind": "word",
          "say": "Use 私人 (sīrén) for “personal; private.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "私人",
          "pinyin": "sīrén",
          "meaning": "personal; private",
          "distractors": [
            "public",
            "urgent",
            "printed"
          ]
        },
        {
          "id": "u5-5-4",
          "kind": "word",
          "say": "Use 公开 (gōngkāi) for “public.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "公开",
          "pinyin": "gōngkāi",
          "meaning": "public",
          "distractors": [
            "private",
            "late",
            "signed"
          ]
        },
        {
          "id": "u5-5-5",
          "kind": "word",
          "say": "Use 同意 (tóngyì) for “agree; consent.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "同意",
          "pinyin": "tóngyì",
          "meaning": "agree; consent",
          "distractors": [
            "refuse",
            "forget",
            "send"
          ]
        },
        {
          "id": "u5-5-6",
          "kind": "word",
          "say": "Use 保密 (bǎomì) for “keep confidential.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "保密",
          "pinyin": "bǎomì",
          "meaning": "keep confidential",
          "distractors": [
            "publish",
            "pay",
            "schedule"
          ]
        },
        {
          "id": "u5-5-7",
          "kind": "sentence",
          "say": "I’ll ask him first, okay?",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "我先问他，可以吗？",
          "pinyin": "wǒ xiān wèn tā, kěyǐ ma?",
          "meaning": "I’ll ask him first, okay?",
          "tiles": [
            {
              "hanzi": "我",
              "pinyin": "wǒ"
            },
            {
              "hanzi": "先",
              "pinyin": "xiān"
            },
            {
              "hanzi": "问",
              "pinyin": "wèn"
            },
            {
              "hanzi": "他",
              "pinyin": "tā"
            },
            {
              "hanzi": "，",
              "pinyin": ""
            },
            {
              "hanzi": "可以吗",
              "pinyin": "kěyǐ ma"
            },
            {
              "hanzi": "？",
              "pinyin": ""
            }
          ],
          "distractors": [
            {
              "hanzi": "发送",
              "pinyin": "fāsòng"
            }
          ],
          "transfer": true
        },
        {
          "id": "u5-5-8",
          "kind": "grammar",
          "say": "Sequence with 先 (xiān)",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Sequence with 先 (xiān)",
          "explanation": "先 (xiān) before the verb means do that action first. In this scene the question comes before sharing.",
          "examples": [
            {
              "hanzi": "我先问陈伟。",
              "pinyin": "wǒ xiān wèn Chén Wěi.",
              "meaning": "I’ll ask Chen Wei first."
            }
          ],
          "quiz": {
            "q": "Which action comes first?",
            "options": [
              "Asking Chen",
              "Sharing the photo",
              "Publishing the contact"
            ],
            "answer": "Asking Chen",
            "why": "先 (xiān) marks the first action."
          }
        },
        {
          "id": "u5-5-9",
          "kind": "culture",
          "say": "Contacts are not universal permissions",
          "src": "Original fictional communication practice",
          "status": "general",
          "title": "Contacts are not universal permissions",
          "place": "Huaqiangbei",
          "body": "A personal introduction makes it easier to ask Chen directly. Before passing on his number or a prototype photo, check his preference and the project’s sharing rules.",
          "quiz": {
            "q": "A new teammate asks for Chen’s contact. What is a useful next step?",
            "options": [
              "Ask Chen which account he would like you to share",
              "Forward the number used for his personal delivery",
              "Send the old group-chat invitation without checking its purpose"
            ],
            "answer": "Ask Chen which account he would like you to share",
            "why": "A direct check can also prevent sharing the wrong work channel."
          }
        },
        {
          "id": "u5-5-10",
          "kind": "scenario",
          "say": "Personal or shop account",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Personal or shop account",
          "scene": "You have Chen’s personal number; your colleague needs a work update. Chen also has a shop account.",
          "q": "What should you check?",
          "options": [
            {
              "text": "Which channel Chen wants shared",
              "why": "It addresses purpose and permission."
            },
            {
              "text": "Whether your colleague likes photos",
              "why": "That does not address Chen’s preference."
            },
            {
              "text": "The café closing time",
              "why": "That is unrelated to contact sharing."
            }
          ],
          "answer": 0,
          "transfer": true
        }
      ]
    }
  ],
  "assessment": [
    {
      "id": "u5-assess1",
      "kind": "scenario",
      "say": "Which response fits?",
      "src": "Original teaching example; standard Mandarin",
      "status": "general",
      "title": "Message format",
      "scene": "A new contact says 语音听不清 (yǔyīn tīng bu qīng), and you need to send a model code.",
      "q": "Which response fits?",
      "options": [
        {
          "text": "我发文字。 (wǒ fā wénzì.)",
          "why": "Written text preserves the code."
        },
        {
          "text": "我发语音。 (wǒ fā yǔyīn.)",
          "why": "Voice was hard to hear."
        },
        {
          "text": "我不发。 (wǒ bù fā.)",
          "why": "Nothing is conveyed."
        }
      ],
      "answer": 0,
      "transfer": true
    },
    {
      "id": "u5-assess2",
      "kind": "scenario",
      "say": "What can you record?",
      "src": "Original teaching example; standard Mandarin",
      "status": "general",
      "title": "Receipt versus approval",
      "scene": "You sent a document; Chen replies 收到了 (shōudào le).",
      "q": "What can you record?",
      "options": [
        {
          "text": "Received, approval pending",
          "why": "收到 (shōudào) confirms receipt."
        },
        {
          "text": "Approved",
          "why": "No approval was stated."
        },
        {
          "text": "Rejected",
          "why": "No rejection was stated."
        }
      ],
      "answer": 0,
      "transfer": true
    }
  ]
};
unit.lessons[1].items.push({"id": "u5-ch-1", "kind": "character", "say": "Notice 文 (wén) as a visible form in this chapter.", "src": "Original teaching example; standard Mandarin", "status": "general", "hanzi": "文", "pinyin": "wén", "meaning": "writing; text", "distractors": ["number", "voice", "photo"], "component": "文", "note": "文 is visible at the start of 文字 (wénzì) and 文件 (wénjiàn)."});
unit.lessons[2].items.push({"id": "u5-ch-2", "kind": "character", "say": "Notice 手 (shǒu) as a visible form in this chapter.", "src": "Original teaching example; standard Mandarin", "status": "general", "hanzi": "手", "pinyin": "shǒu", "meaning": "hand", "distractors": ["foot", "eye", "mouth"], "component": "扌", "note": "The left side of 打 (dǎ) uses the short hand shape 扌."});
unit.lessons[0].dialogue=[{"speaker": "Chen", "hanzi": "可以加您微信吗？", "pinyin": "kěyǐ jiā nín Wēixìn ma?", "meaning": "May I add you on WeChat?"}, {"speaker": "Learner", "hanzi": "可以。", "pinyin": "kěyǐ.", "meaning": "Yes, you may."}];
  if (typeof module !== "undefined" && module.exports) module.exports = unit;
  if (typeof window !== "undefined") { window.GUANXI_UNITS = window.GUANXI_UNITS || []; window.GUANXI_UNITS.push(unit); }
})();
