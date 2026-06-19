async function ep9(){
  await T.say('角のタバコ屋は、この界隈で一番古い店だ。','narr');
  await T.say('機械じかけの自販機が並ぶ通りで、そこだけ人の手が硝子戸を開け閉めしている。','narr');
  T.sp();
  await T.say('俺は数日に一度、あそこで同じ銘柄のタバコを買う。婆さんは何も訊かない。釣りを渡して「またね」と言うだけだ。', 'narr');
  await T.say('この街で、用も金も絡まずに俺に口をきく人間は、あの婆さん一人かもしれない。', 'narr');
  T.sp();
  await T.say('その婆さんが、今夜は自分のタバコ屋じゃなく、俺の店の地下の戸の前に立っていた。','narr');
  T.sp();
  await T.tap();

  await Scene.load('CLIENT_ep0');
  for(let i=0;i<3;i++){ knock(); await T.sleep(i===0?0:700); }
  await T.sleep(300);
  await T.say('ノックは三つ。指の節がうまく曲がらないのか、間延びした音だった。','narr');
  await T.dlg('「開いてる」');
  T.sp();
  Scene.set('CLIENT_ep0');
  await T.sleep(400);
  await T.say('入ってきたのは、あの婆さんだった。店で会うときと同じ、色の褪せた前掛けのまま。','narr');
  await T.say('こんな地下まで降りてくるとは思わなかった。俺は腰を浮かせかけた。','narr');
  T.sp();
  await T.dlg('「座ってくれ。料金は前払い。作業が始まれば――」');
  await T.say('そこで、舌が止まった。いつもの口上が、この顔の前では妙に他人行儀に響いた。','narr');
  T.sp();
  await T.dlg('「……いや。婆さん。あんたがここに何の用だ」');
  await T.npc('「商売の邪魔して、悪いね」');
  await T.npc('「あんたの店、一度見てみたかったのさ」');
  T.sp();
  await T.tap();

  await T.dlg('「世間話に来たんじゃないだろう。婆さんが、この階段を降りてくるなんて」');
  await T.npc('「察しがいいね。昔から、そうだった」');
  T.sp();
  await T.say('婆さんは椅子に浅く腰かけ、節くれだった手を膝の上で揃えた。','narr');
  T.sp();
  await T.npc('「あたしゃね。近ごろ、忘れるんだよ」');
  await T.npc('「鍋を火にかけたのを忘れる。客の顔を忘れる。昨日の晩飯を忘れる」');
  await T.npc('「医者が言うには、頭が、古くなったんだとさ。機械を入れてない、生身の頭だからね」');
  T.sp();
  await T.dlg('「サイバネにすればいいだろう」');
  await T.npc('「いやだよ。あたしは最後まで、生身の婆さんでいるつもりさ」');
  T.sp();
  await T.say('この街で、金を払って機械の頭を買う連中は多い。劣化しない、忘れない頭を。', 'narr');
  await T.say('だがこの婆さんは、忘れる頭のまま死ぬと決めている。それは贅沢か、意地か。', 'narr');
  T.sp();
  await T.tap();

  await T.dlg('「で。記憶屋に何を頼みに来た。俺の商売は、忘れさせるか、記憶を引き取るか、売るかだ。忘れる頭を治す薬は置いてない」');
  await T.npc('「治してくれなんて、言わないよ」');
  await T.npc('「忘れるのは、いいのさ。客の顔も、晩飯も、どんどん忘れて結構」');
  T.sp();
  await T.npc('「でもね。一つだけ、消えてほしくないのがあるんだ」');
  await T.npc('「死んだうちの人と暮らした、しまいの夏。あれだけは、薄れていくのが、こわい」');
  T.sp();
  await T.npc('「あんた、人の記憶を箱にしまえるんだろう。客から買って、棚に置くって」');
  await T.npc('「あれを、あんたに預けられないかね。あたしの頭から、薄れて消える前に」');
  T.sp();
  await T.say('消すんじゃない。消える前に、外へ移して、棚に残してくれという話だ。', 'narr');
  T.sp();
  await T.say('俺はケーブルを手に取った。だが、その先を、どこへ挿せばいいのか。','narr');
  await T.dlg('「……婆さん。あんた、さっき言ったな。頭に機械を、一つも入れてないと」');
  await T.npc('「ああ。生まれたまんまの、生身の頭さ。それが、どうかしたかい」');
  T.sp();
  await T.say('ケーブルの挿す先がない。リンクの穴が、どこにもない。', 'narr');
  T.sp();

  await T.say('それでも俺は、形だけ端末をかざした。古い癖だ。婆さんの頭を、外から走査する。','narr');
  await T.sleep(400);
  Scene.clearText();
  await msys('[ SCANNING SUBJECT... ]');
  await msys('[ NO NEURAL PORT DETECTED ]');
  await msys('[ MEMORY SUBSTRATE: 100% ORGANIC ]');
  await msys('[ LINK UNAVAILABLE ]', '#ff2244');
  await T.sleep(300);
  T.sp();
  await T.say('穴がない。チップもない。読む手がかりが、何ひとつない。', 'narr');
  await T.say('この街じゃ、もう珍しい四文字だ。100% ORGANIC。', 'narr');
  T.sp();
  await T.say('俺はケーブルを、膝に下ろした。','narr');
  await T.dlg('「……だめだ。あんたの頭は、覗けない。挿す穴がない」');
  await T.npc('「おや。あんたでも、できないことがあるのかい」');
  await T.dlg('「ああ。機械の記憶しか、俺には扱えない。あんたの記憶は……あんたの中にしか、ない」');
  T.sp();
  await T.tap();

  await T.say('読めないなら、聞くしかない。俺は椅子を引いて、向かいに座り直した。','narr');
  await T.dlg('「話してくれ。その夏のことを。俺にできるのは、それくらいだ」');
  await T.npc('「いいよ。覚えてるうちはね」');
  T.sp();
  await T.npc('「亡くなる前の最後の夏でね。あの人はもう、痩せてた」');
  await T.npc('「店を休んで一日中カードで勝負をしたら、あの人、毎回ずるをしてさ」');
  await T.npc('「『お前のほうが、長生きするよ』って、笑って。……ほんとに、そうなっちまった」');
  T.sp();
  await T.tap();

  await T.say('婆さんはふと、俺の顔をのぞき込んだ。皺の奥の目が、遠くを探すように細くなる。','narr');
  T.sp();
  await T.npc('「……あんたの顔を見てると、変なことを思い出すよ」');
  await T.npc('「あたしがこの店を継いだ若い頃。妙な客が、一人いてね」');
  await T.npc('「いつも同じ銘柄を二箱、毎日。あれから、ずいぶん経つ」');
  await T.npc('「おかしな話さ。その客だけは、ちっとも、年をとらない」');
  await T.npc('「初めて会った日と、同じ顔で、今日も、あたしの前に、座ってる」');
  T.sp();

  glitch(500);
  await T.sleep(200);
  Scene.clearText();
  await msys('[ERR] RESIDUAL GHOST DETECTED', '#ff2244');
  await msys('[WARN] TIMELINE MISMATCH', '#ff2244');
  await T.sleep(200);

  await T.say('――息が、止まった。', 'narr');
  await T.say('読んでもいない。リンクもしていない。なのに警報が鳴ったのは、婆さんの頭じゃない。俺のほうだ。', 'narr');
  await T.say('若い頃の婆さんが見上げた客の顔。それは今朝、ガラスに映った俺と、寸分違わない。', 'narr');
  await T.say('二十年。いや、もっとだ。俺はその間ずっと、同じ顔で、あの店に通っていた。', 'narr');
  await T.say('……いつから。俺は、いつからこの街にいる。', 'narr');
  await T.say('思い出そうとした。だが、そこには何もない。河口の手前で道が途切れるみたいに、過去が、ない。', 'narr');
  T.sp();
  await T.tap();

  await T.say('やめろ。今は、この婆さんの夏の話だ。', 'narr');
  await T.say('俺の頭の中身は、あとでいい。……あととは、いつだ。', 'narr');
  T.sp();

  await T.say('落ち着け。読まなくても、婆さんの話しぶりが、教えてくれる。', 'narr');
  await T.say('婆さんは記憶を預けたいんじゃない。本当は、もっと単純なことを確かめに来た。', 'narr');
  T.sp();
  await T.say('俺は、喉の奥につかえた問いを、いったん飲み込んだ。婆さんは、何も気づかぬ顔で俺を見ている。','narr');
  T.sp();
  await T.dlg('「カードでイカサマをする、いい亭主だ」');
  await T.npc('「だろう。ずるいんだよ、あの人は」');
  T.sp();
  await T.dlg('「婆さん。あんた、本当は記憶を預けに来たんじゃないな」');
  await T.dlg('「忘れていく自分が、こわい。忘れるってのが、悪いことなのか、確かめに来た」');
  T.sp();
  await T.say('婆さんの皺が、ふっとゆるんだ。','narr');
  T.sp();
  await T.npc('「……ばれたかね」');
  await T.npc('「こわいよ。あの人の顔も、いつか忘れるんだろう。そう思うと、夜中に目が覚める」');
  await T.npc('「あんたは忘れさせる商売だ。だから、訊きたかった。忘れるのは……そんなに、悪いことかね」');
  T.sp();
  await T.say('ここで、俺は二つの道を渡せる。', 'narr');
  await T.say('機械のない頭から、記憶は抜けない。棚にも移せない。それは、もう決まってる。', 'narr');
  await T.say('――だが、こう言うことはできる。「あんたの話を録って、棚に残しておく」と。', 'narr');
  await T.say('それは記憶じゃない。記憶を語る、婆さんの声の剥製だ。だが、本人は安心して帰れる。', 'narr');
  await T.say('それとも、正直に言うか。誰にも預けられない。これはあんたの頭の中だけのものだと。', 'narr');
  T.sp();
  await T.tap();

  const ch = await showChoices('[ 預かる ]', '[ 残す ]');
  T.sp();
  if(ch==='ERASE') await ep9EraseEnd();
  else             await ep9KeepEnd();
  await ep9Epilogue();
}

