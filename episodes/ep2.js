async function ep2(){
  await T.say('夜明け前。この街では、夜も朝もたいして違いはないが、時計だけがそれを告げる。','narr');
  await T.say('上層の連中が眠っている、短い時間帯だ。','narr');
  await T.say('俺はタバコの煙を吐く。端末のモニタ光が、湿った壁をぼんやりと照らしている。','narr');
  T.sp();
  await T.say('この街では、上に行くほど、世界が綺麗になる。','narr');
  await T.say('磨かれたガラス。曇りのない空気。澄んだ眺め。','narr');
  await T.say('――そのガラスを誰が磨いているのか、上の連中は考えもしない。', 'narr');
  T.sp();
  await T.tap();

  await Scene.load('CLIENT_ep2');
  for(let i=0;i<3;i++){ knock(); await T.sleep(i===0?0:430); }
  await T.sleep(300);
  await T.say('ノックは三回。労働で固まった、節くれだった指の音だった。','narr');
  await T.dlg('「開いてる」');
  T.sp();
  Scene.set('CLIENT_ep2');
  await T.sleep(400);
  await T.say('入ってきたのは五十がらみの男だった。','narr');
  await T.say('色の褪せた作業着。腰には、まだ命綱の金具をぶら下げたまま。','narr');
  await T.say('体じゅうから、洗浄剤と高所の冷たい風の匂いがした。','narr');
  T.sp();
  await T.npc('「ここで……記憶を、消してくれると聞いた」');
  await T.say('男の声は、低く礼儀正しかった。','narr');
  T.sp();
  await T.dlg('「座ってくれ。料金は前払い。作業が始まれば、取り消しはきかない」');
  await T.dlg('「余計なお喋りは、手短に頼む」');
  T.sp();
  await T.say('男は背筋を伸ばして腰掛けた。','narr');
  await T.say('命綱の金具が、カウンターの下でかちゃりと鳴った。','narr');
  T.sp();
  await T.tap();

  await T.dlg('「何を消したいんだ」');
  await T.say('男は、しばらく、自分のひび割れた手のひらを見つめていた。','narr');
  T.sp();
  await T.npc('「娘を」');
  await T.npc('「私の頭から……娘の、ことを」');
  T.sp();
  await T.say('男は作業着の胸ポケットから、すり切れた一枚の写真を取り出した。','narr');
  await T.say('幼い女の子が笑っている。男はそれを、カウンターにそっと裏返して置いた。まるでその顔を、まともに見られないとでもいうように。','narr');
  T.sp();
  await T.dlg('「死んだのか」');
  await T.npc('「いや」');
  await T.say('男は首を、ゆっくりと横に振った。','narr');
  T.sp();
  await T.npc('「生きてる。上で、元気にやってる。……立派に、なった」');
  await T.say('そう言う声には、隠しきれない誇りがにじんでいた。','narr');
  await T.say('消したい相手を語る声じゃない。', 'narr');
  T.sp();
  await T.tap();

  await T.dlg('「生きてる娘の記憶を、消したい。なるほど、理由を聞こうか」');
  await T.say('男は、口を開きかけ、また閉じた。','narr');
  await T.say('何度か、言葉を選び直して、ようやく、絞り出した。','narr');
  T.sp();
  await T.npc('「あの子は、もう……私のことを、覚えていないんだ」');
  await T.npc('「忘れたんじゃない。きれいに、消されてる。記憶から」');
  T.sp();
  await T.dlg('「……スクラブか」');
  await T.say('上に行く人間が、下層の過去を洗浄する。よくある話だ。この男の娘も、それをやったのだ。', 'narr');
  T.sp();
  await T.npc('「私が、そうさせたんだ」');
  await T.say('男は、自嘲とも後悔ともつかない薄い笑みを浮かべた。','narr');
  T.sp();
  await T.tap();

  await T.dlg('「娘に忘れられたのが、そんなに堪えるか」');
  await T.npc('「娘には……今でも、毎日会うんだ」');
  T.sp();
  await T.say('男は金具を、握りしめた。','narr');
  T.sp();
  await T.npc('「私はね、あの子のいる上層のタワーの窓拭きを、自分から願い出た」');
  await T.npc('「ゴンドラで、外側を上がっていく。するとガラス一枚、向こうに、あの子がいる」');
  await T.npc('「コーヒーを飲んでる。誰かと、笑ってる。……すぐ、そこで」');
  T.sp();
  await T.say('男の声が、初めて、震えた。','narr');
  T.sp();
  await T.npc('「だが、あの子は、私を見たりしない。タワーの外でガラスを拭く、汚れた下層の人間なんて、いないのと同じだ」');
  await T.npc('「目が合うこともある。だが、そのまま、すうっと、通り抜けていく」');
  await T.npc('「いないんだよ。あの子の中に、私は、もう…」');
  T.sp();
  await T.say('ガラス一枚。たった一枚で、父親と娘を隔てている。', 'narr');
  await T.say('――この世で一番、分厚い、一枚だ。', 'narr');
  T.sp();
  await T.npc('「もう、耐えられない。あの子を、忘れたい」');
  await T.npc('「娘なんて、最初から、いなかったことに、してほしい」');
  T.sp();
  await T.tap();

  await T.dlg('「いいのか。育てた日々も、全部ということだぞ」');
  await T.npc('「あんな思い出、持ってたって、もう、どこにも、繋がらない」');
  T.sp();
  await T.say('そう言う男の視線は、伏せた写真のちょうど真上で、止まっていた。', 'narr');
  await T.say('繋がらない、か。――その繋がらないロープに、この男は、十五年、ぶら下がってきたんだ。', 'narr');
  T.sp();
  await T.say('俺は何も言わずに、端末を引き寄せた。','narr');
  await T.say('ケーブルの先を、男の日に焼けた首筋のポートへ押し込む。','narr');
  await T.say('端末が、低く唸りをあげた。','narr');
  await T.sleep(400);

  await linkGlitch();
  linkOn();
  Scene.clearText();
  await msys('[ LINK ESTABLISHED ]');
  await msys('[ READING NEURAL ARCHIVE... ]');
  await T.sleep(300);

  await mlog('...妻は、あの子が三つのとき、逝った。');
  await mlog('...男手ひとつで、下層の薄暗い部屋で育てた。');
  await mlog('...娘は、スモッグの向こう側にある空を見たことがなかった。');
  await mlog('...「とうさんの仕事場からは、空、見える?」');
  await mlog('...「ああ。いつか、連れてってやる」');

  await mlog('...高層階の現場ほど、金になった。');
  await mlog('...命綱一本で、何百メートルも、上がった。');
  await mlog('...風で、体が、紙くずみたいに鳴った。');
  await mlog('...怖くはなかった。あの子を、上へやる金だ。');
  await mlog('...十五年。指のひび割れと引き換えに、私は必死で金を貯めた。');

  await T.sleep(300);
  glitch(500);
  await T.sleep(200);
  await msys('[ERR] RESIDUAL GHOST DETECTED', '#ff2244');
  await T.sleep(500);

  await mlog('...上層の市民権が承認された日。');
  await mlog('...あの子は、もう、私と同じ世界の人間じゃなくなった。');
  await mlog('...別れ際、私は、笑って言ってやった。');
  await mlog('...「向こうじゃ、ここのことは、全部忘れろ」');
  await mlog('...「後ろを、振り返るな。幸せに、なれ」');

  await T.say('男の喉が、ひきつるように鳴った。','narr');

  await mlog('...あの子は、約束を、守ったんだ。');
  await mlog('...言いつけ通り、振り返らなかった。');
  await mlog('...下層のことも。薄暗い部屋のことも。');
  await mlog('...私の、ことも。');
  await mlog('...そういう娘に、私が、育てた。');
  await T.sleep(300);

  await T.say('そういうことか。', 'narr');
  await T.say('この男が、自分の口で「忘れろ」と言った。その言葉どおりに、消えただけだ。', 'narr');
  await T.say('――こいつは、自分の手で、娘の中の自分を、消した。', 'narr');
  T.sp();
  await T.tap();

  linkOff();
  await linkGlitch();
  Scene.clearText();
  await msys('[ LINK TERMINATED ]');
  T.sp();
  await T.sleep(400);

  await T.say('端末の画面が薄暗くなった。','narr');
  await T.say('男は深くうなだれていた。命綱の金具が、カウンターにこつんと当たった。','narr');
  T.sp();
  await T.dlg('「……ずいぶん、高いところまで、上ったもんだな。あんたは」');
  await T.say('俺はじんわりと痛む目を擦りながら、口を開いた。','narr');
  T.sp();
  await T.dlg('「あんたが消したいのは、娘じゃない」');
  await T.dlg('「娘に、いないことにされた、自分のほうだ」');
  T.sp();
  await T.say('男は、ゆっくりと顔を上げた。','narr');
  await T.say('その目は、堪えた涙で濡れていた。','narr');
  T.sp();
  await T.npc('「……消してくれ。頼む」');
  await T.npc('「あの子は、幸せなんだ。なら、私の中の、私の未練だけが、邪魔なんだ」');
  T.sp();
  await T.dlg('「いいか。窓は、一度ぬぐえば、それまで何が映っていたかなんて、残らない」');
  await T.dlg('「あんたの頭も、同じだ。娘のことも、あんたの十五年も――ぜんぶ、拭き取って、それきりだ」');
  T.sp();
  await T.say('男はうつむいて黙っていた。','narr');
  await T.say('窓のない部屋に、地下水の滴る音だけが響いていた。','narr');
  T.sp();
  await T.npc('「……それで、いい」');
  await T.npc('「もう、楽に、なりたい」');
  T.sp();
  await T.tap();

  const ch = await showChoices();
  T.sp();
  if(ch==='ERASE') await ep2EraseEnd();
  else             await ep2KeepEnd();
  await ep2Epilogue();
}

