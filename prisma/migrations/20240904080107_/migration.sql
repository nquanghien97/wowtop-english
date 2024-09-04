/*
  Warnings:

  - Added the required column `imageUrl` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `news` ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL;
