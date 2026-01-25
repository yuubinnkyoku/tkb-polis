// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.


var s = {};

// Text on card

s.participantHelpWelcomeText =
  "新しいタイプの会話へようこそ — 他の人の意見に<b>投票</b>してみてください — 多ければ多いほど良いです。";

s.agree = "賛成";
s.disagree = "反対";
s.pass = "パス/わからない";

s.writePrompt = "あなたの視点を共有してください（返信ではなく、独立した意見を投稿してください）";
s.anonPerson = "匿名";
s.importantCheckbox = "重要/有意義";
s.importantCheckboxDesc =
  "この意見があなたにとって特に重要である、または会話に関連性が高いとお考えの場合は、このチェックボックスをオンにしてください。投票に関係なく、この意見は会話分析において他の投票よりも優先されます。";
s.howImportantPrompt = "この意見はどの程度重要ですか？";
s.howImportantLow = "低";
s.howImportantMedium = "中";
s.howImportantHigh = "高";

s.modSpam = "スパム";
s.modOffTopic = "トピックから外れている";
s.modImportant = "重要";
s.modSubmitInitialState = "スキップ（上記に該当しない）、次の意見へ";
s.modSubmit = "完了、次の意見へ";

s.x_wrote = "は次のように書きました：";
s.comments_remaining = "残り{{num_comments}}問";
s.comments_remaining2 = "残り{{num_comments}}の意見";

// Text about phasing

s.noCommentsYet = "まだ意見がありません。";
s.noCommentsYetSoWrite = "意見を追加して会話を始めましょう。";
s.noCommentsYetSoInvite =
  "より多くの参加者を招待するか、意見を追加して会話を始めましょう。";
s.noCommentsYouVotedOnAll = "すべての意見に投票しました。";
s.noCommentsTryWritingOne =
  "追加したいことがあれば、自分の意見を書いてみてください。";
s.convIsClosed = "この会話は終了しています。";
s.noMoreVotingAllowed = "これ以上の投票はできません。";

// For visualization below

s.group_123 = "グループ：";
s.comment_123 = "意見：";
s.majorityOpinion = "多数派の意見";
s.majorityOpinionShort = "多数派";
s.info = "情報";


s.helpWhatAmISeeingTitle = "ここでは何が見ていますか？";
s.helpWhatAmISeeing =
  "あなたは青い円で表され、あなたの視点を共有する他の人々とグループ化されています。";
s.heresHowGroupVoted = "グループ{{GROUP_NUMBER}}がどのように投票したか：";
s.one_person = "{{x}}人";
s.x_people = "{{x}}人";
s.acrossAllPtpts = "全参加者で：";
s.xPtptsSawThisComment = "がこの意見を見ました";
s.xOfThoseAgreed = "の参加者が賛成しました";
s.xOfthoseDisagreed = "の参加者が反対しました";
s.opinionGroups = "意見グループ";
s.topComments = "上位意見";
s.divisiveComments = "意見が分かれた意見";
s.pctAgreed = "{{pct}}% 賛成";
s.pctDisagreed = "{{pct}}% 反対";
s.pctAgreedLong =
  "意見{{comment_id}}に投票したすべての人の{{pct}}%が賛成しました。";
s.pctAgreedOfGroup = "グループ{{group}}の{{pct}}%が賛成";
s.pctDisagreedOfGroup = "グループ{{group}}の{{pct}}%が反対";
s.pctDisagreedLong =
  "意見{{comment_id}}に投票したすべての人の{{pct}}%が反対しました。";
s.pctAgreedOfGroupLong =
  "グループ{{group}}で意見{{comment_id}}に投票した人々の{{pct}}%が賛成しました。";
s.pctDisagreedOfGroupLong =
  "グループ{{group}}で意見{{comment_id}}に投票した人々の{{pct}}%が反対しました。";
s.participantHelpGroupsText =
  "あなたは青い円で表され、あなたの視点を共有する他の人々とグループ化されています。";
s.participantHelpGroupsNotYetText =
  "7人の参加者が投票を開始すると、視覚化が表示されます";
s.helpWhatAreGroupsDetail =
  "<p>あなたのグループや他をクリックして、各グループの意見を探索してください。</p><p>多数派の意見は、グループ間で最も広く共有されているものです。</p>";

