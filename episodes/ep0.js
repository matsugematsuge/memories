async function boot(){
  T.clear();
  Scene.clearText();
  Scene.set('BOOT');
  await T.sleep(300);
  await Scene.addText('MEMRIES OS VER.1.88', '#ffaa00');
  await T.sleep(100);
  await Scene.addText('LOADING CORE MODULES...', '#ffaa00');
  await T.sleep(200);
  await Scene.addText('CORE STATUS: 100% ORGANIC [VERIFIED]', '#00ff55');
  await T.sleep(100);
  await Scene.addText('NEURAL LINK INTERFACE: ANALOG', '#ffaa00');
  await T.sleep(100);
  await Scene.addText('CABLE ONLY - NO DIRECT SYNC', '#ffaa00');
  await T.sleep(100);
  await Scene.addText('...READY.', '#00ff55');
  await T.sleep(600);
  Scene.clearText();
}

async function ep0(){
  await boot();
  Scene.set('IDLE');
  await T.sleep(350);

  await T.say('深夜。二時四十七分。','narr');
  await T.sleep(250);
  await T.say('タバコの煙が、古い端末の緑の光の中で白く漂う。','narr');
  T.sp();
  await T.say('店、と呼ぶには狭すぎる。地下に掘った穴だ。湿った壁。錆びた配管。天井から垂れた裸電球が一つ。','narr');
  await T.sleep(200);
  await T.say('看板は出していない。住所も、どこにも載っていない。','narr');
  await T.say('それでも、客は来る。','narr');
  await T.sleep(150);
  await T.say('忘れたい人間は、いつの時代も、どこにでもいるからだ。', 'narr');
  T.sp();
  await T.say('俺はそこで毎晩、煙を吐いて客を待つ。','narr');
  T.sp();
  await T.tap();

  await Scene.load('CLIENT_ep0');
  for(let i=0;i<3;i++){ knock(); await T.sleep(i===0?0:550); }
  await T.sleep(300);
  await T.say('ノックは三回。間隔が機械みたいに正確だった。','narr');
  await T.sleep(200);
  await T.say('俺は端末から目を離さず、低く言った。', 'narr');
  await T.dlg('「開いてる」');
  T.sp();
  Scene.set('CLIENT_ep0');
  await T.sleep(400);
  await T.say('軋んだ音を立てて、扉が開いた。','narr');
  await T.say('入ってきたのは若い女だった。三十代前半。','narr');
  await T.sleep(150);
  await T.say('仕立てのいいコートを着ている。だが袖口がほつれていた。何日も同じものを着ているような、くたびれ方だった。','narr');
  await T.sleep(150);
  await T.say('左目が義眼——サイバネだ。安物じゃない。上層の仕様だ。','narr');
  await T.say('それが今は、充電の切れかけたバッテリーみたいにかすかにしか光っていない。','narr');
  T.sp();
  await T.say('女は戸口に立ったまま、しばらく動かなかった。','narr');
  await T.say('やがて、絞り出すように言った。','narr');
  await T.npc('「……ここで、記憶を消してくれるって、聞いて」');
  T.sp();
  await T.say('俺は煙を吐いた。いつもの口上を、いつもの調子で返す。', 'narr');
  await T.dlg('「座ってくれ。料金は前払い。作業が始まれば、取り消しはきかない」');
  await T.dlg('「お喋りは、手短に」');
  T.sp();
  await T.say('女は、軋む椅子に、ゆっくりと腰を下ろした。','narr');
  await T.tap();

  await T.dlg('「で、何を消す」');
  await T.say('女は、膝の上で、両手を握りしめた。','narr');
  await T.npc('「人を……一人。記憶から、消したいの」');
  T.sp();
  await T.npc('「死んだのか」');
  await T.say('女の肩が、わずかに震えた。','narr');
  await T.dlg('「三年前。事故で。あっけなかった」');
  T.sp();
  await T.say('こういう話は何百回と聞いてきた。死んだ恋人。消えた家族。裏切った友人。みんな同じ顔で、この椅子に座る。', 'narr');
  await T.sleep(250);
  await T.say('普通の人間なら放っておけばいい。痛い記憶ほど、時間が勝手に薄めてくれる。', 'narr');
  await T.say('だが、この女には、それができない。', 'narr');
  T.sp();
  await T.dlg('「その目——サイバネだな。だったら、時間は役に立たない」');
  await T.say('女はゆっくりと頷いた。初めて、まっすぐ俺を見た。','narr');
  T.sp();
  await T.npc('「この目を入れたとき、医者が言ったわ。『これからは、何ひとつ忘れずに済みますよ』って」');
  await T.say('女は左の義眼に、そっと指で触れた。','narr');
  await T.npc('「サイバネの記憶は、劣化しないの。三年経っても、あの日の朝のまま。彼が出ていくときの、ドアの閉まる音まで」');
  await T.sleep(200);
  await T.npc('「毎晩、同じ夢を、同じ解像度で見る。……すり減らないのよ、何ひとつ」');
  T.sp();
  await T.say('俺はタバコを灰皿に押しつけた。', 'narr');
  await T.say('忘れるという機能を、金を払って買いに来る。皮肉な時代だ。', 'narr');
  await T.tap();

  await T.dlg('「全部か」');
  await T.npc('「……全部」');
  T.sp();
  await T.dlg('「いい思い出も残らないぞ。出会った日も。笑った日も。何もかもだ」');
  await T.say('女は、長い間、黙っていた。','narr');
  await T.sleep(500);
  await T.npc('「……いい思い出が、一番、痛いの」');
  T.sp();
  await T.say('俺は何も言わずに、端末を引き寄せた。', 'narr');
  await T.say('古いケーブルの先端を、女の首筋——耳の下のアクセスポートに差し込む。','narr');
  await T.say('カチリ、と乾いた音がした。','narr');
  await T.sleep(400);

  await linkGlitch();
  linkOn();
  Scene.clearText();
  await Scene.addText('[ LINK ESTABLISHED ]', '#ffaa00');
  await Scene.addText('[ READING NEURAL ARCHIVE... ]', '#ffaa00');
  await T.sleep(300);

  await Scene.addText('...彼と出会ったのは、春だった。', '#44ff88', 2);
  await Scene.addText('...桜の散るホームで、彼は私の靴を踏んだ。', '#44ff88', 2);
  await Scene.addText('...「すみません」って、三回も謝った。', '#44ff88', 2);
  await Scene.addText('...なんて鈍くさい人だろう、と思った。', '#44ff88', 2);
  await Scene.addText('...一年後、私たちは同じ部屋で暮らしていた。', '#44ff88', 2);
  await Scene.addText('...彼は朝が弱くて、私が起こすまで眠っていた。', '#44ff88', 2);

  await T.sleep(300);
  glitch(500);
  await T.sleep(200);
  await Scene.addText('[ERR] RESIDUAL GHOST DETECTED', '#ff2244', 1);
  await T.sleep(200);
  await T.say('——視界が、一瞬、緑色のノイズに染まった。', 'narr');
  await T.say('他人の記憶を読みすぎると、たまにこうなる。脳が、混ざる感覚。', 'narr');
  await T.sleep(250);
  await T.say('俺は目を擦った。地下の湿気のせいだろう。', 'narr');
  await T.sleep(350);

  await Scene.addText('...一緒に暮らしはじめて三年後の、ある朝だった。', '#44ff88', 2);
  await Scene.addText('...彼は「いってくる」と言って、ドアを閉めた。', '#44ff88', 2);
  await Scene.addText('...それが、最後だった。', '#44ff88', 2);
  await Scene.addText('...即死だったと、警察は言った。', '#44ff88', 2);
  await Scene.addText('...私は、彼の靴を、玄関に置いたままにした。', '#44ff88', 2);
  await Scene.addText('...歯ブラシも。コーヒーカップも。', '#44ff88', 2);
  await Scene.addText('...私は、何ひとつ、捨てられなかった。', '#44ff88', 2);
  await T.sleep(400);

  linkOff();
  await linkGlitch();
  Scene.clearText();
  await Scene.addText('[ LINK TERMINATED ]', '#ffaa00', 1);
  T.sp();
  await T.sleep(400);

  await T.say('端末の画面が静かになった。','narr');
  await T.say('女の頬を、一筋、涙が伝っていた。義眼のほうからは、何も流れない。','narr');
  T.sp();
  await T.say('俺はタバコの煙を吸って、吐いた。', 'narr');
  await T.dlg('「準備はできた」');
  await T.npc('「一度消せば、二度と戻らない。……本当に、全部でいいんだな」');
  T.sp();
  await T.say('女は、震える声で、しかし、はっきりと言った。','narr');
  await T.npc('「お願い、します」');
  T.sp();
  await T.tap();

  const ch = await showChoices();
  T.sp();

  if(ch==='ERASE') await eraseEnd();
  else              await keepEnd();

  await epilogue();
}

