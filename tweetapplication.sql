-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2022 at 08:24 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tweetapplication`
--

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `ID` int(11) NOT NULL,
  `FollowerId` int(11) NOT NULL,
  `FollowedId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`ID`, `FollowerId`, `FollowedId`) VALUES
(1, 1, 0),
(2, 1, 0),
(3, 1, 0),
(4, 200, 0);

-- --------------------------------------------------------

--
-- Table structure for table `hiddentweets`
--

CREATE TABLE `hiddentweets` (
  `id` int(11) NOT NULL,
  `tweetid` int(11) NOT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hiddentweets`
--

INSERT INTO `hiddentweets` (`id`, `tweetid`, `userid`) VALUES
(6, 2, 266),
(7, 3, 266);

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `ID` int(100) NOT NULL,
  `UserId` varchar(100) NOT NULL,
  `TweetId` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`ID`, `UserId`, `TweetId`) VALUES
(1, '2', '3'),
(2, '5', '12'),
(3, '5', '6'),
(4, '5', '6'),
(5, '5', '6'),
(6, '5', '6'),
(7, '2', '5'),
(8, '0', '6'),
(9, '0', '6'),
(10, '0', '6');

-- --------------------------------------------------------

--
-- Table structure for table `tweets`
--

CREATE TABLE `tweets` (
  `id` int(10) NOT NULL,
  `UserId` int(11) NOT NULL,
  `Description` varchar(200) NOT NULL,
  `Hashtag` char(21) NOT NULL,
  `Date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tweets`
--

INSERT INTO `tweets` (`id`, `UserId`, `Description`, `Hashtag`, `Date`) VALUES
(2, 2, 'undefined', 'undefined', '1266-26-20'),
(80, 2, 'undefined', 'undefined', '1266-26-20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Fullname` text NOT NULL,
  `Birthday` date NOT NULL,
  `Password` text NOT NULL,
  `Address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `Username`, `Fullname`, `Birthday`, `Password`, `Address`) VALUES
(1, 'amany ', 'undefined', '2000-08-20', '12345678', 'hhh'),
(2, 'amany ', 'undefined', '2000-08-20', '12345678', 'hhh'),
(666, 'amany ', 'undefined', '2000-08-20', '12345678', 'hhh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `hiddentweets`
--
ALTER TABLE `hiddentweets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tweets`
--
ALTER TABLE `tweets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `followers`
--
ALTER TABLE `followers`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `hiddentweets`
--
ALTER TABLE `hiddentweets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tweets`
--
ALTER TABLE `tweets`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=997;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=667;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