// Text about writing your own statement

s.helpWhatDoIDoTitle = "何をすればいいですか？";
s.helpWhatDoIDo =
  "「賛成」または「反対」をクリックして、他の人の意見に投票してください。意見を書いてください（それぞれを単一のアイデアに保ちましょう）。友達を会話に招待してください！";
s.writeCommentHelpText =
  "会話からあなたの視点や経験が欠けていますか？そうであれば、下のボックスに<b>追加</b>してください — <b>一度に一つ</b>。";
s.helpWriteListIntro = "良い意見とは何ですか？";
s.helpWriteListStandalone = "独立したアイデア";
s.helpWriteListRaisNew = "新しい視点、経験、または問題";
s.helpWriteListShort = "明確で簡潔な表現（140文字に制限）";
s.tip = "ヒント：";
s.commentWritingTipsHintsHeader = "意見を書くためのヒント";
s.tipCharLimit = "意見は{{char_limit}}文字に制限されています。";
s.tipCommentsRandom =
  "意見はランダムに表示され、あなたは他の人の意見に直接返信しているわけではありません：<b>あなたは独立した意見を追加しています。</b>";
s.tipOneIdea =
  "複数のアイデアを含む長い意見を分割してください。これにより、他の人があなたの意見に投票しやすくなります。";
s.tipNoQuestions =
  "意見は質問の形式であるべきではありません。参加者はあなたの意見に賛成または反対します。";
s.commentTooLongByChars =
  "{{CHARACTERS_COUNT}}文字分だけ、意見の長さ制限を超えています。";
s.submitComment = "送信";
s.commentSent =
  "意見を送信しました！他の参加者だけがあなたの意見を見て、賛成または反対します。";

// Error notices

s.commentSendFailed = "意見の送信中にエラーが発生しました。";
s.commentSendFailedEmpty =
  "意見の送信中にエラーが発生しました - 意見を空にすることはできません。";
s.commentSendFailedTooLong =
  "意見の送信中にエラーが発生しました - 意見が長すぎます。";
s.commentSendFailedDuplicate =
  "意見の送信中にエラーが発生しました - 同じ意見が既に存在します。";
s.commentErrorDuplicate = "重複しています！その意見は既に存在します。";
s.commentErrorConversationClosed =
  "この会話は終了しています。これ以上の意見を送信できません。";
s.commentIsEmpty = "意見が空です";
s.commentIsTooLong = "意見が長すぎます";
s.hereIsNextStatement = "投票成功。次の意見を見るには上に移動してください。";
s.xidRequired = "この会話に参加するにはXID（外部識別子）が必要です。提供された適切なリンクを使用してください。";
s.xidOidcConflictWarning = "警告：あなたは現在polisにサインインしていますが、XIDトークンで会話を開いています。XIDで参加するには、polisアカウントからログアウトしてください。";

s.emailLogin = "メールでログイン";
s.tip = "Tip:";
s.commentWritingTipsHintsHeader = "意見を書くためのコツ";
s.tipCharLimit = "意見は最大で {{char_limit}} 文字です。";
s.tipCommentsRandom = "質問は、管理者の確認後追加され、ランダムに表示されます。";
s.tipOneIdea = "複数のアイデアを含む意見を分けましょう。投票が簡単になります。";
s.tipNoQuestions = "意見は「質問」ではありません。投票者はあなたの意見に賛成するか、反対します。";
s.commentTooLongByChars = "意見は最大で {{CHARACTERS_COUNT}} 文字です。";
s.notSentSinceDemo = "(これはデモンストレーションです)";
s.submitComment = "提出";
s.tipStarred = "重要マークを付ける";
s.participantHelpWelcomeText = "新しい形式の会話へようこそ。他の人の意見に<em>投票</em>してみてください。";
s.participantHelpGroupsText = "意見が似ている人は<span style='font-weight: 700;'>グループにまとめられます。</span>グループをクリックすると、そこの人の視点になれます。<a style='font-weight: 700; cursor: pointer; text-decoration: underline' id='helpTextGroupsExpand'>...more</a>";
s.participantHelpGroupsNotYetText = "7人以上が投票していると、図形が表示されます。";
s.helpWhatAreGroupsDetail = "<p>Amazonの「お勧めの商品」、Netflixの「お勧めの映画」は、統計を使用して、類似のものを購入したり視聴しているユーザをグループ化し、同じグループの他のユーザが購入または視聴しているものを表示します。</p><p>Pol.isでも同様です。グループは以下で確認でき、似たような意見を持つ人々で構成されています。グループをクリックすると、何がそのグループの特徴となっているのかがわかります。</p>";

