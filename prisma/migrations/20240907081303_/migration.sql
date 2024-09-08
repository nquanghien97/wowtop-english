/*
  Warnings:

  - You are about to drop the column `parentName` on the `heightcalculator` table. All the data in the column will be lost.
  - Added the required column `fatherName` to the `HeightCalculator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motherName` to the `HeightCalculator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `heightcalculator` DROP COLUMN `parentName`,
    ADD COLUMN `fatherName` VARCHAR(191) NOT NULL,
    ADD COLUMN `motherName` VARCHAR(191) NOT NULL;
