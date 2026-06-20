async function ep6(){
  await T.say('どこかで、機械が鳴っている。','narr');
  await T.say('下層の工場は、止まらない。人が眠っても、ラインだけは回り続ける。','narr');
  await T.say('この街は、人間より機械のほうを信用している。疲れず、迷わず、夢も見ない。', 'narr');
  T.sp();
  await T.say('遠くの規則正しい打撃音が、地面を伝ってくる。','narr');
  await T.say('ガシャン、ガシャン。――同じ音が、同じ間隔で、永遠に。', 'narr');
  await T.say('あの音の数だけ、誰かの一日が、すり減っている。', 'narr');
  T.sp();
  await T.tap();

  await Scene.load('CLIENT_ep0');
  for(let i=0;i<3;i++){ knock(); await T.sleep(i===0?0:500); }
  await T.sleep(300);
  await T.say('ノックは、三つ。判で押したように、同じ強さ、同じ間隔だった。','narr');
  await T.dlg('「開いてる」');
  T.sp();
  Scene.set('CLIENT_ep0');
  await T.sleep(400);
  await T.say('入ってきたのは岩みたいな男だった。四十代後半。','narr');
  await T.say('油の染みた作業着。肩も、首も、丸太のようだ。だが、背中は長年同じ姿勢でこごめられて固まっている。','narr');
  await T.say('右手だけが、不自然にごつかった。潰れた拳。','narr');
  T.sp();
  await T.dlg('「座ってくれ。料金は前払い。作業が始まれば、取り消しはきかない」');
  await T.dlg('「余計なお喋りは、手短に頼む」');
  T.sp();
  await T.say('男は、どっかと腰を下ろした。','narr');
  await T.npc('「……俺は」');
  await T.npc('「昔、ボクサーに、なるはずだった」');
  T.sp();
  await T.tap();

  await T.dlg('「で、今は」');
  await T.npc('「プレス工だ。二十年。毎日毎日、同じボタンを押してる」');
  await T.say('男は潰れた右の拳を、テーブルの上に置いた。','narr');
  T.sp();
  await T.npc('「これを、見てくれ。いい拳だったんだ。昔は」');
  await T.npc('「下層から抜け出す道は、二つしかなかった。頭か、拳か。俺は、拳のほうに賭けた」');
  await T.npc('「強かったぞ。地区じゃ敵なし。プロのスカウトも、来た。眩しい照明を浴びて、プロのリングに上がるはずだった」');
  T.sp();
  await T.dlg('「その手じゃ、リングに上がれなかったわけか」');
  await T.npc('「ああ」');
  await T.npc('「金が必要だった。トレーニングにも、飯にも。だから、昼間は工場で稼いだ」');
  await T.npc('「その工場のプレス機に。試合の三日前に。右手を持っていかれた」');
  T.sp();
  await T.say('上がるための金を稼ぐための場所で。上がるための拳を、潰した。', 'narr');
  await T.say('――出来の悪い笑い話だ。笑えない笑い話。', 'narr');
  T.sp();
  await T.tap();

  await T.dlg('「二十年も前の話だろう。今さら、何を消す」');
  await T.npc('「あいつが、まだ、いるんだよ」');
  T.sp();
  await T.say('男は、こめかみを、太い指で叩いた。','narr');
  T.sp();
  await T.npc('「リングに上がるはずだった若い俺が。ここに、まだ立ってる」');
  await T.npc('「毎日、プレス機の前で、ボタンを押すたびに。あいつが、横で言うんだ」');
  await T.npc('「『お前、こんなところで何してる』『お前は、こんなもんじゃなかった』ってな」');
  T.sp();
  await T.npc('「二十年、毎日だ。ガシャンと押すたび、あいつに殴られる」');
  await T.npc('「もう、いいんだ。俺は、ただのプレス工だ。それで、いい。それでいいんだよ」');
  await T.npc('「だから、消してくれ。あの、強かった頃の、俺を」');
  await T.npc('「夢を見てた頃の俺さえ消えれば。俺は、やっと、この仕事に、満足できる」');
  T.sp();
  await T.say('なり損ねた自分の幻に、二十年、殴られ続けた男。', 'narr');
  await T.say('そいつを消して楽になりたい。――よくある、まっとうな望みだ。', 'narr');
  T.sp();
  await T.say('俺は端末を引き寄せた。','narr');
  await T.dlg('「読もう。その、強かった頃を、確かめてからだ」');
  await T.say('ケーブルを、丸太のような首筋へ。傷だらけの古いポートが軋むようにそれを呑み込んだ。','narr');
  await T.sleep(400);

  await linkGlitch();
  linkOn();
  Scene.clearText();
  await msys('[ LINK ESTABLISHED ]');
  await msys('[ READING NEURAL ARCHIVE... ]');
  await T.sleep(300);

  await mlog('...十六で、ジムの扉を叩いた。');
  await mlog('...サンドバッグを打つと、歪んでいた世界がまっすぐになった。');
  await mlog('...初めて勝った夜、空が、やけに高かった。');
  await mlog('...「お前は、ここから出られる」と、トレーナーが言った。');
  await mlog('...拳一つで、俺は、誰かに、なれるはずだった。');

  await mlog('...プレス機が落ちた音は覚えていない。');
  await mlog('...気づいたら、右手が、別のものになっていた。');
  await mlog('...医者が首を横に振った。');
  await mlog('...リングの上の俺は、その日、生まれる前に、死んだ。');
  await mlog('...残ったのは、ボタンを押すだけの、二十年だ。');

  await T.sleep(300);
  glitch(500);
  await T.sleep(200);
  await msys('[ERR] RESIDUAL GHOST DETECTED', '#ff2244');
  await T.sleep(200);
  await T.say('――視界の端が、緑にぶれた。', 'narr');
  await T.say('ふいに、自分の右手が、見知らぬ動きをしたがった気がした。', 'narr');
  await T.say('殴るでも、握るでもない。何か、別の――誰かの手癖みたいな動き。', 'narr');
  await T.say('……気のせいだ。俺の手が覚えてるのは、ペンと、ケーブルだけだ。', 'narr');
  T.sp();

  await mlog('...ガシャン。ボタンを押す。');
  await mlog('...横で、十六の俺が舌打ちする。');
  await mlog('...ガシャン。「こんなもんじゃ、ない」');
  await mlog('...ガシャン。「立て」「まだ、立てる」');
  await mlog('...――その声がうるさくて。その声だけが、俺を人間にしていた。');
  await T.sleep(300);

  await T.say('そういうことか。', 'narr');
  await T.say('こいつは、二十年、その若い亡霊に殴られ続けてきた。', 'narr');
  await T.say('――だが、よく見ろ。亡霊は、殴ると同時に、ずっとこいつを地面に立たせている。', 'narr');
  T.sp();
  await T.say('夢の幻が、消えたら。残るのは、満足したプレス工じゃない。', 'narr');
  await T.say('何の声も聞こえない。ただ、ボタンを押すだけの。――機械だ。', 'narr');
  T.sp();
  await T.tap();

  linkOff();
  await linkGlitch();
  Scene.clearText();
  await msys('[ LINK TERMINATED ]');
  T.sp();
  await T.sleep(400);

  await T.say('端末の光が、すっと引いた。','narr');
  await T.say('男は、潰れた拳を、握ったり開いたりしていた。','narr');
  T.sp();
  await T.dlg('「読んだよ。あんたの、二十年を」');
  await T.dlg('「あんたが消したいのは、強かった頃の自分じゃない」');
  await T.dlg('「毎日、横で、『立て』って、怒鳴ってくる、その声だ」');
  T.sp();
  await T.npc('「……ああ。そうだ。あいつを、黙らせたい」');
  await T.dlg('「黙るぞ。消せば、きれいに、な」');
  await T.dlg('「だが、わかってるか。あの声は、あんたを、殴ってるんじゃない」');
  await T.dlg('「二十年、あんたを、立ち上がらせてきたんだ」');
  T.sp();
  await T.say('男の、開きかけた拳が止まった。','narr');
  T.sp();
  await T.dlg('「あれを消すと、あんたは、楽になるだろう。二度と、なり損ねた自分に殴られない」');
  await T.dlg('「その代わり、明日からは、何の声もしない。ただ、ボタンを押すだけだ」');
  await T.dlg('「俺ならそれを満足とは言わん。それは――もう、機械の、毎日だ」');
  T.sp();
  await T.npc('「……だが、もう、殴られるのは、疲れた」');
  await T.npc('「俺は、ただ、静かになりたいんだ」');
  T.sp();
  await T.tap();

  const ch = await showChoices();
  T.sp();
  if(ch==='ERASE') await ep6EraseEnd();
  else             await ep6KeepEnd();
  await ep6Epilogue();
}

