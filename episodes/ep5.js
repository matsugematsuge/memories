async function ep5(){
  await T.say('ここに来る客に、子供は、いない。','narr');
  await T.say('子供には、消したい過去も、売るほどの記憶も、まだないからだ。','narr');
  await T.say('――そう、思っていた。', 'narr');
  T.sp();
  await T.say('静かな夜だった。','narr');
  await T.say('ふと、ドアの下の隙間に、小さな靴の影がもじもじと揺れていた。','narr');
  T.sp();
  await T.say('さっきから、入るでも、帰るでもなく。', 'narr');
  await T.say('ずっと、そこに立っている。', 'narr');
  T.sp();
  await T.tap();

  await Scene.load('CLIENT_ep0');
  for(let i=0;i<3;i++){ knock(); await T.sleep(i===0?0:280); }
  await T.sleep(300);
  await T.say('ノックは、ドアのずっと下のほうで鳴った。','narr');
  await T.dlg('「……開いてる」');
  T.sp();
  Scene.set('CLIENT_ep0');
  await T.sleep(400);
  await T.say('入ってきたのは子供だった。十か、十一か。','narr');
  await T.say('膝の出たズボン。継ぎの当たった上着。前髪の下で、大きな目が、店じゅうを用心深く見回した。','narr');
  await T.say('小さな手は、何かを固く握りしめている。','narr');
  T.sp();
  await T.dlg('「……坊主。ここは、子供の来る店じゃない。親は」');
  await T.npc('「いない。お母さんは、仕事。夜の」');
  await T.npc('「ここ……記憶を、お金にしてくれる店、だよね」');
  T.sp();
  await T.say('手が、止まった。', 'narr');
  await T.say('どこで覚えてきた。こんな、薄汚れた大人の言葉を。', 'narr');
  T.sp();
  await T.npc('「売りたいんだ。ぼくの、記憶」');
  T.sp();
  await T.tap();

  await T.dlg('「座れ」');
  await T.say('子供は大きすぎる椅子に、よじ登るように腰かけた。足が床に届かない。','narr');
  await T.say('握っていた手を開く。中から出てきたのは――しわくちゃの紙きれ。子供の字で「きおく、うります」と書いてあった。','narr');
  T.sp();
  await T.dlg('「金が、要るのか」');
  await T.npc('「うん」');
  await T.npc('「お母さんが、電話で泣いてた。『今月の、お金が』って。何度も、ごめんなさいって」');
  await T.npc('「ぼく、貯金をぜんぶ出した。でも、足りないって」');
  T.sp();
  await T.npc('「だから、調べたんだ。子供でも、売れるもの。――記憶なら、あるって」');
  T.sp();
  await T.say('こいつは、自分の体以外に売れるものを探して。', 'narr');
  await T.say('たどり着いたのが、ここか。', 'narr');
  T.sp();
  await T.tap();

  await T.dlg('「記憶は、安くない覚悟が、要る。一度売ったら、二度と、戻らない」');
  await T.dlg('「何を売る気だ」');
  await T.npc('「いちばん、高く、売れるやつ」');
  await T.npc('「ぼくの、いちばん、たからものを、売る」');
  T.sp();
  await T.say('子供は、まっすぐ俺を見た。商談に来た大人の目を真似て。','narr');
  await T.say('だが、その膝が、椅子の上で、小さく、震えていた。','narr');
  T.sp();
  await T.dlg('「……いいだろう。査定してやる。何が一番か、見せてみろ」');
  await T.say('細い首に、端子を、そっと当てる。爪の先ほどの光が、ぽつりと灯った。','narr');
  await T.sleep(400);

  await linkGlitch();
  linkOn();
  Scene.clearText();
  await msys('[ LINK ESTABLISHED ]');
  await msys('[ READING NEURAL ARCHIVE... ]');
  await msys('[ APPRAISAL MODE ]');
  await T.sleep(300);
  await T.say('子供の記憶は、軽い。痛みも、後悔も、まだほとんどない。', 'narr');
  await T.say('――だが、その中に、一つだけ。やけに光っている記憶があった。', 'narr');
  T.sp();
  await mwarm('...去年の、お母さんの、お休みの日。');
  await mwarm('...二人で、タワー近くの公園まで、歩いた。');
  await mwarm('...お母さんがこっそり買ってくれた、パン一個を、半分こ。');
  await mwarm('...風が、あったかくて。お母さんの膝で、少し、寝た。');
  await mwarm('...起きたら、お母さんが、ぼくを見て、笑ってた。');
  await T.sleep(200);
  await T.say('たった、それだけだ。', 'narr');
  await T.say('パン半分と、公園の風と、母親の膝。――それが、こいつの人生で、いちばんの宝物。', 'narr');
  T.sp();
  await T.tap();

  glitch(500);
  await T.sleep(200);
  await msys('[ERR] RESIDUAL GHOST DETECTED', '#ff2244');
  await T.sleep(200);
  await T.say('――視界が、緑にちらついた。', 'narr');
  await T.say('妙だ。これだけ眩しい記憶を、読んでるのに。', 'narr');
  await T.say('俺の側が、しんと暗いままだ。比べる「あたたかい日」を、一つも持っていないみたいに。', 'narr');
  T.sp();

  await mlog('...電話の向こうで、お母さんが泣いてた。');
  await mlog('...ぼくは、布団の中で、聞いてた。');
  await mlog('...お母さんは、ぼくの前では、いつも笑ってる。');
  await mlog('...だから、ぼくも、笑ってた。');
  await mlog('...お母さんを笑わせるのは、ぼくの仕事だから。');
  await T.sleep(200);

  await T.say('わかった。', 'narr');
  await T.say('こいつが売ろうとしてるのは、ただのいい思い出じゃない。', 'narr');
  await T.say('母親と笑い合った、その記憶そのものだ。', 'narr');
  await T.say('――これを売れば、こいつは、母親となぜ笑い合うのかさえ、忘れる。', 'narr');
  T.sp();
  await T.say('査定額が端末に出る。子供の宝物の値段が。','narr');
  await T.say('上の好事家なら、高く買うだろう。「下層の子供の、最後の無垢」なんてのは、連中の好物だ。', 'narr');
  T.sp();
  await T.tap();

  linkOff();
  await linkGlitch();
  Scene.clearText();
  await msys('[ LINK TERMINATED ]');
  T.sp();
  await T.sleep(400);

  await T.say('子供は息を詰めて待っていた。','narr');
  await T.npc('「……いくらに、なった?」');
  await T.npc('「お母さんの、足りない分。足りる?」');
  T.sp();
  await T.dlg('「見せてもらった。たいした宝物だ」');
  await T.say('俺はすぐには額を言わなかった。','narr');
  T.sp();
  await T.dlg('「坊主。これを売ると、どうなるかわかってるか」');
  await T.dlg('「公園のあたたかい風も、パンの味も、消える。母親の膝で寝た、あの感じも、ぜんぶだ」');
  await T.npc('「……うん。知ってる」');
  await T.npc('「でも、思い出は、食べられないから」');
  await T.npc('「お母さんが、笑ってるほうが、いい。ぼくが忘れても」');
  T.sp();
  await T.say('子供は笑った。あの公園で、母親に向けたのと同じ顔で。','narr');
  await T.say('――自分が、何を手放すのかも、本当にはわからないまま。','narr');
  T.sp();
  await T.say('こいつの宝物。値は、つく。買い取って上に流せばいい商売になる。', 'narr');
  await T.say('それが、仕事だ。子供だろうと、客は客。差し出されたものを買う。それだけだ。', 'narr');
  T.sp();
  await T.say('……それだけ、のはずだ。', 'narr');
  T.sp();
  await T.tap();

  const ch = await showChoices('[ 買う ]', '[ 買わない ]');
  T.sp();
  if(ch==='ERASE') await ep5BuyEnd();
  else             await ep5RefuseEnd();
  await ep5Epilogue();
}

