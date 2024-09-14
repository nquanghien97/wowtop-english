/*
  Warnings:

  - You are about to drop the column `fatherName` on the `heightcalculator` table. All the data in the column will be lost.
  - You are about to drop the column `motherName` on the `heightcalculator` table. All the data in the column will be lost.
  - Added the required column `address` to the `HeightCalculator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `HeightCalculator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentName` to the `HeightCalculator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `HeightCalculator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ward` to the `HeightCalculator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `heightcalculator` DROP COLUMN `fatherName`,
    DROP COLUMN `motherName`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `district` VARCHAR(191) NOT NULL,
    ADD COLUMN `parentName` VARCHAR(191) NOT NULL,
    ADD COLUMN `province` VARCHAR(191) NOT NULL,
    ADD COLUMN `ward` VARCHAR(191) NOT NULL;