async function ep2EraseEnd(){
  await msys('[ ERASING... ]');
  await T.sleep(280);
  await T.say('俺は端末のキーを叩いた。','narr');
  await T.say('薄暗い部屋。小さな手。ゴンドラの軋み。「いつか、空を」――十五年ぶんを塗りつぶしていく。','narr');
  T.sp();
  await T.say('キーを叩く指が、やけに冷たく感じた。', 'narr');
  await T.say('この男は、二度、娘を手放す。一度目は、上へ。二度目は、今日、自分の頭から。', 'narr');
  await T.say('俺はそれを煙と一緒に肺に呑み込んで、削除キーを押し込んだ。','narr');
  glitch(300);
  await T.sleep(350);
  await msys('[ COMPLETE ]', '#00ff55');
  T.sp();
  await T.say('十五年分の記憶が、男の中から消えた。','narr');
  await T.say('俺は男の首筋のポートから、ケーブルを引き抜いた。','narr');
  T.sp();
  await T.say('男は顔を上げた。','narr');
  await T.say('憑きものが落ちた、というのとは違う。何かが、ごっそりと抜け落ちた顔だった。','narr');
  T.sp();
  await T.say('男はぼんやりと周りを見回し、手持ち無沙汰に、腰の金具を指で、もてあそびはじめた。仕事前の癖なのだろう。','narr');
  await T.npc('「……おかしいな。私は、もう、上がる時間だったか？」');
  T.sp();
  await T.say('その目が、カウンターに裏返された一枚の写真をとらえた。','narr');
  await T.say('何気なくつまみ上げ、表を見る。見覚えのない幼い女の子が、笑っていた。','narr');
  await T.npc('「……どこの子だろうな、これは。あんたの娘か？」');
  await T.say('男は首をかしげると、興味を失くしたように、写真をまたカウンターへ戻した。','narr');
  T.sp();
  await T.say('持っていけ、とは、言わなかった。', 'narr');
  await T.say('そいつにとっては、もう、見ず知らずの子供の写真でしかない。', 'narr');
  T.sp();
  await T.npc('「……どうも、邪魔をした」');
  await T.say('男は、来たときよりいくらか晴れた顔で、頭を下げ、出口へ向かった。','narr');
  await T.say('晴れるはずだ。曇りの元のほうを、たった今、根こそぎ拭き取ってやったんだから。', 'narr');
  T.sp();
  await T.say('扉の閉まる音を、背中で聞いた。','narr');
  Scene.set('IDLE');
  await T.say('カウンターの隅で、俺の知らない女の子が、まだ笑っていた。','narr');
  T.sp();
  await T.say('これで、親子は、二人とも、きれいに忘れた。', 'narr');
  await T.say('上のガラスの、こちら側と向こう側で。おそろいだ。', 'narr');
  await T.say('明日も、あいつはあのタワーを磨くだろう。もう、ガラスの向こうに誰の姿も、探すことなく。', 'narr');
}

