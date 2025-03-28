# Pokémon Figurines E-Commerce Application 🛒
A full-stack e-commerce web application built to sell Pokémon figurines. Created using React for the frontend, Spring Boot and Java for the backend, and MySQL Workbench with JPA for database management.

# 🚀 Project Overview
This project is designed as an e-commerce platform specifically for Pokémon enthusiasts. Users can browse, select, and purchase Pokémon figurines, while administrators can manage products via an admin panel. The application leverages modern web development tools and frameworks, offering a seamless user experience.

# 📚 Tech Stack
Frontend:

React.js

Axios (HTTP Requests)

React Router (Routing)

CSS

Backend:

Java (Spring Boot)

JPA & Hibernate (ORM)

REST APIs

Database:

MySQL Workbench

# 🌟 Features
User Authentication (Registration, Login, Logout)

Product Browsing by Categories

Product Details and Stock Indicators

Shopping Cart Functionality (Add/Remove products, Quantity management)

Admin Panel (Manage Products - Create, Update, Delete)

Image Upload and Management

Responsive and User-friendly Interface

# 👥 Team Contributions
The project was collaboratively developed with clear roles:

Team Members	Responsibilities
Javeria	Primarily responsible for Frontend Development (React components, pages, styling, UI/UX).
Samuel	Primarily responsible for Backend Development (Spring Boot, REST APIs, Database setup and management, business logic implementation).
Promodi (Me)	Worked extensively in connecting Frontend and Backend, integration, debugging, issue resolution, and assisting both frontend and backend developers.

# ⚙️ Installation and Setup
🗃️ Database (MySQL Workbench)
Install and set up MySQL Workbench.

Create a database named pokemon_shop (or your preferred name).

Configure the database connection details in the backend's application.properties file.

Example:

spring.application.name=final-project
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/pokemart
spring.datasource.username=root
spring.datasource.password= write down your workbench password
spring.jpa.show-sql = true
spring.jpa.hibernate.ddl-auto = update
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQLDialect
spring.web.resources.static-locations=file:/// + absolute image upload file path in the main final_project folder 

🖥️ Backend (Spring Boot)
Clone the repository:

bash
Copia
Modifica
git clone <your_repository_link>
Open the project in your IDE (IntelliJ/Eclipse).

Start the Spring Boot application (FinalProjectApplication.java).

🎨 Frontend (React)
Navigate to the React app directory:


cd frontend

Install dependencies:

npm install
Run the frontend:

npm start
The application will run locally on http://localhost:3000.

# 📩 Contact
For any questions, issues, or collaboration inquiries, feel free to contact:

Promodi Colambage: promodic24@yahoo.it

Samuel Richardson: 

Javeria Khan: 