// Text for third party translation that appears on cards

s.showTranslationButton = "サードパーティ翻訳を有効にする";
s.hideTranslationButton = "翻訳を無効にする";
s.thirdPartyTranslationDisclaimer = "サードパーティによって提供された翻訳";

// Text about notifications and subscriptions and embedding

s.notificationsAlreadySubscribed =
  "この会話の更新を購読しています。";
s.notificationsGetNotified = "さらに意見が届いたときに通知を受け取る：";
s.notificationsEnterEmail =
  "さらに意見が届いたときに通知を受け取るために、メールアドレスを入力してください：";
s.labelEmail = "メール";
s.notificationsSubscribeButton = "購読する";
s.notificationsSubscribeErrorAlert = "購読エラー";

s.addPolisToYourSite =
  "<img style='height: 20px; margin: 0px 4px;' src='{{URL}}'/>";

// Footer

s.privacy = "プライバシー";
s.TOS = "利用規約";

// Experimental features

s.importantCheckbox = "この意見は重要";
s.howImportantPrompt = "この意見はどの程度重要ですか？";
s.howImportantLow = "低";
s.howImportantMedium = "中";
s.howImportantHigh = "高";
s.tipStarred = "重要としてマークされました。";

s.modSpam = "スパム";
s.modOffTopic = "トピックから外れている";
s.modImportant = "重要";
s.modSubmitInitialState = "スキップ（上記に該当しない）、次の意見へ";
s.modSubmit = "完了、次の意見へ";

s.topic_good_01 = "卓球ルームについてどうすべきですか？";
s.topic_good_01_reason =
  "オープンエンド、誰もがこの質問の答えについて意見を持つことができます";
s.topic_good_02 = "新しい提案についてどう思いますか？";
s.topic_good_02_reason =
  "オープンエンド、誰もがこの質問の答えについて意見を持つことができます";
s.topic_good_03 = "生産性を低下させる原因を何か考えられますか？";

s.topic_bad_01 = "全員で起動準備状況を報告";
s.topic_bad_01_reason =
  "様々なチームの人々が回答に投票しますが、自信を持って投票するための十分な知識がない可能性があります。";
s.topic_bad_02 = "起動のブロッカーは何ですか？";
s.topic_bad_02_reason = "";
s.invite_code_required_short = "招待コードが必要";
s.invite_code_required_long = "この会話に参加するには招待コードが必要です";
s.invite_code_prompt = "招待コードを入力";
s.submit_invite_code = "招待コードを送信";
s.invite_code_invalid = "提供された招待コードは無効です。もう一度お試しください。";

// Treevite login code strings
s.invite_code_accepted_message = "招待が受け入れられました。あなたのログインコードは：{{login_code}}です。このコードをパスワードのように扱ってください — 安全な場所に保存してください。後で再度ログインするにはこのコードを使用する必要があります。紛失しても再発行されません。";
s.invite_code_accepted_message_no_code = "招待が受け入れられました。";
s.login_code_prompt = "ログインコードを入力";
s.submit_login_code = "ログインコードを送信";
s.login_code_invalid = "提供されたログインコードは無効です。もう一度お試しください。";
s.login_success = "成功！ログインしました。";
s.submitting = "送信中...";
s.or_text = "または";
s.copy = "コピー";
s.copied = "コピーしました";
s.ok_got_it = "OK、了解しました";
s.invites_link = "招待";
s.invites_wave_sentence = "あなたはウェーブ{{wave}}にいます。参加日：{{date}}";
s.invites_instructions = "これらの招待コードをコピーして、新しい参加者を招待してください：";
s.invites_none = "まだ招待がありません。";
s.invite_status_unused = "未使用";
s.invite_status_used = "使用済み";
s.invite_status_revoked = "取り消し済み";
s.invite_status_expired = "有効期限切れ";

export default s;
