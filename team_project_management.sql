-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 07, 2024 at 10:53 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `team_project_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(12, 'Finance', '2024-02-07 08:24:42', '2024-02-07 08:24:42'),
(13, 'IT', '2024-02-07 08:26:01', '2024-02-07 08:26:01'),
(15, 'HR', '2024-02-07 08:27:26', '2024-02-07 08:27:26');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `departmentId` int(11) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `email`, `password`, `position`, `departmentId`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(1, 'U2FsdGVkX19e3LvA8vWWH7GF1PeeQMzEJiRGLu7kteo=', 'U2FsdGVkX1+xQXlmu6QJgcq0QtpGTvweLhsr4H0CTco=', '$2a$10$cHvUDPJafELurJXnibD69.axns2YBMMJbz/XwjirShcmID.CuwLAG', 'U2FsdGVkX195lDyZgbXIeFXO8/k1kndOT3yuELKg3FM=', 1, NULL, '2024-02-06 07:53:56', '2024-02-06 07:53:56'),
(2, 'U2FsdGVkX19/dGyvrpir5kp7c1xPmzqmc97e3VfVl+U=', 'U2FsdGVkX1+M2aclTJqGdlu+kaU9cF+ktM1yDs3rwLE=', '$2a$10$0m0.Q6PkzObEboU84PKzr.RYdOcYV/AmlJdfoFJHR05saziFACoGe', 'U2FsdGVkX1/cRQQWnOU/8a3FgfXPOej3sk1URGPVx4U=', 1, NULL, '2024-02-06 07:55:57', '2024-02-06 07:55:57'),
(3, 'U2FsdGVkX19kctGdfxIcblv0yPM+2zUL5hmc60PQgss=', 'U2FsdGVkX18m/XqjQjWPXK6idnF8idGVo8Awt1jq+7A=', '$2a$10$kqjH3V8TXaP60naT0qFDWOXpL37RNjk6O2i9489HQVQMPPwozVGlO', 'U2FsdGVkX19mg+tMK5TWOKsSuCbNbr3kDvt0mWiDqGs=', 1, 0, '2024-02-06 08:05:41', '2024-02-06 08:05:41'),
(4, 'fahmi', 'fahmi@gmail.com', '$2a$10$VvK3nCRi0eN97PBGms8Kb.W5PyLC6GhjSIXrs/sYcAtF4D4tWpEja', 'FEWD', 1, 0, '2024-02-06 08:15:21', '2024-02-06 08:15:21'),
(5, 'feliks', 'feliks@gmail.com', '$2a$10$JU3nDtVpZZZ8GHKgn14Z5OLiBcXZYq4Q/pYxUyqzEhOlNySEF2XlG', 'Senior ', 1, 0, '2024-02-06 08:25:25', '2024-02-06 08:25:25');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240206033558-create-departments.js'),
('20240206074239-create-employees.js');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