async function ep6EraseEnd(){
  await msys('[ ERASING... ]');
  await T.say('俺は、十六の男に、削除のマーカーを置いた。','narr');
  await T.say('ジムの扉。サンドバッグ。高かった空。トレーナーの言葉――なり損ねた未来を、根こそぎ塗りつぶしていく。','narr');
  T.sp();
  await T.say('これで、横の亡霊は黙る。', 'narr');
  await T.say('そして、こいつの中で、最後に火が点いていた場所も、暗くなる。', 'narr');
  glitch(300);
  await T.sleep(350);
  await msys('[ COMPLETE ]', '#00ff55');
  T.sp();
  await T.say('男は、ふっと、肩を落とした。','narr');
  await T.say('長年、こごめていた背中から、力みが、すっと抜けた。','narr');
  await T.npc('「……静かだ」');
  await T.npc('「ああ、静かだ。何も、言ってこない」');
  T.sp();
  await T.say('男は、潰れた右手を見た。だが、その目には、もう、悔しさも、誇りも、何も映らなかった。','narr');
  await T.npc('「これは……ただの、古い怪我だな。なんで、気にしてたんだか」');
  T.sp();
  await T.say('男は礼を言って立ち上がった。背筋は、来たときより、すっと伸びていた。','narr');
  await T.say('まっすぐな背中だ。重荷を下ろした、いい背中だ。', 'narr');
  await T.say('――なのに、なぜか、人形を見送っている気がした。', 'narr');
  T.sp();
  await T.say('重い肩が、ドアの隙間を器用にすり抜けていった。','narr');
  Scene.set('IDLE');
  await T.say('明日からこいつは、楽にボタンを押す。何の声も、聞かずに。', 'narr');
  await T.say('それを、救いと呼ぶのか。俺には、わからない。', 'narr');
}

