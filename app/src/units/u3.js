// Original Guanxi learning content.
(function () {
  const unit = {
  "id": "u3",
  "title": "Find your way together",
  "blurb": "Locate one another and confirm the place and time of a meeting.",
  "place": "Futian and Shekou, Shenzhen",
  "focus": "Places, directions, dates and time",
  "lessons": [
    {
      "id": "u3l1",
      "title": "Where are you?",
      "scene": "You and Zhou arrive at different exits near Futian Station.",
      "mission": "Name your location before moving.",
      "items": [
        {
          "id": "u3-1-1",
          "kind": "word",
          "say": "Use 在 (zài) for “be at; in.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "在",
          "pinyin": "zài",
          "meaning": "be at; in",
          "distractors": [
            "be named",
            "be early",
            "be finished"
          ]
        },
        {
          "id": "u3-1-2",
          "kind": "word",
          "say": "Use 这里 (zhèlǐ) for “here.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "这里",
          "pinyin": "zhèlǐ",
          "meaning": "here",
          "distractors": [
            "there",
            "tomorrow",
            "inside"
          ]
        },
        {
          "id": "u3-1-3",
          "kind": "word",
          "say": "Use 那里 (nàli) for “there.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "那里",
          "pinyin": "nàli",
          "meaning": "there",
          "distractors": [
            "here",
            "yesterday",
            "upstairs"
          ]
        },
        {
          "id": "u3-1-4",
          "kind": "word",
          "say": "Use 车站 (chēzhàn) for “station.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "车站",
          "pinyin": "chēzhàn",
          "meaning": "station",
          "distractors": [
            "restaurant",
            "hotel",
            "office"
          ]
        },
        {
          "id": "u3-1-5",
          "kind": "word",
          "say": "Use 出口 (chūkǒu) for “exit.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "出口",
          "pinyin": "chūkǒu",
          "meaning": "exit",
          "distractors": [
            "entrance",
            "platform",
            "ticket"
          ]
        },
        {
          "id": "u3-1-6",
          "kind": "word",
          "say": "Use 地铁 (dìtiě) for “metro; subway.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "地铁",
          "pinyin": "dìtiě",
          "meaning": "metro; subway",
          "distractors": [
            "taxi",
            "train ticket",
            "map"
          ]
        },
        {
          "id": "u3-1-7",
          "kind": "sentence",
          "say": "I am at Exit 2.",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "我在二号出口。",
          "pinyin": "wǒ zài èr hào chūkǒu.",
          "meaning": "I am at Exit 2.",
          "tiles": [
            {
              "hanzi": "我",
              "pinyin": "wǒ"
            },
            {
              "hanzi": "在",
              "pinyin": "zài"
            },
            {
              "hanzi": "二号",
              "pinyin": "èr hào"
            },
            {
              "hanzi": "出口",
              "pinyin": "chūkǒu"
            },
            {
              "hanzi": "。",
              "pinyin": ""
            }
          ],
          "distractors": [
            {
              "hanzi": "入口",
              "pinyin": "rùkǒu"
            }
          ],
          "transfer": true
        },
        {
          "id": "u3-1-8",
          "kind": "grammar",
          "say": "Place with 在 (zài)",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Place with 在 (zài)",
          "explanation": "Use person + 在 (zài) + place to say where someone is. A number before 号 (hào) names a numbered exit.",
          "examples": [
            {
              "hanzi": "我在这里。",
              "pinyin": "wǒ zài zhèlǐ.",
              "meaning": "I am here."
            }
          ],
          "quiz": {
            "q": "What does 在 (zài) do in 我在这里 (wǒ zài zhèlǐ)?",
            "options": [
              "Locates me",
              "Names me",
              "Counts me"
            ],
            "answer": "Locates me",
            "why": "It connects the person to a place."
          }
        },
        {
          "id": "u3-1-9",
          "kind": "culture",
          "say": "Meet at the exit",
          "src": "Original fictional navigation practice",
          "status": "general",
          "title": "Meet at the exit",
          "place": "Futian station meeting",
          "body": "“At the station” can leave two people searching for each other. In this Futian meeting, Zhou sends 三号出口 (sān hào chūkǒu), Exit 3. Reply with your exit and a nearby sign. Treat the exit here as a practice detail, then use the actual signs when traveling.",
          "quiz": {
            "q": "Zhou is at Exit 3 and you are at Exit 2. Which message helps coordinate?",
            "options": [
              "I am at Exit 2; shall I come to Exit 3?",
              "I have arrived, with no exit detail",
              "I am at Exit 3, because that is your meeting point"
            ],
            "answer": "I am at Exit 2; shall I come to Exit 3?",
            "why": "State your actual location before agreeing how to meet."
          }
        },
        {
          "id": "u3-1-10",
          "kind": "scenario",
          "say": "Two exits",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Two exits",
          "scene": "Zhou writes 我在三号出口 (wǒ zài sān hào chūkǒu). You are at Exit 2.",
          "q": "What should you reply?",
          "options": [
            {
              "text": "我在二号出口。 (wǒ zài èr hào chūkǒu.)",
              "why": "It gives your actual location."
            },
            {
              "text": "我在三号出口。 (wǒ zài sān hào chūkǒu.)",
              "why": "It would incorrectly say you are with Zhou."
            },
            {
              "text": "我在地铁。 (wǒ zài dìtiě.)",
              "why": "It is less precise."
            }
          ],
          "answer": 0,
          "transfer": true
        }
      ]
    },
    {
      "id": "u3l2",
      "title": "Find the doorway",
      "scene": "Lin sends a pin near a Shekou office, and you need the correct entrance.",
      "mission": "Use simple direction words.",
      "items": [
        {
          "id": "u3-2-1",
          "kind": "word",
          "say": "Use 左 (zuǒ) for “left.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "左",
          "pinyin": "zuǒ",
          "meaning": "left",
          "distractors": [
            "right",
            "front",
            "back"
          ]
        },
        {
          "id": "u3-2-2",
          "kind": "word",
          "say": "Use 右 (yòu) for “right.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "右",
          "pinyin": "yòu",
          "meaning": "right",
          "distractors": [
            "left",
            "north",
            "inside"
          ]
        },
        {
          "id": "u3-2-3",
          "kind": "word",
          "say": "Use 前面 (qiánmiàn) for “in front; ahead.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "前面",
          "pinyin": "qiánmiàn",
          "meaning": "in front; ahead",
          "distractors": [
            "behind",
            "inside",
            "across town"
          ]
        },
        {
          "id": "u3-2-4",
          "kind": "word",
          "say": "Use 后面 (hòumian) for “behind.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "后面",
          "pinyin": "hòumian",
          "meaning": "behind",
          "distractors": [
            "ahead",
            "on top",
            "to the left"
          ]
        },
        {
          "id": "u3-2-5",
          "kind": "word",
          "say": "Use 旁边 (pángbiān) for “beside.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "旁边",
          "pinyin": "pángbiān",
          "meaning": "beside",
          "distractors": [
            "far away",
            "above",
            "yesterday"
          ]
        },
        {
          "id": "u3-2-6",
          "kind": "word",
          "say": "Use 入口 (rùkǒu) for “entrance.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "入口",
          "pinyin": "rùkǒu",
          "meaning": "entrance",
          "distractors": [
            "exit",
            "elevator",
            "stairs"
          ]
        },
        {
          "id": "u3-2-7",
          "kind": "sentence",
          "say": "The entrance is on the right.",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "入口在右边。",
          "pinyin": "rùkǒu zài yòubian.",
          "meaning": "The entrance is on the right.",
          "tiles": [
            {
              "hanzi": "入口",
              "pinyin": "rùkǒu"
            },
            {
              "hanzi": "在",
              "pinyin": "zài"
            },
            {
              "hanzi": "右边",
              "pinyin": "yòubian"
            },
            {
              "hanzi": "。",
              "pinyin": ""
            }
          ],
          "distractors": [
            {
              "hanzi": "左边",
              "pinyin": "zuǒbian"
            }
          ],
          "transfer": true
        },
        {
          "id": "u3-2-8",
          "kind": "grammar",
          "say": "Locate a thing",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Locate a thing",
          "explanation": "Put the thing first, then 在 (zài), then the location. 右边 (yòubian) means “right side.”",
          "examples": [
            {
              "hanzi": "车站在前面。",
              "pinyin": "chēzhàn zài qiánmiàn.",
              "meaning": "The station is ahead."
            }
          ],
          "quiz": {
            "q": "What comes first in 入口在右边 (rùkǒu zài yòubian)?",
            "options": [
              "The entrance",
              "The right side",
              "The visitor"
            ],
            "answer": "The entrance",
            "why": "This sentence locates the entrance."
          }
        },
        {
          "id": "u3-2-9",
          "kind": "culture",
          "say": "Read the address in layers",
          "src": "sz-shekou",
          "status": "sourced",
          "title": "Read the address in layers",
          "place": "Shekou, Nanshan",
          "body": "Shekou is in Nanshan District, across Shenzhen Bay from Hong Kong. In an address, the district and neighborhood orient you; a building name, floor and entrance finish the job. Keep 蛇口 (Shékǒu) visible on your phone when confirming the place.",
          "quiz": {
            "q": "Lin says the office is in Shekou. What would make the address usable?",
            "options": [
              "The building and entrance, as well as the neighborhood",
              "Only the word Shenzhen",
              "Only her home province"
            ],
            "answer": "The building and entrance, as well as the neighborhood",
            "why": "A district or neighborhood is wider than one meeting place."
          }
        },
        {
          "id": "u3-2-10",
          "kind": "scenario",
          "say": "Left or right?",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Left or right?",
          "scene": "Lin says 入口在右边 (rùkǒu zài yòubian). You see a door to the left and another to the right.",
          "q": "Which door fits her message?",
          "options": [
            {
              "text": "The right-hand door",
              "why": "右边 (yòubian) means the right side."
            },
            {
              "text": "The left-hand door",
              "why": "That would be 左边 (zuǒbian)."
            },
            {
              "text": "Either door",
              "why": "Her instruction distinguishes them."
            }
          ],
          "answer": 0,
          "transfer": true
        }
      ]
    },
    {
      "id": "u3l3",
      "title": "Make a time",
      "scene": "Zhou proposes a café meeting near a Futian metro stop.",
      "mission": "Ask and confirm clock time.",
      "items": [
        {
          "id": "u3-3-1",
          "kind": "word",
          "say": "Use 现在 (xiànzài) for “now.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "现在",
          "pinyin": "xiànzài",
          "meaning": "now",
          "distractors": [
            "later",
            "yesterday",
            "tomorrow"
          ]
        },
        {
          "id": "u3-3-2",
          "kind": "word",
          "say": "Use 今天 (jīntiān) for “today.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "今天",
          "pinyin": "jīntiān",
          "meaning": "today",
          "distractors": [
            "tomorrow",
            "yesterday",
            "next week"
          ]
        },
        {
          "id": "u3-3-3",
          "kind": "word",
          "say": "Use 明天 (míngtiān) for “tomorrow.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "明天",
          "pinyin": "míngtiān",
          "meaning": "tomorrow",
          "distractors": [
            "today",
            "yesterday",
            "last month"
          ]
        },
        {
          "id": "u3-3-4",
          "kind": "word",
          "say": "Use 几点 (jǐ diǎn) for “what time (hour).”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "几点",
          "pinyin": "jǐ diǎn",
          "meaning": "what time (hour)",
          "distractors": [
            "which station",
            "how much money",
            "how many people"
          ]
        },
        {
          "id": "u3-3-5",
          "kind": "word",
          "say": "Use 点 (diǎn) for “o’clock; point.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "点",
          "pinyin": "diǎn",
          "meaning": "o’clock; point",
          "distractors": [
            "day",
            "week",
            "exit"
          ]
        },
        {
          "id": "u3-3-6",
          "kind": "word",
          "say": "Use 半 (bàn) for “half.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "半",
          "pinyin": "bàn",
          "meaning": "half",
          "distractors": [
            "whole",
            "quarter",
            "late"
          ]
        },
        {
          "id": "u3-3-7",
          "kind": "sentence",
          "say": "Let’s meet at 3:30.",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "我们三点半见。",
          "pinyin": "wǒmen sān diǎn bàn jiàn.",
          "meaning": "Let’s meet at 3:30.",
          "tiles": [
            {
              "hanzi": "我们",
              "pinyin": "wǒmen"
            },
            {
              "hanzi": "三点半",
              "pinyin": "sān diǎn bàn"
            },
            {
              "hanzi": "见",
              "pinyin": "jiàn"
            },
            {
              "hanzi": "。",
              "pinyin": ""
            }
          ],
          "distractors": [
            {
              "hanzi": "明天",
              "pinyin": "míngtiān"
            }
          ],
          "transfer": true
        },
        {
          "id": "u3-3-8",
          "kind": "grammar",
          "say": "Time before the action",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Time before the action",
          "explanation": "A time phrase usually comes before the verb. 三点半 (sān diǎn bàn) is three thirty, and 见 (jiàn) here means meet or see.",
          "examples": [
            {
              "hanzi": "我们三点见。",
              "pinyin": "wǒmen sān diǎn jiàn.",
              "meaning": "We’ll meet at three."
            }
          ],
          "quiz": {
            "q": "Where does 三点半 (sān diǎn bàn) go?",
            "options": [
              "Before 见 (jiàn)",
              "After the final particle",
              "Inside the place name"
            ],
            "answer": "Before 见 (jiàn)",
            "why": "The time precedes the action."
          }
        },
        {
          "id": "u3-3-9",
          "kind": "culture",
          "say": "Confirm the whole appointment",
          "src": "Original fictional scheduling practice",
          "status": "general",
          "title": "Confirm the whole appointment",
          "place": "Futian café",
          "body": "A friendly 三点半见 (sān diǎn bàn jiàn)—“See you at half past three”—works when both people share the context. If your messages cover several days, confirm the day and whether it is morning or afternoon. Precision makes it easier to be considerate.",
          "quiz": {
            "q": "You have only “3:30” in a message spanning two days. What should you confirm?",
            "options": [
              "Which day and morning or afternoon",
              "Only whether tea will be served",
              "Only the neighborhood’s Chinese spelling"
            ],
            "answer": "Which day and morning or afternoon",
            "why": "A time needs a shared day and part of the day."
          }
        },
        {
          "id": "u3-3-10",
          "kind": "scenario",
          "say": "Today or tomorrow?",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Today or tomorrow?",
          "scene": "Zhou writes 三点半见 (sān diǎn bàn jiàn), but the conversation spans tomorrow’s visit.",
          "q": "What should you clarify?",
          "options": [
            {
              "text": "是今天还是明天？ (shì jīntiān háishi míngtiān?)",
              "why": "It resolves the day."
            },
            {
              "text": "在左边吗？ (zài zuǒbian ma?)",
              "why": "That asks location side."
            },
            {
              "text": "多少钱？ (duōshao qián?)",
              "why": "That asks price."
            }
          ],
          "answer": 0,
          "transfer": true
        }
      ]
    },
    {
      "id": "u3l4",
      "title": "Choose a date",
      "scene": "Lin has two possible days for a Shekou meeting.",
      "mission": "Read simple weekday and date language.",
      "items": [
        {
          "id": "u3-4-1",
          "kind": "word",
          "say": "Use 星期 (xīngqī) for “week; weekday marker.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "星期",
          "pinyin": "xīngqī",
          "meaning": "week; weekday marker",
          "distractors": [
            "month",
            "hour",
            "station"
          ]
        },
        {
          "id": "u3-4-2",
          "kind": "word",
          "say": "Use 星期一 (xīngqīyī) for “Monday.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "星期一",
          "pinyin": "xīngqīyī",
          "meaning": "Monday",
          "distractors": [
            "Tuesday",
            "Sunday",
            "January"
          ]
        },
        {
          "id": "u3-4-3",
          "kind": "word",
          "say": "Use 星期五 (xīngqīwǔ) for “Friday.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "星期五",
          "pinyin": "xīngqīwǔ",
          "meaning": "Friday",
          "distractors": [
            "Monday",
            "Sunday",
            "May"
          ]
        },
        {
          "id": "u3-4-4",
          "kind": "word",
          "say": "Use 月 (yuè) for “month.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "月",
          "pinyin": "yuè",
          "meaning": "month",
          "distractors": [
            "year",
            "day",
            "week"
          ]
        },
        {
          "id": "u3-4-5",
          "kind": "word",
          "say": "Use 日 (rì) for “day of month (formal date).”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "日",
          "pinyin": "rì",
          "meaning": "day of month (formal date)",
          "distractors": [
            "minute",
            "price",
            "left side"
          ]
        },
        {
          "id": "u3-4-6",
          "kind": "word",
          "say": "Use 哪天 (nǎ tiān) for “which day.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "哪天",
          "pinyin": "nǎ tiān",
          "meaning": "which day",
          "distractors": [
            "which person",
            "which place",
            "which price"
          ]
        },
        {
          "id": "u3-4-7",
          "kind": "sentence",
          "say": "Is Friday convenient for you?",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "你星期五方便吗？",
          "pinyin": "nǐ xīngqīwǔ fāngbiàn ma?",
          "meaning": "Is Friday convenient for you?",
          "tiles": [
            {
              "hanzi": "你",
              "pinyin": "nǐ"
            },
            {
              "hanzi": "星期五",
              "pinyin": "xīngqīwǔ"
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
              "hanzi": "星期一",
              "pinyin": "xīngqīyī"
            }
          ],
          "transfer": true
        },
        {
          "id": "u3-4-8",
          "kind": "grammar",
          "say": "Day before predicate",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Day before predicate",
          "explanation": "A day can stand between the subject and the action or description: 你星期五方便吗 (nǐ xīngqīwǔ fāngbiàn ma)?",
          "examples": [
            {
              "hanzi": "我星期一有时间。",
              "pinyin": "wǒ xīngqīyī yǒu shíjiān.",
              "meaning": "I have time on Monday."
            }
          ],
          "quiz": {
            "q": "Which word gives the day in 你星期五方便吗 (nǐ xīngqīwǔ fāngbiàn ma)?",
            "options": [
              "星期五 (xīngqīwǔ)",
              "方便 (fāngbiàn)",
              "吗 (ma)"
            ],
            "answer": "星期五 (xīngqīwǔ)",
            "why": "It means Friday."
          }
        },
        {
          "id": "u3-4-9",
          "kind": "culture",
          "say": "Make room for a neighborhood walk",
          "src": "sz-nantou",
          "status": "sourced",
          "title": "Make room for a neighborhood walk",
          "place": "Shekou",
          "body": "Shekou includes older neighborhoods as well as modern business spaces. Near Chiwan, Tianhou Temple is associated with Mazu, a sea goddess. If Lin suggests a walk, ask what she wants to show you and agree a time that works for both of you.",
          "quiz": {
            "q": "Lin offers a neighborhood walk on Friday, but your supplier visit may run late. What works best?",
            "options": [
              "Explain the timing conflict and propose a workable time",
              "Accept immediately and decide later whether to appear",
              "Decline because a walk cannot help a business relationship"
            ],
            "answer": "Explain the timing conflict and propose a workable time",
            "why": "Interest and a realistic plan go together. A social invitation does not require overpromising."
          }
        },
        {
          "id": "u3-4-10",
          "kind": "scenario",
          "say": "Friday or Monday",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Friday or Monday",
          "scene": "Lin offers 星期一 (xīngqīyī) or 星期五 (xīngqīwǔ). You can only attend Friday.",
          "q": "Which reply states the usable day?",
          "options": [
            {
              "text": "星期五方便。 (xīngqīwǔ fāngbiàn.)",
              "why": "It confirms Friday."
            },
            {
              "text": "星期一方便。 (xīngqīyī fāngbiàn.)",
              "why": "It would accept Monday."
            },
            {
              "text": "哪天方便？ (nǎ tiān fāngbiàn?)",
              "why": "It asks again instead of answering."
            }
          ],
          "answer": 0,
          "transfer": true
        }
      ]
    },
    {
      "id": "u3l5",
      "title": "Confirm the plan",
      "scene": "You compare notes with Zhou before leaving Futian for Shekou.",
      "mission": "Restate day, time and location.",
      "items": [
        {
          "id": "u3-5-1",
          "kind": "word",
          "say": "Use 地址 (dìzhǐ) for “address.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "地址",
          "pinyin": "dìzhǐ",
          "meaning": "address",
          "distractors": [
            "price",
            "name",
            "sample"
          ]
        },
        {
          "id": "u3-5-2",
          "kind": "word",
          "say": "Use 地图 (dìtú) for “map.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "地图",
          "pinyin": "dìtú",
          "meaning": "map",
          "distractors": [
            "ticket",
            "invoice",
            "menu"
          ]
        },
        {
          "id": "u3-5-3",
          "kind": "word",
          "say": "Use 确认 (quèrèn) for “confirm.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "确认",
          "pinyin": "quèrèn",
          "meaning": "confirm",
          "distractors": [
            "cancel",
            "guess",
            "deliver"
          ]
        },
        {
          "id": "u3-5-4",
          "kind": "word",
          "say": "Use 时间 (shíjiān) for “time.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "时间",
          "pinyin": "shíjiān",
          "meaning": "time",
          "distractors": [
            "place",
            "person",
            "money"
          ]
        },
        {
          "id": "u3-5-5",
          "kind": "word",
          "say": "Use 地点 (dìdiǎn) for “place; venue.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "地点",
          "pinyin": "dìdiǎn",
          "meaning": "place; venue",
          "distractors": [
            "time",
            "quantity",
            "role"
          ]
        },
        {
          "id": "u3-5-6",
          "kind": "word",
          "say": "Use 见 (jiàn) for “meet; see.”",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "见",
          "pinyin": "jiàn",
          "meaning": "meet; see",
          "distractors": [
            "buy",
            "eat",
            "send"
          ]
        },
        {
          "id": "u3-5-7",
          "kind": "sentence",
          "say": "Please confirm the time and place.",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "hanzi": "请确认时间和地点。",
          "pinyin": "qǐng quèrèn shíjiān hé dìdiǎn.",
          "meaning": "Please confirm the time and place.",
          "tiles": [
            {
              "hanzi": "请",
              "pinyin": "qǐng"
            },
            {
              "hanzi": "确认",
              "pinyin": "quèrèn"
            },
            {
              "hanzi": "时间",
              "pinyin": "shíjiān"
            },
            {
              "hanzi": "和",
              "pinyin": "hé"
            },
            {
              "hanzi": "地点",
              "pinyin": "dìdiǎn"
            },
            {
              "hanzi": "。",
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
          "id": "u3-5-8",
          "kind": "grammar",
          "say": "Join two nouns with 和 (hé)",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Join two nouns with 和 (hé)",
          "explanation": "和 (hé) links nouns such as 时间 (shíjiān) and 地点 (dìdiǎn). In this sentence both are objects of 确认 (quèrèn).",
          "examples": [
            {
              "hanzi": "时间和地点",
              "pinyin": "shíjiān hé dìdiǎn",
              "meaning": "time and place"
            }
          ],
          "quiz": {
            "q": "What does 和 (hé) join here?",
            "options": [
              "Two things to confirm",
              "Two people speaking",
              "Two different prices"
            ],
            "answer": "Two things to confirm",
            "why": "The two nouns are time and place."
          }
        },
        {
          "id": "u3-5-9",
          "kind": "culture",
          "say": "One message everyone can use",
          "src": "Original fictional coordination practice",
          "status": "general",
          "title": "One message everyone can use",
          "place": "Shekou meeting",
          "body": "Before leaving, send one short recap: day, time, place and entrance. Ask the other person to confirm a mismatch. This is especially helpful while learning Mandarin: a written name or number can settle something you did not catch by ear.",
          "quiz": {
            "q": "Your calendar and Zhou’s message disagree about both day and entrance. What should the recap do?",
            "options": [
              "Name both conflicting details and ask which is correct",
              "Repeat only the time, which already matches",
              "Choose your calendar’s version without asking"
            ],
            "answer": "Name both conflicting details and ask which is correct",
            "why": "Point to the actual differences so the reply can resolve them."
          }
        },
        {
          "id": "u3-5-10",
          "kind": "scenario",
          "say": "Conflicting notes",
          "src": "Original teaching example; standard Mandarin",
          "status": "general",
          "title": "Conflicting notes",
          "scene": "Your calendar says Friday 3:30 at the south entrance. Zhou’s message says Monday 3:30 at the north entrance.",
          "q": "Which response fits?",
          "options": [
            {
              "text": "请确认时间和地点。 (qǐng quèrèn shíjiān hé dìdiǎn.)",
              "why": "Both day and entrance conflict."
            },
            {
              "text": "星期五见。 (xīngqīwǔ jiàn.)",
              "why": "It commits to one unverified version."
            },
            {
              "text": "我在这里。 (wǒ zài zhèlǐ.)",
              "why": "It does not resolve the plan."
            }
          ],
          "answer": 0,
          "transfer": true
        }
      ]
    }
  ]
};
;unit.assessment=[{"id": "u3-assess1", "kind": "scenario", "say": "Which part needs checking?", "src": "Original teaching example; standard Mandarin", "status": "general", "title": "Confirm two details", "scene": "A new meeting note says Tuesday at 10:00, but your calendar says Friday at 10:00.", "q": "Which part needs checking?", "options": [{"text": "哪天？ (nǎ tiān?)", "why": "The day differs."}, {"text": "几点？ (jǐ diǎn?)", "why": "The clock time agrees."}, {"text": "在哪儿？ (zài nǎr?)", "why": "No place conflict was given."}], "answer": 0, "transfer": true}, {"id": "u3-assess2", "kind": "scenario", "say": "Where should you look?", "src": "Original teaching example; standard Mandarin", "status": "general", "title": "Locate a teammate", "scene": "At a Shekou office, Chen says 我在入口旁边 (wǒ zài rùkǒu pángbiān).", "q": "Where should you look?", "options": [{"text": "Beside the entrance", "why": "旁边 (pángbiān) means beside."}, {"text": "Behind the station", "why": "That is a different place."}, {"text": "At Exit 2", "why": "No exit number was given."}], "answer": 0, "transfer": true}]
unit.lessons[0].items.push({"id": "u3-ch-1", "kind": "character", "say": "Notice 土 (tǔ) as a visible form in this chapter.", "src": "Original teaching example; standard Mandarin", "status": "general", "hanzi": "土", "pinyin": "tǔ", "meaning": "earth; soil", "distractors": ["sky", "river", "door"], "component": "土", "note": "The left side of 地 (dì) shows 土."});
unit.lessons[2].items.push({"id": "u3-ch-2", "kind": "character", "say": "Notice 日 (rì) as a visible form in this chapter.", "src": "Original teaching example; standard Mandarin", "status": "general", "hanzi": "日", "pinyin": "rì", "meaning": "sun; day", "distractors": ["month", "night", "year"], "component": "日", "note": "The left side of 时 (shí) shows the 日 block."});
unit.lessons[0].dialogue=[{"speaker": "Lin", "hanzi": "我在二号出口。", "pinyin": "wǒ zài èr hào chūkǒu.", "meaning": "I am at Exit 2."}, {"speaker": "Learner", "hanzi": "好的，我在这里。", "pinyin": "hǎo de, wǒ zài zhèlǐ.", "meaning": "Okay, I am here."}];
  if (typeof module !== "undefined" && module.exports) module.exports = unit;
  if (typeof window !== "undefined") { window.GUANXI_UNITS = window.GUANXI_UNITS || []; window.GUANXI_UNITS.push(unit); }
})();
