async function ep7(){
  await T.say('深夜。十二時を回った。', 'narr');
  await T.say('煙が、端末の緑の光をくぐって、天井へ吸われていく。', 'narr');
  T.sp();
  await T.say('この街は、身体を金で買う。心臓も、肺も、目も、腕も。古びれば取り替える。', 'narr');
  await T.say('壊れた部品を直す者を、医者と呼ぶ。上層には、白い手をした名医がいる。下層には、もぐりがいる。', 'narr');
  await T.say('どっちも人を生かすが、生かしきれなかったぶんだけ、死人を背負う。', 'narr');
  T.sp();
  await T.say('俺は、人を生かしも殺しもしない。ただ、頭の中から、いらないものを切り取るだけだ。', 'narr');
  await T.say('医者とは、逆の仕事かもしれない。', 'narr');
  T.sp();
  await T.tap();

  await Scene.load('CLIENT_ep0');
  for(let i=0;i<2;i++){ knock(); await T.sleep(i===0?0:500); }
  await T.sleep(300);
  await T.say('ノックは二つ。短く、用件だけのような叩き方だった。', 'narr');
  await T.dlg('「開いてる」');
  T.sp();
  Scene.set('CLIENT_ep0');
  await T.sleep(400);
  await T.say('入ってきたのは、五十がらみの女だった。', 'narr');
  await T.say('身なりは質素だが、清潔だ。袖をきっちり折り返している。', 'narr');
  await T.say('指が、長い。器用そうな指だ。だが、その指先が、本人の意思とは無関係に、細かく震えていた。', 'narr');
  T.sp();
  await T.dlg('「座ってくれ。料金は前払い。作業が始まれば、取り消しはきかない」');
  await T.dlg('「余計なお喋りは、手短に頼む」');
  T.sp();
  await T.say('女は、背筋を伸ばして腰かけた。膝の上で、震える両手を、もう片方の手で押さえこんだ。', 'narr');
  await T.npc('「わたしは、下層で、もぐりの医者をしている」');
  T.sp();
  await T.tap();

  await T.dlg('「医者が、記憶屋に何の用だ」');
  await T.npc('「消してほしい人がいる。たくさん」');
  T.sp();
  await T.say('女は、淡々と言った。世間話のような口ぶりだった。だが、押さえこんだ手は、まだ震えていた。', 'narr');
  T.sp();
  await T.npc('「わたしが、死なせた患者よ」');
  await T.npc('「もぐりの診療所なんてものは、設備も薬も足りない。運び込まれた人間の、何割かは、わたしの目の前で死ぬ」');
  await T.npc('「何十年。何百人、看取ったか、もう数えていない」');
  T.sp();
  await T.dlg('「医者なら、慣れた話じゃないのか」');
  await T.npc('「慣れたわ。とっくに。――だから、忘れられると思っていた」');
  T.sp();
  await T.say('女は、左のこめかみを、震える指で示した。', 'narr');
  await T.npc('「ここに、診断補助のインプラントが入っている。患者の容態を、記録して、照合するための。医者には要るのよ、これが」');
  await T.npc('「でもね。これは、死に顔も記録する。劣化しない解像度でね」');
  await T.npc('「三十年前に死なせた子供の、最期の呼吸の音まで。昨日のことみたいに、再生される」');
  T.sp();
  await T.tap();

  await T.dlg('「で、何が起きてる」');
  await T.say('女は、押さえていた手を、そっと離した。', 'narr');
  await T.say('指先が、はっきりと震えていた。', 'narr');
  T.sp();
  await T.npc('「半年前から、手が、こうなった」');
  await T.npc('「メスを握ると、震える。患者の胸を開こうとすると、見えるのよ。これまで死なせた、何百人の顔が。今、目の前で開いている胸に、重なって」');
  await T.npc('「この患者も、わたしの手の中で死ぬんじゃないか。そう思うと、指が、言うことをきかない」');
  T.sp();
  await T.npc('「先週、運ばれてきた若い男を、助けられなかった。本当なら、きっと助かる傷だった。わたしの手さえ、震えていなければ」');
  await T.npc('「その男の顔も、また、ここに増えた。――きりがない」');
  T.sp();
  await T.say('女は、自分の震える手のひらを、長いこと見つめていた。', 'narr');
  T.sp();
  await T.npc('「だから、消してほしい。これまで死なせた患者の記憶を、全部」');
  await T.npc('「死んだ人間は、もう、わたしには治せない。なのに、その死人たちが、生きている患者を、わたしに殺させる」');
  await T.npc('「もう一度、メスを、まっすぐに握りたいの。それだけよ」');
  T.sp();
  await T.tap();

  await T.dlg('「いいのか。あんたが看取った人間を、まるごと忘れるんだぞ」');
  await T.npc('「医者が、死なせた患者を覚えていることに、何の意味があるの？」');
  await T.npc('「弔いなら、葬儀屋の仕事よ。わたしの仕事は、生きてる人間のためにある」');
  T.sp();
  await T.say('言葉は、迷いなく聞こえた。だが、その声の底が、わずかに、震えていた。手と、同じ周期で。', 'narr');
  T.sp();
  await T.say('俺は、何も言わずに、ケーブルを引き寄せた。', 'narr');
  await T.say('女の首筋のポートに、先端を差し込む。', 'narr');
  await T.sleep(400);

  await linkGlitch();
  linkOn();
  Scene.clearText();
  await msys('[ LINK ESTABLISHED ]');
  await msys('[ READING NEURAL ARCHIVE... ]');
  await T.sleep(300);

  await mlog('...運び込まれた、名前も知らない男。');
  await mlog('...血が足りなかった。下層には、血も足りない。');
  await mlog('...工場で腕が潰された若者。麻酔が、切れていた。');
  await mlog('...最後まで、痛い、とは言わなかった。それが、つらかった。');
  await mlog('...冷たくなった子供を、母親に返した。');
  await mlog('...「先生のせいじゃない」と、誰かが言った。');
  await mlog('...そう言われるたびに、わたしのせいになっていく。');
  await mlog('...咳の止まらない老人。薬さえあれば、助かった。薬が、なかった。');
  await mlog('...「ここまで診てもらえて、それだけで御の字だ」と、笑って逝った。');
  await mlog('...死に顔は、消えない。礼を言われた顔より、ずっと、鮮明に。');

  await T.sleep(300);
  glitch(500);
  await T.sleep(200);
  await msys('[ERR] RESIDUAL GHOST DETECTED', '#ff2244');
  await T.sleep(200);
  await T.say('死者の記憶を、こう大量に読んだのは、久しぶりだ。脳が、他人の死を、自分のもののように錯覚しかける。', 'narr');
  await T.say('俺は、死んだ人間の顔なんて、一つも覚えていない。客の顔さえ、忘れる商売だ。', 'narr');
  await T.say('――なのに、今、知らない誰かの最期が、やけに懐かしい気がした。', 'narr');
  T.sp();
  await T.tap();

  await mlog('...いちばん底に、一人だけ、別格の死人がいる。');
  await mlog('...まだ、医者ですらなかった頃の、わたしの手の中で。');
  await mlog('...設備も、知識も、何もなかった。ただ、手で押さえることしか。');
  await mlog('...「あなたは、医者におなりなさい」と、その人は言った。');
  await mlog('...わたしは頷いた。その約束のために、三十年、メスを握ってきた。');
  await T.sleep(300);

  await T.say('そういうことか。', 'narr');
  await T.say('何百人の死人。その、いちばん奥に、たった一人。', 'narr');
  await T.say('この女は、最初の一人に、医者にされた。そして今、その一人に、医者をやめさせられかけているのだ。', 'narr');
  T.sp();
  await T.tap();

  linkOff();
  await linkGlitch();
  Scene.clearText();
  await msys('[ LINK TERMINATED ]');
  T.sp();
  await T.sleep(400);

  await T.say('端末の光が、静かになった。', 'narr');
  await T.say('女は、まっすぐ俺を見ていた。手はまだ、震えていた。', 'narr');
  T.sp();
  await T.dlg('「あんたが消すべきなのは、その何百人じゃないな」');
  await T.npc('「……何ですって」');
  T.sp();
  await T.dlg('「いちばん奥の、いちばん古い一人だ。あんたを医者にした、最初の死人だよ」');
  await T.dlg('「あんたは、その一人との約束を守るために、三十年、人を生かしてきた。そいつが、今、あんたの手を、震わせてる」');
  T.sp();
  await T.say('女の、震える手が、膝の上で固く握りこまれた。', 'narr');
  T.sp();
  await T.npc('「……消せないわ、それは」');
  await T.npc('「あの人を消したら、わたしは、なぜメスを握るのか、分からなくなる」');
  await T.dlg('「だが――覚えていたら、手が震えて、もう、誰も救えないんだろう？」');
  T.sp();
  await T.say('女は、しばらく黙り込んだ。', 'narr');
  T.sp();
  await T.npc('「教えて。覚えていることは、弔い? それとも――今、わたしの前で死んでいく患者への、裏切り?」');
  T.sp();
  await T.say('俺は、答えなかった。', 'narr');
  await T.say('それは、客が決めることだ。いつもそうしてきた。', 'narr');
  T.sp();
  await T.tap();

  const ch = await showChoices('[ ERASE ]', '[ KEEP ]');
  T.sp();
  if(ch==='ERASE') await ep7EraseEnd();
  else             await ep7KeepEnd();
  await ep7Epilogue();
}

