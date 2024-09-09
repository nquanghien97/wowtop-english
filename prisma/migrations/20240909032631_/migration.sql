/*
  Warnings:

  - Added the required column `currentProduct` to the `HeightCalculator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sport` to the `HeightCalculator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeSleep` to the `HeightCalculator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `heightcalculator` ADD COLUMN `currentProduct` VARCHAR(191) NOT NULL,
    ADD COLUMN `sport` VARCHAR(191) NOT NULL,
    ADD COLUMN `timeSleep` VARCHAR(191) NOT NULL;
