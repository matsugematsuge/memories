async function ep1(){
  await T.say('雨の夜だった。','narr');
  await T.say('地下までは陽も届かないが、雨の匂いだけは、配管を伝って降りてくる。','narr');
  await T.say('湿ったコンクリートが、緑の端末光を鈍く照り返している。','narr');
  T.sp();
  await T.say('今夜は、客足が遠い。','narr');
  await T.say('こういう夜は、頭の中が静かすぎて、かえって落ち着かない。', 'narr');
  await T.say('俺は煙を吐いて、灰皿の縁からあふれた吸い殻を転がした。','narr');
  T.sp();
  await T.say('上層では、今夜も誰かが新しい顔を買い、新しい思い出を注文している。','narr');
  await T.say('この世界の人間は、過去を、まるで服のように着替える。','narr');
  await T.say('――気に入らない記憶は、脱げばいい。そういう時代だ。', 'narr');
  T.sp();
  await T.tap();

  await Scene.load('CLIENT_ep1');
  for(let i=0;i<2;i++){ knock(); await T.sleep(i===0?0:750); }
  await T.sleep(300);
  await T.say('ノックは二回。ひどく、遠慮がちだった。','narr');
  await T.dlg('「開いてる」');
  T.sp();
  Scene.set('CLIENT_ep1');
  await T.sleep(400);
  await T.say('入ってきたのは年老いた男だった。七十は超えているだろう。','narr');
  await T.say('上等だが、流行を二十年は外したコート。手には古い革の鞄。','narr');
  await T.say('雨に濡れた白髪を、皺だらけの手でゆっくりと撫でつけた。','narr');
  T.sp();
  await T.say('俺は名前を聞かない主義だ。','narr');
  await T.say('――だが、この顔は、知っていた。','narr');
  await T.say('どの家にも一冊はある、あの本。その著者近影の顔が、三十年ぶんだけ老いていた。', 'narr');
  T.sp();
  await T.npc('「……ここで、記憶を、消してもらえると聞いた」');
  await T.say('声は、紙をこするように、かすれていた。','narr');
  T.sp();
  await T.say('俺は知らないふりで煙を吐いた。有名人だろうが、ここではただの客だ。', 'narr');
  await T.dlg('「座ってくれ。料金は前払い。作業が始まれば、取り消しはきかない」');
  await T.dlg('「余計なお喋りは、手短に頼む」');
  T.sp();
  await T.say('老人は、年老いた関節をいたわるように、椅子に腰を下ろした。','narr');
  await T.say('鞄を膝の上で、両手で抱えている。','narr');
  await T.tap();

  await T.dlg('「用件を聞こうか」');
  await T.say('老人はすぐには答えなかった。','narr');
  await T.say('鞄の留め金を、意味もなく、指で撫でている。','narr');
  T.sp();
  await T.npc('「一人の、女性を」');
  await T.npc('「私の、頭の中から、消してほしい」');
  T.sp();
  await T.dlg('「どんな女だ」');
  await T.say('老人は薄く笑った。悲しみよりも、疲れに近い笑みだった。','narr');
  await T.npc('「四十年前にね。若かった。私も、彼女も」');
  await T.npc('「病気だった。長くないと、分かっていた」');
  T.sp();
  await T.say('死んだ女。よくある話だ。だが、こいつの場合はその続きが違う。', 'narr');
  await T.say('――こいつは、その女を、本にした。', 'narr');
  T.sp();
  await T.tap();

  await T.dlg('「あんた――書いただろう。その女のことを」');
  await T.say('老人の指が、留め金の上で止まった。','narr');
  T.sp();
  await T.npc('「あんたも……読んだのか」');
  await T.dlg('「読んでない。表紙を、見ただけだ」');
  await T.dlg('「だが、この街で、あの本を読んでない人間はいても、内容を知らない人間はいない」');
  T.sp();
  await T.say('老人は、長いあいだ、黙っていた。','narr');
  await T.npc('「『枯れない花』」');
  await T.npc('「彼女が死ぬ前の半年で書き上げた。枕元で、ね」');
  await T.npc('「彼女を、永遠に枯れない花にしてやる。そう言って、書いた」');
  T.sp();
  await T.say('老人は膝の鞄を、そっと開いた。','narr');
  await T.say('中には、ぼろぼろになった本が一冊。何千回も開かれた、背の割れた本。','narr');
  T.sp();
  await T.npc('「おかげで、私は『一冊だけの作家』になった」');
  await T.npc('「以来、三十年。何ひとつ、書けていない」');
  T.sp();
  await T.tap();

  await T.dlg('「忘れたいだけなら、本を捨てればいい。なぜ、記憶まで消す必要がある」');
  await T.npc('「それが――できないんだ」');
  T.sp();
  await T.say('老人は、震える指で本の表紙を撫でた。','narr');
  T.sp();
  await T.npc('「私はね、もう一度、書きたいんだ。死ぬ前に、一つでいい」');
  await T.npc('「彼女じゃない、別の物語を。私自身の、最後の本を」');
  await T.npc('「だが、書けない。ペンを取ると、どの一行も、彼女になる」');
  await T.npc('「四十年だ。この四十年、何を書こうとしても、結局、紙の上に出てくるのは、いつも彼女だ」');
  T.sp();
  await T.say('こいつにとって、その女はもう記憶じゃない。', 'narr');
  await T.say('呼吸だ。吸って吐いて、気づけば、そこにいる。', 'narr');
  T.sp();
  await T.npc('「彼女さえ、消えてくれれば……」');
  await T.npc('「私は、やっと、自由に書ける。そう思って、ここへ来た」');
  T.sp();
  await T.tap();

  await T.dlg('「いいのか。出会いも、声も、全部消える。あんたの傑作の中身も、もう、分からなくなるぞ」');
  await T.npc('「構わない。あんな本、私のものじゃない。彼女が、勝手に書かせたんだ」');
  T.sp();
  await T.say('そう言って、老人はまた薄く笑った。','narr');
  await T.say('――嘘だ。', 'narr');
  await T.say('膝の上の、何千回と開いた割れた背表紙。そして、愛おしそうにその背表紙をさする、震えた指が何より雄弁だった。', 'narr');
  T.sp();
  await T.say('だが、客が望むなら、消す。それが仕事だ。', 'narr');
  T.sp();
  await T.say('俺は端末を引き寄せた。','narr');
  await T.say('ケーブルの先を、老人の薄くなった髪をかき分けて、耳の後ろの古いポートへ差し込む。','narr');
  await T.say('規格が古い。指で位置を探りながら、押し込んだ。','narr');
  await T.say('カチリ、と乾いた音がした。','narr');
  await T.sleep(400);

  await linkGlitch();
  linkOn();
  Scene.clearText();
  await Scene.addText('[ LINK ESTABLISHED ]', '#ffaa00');
  await Scene.addText('[ READING NEURAL ARCHIVE... ]', '#ffaa00');
  await Scene.addText('[ WARNING: ARCHIVE HEAVILY REWRITTEN ]', '#ff2244');
  await T.sleep(300);

  await T.say('これだけ古い記憶なのに、輪郭がやけに鮮明すぎる。', 'narr');
  await T.say('――何度も、何度も、磨き直された記憶。本物よりはるかに本物らしい。', 'narr');
  T.sp();

  await Scene.addText('...彼女と出会ったのは、貸本屋だった。', '#44ff88', 2);
  await Scene.addText('...同じ一冊に、二人で手を伸ばした。', '#44ff88', 2);
  await Scene.addText('...笑うと、左の頬に、えくぼができた。', '#44ff88', 2);
  await Scene.addText('...名前は、さわ。佐和、と書いた。', '#44ff88', 2);
  await Scene.addText('...私は、毎日、彼女に物語を読み聞かせた。', '#44ff88', 2);

  await Scene.addText('...病室の窓から、桜が見えた。', '#44ff88', 2);
  await Scene.addText('...「あなたの書く話の中なら、私、死なないのね」', '#44ff88', 2);
  await Scene.addText('...さわは、そう言って、笑った。', '#44ff88', 2);
  await Scene.addText('...私は、枕元で、ペンを走らせた。', '#44ff88', 2);
  await Scene.addText('...彼女が眠ったあとも、取り憑かれたように書き続けた。', '#44ff88', 2);

  await T.sleep(300);
  glitch(500);
  await T.sleep(200);
  await Scene.addText('[ERR] RESIDUAL GHOST DETECTED', '#ff2244', 1);
  await T.sleep(200);
  await T.say('――視界が、緑色のノイズに染まる。', 'narr');
  await T.say('また、この感覚だ。脳が混ざる感覚。', 'narr');
  await T.say('誰かの、知らないはずの声が、混じった気がした。', 'narr');
  await T.sleep(350);

  await T.say('男の記憶を読み進めて、俺はようやく気づいた。', 'narr');
  await T.say('こいつの記憶には、二人の「さわ」がいる。', 'narr');
  T.sp();

  await Scene.addText('...さわは、最後の一ヶ月、もう笑わなかった。', '#44ff88', 2);
  await Scene.addText('...痛みで、私の名前も、呼べなくなっていた。', '#44ff88', 2);
  await Scene.addText('...私は、それを書かなかった。', '#44ff88', 2);
  await Scene.addText('...美しい彼女だけを、書いた。', '#44ff88', 2);
  await Scene.addText('...枯れない、花だけを。', '#44ff88', 2);

  await T.say('老人の頬が、痙攣するようにわずかに引きつった。','narr');
  T.sp();

  await Scene.addText('...出版されると、本は飛ぶように売れ、繰り返し版を重ねた。', '#44ff88', 2);
  await Scene.addText('...みんなが「さわ」を愛した。', '#44ff88', 2);
  await Scene.addText('...だが、私が思い出すのは、本の「さわ」ばかりだ。', '#44ff88', 2);
  await Scene.addText('...本物の、最後の、苦しんだ彼女の顔は――', '#44ff88', 2);
  await Scene.addText('...もう、うまく、思い出せない。', '#44ff88', 2);
  T.sp();

  await T.say('そういうことか。', 'narr');
  await T.say('こいつは女を本にして、永遠に手に入れた。その代わりに、本物を失くした。', 'narr');
  await T.say('四十年かけて、自分の書いた花が、本物の彼女を喰い尽くしていた。', 'narr');
  T.sp();
  await T.tap();

  linkOff();
  await linkGlitch();
  Scene.clearText();
  await Scene.addText('[ LINK TERMINATED ]', '#ffaa00', 1);
  T.sp();
  await T.sleep(400);

  await T.say('端末の画面が静かになった。','narr');
  await T.say('老人は額に、うっすらと汗が浮いている。','narr');
  T.sp();
  await T.dlg('「読ませてもらった」');
  await T.say('俺は新しいタバコに火をつけ、少し間を置いた。','narr');
  T.sp();
  await T.dlg('「あんたが消したいのは、現実にいた女じゃない。本の中の女のほうだ」');
  await T.dlg('「あんたは、本物のさわを、取り戻したいんだろう」');
  T.sp();
  await T.say('老人の目が大きく見開かれた。','narr');
  await T.say('そして、くしゃりと、表情が歪んだ。','narr');
  T.sp();
  await T.npc('「……できるのか。そんなことが」');
  await T.dlg('「無理だね」');
  await T.dlg('「四十年だ。本の中の彼女と、本物の彼女は、あんたの記憶の中で、もう根元まで絡まってる。そこから一方だけを抜くことはできない」');
  await T.dlg('「消すなら、全部だ。さわも、本も、彼女を愛したことも。何もかも、まとめて、無くなる」');
  T.sp();
  await T.say('老人は膝の上の、割れた背表紙を見つめていた。','narr');
  await T.say('長い、長い、沈黙。窓のない部屋に、雨の音だけが伝ってくる。','narr');
  T.sp();
  await T.npc('「……それでも」');
  await T.npc('「それでも私は……自由に、なりたい。もう一度、何かを書きたい」');
  T.sp();
  await T.tap();

  const ch = await showChoices();
  T.sp();

  if(ch==='ERASE') await ep1EraseEnd();
  else             await ep1KeepEnd();

  await ep1Epilogue();
}