async function ep2KeepEnd(){
  await T.say('俺はケーブルを、引き抜いた。だが削除には、指一本触れなかった。','narr');
  T.sp();
  await T.say('男は、ぎゅっと目を閉じ、肩に力を入れて、その時を待っていた。','narr');
  await T.npc('「……何を、している。さっさと、終わらせてくれ」');
  await T.dlg('「悪いが、その仕事は、受けられない」');
  T.sp();
  await T.say('男が目を開けた。戸惑いと、すがるような色がよぎる。','narr');
  await T.npc('「なぜだ……! あんたは、記憶屋だろう。客の頼みを断るのか」');
  T.sp();
  await T.say('俺は、抜いたケーブルを、ゆっくりと巻き取った。','narr');
  await T.dlg('「あんたの娘は、あんたを、忘れた」');
  await T.dlg('「ここで、あんたまで、娘を忘れたら、どうなる」');
  T.sp();
  await T.say('男の指が止まった。','narr');
  T.sp();
  await T.npc('「この世のどこにも、なくなるんだ。あんたの娘に、父親がいたって事実が」');
  await T.dlg('「あの子のために、十五年、ビルを磨いた男がいた。それを覚えてるのは、もう、あんた一人だけだ」');
  T.sp();
  await T.npc('「……だが、それは、もう、誰の役にも」');
  await T.dlg('「役になんか、立たなくていい」');
  T.sp();
  await T.say('俺はタバコの煙を吐いた。','narr');
  T.sp();
  await T.dlg('「あんたが覚えてる限り、あんたの娘は、ちゃんと、誰かの娘だ。親に愛された娘だ」');
  await T.dlg('「あんたが消したら、それも、消える。最後の一つが、な」');
  await T.dlg('「忘れられて、なお、忘れずにいる。それが、できるのは、もう、あんたしかいない」');
  T.sp();
  await T.say('男は、テーブルに突っ伏して、声を殺して、泣いた。','narr');
  await T.say('ひび割れた手で、顔を覆って、いつまでも。','narr');
  T.sp();
  await T.tap();

  await T.say('やがて、男は、ゆっくりと立ち上がった。','narr');
  await T.say('カウンターに裏返したままだった写真へ、男は手を伸ばした。','narr');
  await T.say('そっと表に返す。幼い女の子が笑っている。男はそれを、両手で包んだ。','narr');
  T.sp();
  await T.npc('「……明日も、ガラスを、磨きに行くよ」');
  await T.npc('「あの子は、私を見ない。それでも、私は、あの子を見る」');
  await T.npc('「向こう側で、あの子が、笑ってるのを。それで、いいんだ」');
  T.sp();
  await T.say('男は写真を胸ポケットの奥へしまい、戸口で深く頭を下げると、夜明け前の街へ出ていった。','narr');
  Scene.set('IDLE');
  T.sp();
  await T.say('報われない愛、ってやつだ。', 'narr');
  await T.say('だが、あの男には、たぶん、それは関係ない。', 'narr');
  await T.say('見られなくても、見ていられる。それだけで、十分なんだろう。', 'narr');
}

