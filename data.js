window.YS_DATA = {
  curriculum: {
    "1-上-语文": [
      {title:"第 1 单元", points:["修订版单元主题待实发教材目录校准"], status:"pending"},
      {title:"第 2 单元", points:["汉语拼音单元（具体篇目待目录校准）"], status:"pending"},
      {title:"第 3 单元", points:["汉语拼音单元（具体篇目待目录校准）"], status:"pending"},
      {title:"第 4 单元", points:["汉语拼音单元（具体篇目待目录校准）"], status:"pending"},
      {title:"第 5 单元", points:["借助拼音正确朗读课文"], status:"verified"},
      {title:"第 6 单元", points:["修订版单元主题待实发教材目录校准"], status:"pending"},
      {title:"第 7 单元", points:["初步学习寻找明显的信息"], status:"verified"},
      {title:"第 8 单元", points:["读好长句子"], status:"verified"}
    ],
    "1-上-数学": [
      {title:"第 1 单元", points:["最新版标题待实发教材目录校准"], status:"pending"}, {title:"第 2 单元", points:["最新版标题待实发教材目录校准"], status:"pending"},
      {title:"5以内数的认识和加、减法", points:["出版社已确认的新版连续单元之一"], status:"verified"}, {title:"6～10的认识和加、减法", points:["出版社已确认的新版连续单元之一"], status:"verified"},
      {title:"第 5 单元", points:["最新版标题待实发教材目录校准"], status:"pending"}, {title:"第 6 单元", points:["最新版标题待实发教材目录校准"], status:"pending"},
      {title:"第 7 单元", points:["最新版标题待实发教材目录校准"], status:"pending"}, {title:"复习与关联", points:["新版每册末复习结构已核实"], status:"verified"}
    ],
    "1-上-英语": Array.from({length:10},(_,i)=>({title:`Module ${i+1}`,points:["外研社一年级起点模块内容：目录标题待逐册权威页面复核"],status:"pending"})),
    "2-上-语文": ["借助图片了解课文内容","识字单元（公开表未列阅读要素）","对感兴趣内容说感受或想法","联系上下文和生活经验理解词句","初步体会道理；根据信息作简单推断","借助相关词句了解内容","展开想象，获得初步情感体验","综合运用多种方法自主识字；学习默读"].map((p,i)=>({title:`第 ${i+1} 单元`,points:[p],status:"verified"})),
    "2-下-语文": ["朗读注意语气和重音","读句子想象画面","识字单元（公开表未列阅读要素）","综合运用多种方法自主阅读","根据内容说感受或看法","提取主要信息","借助提示讲故事","继续学习默读；了解故事起因、经过和结果"].map((p,i)=>({title:`第 ${i+1} 单元`,points:[p],status:"verified"})),
    "2-上-数学": Array.from({length:8},(_,i)=>({title:i===7?"复习与关联":`第 ${i+1} 单元`,points:[i===7?"新版每册末复习结构已核实":"最新版单元标题待实发教材目录校准"],status:i===7?"verified":"pending"}))
  },
  fallbackUnits: subject => Array.from({length: subject==='英语'?10:8},(_,i)=>({title:subject==='英语'?`Module ${i+1}`:`第 ${i+1} 单元`,points:["权威目录尚未完整核实，当前仅提供通用能力练习"],status:"pending"})),
  questions: {
    "1": {
      "语文":[
        ["清晨，窗外树叶不停摇动，小满出门前最适合说什么？",["风可能很大，我要戴好帽子","太阳一定落山了","今天一定下雪","河水一定结冰"],"风可能很大，我要戴好帽子","观察与推断","","树叶摇动说明空气在流动，可能有风。先根据看到的现象作判断，比只凭感觉猜更可靠。"],
        ["诗句“白毛浮绿水，红掌拨清波”里，哪两个词最能帮助我们想象颜色？",["白毛、红掌","浮、拨","绿水、清波","白毛、浮"],"白毛、红掌","诗歌与色彩","","“白”和“红”直接写出颜色。古诗常用少量词语画出鲜明的画面。"],
        ["古代没有天气预报。看到乌云越来越多，小童准备出门，怎样安排最合理？",["看乌云","带上伞","再出门"],"看乌云 → 带上伞 → 再出门","步骤排序","","先观察，再准备，最后行动，是解决生活问题的基本顺序。","sort"],
        ["在书院里借阅竹简，哪些做法既有礼貌又能保护物品？",["轻轻翻看","洗净双手","在竹简上乱画","看完放回原处"],"轻轻翻看|洗净双手|看完放回原处","阅读与生活","","公共物品要轻拿轻放、保持清洁并归还原处。礼貌与责任常常同时出现。",{"type":"multi"}],
        ["“小河像一条银色的带子，绕过村庄。”这句话让你最容易想象到什么？",["河道弯弯的样子","河水很烫","村庄会飞","带子会唱歌"],"河道弯弯的样子","比喻与地理","","把小河比作带子，是因为从高处看，弯曲的河道很像长长的带子。"],
        ["古人把重要消息写在纸上交给驿使。为了让对方看懂，消息最需要做到什么？",["事情和地点写清楚","字越多越好","只画花纹","不写给谁"],"事情和地点写清楚","信息表达","","传递消息最重要的是准确：谁、什么事、在哪里，都要说清楚。"],
        ["读句子：“太阳快落山了，赶路的人加快脚步。”赶路人为什么加快脚步？",["想在天黑前到达","想看太阳升起","路突然变短了","鞋子变轻了"],"想在天黑前到达","因果推理","","太阳落山后光线变暗，行路更不方便。句子没有直接说，但可以联系生活推断。"],
        ["站在古城门口，路牌写着“东市向左，西市向右”。想去东市应该怎样走？",["向左走","向右走","向后退","留在原地"],"向左走","阅读地图","","路牌是生活中的实用文字。读懂方向信息，就能把文字转成行动。"],
        ["“春风一吹，柳枝先绿；桃花随后开。”这句话主要写了什么？",["春天景物变化有先后","柳树比桃树高","春风是绿色的","桃花不会开放"],"春天景物变化有先后","自然观察","","“先”和“随后”告诉我们变化有顺序，也体现了春天物候的变化。"],
        ["给远方同学介绍自己的家乡，哪句话提供的信息最有用？",["我家乡靠近一条大河，春天常有桃花","这里很好很好","我什么都喜欢","你猜一猜吧"],"我家乡靠近一条大河，春天常有桃花","表达与地理","","具体的地点特征和季节景物能帮助别人形成清楚的画面。"]
      ],
      "数学":[
        ["集市上每个竹篮最多装5个桃子。现在有8个桃子，至少要几个篮子？",["1个","2个","3个","8个"],"2个","数量与生活","","一个篮子装5个，还剩3个，需要第二个篮子。这里要考虑“装得下”，不是只做除法。"],
        ["石桥两边各挂4盏灯，中间再挂1盏，一共有多少盏？",["8盏","9盏","10盏","5盏"],"9盏","对称与计数","","两边是4+4，再加中间1盏，共9盏。古桥装饰常利用左右对称。"],
        ["三个陶罐分别能装2碗、5碗、7碗水。要装6碗水，选哪个最合适？",["2碗的罐","5碗的罐","7碗的罐","三个都一样"],"7碗的罐","容量估计","","容器容量不能小于要装的水量。7碗的罐能装下6碗，而且只多1碗空间。"],
        ["小童从家到书院要走10分钟，8时上课。他最晚应在什么时候出门？",["7时50分","8时10分","7时10分","8时"],"7时50分","时间规划","","从8时往前推10分钟，就是7时50分。规划时间要把路程用时算进去。"],
        ["一块方砖旋转半圈后，形状和大小会怎样？",["都不变","形状变圆","大小变小","变成三角形"],"都不变","图形与建筑","","旋转只改变方向，不改变图形的形状和大小。古代地砖纹样常利用旋转形成图案。"],
        ["把“观察长度、选择尺子、从0开始量、读出刻度”排成正确顺序。",["观察长度","选择尺子","从0开始量","读出刻度"],"观察长度 → 选择尺子 → 从0开始量 → 读出刻度","测量步骤","","先明确要量什么，再选工具、对准零刻度，最后读数，结果才可靠。","sort"],
        ["有10块点心，哪些分法能让两盘一样多？",["每盘5块","一盘4块一盘6块","先拿走2块，再每盘4块","一盘3块一盘7块"],"每盘5块|先拿走2块，再每盘4块","等分思维","","一样多要求两边数量相等。10可以分成5和5；若先拿走2块，剩8块也能分成4和4。",{"type":"multi"}],
        ["驿站在村庄东边，书院在驿站东边。从村庄到书院总体向哪个方向？",["东","西","南","北"],"东","方位推理","","连续两次向东，最终位置仍在出发点的东边。"],
        ["窗格图案按“圆、方、圆、方”重复，第7个是什么？",["圆","方","三角","无法判断"],"圆","规律与纹样","","奇数位置是圆，偶数位置是方。传统窗格和织物常用重复规律。"],
        ["古人用算筹摆数。十位上1根表示1个十，个位上3根表示3个一，这个数是多少？",["13","31","4","103"],"13","数位与历史","","1个十和3个一组成13。算筹是古代表示数和计算的工具之一。"]
      ],
      "英语":[
        ["What can you say to your teacher in the morning?",["Good morning!","Good night!","Goodbye!","Thank you!"],"Good morning!","Greetings","","Morning greetings match the time of day."],
        ["Look at the picture. What color is the kite?",["Red","Blue","Yellow","Green"],"Red","Picture: Colors","english-ancient-academy.webp","The kite is bright red, so 'Red' is the best answer."],
        ["Look at the picture. How many birds can you see?",["One","Two","Three","Four"],"Two","Picture: Numbers","english-ancient-academy.webp","Count each bird once. There are two birds in the sky."],
        ["Look at the picture. Where is the cat?",["Under the bench","In the sky","On the bridge","Behind the child"],"Under the bench","Picture: Position","english-ancient-academy.webp","The cat is below the seat of the bench, so it is under the bench."],
        ["Put the actions in a sensible order before flying a kite.",["Check the wind","Hold the string","Run carefully"],"Check the wind → Hold the string → Run carefully","Sequence","english-ancient-academy.webp","First observe the wind, then hold the kite string, and finally move carefully.","sort"],
        ["Choose all true sentences about the picture.",["The child wears blue.","The kite is red.","There are two birds.","It is snowing."],"The child wears blue.|The kite is red.|There are two birds.","Picture: Evidence","english-ancient-academy.webp","The clothes are blue, the kite is red, and two birds are visible. The weather is sunny, not snowy.",{"type":"multi"}],
        ["A friend gives you a book. What is the kind reply?",["Thank you.","Good night.","Stand up.","I am a kite."],"Thank you.","Social Language","","'Thank you' shows appreciation when someone gives you something."],
        ["The clouds are dark and the wind is strong. What should you take?",["An umbrella","A bowl","A pillow","A drum"],"An umbrella","Life Skills","","Dark clouds and strong wind can be signs of rain, so an umbrella is useful."],
        ["Which sentence gives both a place and an object?",["The cat is under the bench.","The cat is orange.","I see a cat.","The cat is small."],"The cat is under the bench.","Language and Space","","'Under the bench' tells us where the cat is and names the object used as a reference."],
        ["You see a small bird with a hurt wing. What is the safest idea?",["Tell an adult and keep a little distance","Run after it","Pick it up at once","Throw food at it"],"Tell an adult and keep a little distance","Care and Safety","","An adult can help safely. Keeping some distance protects both the child and the bird."]
      ]
    },
    "2": {
      "语文":[
        ["“天苍苍，野茫茫，风吹草低见牛羊”描写的地方最可能有什么特点？",["草地辽阔","高楼很多","海浪很大","巷子狭窄"],"草地辽阔","诗歌与地理","","“野茫茫”和草低露出牛羊，描绘的是开阔草原。读诗也能获得地理画面。"],
        ["古代驿使要把两封信分别送到东村和西村。他先看地图再安排路线，说明了什么？",["行动前获取信息能提高效率","跑得越快越不用看地图","信件内容不重要","方向可以随便猜"],"行动前获取信息能提高效率","信息与决策","","地图能帮助判断方向和距离。先收集信息再行动，是解决复杂问题的方法。"],
        ["故事写道：“井水突然变浑，村民没有马上饮用，而是先请人查看。”村民的做法好在哪里？",["先确认安全再使用","浪费时间","只相信颜色","以后不再喝水"],"先确认安全再使用","阅读与科学","","水变浑可能有多种原因。先调查再决定，体现了证据意识和安全意识。"],
        ["把写一张清楚的寻物启事的步骤排好顺序。",["说明丢失的物品","写清时间地点","留下联系办法","检查信息是否完整"],"说明丢失的物品 → 写清时间地点 → 留下联系办法 → 检查信息是否完整","实用表达","","先说找什么，再补充关键线索和联系方法，最后检查，别人才能有效帮忙。","sort"],
        ["哪些句子能让“秋天的古城”更有画面感？",["银杏叶铺满石板路","屋檐下挂着金黄玉米","秋天很好","那里有东西"],"银杏叶铺满石板路|屋檐下挂着金黄玉米","细节描写","","具体的颜色、地点和事物能形成画面；空泛的“很好”不能帮助读者想象。",{"type":"multi"}],
        ["“纸上得来终觉浅，绝知此事要躬行”鼓励我们怎样学习？",["阅读后还要亲自实践","只看书不动手","只做不思考","遇到问题就放弃"],"阅读后还要亲自实践","古诗文与学习","","“躬行”就是亲自实践。知识与实践结合，理解才会更深入。"],
        ["沿河而建的古镇常有很多桥。最合理的原因是什么？",["桥帮助人们跨河往来","桥能让河水消失","桥只为了装饰","桥能改变四季"],"桥帮助人们跨河往来","说明与地理","","聚落有河流阻隔时，桥连接两岸，方便出行和交换物品。"],
        ["同一件事，两位同学说法不同。判断谁更可信，最应该先看什么？",["谁能提供清楚证据","谁声音更大","谁先说","谁写字更多"],"谁能提供清楚证据","证据意识","","可信程度来自证据和逻辑，不来自声音、顺序或字数。"],
        ["“春种一粒粟，秋收万颗子”除了写季节，还告诉我们什么？",["劳动和收获有联系","种子马上变多","秋天不用劳动","所有植物都一样"],"劳动和收获有联系","诗歌与劳动","","诗句把春种和秋收联系起来，表现农业生产需要时间和劳动。"],
        ["为家乡小河写保护提示语，哪一句既清楚又有行动建议？",["不向河里丢垃圾，让清水继续流","小河真漂亮","大家看看吧","河水很多"],"不向河里丢垃圾，让清水继续流","表达与环保","","好的提示语既说明不要做什么，也告诉大家共同保护的目标。"]
      ],
      "数学":[
        ["古城墙一段长80米，工匠上午修了35米，下午修了27米，还剩多少米？",["18米","28米","45米","62米"],"18米","工程与数量关系","","先算已修35+27=62米，再用80-62=18米。两步问题要先找中间量。"],
        ["一支商队有4辆车，每辆装6箱书，一共多少箱？如果送出5箱，还剩多少箱？",["19箱","24箱","29箱","15箱"],"19箱","乘法与运输","","先算4×6=24箱，再算24-5=19箱。商队运输是古代交流物品的一种方式。"],
        ["地图上1小格表示10里，驿站离城门3小格，实际相距多少里？",["13里","30里","3里","300里"],"30里","比例初步与地图","","每格10里，3格就是3个10里，即30里。地图用缩小的距离表示真实距离。"],
        ["斗拱图案左右对称。左边有8个小构件，右边通常应有多少个才能保持对称？",["8个","16个","4个","9个"],"8个","对称与建筑","","左右对称要求对应部分数量和位置一致。斗拱是中国古建筑的重要构件。"],
        ["一炷香记录30分钟。两炷香连续燃烧大约多长时间？",["1小时","30分钟","2小时","15分钟"],"1小时","时间与古代生活","","30+30=60分钟，也就是1小时。古人曾借助燃香等方法估计时间。"],
        ["把解决“96块砖平均分给4组”的思考步骤排好顺序。",["确认总数和组数","想每组应一样多","计算96÷4","检查4组总和是否为96"],"确认总数和组数 → 想每组应一样多 → 计算96÷4 → 检查4组总和是否为96","问题解决","","理解条件、选择方法、计算、检查，是完整的问题解决过程。","sort"],
        ["哪些方法能验证27+35=62？",["用62-35看是否等于27","把27看成20和7分开计算","只看个位2就决定","用实物分组再合并"],"把27看成20和7分开计算|用62-35看是否等于27|用实物分组再合并","多策略验证","","逆运算、分解计算和实物模型都能验证结果；只看一个数字不能说明整个算式正确。",{"type":"multi"}],
        ["古人把一天分成12个时辰，一个时辰约等于现在2小时。3个时辰约是多少小时？",["6小时","3小时","5小时","12小时"],"6小时","时间与历史","","3个2小时是3×2=6小时。这是理解古代计时的一种换算。"],
        ["园林小路铺砖：第1排2块，第2排4块，第3排6块。按规律第5排多少块？",["8块","10块","12块","5块"],"10块","规律与园林","","每一排比前一排多2块：第4排8块，第5排10块。"],
        ["一匹布长1米，裁去35厘米，还剩多少厘米？",["65厘米","75厘米","35厘米","135厘米"],"65厘米","单位与手工","","1米=100厘米，100-35=65厘米。制作衣物时要统一单位再计算。"]
      ],
      "英语":[
        ["Which sentence tells us about something you enjoy?",["I like flying kites.","I have a kite.","This is a kite.","The kite is red."],"I like flying kites.","Likes","","'I like' tells another person what you enjoy."],
        ["What's the weather like in the picture?",["It's sunny.","It's snowy.","It's rainy.","It's windy at night."],"It's sunny.","Picture: Weather","english-ancient-academy.webp","The bright sky and sunlight show a sunny day."],
        ["Look at the picture. What is the child doing?",["Flying a kite","Reading a book","Feeding a fish","Riding a horse"],"Flying a kite","Picture: Actions","english-ancient-academy.webp","The child is holding a string connected to a kite in the sky."],
        ["Look at the picture. What is on the bench?",["A yellow book pouch","A red kite","A white rabbit","A blue hat"],"A yellow book pouch","Picture: Objects","english-ancient-academy.webp","The yellow pouch rests on the wooden bench."],
        ["Choose all sentences supported by the picture.",["The garden has a moon gate.","The child is in hanfu.","A cat is under the bench.","It is a modern playground."],"A cat is under the bench.|The child is in hanfu.|The garden has a moon gate.","Picture: Evidence","english-ancient-academy.webp","The moon gate, hanfu, and cat are visible. There is no modern playground.",{"type":"multi"}],
        ["Put the travel plan in a sensible order.",["Read the map","Choose the path","Start the journey","Check the destination"],"Read the map → Choose the path → Start the journey → Check the destination","Planning","","A good plan begins with information, continues with a choice, and ends with checking the result.","sort"],
        ["The bridge is east of the gate. The garden is east of the bridge. Where is the garden from the gate?",["East","West","North","South"],"East","Directions","","Moving east twice still places the garden east of the gate."],
        ["A friend says, 'The bird is hurt.' Which question helps you learn more?",["Where is the bird?","Is blue your favorite color?","How old is the bench?","Can a kite read?"],"Where is the bird?","Helpful Questions","","Asking where the bird is gives useful information for helping it."],
        ["The child has two ribbons. One is red and one is blue. Which sentence is correct?",["The ribbons are different colors.","Both ribbons are green.","There are three ribbons.","The child has no ribbons."],"The ribbons are different colors.","Reasoning","","Red and blue are two different colors, and the sentence matches all the facts."],
        ["You want to protect the garden. Choose the best sign.",["Please keep the flowers safe.","Pick every flower.","Run over the plants.","Leave rubbish here."],"Please keep the flowers safe.","Community Language","","The polite sentence gives a clear action that helps the shared garden."]
      ]
    }
  },
  poetry: [
    {id:"goose",grade:"1",first:"鹅，鹅，鹅，曲项向天歌。",answer:"白毛浮绿水，红掌拨清波。",choices:["白毛浮绿水，红掌拨清波。","春眠不觉晓，处处闻啼鸟。","举头望明月，低头思故乡。"],title:"咏鹅",author:"骆宾王",note:"诗人抓住白毛、绿水、红掌、清波这些颜色和动作，写出了鹅游水时活泼的样子。"},
    {id:"moon",grade:"1",first:"床前明月光，疑是地上霜。",answer:"举头望明月，低头思故乡。",choices:["举头望明月，低头思故乡。","欲穷千里目，更上一层楼。","小荷才露尖尖角，早有蜻蜓立上头。"],title:"静夜思",author:"李白",note:"从抬头看月亮到低头想家乡，两个动作写出了诗人的思乡之情。"},
    {id:"spring",grade:"1",first:"春眠不觉晓，处处闻啼鸟。",answer:"夜来风雨声，花落知多少。",choices:["夜来风雨声，花落知多少。","白毛浮绿水，红掌拨清波。","锄禾日当午，汗滴禾下土。"],title:"春晓",author:"孟浩然",note:"诗人从鸟叫、风雨和落花来感受春天，告诉我们观察自然可以用耳朵听，也可以用心想。"},
    {id:"farmer",grade:"1",first:"锄禾日当午，汗滴禾下土。",answer:"谁知盘中餐，粒粒皆辛苦。",choices:["谁知盘中餐，粒粒皆辛苦。","桃花潭水深千尺，不及汪伦送我情。","飞流直下三千尺，疑是银河落九天。"],title:"悯农",author:"李绅",note:"一粒粮食要经过辛苦劳动才能来到餐桌，因此要珍惜粮食。"},
    {id:"jiangnan",grade:"1",first:"江南可采莲，莲叶何田田。",answer:"鱼戏莲叶间。",choices:["鱼戏莲叶间。","一行白鹭上青天。","轻舟已过万重山。"],title:"江南",author:"汉乐府",note:"“田田”写莲叶茂盛相连的样子，鱼儿在莲叶间游动，画面充满生机。"},
    {id:"painting",grade:"1",first:"远看山有色，近听水无声。",answer:"春去花还在，人来鸟不惊。",choices:["春去花还在，人来鸟不惊。","野火烧不尽，春风吹又生。","儿童散学归来早，忙趁东风放纸鸢。"],title:"画",author:"佚名",note:"真正的花会随季节变化，鸟见人会飞走；诗中写的是一幅画，所以花还在、鸟不惊。"},
    {id:"tower",grade:"2",first:"白日依山尽，黄河入海流。",answer:"欲穷千里目，更上一层楼。",choices:["欲穷千里目，更上一层楼。","不识庐山真面目，只缘身在此山中。","两岸猿声啼不住，轻舟已过万重山。"],title:"登鹳雀楼",author:"王之涣",note:"想看得更远，就要登得更高。诗句既写登楼，也启发我们换一个更高、更广的角度看问题。"},
    {id:"waterfall",grade:"2",first:"日照香炉生紫烟，遥看瀑布挂前川。",answer:"飞流直下三千尺，疑是银河落九天。",choices:["飞流直下三千尺，疑是银河落九天。","接天莲叶无穷碧，映日荷花别样红。","孤舟蓑笠翁，独钓寒江雪。"],title:"望庐山瀑布",author:"李白",note:"“三千尺”是夸张的写法，突出瀑布又高又急；“银河落九天”让画面更有想象力。"},
    {id:"orioles",grade:"2",first:"两个黄鹂鸣翠柳，一行白鹭上青天。",answer:"窗含西岭千秋雪，门泊东吴万里船。",choices:["窗含西岭千秋雪，门泊东吴万里船。","儿童相见不相识，笑问客从何处来。","停车坐爱枫林晚，霜叶红于二月花。"],title:"绝句",author:"杜甫",note:"诗里有近处的黄鹂翠柳，也有远处的雪山和船，像一幅有远近层次的风景画。"},
    {id:"pond",grade:"2",first:"泉眼无声惜细流，树阴照水爱晴柔。",answer:"小荷才露尖尖角，早有蜻蜓立上头。",choices:["小荷才露尖尖角，早有蜻蜓立上头。","草长莺飞二月天，拂堤杨柳醉春烟。","月落乌啼霜满天，江枫渔火对愁眠。"],title:"小池",author:"杨万里",note:"“才露”和“早有”写出了初夏小池里细小而有趣的变化，需要仔细观察才能发现。"},
    {id:"mountain",grade:"2",first:"远上寒山石径斜，白云生处有人家。",answer:"停车坐爱枫林晚，霜叶红于二月花。",choices:["停车坐爱枫林晚，霜叶红于二月花。","千山鸟飞绝，万径人踪灭。","孤帆远影碧空尽，唯见长江天际流。"],title:"山行",author:"杜牧",note:"诗人沿石径上山，因为喜爱傍晚枫林而停车。“霜叶红于二月花”写出秋叶鲜艳的颜色。"},
    {id:"grass",grade:"2",first:"离离原上草，一岁一枯荣。",answer:"野火烧不尽，春风吹又生。",choices:["野火烧不尽，春风吹又生。","不知细叶谁裁出，二月春风似剪刀。","湖光秋月两相和，潭面无风镜未磨。"],title:"赋得古原草送别（节选）",author:"白居易",note:"草木会随季节枯荣，但根仍有生命力，春风来到时又会生长。"}
  ],
  shop: [
    {id:"head-peach",type:"head",name:"桃夭流苏",price:2,icon:"✿",color:"#e9859c"},{id:"head-jade",type:"head",name:"青玉簪",price:2,icon:"❈",color:"#6ea99c"},{id:"head-moon",type:"head",name:"月桂冠",price:2,icon:"☾",color:"#9b8bc1"},
    {id:"hair-cloud",type:"hair",name:"流云长发",price:5,icon:"⌇",color:"#44344e"},{id:"hair-ink",type:"hair",name:"墨羽高束",price:5,icon:"♟",color:"#263746"},{id:"hair-gold",type:"hair",name:"鎏金双髻",price:5,icon:"♛",color:"#6c4b3a"},
    {id:"outfit-peach",type:"outfit",name:"桃华春宴",price:10,icon:"裳",color:"#e9a2ad"},{id:"outfit-blue",type:"outfit",name:"沧澜月影",price:10,icon:"袍",color:"#7198b8"},{id:"outfit-jade",type:"outfit",name:"竹露清风",price:10,icon:"衫",color:"#77a68c"},
    ...Array.from({length:27},(_,i)=>({id:`gen-head-${String(i+1).padStart(2,'0')}`,type:"head",name:`新作头饰·${String(i+1).padStart(2,'0')}`,price:2+(i%3),color:["#d99aaa","#79a99d","#8e8ab5"][i%3]})),
    ...Array.from({length:27},(_,i)=>({id:`gen-hair-${String(i+1).padStart(2,'0')}`,type:"hair",name:`新作发型·${String(i+1).padStart(2,'0')}`,price:5+(i%3),color:["#4b3b48","#273746","#73594d"][i%3]})),
    ...Array.from({length:27},(_,i)=>({id:`gen-outfit-${String(i+1).padStart(2,'0')}`,type:"outfit",name:`新作云裳·${String(i+1).padStart(2,'0')}`,price:10+(i%5),color:["#d9a1ad","#82a4bd","#7ea68f","#a79ac6","#c8b27d"][i%5]})),
    ...Array.from({length:30},(_,i)=>({id:`prop-${String(i+1).padStart(2,'0')}`,type:"prop",name:`雅趣手持·${String(i+1).padStart(2,'0')}`,price:6+(i%4),color:["#d99aaa","#79a99d","#8197b5","#c7a66c"][i%4],asset:`prop-${String(i+1).padStart(2,'0')}.webp`})),
    ...Array.from({length:30},(_,i)=>({id:`bg-${String(i+1).padStart(2,'0')}`,type:"background",name:`仙境景致·${String(i+1).padStart(2,'0')}`,price:28+(i%5)*4,color:["#ddaeb8","#87aaa2","#91a6c6","#b9a7ce"][i%4],asset:`bg-${String(i+1).padStart(2,'0')}.webp`})),
    {id:"pet-rabbit",type:"pet",name:"桃枝玉兔",price:0,icon:"兔",color:"#d9a9aa",asset:"pet-rabbit.webp"},{id:"pet-fox",type:"pet",name:"赤铃灵狐",price:0,icon:"狐",color:"#b97854",asset:"pet-fox.webp"},{id:"pet-crane",type:"pet",name:"青绶仙鹤",price:0,icon:"鹤",color:"#8aa092",asset:"pet-crane.webp"},
    {id:"pet-cat-jade",type:"pet",name:"碧绡灵猫",price:0,icon:"猫",color:"#79aeb2",asset:"pet-cat-jade.webp"},{id:"pet-cat-wing",type:"pet",name:"云翼灵猫",price:0,icon:"猫",color:"#8fa9d1",asset:"pet-cat-wing.webp"},{id:"pet-dog-wing",type:"pet",name:"祥云灵犬",price:0,icon:"犬",color:"#b77b62",asset:"pet-dog-wing.webp"},
    {id:"pet-lynx",type:"pet",name:"雪纹山猫",price:0,icon:"猞",color:"#c4946c",asset:"pet-lynx.webp"},{id:"pet-baize",type:"pet",name:"白泽",price:0,icon:"泽",color:"#9ab8d2",asset:"pet-baize.webp"},{id:"pet-deer",type:"pet",name:"桃枝灵鹿",price:0,icon:"鹿",color:"#d3a3a1",asset:"pet-deer.webp"}
  ]
};