async function eraseEnd(){
  await Scene.addText('[ ERASING... ]', '#ffaa00', 1);
  await T.sleep(280);
  await T.say('俺は端末のキーを叩いた。','narr');
  await T.say('読み取った三年分に片端から削除のマーカーを打っていく。出会い。同棲。朝の寝顔。玄関に残された靴。――ひとつ残らず。','narr');
  T.sp();
  await T.say('指先が、ほんの一瞬、止まった。', 'narr');
  await T.sleep(200);
  await T.say('……いや。仕事だ。', 'narr');
  await T.say('最後のキーを、押し込む。','narr');
  glitch(300);
  await T.sleep(350);
  await Scene.addText('[ COMPLETE ]', '#00ff55', 1);
  T.sp();
  await T.say('三年分の記憶が、彼女の中から、消えた。','narr');
  await T.say('俺は、ケーブルをそっと引き抜いた。','narr');
  await T.sleep(280);
  await T.say('女は、ゆっくりと顔を上げた。','narr');
  await T.say('何かを思い出そうとするような顔をして、それから思い出すものが何もないことに気づいたような、不思議な表情をした。','narr');
  T.sp();
  await T.npc('「……あれ。私、何を話してたんだっけ」');
  await T.say('女は、自分の頬を伝う涙に触れて、戸惑っていた。','narr');
  await T.npc('「やだ……どうして、泣いてたんだろう」');
  T.sp();
  await T.say('その涙が誰のためのものだったか、もう彼女は知らない。','narr');
  await T.say('俺は、何も答えなかった。煙を、一口、吸った。', 'narr');
  await T.sleep(300);
  await T.dlg('「もう済んだ。帰っていい」');
  T.sp();
  await T.say('女は立ち上がりかけて、ふと、コートのほつれた袖口に目を落とした。','narr');
  await T.say('それが何日も同じ服を着ていた証だと、本人だけが、もう分からない。','narr');
  await T.npc('「……なんだか、久しぶりに、よく眠れそう」');
  await T.say('憑き物が落ちたような、軽い笑みだった。','narr');
  T.sp();
  await T.npc('「ありがとう、ございました」');
  await T.say('何に礼を言っているのかも、分からないまま、女は頭を下げた。', 'narr');
  T.sp();
  await T.say('重い扉が閉まった。','narr');
  T.sp();
  await T.say('これでいい。あの女が、金を払って望んだことだ。', 'narr');
  await T.sleep(250);
  await T.say('灰皿の中で、煙草の火が小さく爆ぜて消えた。', 'narr');
}