async function ep9EraseEnd(){
  Scene.clearText();
  await msys('[ RECORDING TESTIMONY... ]');
  await T.say('俺は端末に、婆さんの声を流し込んだ。語られる記憶を、一語残らず棚の箱へ移していく。','narr');
  await T.say('婆さんは、嬉しそうに、同じ話を繰り返した。亭主のずるを、二度、笑った。','narr');
  await T.sleep(300);
  await msys('[ STORED. VAULT #── ]', '#00ff55');
  T.sp();
  await T.dlg('「済んだ。あんたの記憶は、もう薄れない場所にある」');
  await T.npc('「そうかい。あんたがそう言うなら、安心だ」');
  await T.npc('「これで、忘れても、こわくないね」');
  T.sp();
  await T.say('婆さんは礼を言って、軽い足取りで階段を上っていった。胸の重荷を、一つ下ろした顔で。','narr');
  Scene.set('IDLE');
  T.sp();
  await T.say('嘘はついてない。録った声は、棚で永遠に腐らない。', 'narr');
  await T.say('だが、箱が覚えてるのは、記憶を語る婆さんの声だけだ。抜き出した記憶にあるような生々しい感触はそこにはない。', 'narr');
  await T.say('完璧に保存された声は、もう誰のものでもない。ただの、よくできた剥製だ。', 'narr');
  await T.say('そして本物の記憶は、これからも、あの頭の中で薄れていく。俺は、何ひとつ、留められなかった。', 'narr');
}