async function ep7EraseEnd(){
  await T.npc('「……消して。ぜんぶ。いちばん奥の、最初の一人ごと」');
  await T.npc('「あの人との約束は、もう、果たした。三十年、果たし続けた。もう、じゅうぶんよ」');
  T.sp();
  await T.dlg('「……分かった」');
  T.sp();
  await msys('[ ERASING... ]');
  await T.say('俺は、死者の層に、片端から削除のマーカーを打っていった。', 'narr');
  await T.say('名もない男。冷たくなった子供。そして、いちばん奥の、約束の一人。――三十年分の死者を、底へ向かって、一枚ずつ葬っていく。', 'narr');
  glitch(300);
  await T.sleep(350);
  await msys('[ COMPLETE ]', '#00ff55');
  T.sp();
  await T.say('女が、ゆっくり目を開けた。', 'narr');
  await T.say('その手を、目の前にかざす。指先は――もう、震えていなかった。', 'narr');
  T.sp();
  await T.npc('「……止まった」');
  await T.npc('「嘘みたい。こんなに、静かなのね。わたしの手は」');
  T.sp();
  await T.dlg('「あんたは救おうとした人間も、救えなかった人間も、もう、覚えてない」');
  await T.dlg('「なんで医者になったのかも、忘れただろう」');
  T.sp();
  await T.say('女は、少し考えるような顔をした。それから、軽く、肩をすくめた。', 'narr');
  await T.npc('「さあ。なぜだったかしらね。――でも、手は、覚えているわ。やり方は、指が知っている」');
  T.sp();
  await T.say('女は立ち上がった。背筋が、来たときよりも、まっすぐだった。', 'narr');
  await T.npc('「明日も、患者は運ばれてくる。今度は、取りこぼさずに済みそう」');
  T.sp();
  await T.say('女は、礼を言って、階段を上っていった。', 'narr');
  await T.say('もう、誰のことも悼まない手で。だが、確実に、明日の誰かを生かす手で。', 'narr');
  Scene.set('IDLE');
  T.sp();
  await T.say('あの女は、これから、大勢を救うだろう。なぜ救うのかも、知らないまま。', 'narr');
  await T.say('祈りを忘れた名医。――それは、患者にとっては、たぶん、いちばんいい医者だ。', 'narr');
}

