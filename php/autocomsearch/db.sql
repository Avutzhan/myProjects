-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 27, 2017 at 12:44 PM
-- Server version: 5.7.14
-- PHP Version: 7.0.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demo`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `findAll` ()  BEGIN
	SELECT * FROM product;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `findById` (`int_id` INT)  BEGIN
   SELECT * FROM product where id = int_id;
   END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `username` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `fullname` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(250) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`username`, `password`, `fullname`, `email`) VALUES
('acc1', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'Account 1', 'aaa111'),
('acc2', '123', 'Account 2', 'acc2@gmail.com'),
('acc3', '123', 'Account 3', 'acc3@gmail.com'),
('acc4', '123', 'Account 4', 'acc4@gmail.com'),
('acc5', '123', 'Account 5', 'acc5@gmail.com'),
('admin', '123', 'ABC', 'a@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(250) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Category 1'),
(2, 'Category 2'),
(3, 'Category 3'),
(4, 'ABC'),
(5, 'def'),
(6, 'def 111');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `name` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `datecreation` date NOT NULL,
  `status` tinyint(1) NOT NULL,
  `username` varchar(250) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `name`, `datecreation`, `status`, `username`) VALUES
(14, 'New Order', '2017-03-03', 0, 'acc2'),
(15, 'New Order', '2017-03-03', 0, 'acc2');

-- --------------------------------------------------------

--
-- Table structure for table `ordersdetail`
--

CREATE TABLE `ordersdetail` (
  `productid` int(11) NOT NULL,
  `ordersid` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `ordersdetail`
--

INSERT INTO `ordersdetail` (`productid`, `ordersid`, `price`, `quantity`) VALUES
(1, 14, '1000', 1),
(1, 15, '1000', 1),
(2, 14, '999999', 1),
(4, 14, '500', 1),
(6, 15, '520', 1),
(7, 15, '520', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `photo` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `categoryid` int(11) NOT NULL,
  `featured` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `quantity`, `description`, `photo`, `categoryid`, `featured`) VALUES
(1, 'Nokia 1', '1000.00', 2, 'good', 'thumb1.gif', 1, 0),
(2, 'Nokia 2', '67.00', 5, 'good', 'thumb2.gif', 1, 1),
(3, 'Samsung 1', '500.00', 8, 'good', 'thumb3.gif', 2, 0),
(4, 'Samsung 2', '510.00', 8, 'good', 'thumb1.gif', 3, 1),
(5, 'Apple 1', '520.00', 8, 'good 11', 'thumb1.gif', 3, 0),
(6, 'Apple 2', '820.00', 8, 'good', 'thumb2.gif', 3, 1),
(7, 'Apple 3', '520.00', 8, 'good', 'thumb2.gif', 3, 0),
(12, 'SamSung 3', '123.00', 456, 'good', 'thumb3.gif', 3, 1),
(13, 'Apple 4', '2222.00', 7777, 'good 111', 'thumb2.gif', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(250) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(4, 'user'),
(5, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  `enabled` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `enabled`) VALUES
(4, 'employee1', '123', 1),
(5, 'admin', '123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `userid` int(11) NOT NULL,
  `roleid` int(11) NOT NULL,
  `enable` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_role`
--

INSERT INTO `user_role` (`userid`, `roleid`, `enable`) VALUES
(4, 4, 1),
(5, 5, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `ordersdetail`
--
ALTER TABLE `ordersdetail`
  ADD PRIMARY KEY (`productid`,`ordersid`),
  ADD KEY `mahd` (`ordersid`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryid` (`categoryid`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`userid`,`roleid`),
  ADD KEY `roleid` (`roleid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`username`) REFERENCES `account` (`username`);

--
-- Constraints for table `ordersdetail`
--
ALTER TABLE `ordersdetail`
  ADD CONSTRAINT `ordersdetail_ibfk_1` FOREIGN KEY (`productid`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `ordersdetail_ibfk_2` FOREIGN KEY (`ordersid`) REFERENCES `orders` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`categoryid`) REFERENCES `category` (`id`);

--
-- Constraints for table `user_role`
--
ALTER TABLE `user_role`
  ADD CONSTRAINT `user_role_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_role_ibfk_2` FOREIGN KEY (`roleid`) REFERENCES `roles` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;