const EXTRA_QUESTIONS = {
  "1": {
    "语文": [
      ["小河边立着牌子：‘水深，请在大人陪同下靠近。’这块牌子最重要的作用是什么？",["提醒大家注意安全","介绍河里有多少鱼","告诉大家河水颜色","请大家来比赛"],"提醒大家注意安全","阅读与生活安全","","牌子先说明危险，再给出安全做法。读提示语时，要找到它希望我们采取的行动。"],
      ["古人观察日影来判断大概时间。下面哪句话写得最清楚？",["太阳很好","竹竿的影子比早晨短了","院子里有东西","时间走得很快"],"竹竿的影子比早晨短了","观察与表达","","清楚的观察要写出对象和变化。‘竹竿的影子比早晨短了’提供了可以比较的证据。"],
      ["把参观古城门的过程排成合理顺序。",["先看路线图","和老师一起出发","观察城门上的纹样","回校画下印象"],"先看路线图 → 和老师一起出发 → 观察城门上的纹样 → 回校画下印象","叙事顺序","","先准备路线，再出发观察，最后整理记录，事情的先后顺序才清楚。","sort"],
      ["哪些句子是在认真观察春天？",["柳枝上长出嫩芽","燕子在屋檐下来回飞","春天真好","我什么也没看见"],"柳枝上长出嫩芽|燕子在屋檐下来回飞","观察与证据","","嫩芽和燕子的活动都是能看见的具体证据，比只说‘真好’更能表现春天。",{"type":"multi"}],
      ["小朋友想请邻居奶奶讲一讲老胡同的故事，怎样说最合适？",["奶奶，您方便时能给我讲讲老胡同的故事吗？","快点讲给我听！","你必须现在讲","我不想听故事"],"奶奶，您方便时能给我讲讲老胡同的故事吗？","礼貌交流","","先称呼对方，再说明请求，还照顾到对方是否方便，这样的表达礼貌又清楚。"]
    ],
    "数学": [
      ["集市上3个香囊装一盒，2盒一共有多少个香囊？",["5个","6个","3个","8个"],"6个","分组与乘法初步","","每盒3个，两盒就是3+3=6个。先看每组有几个，再看有几组。"],
      ["从学堂到石桥要走8格，从石桥到药铺再走5格。一共走多少格？",["3格","13格","8格","15格"],"13格","路线与加法","","把两段路线合起来，8+5=13格。地图上的分段距离可以用加法求总路程。"],
      ["花窗左边有4朵花，右边也有4朵花。这个图案一共有多少朵花？",["4朵","6朵","8朵","10朵"],"8朵","对称与数量","","左右两边数量相同，4+4=8朵。对称图案常能帮助我们快速发现数量关系。"],
      ["把解决‘篮里有9个桃，又放进4个’的步骤排好。",["找出原来有9个","看出又增加4个","列式9+4","检查答案是否比9大"],"找出原来有9个 → 看出又增加4个 → 列式9+4 → 检查答案是否比9大","解决问题","","先找信息，再判断是增加，接着计算，最后检查结果是否合理。","sort"],
      ["哪些办法能说明10比7多3？",["从7接着数8、9、10","用10-7计算","只看数字写得大不大","摆10颗豆子和7颗豆子配对"],"从7接着数8、9、10|摆10颗豆子和7颗豆子配对|用10-7计算","多方法验证","","接着数、做减法和一一配对都能看出多3；数字写得大不代表数值一定大。",{"type":"multi"}]
    ],
    "英语": [
      ["A child sees dark clouds before a walk. What is a useful choice?",["Take an umbrella","Take a pillow","Wear swimming fins","Bring a toy drum"],"Take an umbrella","Weather and Choices","","Dark clouds may mean rain. An umbrella is a useful choice for a walk."],
      ["Put the picnic plan in a sensible order.",["Check the weather","Pack some water","Walk with an adult","Clean the picnic place"],"Check the weather → Pack some water → Walk with an adult → Clean the picnic place","Planning","","A safe plan starts with checking, includes preparation and adult care, and ends by leaving the place clean.","sort"],
      ["Which sentences are kind ways to help a new classmate?",["You can sit with us.","Let me show you the library.","Go away.","I will hide your book."],"Let me show you the library.|You can sit with us.","Kind Communication","","An invitation and an offer to show the school help a new classmate feel welcome.",{"type":"multi"}],
      ["The red lantern is above the door. Where is the door?",["Below the lantern","Above the lantern","Inside the lantern","Far from the house"],"Below the lantern","Position Words","","If the lantern is above the door, then the door is below the lantern."],
      ["A plant has dry soil and soft leaves. What should you check first?",["Whether it needs water","Whether it can sing","Whether the pot can fly","Whether the leaves can read"],"Whether it needs water","Observation and Care","","Dry soil and soft leaves are useful clues. Checking the need for water is a careful first step."]
    ]
  },
  "2": {
    "语文": [
      ["小记者写古桥报道，哪一条最能证明古桥仍在使用？",["每天早晨都有居民从桥上经过","古桥很美","大家都喜欢故事","桥的名字有三个字"],"每天早晨都有居民从桥上经过","报道与证据","","‘每天都有居民经过’是可以观察和核实的事实，能直接说明古桥仍在使用。"],
      ["读到‘商队沿驿道运来茶叶，又带走丝绸’，我们能合理想到什么？",["不同地方会交换物品","所有地方出产一样的东西","商队只在原地休息","驿道不能通行"],"不同地方会交换物品","阅读与历史","","运来一种物品、带走另一种物品，说明不同地区之间会进行物品交流。"],
      ["把调查老城树木的过程排成合理顺序。",["确定要调查的问题","记录树种和位置","询问园林工作人员","整理发现并提出保护建议"],"确定要调查的问题 → 记录树种和位置 → 询问园林工作人员 → 整理发现并提出保护建议","综合实践","","调查先要明确问题，再从观察和访问中收集信息，最后整理证据并提出建议。","sort"],
      ["哪些信息适合写进‘雨天游园安全提示’？",["石板路湿滑要慢走","请跟随老师不要掉队","荷花颜色很美","我昨天吃了面条"],"石板路湿滑要慢走|请跟随老师不要掉队","实用表达","","安全提示应该说明可能的危险和可以采取的行动，与安全无关的内容不应放进去。",{"type":"multi"}],
      ["‘两岸猿声啼不住，轻舟已过万重山’让人感觉小船怎样？",["行得轻快迅速","停在岸边不动","在沙漠里前进","慢慢沉入水底"],"行得轻快迅速","诗歌想象","","声音还在两岸回荡，小船却已越过许多山，诗句用对比写出行船轻快。"]
    ],
    "数学": [
      ["粮仓原有90袋粮，上午运出28袋，下午又运出32袋，还剩多少袋？",["30袋","34袋","60袋","150袋"],"30袋","两步计算与仓储","","先算一共运出28+32=60袋，再算90-60=30袋。也可以连续减两次进行检查。"],
      ["古城地图上每格表示20米，从城门到鼓楼有4格，实际多少米？",["24米","80米","40米","100米"],"80米","地图与乘法","","每格20米，4格就是4个20米，20×4=80米。"],
      ["上午9时开始参观，参观1小时30分，几点结束？",["10时30分","9时30分","11时","8时30分"],"10时30分","时间与活动安排","","9时加1小时是10时，再加30分钟，结束时间是10时30分。"],
      ["园林灯笼按‘红、红、黄’重复排列，第8个是什么颜色？",["红色","黄色","蓝色","无法判断"],"红色","周期规律","","每3个为一组。第7、8、9个又是红、红、黄，所以第8个是红色。"],
      ["哪些办法可以检查48÷6=8？",["计算6×8是否等于48","把48个棋子平均分成6组","只看答案是不是偶数","用48连续减6看减了几次"],"把48个棋子平均分成6组|用48连续减6看减了几次|计算6×8是否等于48","多策略验证","","乘法逆运算、平均分和连续减法都能验证商；答案是偶数并不能证明计算正确。",{"type":"multi"}]
    ],
    "英语": [
      ["The library is north of the garden. The pond is east of the garden. Where is the library from the garden?",["North","South","East","West"],"North","Maps and Directions","","The first sentence gives the exact direction: the library is north of the garden."],
      ["Put the research steps in a sensible order.",["Ask a clear question","Look for evidence","Compare the facts","Share a careful answer"],"Ask a clear question → Look for evidence → Compare the facts → Share a careful answer","Thinking Skills","","Good research begins with a question, uses evidence, compares facts, and then gives a careful answer.","sort"],
      ["Which details support the idea that a storm may come?",["Dark clouds are moving in.","The wind is getting stronger.","The book is on a desk.","The cup is blue."],"Dark clouds are moving in.|The wind is getting stronger.","Evidence and Weather","","Dark clouds and stronger wind are weather clues. The book and cup do not tell us about a storm.",{"type":"multi"}],
      ["A group has twelve map cards. They share them equally among three children. How many cards does each child get?",["Four","Three","Six","Nine"],"Four","Math in English","","Twelve shared equally among three children gives four cards to each child."],
      ["You find two signs with different directions. What is the best next step?",["Check the map and ask a trusted adult","Choose one without looking","Run in both directions","Remove both signs"],"Check the map and ask a trusted adult","Safe Decisions","","When information does not match, checking another reliable source and asking an adult is a safe choice."]
    ]
  }
};

