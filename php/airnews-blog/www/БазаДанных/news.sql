 -- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 27, 2017 at 03:28 PM
-- Server version: 5.5.53
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aircraftBase`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `intro_text` text NOT NULL,
  `full_text` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `intro_text`, `full_text`) VALUES
(1, 'Статья 1', 'Сдеся выведется самая первая статейка из трех статей ни о чем, просто для проверки.\r\n', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem at illum, quod quis quisquam excepturi possimus, dolor tempore cumque ratione eos necessitatibus tempora deserunt, accusantium nulla quam exercitationem! Dolore, quae?'),
(2, 'Статья 2', 'Сдеся выведется вторая статья из трех статей ни о чем. чисто для проверки.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem at illum, quod quis quisquam excepturi possimus, dolor tempore cumque ratione eos necessitatibus tempora deserunt, accusantium nulla quam exercitationem! Dolore, quae?\r\nДалее'),
(3, 'Статья 3', 'Сдеся выведется самая последняя статейка из трех статей ни о чем, чисто для проверки.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem at illum, quod quis quisquam excepturi possimus, dolor tempore cumque ratione eos necessitatibus tempora deserunt, accusantium nulla quam exercitationem! Dolore, quae?\r\nДалее');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