async function ep1EraseEnd(){
  await Scene.addText('[ ERASING... ]', '#ffaa00', 1);
  await T.sleep(280);
  await T.say('俺は端末のキーを叩いた。','narr');
  await T.say('四十年分を根こそぎ、削除のマーカーで塗りつぶしていく。貸本屋。えくぼ。桜の病室。枕元のペン。――花も、根も、すべて。','narr');
  T.sp();
  await T.say('キーの上で、手が、わずかに重くなった。', 'narr');
  await T.say('これから消すのは、ただの記憶じゃない。一冊の本の、根っこだ。', 'narr');
  await T.sleep(200);
  await T.say('……だが、それを惜しむのは、俺の役目じゃない。', 'narr');
  await T.say('俺は煙を一つ、長く吐いて削除を実行した。','narr');
  glitch(300);
  await T.sleep(350);
  await Scene.addText('[ COMPLETE ]', '#00ff55', 1);
  T.sp();
  await T.say('四十年分の記憶が、老人の中から消えた。','narr');
  await T.say('俺は古いポートから、ゆっくりとケーブルを引き抜いた。','narr');
  await T.sleep(280);
  await T.say('老人は顔を上げた。','narr');
  await T.say('おだやかな顔、しかし、空っぽの顔だった。','narr');
  T.sp();
  await T.npc('「……はて。私は、何をしに、ここへ」');
  await T.say('老人は、膝の上の、ぼろぼろの本に気づいた。','narr');
  await T.say('不思議そうに、それを手に取り、表紙の名前を読む。自分の、名前を。','narr');
  T.sp();
  await T.npc('「これは……私が、書いたのか。ずいぶん、読み込んであるな」');
  await T.say('老人は、ぱらぱらとページをめくった。','narr');
  await T.say('美しい一文の前で、指が止まる。だが、その目には、もう何の光も灯らなかった。','narr');
  T.sp();
  await T.npc('「……よく、書けている。何で私はこんなものを思いついたんだろうね」');
  T.sp();
  await T.say('俺は答えなかった。', 'narr');
  await T.say('そいつはもう、自分の人生で一番美しかったはずのものを、他人の本として読んでいた。', 'narr');
  T.sp();
  await T.say('老人は本を鞄にしまい、丁寧に、留め金を閉じた。','narr');
  await T.npc('「邪魔をした。なんだか、ずいぶん、身軽になった気がするよ」');
  await T.say('足取りは、来たときよりたしかに軽かった。','narr');
  await T.say('――軽いはずだ。四十年、背負っていたものを、ここに置いていったんだから。', 'narr');
  T.sp();
  await T.say('重い扉が閉まった。','narr');
  Scene.set('IDLE');
  T.sp();
  await T.say('これでいい。あの男が、金を払って望んだことだ。', 'narr');
  await T.say('彼の自宅の机の上には、これから書かれるはずの、まっさらな原稿が待っている。', 'narr');
  await T.sleep(250);
  await T.say('きっと、もう彼は何も書けないだろう。だが、それも、自由のうちだ。', 'narr');
}

