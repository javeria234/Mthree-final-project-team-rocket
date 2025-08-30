# 🛒 Pokémon Figurines E-Commerce Application 
A full-stack e-commerce web application built to sell Pokémon figurines. Created using React for the frontend, Spring Boot and Java for the backend, and MySQL Workbench with JPA for database management.

# 🚀 Project Overview
This project is designed as an e-commerce platform specifically for Pokémon enthusiasts. Users can browse, select, and purchase Pokémon figurines, while administrators can manage products via an admin panel. The application leverages modern web development tools and frameworks, offering a seamless user experience.

# 📚 Tech Stack
Frontend:
- React.js

- Axios (HTTP Requests)

- React Router (Routing)

- CSS

Backend:
- Java (Spring Boot)

- JPA & Hibernate (ORM)

- REST APIs

Database:
- MySQL Workbench

🌟 Features
- User Authentication (Login, Logout)

- Product Browsing by Categories

- Product Details and Stock 

- Shopping Cart Functionality (Add/Remove products, Quantity management)

- Admin Panel (Manage Products - Create, Update, Delete)

- Image Upload and Management

- Responsive and User-friendly Interface

⚙️ Installation and Setup

🗃️ Database (MySQL Workbench)

1. Install and set up MySQL Workbench.

2.Create a database named pokemart.

3. Configure the database connection details in the backend's application.properties file once the repository has been cloned.

### 🗃️ Backend Configuration (`application.properties`)
```properties
spring.application.name=final-project
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/pokemart
spring.datasource.username=root
spring.datasource.password=YOUR_WORKBENCH_PASSWORD
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.web.resources.static-locations=file:/// + absolute image upload file path in the main final_project folder

# 🖥️ Backend (Spring Boot)

1. Clone the repository:

git clone https://github.com/theacademy/final-project-team-rocket.git

2. Open the project in your IDE (IntelliJ/Eclipse).
3. Start the Spring Boot application (FinalProjectApplication.java).



🎨 Frontend (React)

1. Navigate to the React app directory:

   cd PokeMart

2. Install dependencies:

  npm install

3. Run the frontend:

  npm start

The application will run locally on http://localhost:3000.
