-- Create a database in MySQL workbench (right click, create schema, double click to select the new db)
-- Drop all tables to start fresh
DROP TABLE IF EXISTS instructors;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS team_student;
DROP TABLE IF EXISTS course_student;

-- TABLES
-- Create instructors table
CREATE TABLE instructors (
	i_id INT AUTO_INCREMENT PRIMARY KEY,
    i_name VARCHAR(50) NOT NULL,
    i_email VARCHAR(50) UNIQUE NOT NULL,
    i_password VARCHAR(50) NOT NULL
);

-- Create students table
CREATE TABLE students (
    s_id INT AUTO_INCREMENT PRIMARY KEY,
    s_name VARCHAR(50) NOT NULL,
    s_email VARCHAR(50) UNIQUE NOT NULL,
    s_password VARCHAR(50) NOT NULL
);

-- Create courses table
CREATE TABLE courses (
    c_id INT AUTO_INCREMENT PRIMARY KEY,
    c_name VARCHAR(50) UNIQUE NOT NULL,
    instructor_id INT NOT NULL,
    FOREIGN KEY (instructor_id) REFERENCES instructors(i_id)
);

-- Create teams table
CREATE TABLE teams (
    t_id INT AUTO_INCREMENT PRIMARY KEY,
    t_name VARCHAR(50) NOT NULL,
    course_id INT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(c_id)
);

-- RELATIONS
-- Create team_student relation
CREATE TABLE team_student (
    team_id INT NOT NULL,
    student_id INT NOT NULL,
    FOREIGN KEY (team_id) REFERENCES teams(t_id),
    FOREIGN KEY (student_id) REFERENCES students(s_id),
    -- Make sure student is not added twice to a team
    UNIQUE(team_id, student_id)
);    

-- Create course_student relation
CREATE TABLE course_student (
    course_id INT NOT NULL,
    student_id INT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(c_id),
    FOREIGN KEY (student_id) REFERENCES students(s_id),
    -- Make sure student is not added twice to a course
    UNIQUE(course_id, student_id)
);