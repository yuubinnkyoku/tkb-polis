// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

const s = {}

s.share_but_no_comments_warning =
    "この会話にはまだ意見がありません。参加者を招待する前に、いくつか意見（シードコメント）を追加することをお勧めします。これにより、参加者が投票を始めやすくなります。「設定」の「意見の追加」から追加できます。"
s.share_but_no_visible_comments_warning =
    "表示可能な意見がありません。参加者を招待する前に、いくつか意見を追加するか、既存の意見のモデレーションを行うことをお勧めします。"

s.no_permission = "このページを表示する権限がありません。"

// Layout & Navigation
s.nav_conversations = "会話一覧"
s.nav_integrate = "サイトへの埋め込み"
s.nav_account = "アカウント"
s.nav_signout = "ログアウト"

// Conversation Admin Navigation
s.nav_all = "すべて"
s.nav_configure = "設定"
s.nav_distribute = "配布"
s.nav_moderate = "モデレーション"
s.nav_monitor = "モニタリング"
s.nav_reports = "レポート"
s.nav_invite_tree = "招待ツリー"
s.nav_invite_codes = "招待コード"
s.nav_participants = "参加者"

// Conversation Configuration
s.config_title = "設定"
s.config_saving = "保存中"
s.config_uptodate = "最新の状態です"
s.config_error_saving = "保存エラー"

s.config_is_active_label = "会話はオープンです"
s.config_is_active_desc = "チェックを外すと、投票とコメントの両方が無効になります。"

s.config_topic_label = "トピック"
s.config_description_label = "説明"

s.config_seed_comments_label = "シードコメント（初期意見）"
s.config_customize_ui_label = "ユーザーインターフェースのカスタマイズ"

s.config_vis_label = "視覚化（分析マップ）"
s.config_vis_desc = "参加者が分析マップ（グループ分けの図）を見ることができます"

s.config_write_label = "コメントフォーム"
s.config_write_desc = "参加者が新しい意見を投稿できます"

s.config_help_label = "ヘルプテキスト"
s.config_help_desc = "投票や視覚化の上に説明文を表示します"

s.config_subscribe_label = "更新情報を購読するプロンプトを表示"
s.config_subscribe_desc = "すべての意見に投票し終えたとき、ユーザーに購読を促します。有効な場合、参加者はメールアドレスを入力して、新しい意見が追加されたときに通知を受け取ることができます。"

s.config_strict_mod_label = "厳格なモデレーション"
s.config_strict_mod_desc = "モデレーターの承認なしには意見が表示されません"

s.config_invite_tree_label = "招待ツリーを有効にする"
s.config_invite_tree_desc = "【実験的機能】招待ツリーを有効にします。招待がないと参加できません。"

s.config_importance_label = "重要度評価を有効にする"
s.config_importance_desc = "【実験的機能】参加者が「この意見は重要です」チェックボックスを使用できるようになります"

// Conversations List
s.all_conversations = "すべての会話"
s.my_conversations = "自分の会話"
s.create_new_conversation = "新しい会話を作成"
s.loading_conversations = "読み込み中..."
s.error_loading_conversations = "読み込みエラーが発生しました"

// Filters & Table Headers
s.filter_owner_email = "オーナーのメールアドレス..."
s.filter_all_statuses = "すべてのステータス"
s.filter_active = "有効"
s.filter_inactive = "無効"
s.filter_min_comments = "最小意見数"
s.filter_min_participants = "最小参加者数"
s.filter_updated_days = "過去N日間に更新"
s.filter_created_days = "過去N日間に作成"
s.filter_apply = "適用"

s.sort_updated = "並び替え: 更新日"
s.sort_created = "並び替え: 作成日"
s.sort_participants = "並び替え: 参加者数"
s.sort_comments = "並び替え: 意見数"
s.sort_desc = "降順"
s.sort_asc = "昇順"

s.table_topic = "トピック"
s.table_participants = "参加者"
s.table_comments = "意見"
s.table_updated = "最終更新"
s.table_created = "作成日"
s.table_owner = "オーナー"
s.table_active = "有効"

export default s