async function ep7KeepEnd(){
  await T.npc('「……やめておくわ」');
  await T.npc('「消さない。このまま、持って帰る。震える手ごと」');
  T.sp();
  await T.say('俺は、しばらく女を見てから、ケーブルを、そっと引き抜いた。', 'narr');
  await T.say('女が、顔を上げた。震える手のまま。', 'narr');
  T.sp();
  await T.dlg('「いいのか。消せば、その震えは止まる。また、大勢を救える」');
  await T.npc('「ええ。分かってる。それでも、よ」');
  T.sp();
  await T.dlg('「あんたの手を震わせてるのは、病気じゃない。あんたが、一人ひとりの死を、本気で背負ってきた証拠だ」');
  await T.dlg('「それを消したら、震えは止まる。あんたは、また大勢を救えるだろう。だが、なぜ救うのかは、忘れる」');
  await T.dlg('「死人を悼まない手は、よく動く。動きすぎる。――それは、もう、医者じゃない。よくできた器具だ」');
  T.sp();
  await T.say('女は、長いこと、自分の震える手を見ていた。', 'narr');
  T.sp();
  await T.npc('「……でも。この手では、また、取りこぼす」');
  await T.dlg('「ああ。取りこぼすかもしれん」');
  await T.dlg('「覚えてるってのは、そういうことだ。重い。次の患者の命を、危険にさらすだろう」');
  await T.dlg('「ただ、それは、あんたが医者になると決めた瞬間に選んだ重さだ」');
  T.sp();
  await T.say('女は、ゆっくりと、震える手を、開いて、閉じた。何度か。確かめるように。', 'narr');
  T.sp();
  await T.npc('「……三十年、約束のために使ってきた手よ」');
  await T.npc('「震えたくらいで、手放すには、惜しいわね」');
  T.sp();
  await T.say('女は立ち上がった。手は、まだ震えていた。だが、その目は、来たときより、静かだった。', 'narr');
  await T.npc('「次の患者を、取りこぼさないとは、言えない。でも――忘れて救うより、覚えて、震えながら救うわ」');
  await T.npc('「それが、あの人との、約束だから」');
  T.sp();
  await T.say('女は、頭を下げて、出ていった。', 'narr');
  await T.say('震える手を、隠しもせずに。', 'narr');
  Scene.set('IDLE');
}

