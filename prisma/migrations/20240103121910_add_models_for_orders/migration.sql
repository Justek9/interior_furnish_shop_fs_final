-- CreateTable
CREATE TABLE `OrderProducts` (
    `id` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `qty` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `remarks` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL DEFAULT '',
    `orderRemarks` VARCHAR(191) NOT NULL,
    `shippingCost` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductsOnOrders` (
    `orderId` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`orderId`, `productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductsOnOrders` ADD CONSTRAINT `ProductsOnOrders_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsOnOrders` ADD CONSTRAINT `ProductsOnOrders_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `OrderProducts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
