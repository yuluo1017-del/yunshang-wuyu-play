(() => {
  const D=window.YS_DATA;
  const rotate=(values,offset)=>values.map((_,index)=>values[(index+offset)%values.length]);
  const question=(prompt,answer,distractors,point,explanation,unit)=>{
    const options=rotate([answer,...distractors.filter(value=>value!==answer)].slice(0,4),unit%4);
    return [prompt,options,answer,point,"",explanation,null,unit];
  };
  const people=["小云","小满","安安","乐乐","宁宁","阿禾","小舟","明明","月月","星星","晨晨","雨桐","子墨","嘉嘉","一一","朵朵","小川","可可","团团","元元"];
  const places=["书院","石桥","竹林","古城门","荷塘","驿站","集市","药铺","花园","藏书阁","河岸","茶园","山门","画舫","村口","亭子","果园","戏台","城墙","小院"];
  const objects=["竹简","纸鸢","灯笼","香囊","书册","雨伞","水壶","地图","花篮","木尺","毛笔","砚台","风铃","石鼓","玉佩","果篮","斗笠","棋子","画卷","信笺"];

  function chineseQuestions(grade,term,count=140){
    const result=[];
    const phenomena=term==="上"?["树叶被风吹得不停摇动","乌云慢慢遮住天空","石板路上有一层薄霜","池塘水面荡起一圈圈波纹","大雁排成队向南飞"]:["柳枝长出嫩绿的新芽","荷叶上滚动着小水珠","蝉在树上连续鸣叫","稻穗渐渐变成金黄色","雨后石阶变得湿滑"];
    for(let i=0;i<count;i++){
      const kind=i%5,serial=Math.floor(i/5),cycle=Math.floor(serial/20),person=people[serial%people.length],place=places[(serial+cycle*7+kind)%places.length],object=objects[(serial*3+cycle*5+kind)%objects.length],unit=i%8,scene=phenomena[serial%phenomena.length];
      if(grade===1&&kind===0)result.push(question(`${person}在${place}看见${scene}。下面哪句话最合理？`,scene.includes("乌云")?"可能快下雨了，要准备雨具":scene.includes("湿滑")?"走路要慢一些，注意脚下":scene.includes("大雁")?"季节正在发生变化":"这是可以认真观察到的自然现象",["什么也不能说明","一定会马上下雪","只要跑得快就不用观察"],"观察与判断","先找到句子中真正看到的现象，再作不过度的判断，答案才可靠。",unit));
      if(grade===1&&kind===1)result.push(question(`${person}想向同学借${object}，怎样说最有礼貌？`,`请问你方便把${object}借给我用一下吗？`,[`快把${object}给我！`,`这个${object}现在归我了。`,`我不需要和你商量。`],"口语交际","礼貌请求要先询问对方是否方便，并把自己的需要说清楚。",unit));
      if(grade===1&&kind===2)result.push(question(`下面哪句话把${place}写得最清楚？`,`${place}旁有一条弯弯的小路，路边开着淡黄色的小花。`,[`${place}很好。`,`那里有很多东西。`,`我觉得什么都很漂亮。`],"具体表达","写清地点、形状和颜色，读者才能在脑海里形成具体画面。",unit));
      if(grade===1&&kind===3)result.push(question(`${person}要把${object}送到${place}，哪组顺序最合理？`,`先看路线，再整理物品，然后出发，最后确认送到`,["先出发，再决定去哪里，最后找物品","先休息，再回家，不看路线","先把物品丢下，再询问路线"],"顺序与条理","做事先明确路线和物品，再行动并检查，步骤才完整。",unit));
      if(grade===1&&kind===4)result.push(question(`${place}旁写着“请轻声慢行，爱护公共物品”。这句话主要提醒什么？`,`经过这里要轻声、慢走并爱护物品`,["这里不能看书","每个人都要带一件物品回家","走得越快越好"],"实用阅读","提示语会直接告诉人们该怎样行动，阅读时要抓住表示做法的词语。",unit));
      if(grade===2&&kind===0)result.push(question(`${person}在${place}记录：“${scene}。”这条记录好在哪里？`,`写出了可以观察和核实的现象`,["字数一定最多","只表达了个人喜好","没有提供任何信息"],"观察与证据","可靠记录应包含能够观察、比较或核实的具体事实。",unit));
      if(grade===2&&kind===1)result.push(question(`${person}要写一则寻找${object}的启事，哪项信息最关键？`,`物品特征、丢失时间地点和联系方法`,["只写自己的心情","只画装饰花纹","把所有无关事情都写进去"],"实用表达","寻物启事需要让别人认出物品、知道在哪里发现后如何联系。",unit));
      if(grade===2&&kind===2)result.push(question(`两位同学介绍${place}，哪一种说法更可信？`,`说明观察时间，并列出看到的具体景物和数量`,["声音更大的说法","使用形容词最多的说法","不提供证据但态度肯定的说法"],"信息与判断","判断信息是否可信，要看来源、事实和证据，而不是声音或语气。",unit));
      if(grade===2&&kind===3)result.push(question(`${person}准备调查${place}的环境，合理顺序是什么？`,`提出问题、实地观察、记录证据、整理结论`,["先写结论、再决定问题、最后观察","只听一个人的说法就结束","先删除记录，再重新猜测"],"综合实践","调查从问题出发，通过观察收集证据，最后才能形成有根据的结论。",unit));
      if(grade===2&&kind===4)result.push(question(`句子“${place}的灯一盏盏亮起来，赶路人加快了脚步”暗示了什么？`,`天色渐晚，赶路人希望尽快到达`,["道路突然变短了","所有人都在参加比赛","灯光让时间停止了"],"阅读与推断","“灯亮起来”和“加快脚步”是线索，联系生活可以推断天色渐晚。",unit));
    }
    return result;
  }

  function mathChoices(answer,values){return [...new Set(values.filter(value=>value!==answer))].slice(0,3)}
  function mathQuestions(grade,term,count=140){
    const result=[];
    for(let i=0;i<count;i++){
      const unit=i%8,kind=i%5,serial=Math.floor(i/5),cycle=Math.floor(serial/20),place=places[(serial+cycle*7+kind)%places.length],object=objects[(serial*3+cycle*5+kind)%objects.length];
      if(grade===1&&term==="上"){
        const a=2+(i%8),b=1+((i*3)%8),sum=a+b,diff=Math.max(a,b)-Math.min(a,b);
        if(kind===0)result.push(question(`${place}里有${a}个${object}，又放来${b}个，现在一共有多少个？`,`${sum}个`,mathChoices(`${sum}个`,[`${sum-1}个`,`${sum+1}个`,`${Math.abs(a-b)}个`,`${a}个`]),"20以内加法","把原有数量和增加的数量合起来，用加法计算。",unit));
        if(kind===1)result.push(question(`${place}的篮里有${sum}个果子，拿走${Math.min(a,b)}个，还剩多少个？`,`${Math.max(a,b)}个`,mathChoices(`${Math.max(a,b)}个`,[`${diff}个`,`${sum}个`,`${Math.max(a,b)+1}个`,`${Math.min(a,b)}个`]),"20以内减法","从总数中去掉拿走的部分，剩下的数量用减法求。",unit));
        if(kind===2)result.push(question(`${place}的数牌上写着${a}和${b}，哪个数更大？`,`${Math.max(a,b)}更大`,[`${Math.min(a,b)}更大`,"两个一样大","无法比较"],"数的比较","按数数的顺序，位置靠后的数更大，也可以用实物一一对应比较。",unit));
        if(kind===3)result.push(question(`${place}的灯笼按“红、黄、红、黄”排列，第${5+i%12}盏是什么颜色？`,(5+i%12)%2?"红色":"黄色",[(5+i%12)%2?"黄色":"红色","蓝色","无法判断"],"简单规律","这个规律每两盏重复一次，奇数位置是红色，偶数位置是黄色。",unit));
        if(kind===4)result.push(question(`${place}左边有${a}盏灯，右边也有${a}盏，一共有多少盏？`,`${a*2}盏`,mathChoices(`${a*2}盏`,[`${a}盏`,`${a*2-1}盏`,`${a*2+1}盏`,`${a+2}盏`]),"相同加数","两边一样多，就是把同一个数加两次。",unit));
      }else if(grade===1){
        const a=20+(i*7)%60,b=3+(i*4)%20,sum=a+b,diff=a-b;
        if(kind===0)result.push(question(`${place}原有${a}本书，又送来${b}本，现在有多少本？`,`${sum}本`,mathChoices(`${sum}本`,[`${sum-10}本`,`${sum+10}本`,`${diff}本`,`${a}本`]),"100以内加法","先把十位和个位分别相加，再检查结果是否比原数大。",unit));
        if(kind===1)result.push(question(`${place}有一根长${a}厘米的绳子，用去${b}厘米，还剩多少厘米？`,`${diff}厘米`,mathChoices(`${diff}厘米`,[`${sum}厘米`,`${diff+10}厘米`,`${b}厘米`,`${a}厘米`]),"长度与减法","总长度减去用掉的长度，就是剩余长度。",unit));
        if(kind===2)result.push(question(`${place}的钟显示${8+i%4}时，再过${1+i%3}小时是几时？`,`${8+i%4+1+i%3}时`,[`${8+i%4}时`,`${9+i%4+1+i%3}时`,`${7+i%4}时`],"认识时间","整时向后推几个小时，就在钟面上向前数几个整点。",unit));
        if(kind===3)result.push(question(`在${place}，${a}元可以买一个${object}，付${a+10}元，应找回多少元？`,`10元`,[`${a}元`,`${a+10}元`,`20元`],"人民币","付出的钱减去商品价格，就是应找回的钱。",unit));
        if(kind===4)result.push(question(`${place}一排有${4+i%6}盆花，两排一样多，共有多少盆？`,`${(4+i%6)*2}盆`,mathChoices(`${(4+i%6)*2}盆`,[`${4+i%6}盆`,`${(4+i%6)*2-1}盆`,`${(4+i%6)*2+2}盆`,`2盆`]),"相同加数","两排一样多，可以把每排数量加两次。",unit));
      }else{
        const a=2+i%8,b=2+(i*3)%8,product=a*b,total=product+10+(i%7);
        if(kind===0)result.push(question(`${place}有${a}个小组，每组有${b}名同学，一共有多少名？`,`${product}名`,mathChoices(`${product}名`,[`${a+b}名`,`${product+a}名`,`${product-b}名`,`${a}名`]),"乘法","求几个相同加数的和，可以用乘法计算。",unit));
        if(kind===1)result.push(question(`${place}把${product}块点心平均放在${a}个盘子里，每盘多少块？`,`${b}块`,mathChoices(`${b}块`,[`${a}块`,`${product}块`,`${b+1}块`,`${Math.max(1,b-1)}块`]),"平均分与除法","平均分要求每份同样多，用总数除以份数。",unit));
        if(kind===2)result.push(question(`${place}的仓库有${total}件${object}，运出${product}件，还剩多少件？`,`${total-product}件`,mathChoices(`${total-product}件`,[`${total}件`,`${product}件`,`${total-product+2}件`,`${total+product}件`]),"两位数减法","从原有总数里减去运出的数量，得到剩余数量。",unit));
        if(kind===3)result.push(question(`从${place}出发，地图上每格表示${5+(i%4)*5}米，${a}格表示多少米？`,`${(5+(i%4)*5)*a}米`,mathChoices(`${(5+(i%4)*5)*a}米`,[`${5+(i%4)*5+a}米`,`${(5+(i%4)*5)*(a-1)}米`,`${a}米`,`${(5+(i%4)*5)*a+5}米`]),"地图与乘法","每格表示的长度乘格数，就是实际距离。",unit));
        if(kind===4)result.push(question(`${place}上午${8+i%3}时开始活动，经过${1+i%3}小时，几点结束？`,`${8+i%3+1+i%3}时`,[`${8+i%3}时`,`${9+i%3+1+i%3}时`,`${7+i%3}时`],"时间计算","结束时刻等于开始时刻加经过的整小时数。",unit));
      }
    }
    return result;
  }

  function englishQuestions(grade,term,count=140){
    const names=["Amy","Ben","Coco","Daming","Ella","Finn","Grace","Henry","Ivy","Jack","Kate","Leo","Mia","Nina","Owen","Penny","Ryan","Sara","Tom","Wendy"];
    const colors=["red","blue","yellow","green","orange","purple","white","black","pink","brown"];
    const things=term==="上"?["book","kite","bag","pencil","ruler","ball","lantern","map","cup","hat"]:["rabbit","cat","dog","bird","flower","tree","boat","fish","apple","cake"];
    const result=[];
    for(let i=0;i<count;i++){
      const unit=i%10,kind=i%5,serial=Math.floor(i/5),cycle=Math.floor(serial/20),name=names[serial%names.length],color=colors[(serial+cycle*3+kind)%colors.length],thing=things[(serial*3+cycle*2+kind)%things.length],number=1+(serial+kind)%10;
      if(grade===1&&kind===0)result.push(question(`${name} sees a ${color} ${thing}. What color is the ${thing}?`,color,[colors[(i+1)%colors.length],colors[(i+2)%colors.length],colors[(i+4)%colors.length]],"Colors","The color word directly describes the object in the sentence.",unit));
      if(grade===1&&kind===1)result.push(question(`${name} has ${number} ${thing}${number===1?"":"s"}. How many are there?`,String(number),[String(number+1),String(Math.max(1,number-1)),String(number+2)],"Numbers","The number before the object tells exactly how many there are.",unit));
      if(grade===1&&kind===2)result.push(question(`The ${thing} is under the table. Where is it?`,`Under the table`,[`On the table`,`In the sky`,`Behind the moon`],"Position Words","The sentence uses 'under' to tell the object's position.",unit));
      if(grade===1&&kind===3)result.push(question(`${name} gets a gift from a friend. What is a kind reply?`,`Thank you.`,[`Give it to me.`,`Go away.`,`I am a table.`],"Kind Communication","Saying 'Thank you' shows appreciation for a gift.",unit));
      if(grade===1&&kind===4)result.push(question(`Dark clouds are coming before ${name} goes outside. What is useful?`,`Take an umbrella`,[`Take a pillow`,`Wear swimming fins`,`Bring a toy drum`],"Weather and Choices","Dark clouds may mean rain, so an umbrella is a useful choice.",unit));
      if(grade===2&&kind===0)result.push(question(`${name} likes the ${color} ${thing}. Which sentence tells a preference?`,`I like the ${color} ${thing}.`,[`The ${thing} is ${color}.`,`This is a ${thing}.`,`I can see the ${thing}.`],"Likes and Preferences","The words 'I like' clearly tell what someone enjoys.",unit));
      if(grade===2&&kind===1)result.push(question(`The library is east of the garden. Where is the garden from the library?`,`West`,[`East`,`North`,`South`],"Directions","If the library is east of the garden, the garden is west of the library.",unit));
      if(grade===2&&kind===2)result.push(question(`${name} starts reading at ${8+i%4} o'clock and reads for one hour. When does ${name} finish?`,`${9+i%4} o'clock`,[`${8+i%4} o'clock`,`${10+i%4} o'clock`,`${7+i%4} o'clock`],"Time","Adding one hour moves the clock forward by one hour.",unit));
      if(grade===2&&kind===3)result.push(question(`${name} has ${number+4} cards and gives away ${number} cards. How many are left?`,`Four`,[`Three`,`Five`,`Six`],"Math in English","Subtracting the given number from the total leaves four cards.",unit));
      if(grade===2&&kind===4)result.push(question(`Two signs show different paths to the ${thing}. What should ${name} do first?`,`Check the map and ask a trusted adult`,[`Choose without looking`,`Run in both directions`,`Remove both signs`],"Safe Decisions","Checking another reliable source is a safe way to resolve conflicting information.",unit));
    }
    return result;
  }

  const generators={"语文":chineseQuestions,"数学":mathQuestions,"英语":englishQuestions};
  D.questionBank={};
  for(const grade of ["1","2"])for(const term of ["上","下"])for(const subject of ["语文","数学","英语"]){
    const seed=term==="上"?(D.questions[grade]?.[subject]||[]):[];
    const generated=generators[subject](Number(grade),term,600);
    const seen=new Set(),pool=[];
    for(const source of [...seed,...generated]){
      if(seen.has(source[0]))continue;
      seen.add(source[0]);
      const item=[...source];
      item[7]=pool.length%(subject==="英语"?10:8);
      pool.push(item);
      if(pool.length===100)break;
    }
    D.questionBank[`${grade}-${term}-${subject}`]=pool;
  }
})();