async function ep1KeepEnd(){
  await T.say('俺はケーブルをゆっくりと引き抜き、まっすぐに老人の顔を見つめた。','narr');
  T.sp();
  await T.npc('「……どうした。早く、頼む」');
  await T.dlg('「いや、俺は消さない」');
  T.sp();
  await T.say('老人の顔に、戸惑いと怒りが、半分ずつ浮かんだ。','narr');
  await T.npc('「なぜだ。金は、払ったぞ」');
  T.sp();
  await T.dlg('「あんたは、勘違いしてる」');
  await T.dlg('「書けないのは、その女のせいじゃない」');
  T.sp();
  await T.say('老人はカウンターの上で拳を握り込んだ。','narr');
  T.sp();
  await T.dlg('「あんたは、もう、書いたんだ。あんたが書くべきことは、四十年前に、全部」');
  await T.dlg('「それ以上のものを、人間は、そう何度も持てない。書けないんじゃない。もう、書き終わってるんだ」');
  T.sp();
  await T.npc('「……だが、本物の彼女を、私は、失くした」');
  await T.dlg('「失くしてない」');
  await T.say('俺は膝の上の、割れた背表紙を顎で指した。','narr');
  T.sp();
  await T.dlg('「そこにいる。あんたが、何千回もページを開いた。最後の顔を書かなかったのも、あんたなりの、優しさだろう」');
  await T.dlg('「綺麗なほうを、遺してやりたかったんだろう。それは、嘘とは言わない」');
  T.sp();
  await T.say('老人は本を、抱きしめるように胸に寄せた。','narr');
  await T.say('皺だらけの手の甲に、ぽつりと、雫が落ちた。雨ではなかった。','narr');
  T.sp();
  await T.npc('「私に……これを抱えたまま、死ねと言うのか」');
  await T.dlg('「ああ。それを抱えてここから出て行き、それを抱えて墓場に入れ」');
  await T.dlg('「消すのは、いつでもできる。だが、消したら、二度と、その本を開くことはできない」');
  T.sp();
  await T.tap();

  await T.say('老人は、長いあいだ、泣いていた。声もなく、ただ、肩を震わせて。','narr');
  await T.say('やがて、ゆっくりと立ち上がった。','narr');
  await T.say('鞄に本をしまう手は、もう、震えていなかった。','narr');
  T.sp();
  await T.npc('「実は……最後の一ページだけ、まだ、書いていないんだ」');
  await T.npc('「彼女が、苦しんだ夜の、ことを」');
  await T.npc('「帰って、書いてみるよ。今度こそ、本物のさわを」');
  T.sp();
  await T.say('老人は戸口で、一度だけ振り返り、深く頭を下げた。','narr');
  await T.say('重い扉が閉まった。','narr');
  Scene.set('IDLE');
  T.sp();
  await T.say('老人に最後の一ページが書けるかどうかは、俺には分からない。', 'narr');
  await T.say('だが、書こうとして死ぬなら、それは、悪い死に方じゃない。', 'narr');
  await T.say('――たぶん、な。', 'narr');
}

