// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

const s = {}

s.share_but_no_comments_warning =
  "This conversation has no comments. We recommend you add a few comments before inviting participants. This will help participants get started. Go to 'Configure' and then 'Seed Comments'."
s.share_but_no_visible_comments_warning =
  'This conversation has no visible comments. We recommend you add a few comments (or moderate the comments that exist) before inviting participants, since this will help them understand what kind of comments they should submit.'

s.no_permission = 'Your account does not have the permissions to view this page.'

// Layout & Navigation
s.nav_conversations = 'Conversations'
s.nav_integrate = 'Integrate'
s.nav_account = 'Account'
s.nav_signout = 'Sign Out'

// Conversation Admin Navigation
s.nav_all = 'All'
s.nav_configure = 'Configure'
s.nav_distribute = 'Distribute'
s.nav_moderate = 'Moderate'
s.nav_monitor = 'Monitor'
s.nav_reports = 'Reports'
s.nav_invite_tree = 'Invite Tree'
s.nav_invite_codes = 'Invite Codes'
s.nav_participants = 'Participants'

// Conversation Configuration
s.config_title = 'Configure'
s.config_saving = 'Saving'
s.config_uptodate = 'Up to date'
s.config_error_saving = 'Error Saving'

s.config_is_active_label = 'Conversation Is Open'
s.config_is_active_desc = 'Conversation is open. Unchecking disables both voting and commenting.'

s.config_topic_label = 'Topic'
s.config_description_label = 'Description'

s.config_seed_comments_label = 'Seed Comments'
s.config_customize_ui_label = 'Customize the user interface'

s.config_vis_label = 'Visualization'
s.config_vis_desc = 'Participants can see the visualization'

s.config_write_label = 'Comment form'
s.config_write_desc = 'Participants can submit comments'

s.config_help_label = 'Help text'
s.config_help_desc = 'Show explanation text above voting and visualization'

s.config_subscribe_label = 'Prompt participants to subscribe to updates'
s.config_subscribe_desc = 'Prompt participants to subscribe to updates. A prompt is shown to users once they finish voting on all available comments. If enabled, participants may optionally provide their email address to receive notifications when there are new comments to vote on.'

s.config_strict_mod_label = 'Strict Moderation'
s.config_strict_mod_desc = 'No comments shown without moderator approval'

s.config_invite_tree_label = 'Enable Invite Tree'
s.config_invite_tree_desc = '[EXPERIMENTAL FEATURE] Enable Invite Tree. Nobody can participate without an invite. Invites are managed in waves.'

s.config_importance_label = 'Importance Enabled'
s.config_importance_desc = '[EXPERIMENTAL FEATURE] Participants can see the "This comment is important" checkbox'

// Conversations List
s.all_conversations = 'All Conversations'
s.my_conversations = 'My Conversations'
s.create_new_conversation = 'Create new conversation'
s.loading_conversations = 'Loading conversations...'
s.error_loading_conversations = 'Error loading conversations'

// Filters & Table Headers
s.filter_owner_email = 'Owner email contains...'
s.filter_all_statuses = 'All statuses'
s.filter_active = 'Active'
s.filter_inactive = 'Inactive'
s.filter_min_comments = 'Min comments'
s.filter_min_participants = 'Min participants'
s.filter_updated_days = 'Updated in last N days'
s.filter_created_days = 'Created in last N days'
s.filter_apply = 'Apply'

s.sort_updated = 'Sort: Updated'
s.sort_created = 'Sort: Created'
s.sort_participants = 'Sort: Participants'
s.sort_comments = 'Sort: Comments'
s.sort_desc = 'Desc'
s.sort_asc = 'Asc'

s.table_topic = 'Topic'
s.table_participants = 'Participants'
s.table_comments = 'Comments'
s.table_updated = 'Updated'
s.table_created = 'Created'
s.table_owner = 'Owner Email'
s.table_active = 'Active'

export default s
