-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 12, 2024 at 10:58 AM
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
(1, 'test1', '2024-02-12 02:32:33', '2024-02-12 02:32:33'),
(2, 'test2', '2024-02-12 02:32:39', '2024-02-12 02:32:39'),
(4, 'test5', '2024-02-12 04:59:08', '2024-02-12 08:36:01'),
(5, 'test', '2024-02-12 04:59:12', '2024-02-12 04:59:12'),
(6, 'test', '2024-02-12 05:01:40', '2024-02-12 05:01:40'),
(7, 'test', '2024-02-12 05:25:15', '2024-02-12 05:25:15'),
(8, 'test', '2024-02-12 06:45:40', '2024-02-12 06:45:40');

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
(1, 'uji', 'uji@gmail.com', '$2a$10$kVAg4wfgvHgKRDXj9nhIC.uH0o0mKn21CPz5iJh6gDmBW1CkSz/Gy', 'Software Engineering', 2, 1, '2024-02-12 02:33:47', '2024-02-12 02:33:47'),
(2, 'fahmi', 'fahmi@gmail.com', '$2a$10$kVAg4wfgvHgKRDXj9nhIC.uH0o0mKn21CPz5iJh6gDmBW1CkSz/Gy', 'FE', 2, 0, '2024-02-12 03:13:38', '2024-02-12 03:13:38');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `startDate`, `endDate`, `status`, `imageUrl`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 'testing', '2024-02-17 00:00:00', '2024-02-20 00:00:00', 0, 'http://res.cloudinary.com/dxsaqdiy7/image/upload/v1707718891/image/pfnigwfume2cvchveid7.jpg', '2024-02-12 06:16:23', '2024-02-12 06:16:23'),
(2, 'test', 'testing', '2024-02-17 00:00:00', '2024-02-20 00:00:00', 0, NULL, '2024-02-12 06:20:30', '2024-02-12 06:20:30'),
(3, 'test', 'testing', '2024-02-17 00:00:00', '2024-02-20 00:00:00', 0, 'http://res.cloudinary.com/dxsaqdiy7/image/upload/v1707718891/image/pfnigwfume2cvchveid7.jpg', '2024-02-12 06:21:34', '2024-02-12 06:21:34'),
(4, 'test', 'testing', '2024-02-17 00:00:00', '2024-02-20 00:00:00', 0, 'http://res.cloudinary.com/dxsaqdiy7/image/upload/v1707719570/image/e66uuqtcvzj2tpt5vhkd.jpg', '2024-02-12 06:32:53', '2024-02-12 06:32:53'),
(5, 'test2', 'testing', '2024-02-17 00:00:00', '2024-02-20 00:00:00', 0, 'http://res.cloudinary.com/dxsaqdiy7/image/upload/v1707719844/image/gmsittkky7j4lfxef9zw.jpg', '2024-02-12 06:37:28', '2024-02-12 06:37:28'),
(6, 'test2', 'testing', '2024-02-17 00:00:00', '2024-02-20 00:00:00', 0, 'http://res.cloudinary.com/dxsaqdiy7/image/upload/v1707720066/image/ymfkaibj7j9ke10j1i1j.jpg', '2024-02-12 06:41:09', '2024-02-12 06:41:09'),
(7, 'test2', 'testing', '2024-02-17 00:00:00', '2024-02-20 00:00:00', 0, 'http://res.cloudinary.com/dxsaqdiy7/image/upload/v1707723577/image/sevnswpi3qwivsqsbi8s.jpg', '2024-02-12 07:39:41', '2024-02-12 07:39:41'),
(8, 'test7', 'test7', '2024-02-12 00:00:00', '2024-02-17 00:00:00', 0, 'http://res.cloudinary.com/dxsaqdiy7/image/upload/v1707723708/image/mchrd3y1fbwultjldkbo.jpg', '2024-02-12 07:41:52', '2024-02-12 07:41:52');

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
('20240206074239-create-employees.js'),
('20240208130618-create-projects.js'),
('20240208130834-create-team-projects.js');

-- --------------------------------------------------------

--
-- Table structure for table `teamprojects`
--

CREATE TABLE `teamprojects` (
  `id` int(11) NOT NULL,
  `employeeId` int(11) DEFAULT NULL,
  `projectId` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teamprojects`
--

INSERT INTO `teamprojects` (`id`, `employeeId`, `projectId`, `name`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'testing', 'test', '2024-02-12 03:26:00', '2024-02-12 03:26:00'),
(2, 1, 4, 'test2', 'ea', '2024-02-12 07:06:20', '2024-02-12 07:06:20');

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
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `teamprojects`
--
ALTER TABLE `teamprojects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `teamprojects`
--
ALTER TABLE `teamprojects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
