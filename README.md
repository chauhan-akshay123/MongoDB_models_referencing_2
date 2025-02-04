# MongoDB Models Referencing

This project demonstrates how to establish **referenced relationships** between MongoDB models using **Mongoose** in a Node.js application.

## 📌 Features
- Author and Book models with referencing (`author` in `Book` refers to `Author`).
- MongoDB connection using Mongoose.
- CRUD operations for `Author` and `Book` models.
- Populating referenced documents.

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository  
```
git clone https://github.com/chauhan-akshay123/MongoDB_models_referencing.git
cd MongoDB_models_referencing
```

### 2️⃣ Install Dependencies
``` npm install ```

### 3️⃣ Create a .env File
 - Inside the project root, create a .env file and add your MongoDB connection string
 - " MONGODB=mongodb+srv://<your-username>:<your-password>@cluster.mongodb.net/<database-name>?retryWrites=true&w=majority"

### 4️⃣ Run the Project
``` node index.js ```

--- 

### 📌 Usage
### 1️⃣ Add a Author
 - Calls a function to create and store a author in the database.
### 2️⃣ Add a Book
 - Creates a post with an Book reference to an existing author.
### 3️⃣ Fetch All Books with Author Info
 - Uses ```.populate("author")``` to retrieve books along with author details.  
 
 