async function ep6KeepEnd(){
  await T.say('俺は、ケーブルを抜いた。マーカーは、置かなかった。','narr');
  T.sp();
  await T.npc('「……おい。消さないのか」');
  await T.dlg('「消さない」');
  T.sp();
  await T.say('男が、太い眉を寄せた。','narr');
  await T.npc('「あの声を、止めてくれ」');
  T.sp();
  await T.dlg('「止めたら、あんた、終いだぞ」');
  await T.say('俺は、潰れた拳を顎で示した。','narr');
  T.sp();
  await T.dlg('「その声はな。あんたが、まだ、納得してない証拠だ」');
  await T.dlg('「二十年プレス機を押しても、まだ、『こんなもんじゃない』って、言える」');
  await T.dlg('「それは、呪いじゃない。あんたが、まだ、生きてる音だ」');
  T.sp();
  await T.npc('「……生きてる、だと。こんな、なり損ないが」');
  await T.dlg('「なり損なった奴だけが、聞こえる声だ。最初から何も賭けなかった奴には、その声すら、しない」');
  await T.dlg('「あんたは、賭けた。だから、殴られる。――上等な、痛みじゃないか」');
  T.sp();
  await T.say('男は長いあいだ、潰れた拳を見つめていた。','narr');
  await T.say('やがて、その拳を、ゆっくりと握りしめた。痛むはずの手を、痛むまで。','narr');
  T.sp();
  await T.npc('「……上等な、痛み、か」');
  await T.npc('「二十年、殴られて。そんなふうに言われたのは、初めてだ」');
  T.sp();
  await T.say('男は立ち上がり、戸口で振り返った。','narr');
  await T.npc('「明日も、あいつは、横でうるさいんだろうな」');
  await T.dlg('「ああ。せいぜい、殴られてやれ」');
  await T.say('男は、潰れた拳で、軽く自分の胸を叩いた。ゴングみたいに。','narr');
  await T.say('そして、油の匂いを残して、出ていった。','narr');
  Scene.set('IDLE');
  T.sp();
  await T.say('満足なんか、しなくていい。', 'narr');
  await T.say('満足した人間から、機械になっていくんだ。この街じゃ。', 'narr');
}

async function ep6Epilogue(){
  Scene.set('IDLE');
  bgmFadeTo('assets/end_bg.mp3');
  await T.sleep(500);
  await T.say('油の匂いが、椅子に染みついて残った。','narr');
  await T.say('遠くで、まだ、機械が鳴っている。','narr');
  T.sp();
  await T.tap();
  await T.say('この街は、人間を安く機械にする。','narr');
  await T.say('同じ仕事を、同じ動きで、文句も言わず、夢も見ず。','narr');
  await T.say('疲れない労働力ってのは、つまり、もう人間じゃないってことだ。','narr');
  T.sp();
  await T.say('人を、機械から、人間に引き止めているもの。','narr');
  await T.say('――たぶん、それは、満足できないという、しつこい痛みなのだろう。','narr');
  T.sp();
  await T.tap();
  await T.say('ガシャン、と遠くで、音がする。', 'narr');
  await T.say('あの男の横の亡霊は、今夜も、怒鳴っているだろうか。', 'narr');
  await T.say('――俺の横には、もう、誰も立っていない。', 'narr');
  await T.say('何の声も、しない。「こんなもんじゃない」と、言ってくる声が。', 'narr');
  await T.say('……それは、満足したから、なのか。それとも、とっくに、機械になり終えたあとだから、なのか。', 'narr');
  T.sp();
  await T.tap();
  await T.say('自分の右手を、しばらく見ていた。何の覚えもない、きれいな手だ。傷一つ、ない。','narr');
  await T.say('傷一つ、ない手。――二十年、何かに、賭けた覚えの、ない手。', 'narr');
  T.sp();
  await T.say('緑の光が、瞬く。機械の音だけが、夜を刻んでいる。','narr');
  T.sp();
  await episodeTransition(
    '[ END OF LOG: EP.6  THE BELL ]', 'ゴング',
    '[ START LOG: EP.7  THE STEADY HAND ]', '手の理由');
}