async function ep7Epilogue(){
  Scene.set('IDLE');
  bgmFadeTo('assets/end_bg.mp3');
  await T.sleep(500);
  await T.say('消毒液の匂いが、店にしばらく残っていた。', 'narr');
  T.sp();
  await T.tap();
  await T.say('俺は、忘れさせる商売をしている。', 'narr');
  await T.say('客はみんな、覚えていることに、疲れて来る。記憶は重い。重すぎて、立っていられなくなる。', 'narr');
  await T.say('だから俺は、その重さを切り取ってやる。客は、軽くなって帰る。', 'narr');
  T.sp();
  await T.say('だが、今夜の医者で、分かった。', 'narr');
  await T.say('重さを背負えるってのは、まだ、立っているってことだ。', 'narr');
  await T.say('本当に潰れた人間には、震える手すら、もう、残っていない。', 'narr');
  T.sp();
  await T.tap();
  await T.say('覚えていることは、弔いなのか。生きてる者への、裏切りなのか。', 'narr');
  await T.say('たぶん、両方だ。どっちかを選んだ瞬間に、もう片方を、取りこぼす。', 'narr');
  await T.say('俺の仕事は、その選択を、客の代わりに、引き受けることだ。', 'narr');
  T.sp();
  await T.say('――では、俺自身は。何を背負って、何を切り捨てて、ここに座っているのだろう。', 'narr');
  await T.say('思い出そうとして、いつものように、何も出てこなかった。俺の手は、タバコと、ケーブルしか、覚えていない。', 'narr');
  T.sp();
  await T.say('俺は、しばらく自分の手のひらを見つめていた。', 'narr');
  T.sp();
  await episodeTransition(
    '[ END OF LOG: EP.7  THE STEADY HAND ]', '手の理由',
    '[ START LOG: EP.8  THE GIFT ]', '贈りもの');
}