async function ep1Epilogue(){
  Scene.set('IDLE');
  bgmFadeTo('assets/end_bg.mp3');
  await T.sleep(500);
  await T.say('俺はまた、端末の前に座り煙を吐く。','narr');
  await T.say('雨はまだ降っているらしい。配管が、低く鳴っていた。','narr');
  T.sp();
  await T.tap();

  await T.say('人は、忘れたい記憶を、消しに来る。','narr');
  await T.say('だが、たまに、ああいうのが来る。','narr');
  await T.say('忘れたいくせに、誰よりも覚えていたがっている人間が。','narr');
  T.sp();
  await T.say('記憶ってのは、厄介だ。','narr');
  await T.say('重すぎて、捨てたくなる。捨てたら、空っぽで、また欲しくなる。','narr');
  await T.say('幸福を買う上層も、忘却を買う下層も、結局は同じ椅子の上で迷っているのだ。','narr');
  T.sp();
  await T.tap();

  await T.say('あの作家は女を、永遠に枯れない花にした。','narr');
  await T.say('その代わり、本物の、しおれていく彼女を手放した。','narr');
  await T.say('――何かを遺すってのは、たぶん、何かを失くすことだ。','narr');
  T.sp();
  await T.say('俺は何も遺さない。他人の記憶を覗いて、いらないものを切り取る。それだけだ。','narr');
  await T.say('遺すものがなければ、失くすものも、ない。','narr');
  await T.say('それが、この仕事を長く続けるコツだ。','narr');
  T.sp();
  await T.tap();

  await T.say('俺はタバコの火を消した。','narr');
  await T.say('机の隅に、さっきの老人が忘れていったのか――一枚の栞が落ちていた。','narr');
  await T.say('押し花の栞だった。とうに色の褪せた、名も知れない小さな花。','narr');
  T.sp();
  await T.say('……枯れていた。', 'narr');
  await T.say('当たり前だ。花は、枯れる。', 'narr');
  await T.say('俺はそれを、引き出しの奥に、そっとしまった。','narr');
  T.sp();
  await T.say('配管を伝っていた雨音が、いつのまにか止んでいた。','narr');
  await T.say('静かすぎる夜だ。だが、こういう夜にも、誰かが店の扉をノックする。','narr');
  await T.say('俺は新しいタバコに火をつけて、その時を待つ。','narr');
  await episodeTransition(
    '[ END OF LOG: EP.1  EVERLASTING FLOWER ]', '枯れない花',
    '[ START LOG: EP.2  BEYOND THE GLASS ]', 'ガラスの向こう');
}