for (const grade of ["1", "2"]) {
  for (const subject of ["语文", "数学", "英语"]) {
    window.YS_DATA.questions[grade][subject].push(...EXTRA_QUESTIONS[grade][subject]);
  }
}

const GENDER_LABELS = {female:"云清瑶",male:"云景行"};
const GENDER_ITEM_NAMES = {
  female:{
    head:["桃夭流苏","青玉簪","月桂冠"],
    hair:["流云长发","墨羽高束","鎏金双髻"],
    outfit:["桃华春宴","沧澜月影","竹露清风"]
  },
  male:{
    head:["云纹玉冠","玄金发冠","松月束冠"],
    hair:["玄云高束","墨羽马尾","清风半束"],
    outfit:["霁月云袍","玄麟劲装","松风长衫"]
  }
};
const APPEARANCE_TYPES = new Set(["head","hair","outfit","prop"]);
const originalShop = window.YS_DATA.shop;
const sharedShop = originalShop.filter(item=>!APPEARANCE_TYPES.has(item.type));
const genderedShop = ["female","male"].flatMap(gender=>
  originalShop.filter(item=>APPEARANCE_TYPES.has(item.type)).map((item,index)=>{
    const sameTypeIndex=originalShop.filter(candidate=>candidate.type===item.type).findIndex(candidate=>candidate.id===item.id);
    const number=String(sameTypeIndex+1).padStart(2,"0");
    const baseName=GENDER_ITEM_NAMES[gender][item.type]?.[sameTypeIndex];
    const genericName=item.type==="head"?`${GENDER_LABELS[gender]}头饰·${number}`:item.type==="hair"?`${GENDER_LABELS[gender]}发式·${number}`:item.type==="outfit"?`${GENDER_LABELS[gender]}云裳·${number}`:`${GENDER_LABELS[gender]}手持·${number}`;
    return {
      ...item,
      id:`${gender}-${item.id}`,
      gender,
      name:baseName||genericName,
      asset:item.asset||`${item.id}.webp`
    };
  })
);
const shoeColors=["#22272b","#35475e","#705443","#d8d5cf","#31524a","#34383e","#303f59","#e4dccb","#546b50","#6d3940"];
const shoeShop=["female","male"].flatMap(gender=>Array.from({length:10},(_,index)=>{
  const number=String(index+1).padStart(2,"0");
  return {
    id:`${gender}-shoes-${number}`,
    type:"shoes",
    gender,
    name:`${GENDER_LABELS[gender]}鞋履·${number}`,
    price:4+index,
    color:shoeColors[index],
    asset:`shoe-${number}.webp`
  };
}));
window.YS_DATA.shop=[...genderedShop,...shoeShop,...sharedShop];
