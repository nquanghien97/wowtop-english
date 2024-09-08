-- CreateTable
CREATE TABLE `Information` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `parentName` VARCHAR(191) NOT NULL,
    `fatherHeight` INTEGER NOT NULL,
    `motherHeight` INTEGER NOT NULL,
    `phoneNumber` INTEGER NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `currentHeight` INTEGER NOT NULL,
    `currentWeight` INTEGER NOT NULL,
    `gender` ENUM('BOY', 'GIRL') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