async function ep9KeepEnd(){
  await T.say('俺は、かざしていた端末を、そっと下ろした。','narr');
  T.sp();
  await T.dlg('「婆さん。正直に言う。あんたの記憶は、預かれない」');
  await T.npc('「……できないのかい」');
  await T.dlg('「あんたの頭にゃ、機械が入ってない。ケーブルを挿す穴も、記憶抜く手段もない。あんたの記憶は、あんたの中にしかないんだ」');
  await T.dlg('「録って棚に残すことはできる。だが、それは記憶を喋るあんたの声だ。記憶そのものじゃない」');
  T.sp();
  await T.npc('「……でも。いつか、忘れちまう」');
  await T.dlg('「忘れるさ。少しずつな。だがそれは、あんたとあの亭主の、最後の共同作業だ」');
  await T.dlg('「薄れていくから、温かいんだ。完璧に保存された記憶は、もうあんたを温めない。棚で光ってるだけだ」');
  await T.dlg('「カードを切るみたいに、一つずつ、見送ってやればいい。あんたなら、できる」');
  T.sp();
  await T.say('婆さんは長いこと、自分の手のひらを見ていた。やがて、ゆっくり頷いた。','narr');
  await T.npc('「……そうだね。あの人を、棚なんかに、入れたくないね」');
  await T.npc('「忘れるまでは、あたしのもんだ。忘れたら、それまでさ」');
  T.sp();
  await T.say('婆さんは立ち上がり、戸口で振り返った。','narr');
  await T.npc('「あんたも、たまには店じゃなくて、お茶でも飲みにおいで。元気そうな顔、見せにさ」');
  await T.dlg('「……ああ。そのうちな」');
  T.sp();
  await T.say('そのうち。俺に、そのうちは、あるのか。', 'narr');
  await T.say('――今は、考えない。', 'narr');
  Scene.set('IDLE');
}