async function ep5BuyEnd(){
  await msys('[ PURCHASING... ]');
  await T.say('俺は、子供のいちばん光る記憶に、ケーブルを繋いだ。','narr');
  await T.say('公園の風を。半分だけのパンを。母親の膝を。そっと引き抜いて、棚へ移す。','narr');
  T.sp();
  await T.say('軽い記憶のはずだ。なのに、いつもの倍、手が重かった。', 'narr');
  await T.sleep(200);
  await msys('[ PURCHASED — VAULT #5012 ]', '#00ff55');
  T.sp();
  await T.say('子供が、きょとんと瞬きをした。','narr');
  await T.npc('「……あれ。なんで、ぼく、ここに」');
  await T.say('そして、握らされた札束を見て、ぱっと顔を輝かせた。','narr');
  await T.npc('「すごい! これ、お母さんの、足りる?」');
  await T.npc('「……ねえ、おじさん。ぼく、なんで、こんなに、嬉しいんだろう」');
  T.sp();
  await T.say('母親を助けられるからだ。', 'narr');
  await T.say('――だが、なぜ母親をそこまで助けたいのか。その理由は、たった今、俺の店の棚で埃をかぶり始めた。', 'narr');
  T.sp();
  await T.say('子供は礼を言って、札を両手で抱え駆けていった。','narr');
  Scene.set('IDLE');
  await T.say('小さな足音が、路地の闇に、消えた。','narr');
  T.sp();
  await T.say('棚に、また一つ、灯りが増えた。', 'narr');
  await T.say('公園のあたたかい風が、暗い棚の中で、誰にも吹かれずしまわれている。', 'narr');
  await T.say('――いい商売をした。そう思おうとした。', 'narr');
}

