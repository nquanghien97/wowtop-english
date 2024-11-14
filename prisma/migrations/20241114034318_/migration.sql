-- AlterTable
ALTER TABLE `accumulation_code` MODIFY `status` ENUM('UNUSED', 'USED', 'EXPIRED') NOT NULL DEFAULT 'UNUSED';