async function ep9Epilogue(){
  Scene.set('IDLE');
  bgmFadeTo('assets/end_bg.mp3');
  await T.sleep(500);
  await T.say('婆さんの前掛けの、古い洗剤の匂いが、店にしばらく残っていた。','narr');
  T.sp();
  await T.tap();
  await T.say('この街は、忘れることに値段をつけた。','narr');
  await T.say('忘れられない頭を持った連中が、金を積んで俺の戸を叩く。','narr');
  await T.say('そんな街で、あの婆さんだけが、ただで、ゆっくり、人間らしく忘れていく。','narr');
  await T.say('それは劣化なんかじゃない。たぶん、生きてる証拠みたいなものだ。','narr');
  T.sp();
  await T.tap();
  await T.say('俺は今朝も、ガラスに映った自分の顔を見た。よく知らない顔だと、いつも思う。', 'narr');
  await T.say('今夜、わかってしまった。その顔は、二十年、変わっていない。', 'narr');
  await T.say('婆さんが店を継いだ頃から、俺はもう、あそこにいた。同じ顔で、同じ銘柄を買って。', 'narr');
  await T.say('――俺は、いつから、ここにいる。', 'narr');
  T.sp();
  await T.say('俺は端末に手を伸ばした。自分の首筋のポートに触れる。冷たい端子が、指の下にあった。','narr');
  await T.say('読めば、わかる。俺が、何で、できているのか。', 'narr');
  await T.say('婆さんの頭にはなかった、この穴が。俺には、ある。', 'narr');
  await T.say('……指が、動かなかった。', 'narr');
  T.sp();
  await T.say('緑の光が瞬く。手は、ポートの手前で止まったまま、しばらく動かなかった。','narr');
  T.sp();
  await episodeTransition(
    '[ END OF LOG: EP.9  THE TOBACCO SHOP ]', '煙草屋の婆さん',
    '[ START LOG: EP.10  PEER ]', '同業');
}