async function ep5RefuseEnd(){
  await T.say('俺は、端子を外した。','narr');
  await T.dlg('「……値が、つかなかった」');
  await T.npc('「え」');
  await T.say('子供の顔が歪んだ。','narr');
  await T.npc('「うそだ。いちばんの、たからものなのに。なんで」');
  T.sp();
  await T.dlg('「高すぎて、買えないんだよ。うちじゃ」');
  await T.say('俺は椅子から立って、棚の奥の古い金庫を、開けた。','narr');
  await T.say('薄汚れた札を何枚かつかむ。たいした額じゃない。だが、子供の手には余るくらいの。','narr');
  T.sp();
  await T.dlg('「これを、持って帰れ。母ちゃんに渡せ」');
  await T.npc('「……でも、ぼく、何も、売ってない」');
  await T.dlg('「売らなくて、いい」');
  T.sp();
  await T.say('子供は札と俺の顔を交互に見た。','narr');
  await T.dlg('「いいか、坊主。よく、聞け」');
  await T.dlg('「腹がふくれる金は、また、稼げる。大人になりゃ、いくらでもだ」');
  await T.dlg('「だが、母ちゃんの膝で寝た、あの思い出は。一回売ったら、もう、どこにも、売ってない」');
  T.sp();
  await T.dlg('「それは、お前が、くたびれた中年になっても、つらい夜に、お前を温めてくれる。死ぬまでずっとだ」');
  await T.dlg('「そういうものを、簡単に手放すんじゃない」');
  T.sp();
  await T.say('子供は、しばらく俺を見上げていた。','narr');
  await T.say('それから、こくり、と頷いて札を両手で握った。','narr');
  await T.npc('「……おじさんも、しんどい夜、ある?」');
  await T.say('不意打ちだった。', 'narr');
  await T.dlg('「……あるさ。毎晩な」');
  T.sp();
  await T.say('子供は笑って「ありがとう」と言って、駆けていった。','narr');
  Scene.set('IDLE');
  await T.say('小さな足音が、路地の闇に、軽く跳ねて消えた。','narr');
  T.sp();
  await T.say('宝物は、棚に入らなかった。一円にもならなかった。', 'narr');
  await T.say('――なのに、なぜか今夜の俺は、少しだけ金持ちになった気がした。', 'narr');
}

async function ep5Epilogue(){
  Scene.set('IDLE');
  bgmFadeTo('assets/end_bg.mp3');
  await T.sleep(500);
  await T.say('店が、やけに静かだった。','narr');
  await T.say('子供が一人、いなくなっただけで、こんなにも。','narr');
  T.sp();
  await T.tap();
  await T.say('この街は、何でも金に換える。','narr');
  await T.say('顔も、過去も、若さも、幸福も。値札のつかないものなんて、もうないと思っていた。','narr');
  await T.say('――今夜、十歳の客が、その値段を教えに来た。','narr');
  T.sp();
  await T.say('パン半分と、公園の風。それが、人ひとりのいちばんの宝物。','narr');
  await T.say('俺は、人の宝物に値をつけて暮らしている。','narr');
  T.sp();
  await T.tap();
  await T.say('査定は得意だ。何が、高くて、何が、安いか。', 'narr');
  await T.say('――なのに、自分のいちばんの宝物が、何だったかは、思い出せない。', 'narr');
  await T.say('そもそも、俺に、そんなものがあったのか。子供の頃の、ひだまりの一つも。', 'narr');
  T.sp();
  await T.tap();
  await T.say('俺は、灰皿でタバコの火を消す。','narr');
  await T.say('窓のない店に、ひだまりはない。だが、さっきまで、確かに一つ、ここに座っていた。','narr');
  T.sp();
  await T.say('値のつかないものを、見分けられる目だけは。', 'narr');
  await T.say('――まだ、潰れちゃ、いないらしい。', 'narr');
  T.sp();
  await episodeTransition(
    '[ END OF LOG: EP.5  SUNLIGHT ]', 'ひだまり',
    '[ START LOG: EP.6  THE BELL ]', 'ゴング');
}