async function keepEnd(){
  await T.say('俺は、ケーブルを引き抜いた。','narr');
  T.sp();
  await T.npc('「……え?」');
  await T.dlg('「消さない」');
  T.sp();
  await T.say('女が、顔を上げた。','narr');
  await T.npc('「なんで……お金なら、ちゃんと払ったわ」');
  T.sp();
  await T.say('俺は新しいタバコに火をつけた。', 'narr');
  await T.dlg('「金の問題じゃない」');
  await T.dlg('「消すのは簡単だ。だが、消したあとのあんたみたいな客を、何人も見てきた」');
  await T.sleep(200);
  await T.dlg('「空っぽになって、それでも涙だけ流して、理由も分からず帰っていく。あれは、楽になったわけじゃない」');
  T.sp();
  await T.say('女は、黙って、俺を見ていた。','narr');
  T.sp();
  await T.dlg('「いい思い出が痛い、と言ったな。その痛みは、あんたがちゃんと、そいつを愛していた証拠だ」');
  await T.dlg('「それまで切り取る必要が、本当にあるか」');
  T.sp();
  await T.say('女は、しばらく俯いていた。やがて、小さく頷いた。','narr');
  await T.npc('「……もう少し、考えてみる」');
  T.sp();
  await T.dlg('「ああ。消すのは、いつでもできる」');
  await T.dlg('「あと三日、考えろ。それでも消したけりゃ、また来い」');
  T.sp();
  await T.say('女は立ち上がり、戸口で一度だけ、振り返った。','narr');
  await T.npc('「……また、来ます」');
  T.sp();
  await T.say('重い扉が閉まった。','narr');
  T.sp();
  await T.say('たぶん、三日後に彼女は来ないだろう。', 'narr');
  await T.say('それでいい。', 'narr');
}

async function epilogue(){
  Scene.set('IDLE');
  await T.sleep(500);
  await T.say('俺はまた、端末の前に座る。煙を吐く。','narr');
  T.sp();
  await T.tap();

  await T.say('この街は、上と下に分かれている。','narr');
  await T.say('空の近くで暮らす連中は、義体を取り替え、記憶を編集し、永遠に若く、永遠に幸福でいようとする。','narr');
  await T.say('その下——陽の当たらないこの層では、人はいらない記憶を売りに来る。消しに来る。','narr');
  T.sp();
  await T.say('幸福を金で買う上層と、忘却を金で買う下層。','narr');
  await T.say('どっちも、結局は同じものを欲しがってる。「今より、ましな自分」だ。','narr');
  T.sp();
  await T.tap();

  await T.say('俺は、記憶屋だ。','narr');
  await T.say('他人の頭の中を覗いて、いらないものを切り取る。それで飯を食っている。','narr');
  T.sp();
  await T.say('誰かの一番大事な記憶も、一番消したい記憶も、この手で扱う。','narr');
  await T.say('だから客には深入りしない。名前も、聞かない。','narr');
  await T.sleep(250);
  await T.say('忘れさせるのが仕事の人間が、いちいち覚えていたら、世話はない。','narr');
  T.sp();
  await T.tap();

  await T.say('俺はタバコを消した。','narr');
  await T.say('余計なことは考えないことにしている。それが、この仕事を続けるコツだ。','narr');
  T.sp();
  await T.say('端末の緑の光が、静かに瞬いている。','narr');
  await T.say('俺は軋む椅子に深く身を預けて目を閉じる。また、次の客が来るまで。','narr');
  await episodeTransition(
    '[ END OF LOG: EP.0  MEMORY DEALER ]', '記憶屋',
    '[ START LOG: EP.1  EVERLASTING FLOWER ]', '枯れない花');
}