async function ep2Epilogue(){
  Scene.set('IDLE');
  bgmFadeTo('assets/end_bg.mp3');
  await T.sleep(500);
  await T.say('客のいない店に、夜明けの気配だけが、薄く降りてくる。','narr');
  await T.say('俺は煙を吐いた。','narr');
  T.sp();
  await T.tap();
  await T.say('この街の上のほうじゃ、誰もが、綺麗な眺めを、欲しがる。','narr');
  await T.say('曇りのないガラス。澄んだ空。完璧な、自分。','narr');
  await T.say('そのために、邪魔なものを片端から、拭き取っていく。汚れも、過去も、人も。','narr');
  T.sp();
  await T.say('拭かれた側は、どこへ行くんだろうな。','narr');
  await T.say('たぶん、こういう陽の当たらない場所に、溜まっていく。','narr');
  await T.say('拭き取られた人間が、また、誰かを、忘れに来る。','narr');
  T.sp();
  await T.tap();
  await T.say('愛してる、と、忘れろ、が。','narr');
  await T.say('同じ口から、出てくることがある。','narr');
  await T.say('あの男は、娘を上へやって、自分を消せと命じた。','narr');
  await T.say('――いちばん深い愛ってのは、たぶん、見返りを最初から捨ててる。','narr');
  T.sp();
  await T.say('俺にはよく分からない。覚えのある感情じゃないからな。','narr');
  await T.say('親の情ってやつは、どうやら、俺の守備範囲の外らしい。','narr');
  T.sp();
  await T.tap();
  await T.say('俺はタバコを消した。','narr');
  await T.say('端末の画面の端に、埃が薄く積もっている。','narr');
  await T.say('指でそれを拭った。汚れは、すぐにまた、つく。','narr');
  await T.say('――綺麗なままでいられるものなんて、この街には何ひとつ、ない。', 'narr');
  T.sp();
  await T.say('緑の光が、瞬く。','narr');
  await T.say('そろそろ、上の連中が、目を覚ます時間だ。','narr');
  await T.say('今日も街じゅうのガラスが、誰かの手で磨かれていく。曇り一つ、残さずに。','narr');
  T.sp();
  await episodeTransition(
    '[ END OF LOG: EP.2  BEYOND THE GLASS ]', 'ガラスの向こう',
    '[ START LOG: EP.3  LEFT BEHIND ]', '忘れもの');
}
