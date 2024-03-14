DROP TABLE IF EXISTS `bookingtable`;

CREATE TABLE `bookingtable` (
  `BookingID` int NOT NULL AUTO_INCREMENT,
  `RealEstateTitle` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `RoomCode` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Address` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `imgURL` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Price` float DEFAULT NULL,
  `Checkin` varchar(250) DEFAULT NULL,
  `Checkout` varchar(250) DEFAULT NULL,
  `RealEstateId` varchar(250) DEFAULT NULL,
  `ethAddress` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `isPaymented` int DEFAULT '0',
  PRIMARY KEY (`BookingID`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `bookingtable` WRITE;

INSERT INTO `bookingtable` VALUES 
(95,'05 Bedroom Standard - Nội thất Cơ bản- Vinhomes Ocean Park','S2.20160','Da Nang','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dwa27cd955/images/Fullkodeco/3BR%20Deluxe_LAR/3BR_LAR_(1).JPG',0.014,'2022-08-11T17:00:00.000Z','2022-08-15T17:00:00.000Z',33,'0x20B71D1b6bFD7F2bd948E606b8567ebd952645ed',0),
(96,'02 Bedroom Standard - Nội thất Cơ bản - Vinhomes Ocean Park','S2.10141','9542 N Military Trl','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg',0.005,'2022-08-12T17:00:00.000Z','2022-08-17T17:00:00.000Z',23,'0xA80E6f2B3667003ff1CB47F2081Ce0b93ee15A96',0),
(97,'Studio Apartment - Nội thất Cơ bản - Vinhomes Ocean Park','S2.10162','9544n North Military Trail','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg',0.0125,'2022-08-12T17:00:00.000Z','2022-08-17T17:00:00.000Z',24,'0xA80E6f2B3667003ff1CB47F2081Ce0b93ee15A96',0),
(98,'01 Bedroom Deluxe - Nội thất Cơ bản - Vinhomes Ocean Park','S2.101202','Ho Chi Minh','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg',0.004,'2022-08-14T17:00:00.000Z','2022-08-16T17:00:00.000Z',22,'0xA80E6f2B3667003ff1CB47F2081Ce0b93ee15A96',1),
(99,'01 Bedroom Deluxe - Nội thất Cơ bản - Vinhomes Ocean Park','S2.101202','Ho Chi Minh','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg',0.004,'2022-08-17T17:00:00.000Z','2022-08-19T17:00:00.000Z',22,'0xA80E6f2B3667003ff1CB47F2081Ce0b93ee15A96',1),
(100,'01 Bedroom Deluxe - Nội thất Cơ bản - Vinhomes Ocean Park','S2.101202','Ho Chi Minh','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg',0.01,'2022-08-20T17:00:00.000Z','2022-08-25T17:00:00.000Z',22,'0xA80E6f2B3667003ff1CB47F2081Ce0b93ee15A96',1);

UNLOCK TABLES;
