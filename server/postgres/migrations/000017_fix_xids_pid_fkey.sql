-- ============================================================================
-- Migration: Fix xids_pid_fkey constraint
-- ============================================================================
-- This migration fixes the foreign key constraint on xids.pid that was
-- incorrectly created in migration 000015. The original constraint referenced
-- participants(pid) alone, but pid is only unique within a conversation (zid).
-- The correct constraint should reference the composite key (zid, pid).
-- ============================================================================

-- Drop the incorrect foreign key constraint
ALTER TABLE xids
DROP CONSTRAINT IF EXISTS xids_pid_fkey;

-- Add the corrected foreign key constraint using composite key
ALTER TABLE xids
ADD CONSTRAINT xids_pid_fkey
    FOREIGN KEY (zid, pid) REFERENCES participants(zid, pid) ON DELETE SET NULL;

