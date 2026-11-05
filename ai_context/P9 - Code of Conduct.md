These conventions are here to help us keep our code organised, consistent and easy to understand.

They are guidelines for working together, not a test of anyone's programming abilities. We are all learning, and mistakes are expected\!

The goal is to make collaboration easier, reduce confusion and help everyone feel comfortable contributing to the project.

If something is unclear or difficult to follow, we can discuss it and adjust the conventions together.

## Code Formatting Conventions:

### Backend:

- Use the shared `.editorconfig` file.   
- Rider formatting: Automatically formats C\# code according to our rules.  
- .editorconfig: Defines shared C\# formatting rules.

### Frontend:

- Install `ESLint` and `Prettier`   
- ESLint: Checks for potential errors and code quality issues.  
- Prettier: Automatically formats JavaScript/TypeScript code.

**Rules:**

* Use the agreed formatting settings.  
* Format code before committing.  
* Address relevant linting warnings and errors before merging.

## 

## Git Conventions:

### Git Branch Naming:

Branches should follow a consistent naming structure:

`type/area/page/short-description`

For example:

| Type | Purpose | Example |
| :---- | :---- | :---- |
| feature/ | Creating new features/new functionality | feature/frontend/homepage/add-profile-picture |
| fix/ | Bug fixes | fix/frontend/homepage/fix-profile-picture |
| refactor/ | Restructuring existing code | refactor/frontend/completion-page/remove-unused-code |
| docs/ | Documenting code | docs/backend/login-page/add-documentation |
| test/ | Testing code | test/frontend/task-page/test-submit-task |
| chore/ | Configuration/maintenance | chore/backend/update-dependencies |

**Naming Rules:**

- Use lowercase letters and hyphens (`-`) between words.  
- Use forward slashes (`/`) to separate the type, area, page and description.  
- **Type:** What kind of work is being done?  
- **Area:** Where is the work being done? (`frontend`, `backend`, `db`)  
- **Page:** Which page or feature is being worked on?  
- **Description:** What is being changed?  
- The page can be omitted if it is not relevant.  
- For backend work, the page can instead describe the relevant functionality, e.g. `feature/backend/lessons/add-get-endpoint`.

**Git Rules:**

- Keep branch names short but descriptive.  
- Create separate branches for independent tasks.  
- **Do not push directly to `main`.**  
- Merge changes through pull requests after review.  
- At least one person outside the development team responsible for the change must review the pull request.  
  * Even a quick 10-minute review is better than no review\! The goal is to help each other and share knowledge, not to expect everyone to be an expert.

\-----------------------------------------------------------------------------------------------------------------------------

### Git Commit Messages

Commit messages should be short, descriptive and explain what has changed.

Use the following structure:

`type: short description`

| Type | Purpose | Example |
| :---- | :---- | :---- |
| feature: | Adding new functionality | feature: add lesson completion endpoint |
| fix: | Fixing bugs | fix: correct xp calculation |
| refactor: | Improving existing code | refactor: simplify user service |
| docs: | Updating documentation | docs: document lesson controller |
| test: | Adding or updating tests | test: add lesson service tests |
| chore: | General maintenance | chore: update dependencies |

**Rules:**

- Use lowercase letters.  
- Keep messages short but descriptive.  
- Explain what changed, rather than simply writing ‘updated code’ or ‘fixed stuff’.  
- Use the same commit message types consistently throughout the project.  
- Commit related changes together where possible.

The goal is to make it easy for everyone to understand the project's history and identify what has changed.

**Note:** Pull requests should include a short description of the changes and anything reviewers should pay particular attention to.

\-----------------------------------------------------------------------------------------------------------------------------

### Pull Requests and Code Reviews

- Include a short description of the changes and link the relevant Jira issue.  
- Keep pull requests focused on one task or feature.  
- Make sure the code works before requesting a review.  
- At least one group member **not involved in the changes** must review and approve before merging.  
- Reviewers should check for obvious errors, readability and whether the code works as intended.  
- Resolve merge conflicts and address review comments before merging into `main`.

**Remember:** Code reviews are about helping each other, not judging anyone's abilities. You don't need to be an expert\!

## Definition of Done (DoD)

The Definition of Done is a shared checklist that helps us agree on when a development task is considered complete.

A task can be moved to **Done** in Jira when:

- [ ] The task meets its acceptance criteria (where applicable).  
- [ ] The functionality has been tested and works as expected.  
- [ ] The code follows our agreed coding conventions.  
- [ ] Relevant documentation has been updated, if necessary.  
- [ ] The code has been reviewed and approved by at least one group member who did not work on the changes.  
- [ ] The changes have been merged into `main`.

**Note:** The Definition of Done should be agreed upon by the group and can be adjusted as we learn more throughout the project.

## Backend Conventions:

### Naming Conventions:

Follow standard Microsoft C\# naming conventions:

![][image1]

### Documentation and Comments

Use **C\# XML documentation comments**, following principles similar to JavaDoc.

- Use `///` for XML documentation comments.  
- Document public classes and methods where their purpose or behaviour is not immediately obvious.  
- Use `<summary>` to describe functionality.  
- Use `<param>` to describe parameters when clarification is needed.  
- Use `<returns>` to describe return values when clarification is needed.  
- Use `<exception>` to document important exceptions where relevant.  
- Use ordinary `//` comments to explain complex logic or decisions.  
- Avoid comments that simply repeat what the code already says.  
- Update documentation when changing the corresponding functionality.

### Backend Architecture:

- Separate controllers, services, entities and database access responsibilities.  
- Controllers should handle HTTP requests and responses.  
- Services should contain business logic.  
- EF Core used to handle database access, repositories and entity mapping.  
- Use appropriate HTTP methods and status codes.

## Frontend Conventions:

### Naming Conventions:

![][image2]

### Documentation and Comments:

Use **JSDoc or TSDoc-style comments**, depending on whether JavaScript or TypeScript is selected.

- Document reusable functions, hooks and components when their purpose or usage is not obvious.  
- Use `/** ... */` for documentation comments.  
- Describe parameters and return values where useful.  
- Use inline comments for complex logic.  
- Avoid unnecessary comments explaining obvious JSX or JavaScript syntax.  
- Keep comments updated when changing functionality.

### React Conventions:

- Use functional components and React Hooks.  
- Keep components small and focused.  
- Extract reusable UI elements into shared components.  
- Separate API communication from presentation components where practical.  
- Avoid duplicating application state unnecessarily.  
- Use consistent styling conventions.  
- Handle loading states, errors and empty data states.  
- Ensure interactive elements are accessible.

## Database Conventions:

### Naming Conventions:

![][image3]  
C\# entity properties should still follow C\# naming conventions, e.g. `LessonId`. EF Core can map these to database column names. 

### Database Development:

- Use Entity Framework Core for database access.  
- Manage schema changes through EF Core migrations.  
- Do not modify shared database schemas manually without coordinating with the group.  
- Define appropriate primary keys, foreign keys and relationships.  
- Use appropriate data types and constraints.  
- DB will be hosted on Aiven (for free), instead of locally on each device.

### Queries and Data Access

- Prefer EF Core LINQ queries for standard database operations.  
- Avoid unnecessary database queries.  
- Use parameterised queries when raw SQL is necessary.  
- Do not place database queries directly in React components.  
- Keep database access within the backend.

# **Development Setup – Installation and Project Guide**

This guide explains how to install the required software, download our project and run it locally.

**The initial setup only needs to be completed once per computer.**

## **1\. Required Software**

Install the following software before starting:

- [x] ~~**Git** – Version control. (check with git –version)~~  
  ~~[https\://git-scm.com/install/](https://git-scm.com/install/)~~  
- [x] ~~**GitHub Desktop** – Manage Git branches, commits and pull requests through a graphical interface.~~  
  ~~[https\://desktop.github.com/download/](https://desktop.github.com/download/)~~  
- [x] ~~**JetBrains Rider** – C\# backend development.~~  
  ~~[https\://www\.jetbrains.com/rider/download/](https://www.jetbrains.com/rider/download/)~~  
- [x] ~~**.NET 10 SDK** – Required to build and run our ASP.NET Core backend. Install the SDK, not just the runtime. (dotnet –version)~~  
  ~~[https\://dotnet.microsoft.com/en-us/download](https://dotnet.microsoft.com/en-us/download)~~  
- [x] ~~**Visual Studio Code** – React frontend development.~~  
  ~~[https\://code.visualstudio.com/download](https://code.visualstudio.com/download)~~  
- [x] ~~**Node.js (LTS)** – Includes npm, which manages frontend dependencies. (check with node \-v )~~  
  ~~[https\://nodejs.org/en/download](https://nodejs.org/en/download)~~

**Important:** Install the appropriate Windows or macOS version of each application.

### **Optional Software**

- [ ] **MySQL Workbench** – View database tables and execute SQL queries. MySQL Server does not need to be installed locally.

### **VS Code Extensions (Frontend)**

Install these extensions in VS Code:

- [x] ~~**ESLint** – Highlights JavaScript/TypeScript errors and code quality issues.~~  
- [x] ~~**Prettier – Code formatter** – Automatically formats code according to our shared rules.~~

### **Rider (Backend)**

- [x] ~~Check that EditorConfig support is enabled.~~  
- [x] ~~Enable automatic code formatting.~~  
- [x] ~~Make sure Rider detects the installed .NET SDK.~~

---

## **2\. GitHub Setup**

1. Install and open GitHub Desktop.  
2. Sign in to GitHub Desktop using your GitHub account.  
3. Accept the invitation to our GitHub repository.

**Note:** Our repository is public, but you need collaborator access to push changes.

### **Clone the Repository**

*Cloning means downloading a copy of our GitHub repository onto your computer.*

1. Open our GitHub repository in your browser.  
2. Click the green **Code** button.  
3. Select **Open with GitHub Desktop**.  
4. Choose where to save the repository on your computer.  
5. Click **Clone**.

You now have a local copy of the project\!

Our repository contains both the frontend and backend:

P9Project/

* backend/ – ASP.NET Core / C\#  
* frontend/ – React / TypeScript  
* README.md  
* .gitignore

**Important:** Do not download the project as a ZIP file. Clone it using GitHub Desktop so you can pull and push changes.

---

## **3\. Backend Setup – C\# / ASP.NET Core**

### **Open the Backend in Rider**

1. Open JetBrains Rider.  
2. Select **Open**.  
3. Navigate to your cloned repository.  
4. Open `backend/Eurowind.Backend.csproj`.  
5. Allow Rider to load the project and restore any required dependencies.

### **Configure HTTPS**

After installing the .NET SDK, open a terminal.

Run:

`dotnet dev-certs https --trust`

* Accept the certificate trust prompt.  
* This works on Windows and macOS.  
* It only needs to be done once per computer under normal circumstances.  
* The certificate allows the backend to run locally using HTTPS.

**Note:** The HTTPS launch configuration is shared through GitHub, but each developer must trust their own local development certificate.

### **Install Backend Dependencies**

Open a terminal inside the `backend/` folder.

Run:

`dotnet restore`

This downloads the project's required .NET packages.

### **Start the Backend**

Run:

`dotnet run`

Alternatively, use Rider's green **Run** button.

If using Rider's Run button, select the HTTPS launch profile.

### **Verify That It Works**

Open Swagger UI in your browser:

[https\://localhost:7045/swagger/index.html](https://localhost:7045/swagger/index.html)

You should see our API documentation and available endpoints.

**Note:** If the backend uses a different port, use the HTTPS address displayed in the terminal.

To stop the backend, press `Ctrl + C` in the terminal or use Rider's Stop button.

---

## **4\. Frontend Setup – React \+ TypeScript**

Our frontend uses **React, TypeScript, Vite and Material UI**.

The frontend project has already been created. You do not need to create another React project.

### **Open the Frontend**

1. Open Visual Studio Code.  
2. Select **File → Open Folder**.  
3. Navigate to the cloned repository.  
4. Open the `frontend/` folder.

### **Install Frontend Dependencies**

Open a terminal in VS Code using **Terminal → New Terminal**.

Make sure the terminal is inside the `frontend/` folder.

Run:

`npm ci`

This installs the dependencies specified in our shared `package-lock.json`.

It includes React, TypeScript, Vite, Material UI and our other frontend dependencies.

**Note:** You do not need to install these packages globally.

### **Start the Frontend**

Run:

`npm run dev`

The terminal will display a local address, usually:

[http\://localhost:5173](http://localhost:5173)

Open this address in your browser.

You should see our React application\!

### **Everyday Frontend Development**

* Run `npm run dev` to start the frontend.  
* Changes to React components will automatically appear in the browser.  
* Press `Ctrl + C` to stop the development server.  
* Follow our shared ESLint and Prettier formatting rules.  
* Do not commit `node_modules/` or generated build files.

---

## **5\. Database Setup – Aiven MySQL and Entity Framework Core**

Our project uses **Aiven MySQL 8.4** as a shared development database.

The backend connects to MySQL using **Entity Framework Core (EF Core)** and the Pomelo MySQL provider.

Everyone connects to the same database, so there is no need to install MySQL Server locally.

### **5.1 Access the Shared Database**

1. Create an account mat Aiven.  
2. Accept the invitation to our shared Aiven project.  
3. Open the MySQL service.  
4. Find the **Connection information** section.  
5. Locate the following details:  
   * Host  
   * Port  
   * Database name  
   * Username  
   * Password  
   * SSL/TLS settings

Ask a group member if you cannot access the shared database.

### **5.2 Configure Your Local Connection**

Each developer must configure their own connection string.

The backend uses **.NET User Secrets** to store database credentials outside the Git repository.

Open Rider and navigate to the `backend/` folder.

Run:

`dotnet user-secrets set "ConnectionStrings:AivenMySql" "Server=YOUR_HOST;Port=YOUR_PORT;Database=defaultdb;User=YOUR_USERNAME;Password=YOUR_PASSWORD;SslMode=Required;"`

Replace the placeholders (YOUR\_HOST ,  YOUR\_PORT , YOUR\_USERNAME , YOUR\_PASSWORD) with the connection details from Aiven.

**Important:** The connection string is saved locally. Do not add database passwords to files committed to GitHub.

### **5.3 Verify the Database Configuration**

The backend already contains:

* `Config/AppDbContext.cs` – Our EF Core database context.  
* `Program.cs` – Registers the MySQL database connection.  
* `Eurowind.Backend.csproj` – Contains the required EF Core and MySQL packages.

These files are shared through GitHub.

You do not need to create them again.

Run:

`dotnet restore`

Then start the backend:

`dotnet run`

The application should start without database configuration errors.

**Note:** Successfully starting the backend does not necessarily confirm that it can connect to MySQL. A database connection must be tested separately when needed.

### **5.4 Install EF Core Migration Tools**

EF Core migrations allow us to manage database tables using C\# entities.

Install the command-line tool:

`dotnet tool install --global dotnet-ef --version 9.0.0`

Verify the installation:

`dotnet ef --version`

Expected version: `9.0.0`.

If Windows cannot find the command, ensure the following directory is included in your user PATH:

`%USERPROFILE%\.dotnet\tools`

Restart Rider after changing PATH.

### **5.5 Verify Entity Framework Core**

Inside the `backend/` folder, run:

`dotnet ef dbcontext list`

Expected output:

`Eurowind.Backend.Config.AppDbContext`

This confirms that EF Core recognises our database context.

### **5.6 Important Database Rules**

* Never commit database passwords or credentials to GitHub.  
* Store local credentials using .NET User Secrets.  
* Use EF Core migrations to manage database structure changes.  
* Only designated group members should apply migrations to the shared database.  
* Coordinate database changes with the rest of the group.  
* Remember that changes to shared tables and data can affect everyone.

**Important:** Do not run `dotnet ef database update` without coordinating with the group. This command applies migrations to the shared database.

---

## **6\. GitHub Desktop – Everyday Workflow**

We use GitHub Desktop to manage our Git repository.

**All development must happen on a separate branch. Never work directly on `main`.**

### **Before Starting a Task**

1. Open GitHub Desktop.  
2. Select our repository.  
3. Switch to the `main` branch.  
4. Click **Fetch origin**.  
5. If updates are available, click **Pull origin**.  
6. Select **Branch → New Branch**.  
7. Give your branch a name following our Git conventions.

Example:

`feature/frontend/dashboard/add-progress-bar`

8. Click **Create Branch**.

You can now start working on your task\!

**Important:** If you're working in a programming team, agree on who will create and manage the shared branch before starting.

### **Saving Your Changes (Commit)**

When you've made changes:

1. Save your files in Rider or VS Code.  
2. Make sure your code works.  
3. Open GitHub Desktop.  
4. Review the changed files.  
5. Write a short, descriptive commit message.

Example:

`feature: add progress bar`

6. Click **Commit to \[branch name\]**.

Your changes are now saved in your local Git history.

### **Uploading Changes (Push)**

After committing:

1. Click **Push origin** in GitHub Desktop.  
2. Your changes will be uploaded to your branch on GitHub.

**Remember:**

* **Commit:** Saves changes locally.  
* **Push:** Uploads committed changes to GitHub.  
* **Pull:** Downloads changes from GitHub.  
* **Fetch:** Checks for changes on GitHub without applying them.

### **Creating a Pull Request**

When your task is ready:

1. Push your latest changes to GitHub.  
2. In GitHub Desktop, select **Create Pull Request**.  
3. GitHub will open in your browser.  
4. Make sure the base branch is `main`.  
5. Add a short description of your changes.  
6. Link the relevant Jira issue.  
7. Request a review from someone outside your programming team.  
8. Wait for approval before merging.

**Important:** At least one person who did not participate in developing the changes must approve the pull request.

Code reviews are about helping each other and sharing knowledge, not judging anyone's programming abilities.

### **After Your Pull Request Is Merged**

1. Open GitHub Desktop.  
2. Switch back to `main`.  
3. Click **Fetch origin**.  
4. Click **Pull origin** to download the latest changes.  
5. Create a new branch for your next task.

---

## **7\. Working in Programming Teams**

We will work in teams of 2–3 people, with members potentially rotating throughout the project.

When working together:

* Agree on which Jira task you're working on.  
* Use a shared feature branch for the task.  
* Coordinate before pushing changes to avoid conflicts.  
* Regularly fetch and pull changes made by teammates.  
* Make sure everyone understands the changes before requesting a review.  
* Request a reviewer who was not involved in developing the feature.

**Important:** GitHub cannot automatically identify our rotating programming teams. We are responsible for choosing an independent reviewer.

---

## **8\. Final Setup Checklist**

Before starting development, make sure:

* GitHub Desktop is installed and connected to your account.  
* You have accepted the repository invitation.  
* You have cloned the repository.  
* You can open the backend in Rider.  
* The .NET SDK is installed.  
* You have trusted the HTTPS development certificate.  
* You can run the backend successfully.  
* Swagger UI opens in your browser.  
* You can open the frontend in VS Code.  
* Node.js and npm are installed.  
* You have installed the frontend dependencies.  
* You can run the React application.  
* ESLint and Prettier are installed in VS Code.  
* You understand how to create a branch, commit and push changes using GitHub Desktop.

**Database setup:** Complete the Aiven configuration once the backend integration is ready.

If something doesn't work, ask another group member for help before making major configuration changes.

---

## **9\. Useful Commands**

**Backend (run inside `backend/`)**

`dotnet restore` – Install backend dependencies.

`dotnet run` – Start the backend.

`dotnet dev-certs https --trust` – Trust the local HTTPS certificate.

**Frontend (run inside `frontend/`)**

`npm ci` – Install frontend dependencies.

`npm run dev` – Start the frontend.

`npm run build` – Check the TypeScript build and create production files.

`npm run lint` – Check frontend code for linting issues.

**Remember:** You need to run the frontend and backend separately during local development.

# Proposed Architecture:

## Backend Development:

- C\# as main backend programming language

- [ASP.NET](http://ASP.NET) CORE  
  - Framework for building our REST API.  
  - Similar to Spring Boot in Java.

- Entity Framework Core (EF Core) (similar to JPA for Java)  
  - Object-Relational Mapper (ORM), similar to JPA/Hibernate in Java.  
  - Maps C\# classes to database tables.  
  - Allows us to query and modify database records using C\# and LINQ instead of writing SQL for most operations.  
  - Supports database schema changes through migrations.  
    Ex without EF Core:  
    ![][image4]  
    Ex with EF Core:  
    ![][image5]

    
- OpenApi and Swagger (and Swagger UI)  
  - OpenAPI: A standard for describing our API endpoints.  
  - Swagger UI: Interactive webpage for viewing and testing our API endpoints.  
  - Helps frontend and backend developers understand how to communicate with the API.

## Frontend Development:

- React  
- TypeScript?? Or just JavaScript? TypeScript might be too much for us to learn on top of everything else, but it also might be one of our last chances to try it.  
- [MaterialUI](https://mui.com/material-ui/) for pre-built component designs  
  - React component library with pre-built components such as buttons, forms and navigation.  
  - Helps us create a consistent design without building every component from scratch.

## DB:

- MySQL  
  - Relational database management system used to store application data.   
- SQL  
  - EF Core will generate most SQL queries automatically, but we can write SQL ourselves when necessary.  
- Aiven  
  - Cloud platform hosting our shared MySQL development database.  
  - Allows all group members to connect to the same database.

![][image6]

## API:

API stands for Application Programming Interface.

An API is a way for one piece of software to interact with another through a defined set of rules.

Our React frontend will communicate with our backend through the API. For example, when a user finishes a course and gains XP, our frontend will tell our backend, through an API, to update the user’s XP.

So, our React frontend would send a HTTP request to get all lessons, which would look like this:  
`GET /api/lessons`  
Then, our backend would receive this request, retrieve the lessons and return a response.  
Then, React uses this data to display the lessons on the screen, for example.

(APIs can also be interfaces between libraries, operating systems and other software components.)

### 

### API Endpoints:

An endpoint is a specific address and HTTP method combination that your API exposes.   
Examples:  
![][image7]

![][image8]

### Controller-based API’s vs Minimal API’s:

Both are ways of creating HTTP endpoints in ASP.NET Core.

The main difference is how you organise and define those endpoints.

Controllers use classes and attributes; Minimal APIs map endpoints directly 

Controller-based API

You organise related endpoints into controller classes. Each method in a controller can handle a different HTTP request.

This is what we used in Spring Boot in P8. When scaling, this can be better. Also, because we will have lots of controllers

Minimal API

You define endpoints directly using methods like `MapGet()` and `MapPost()`, without needing controller classes.

## **HTTP Status Codes**

When our frontend sends a request to the backend, the backend responds with an **HTTP status code**.

This tells the frontend whether the request was successful or if something went wrong.

![][image9]

## **JSON (JavaScript Object Notation)**

JSON is a common format for sending data between the frontend and backend.

Even though our backend uses C\# and our frontend uses React, they can communicate using JSON.

**Example:**

Our frontend requests a lesson:

`GET /api/lessons/5`

The backend might respond with:

{

  "id": 5,

  "title": "Introduction to Prompting",

  "xpReward": 100,

  "completed": false

}

React can then use this information to display the lesson.

JSON stores data using **key-value pairs**, such as `"title": "Introduction to Prompting"`.

## **DTOs (Data Transfer Objects)**

A DTO is an object used to **transfer data between different parts of an application**, often between the backend and frontend.

DTOs allow us to control exactly what information our API sends or receives.

For example, our database might store lots of information about a user, but the frontend only needs their name and XP.

Instead of sending the entire user object, we can create a DTO:

public class UserDto

{

    public string Name { get; set; }

    public int TotalXp { get; set; }

}

The backend can then return only the information the frontend needs.

**Why use DTOs?**

* Avoid sending unnecessary or sensitive information.  
* Keep API responses simple.  
* Separate database entities from the data exposed through the API.

## **Dependency Injection (DI)**

Dependency Injection is a way of **giving a class the objects it needs**, instead of making the class create those objects itself.

For example, our `LessonController` needs a `LessonService` to retrieve lessons.

Without Dependency Injection, the controller would need to create the service itself.

With Dependency Injection, ASP.NET Core provides the service automatically.

**Example:**

public class LessonController : ControllerBase

{

    private readonly LessonService \_lessonService;

    public LessonController(LessonService lessonService)

    {

        \_lessonService \= lessonService;

    }

}

Here, `LessonService` is passed into the controller through its constructor.

ASP.NET Core can create and provide this service once we register it in our application configuration.

**Why use DI?**

* Classes are less dependent on how other objects are created.  
* Makes code easier to maintain and test.  
* Helps separate responsibilities.

This is similar to Dependency Injection in Spring Boot.

## **LINQ (Language Integrated Query)**

LINQ allows us to **query and work with data using C\#**, instead of writing SQL for every database operation.

It can be used with lists, collections and databases through EF Core.

For example, imagine we want to retrieve all lessons that give more than 50 XP.

**Using SQL:**

SELECT \* FROM Lessons

WHERE XpReward \> 50;

**Using LINQ with EF Core:**

var lessons \= await \_context.Lessons

    .Where(lesson \=\> lesson.XpReward \> 50\)

    .ToListAsync();

Both examples retrieve lessons with an XP reward greater than 50\.

When using EF Core, LINQ queries like this are translated into SQL and executed against our MySQL database.

**Why use LINQ?**

* Write database queries using C\#.  
* Get autocomplete and type checking.  
* Work with data without manually converting SQL results into C\# objects.

We can still write SQL directly when necessary.

How C\# compares to Java:

![][image10]

- **The .NET runtime** is comparable to the JVM in Java. Both provide an environment for running applications.  
- **.NET** is the broader development platform, while C\# is the programming language.  
- In modern ASP.NET Core applications, `Program.cs` is typically used to configure and start the application. This is similar to the role of the Java application's `main()` method.  
- A `.csproj` file defines project settings and dependencies, similar to the role of `pom.xml` in Maven.

![][image11]

Our application will follow this general flow:

**React Frontend → ASP.NET Core Controller → C\# Service → Entity Framework Core → MySQL (Aiven)**

1. **React:** Sends an HTTP request when an employee completes a lesson.  
2. **Controller:** Receives the request and passes it to the appropriate service.  
3. **Service:** Checks lesson completion and calculates the XP earned.  
4. **EF Core:** Reads and updates the relevant database records.  
5. **MySQL (Aiven):** Stores the employee's progress and earned XP.

The backend then returns a response to React, which updates the information displayed to the employee.

### **C\# Data Types**

C\# is a **strongly and statically typed language**. This means that every variable and expression has a type, which is checked at compile time.

However, we don't always need to explicitly write the type. C\# can often determine it automatically using `var`.

For example, both of these declare an integer variable:

int xp \= 100;  
var xp \= 100;

In the second example, C\# automatically infers that `xp` is an `int`.

**Note:** `var` does not mean the variable can change types later. Its type is still determined at compile time.

![][image12]

## Frontend:

| Folder | Purpose | Example |
| ----- | ----- | ----- |
| `components/` | Reusable UI elements | `LessonCard.tsx` |
| `pages/` | Application pages | `Dashboard.tsx` |
| `services/` | Communication with backend API | `lessonService.ts` |
| `hooks/` | Reusable React hooks | `useProgress.ts` |
| `styles/` | Shared CSS | `global.css` |
| `assets/` | Images and icons | `logo.svg` |

### **Database Migrations (EF Core)**

We use **Entity Framework Core migrations** to keep our MySQL database structure consistent with our C\# entities.

**1\. Create a migration**

```
dotnet ef migrations add MigrationName
```

*   
  Run when you add or modify entities, properties, or relationships that affect the database structure.  
* Generates migration files describing the required database changes.  
* Use a descriptive name, e.g. `AddEmployeeLevel` or `InitialCreate` (for the first migration).  
* Commit migration files to GitHub alongside your code changes.

**2\. Apply migrations**

```
dotnet ef database update
```

*   
  Applies pending migrations to the database.  
* Updates the database structure to match the migrations.  
* Does not need to be run if no new migrations exist.

**Team rules:**

* Always review generated migrations before committing them.  
* Never delete or modify existing migrations that have already been applied to our shared database without team agreement.  
* Since we share one Aiven MySQL database, **coordinate who applies migrations** to avoid conflicts.  
* Do not run `database update` against the shared database from an unmerged feature branch.

# **React & TypeScript — A Beginner's Guide**

*A practical introduction using our Eurowind login page as an example.*

## **1\. What is a React component?**

A **component** is a reusable piece of the user interface (UI).

In React, components are usually functions that return JSX — code that looks similar to HTML.

```
function Welcome() {
  return <h1>Welcome to Eurowind!</h1>
}
```

We can then use this component elsewhere:

```
<Welcome />
```

For our project, we might have components such as `Login`, `Home`, `Lesson` and `Feedback`.

**Remember:** A component describes what should appear on the screen.

---

## **2\. What is a hook?**

A **hook** is a special React function that lets components use React features, such as remembering information.

One of the most common hooks is `useState`.

### **useState — remembering information**

Imagine someone types their email into our login page. React needs to remember what they typed.

```
const [email, setEmail] = useState('')
```

| Part | Meaning |
| ----- | ----- |
| `email` | The current stored value |
| `setEmail` | A function that updates the value |
| `useState('')` | Creates state with an initial value of an empty string |

For example:

```
setEmail('anna@example.com')
```

React now remembers the new email and updates the component.

**Remember:** When state changes, React renders the component again to reflect the updated value.

---

## **3\. What is onChange?**

`onChange` is an event handler used to respond when the user changes an input.

```
<input onChange={...} />
```

It tells React:

**"When the user changes this input, run a function."**

For example, when someone types into an email field, we want to update the email state.

```
<input
  value={email}
  onChange={(event) => setEmail(event.target.value)}
/>
```

The process:

**User types → onChange runs → setEmail updates state → React updates the input**

---

## **4\. What is an arrow function?**

An **arrow function** is a shorter way to write a function in JavaScript and TypeScript.

These two examples perform the same action:

### **Regular function**

```
function updateEmail(event) {
  setEmail(event.target.value)
}
```

### **Arrow function**

```
(event) => setEmail(event.target.value)
```

The arrow `=>` separates the function's parameters from what it does.

We often use arrow functions directly inside React event handlers.

```
onChange={(event) => setEmail(event.target.value)}
```

**Remember:** An arrow function is still a function — it just uses different syntax.

---

## **5\. What is event.target.value?**

When an event happens, React passes information about it to our function.

For an input:

* `event` — information about what happened.  
* `event.target` — the element that triggered the event.  
* `event.target.value` — the current value of that element.

For example, if the user types `hello`:

```
event.target.value // "hello"
```

### **Putting everything together**

```
<input
  value={email}
  onChange={(event) => setEmail(event.target.value)}
/>
```

| Code | Meaning |
| ----- | ----- |
| `value={email}` | Display the current email state |
| `onChange={...}` | Run a function when the input changes |
| `event.target.value` | Get the current text |
| `setEmail(...)` | Save the new text in state |

This is called a **controlled input**, because React state controls the value displayed.

---

## **6\. What is onClick?**

`onClick` is an event handler that runs when an element is clicked.

```
<button onClick={() => console.log('Hello!')}>
  Login
</button>
```

When the button is clicked, the function runs.

`console.log()` prints information to the browser's developer console.

### **onClick vs onChange vs onSubmit**

| Event | When it runs |
| ----- | ----- |
| `onChange` | When an input changes |
| `onClick` | When an element is clicked |
| `onSubmit` | When a form is submitted |

For login forms, `onSubmit` is usually preferable because it supports both clicking the submit button and pressing Enter.

---

## **7\. What is preventDefault()?**

Normally, submitting an HTML form may reload the page or navigate elsewhere.

In React, we often want to handle the submission ourselves.

```
function handleLogin(event: React.SubmitEvent<HTMLFormElement>) {
  event.preventDefault()
  console.log(email)
}
```

`event.preventDefault()` prevents the browser's normal form submission behaviour.

This allows us to decide what happens next — for example, sending the login information to our C\# backend.

The TypeScript type `React.SubmitEvent<HTMLFormElement>` describes the kind of event the function receives.

---

## **8\. What are async and await?**

Our React frontend communicates with our C\# backend through API requests.

But an API request takes time.

We don't want the browser to freeze while waiting for a response.

### **async**

Allows a function to use asynchronous operations.

### **await**

Waits for an asynchronous operation to finish before continuing with the next line inside that function, without blocking the browser.

Example:

```
async function handleLogin(event: React.SubmitEvent<HTMLFormElement>) {
  event.preventDefault()

  const result = await loginEmployee({
    body: { email, password }
  })

  console.log(result)
}
```

### **What happens?**

**React → API request → C\# backend → MySQL database → C\# response → React**

`await` allows us to work with the response once it arrives.

This works similarly to `async` and `await` in C\#.

---

## **9\. What are props?**

**Props allow a parent component to pass information to a child component.**

Think of props as arguments passed to a function.

### **Example: Passing a name**

**App.tsx (parent)**

```
function App() {
  return <Welcome name="Anna" />
}
```

**Welcome.tsx (child)**

```
type WelcomeProps = {
  name: string
}

function Welcome({ name }: WelcomeProps) {
  return <h1>Hello {name}!</h1>
}
```

The parent passes `name="Anna"` to the child.

The child receives the name and displays:

**Hello Anna\!**

### **Why do we need WelcomeProps?**

```
type WelcomeProps = {
  name: string
}
```

This is a TypeScript type definition.

It tells TypeScript that the `Welcome` component expects a prop named `name`, and its value must be a string.

```
<Welcome name="Anna" /> // Valid
<Welcome name={42} />   // TypeScript error
```

### **What is destructuring?**

This:

```
function Welcome({ name }: WelcomeProps)
```

takes `name` directly from the props object.

It's equivalent to:

```
function Welcome(props: WelcomeProps) {
  return <h1>Hello {props.name}!</h1>
}
```

Both approaches work.

---

## **10\. Can props contain functions?**

Yes\! Props can contain strings, numbers, booleans, objects and functions.

This is especially useful when a child component needs to tell its parent that something happened.

### **Example: Our Eurowind login**

In `App.tsx`:

```
<Login onLoginSuccess={() => setIsLoggedIn(true)} />
```

Here, App passes a function to Login.

In `Login.tsx`:

```
type LoginProps = {
  onLoginSuccess: () => void
}

function Login({ onLoginSuccess }: LoginProps) {
  // Login code
}
```

`onLoginSuccess: () => void` means:

* `onLoginSuccess` — the prop's name.  
* `()` — the function takes no arguments.  
* `void` — the function does not return a useful value.

When the backend confirms a successful login:

```
if (result.data !== undefined) {
  onLoginSuccess()
}
```

Login calls the function that App provided.

App then updates its `isLoggedIn` state, allowing it to display the Home page.

**Remember:** App owns the state. Login receives a function that allows it to request a change.

---

## **11\. How everything works together**

Our Eurowind login page combines the concepts we've learned:

1. **Component:** `Login` describes the login interface.  
2. **useState:** Stores email, password and error messages.  
3. **onChange:** Detects when someone types into an input.  
4. **Arrow function:** Passes the new input value to the state setter.  
5. **onSubmit:** Runs when someone submits the login form.  
6. **preventDefault():** Stops the browser's normal form submission.  
7. **async/await:** Sends the request and waits for the backend.  
8. **Props:** Lets Login tell App that login succeeded.

### **The complete flow**

**User enters credentials**

↓

**React stores the email and password using useState**

↓

**User submits the form**

↓

**handleLogin sends the credentials through our generated API client**

↓

**C\# checks the employee in MySQL**

↓

**React receives the result**

↓

**Successful login → onLoginSuccess() → App displays Home**

**Failed login → setError() → React displays an error message**

---

## **Quick reference**

| Concept | In simple terms |
| ----- | ----- |
| Component | A reusable piece of UI |
| JSX | HTML-like syntax used in React |
| Hook | A function that gives components React features |
| `useState` | Remembers a value |
| `setState` | Updates a state value |
| `onChange` | Responds to input changes |
| Arrow function | A shorter function syntax |
| `event.target.value` | Gets the input's current value |
| `onClick` | Responds to clicks |
| `onSubmit` | Responds to form submission |
| `preventDefault()` | Prevents the browser's default action |
| `async` | Allows asynchronous operations |
| `await` | Waits for an asynchronous result |
| Props | Pass information between components |
| TypeScript `type` | Describes the expected structure of data |
| Destructuring | Extracts values from an object |

**Key takeaway:** React builds interfaces using components, remembers changing information using state, responds to user actions using event handlers, and communicates between components using props.

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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DQ8fPiwOHTpUKe/E0qVLi6GhoUr5aIx3QuUT4T/+8Y+V7ciDEjiLjSVLlhR9fX2VOt3mE7g3b96kvqQbJTsP3XDFfQAA71ZHCZwX78q75V21GynxetuBRwPZWBO48fqecvv27eL06dPl+ngeG92lBM6vr127thgeHq7U6ybfXzqdEQdyRV9Hr3vrBE535DEhmDdvXllHA87Ro0eLFStWtASEynUXr8eImkXQzJvKlVStX7++cjyxx0bax+qo7NSpU2Xb+rTETMtqW/X37t1b1tH6Z599VmzatKn2MaY/Ty339/enert3707nbG1om9qxNrRt7ty5xcmTJyttaKDV540bN1L9OXPmlPvpZ7F169Z03jNnziz3O378ePl9df4q08/JytatW1cO6NrPvqudo7H1eOwjR460nOelS5fKRK/pZ9fue6pc30HnFfsEuiMmcDt37kwJnL12oN+X+oJmmLVds8yKPcWgv2GxONHv1seS6qkN/3u13+XNmzfb3vTY715tqC/YOagt9RV/DvpctWpVOpZeWbh//36lPWAi+RiI1He1/cyZMy3l6tczZsxI/f/u3bst2+y1g23btpXjneg6rH207dq1a2W54k6vSKit+fPnF3fu3KmcBya3t07gxAYDLe/bt694+vRpWceWRQPNxo0b03IciBYsWFAuX7x4sRIcqu/b8sfevn17y7pP4HzdPXv2lANFuxk4v19sI26zGTglPjZgydWrV4tz586V9eK5NyU4sf122/26Pk+cOFGpLzEh9sfWNiXhWvaJXzyO/exG+p5+H3SfxY1+Z/fu3Wv8mVs9Jev2+/XbYn+MfHxaf1G8+N99Ozovfw5xe+z/Td8DmChNfVI3SOfPn0/Lurm3eo8fPy7WrFlTvHr1KsWcEjbbRzdSn3/+eVrWddre01ZMqY2ff/65eP36dWrr+fPnaZtiRNdkmyRpOh9MXl1J4PxMju9k8SJtZRoEbPbLi3WVXNS166ncDypab0rglGxZwtXtBE6DVfw+P/74Y2UfYz8bBefq1avTrNquXbta6sYk19qKx1G57tTs5/XkyZOyfkze/LHt+FbHZk7tOH4f+9m1+56PHj1K++nC5e8w0T36+eu9M/WVr776qizXTJx+9jar5X/H6lv+Xbn4uzUaLBYuXJjaX758eRlX1pZ+/5rtjvsZnYOOo/11DNtPN2Ja9+eg9mM/iu0BE6kpTlQe2TbFkNb1RKVuP82kKcFrOoYfl3wMqzzWBbqSwOmOwTqXfzm/LoHT3YbuVDZv3lzZFim5sLv3+FjQ6LijTeD0SPLChQtpudsJnL6PvldsK+5j7GcTH2P65ZUrV1b2q2vL8495m+rH34vqa3ZU59K0n/3s2n1PsSTOPwpG99Ql9aKfuWa/bT3+jhctWpQSLC3XxVJ8FULHiQmc4lyvAsR9TezHvj3NWPhz0HUg7g/0kngN9OWRbdMsml4VUNmyZcta9tO10R6V2h/QxWOQwKETXUngRI/W1Cn1wryv8+c//zkta4DQRdu/F+MTKEsKPvnkk7JMz/yt06p9DSrxcZC2t0vg/GyUDwDto8eCvq26ejFo4jabkdAjKSUtNvOkQK7bx9jPT9/Jtttf+Pn94vfVMfz7QnV/Sevb84+XTXykpZm3mCw2/ezafU/j30lEd7VL4PQOo9Wx/uX/mRG7ubJY8vsrHuKrCDGBE/3u46N6exwU+268RoidQ+wf3377baUuMJFiHzW6AbJHqJ5ucPVag6678Vq+Y8eO4tdff03Leo3ItinmlOj5R6h2zSeBw0i6lsBJ7GCqo4HeXsK0d6VEnVUvc2of/XMcVn7r1q3yLkUvWPsEQY9i1I627d+/vzxmuwROx9Sn/0MJoxfx9XjJl9l+dctxXW1rf7Wjdb2AqkdQqqOZsLp9jP/52TnqvGNd+776mViZfl4q8/8OmMr0c/ZlekwVjyt6ZOpnYTSzEv9Zk3Y/u6bv6cvqEju8vZh4mevXr6e+ot+Vn03T70K/E/1ufH17rKl+ZbFkj+DVl+pm4Ixmau13rUe2/hxUZnFt+1k8+3PQOdaVA71CfdPz2+wa7LepT1tcxH+jUcvW3xU//sZcr5yovq7JmqWzchI4jGTMCVykR3BxcIkX/vE2mTu87uxiUtZEj97iy+mT+WcHAECv61oCd+DAgfTPDPgyErg81CV6/OwAAOhdb53A6d01Pbbxj9IMCVxv0x8k6GdU9+8L8bMDAKB3vXUCBwAAgPFFAgcAAJAZEjgAAIDMkMABAABkhgQOAAAgMyRwAAAAmSGBAwAAyAwJHAAAQGZI4AAAADJDAgcAAJAZEjgAAIDMkMABAABkhgQOAAAgMyRwAAAAmSGBAwAAyAwJHAAAQGb+H6LK86S5+XK/AAAAAElFTkSuQmCC>

[image3]: <data:image/png;base64,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>

[image4]: <data:image/png;base64,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>

[image5]: <data:image/png;base64,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>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAl4AAAIXCAYAAABNdlAiAABCOklEQVR4Xu3d34sldX7/8f0HBEFQUFAURXEUjKAuUZBFcBSjIt6IOpOYrK7srhfOLpEk3rjECekbcZUMDmZm0HEYe7ObiSLrgoiCGVbiyrC6MUT8NbAZL/RC3HgRAvXlVeF9vu9+1/tTp0736c+p0/28eNB9qj71qU99qs75vLqqTvW3/vd//7cBAADA5vtWnAAAAIDNQfACAACohOAFAABQCcELAACgEoIXAABAJQQvAACASgheAAAAlRC8AAAAKiF4AQAAVELwAgAAqITgBQAAUAnBCwAAoBKCFwAAQCUELwAAgEoIXgAAAJUQvAAAACoheAEAAFRC8AIAAKiE4AUAAFAJwQsAAKASghcAAEAlBC8AAIBKCF4AAACVELwAAAAqIXgBAABUQvACAACohOAFAABQCcELAACgEoIXAABAJQQvAFgyp59+euudd97pzAMwbgQvYA5OnDjRnHbaaR0aHK+66qrm2Wef7SyD/1Pqu4zKxuXH4PXXX2927tzZnH322ZO2XnDBBc33v//9Ttl5sHU8+uijnXkAxo3gBczBkPBw9dVXN998801n2UXT4H3xxRcvLNQM6TuzqDaWaH9ef/31nXaayy+/vLPMPJxxxhnNmWeeOZczXgqN99xzT/PHf/zHnXkA5o/gBcyBDw+33HJL88knnzRvv/12s2fPnvasl80b4xmKRYeaL774ojlw4MDE7bffPmmTzhj5eSobl1+ku+66a9JWhaGHH3540lb9ftNNN3WWGZvNDokA1iJ4AXPgg9edd965Zt6hQ4cm8y699NLOsou26OAVKZxam44cOdKZPxYKgdbOs846qzl16lSnzDIgeAF1EbyAOegLXmLzJM5btHkEL23zvILSsgQvv8+XObRshW0AlgnBC5iDvuDlz4zEM15ff/1188ADD6y5KXvHjh1NdjP+e++9196Lc+65507KXnfddc0HH3zQKWs0X/cCWXkt+8wzz7TzLCxlYj3T1Ahe+/fvn0x/6KGHOsvt27dvMv/YsWPtNIUJv036ooO9Vl9k/SyfffZZc8cdd0z6zr4k4ct8+umnk7o0f+gZL+1zbaNuvrfldZlS+8oupdp0ldP+veKKK9rXuk/Qz/f9o9/9cmLtV/267KntsvJWNhOPYQDzQ/AC5qAvePkgoXu+bLpujD7nnHM6g57xdbz//vud+ab0WAF//5Fn7Vu24KVQYvfLnX/++Z3lbrzxxnaeLvvZlxh88PLBxFM/+XoU2vx9ed5jjz22puzNN988madwc/To0U67IpWL9Ro762ivH3zwwTVtsbNS9roUvB555JFO3aJ127ES53nxGAYwPwQvYA6ym+v1bbF77713Mv28885bc3O4hS79fOmll9ppX3755WQw94Oq6tegqVBy8uTJdprOnJQGSp0RsrqffPLJtj3yj//4j80PfvCDtsznn3/eTrM6fvWrX03Kxe2bpkbwkt27d0/mvfHGG2vm2XQfbn3wUiBTgNX2qU98oHnllVfa8upnm37JJZc07777bjv9o48+aq688sp2ur8kq7NcKmf1iM6ilb69qvJW7tZbb22/gGFfxNCxEoOX2qL1av3ZtpaCl7ZVIdDq9t+8vPbaa9vytq9tus7G2jQdG7HtAOaD4AXMgQ9ekUJJNhDbYBeny2233dYOunG6BtG9e/c2d99995pLVWJldFYmTutjZWe5x6t09igTl52mL3jJNddc08676KKL1kzXNM3z03zw+vDDDzt1KaBonp1JstCl/o9lbR0KQnG6KBzp8qStT3XF9mtabHfG6uhrR+wfv08UUOMyKysr6XI2jXu8gDoIXsAcZJca7ayTn+bZvD5WVmdKLrvsss58f9bGyvpLiHGdGSu7LMHL38t1/PjxdppClV7rPjBfNt7jFcX5se2ZaQHlhhtumJT1937ZMZIdC5EtX3r8iM0vBa9sudL8odsFYD4IXsAcZMFLfAiK9wfZ9D5W1i5zaSDXGS9dDtJZtBgc4jpjOzNWdpbgFdW61Cj+Xi+7rPj444+30+KZxax/svl2z5iV7TMkoOhMlZXXmSZNG1PwUniNdQ3ZLgAbR/AC5qAUvBQS7F4uBQN/uWvoYKeboa3u+G0+Xaq0eTbNn2mLdWWs7LIEL7F7veyynS4xZpfXfPCKocx/29Tue7LXQ8JRnywE2fri5dBMXDbK+sevUzfXx2X8cWH3tPm6hhyLADaO4AXMQSl4ib80pm/e2XSbFm8Sj/oGVJsuNk3fyrNpMWxkrOwyBS9dYrQy9pgJu+zo+eDlz/KI/+afBRy7f8xfIizRjfq6ST/r4+yMl6+/tF0mtivK+scfJ/E+Mm2L3c8WzwzaMgQvoA6CFzAHfcFL7FKh6En2mmav9W1F++ahputbiy+//PIkCPm6dfZMN9hr4NS3Jm26+PXpDI6m6Rt39u020XrsW43GltejC1TmJz/5Saf909QOXuJvso/bb3zwUuCwftAlSpuuQGLfNvXhRd9CVd/Zt0i1nJ6nZXXbftGzsvy/Cvr2t7+9Zp3+LKfONNk8Pb/NvmWpfaob822fW5n1Bi+xb0zqOPHfvIx1WiATfbtWy/iwCGC+CF7AHEwLXjqrZfMVnjTQ+2+ZZfwZKHtGVVS6hyl7zIGJ7YvzY11DLCJ4xf6L88X3j4JO3M7sm4f33Xdfp1y2Hr/PM6rbHuTqxXLevIKXf+yGl/2j9mx74zECYH4IXsAcTAte4m9612CnaXoa/c6dO9c8XV5PsddTzP2yGiwVHKycfmpQLgUvW0ZPwbf59nT01157bU05nYHzT86PT2ivbWjw8jfZ62ecL7F/bDutL9T/cRl59dVX2/n+Yad60v1bb721ppzOTOqfevtHe6jPtQ16JlusV7RO/1R8q1tnzSwU2fT1Bi8tp/Zb/6h+fQEhhi7RND1DzLZVP//qr/6qUw7AfBC8ACwl/y+EsjNLEoPXVhaDV5wPYBwIXgCWkoWqeCN5VobgBWAsCF4Alob+lY1uSPf/Amd1dbVTzhC8AIwNwQvAUshuZp8WMAheAMaG4AVgKehMlwWLCy+8sNE/o45lIoIXgLEheAEAAFRC8AIAAKiE4AUAAFAJwQsAAKASghcAAEAlBC8AAIBKCF4AAACVELwAoMebb77Z7Nq1q/n444878wBgVgQvADPZs2dPG0S8w4cPd8ptFQQvAPNE8AIwEwWvlZWVzvRatO6a6yd4AZgngheAmRC8AGD9CF4AZkLwAoD1I3gBmElf8FI4sZBi94LZ/V8WYDwfZlROy+h3X8bWlS0vtrzK+ekq79um+dY+k92bFusneAGYJ4IXgJlkN9dbKLFgEwNNKbgoDFnY0jJZOV/GXsfgp3A0ZDk/X2KIzMqU2gUA60HwAjCTGFY8C17xbJMPQJ6dTdLv/oyXZ8HHXmfBK74uLRfLxHAW223TCF4A5oXgBWAmQ4JXDClZoJJ5Ba/sLJzxy8W6ffBSmwleADYbwQvATMYYvOLrTFaGM14AaiN4AZjJeoJXNk188NlI8Ir3lGXiMjbNr7NUptR+AJgVwQvATNYTvLLwEm9aHxq84msTl9WZKn8GK2tzDF6q14c4/03KuE0AsB4ELwAzWU/wEgtMXpwfw5Nfzk/L6oj3ecW6sjbH4OWDlmg+lxoBzBPBCwAAoBKCFwAAQCUELwAAgEoIXgAAAJUQvAAAACoheAEAAFRC8AIAAKiE4AUAAFAJwQsAAKASghcAAEAlBC8AAIBKCF4AAACVELwAAAAqIXgBAABUQvACAACohOAFAABQCcELAACgEoIXAABAJQQvAACASgheAAAAlRC8AAAAKiF4AQAAVELwAgAAqITgBQAAUAnBCwAAoBKCFwAAQCUELwAAgEoIXgAAAJUQvAAAACoheAEAAFRC8AIAAKiE4AUAAFAJwQsAAKASghcAAEAlBC8Ao7S6utqK081XX33VPP300y39HucDwBgRvACM0hNPPNGK00VB68CBA5My+j2WAYAxIngBGKUsePnAFYOXcOYLwNgRvACMUha8nnvuuXbawYMH25BlZez3559/vlMPAIwJwQvAKGXB6/Dhw82hQ4cmZ7Z8GU1/4YUXOvUAwJgQvACMUha8oiFlAGBMCF4ARmlIqBpSBgDGhOAFYJSGhKohZQBgTAheAEZpSKgaUgYAxoTgBWCUhoSqIWUAYEwIXgBG4ejRo+23FrNvLGraiy++2FmG4AVg2RC8AIyCnsGlEGUPQrVQZQ9NVSiLyxC8ACwbgheAUeh7Kr0FsLgMwQvAsiF4ARiN+D8YffiKZYXgBWDZELwAjIrC18GDByehSr9nZ7uE4AVg2RC8AIyOgtZTTz3VKoUuWV1dbcXpADBWBC8AAIBKCF4AAACVELwAAAAqIXgBAABUQvACAACohOAFAABQCcELAACgEoIXAABAJQQvAACASgheAAAAlRC8AAAAKiF4AQAAVELwAgAAqORbJ0+ebAAAALD5OOMFAABQCcELAACgEoIXAABAJQQvAACASgheAAAAlRC8AAAAKiF4AQAAVELwAgAAqITgBQAAUAnBCwAAoBKCFwAAQCUELwAAgEoIXgAAAJUQvAAAACoheAEAAFRC8AIAAKiE4AUAAFAJwQsAAKASghcAAEAlBC8AAIBKCF4AAACVELwAAAAqIXgBAABUQvACAACohOAFAABQCcELAACgEoIXAABAJQQvAACASghewJx99tlnzaOPPtqcfvrpzWmnndY688wzm6uuuqo5cuRIp/z777/flrnxxhsn0x577LFm3759nbKLcPz48cl2yLFjxzploo8++qh5+OGHmwsuuGCy3Nlnn91cd911zaeffjopd+LEiTV1+/5S2bfeeqtTt/Hlb7vtts58oz63cn76nXfe2Vmvp32ocvoZ55VcfvnlnfWX2HGyY8eOzrGSHScAtgaCFzAn33zzTbNnz57OYOxpsI/LHTp0qJ33yCOPTKbdddddzTvvvNMpuwgPPfTQmm24+eabO2W8lZWVznZ7CltWthS8vPvuu6+zDonl4nwztuC13uMEwNZA8ALmQIPp9ddfv2bwvPvuu5sDBw607r///vYMzr333ttZ1oLN6urqZNqll17a1hnLLsJZZ521Zrt0duaLL77olBNtgy+7c+fOSR/s3bu37YMseN1yyy3NJ5980rz99ttt2TvuuGNNPQpzcV1+vpTaNCR4Pf7445N2mt/85jdtOf30088///zJcnGZn//85531R/E40ZnAeKxkxwmArYHgBcyBzsrYQHrGGWc0r776aqdMybXXXtsup0uOeq0AEUPCItl2fec735n8XroMqsulVkZn8uL8yIJXdobHzgTKRRdd1Jlv8ywYls6MDQlePgxOo7NaWX1D2bKzHicAtgaCF7BBu3fvngymOnMS52d0NsuWmcYC2SwsbMTps7IQqG3Ua11mtHZ9+OGHnfIWIqUUzry+4CV9Icemq8ypU6fa3xXQ4pnCMQUvO1aGHiee7gnTfXPnnntuW4fuBdMZxffee69T1rZZl0k/+OCD5oorrmhfX3311Wvq05lF1aN5OpOp+xAJg8DmIngBG+QvxZUud0W6wVyXl/7oj/6oXU4/9VoUHjRNv+uyU1x2iHkFL7tfy26o10/bVt2nFMvv379/Ml++973vNV9//XWnnJkWvPxlvTjPptt9Vfba3ysnYwpedqwMPU6M+t3fgB/pyxi+vG3zgw8+uGY5fw/aLPUBmB+CF7ABClA2WOm+rDh/mtL9XZoWy85iXsHrmmuu6Vzms/AQpxt/2VU0wH/55ZedctIXvF555ZVJHWpHnG/zLEzY2TatzwepIcErE9dn1hu87FiZ9TjRlywsJOmnAq/uh3vyySfby5XWFvWXLWPbrPJXXnll+y1TX6f1+yWXXNK8++677TSVUdn1bBuA4QhewAb4b+UN+UZbZGHBHrFgl/Y0AMays5hH8LJts2/3Gf+NPD/Ye7o/y4cCBQAFhVguC146Q/bss8+uOSOTPV4h9rvqsmV8/40leNm2znqc+Mu7sR/eeOONyTwdSzbdBy9dhs3qzObp8vF6tg3AcAQvYAPWG7x+9KMftZcS7eyRXWb8kz/5k/a1zibp9b/+6792ls1YG6aJA3cfC1jxXi4/ONu9XxkFKN3LZPcQiR6T4cv4/isp3TRv832/6xKZTbdvQg4JXtm3GuP6TO3gZWEyO+snmm7tsfvbbJtLzzdTnaV58zjjCqCM4AVsgL9JXoNZvLG7pO/+Gm/ovUdxuZJZgpe/v6pEwXHaNmu+315/031f8Lrwwgt7vxlp5XyQ0bosGNkZnSHBa2g/y3qDlx0rsxwnvn+yy7GSbYdtczxbGevsE5cDMB8EL2CD/EA8S7BRANEy/kZmnYXQtI0+PHWjlxr9TfTT6Ib6uHzkHw3hL4lZCLDneJnPP/+8U0dk9cUzSOo7m6f+HEvw8ssOPU4IXsDWQ/ACNkiXqWywOuecczr3zZTYTej+PimdZdIZkVh2VhsNXv4RGT4QmV//+teT+dOeZG+svA9KFgJKoaJPVp/xT9vX5U373ZfJAssQGwledqwMPU78GdXSpUb/pQKb1he8rM719DmAjSN4ARukgUwDqQ2Q+qZY9mwlTfvxj388eW3fILNHC9i33vwZofXaSPBSe+zSYBZqjL+3yKb95V/+ZfoNxmlnvNYTAqy+rI1+n/jLnL7MIoKXD1Kl40T8ceKfjRb/T6a/ud4H4L7gJdp32c31ADYfwQuYEz2o8rzzzpsMhBkfMPTa32yu509pWt99TUNtJHj5gV4De5xv/CUrm+ZDSSbeKD8keNn/StS3JP10qzMLXsaf7fLtlGnfaizVu5HgJbMeJ6LL0qX7AjU9BrJpwUtiPVEsD2A+CF7AHOmMxtGjR9v/SWgDmL7VpyeC63EKfQ8THQP/jUVd9ozzIwshx48fb1/rDI6err5jx441j5O45557Js+L8oYEL52V0Y328aGeVncpINmy/mykn7eo4CX+OPHf+rRjJTtO1Ld60rz+t6PK6gn2DzzwQPsE+lh2SPDSE+q1fr+fVKeehv/WW291ygOYD4IXAABAJQQvAACASgheAAAAlRC8AAAAKiF4AQAAVELwAgAAqITgBQAAUAnBCwAAoBKCFwAAQCUELwAAgEoIXgAAAJUQvAAAACoheAEAAFRC8AJG4PDhw82uXbsmrz/++OPmzTff7JTbKvbs2dOsrKx0pqOLvgK2FoIXthwFGG8ZBi2C13zEftwKNquvNmIr9jNQC8ELW0LtgUDrmmcwiu0neNWl/q55/MxibH0FYGMIXlh6NmjWDCrzXh/Ba7EIXgBqIXhh6Sm0aHCK00vipcg4X4OcDcRG6/Dz/TwbFK0dtqx+2jIWrErrHRK8Yh2+TXHdtv64zCz9ZO0oLeu3s7RdJrY7hgmr25fL6lKfxDJZP8d1aznfF34ZrTu2L2t3rDeKfe3X4dvRVybWk/VVJq7b76u4f7J5+mn98A//8A/tz7gOtcGWzfo5bpuf39cGX19pPrCVELyw9IYMTL6sf20hyg+AfoARG1B8EIqvxQbJuA4b0OJ6+wJDDF7WTj/fvy6tO1uvf93Htttex/r9YFoqI3Gd1h8xeMW2xmnZvrJ+s76K/SjWRgtUsS8l9qct50NY3N+R3+5sHbGvsjJxWtZXUbbNVj47dv0+su3W6xhG43p8f8R1xv1g04a0IdYlfdsLLDuCF5aePsCHfFDHIFFaPqsrlokDidgA4gew0jrjeuLg44OXDY7Z+uLyft1xHbOK2xzbYa9jOPHtyAKNaFrsz9h2m271l8qonr5BPK4rboefFl9n6xsiW35aO7JlsuUizSvNj/tQ/LZm+1Di63gc+36O2xH1tUHL9LUf2IoIXlh62Qd7pvQBHwfrrIwf3CUbaGI9tlxWn9VRWlYDk9WvedkZCM23QTou79cRB9Eh+kKA1ZeViYNwqe1xn2VlYrlSGR8Ksn7I9lXsFx9GfJk4bRpri/Hrja9tmrVjaF9Fts1xP2f7x9h2xf0V67Xf43Hs+znrczOtDVq21H5gqyJ4YenFUFRSGsDiwJGVievIBqts4Cyt0+rwy/rXPnhpec3L+OAV1y0+CGTzS2KA8GyAzAbVOJDHfjOxX7IysVypzGYFL9E6bbtjHZ4tb3XEfrB1xjp8O4b2VSbbz337MLYzC0ZWT7Ytvp9L7R7SBtv2rP3AVkXwwtKzD+1s8PDiX+0mDtZZmTi4xIHI6omDRmmdVodf1r/2wSurNxpSxga2OD3TNyD3lYmDdKldMUxkZWy6Dc6lMpsZvExWrxe3J/aDxNc2zdoxtK+msf2c7Z+or4xNz9rl+yObP6T+Emt/nA5sFQQvbAn64C99+JvS4BkHtmyQW2/wKq3T6iyV88FrSLDM1h3NOgj6UJDJ6ouBw4eiWMZvf6wnqysrI37fxH605eK+ittm64p1x/XEaSYeQ9aOWYJXtp+zvprGb0vczijbh8ZCrw+/xvdz1m5vWhuivjYBWwHBC1uKDQheNtiZLKxkg1wMXjbY+EGxL/yoTN96Y2DQoBPbHevw5UvrLpW3eXEdkd/OWD4bIGNY8usyKhODil7HdWX7Idu/2fy47qw9MQzYsvpp2+HF8pG2QeX0M+uH+LrUDqtHsr6K+o4Lif3q25HtQ2PzsnVn/Rz3Ten9Etswrf3AVkPwArYhG1Tj9EXJQiMAbEUEL2Ab0tmJeKZlkQheALYLgheAhSN4AdguCF4AFo7gBWC7IHgBAABUQvACAACohOAFAABQCcELAACgEoIXAABAJQQvAACASgheAAAAlRC8AAAAKiF4AQAAVELwAgAAqITgBQAAUAnBCwAAoBKCFwAAQCUELwAAgEoIXgAAAJUQvAAAACoheAEAAFTyrZMnTzYAAADYfJzxAgAAqITgBQAAUAnBCwAAoBKCFwAAQCUELwAAgEoIXgAAAJUQvAAAACoheAEAAFRC8AIAAKiE4AUAAFAJwQsAAKASghcAAEAlBC8AAIBKCF4ARml1dbUVp5uvvvqqefrpp1v6Pc4HgDEieAEYpSeeeKIVp4uC1oEDByZl9HssAwBjRPACMEql4BVDl+GsF4BlQPACMEpZ8PKhK57xEsIXgLEjeAEYpSx4Pffcc+20gwcPtiHLn+3Sz+eff75TDwCMCcELwChlwevw4cPNoUOHJme2fBlNf+GFFzr1AMCYELwAjFIWvKIhZQBgTAheAEZpSKgaUgYAxoTgBWCUhoSqIWUAYEwIXgBGaUioGlIGAMaE4AVglIaEqiFlAGBMCF4ARuHo0aPttxazbyxq2osvvthZhuAFYNkQvACMgp7BpRBlD0K1UGUPTVUoi8sQvAAsG4IXgFHoeyq9BbC4DMELwLIheAEYjdL/YSz9E2yCF4BlQ/ACMCoKXwcPHpyEKv2ene0SgheAZUPwAgAAqITgBQAAUAnBCwAAoBKCFwAAQCUELwAAgEoIXgAAAJUQvAAAACoheAEAAFRC8AIAAKiE4AUAAFAJwQsAAKASghcAAEAlBC8AAIBKCF4AAACVfOvkyZMNAAAANh9nvAAAACoheAEAAFRC8AIAAKiE4AUAAFAJwQsAAKASghcAAEAlBC8AAIBKCF4AAACVELwAAAAqIXgBAABUQvACAACohOAFAABQCcELAACgEoIXAABAJQQvAACASgheAAAAlRC8AAAAKiF4AQAAVELwAgAAqITgBQAAUAnBCwAAoBKCFwAAQCUELwAAgEoIXgAAAJUQvAAAACoheAEAAFRC8AIAAKiE4IXWGWec0Zx22mnNkSNHOvOwtV1++eXtvpc4D8B0q6urzemnn9688847nXkl9p7T+y/Ow9ZG8BoReyOWnDhxorPMUN98803z8ssvNzt37mzuvffezvzzzjuvDV8xePnl4jLzoG2K2xnFZTBf8wxeOl727NnT2YfenXfe2VluO9B2Wx9okP7iiy86ZbyLLrpoTb89+uijnTJDaJ9cf/31nf1gSgP/ZZdd1ikbnTp1qrOcf0/HeVvVK6+80px55pkELwxC8BoReyOef/75zYEDBzqmfVD38R+Gswx8m/0h6uu/5pprOtsscRnM17yCVzbAn3322c3dd9/d7sf777+/ue6669Lgvx1Y8DrrrLPan48//ninjDl27NiafpT1Bq+77rprUof+uHr44Ycn7y39ftNNN3WWUaCyZRQS9YfXT3/602bv3r3t75qmefqDLYavzf7M2Cqsjwhe2w/Ba0Q28424DMFrlnZhfuYVvO67775JPRrgX3311U6Z7cyCl53J6nuf33zzzW2Za6+9dtKn6wle+mPNllfgiyGp5Morr2yX0c/PPvusM1/TrMxtt922Zt5mf2ZsFdZHfccBtiaC14hs5htxvQFnsz9E19suzM88gtfx48cndcx6r8uy0PEZL8XPwoKXD6jqt1hObP4Pf/jDye/rCV7+/TX0c0XbqPLnnHNOb1DzZ8X8dmz2Z8ZWMet+wdZB8BqRWd6IsezFF1/cvtagp0sH/q/Uvvuo7MM8vp62jP1FLm+88UanfTfeeGM7T39l6xJUnJ+1bVrw0npVTgPDa6+91lx44YXta3/p6r333mvOPffcSZ0686LLWx988MGaumy+9Z8u++iymKbpXg1rs+rT8nZpRf38s5/9rNM20Rmeq666alL2jjvuWLMfdB+IrfeRRx5Zs6z1l3z66aeT6SsrK+l0OXr06ORLEbJjx452O2J/x2ClfrTlfvGLX3TmG9WjwVfTpwWO3bt3T+rou4RW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XgAAAJUQvAAAACoheAEAAFRC8AIAAKiE4AUAAFAJwQsAAKASghcAAEAlBC8AAIBKCF4AAACVELwAAAAqIXgBAABUQvACAACohOAFAABQCcELAACgEoIXAABAJQQvAACASgheAAAAlRC8AAAAKiF4AQAAVELwAgAAqITgBQAAUAnBCwAAoBKCFwAAQCUELwAAgEoIXgAAAJUQvAAAACoheAEAAFRC8AIwSr///e+bX/7yl82+ffuav/7rv2527drV+tM//dPmb/7mb9rpmv9f//VfnWUBYKwIXgBG5Q9/+EMbqixoTbN79+5m//79nXoAYIwIXgBG5amnnpoEqr/7u79r/uVf/qX593//98n8//7v/25+97vfNceOHWvnq5zKx3oAYIwIXgBG5c///M/bIPXb3/62My9z4sQJgheApUHwAjAq/hJi3xkvTeeMF4BlQ/ACMCrxHq6hYj0AMEYELwCjYkHqP//zPwd9q1HlCF4AlgXBC8CorOcM1qzlAWBRCF4ARoXgBWArI3gBGBULXs8880zzH//xH83//M//dMqIpmu+yhG8ACwLgheAUbHgZb773e82e/fubf7pn/6pdeTIkeZv//Zv2+m+XKwHAMaI4AVgVCxI/f3f/33zve99rxPEvAcffLBZWVkheAFYGgQvAKMSz2DpfzH+27/92+SM1z//8z+3r0+dOrVmmVgPAIwRwQvAqMTgNcSs5QFgUQheAEaF4AVgKyN4ARgV+1+NusQY52VUjuAFYFkQvACMyh/+8IfJIyKG0P9q3L9/f6ceABgjgheAUfr9738/6F8GDT0zBgBjQPACAACohOAFAABQCcELAACgEoIXAABAJQQvAACASgheAAAAlRC8AAAAKiF4AQAAVELwAgAAqITgBQAAUAnBCwAAoBKCFwAAQCUELwAAgEoIXgAAAJUQvAAAACoheAEAAFRC8AIAAKiE4AUAAFAJwQsAAKASghcAAEAlBC8AAIBKCF4AAACVELwAAAAqIXgBAABUQvACAACohOAFAABQCcELAACgEoIXAABAJQQvAACASgheADAHR44caU477bTm0Ucf7cwDAEPwAiq5884724HZxPmRBnBffqMD+uuvv97s3LmzOfvss9fU+/3vf79T1nz99dfNVVdd1ZxxxhmT8ueee27z8MMPNx999FGnvJw4cWJSVtsc5w/h22dOP/305oILLmhuv/32dlviMotG8AIwBMELqCQGry+++KJTxrvooovWlF/vgP7NN980119/fSfImMsvv7yzjPzsZz9bE7gye/bs6Sy3WcErOu+885rXXnuts+ysFCDVtxdffHFn3iwIXgCGIHgBlfjgpVBVCjxG5a699trJMusZ0BXubPmzzjqrOXXqVKdMpOCks0u2nIJbLPPqq6+uKROXt+kbDV5ZH+ks3F133TUpo3Z8+OGHnXJD+f0S582C4AVgCIIXUIkf4O+777725/HjxzvlxALTD3/4w8ky6xnQfQjKQkzGt7MvOB06dCgNLJsdvMxtt902Kbd79+7O/KEIXgBqIngBlfgB/o033ugNDI8//nh7VswGcz+g79+/vzco7Nu3bzL/008/nfyuM0PTzngp8NmZLP2cdjlUwci2x6bVCl5+PTqbZ9N1hu7JJ59M703zy8dLv54vd/To0ea6665rzjzzzHae7pF74IEHOmcCffDSPP20++nUjptuuqn57LPP1ixTaqv2vy9n3nvvveaOO+5Ys03ZPXo6K+jv5duxY0fz7LPPdsoBqI/gBVTiB3oLDQoMcQAXhS4N3Fnw8uEoLic33njjpG69vvnmmyd1aHBXkIjLmNXV1UlZnVGK86NHHnmkLfvYY49NptUKXnLppZdOyto0fxky8u0ZEry0XXGeufLKK9fsO9tX6pOrr766U17U/779Q9sqTzzxRKeMxD565513mnPOOadTTrQ+XxZAfQQvoJIseInOYPlyr7zySjtd9y1lwUt0pkzT/Jkm8We47MZ3neW65JJL1gzAujFdZ0Bi6PNBY8glM2ufLp3atJrBy19utGla57e//e32m48686Np77777qQP1D5N+/zzz5tPPvmkueWWWyZ16LVYXeqDyy67rA2rX375ZXsjvv+igrbfylpfKPAq+GgZ1fX222+vWca3v9RWK2tt9WFbdWua9p2W0xkwq0/lLHS99NJL7TS124dv32YA9RG8gEpi8LJvLeoGel/OQpV+LwUv3RumafFbhSsrK5Py/oZzDdL33nvvZJ5RAPPLax3Z+kqsfT5g1Qxe2f1ZH3zwQaec2D1puhQ7rY6+unRGyco/9NBDk+nWF9nN/up/uyxrYapUv1j91tahfarjIdsWrV+BUNN1RjQuB6AeghdQSQxeuo/HXttAHS8jloKXXHPNNW14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>

[image7]: <data:image/png;base64,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>

[image8]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZkAAAEHCAYAAAB8yTv9AAAevklEQVR4Xu3dz6td1d3H8f4DgYBgiKBYlIomA0FUTKBUiDpQkExsg0RsQyeBOoiTTATtQCSSURAHjoLRgtgKDqoEsUaQElAnEiEWghnoJBAnCYFQOA+f/Tzf+3zv56y1z7r3nHXvyb3vwYvcvfbae6+99t7rs38c21/997//nQAA0MOvvAAAgEUhZAAA3RAyAIBuCBkAQDeEDACgG0IGANBNc8gcO3Zscvjw4VVUfunSpZW/syjXv5o+c+ZMsZ6oXPO93NXaMGv9Wi5P+zpOnDgxtUysr7StsXXF/uZt5/XX6p07d26lvLSfY22o7bvK876X1pvra7rlOABAqzWFTGkw3uiQKbVBcij4vFLIeB1vX6k9eT2qq2DwOtrfvKy3Wctp2tuQQ8bXV9pO5m3P5R4y3n/ettJ+A8B6bcmQ8XW1hIyX+zp8fq0dXs/bHO3z5QkZAFvRlguZ+DcP1q0hk9ddak8sN2vgV72Y723O+5rLNytk8n62HgcAaLXlQibq+eCa69bakdtQak+sR4O+h0GW98fbnOflMNqMkPG+bD0OANBqS4aM5HrrDRnVy2JeS8i0PMlEH2l6o0NGf/syrccBAFpt2ZCRPKDmcq/n9WN9Pj/MGvjzfnubfV+j3RsdMuLLeNsAYF5zh4z4YCUxaMZ0bSCM5VsGt7E2lNYfg3dryHh7fX5Wa4fMGth93aozT8h4Xwdt15/oPEjz9kptA4B5LCRkNFD5PB8wSyGQ67YMbmNtqK1fZV5emvYgmtWe2F6uVxrsvc2+TC73PpOWkBGtM9fTdn2fvC2ibcZytbYBwHotJGQkBsnSoC4xKLvSsqXlow21erWQKZX7Onxgj+W8rMTX5fO931SntO5aW1pDJq+jtg1vS5RFu31fxOsDwFo0hwwAAGtFyAAAuiFkAADdEDIAgG4IGQBAN4QMAKAbQgYA0A0hAwDohpABAHRDyAAAuiFkAADdEDIAgG4IGQBAN4QMAKAbQgYA0A0hAwDohpABAHRDyAAAullTyNy8eXNy/fr1ybVr1wBgy9I4d+PGjakxEGvXHDIKGD8QALCVadzzsRBr0xQyBAyA7YqgmU9TyPCKDMB2pfHPx0S0awoZ73QA2E58TEQ7QgYAZvAxEe0IGWAL2bFjx+Tw4cNT5ZiPj4loN1fI6IQ+fvz4VLn717/+NXnooYcmzz333NS87IknnpjcfvvtU+Ub5amnnppcuHBhqjx76aWXhv3OZZrOzp8/P7XcZmhpl8oPHjw4Vd5by/kwy+nTp6f2UVTudd9+++3Jb37zm2G+tv3xxx9P1VGZ5qmO6moZryPPPvvs5LbbbhvqHTlyZHLlypWpOk51P/roo6nyRdN2WkPmiy++GOq/8MILU+sY68vtyMdEtNuQkInBYNZgFie2l28EhcusbV+9enWya9euySOPPDI1L2gfS4P5ZlKbtG+ldrUclx4Wsd3WkNE56nVKx9rniwfhjz/+OFXnrrvuGsp9fUHnzdg5s1mef/75of21Gyv1m/flduVjItoRMv+n9ITi3nrrraGO/vV5gZBps4jtxnk1ayBUnZ07d04+/PDD4akjQicPrnGTcfLkyaGOnmK0jJ8T+/btG554L1++PEzfd999Qx1/Gsh0voydM5vhp59+GvZP++LzAiHz/3xMRLu5Q+aZZ55ZuRiDLkTNr91phggoL8/27t27sj397fPzelzMn3WhvPbaa0O9WQOB6iiMvDwbCxlvtzz44IPDne6senkftX6fL7XXMbNC5ne/+93kjjvuWLUuTed6foxFZV999dVKHe2H15GY33o+ePsknwe+vlnHV0+fuY/1mkhPHwcOHFgp03HIofPDDz9M9uzZs6r9r7zyyqpp0esy38/sgw8+qM4rnc85rGL/dI15vfzk5E9qLeGtPrn33nunyrOxkCk90emcye1Sn6ufvZ6vK/dh8O2qX7yO+LVz9913D8fS6+U6s87TEh8T0W7ukJEYkD777LPi3d+inmTionz88ccn33///coy2qafbKJyDRS6a/N5mS427UNpHb6+2quFUAsZBUDcTcd2YmBXyEW9CBCF2c8//zyU6e761VdfXVVn//79K98C9O/Ro0er/TsrZKIPNa1+jXZFnbgotQ21SXV++9vfDmX5NZCOswbEuMv/9NNPJ48++ujUNmO7tfZmDz/88NC2N998c2peS8hon3OY5AHt/vvvXyn38y6Hahyv6MeoE980gm9b9KQQfeuefPLJlb4SnRv5XM6hrCcrlav/NYiWAlla+1X1Xn/99anybCxktF+aH+fgiy++OKxTr+CiTrQ/9lHt9/NBZdpnhV6Ufffdd5P33ntvVT2tJ64fTetf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gM3j4/SyagqZ69evT+0gAGDz+Di9rJpCxncOALC5fJxeVoQMgK5eeeWVyc6dOyePPfbY1Dysn4/Ty2rLhczx48cnO3bsGP71ebcq7c9LL700VZ5duHBh8tRTT00tl50/f35quc2wd+/eVe3y+TI2D4vzyCOPDAHg5YuUj7fPq1Gbfvrpp+I65PTp01PLbDc+Ti+ruULmn//85+S2226bGsz8ZPJ5IQY9P4HcWgJjrSHjbS2J9nn5RlB4PP/881Pl2dWrVye7du2aKg8HDx5c1d/LIo6Vl0scey/vSQOXtqn+8nlrEetxPjDG/me6629ZV67z448/Tu64446pOnfddddU2zKdV6qnc8znbSa1a6xNpb7cjnycXlZzhYzuNnTA9+zZMwx0Krt8+fLk5MmTq+r5RTEmBkQvb7XVQkZPMF988cVUefbWW2+Nto+QabPIkJk1CH700UfDtj788MPh2rly5crQH7qmYoDVv3GNab7qvf3220OZlo917du3b6gTT7L//ve/J/fdd99o/+kpQevxp9/NFu3y8kz7Nat/twMfp5fVXCHTekGOnexukSHz0EMPDX/rpNXdXq4Xg5hToMyq4+3T9HvvvTc82cU2n3zyyaltyldffTW5/fbbZ95lyqwnlKBXHmP1ZoXM3/72t5V27969e+i7uGnIvv7668n+/fuHetqHI0eODINfrvPEE08M81RH61Sf+HpCS8ioTqzvnXfemaqnPlY7NF/HWe3zOqLB+YEHHhjq3XnnnZPXXnttZV7taSH4utQ3+r5QGwxbQkaDe2ndsc/6WzcYmj569OiqOq+//vqq60517r333lXHLAKqdBxF+6/lPvjgg6l52n70lc4H9a+vR/NUpnk6PuLHx/s1X1s10S4vzzS/1r86Hw8dOjS8YVGbnn322eJ1qHZr37Qunacff/zxVB2JfhC1zftBdP1EHa3T68RNqpaPc1n/+npE52msy89T5+P0slp3yOgg6w7Ky0tmnTTZokJG4sT57LPPhumLFy9O1W/Z1qwnmdiegkN3pt9///3K6wuvq5DRBdASMho4tB4vzzRY5bvfkrGQUbmWV7s1rX9LbY99jG9DP//88/DE+uqrr67U0fo//fTTleDR4KhlajciLSHz3HPPDesTTb/wwgsrdfwOXm1SfQVuvtC1fyr75ptvhunvvvtuGGR8m61PMlr3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>

[image9]: <data:image/png;base64,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>

[image10]: <data:image/png;base64,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pxA8a9asFNy07Zs2bSLAtaH9pd/TihUrStN62bAFuDFjxhSvv/56qRxDL35PQM7i7xvD6+TJk6m9lmeffbY0vRvibyLatm1bCifqZYrTBuOJJ54oFixYUCrPLcAdOnQofZ/bt28vTet12nadUOzfv780bTjp+9Vvat++faVpvarnAtznn39e3HPPPcVzzz1XmjYcbH2xPCfxewJyFn/fGF659cAptOkP7XCEE/3dUs9VLM8twCn86LPc7BA0FLSvu7XtGzZsKCZNmnTTLuMPVs8FODsbvFlngra+WJ6T+D0BOYu/b4w+8Tfh6XKgAlwnlz6bIsB1XzcD3Pnz57PquRySAKczOHVp33rrra2u+KoA98UXX6SzPE0bP358sWzZsuLChQtp2syZM/vMG9kyLHCph+7OO+9Mr7XMGPi0TSrTemx93377bWt6p+vrlObR+vSZ1LjovcZn2DqXL1+eyrT9fj7N4/eT6jz66KPFqVOn0mst6/HHH0+fJ67TxO8JyFn8fdvxo2NWPUQ6lnXMazyP/vU9Rxojo171OP+rr76a2ii91jFnx6K9/sEPflC89957pfk68e6777baooULF6Zj10/XJbnXXnutT5m2V/X1maxMbYWOdWsjtb1Vx/3u3btb6xNdQfj4449L9d58883Ufqg9idPU5sQ2T2Kb/eGHH6bPZNvk22zRJUeVx+UfPXo0lWu63uuzaV/7vxFxn3jxN2EUojRvvMw1derUUt0JEyYUO3fu7FO2du3atE/0WkFNy7JpH3zwQXqvZe3duzf55z//maYpVIj2g/7dtWtX629IXG+kHsMf/vCHqe6iRYvSvEuWLEm/X6uj/aXteuqpp9J6N27c2NrnPshom0VjtebPn9/aJtXTpUfVUbBdv359KtO/Wt7f/va3NE3L0jx++7Qs1d2xY0eiz6XxYCqzMWG23+O8deWaT3//7Lu26Xqtz65t0rrU22Xfh7Zb5fqN+W23ZarMh+svv/yyNb/aB9W18Be3x74/jaPr7/vTb6aqvBcNSYDTF2JflOcbAx30EydOLNVRmaZ1GqgswE2fPr1UR4201bPA5N19992tBrHT9XVK8zz22GOl5VgD1iTA3XHHHa0QaJ555pnSOk38noCcxd+3HT933XVXnzbEHyOarnoKPfrDEOdXG/XJJ5+k1xbaYhui5X399deledupCkJa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>

[image11]: <data:image/png;base64,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1+amm26an/s73/nOyms9avW1zz/Ddbo+4GD1NhNwsCEycu64447hvptvvnn2p3/6p7Nz587Nf+a+fPN/7733Zn/913+9tU4NwRpcdd1RwN1+++3zc6RPP/102+OY83u/93tbj//nf/5n4XrDrbfeOp97zz33zOfFtf3gBz9YmHcYvv76663n+/jjj8/P/5Of/GT2xBNPLMzdj9FruVcCDr5depsJONgQ8Qb+6quvzn/++Mc/3hrPO2B9fso3/3z8+uuvzx/fd99929ZODz744Nb4KOBirJ+jijlxzj5enT59ej4vQqrvOwpx7rjz1scPSr6WfXwvBBx8u/Q2E3CwAd58882tN/P4ecstt2zte//99+djV69eXTgu9IDL4KshlsHx1FNPbZt7GAEX0RbXv1Pg/N3f/d3sRz/60Xxe3JmrsZfX1Z/b2bNn54/jo+Qvv/xyYc0Uc5577rmF8So+zo2PVWNuvaOZx0dM/f7v//7W+eq+Ksbq9cad0ldeeWU+Hs8xHq96jrE9Crj4KDyPi+fdr+3nP//5ttcGWG+9zQQcbIAInocffni+XcMg3XnnnVvj9c089Mh58skn549rwNQ14+djjz023x4FXFfPlXNWBdyZM2fmc55++umFfenRRx+dz/nhD384/+j3gQce2HauvK6/+qu/2hqLa46xCLcYj+1Yp6+dwdvHq9h/2223zQPrF7/4xfxxfORb98cdvH//93/fupuYUR3Xm69NbMdYvd6MtHyO//qv/7ryOcZ2D7i4lrye+HtR9+W15d8XYBp6mwk42ADxppxv/Pkxar+D9O67727dEaofD/ZfYuj7c/2MhfhOW55vFHD9O3Cja10VcHk9q+bE/niefSyjr1/Xs88+O39cfwmjPqdqp4+cX3755YX98X3B/jpEiObjHsn93P16c85un2MPuL7WI488svVnWtcApqO3mYCDiYtQyyDo+twU+zIw8s0/7vLkHaGurxdBEI97eORYP76vtSrOMqDqx8Bd7I95fSzvqPXryrtZI33tXGvZ98l6jNVjlh3fj+nn7tebc3b7HEcBNzK6NmAaepsJOJiw/O5b/ygwf4sytuMjvv7LALGvB1xfu8/vc+Jx/hMbdexGAy689tpr83n5UW3Kj39jX/ySRX1eMRavR2z3IMq7kvEdvn6ukfwN2P/6r//aNv5nf/ZnWx+x1u/Q9e8GxvZBBFz9RZIcGz3HUcDFL6PUY+saAg6mp7eZgIMJyy/7x8eafV+MR9iN/h220Ueoo+P/4i/+Ymu7z6nr1mO6HmujsZEXXnhhYa08V/xCRh+///77t44dBVF8fNqPWXUd8R23Pj9D+Xd/93cX9tVfEonHuwm4HBtd716eYw+4/B5hlXfz+rUB09DbTMDBhNUI6CLSMtTi313LufFbiZ999tnWvB4X9fiMkmXn6eM9GkKPpNHYMjEv7/LFP+gbX+jPffGF/3gusS/+rbh63CiIQvy2aIzHb3bG2qt+EzXu7uVvueY56vx4HOvE9dVflggxf1XAnT9/fusfVY7Hy6431s3nv+o59oAL8VuyMRbnieeR430eMA29zQQcAMCa620m4AAA1lxvMwEHALDmepsJOACANdfbTMABAKy53mYCDgBgzfU2E3AAAGuut5mAAwBYc73NBBwAwJrrbSbgAADWXG8zAQcAsOZ6mwk4YE9OnTq1pe/bj4NaZyT+p+59DGCKepsJOGBPLly4MNxeB3E9p0+f3no8pYA7zJAFpq+3mYAD9qRG26VLl7a2R3flcqwe0+fldg2vy5cvb629ao06Fsf0u4MRcKO5OVbPWdfJteJxHNevua4R15nXGz/r/n5t9XyxndeV2/06AVJvMwEH7EkGxuhOV4RK7o/tHO/HROzUQKs/6/y6bu7PNeq56nH1uvKYOFfdznMvC7jRGvV89Vpje1XA1XPnuvGzvzZ1TYCut5mAA/akx1jfzqAZBUn9SLOHWw2/HjwhAynGaihVPeDq+XK7X1ePwIyx0b4aZTm20x24fD3q+fKO22htgJHeZgIO2JN+dyyM7mSNgmT0nbQ6Lz/yXHWHrB7X19tPwHURWxlcPeDSKODqcWFZwPV1dntdwLdbbzMBB+xJjZqMkxpNuT/iJLdHHxP2j1Bzu65f180IyuCpH0PWNXsQ9u1YvwZYtyzE8tg+VgMtx+NxbscxPc5G19XnAFS9zQQcwA3oH50CHIbeZgIO4AYIOOAo9DYTcAA3QMABR6G3mYADAFhzvc0EHADAmuttJuAAANZcbzMBBwCw5nqbCTgAgDXX22wYcB9//PHCGAAAx6O32TDgrl+/vjAGAMDx6G02DLjQb9UBAHC0vvnmm2GTLQ24L774YvarX/1qYRwAgKNx5cqVeZP18aUBF+KAa9euLYwDAHC4Rnfe0sqASxFx8eW5WAgAgMMTzdW/89btKuAAAFgfAg4AYGIEHADAxAg4AICJEXAAABMj4AAAJkbAAQBMjIADAJgYAQcAMDECDthY58+fXxgD2AQCDthYzz///MIYwCYQcMDGEnDAphJwwMYScMCmEnDAxsnvvmXAff75574PB2wUAQdsnHPnzs3Onj07D7hr167Nf8ZYnwcwVQIO2EgRbBFu4YsvvljYDzBlAg7YWC+99NL849M+DjB1Ag4AYGIEHADAxAg4AICJEXAAABMj4AAAJkbAAQBMjIADAJgYAQcAMDECDgBgYnYVcPH/Evz4449nH374IQAAhyia6/r16ws9tuuAi/9/YMRbHwcA4HBFzPWxtDLgrly5sjAGAMDh++abb5beSFsacKuqDwCAwxcRN2qyYcDt9LkrAABHp7fZMODiy3N9DACA49HbbBhwo1t1AAAcj95mAg4AYM31NhNwAABrrreZgAMAWHO9zQQcAMCa620m4AAA1lxvMwEHALDmepsJOACANdfbTMABAKy53mYCDgBgzfU2E3AAAGuut5mAA1ji3nvvnT366KML4wBHrbeZgAOOzBtvvDH77ne/Oztx4sT850MPPbRtf4yPtruvv/569qMf/Wj2ne98Zz7ve9/73sKcgxBrr7oOgKPS20zAAYfurbfemt16663zGLrnnntm586dmz3++OOzH/zgB9vm7TbgYt9tt902e+aZZ+Zr/eQnP1mYA7BJepsJOODQ5Z2suHPW91W33HLL/Ofrr78+e+yxxxb2h4sXL66MO4BN1NtMwAGH6rXXXpsH14MPPriwL8XduN/6rd+a/cZv/MZ8+4477pj9zu/8ztI7a3kHLj6S7fsiEjMYc1497k/+5E/mP0+ePLk19tRTT23NiXjMQKzzwrPPPrtt7dz36quvbhvP4wEOSm8zAQccqviYM4ImfvZ91X333Td7//33Z59++umOAXT16tVtsfTBBx/Mx998882FIIvHsWZu33TTTdvWevLJJ7ed7/bbb5/95m/+5tb8jLQMw/g4uF9PjMc11cf1GgBuVG8zAQccqt0EXNx1i49P42fceYv5sf1v//ZvC3PTf/7nf85/kSHm3nzzzfOxvENWIysev/zyy1vbjzzyyLZ1MvpiO+++vfjii1vzM+BijRp6VR+/6667ZnfffffCPID96m0m4IBD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>

[image12]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnAAAAGcCAYAAABZfZ3HAABdh0lEQVR4Xu29288c1Z33O3/Ce7Xv5n4kLl5uuNhvpNEIKUSDtEVeNhvJoAkZIAJvXk6Rk23PeMhY4SQ8OA6BcDCQmOAYXo+xgMEhNh4TGxvDY2JsAjZg47OfeWx8BBPzYKa3vuX5Nb/+1ao+VB+qu5/PT/qoq1atWmvVOv2+taq6+y/+4i/+ogYAAAAAI0UuAAAAAACGm1wAAAAAAAw3uQAAAAAAGG5yAQAAAAAw3OQCAAAAAGC4yQUAAPSEv/7rv67Jpqamam+++Wbt+PHj9WPz58+v3XjjjbUXX3wxd56Q6Rwhu+yyy3JxPL///e9zYUVYun/+85/r2zEOAMCQkwsAAOgJshhmbN26Nfs8depU7ljq3LgfaXU8xeTkZC4MAGBEyAUAAPSEP/zhD7mw6667LhNb0RTu48n8vlbYHnvssWz7vffeqy1ZsqT2H//xH7UtW7bU4//85z/P0P758+ez7enp6dq9996bK4fwAu7hhx+uvfLKK7n8Zbt3766vBNpxpb969eraH//4x9rnn3+ehSkv7b/wwgvZ8ZgfAEAPyQUAAPSEhQsX5sIMPVbVZ0rkiSjglJat2qXixfipOJG4AmfxJOT++Z//OXmuCbPly5fXBePevXszAapjEm8xHwCAPpALAADoCan30oosFc/vv/HGG3VBKKGkFbh/+qd/qseL8WUSVzfddFPumBEFnFbhtMrn48dzbX/WrFm59MTf//3fZ+Xbv39/7hgAQA/JBQAA9IQofgwJsb/927/NhTc71/a10rVt27ZcuI+vVbCf/exn2fZf/uVf5tIyooCzdPbt25dLX9xyyy21999/P9tOiVOPviARwwAAekguAACgJ8yePTsTQAcOHMjeIbNHoF6AFSHz30L9q7/6q4Zjy5Yty1a6TGDpvTiteq1fv752ySWXZOF6R+3QoUP1OJGUgJN40/k+Lz0iVVo+HeV9+PDh+rdZFaZ34FQuhfEOHAD0mVwAAMCMxX+RQRSJPwCAiskFAADMOP7t3/4tW2nTip0PR8ABwJCSCwAAAACA4SYXAAAAAADDTS4AAAAAAIabXAAAAAAADDe5AAAAAAAYbnIBAAAAADDc5AIyMAzDMAzDsOosarO2Bdz/+G+HAQAAZiz4QqgKBBwAAEBJ8IVQFQg4AACAkuALoSoQcAAAACXBF0JVIOAAAABKgi+EqkDAAQAAlARfCFWBgAMAACgJvhCqAgEHAABQEnwhVAUCDgAAoCT4QqiKoRNw0T6d+joXB0YTtaXZn8/+Z+54r/jyXGdpy2IYDC8njn5d+/p8rfbm2nPZ/urlZ3NxOkF98bsX/Udt17bp2k9nn8wd7xX33da/tAeN6j+GGdFSYbJ43qgyTtfSLWbqH6+//OfccegtsqjNKhVwRr/Th8ETxbgGuJxmjNdv/t/Lj1WSL3RPr+eF7Vu+rIu2TgRc2XKUPW/YeO6XnxfehDW7xjgHGBOvn2u77oeNZtc70/Dte8OlR3PHobfIojYbOgEX8/r9ii9qyx76rLZ5zZ9rhz75qvb5mf+sHdj9Vf241P//fuzz7FPOOqYN1ZCavGM7S9TFMLWldxayP018WQ+zlT2F+XzkkDeu/nPtw+3TGS//5sJKzdqVX9SO7D+fpRvLoD6jdL6a/s/aulVf1I8rL4XrPPpUdfi2MjQX6PP/u+Z41qbi4z99I9BlLy09mzzXh6m/SNBZ+1u6/7rkQj8ROv7if6WlfH618Ew9He1rLrLzLN+9u77K5iyFfXY6PwZGEV2jxtnP553KHUvVs5GaA9RuGlcal6rDeL7Mz/dqnzjfazW2qvk+lncm49t37rXH69syayMT6oqrMaf2VHgcN++9/WVt+sv/zPqExKAsjrGZjixqs6ETcG+tO1d76v4LE6U1vk0gMf6qpz9vmHD7XU5on9Tkbe3jHZvaVm2u7ckD5xvipx6XxXS9gPPL+JaX+pBfgbPwmLaFy/SIzcJZvauOWZdMZe3h2zU1mdsjvqJ+ZVgbC7WrCS1/zMdJhcWVBjvm0zJU7lR5Rw3vbOOxaP5YHKuGX/2M8/2eD74a6vm+ijyHFb2+IkGmG+ZUvWgePbz3wpyu9vRjweKn5uaYVtyfqciiNhs6ASdsQj594sIgVsP7SdwG99Ej57NzvcW0oRpSk7e1TzQbxGpjTQpy3NpX+8Y0YrpewPnHMjJ9Fgm4mLalY8cNBFz1rHj8m5WaKIj8+1nRYtvJbLuov9g7lRJq5nz8eVqpjabwfR99lW0/u/ib8sV5a1SxOn9m0We5cWPXnyKOVSPW/SjN91XkOaz4udePy4f+8XTts1MXnpRYnNgXrB6tzX1YymLeMxFZ1GZDKeBsErVwdY5tmy48MhN2p62Ok1rWh+qJA1YO0Sbq2N4RPcLUknx0wKl0/STyxN0X7uSF5VEk4N7/r0ewRuxzRqoMMHisnb2j0CNzrcrYfmy7iD9e1F/U7/ToVOLNVmL9eVFARiQ8bCV53FbghMaJf3TZrM7jWDWigItjb5jn+2bXO9Pw7Wv1oicb29/8pu1aCbg3Xr3wGo19ucgfg0ZkUZsNpYCzMHtcoQEth6t3J/RM3DtVe49J757gbIcHDVi1i1CbaYXCH5fpmL5laJP5qeNfJ9+LszQs3ZiPPtX2crz2Dlxcrtd7FrZt4eo7CpcD8e/A+fTpU9Vhba/2sZUfa1c5+Pe3fll/D86fo/b3/cofs221q+YUtb9/B04oP78yoH6id3Q2/f7CqpCVS1iael/L3tmx9y99fqOGL3sUoXHV0+pC+HhxrBoPzjmVpREfYafme71LFef7Y5PnK5vvR7lNe41vX4kvffNaY05tpLGg9mkl4DT2zDT/W1qyOMZmOrKozYZCwKXwecYldYBIvKsHiGj1xq/sFKH3sH541ae58E7xIhCaMyrzfRW+cJy548pvxplWduMjeviGkRFwGrz+JfNhHtAwHCDgoB2Kfg7D04v5jr7YPqM03/eib8AFdJPkvzD28jNns28fx3hwgZEQcLJd7zYujQ/zgIbhAAEHvUCPT71Tgf4yavP9IH3hTGDq0IUvpujGyn8BCPLIojYbOgEHAAAwjOALoSoQcAAAACXBF0JVIOAAAABKgi+EqkDAAQAAlARfCFWBgAMAACgJvhCqoisBh2EYhmEYhlVjUZu1LeD+2//x3wEAAGYs+EKoCgQcAABASfCFUBUIOAAAgJLgC6EqEHAAAAAlwRdCVSDgAAAASoIvhKpAwAEAAJQEXwhVgYADAAAoCb4QqgIBBwAAUBJ8IVQFAg4AAKAk+EKoiqEUcL1Ie/at82vb3n0/Fw79QzaxdXuGbNHiJ3Nx2qEX7d8NVecP1bDgnofGvu0/PX6ydu7cuWyMTk9/lTvejHXrN+fCumXPJweysmzfsTOre83bMU47VNluVebdL55euiIXVgUqx4qVq3PhnnGs/3aRRW2GgINSxHaL++1S9rxeUXX+UA0vv7KutIAYFbrp292cW8RDj/y6vn3VrFtqU1PHcnHaoR9la5cq8+4Xp09/lgurAvnwVmNyHOu/XWRRmw2FgDt//uv6So6F37/w0WS4wnZ9uKchHAE3eHybPL7kt/U79suvuD47Zu1z0cXfycK1GjA5eTQX7tORLX12ZcNxtbfuyvYfOFw7cmSqHu/s2S+ytBSuPH3Ztry1LVlWnfPYE8uy1QhbMbRjci5y6vGcSy+7JtvWeWfOfJ7FU9lkKqv6os8LRodWzmLUsT7cLEzzrPq1+rHGmVi46Il6nxd2nvr71NFP6+NEprGkcaixJbPVvuXPv5TL2wu4NWs31ld+4txgcSxceR48NJm7hiVPPZeVXeWyuUEof5tH/Dmp+adTfJrjwPyfPJhdk29rtYvqUCulMb4XWTL1BfUdX/+GzOZotZOdr7n35MnTtU/2Hmgoh+KtXPW7bM6dM/fe2vETp7IyyQf4NH3eSv/AwSNZmOKtfW1jVm71x1ieUUcWtdlQCDjbvva6O2p79x3Mhc+b/0BdoPklVgtHwA0eb34g+nYTNvhskMVwiy8BqEGrbU2uqbtCiyvzE3Cq7e24nIacRTyuR0s+zSIBZ58+XHFbLfXD8DPuAu7Kq2/O+qucpY0HOVvNs9o2QRX7eAyLY9GO+TgxjbhvYWZ246OVuDg3qKwxXGWIN332KbyTN1a/ur52930P5+LGsd4JPp1xIV6TzY0pzN/6+Vqk6t/P0Wpv89Op+dqnHcN9OlbW2GeEBL1tl13dHWZkUZsNlYDz+0XhN9w0NxeOgBs8Re1TFL7qxTXJcPtMTQB2XGLpZz9/KneOkWr7VFxNTLqju3POT3PH46Qej6fQ3V6z4zDcpJzFuPLLx5+tb6f69qy/uz1bdfn+jXNyx4r6eLM4cV/4FTiLo3khzg2KF8M1NqPgTM0Z9uRGK3Cv/fum3DlC7Y6A+4Z4Tc3qxkRWqu498Z1om1+LRJpPW9u79+zPbjw0X9948zc+35f1mWUvZPu2khu1wbghi9psqAScGs/uzHz4XQsW1Z20X02xcATc4Il9wvb9wNadk+2fOHkqGW7nbdq8teXLtBY35p1qe6Wvu3h7nOonJXsE6tOKfcgfL/u4BYabIkcyjuixlG1/sPPjbBUuvmog4rgQuvGJrynEOH47tS9SAk7linODiOGtVuB8mrat8YyAa028plg3fpxoXtV+O/O173Mf795Xn2OLxp0/FtvLtmNZfVg/vngzTMiiNhsKAadOoU7j87ntzgVZeHwvQmG8A1c9MrWBtYNNlCaObHXKJl29I6F3UGK4LKapR7I2idg7Lmp3i+vPEam216MTLyY1majfKH+VJZWWTKt9Pi+7nnitKqO9FxfzhtGgyJGMCzZ/qt/7fu5vYCyextvGTRO13yxblYVJ5Om9M4VpX6Z3i/y869Pw237fh9u3UC0NzfEKj3ODxbdwkXoHTuNQZu/dKWzinR3ZO3Max6lVO4GAa0SLInrfUPWv/Vg3MtWn6lV17UWW5kFf//E8pak4/h24onHnj6lPvj2xPet/qRtrez9O781ptc7Osfccmz0GHlVkUZtVLuAAAGCwMKeXg3qDqkDAAQDMcLSiYS/3Q2fgC6EqEHAAAAAlwRdCVSDgAAAASoIvhKpAwAEAAJQEXwhVgYADAAAoCb4QqgIBBwAAUBJ8IVQFAg4AAKAk+EKoiq4EHIZhGIZhGFaNRW3WtoCLahAAAGAmgS+EqkDAAQAAlARfCFWBgAMAACgJvhCqAgEHAABQEnwhVAUCDgAAoCT4QqgKBBwAAEBJ8IVQFQg4AACAkuALoSoQcAAAACXBF0JVjISA+/E/3J8Lg9FiaupYLqwZg+xfkU7LCgAzlyrnKpjZjISAm57+KhcWeeiRX+fCYDD4vrB338HauXPnGvavmnVLx6JokP0r0mlZYbyosu9Vyd33PZxd+8TW7R3XwaWXXZML65ZW4/DppSsa9uUnVPaTJ0/XjhyZupDG0U+z+ajMNbVLv9IdNJdfcX1D+99254JcnEu+9d3C6120+MmGY0rHUHsseeq53Dni/PmvG9pa+489sSxrt5dfWZeFyXZ9uKdetosu/k4uHdn2HTvr5xTlIa3g84hxRwlZ1GZDJ+Ba8cyyFxBwFeL7glk81moyjlTZvzotK4wPO97bVWnfq5Jurvv1DVtyYd3SahyePv1ZLszo5lo6ZZB5DZLUdU1OHs2FGRJDqXOK0jIkFIvaOnXevPkP1La9+35D2Jy59+biGatfXd+QR0xTwjOeMyrIojYbOgHn80ptS3Ej4KrD7ng0sLStO3nt665cK3Da1uDR3Zu2NZgs3LfnLx9/tr5t4brT0p2htu9asKj2wc6PG/JWu6f6hA/z+yqH3Z3HeEVxTpw8lX0uf/6l2oqVq7Nt3Q3apOHT0GRgcVJ3iTC8qM3VZrHvzBRsZcKHbXlrW31b/VqrKH5s2Jj2DlV1aGPGj1mNKxsTGj9Wz5ovtO/ztfj6nH3r/NqatRvr4XZebKffr9lQX6H5/o1zcundv/DRXFgviOUYB1RXvs5bYX0iVRfqQ0UCy1bAvICT3Tnnp1lftLlfqG0PHZ5MikjZu9s/qH9auPqlpWF52Bi3PGJao4QsarOREXA2aSDghgMTZULibd36zXUxF++wZJqYteLhw+2xiLXzxDs7sqVuI/Y7tbvy8en6zxiucvjHPX653coY4/g0rRwrV/2u3v98Xjov5g3Dj/rpqhfXZNszuf3MuenRow/Tp9WL6mnxL37VcJ4XcBqzGh9xzPo5QOM2NfY8XsD5cEuvqJ30RCY65n4K836lWxWd1lWrsZMKE76NooDTzYLsyqtvbjjnf/4/N2WPyuPjXZ+HFgI2bd6abasvxjzs+iwPn86oIYvaDAEHHaNB49tGA8jvxwlaptUqP8CEf+dBn/5uP0V0BHaez9vvx3KknEiMU5RmPO7RJHPmzOe5cBhOZPa+jm3HODMJ3VjZzZStjtmqmpCAk9kqjRdwGrM33DQ3l+agBFwqvWZxu6WfafcbtZvMt1+n1yMrGjv+qYXnN8tW1fbtP1Q/z95TjH68qCwxPLWvPPx7eMpD72PHuJ2sNA4bsqjNEHDQMZq0412Ub6uiCTXeKdtkbcc1AfjjkegI7Dyft9+P5Ug5EX36/mTnagLwS/rxeMSvSMLoUNSeMwmJNxt7Mt2QXXvdHbl4VldeAOg8vypuDFLA+XmlWbxe0O/0B0m8oe6UWBdxvwhr6/gFhNT5esoRv3zgX63RCltq7rU8YprxKdAoIYvabOQEnD22Wvrsyty5MBhk9rhUaAL1AyNO0NaOakN9a0wDt6idZbqD0kpAfHk1OgI7T3dVWgXT3Z/KYuGxHCknos+DhybrefrleivL0WPHc2LTyvPJ3gO1jZsmGsJhdJip7SZT39V7Rr4O4qMmjQ89GtXYsFVmveO09rWNtWXLX8z2NebimG1HwMV89Fkk4DTGPz1+MstXcexbinLuu/fsr8f1qzBWvl7iyzzKvLrmD9kXQ3x9KbzVTbQn1kV8Z1nCKran8H1DfUr9S4/xrR1thU7fMpVJpMnfeH+g8xQnliHmIZHq84jxRglZ1GZDJ+AAAKAamr2EDnnRMm708vriylk39DKtUQUBBwAASWwFO4bDN+ALoSoQcAAAACXBF0JVIOAAAABKgi+EqkDAAQAAlARfCFWBgAMAACgJvhCqAgEHAABQEnwhVAUCDgAAoCT4QqgKBBwAAEBJ8IWd0ervEaF9EHAAAAAlwRe2z8JFT2T1pX9BEAqT6R8U9h84zP9HdwgCDgAAoCT4ws6I9aW/xbJt/R1ajA/FIOAAAABKgi/sDF9fixY/2XBM/5Eb40MxCDgAAICS4As7w9fXDTfNbTi2/PmXcvGhGAQcAABASfCFnRHra9u77xceg+Yg4AAAAEqCL4SqQMABAACUBF8IVYGAAwAAKAm+EKoCAQcAAFASfCFUBQIOAACgJPhCqAoEHAAAQEnwhVAVCDgAAICS4AuhKhBwAAAAJcEXQlUg4AAAAEoyDr7wkm99N/sjeZn/b9IYp+haL7/i+trsW+dn2ymL8Y0TJ0/Vt5WvynD27BdZehb+8ivrsjQ+2Xsgd77x+JLfZnE2v/lOQ7jStPxVvmij/tddsqjNEHAAAABtMG6+MHU9E+/saBBDntvuXFBb/er6uoDzHDh4pHbpZdfkwsW5c+caBJRPO5VPUXgqzNjx3q7C40Xho4QsajMEHAAAQBuMmy9sdj2pY+fPf519pgRcKr7Qqtrd9z2cffp0tPJWJBQlEjdt3toQJnEokRbjWh76TKW15KnnGvIeVWRRmyHgAAAA2mDcfGGRIBLxWk28iZSAu3/ho7kwCbQjR6ay7Siivpyerp378suGMK3SyQ4dnsylpWNr1m6s7fpwT23/gcP1dH0escxFYaOILGozBBwAAEAbjJMv1PtnMczjr1XiS49PbT8KuBUrV+fOT6Xhw/We3ZVX31xYpzFcAu71DVtyx328eM61191R27vvYC7tUUQWtRkCDgAAoA3GxRdKvHlBliIKo2hRkMXzi85TuF/5s0esqXP9vsq7bv3m3PGUWRy/ajjqyKI2Q8ABAAC0wTj4QtnE1u11fjTvviw8ip1m1+pX4D7Y+XFtztx7W57rBd/09FfZo9DtO3bW89327vu1o8eOZ2WS2SNZv4KmOFNHP82+FLHhjbdzefh89e6bHrnGOKOKLGozBBwAAEAbjKsvfHrpipwI6wb/kyHdMq513ikIOAAAgJLgC6EqEHAAAAAlwRdCVSDgAAAASoIvhKpAwAEAAJQEXwhVgYADAAAoCb4QqgIBBwAAUBJ8IVQFAg4AAKAk+EKoiq4EHIZhGIZhGFaNRW3WtoCLahAAAGAmgS+EqkDAAQAAlARfCFWBgAMAACgJvhCqAgEHAABQEnwhVAUCDgAAoCT4QqgKBBwAAEBJ8IVQFQg4AACAkuALoSoQcAAAACXBF0JVDKWA2/bu+7XZt87PhUN5Oq3PqaljubBB8dAjv669/Mq6XHivqfIaAWA86KcvBGgGAm4M8G1x930P5/Y3bd7acX1WKW76KeAuveya+rVVeY39pl/1N65cdPF3snGjepNdfsX1uTjjjs0dE1u3N8wh7aBxFcO6pdX4fHrpitz++fNf19a+tjG7hhi/02tql36lq2vZ9eGe2id7D+T6o/atrXRccRW+/PmX6uHnzp2rx5cp3uTk0drZs1/k8rLjOs+OL1v+YrZv2HUqD4trYRErg5XLh8UyHDw0me0vfXZlbeWq3+XSUhqPPbEsux4/r/mypc5J9R9/zpEjU7UlTz3XEOavSec3y2N6+qusfdTffD0o7+07dmbXaWHyaQrfuGmisM7KIIvaDAE3Yuzdd7C+nXW6d3bU99VJNbl2Wp+pzj8o+ing/KRW5TUOgvsXPpoLgzTqb/PmP5BtS8xp3MQ44043c/rrG7bkwrql1fg8ffqzhn0/tiOyfs0p3dRbEZoDV6xcXd9vlcfRY8dzYSJ1za3SSh3XmDhx8lQu/JePP5vLQ+1mgl7XoGuJ5/k8Vr+6PnfcI5GUOq8IpXfbnQta9p9UWv46U8c9vv+pHvSpa12zdmM93MoQr3fR4idz6ZVBFrXZUAk4mdSsMDVvlSSFa0pa4eo0ptZlsWONK+Z4hMzfDVs7qT51l6M7gP0HDtfvgPyd3NTRT7MOrHDf+WW6O9LxVJ1q8rA2svzi4FGb6tPaToNSbaU7oDNnPm+481EciVC7y7NzhbWvPu2uVHnZNVh5Fef4iVP16zEsj1hG3U3pGv1xmcqm67J9i2N5qa5l8S5MA/TkydPZNcT8Lc0HHny89sHOj7O60ERn57fq31YGawvVobaVjhcezRwaNHLtdXfU6079TatRMc64o/4ix+fD/AqK6ujAwSO13yxblfV3zSU655rv3Z7NKRpz83/yYP281Dj1Y33Vi2uybcVJ1beNT5u7FNfmLuUjUx5C8WLZDbWnyu7nkV5i47aXaDz762mVR9FY12qZ37/kW99tmVbquERNapVV6cc84vnxZsiXIZVmxOL+8Mf31BcrihYk1NcsTvRBnjlz7032B3+d8Toi/rj5U83B3udYHD0FsxVjP6a6RRa12VAJOL+KoApQx5aDiwIjnqfj0XmPM1fNuiW7XrtbMVFndaN6SXWs2I7Wuax+411ujB/D7Lw4eLyAkxNInWsdvCiOjkusxPCYV9FkFuPG84TujsyZyGwwq/78Ndhdoy+/+qZdQ2pyiGlGLM1O+7cvg58cfDi05pbb78rq7Mab5+aOzRR0I+NvOvzNofqcfwXB4/t7O+NUcfzKSipNL+DambtUBo1BfzMlh25lKxqT3RLL0QskOFNzQArVTWrOSwkrxfvB7Hm5uHZcljpelH8qPIb5fZkvgz1alAiXOI9iz58nEWT7umnwjzztJsHnlepTRpGI8ucfOjxZz0M3HjGuxZdJlGo/5unTe3ui+JFzWWRRmw2VgIuoguIjNiuLGlENc8/9j/S1fMOIVsHigF+3fnN9Ao71afUT68n2La14PIWPY5Nk7Mhe/KTazo6l4lhaGtw33JR3rjEvockgll3n7nhvV+483STYytZr/76pXo54vsxWd31YzFvE+i6Kr3zlyJSu8lZYvH47x/p3XClsZzKC5qgvmBOQQyyq05mCxondjJjQ8o/QFv/iV1n/ssdFXhy1M05jH0+NYS/gfLj162b9W2nrplY3oOaEVX5bOe8lzcrRCapDWUpoFuWhuFrJjOF+5TOic7wwj8TjEpMxjlYHm4kav59qW8vD5tqic/3Ncuq4D5dZWwsJRfWBGFfC1j+eNpqNeY2H2A+9L7HV0qIVOF9uPW71j1m7QRa12VAJOH8n98yyF+orcCkHJ4oU/LhjVrQfO58di502rsBpEBRNBDEt4e92fZ6WbrO28wIuilF9auBJlFq4kZoghFbS4iNff70pkapyNxNwMQ9ZaqU31ndRGn4SaEfkpvp3TLNVOOSJdRX3ZxoSb7aCI9PqR8qRWz150dHOOI19PDWGOxVw/ksNKRGUCusFsRz9IFV2vWaSEm9aRW02Z0vIpoRN0fHU6l6ReBN6hOnfgfM+3PB5pASPoT7iH6/H40J5xSdFItWnitIoWsU0UsfiCqdQWb04S71Pp/L6eb8bZFGbDZWAk6XegStycGbqxFdefXMu7XFFHdh/mUH14+ulaBJUx5Upvt65KnoHTvVvy9Uxbx9mE429W6cBrHfn7M63Wdt5AWfvwOlxiJ+81AeUlu50LDwOVL2PYO+URXHl87PzlJfKqHPsBiHGFepTZo8v+W0WZvUXl9ljfafyt33lq2u1emlWR2a+fyu+vS+ocIur9+ti/pBGd9AyrW6qj6XeyRp3ZOpHenTk+5x/P1No3GjFWGPQ+rzeKdJY1TcXtd9qnMY+nrqZaiXg5Cg/PX4yy9fy1Dyla0h90zIlgnqBL3Mv0TuG8d1aiQbV26tr/tCwumjzq657567duXDNC9rWcdWZpWdp23Hhj4t4k2/vI8Y8fP3KFO7L3qwMCpdI2vDG2w3lsm31N83Ru/fsr+elc/x71xG/CGF+QP00NS+m3vGzPpz5vv/6YqDmBbtOmdoojg/rh96f6nyNleiXu0UWtVnlAq4ssUxxH0ArA2Wcs1a+/A1BFX0r5hn3PZo4ongFKIOcnn//CBppNg57TWqlqSx6hJlaHRsGUiKrLL1sH//e5jAgi9psLAScvS8U4wCU6buyZkv9g6CT/t3sGEAn0JeaU8VcACBkUZuNrIADAAAYJPhCqAoEHAAAQEnwhVAVCDgAAICS4AuhKhBwAAAAJcEXQlUg4AAAAEqCL4SqQMABAACUBF8IVYGAAwAAKAm+sDNS/yYD5UDAAQAAlARf2D7//vqbWX2ZKUz/aiPTPzTYn8JDe8iiNkPAAQAAtAG+sDNifb255Y+Fx6A5CDgAAICS4As7w9fXosVPNhyz/6GG9kDAAQAAlARf2Bm+vm64aW7DseXPv5SLD8Ug4AAAAEqCL+yMWF/b3n2/8Bg0BwEHAABQEnxhZ+iLCufPf519aUH7fImhPAg4AACAkuALoSoQcAAAACXBF0JVIOAAAABKgi+EqkDAAQAAlARfCFWBgAMAACgJvhCqAgEHAABQEnwhVAUCDgAAoCT4QqgKBBwAAEBJ+uELjx47nqWr30iLx4R+My0eX/yLX2W/r3bu3LnalVffnIVddPF36mkdOjyZS8fnZcdn3zo/2/dmf3Fleby7/YNcOkK/46b8p6e/SpYhXo/iyBQ/pqXzzpz5PDt++RXX18O9vfzKutw5sphWyppdp7eYh7DfrvP1oLzVLqqfH8yel0vHLKbVDbKozRBwAAAAbdBrXyiTGND26xu21J5euqLhuP+/0CNHpmr//NPF2bYXR1YmLzAkgq6adUsuP388dS2XXnZN9qkyWR4qw+49+3Nx/fmpMkjgWBn0P6gqf0wjnt9sO2IWwz0q+4qVq3PhEp62LXEXjxtz5t5bL/ddCxbV9u47mG37fJWWtaHnwMEjubBukEVthoADAABog177Qi8kRLP0JUZSK0RTU8dyYaKZMBGpvE6cPJULS8WdN/+B2rr1m+v7qT+m199mWRni+RF/vGjbIyFVJEKL0vXEei9CwtPXudX1rg/31MN0jZs2b82dmxJ13SCL2gwBBwAA0Aa99oU+Pa3wNEs/dUwiwYsRMz3GjHHj8SgwJMq2vLUtd45W0vxjTSFRc9udC3JxfR5+5Uv56RHp2tc2ZsfiOeLL6encMZ03sXV7Fr7qxTVZmMptZY/xPRKY9y98NBcez1H6MQ+PPfq9+76H62G/fPzZpmnG/V4gi9oMAQcAANAGvfaF9h6Z3qX6/o1zCtPX8SiiRFF8kVqta3Zu3DeWP/9SLkxp+1W3KAbF6lfX18vg05awklj0cWX236hF5bBwf7wobtGxa6+7o/4YNEU8R6trEp7annhnR7aqqO1Yt15Et8qjLLKozRBwAAAAbdBPX6j3z1KOv4x4E83eOYvnK+/U49OiPNp5hCrxY2Xw6UTxJ3a8t6vhuF/tMiyNlMW4Ys3ajbkw1WUM88S04uNpOx4foUrc2X6rPMoii9oMAQcAANAG/fSFPm3b1mPKdsXb33x7Vn1bj/30Ar6P+7/u+EnDcZ+GVpDsCwzN8pBos8eM/riJFl8GPXq1MmhbK4zxPL1jFsMsLV8ePV5WGrZvpM4TqUenIr77VpSHpbvhjbfrq21qB8vD56tzbAUyPtLuJbKozRBwAAAAbTAIX6hvoprw6QWplbWy9PL64zduhwWtLi556rlceNUg4AAAAEqCL4SqQMABAACUBF8IVYGAAwAAKAm+EKoCAQcAAFASfCFUBQIOAACgJPhCqAoEHAAAQEnwhVAVCDgAAICS4AuhKhBwAAAAJcEXQlUg4AAAAEqCL4SqQMABAACUBF8IVYGAAwAAKAm+EKoCAQcAAFASfCFUBQIOAACgJPhCqAoEHAAAQEnwhVAVCDgAAICS4AuhKhBwAAAAJcEXQlUg4AAAAEqCL4SqGEoBt+rFNbWpo5/WNm6a6Gs+8N9rL7+yLqtjs9m3zq9te/f97DPG7YS9+w7WFi1+MhfeL5Y//1Jt4p0dufCqoN+OLjOx7T7ZeyC77jNnPs8dGzQrVq7OyjI9/VU2PymsTJvYXBbDe02Zso0i7faRp5euqE1NHcuFt0NqDn97YnvWF668+uaG8FjvP5g9r3b27BdZuM7x4Tr//Pmvc2mPOrKozSoXcD7tsvmU7UAzDU2QDz3y64awsgLu9OnPcmHDRNm+VIZB5gW9Y8d7u2Zc23Vzva9v2FJqrmjGpZddkwsrAwKuO0w8pyiq19Wvrq/ddueCUv5X+cW+5EXXlre25Y6fOHkql45QH7Iy7PpwTz183NpKFrVZpQLusSeWZWnrc/5PHmzIR42pxpCa1iqdhevOYOmzK+txdZ7EhNK45nu35/KAb2gl4KzOJ7Zuz7WF7pT3HzhcO3Jkqt5WqnPh05DpzsjSuPyK6+vhivvRR59k7bVw0RMN5ZApn5i3bPuOnRk2wHUNNuFo4KqP6Dwd1zENaMsvlU9R+SyOdwZHjx3P7kItvvqi5XX3fQ9ncb6cnq6dO3euHq5JTeEf7Pw4qzNb+bSy665VZX7gwceztFXnql+F+bJC/1Abbdq8taHdZwK+zxvecV573R21AweP1H6zbFXWNzWG1Lc1t6ovr1z1uyzMzlv72sZsbPpx5MeX5gtt69yLLv5Orjwp4WBtonGoJzN2vtK1ONo3/6E4UcDJ/LjrFb1Ob1hItYPQSpj6RAxXe+vJi7ZTAs63ofpAPG7HUufYMVuhW7N2Y/ap8ZrqQ0rf5mKfhpVvXJBFbVapgBM+bdvWIzI5tBju+eXjz2bxtJ3qQJBHg3TPJweyCVEozIsvX+fz5j+QvPOytvBtEgWcDTI/qfoJItWePkzn2eC7f+Gj9XAJHxOhXsCl0knlYeGp8sX8U+HK39/hWd4xL9v3d4wmnPUphxjjwmAx0TIT61/XLvS4Sfsa61rx0Lb6tK1oRGfpx7nGwpKnnqsfs3qU2XkaK4pncVIiQa/PyJ5Z9kIuLeXlxaWF+5tQpSlf4MesfzqguOvWb87lWxYrw7hgN+ES4batcLW/zItmj6+HOAcL9SGJvGb11UzA+XR9H/DlMfNzsg/3YeOALGqzoRRwUtRXzbqlHu47iFbg1KCyIicOaVqtwPk6F9YemlxPnTqT7VuYfcY0fLgd02erpe0YFvcNtXW3As7vp4RakYDz+YpmAk7vBEZLpaE7XNnk5NGGNKB/RCcQj88UJJ5s2+rB14dWhP2qsB/nmqOjxfN9fJEScP5YTMOPQx8+Z+699TDNK9qPY9Zb6ka0LLIYNg40a5s4x0qge3EfjxuyuNrraSbglL5u4nUD4NtbNxrxxkJ5mMgrEnvjgCxqs6EUcLqzs2VTH+7jqsMVOXFI00rA+Tq/a8Gi7Fhs+1RbtCPg/MBK4c/TgDXB5+/yJSR7sQLn91NCTWmnwqP4aibg9Jm65piGZ9yW/EeB2HYzDXv0pDGnFfjU4zKrIz/O9fQjtbLl67MTAefPtc8iASd++ON7Gs71cbXC3Uw4dIMvwzjRrG38E4MUcQ4WekVBQqtZfUUB5/ORUPPCrRUyXYP1ZwuL8UYZWdRmQynghJyfnLga1d6B06caSeG2bedp8vnRvPty6cM3tBJwVuf+PTTVs96F0XuHtvKpcIm9T4+fzN6BaVfAmR06PJkrm8zeqfFpyFq9AxfTsfz07aTfr9mQPG5Y+XQ9Wm1QPnJMnQg4faqfWh3ZO3BKw97P07t0qTQUX/t8C7saZlqdy+IY98dsW31acTSv2jcR5VDVX+1VC21r5VjxUuOlSMDJLFzjQudrnOidUZ9GMwHnbcE9DyXj2riLQqEbZDFslLHHph6Z9RHNa7biJUsJvTgHW1x96lFqkQCM7WKCT3mnbn49Nq9aP/bvYMqHqJy79+zPnTfKyKI2q1zAwfijQXzJt75b39fqXvwKOX0MoFpGZQzGR2ODLPcg8wLwyKI2Q8BB3/HL2kI/R+AfjQr6GEB1aNV4VB7hx7ki7veTQeYF4JFFbYaAg4GgRxkyPY758T/cnztOHwOoBlnqtYZhxR61yeI3EPsN8xRUhSxqMwQcAABAG+ALoSoQcAAAACXBF0JVIOAAAABKgi+EqkDAAQAAlARfCFWBgAMAACgJvhCqoisBh2EYhmEYhlVjUZu1LeCiGgQAAJhJ4AuhKhBwAAAAJcEXQlUg4AAAAEqCL4SqQMABAACUBF8IVYGAAwAAKAm+EKoCAQcAAFASfCFUBQIOAACgJPhCqAoEHAAAQEnwhVAVQyXgyqZZdF5R+LDTi3L/413/kgvrJz/+h/tzYVUy+9b5uTD4hmFrL4BeUTR/FoV3S7/SBWiFLGozBNwAkU1s3V7HwmK8dpiaOlbfPn/+69zxfjI9/VUuLPLQI7/OhfWLfgq4QV5Hv2invWYSF138nWzcvfzKuuzz8iuuz8UZJy697Jr63KO+MG/+A7k4g8TPg7IHFy/JxWkXWQxrFt4t/Up3WDh79otsXMTwq2bd0uC7Tpw8VZsz995cvGbYuPPz9aLFT2b+y/qCj3/g4JHaBzs/ru/v238o678WV+n5NCYnj9a2vft+Pb5s6bMraydPnm4IH1VkUZsh4AZIqoypsFao43oBN4wMUvj0S8CtWLk6FwajjxyUiRiNpSNHpnJxxgnNFRJxMbwd+iFu45wn51u2fDGtVuHd0q90qyBey8Q7O7LxkBJwkXhuO0hgKW0/X/t0ol+TeNu772AuHaHxa6LMp3Hu3Llc3BhnVJFFbTYwAfebZasy9SxFrE9LUxOELKrqmKfty0yF69OEgo+v8MeeWJZNDP2YgMoSrymG2Z2Iyr/qxTVZ2Jq1G2uf7D2Q1ZvF1bWdPv1Z9nnN926vh2tgbNw0kd1x7D9wOLubsrS1r/gyxfFlUB0qH+V95szntd179jctky/z0WPHa9t37Mzw5Vv/hy3Zp8/Hl09p+vL5geu3V7+6Potr1yOLd2tb3tqWK4OVU/U2dfTT+qQk0zUqrt0RKs6uD/fkBFtMy98pqizaVtoWZ/nzL9X7pl8V9Xlqf8lTz2X7yjMlHmT+TjOWQf1B+5rgVC+6Nrs+uyZrM38d2lcZFNfKZ2Xx/Wvcufa6O+r1Lidw930P5+KME5s2b805ZY13tb3ty9R3bBxY31m56nfZOLaxbH3OjynNHzY29Gl9SnFSDjj2Mzlj5avt+xc+mm37vq/0ffm9APhyejpz2jonjjlL2/yBn2/KEss+yhRdS+wrKVJxfHrN0i4ScH7fr7yl+pDaUuM4pqH0tSKn7XXrN2efV159c0/avmpkUZsNTMDFNGw/htsgjOFF8WP400tXJI8PAzJNTIaF6VPOP8aN5//y8Wfr8bzIsbgaGKlJzK+GqYMrHZ+ujqfSKyqTL5vf9mmkVuCKyhfP9dteVPn4NuHHONpWuSVwLcyfK7O7fZUxirbUOXFbafvHUKmbCPVDLxr9CoOP5+sjdVxpWDv4cKHHGPEcObO4mmHH4vkxzG6eZgK33H5Xdu033jw3d2wckZjSjZNvY2t7u4ErGrN+P9Xn4nm+T/ntdsL8MVtlaSbgfHzdyJkYT6XXzUqk4dMbVUyQy/S5cNETDcdT4sxT9Ahe7aIbI63kFd0URQGnBQB/3OrXCy49SrVttaHs7YkL/jOm4fuKbj5kH330SUMeo4osarOhE3DdhqdWNIaFWHYfFsttIkYdWSsuGmhaJbHOmRJcGhjxHQDbVif+2c+fSpYhTpCWdlGZfBp+2+cdJ3XRrHxFAq5osvbp+DiWR+o6YxrG2tc2ZuHfv3FOYVy/7csn7FqjGEvVVypexMf3debDdZepibLZuakwCRflf/DQZLbfqizjiNrFVuYlaGZSHejmzW5+JNr06fvHrL+7PVux0gqa9v3YKupzcaz79Fr1R6FVt1Qft/04PxXNCT6ehcf0uqXX6VVJ0bW0EnBF5wn5q2bjKQq4mFbcb4bF9ecoffWDeOPRSbrDiixqs8oFnG9sP5lGJ27xi9Kxz7hqNEzEsvsw/zjDh/u7C3XOsgLuhz++pyF9jzp86s66qEw+Xb/djYAr2i4a7D4dP+FoW6tfWolKPT73aUTisaIyFQk4H+eZZS/knEkqrRT+uJysrSrH81ITZbMVuBiv6Ni4E6857o8z6hv+kZQeQ2nlKsazONERpvpcHOu+PlN1G8NkqVdn7lqwKBvncd7w493HVxxbHbLwmFe39Dq9Kim6lmYCTk8sip5aqB+oDfSqTVEazQSc+oD3Q81QP07NYRYW+2R8IjOKyKI2G5iAU8Ol3oGzd3Z0XGYDWQNRpkeNWgmy+JpAfDop52nn6U7TD/yq8WVMhenadF3qhP59M9WNrsUPDJkG0o/m3VdPI050Pm1vC+55qKEMqkPdWStt3Xn7NIrKlMoj5q3zfD7Nyqd8dI3K/+Pd+xrOScX36ajsRe/AKcy/T+OP67ptdVP56j1NOyb8oPfnFQk4fVrfLHpUbPFk/j01j8zq3Z8b01EdxHflWr0Dpz7j39HzZbF368ad2+5ckF2ztVPR455xQaYbQY0vWeoxqrAVLL2n6sO1Wmvvzab6XHSW/lzbjqLLXiOR+ZtLtU18B87OURk0nu3dJqGx2OwdOGtrpVf0gnsn+DKNKvYI1Wj2CDWuZjW7fn8sJfRFFHBqH8W19m72GofM9w2La2noSxL+qZG9+6h3Nj89fjKX3qghi9psYAIOqiO+wBnb0ybueN5MJ7WCNwhi+wD0C/paZ1BfUBWyqM0QcDMA3ZVo5cW+iRXfY0HADReMN+g3Ws3y36CG9mBsQlUg4AAAAEqCL4SqQMABAACUBF8IVYGAAwAAKAm+EKoCAQcAAFASfCFUBQIOAACgJPhCqAoEHFSO/TBnDO8GfZtO36qLvzNXhviTKwAABr4QqgIBB5Xgf1yx1wLO//BjWQGnvwjyZSr6EUoAmNngC6EqEHAwcP799Tez/iMzgaXP4ydO1f9v0djwxttZPH1amH5lW/8QIPN/YCzs71Rklq4JOAk7pS/T31rZOY8v+W32C90m0nSON4Uh4AAghc0RAINGFrUZAg76ju8/Eljxb3Vi/NWvrq//vZH/26rUDw77lTMv4A4cPNIQLyXK7P8e46pgKh8AgNR8BTAIEHBQCVHAFf23nv0frsz+X9ELKZ0XhVWRgFv+/EsN8Syff7zrX2qnTp3J9k0cxjKVfRQLAOONn68ABoksajMEHPQd33+iWLJjehT6/RvnZNsSad0KOP+H15aPRN2bW/5YDysScKzAAUAKfCFUhSxqMwQc9B3ff6JYsmMy+0KCrFsB5/PUI1kJOvH00hVZmPIyAafwJU89V4+/471dtRtumtuQDwCAn1cABoksajMEHPSdS7713awPSRQVCTgJKq3C6QsLitetgCv6EsOhw5NZ2IqVqxverzt58nT9PTn6OwCkYG6AqpBFbYaAA3Dod+D8T5MAABj4QqgKBBwAAEBJ8IVQFQg4AACAkuALoSoQcAAAACXBF0JVIOAAAABKgi+EqkDAAQAAlARfCFWBgAMAACgJvhCqAgEHAABQEnwhVAUCDgAAoCT4QqgKBBwAAEBJ8IVQFQg4AACAkuALoSoQcAAAACXBF0JVIOAAAABKgi+EqkDAAQAAlARfCFWBgAMAACgJvhCqAgEHAABQEnwhVAUCDgAAoCT4QqiKoRBwnaa1d9/B2qLFT+bCO2H2rfNzYdA5siVPPZcMj2GjyEOP/DoXBuPFxDs7ai+/sq4h7JJvfbd26tSZsenHnhUrV2fXNT39Ve1vvj0rd3yQeDt67HhW7zFOK86dO1e74aa5ufBOkMWwdunm3F7y43+4P2tT8YPZ8+rhjy/5bVZG1VM8J0XZ+vT1cPbsF7W3J7bXLr3smoHUz/nzX9fH8CDyGxZkUZsNvYDrBQi43mDmw7a9+34urFumpo7lwgYBAm68kS3+xa8aBJzmBjmgGHccWLN2Y+31DVty4e2isR3DuiHOE3LEMc4giOXohG7O7SW+D1s9zpl7b+3Ikal6uBY/4nn9oB91okWbIr/dj/xGAVnUZgMRcDLdCaqj+bR09/DYE8uy8MuvuD4L+/T4ydrJk6drE1u3Z45ck4g1pGz/gcPZMZk6q21fdPF3sjiatJSX4llnLuoI0Bky1a8PO3HyVEObyrbv2Jm1qQkifWo/a9Ojn9bbZd78B3J9QNunT3+WfV7zvdtrH+z8uLbrwz31lQRL7+mlK7JzLS/LX/3A333qPOHLp0+lu/TZlVl5tCpj6Vo8LyL9tj/P3wUqzMppcWH40FzgnZ/vu+PGps1bc6uNGq9aKbF9jZVrr7sjG0M2DhW+ctXvsjlUYdrXmFX/XvvaxnqdaW5e/er6+hys1Xk/P8fypMKUpj517pkzn2fjyIsQmzdMZNtY1FjVXKTzNQfY+TFvzRE2XpuVo126ObdfSKhdNeuWbO7zNyPLn38pF1f1oDaN9SlkqiuZ6tGOqw617+d0qwelJbN+4uvH2s7m45RvlqksiqdwbWve17b6oKVrFOW36sU1Wdm1Evjl9HQ9nj/X9nVN//rC6trk5NHaO9v+VF851DnqQ4rjx8Qnew80pFMVsqjN+i7gNIl4x2hpyQH7eDJ1Qk0wPjwKOAvXwLU0JATiROXjI+B6g9WnF8tqMwtXW9+/8NFc/LiyZeH2GcOLVuDkLO6+7+EsPS/SfDrqL7oTTaWrfiABFtO14+0ION8/7TxE2+iQEnB2E2GT9zghhy17ZtkL2b6c1YGDR+rHNVZUH37cCtWTrcDpHD9urP503Pq+5mDdeFkcE2YeGy+pMH/MRKQESLxh9ALOX4c/X34hzjlCc0eM2yndnNsvfJmuvPrmbL/dclp9+vZW3Wmu9ccNS9enn9qWL4h5FaVj/sSHe78fSeXXKszv65riHODjqf+kxkTVyKI267uAi8vklpYUeDSpaOHjFwk4H+4nZf8+i8Uv6gjQGVafNjnbvn0WtXWcTP150RTuJw29t3Po8GT9uNISfgBqoNlEb2l4TOxJfNlkoXRjP2kl4LSsH03hH330Sbatx3MxbxguUgLOH483luOCrjkKGP8+qwk92/cOXXNyNIXHOdg/ck09frXzPDa2oilMPiK+n+UFXFE72hyhbcWxcR5Xj8rQzbn9wJdHbWA3IfKDqTbQHK350N4/tPqUSLeb03XrN9f7RlkBF32BSPlmf67f71TA+fxapZ26Jm/Wr2xM6H1DH78qZFGb9V3AqbKKFHaM65W/0amA83Fsu6gjQGdYfco04DXQfbgmXP94xsKbCbiYh/ADzA9MtXFKwFlaWg3c8ta2XHpaZdAdoc8vNeCLBJwJQPWj1MqCoTL5VQEYPloJuNivxgnr01o1001PvHZhYV6QaVzYWPfEObiMgDOhkDqmNG67c0FDWCcCTuP2+zfOaQiPcTulm3N7TSxLSpjEcww9qtRjQn/Oq2v+kJ3jnygUpenTTm3H84ri+TC/36mAs21dl+mNorRj2WK8iL1iUzWyqM36LuAs49Q7cDI9+5ZTtAGvOwh7B07xywg4PQv3eRV1BOgMX5++LeK23knRYymbMIsEnCZnWewDMvWXH827r76t9xCaCbgih+TzjOIy9klfToWrTOqPH+/eVw9XGXV9/l0blc0ewf1m2apc3jA8RAGn9y5lNt/E+KOMTN/21LVpPMYbaVu1Vn2or/t34CyO5lJt6+ZMgkhp2SpPnINTAk7O0o9rnW917R9Za+zZcZXVwhXP59mJgJPj1SqKjfNxEnB6z8vqUvx+zYZ6X9b1btw0kZyLFK56s+vwYkb1bqZvs8bjws6zz2bb1nb2vp0s+mYf3+/rplvxUq+n+HNs23yJ7PiJCyuJ6t+6pjjPx2vSuJBZXSrMjwnfH6tEFrXZQAQcQL+ROBvUt64ARp1xE6uDYlx9oQS63p+z/VG7Tv9OtISs/yLMuICAg7HFL50DQDFycOP60yn9Zlx9oSyu0MY4w4penfGravrCTvzyyziAgIOxRPbg4iW5cABoRCtv9ogJOmecfaF9WWxYfjajE+wHjHVjMq5fJpNFbYaAAwAAaAN8IVQFAg4AAKAk+EKoCgQcAABASfCFUBUIOAAAgJLgC6EqEHAAAAAlwRdCVXQl4DAMwzAMw7BqLGqztgVcVIMAAAAzCXwhVAUCDgAAoCT4QqgKBBwAAEBJ8IVQFQg4AACAkuALoSoQcAAAACXBF0JVIOAAAABKgi+EqkDAAQAAlARfCFWBgAMAACgJvhCqAgEHAABQEnwhVMXICLhB5wetke36cE/tk70Hak8vXZGFnT//dS5eO3TTvt2c2y6XXnZNbfat83PhMB4sf/6lrB9NbN0+kP40rNx938O14ydOlaqHTuO3w213Lqi3y9mzX2TzjcKHaSyWvW6Zrs/2H3rk17WXX1lX37/2ujtqW97a1hD/g50f59LpBqU/Z+69ufBOSdVBKswzPf1VLqwTVF8ihreD+s+2d9/Phfea06c/y4X1ElnUZgg4aIk6/7z5D+TCy9JN+3Zzbru8vmHLUDkN6B+/fPzZBkc6k+hmLHVzbhFFaQ7TWCwqYyt2vLer4dwo4E6cPNUQf2rqWOm8ipCdO3cuF94pqXKlwnrJKAi4fteBLGqzygXc/QsfzdLXXZd1aK3sSLEvfXZlQ94Kf+yJZdmxRYufzMLUMArX+TFt6A1asUgNAGsbTTY6vn3HzgwLX/XimtrU0U+zNvtyejr79Octeeq52pkzn9fb+aKLv9OQvvY14aht7Q5Otv/A4ayv+HPUB1asXJ0dO3Jkqh734KHJ7E7+uf/9cnZHq23FszJYPIWr7Nd87/YsjZWrflcvr9Je+9rG7LhWBmLatq8yqawHDh5puA4YXtS3RQyfCaScuRcSWhVSX5ap/2/cNJGdozEi0/iY/5MHs7gan9rXWLn8iuuzsKPHjmfj21b4ZNpWHK3++XzXrd9c2A4T7+zIxp7yl1m4+QjNMRYmU56KH9PpBT7/TtAcqZsF248CzqerlTLV/Zq1G3uyYiZshS8+NUnN2z6O5tc4L6fqwMJk5o9ldq4d175Mx/U0R2Fqd7Wl9Q1Lc8Mbb2f9TfO1ymkCTosJcT72KD2lo+M6RwJO87T6ieZ2f47M+q3dKJh4Nk2hNlB+b098Uz71cYtz6PBk9tTG0lq46ImGtNUfrewx7U6QRW1WuYBLpe3DdMHxuLDJJyUsoPd89NEnWbukJh21kb87sjbz7Zja9mEa2HEJOuVg/DlxEoxxZEV376tfXZ99btq8NROS/pj6lJ2nx8X+uL82nzaibTTx/WkmIjNHavu2rb4ux9RqHNorFfFYszhxXtd+0Vj1Y9yPTY8JQpnKHI/3Cn9NnWDXa3Xp5y5te/Hq80jVfRlsblVeEkQW3mreTvnXVB1YmD/mr9HCdT2xfWJ68RwhAWZl9eHWR5ulp/7ihWE8LuR/9u47WHg8npuK48OKypQ6r11kUZsNvYDzHUgmRXvnnJ/W46Q6GPQXmwysDeJkbG2igai7nnvuf6S+KubPi3eDEd8PUmEamMrD3p3RxPSznz9VjxPPV36aCNSHXvv3TfWwmId3Eir3DTfNzcWJaYtnlr2QhUdnBcNJqu1nKnrEp34rx2Oryn41bvEvfpX1ba0Kad/3fz+2PT5OfPwV5wytwBWNGy/YNN61ryc3aj+twGl+STn3flA2fbtezVVaAUqJGyNaTKsd8/FtdajouOF9qc3xqTGSOt/C/DGbn4uOGzGPKHaF6qvdNo6iNz5CtfNtNVD+4Mab5yYFrNi9Z3+2Aqd4dizGiWF6+hSPxzidIovabGQEnDqCLUFbxfvjMDhsgFgbxMnY2kSPuf1jA8POS7W9Jw7EeI5NEDGdovTlpGzbythqBU53xnIu/ngq7XaPwXCgRzb2qA8urJDZKpBM40KP3WK81NgqevTp47QScH5Oj6QEXIzbrnPvlrLp++uVMLZ3L3Utqms7JmHqz4srOWXQ0wGfjkR4nPOE96USVWrXWB7hv2whFMfO9fWTEnBlV+CUfrttHI8XCTiF2RdLFKdIwPl9245xYthVs27JPXqOcTpFFrVZ5QJOjSLTM+FUJ7Awu4uQEtYdn8VBwPUfdexTp85kbaQBaI7P2iBOxtYmtjIm07fd7Lid59tej3Hi49Cid+DsuE0Qutuxd+k08VgcH9f2tUoX85LZO3Da1zsPSsceNWh7cvJo/fpTaev6dIemdyx0x+aPwXChFZCdu3Zn7WnEODMBmb3D4/tzfEdU9aW+rTGicWbnai5etvzFhrQUJzWPFwk4H0eixtLR+3M2RlMCTu/FaXVfZdX4bNe5d0vZ9OMcKdO1xNdGUulHwdQpqTRTYd6X2rvpMY4/3/pO0ePJlIBLvQOntrP3Gf23VVUe9Te1sUSutbH8SpyPPfIHKpPmc+svKQGncMXTu5U6nuqTQnHU/5WXrTbHd+Asnt6T+/2aDfV0bH6xNGPanSCL2qxyAQfjix9c6vBFj1oAYHjQDYxfFYJvmCm+UAsm9k4YDAcIOBgYWkL2d516P8zenwGA4SW+kwTfMFN8oVZdU48AoToQcAAAACXBF0JVIOAAAABKgi+EqkDAAQAAlARfCFWBgAMAACgJvhCqAgEHAABQEnwhVAUCDgAAoCT4QqiKrgQchmEYhmEYVo1Fbda2gItqEAAAYCaBL4SqQMABAACUBF8IVYGAAwAAKAm+EKoCAQcAAFASfCFUBQIOAACgJPhCqAoEHAAAQEnwhVAVCDgAAICS4AuhKhBwAAAAJcEXQlWMrIC78uqbc2EAkUOHJ7O++n/9zxtzx4zZt86vbXv3/Vw4AIwG/3jXv+TCBkXVvnCc+Ztvz8qFdcK4t81QC7h16zfnwozde/bXLr3smlw4tMenx0/Wtu/YWRc48fg4oP5z/8JHc+GRQQm406c/y4VB/1EfkE1s3Z59XnTxd3JxZjKaR2U2H8yb/0AuTjN6PXZkKofKY3OTyqhxGuMa589/nQsbFFbGXjM1dSyXdrP9a6+7I3e8F/QqTV1Ps/2IrmfinR258E7opuxPL12RC/M064+DQha12dAIuEHkMVOZCXXbaoIwBiXgZkKdDzu33blgIG09SmiclL0ZvvyK63ten6kb99c3bBkKh5miX+Na7SIBs+rFNfWwmNeJk6catiW+V6xcnUurLEueeq720CO/7slNT5yP434/iPXVCaNwwy2L2qwSAXfmzOe1XR/uyVAHXLjoiSyPx55Ylk0umiQWLX6ydvLk6Sy+b/w1azfWJiePNtxh6xzdlel8pf3yK+tyec5kitpv/4HDWV3547KNmyaytrHJVYPa16mPb/WuT03wClN7TU9/lbWRwnW+wrWSeu7cuSxcxy0tpa38jhyZqoetfW1jVo7UZBLTVv/RAFQ5hI+7/PmXsniKr7hyDMpr6uin2fWfPftFw3XZtZgDsTtjna/9OXPvzcr29sSF/BWm67Y4Wk2wVQ6lpbIpjq7N+qfVR0zbzjl+4lTyuqEz7r7v4dqmzVsbwtSu6lc2h2h12o6100ajjuojzo+aU+W8bV+m/idb+uzK+lhduep32ZixMfbBzo/rc4ilqbl79avr6/Oz0lUc7WssxvL48WcovvKyfLQ6ojJolc7KZ5863/Ky+UdCSGl89NEn2bxgY7AXWN69xnycT99vq920ShWP9bI8lpba1cKK5nJ/E6A5Pc5XUbDZvs73PtzmfH9jXeQn1P7Cr8DKzF/5ukj5JWPDG29n87+Oq//M/8mD2bnmP1TG2OfMH8iK+pzO7UefM2RRm1Ui4FQBqkQf5vMwAWf7vjP4OzZVqiYOxfd3bGXvMMeZd7d/kNXxg4uXZPsy67CaLFWHqmc/EG1SLhJw6rQ20QoLj4NXZsLJh5vDNOwuSLb4F79qiGuk0k6Fx+NGLEc8bqQm1IgdS8XxYerLmghiPcXzZHEihHJo9S0lDtT+e/cdrO+rL9xw09zCNirqV6OOzQe2b9ty3hIKdhMy6+9ur8fxTlZ1ZmLO15eO22PZuNrt8/M8s+yF7Jicn6Xh5/P4aM3SielZXj48xumWXqdn+H5m1+vzio+NzcdpAcSL77Lo1QMJK21LPFl47P9WJvtUOQ4cPJJLL57nBZz34ZaO7yvRTwg/L14165Z6mt7XW1pFfsnQ8YOHJhvCfByVMfY5L+B8+CD6nCGL2qwSASc0Mci+f+OcbN/nEQew7wxeSJiAkwpWB7/n/kca7qghj9Vzqk1jmN1tFQk4CTBN5DGdOHhlcpBxNSROSh4JuFie1DkWJ+Zp+MlIFDkVW3HQgL/x5rmFAk53h1qBaybEYpgei/hHI6k4hpxiKhw6w+7cI7H9ba4paqOifjUumLOU85bwin1PfV0rktr2dafxHJ2c8HN3rOuYdkR1rTLE+T+uGFo6MT3LS58Sg+/96cNkGbsh5tkrfD+T2Xykfa1c2lws1FbRfFq6/lbm20VoXvW25a1tuXJZ2fRpj3N1M5RaMInneQGX8iW+r0Q/UYSdG/eL/JLnkm99N1uFM3/i04plFK0EnD5/9vOn+tLnDFnUZpUJOMPS9nnEAdxKwGnblmKhOVbPUdgI1bv/IoB1zqKJWBNL6h2WOHgtfhRfGqitXh6NA8nuEg1LO+YZjxtF16IwrdpYnCIB5/dtO8aJYbpj9O+vpOJ49OgvXje0jwmOFGpb3w9tu6iNivrVuOBXIzUnmONOxYljJ45n4efuGL+ovxuaS9T34/wfx0LRuLO8JMR/+ON7cun3gphnr/D9zMRb0XXG/VQ7dEpMw/KI/d/CJdrUV2JZYry4H8WRhfu+Essi/CqjVmz1Gf2VpVXkl1LYY31f3lhG0UrApW7+eo0sarNKBJwaSBWkifY3y1ZlYVq61/sWmkjjAG5HwHnjZ0caUX3b+wT+/QZ7t+HoseMNHdTeKfB3Ehbuvy3m01Z868xFg17L1ql3Gz7Ze6AhTI++tMKlNFOPFBXP3s3x7yrFeEIDy8qovlLkVMyx6xp1vEjAKY7Kpuuwm4b4DpzF03tyv1+zIdtXXB23dydSaeu69UhElrpuaI1W4PftP1Sva+GPq53/9P6H2d23+oO/8Uu1UVG/GlVkGu823nw/8zd1Glcal/ERlExjT9saJzaHWJx2BJzq1MLtfSK992mOW++Zatte0I/O1NLx5bK89amym9l47BUxz14R+5nmXsvL31jIP3rRLbRqmRLe7aIbaQlnH6a5V4/SY7n89cviDbWhG3PrZ7JfPv5sFh7FkaXn+0qRn+j0HTid7/1SPEflsHN0HZo7tOIcy2jl8+U1BtHnDFnUZpUIuF4Tyxf3oRx+2R5gHIiiAr5hHObN6Hx73d7jUEe9grq4QL/7nCGL2mwsBJzUtpS2rdogPHoD9QjjRr8m11FGqxFakRyXepFp9U7X1Wvf1ev0RpEfzbuv4ekHXOgX0h/96HOGLGqzsRBwAAAA/QZfCFWBgAMAACgJvhCqAgEHAABQEnwhVAUCDgAAoCT4QqgKBBwAAEBJ8IVQFQg4ABgb4tf3AfoNvhCqAgEHAGPDoARc/DFTmLngC6EqEHAAMLLol9JPnjxd/6VzCTj9dpn+P1a/Y+b/VUH/IqB/DPBzl8Se/UK79u3fX3Su/euI/lrH4ujX4Of/5MHa6dOfZb/xdM33bs/i6B9kLG37J4OYNown+EKoCgQcAIwkqf8qlYDzq2OpeUp/4ZP6v8OIHUvF8Xn4/1iUeJO4KzoPxg/aGapCFrUZAg4Ahh79p238w+j4CNXPU1qB04qYzOLEfxr4m2/Pqp06dSaLY+f6/1k0vICzNL2l0obxxNobYNDIojZDwAHA0COxtvrV9bmwlIDzf/bt40SRFf8U2396vIAreh8upg3jSap/AAwCWdRmCDgAGAniPFQk4OyxptB7bCkBd+ll19Qfyd61YFH9XNmVV9/ckI8Xevov1R/++J76vlbxYtowvsQ+CDAoZFGbIeAAAADaAF8IVYGAAwAAKAm+EKoCAQcAAFASfCFUBQIOAACgJPhCqAoEHAAAQEnwhVAVCDgAAICS4AuhKhBwAAAAJcEXQlUg4AAAAEqCL4SqQMABAACUBF8IVYGAAwAAKAm+EKoCAQcAAFASfCFUBQIOAACgJPhCqAoEHAAAQEnwhVAVCDgAAICS4AuhKhBwAAAAJcEXQlUg4AAAAEqCL4SqQMABAACUBF8IVYGAAwAAKAm+EKpiIALuoUd+ncWXnTp1pnbl1Tfn4nRKyiw8xoX+ILv0smsawubNf2Co22DvvoO1RYufzIW3wzBfF3TPipWrszbe8MbbuWOjzEUXf6d25szn2bW9/Mq63PFBovzNpqe/ql3yre/m4nRKyra9+372GeP2g0HkIzt+4lQu3Dh67HjL47GcP5g9r3b+/NdZv4/xuyHmMyzoemffOj8XHlE8ma8X9dNz585lfdbrlwX3PJRsG425QdSDLGqzvgg4v3/5Fde3PL/VcWNq6lguDAaD6j62k1mM2280YcewblE/7Ue6MHxIWOjmQ9uafI8cmcrFGVW6GY/dnJtC9ez9wW13LsgcY4znabcM7cbrNf3O16efyqvMcbXBmrUbs23191760VQZqmZy8mj22UrAFdXLiZPfCLQtb23L0lFfXvLUc/Vw8xUKl+AbRD3Iojbru4CzjPU5Z+69mXp97Ill2d2AwrQt06f2NbFK+fo4Rux4lq4qc/Wr62sTW7fX9h84nFW0PrXvyy5b+uzK2tTRTyu/Ox01VPe+Y1973R1Z57f6tbsQawMJIoX7tpH5tln+/Ev19KxtLD0L2/XhnoZ2XLjoiex89Q+tCGq1QecpXry7VN42iGUnT56up2XlM1au+l09XYtvn2fPfpGdp3656sU19WtUuOLEPhvThuFCfddEm/rI3fc9nIszqli/9fh5VALKVuk0ZmzcaFzJbFxZWqkxqb5u/V8W51kjCrhYPqVjK6HaLyqDreQVpeP3Nd43bprIymfjVZ8qo41XoTpZ+9rGjsdrzLfXaPXMttU3b7hpbpanzWOp4/bUq+i42lhtbuGpa1A92FyrOlOY1WWc7zw+LdWz+deJd3bUjyttpaFwK4c/T/mYIJJGULu8PbG9od/+6wurM2H2zrY/NZyr/hPnfZ9uDPMU1csvH3+2IQ1dy+nTnzWc68uQ2u8HsqjNBiLgovASqYqL28I/tovpWFw1vm9EX9lqpBjmz4X2UN3L8dlAMzFn9WiOweKn2kZCx7eDxfFh6j/r1m9uOG7p2ID0K2XN2jEKOAv3E0ZRmMWXpa4rxvFpxX0YPm65/a6snW68eW7u2CijRz4y3axYmO+Ptp3qoz6snTHpt22e9bQScIZu8ExEt1OGGM/vaxz7VT4fz7afXrqiYTUlptWMTuKWYcd7u+rbqforc7zIbxq6kfb+046rLr2IiucVhfnweNwWTnx4nHtjGv480awfeFoJuKJ60UpxjBfzabXfD2RRmw1EwPmBuH3HzmyA+TTjtjffCEUV7h217cftlPm0oDlW91ZvNrBtP9an7fu2iQPVn+vNt5nF1QBOCThzWIt/8auG/GPePq2YhmhWNh/P7/s40fw5MFzovciDhyaz7d179o/larx/rHP/wkez1XKJFlv1To0b32+jpcak347jSaQEhj/HVtZkFi+m7y01PuN+0Tj221p9jebTakYnccvgfZwXtt0cL/Kbhurjqlm35NJoVpepMLWn3ns3i8ctTgyP+cQ0UtjCTrNH8mUFnO+zunnXu9SxLK32+4EsarO+Czip2ejsha9cH94sr6IKb0fAqaE7WSqHRqzutYp24OCReri1gVbk/Gppqm3iQLU4RW3j+0KRgCuKb/EGJeB8HBhuYnvF/XHBX5fm4KLrtHB/vJ0x6bfjeBJRwGk7rtzbuSkBV1SGGM/vF41jvy0R61dxOiHm22tS5e32uEScf9fLvwojJOztuD+vWV3GsCiWLDyekxJwCrN8fHg8N6bfTLyJWKZIUb3Ed+D0WFd9xq/afrDz44a0mpW1V8iiNuuLgNPzbntnSNgxTSJ6tq3n6rFj6Lm3tiX4ZDo/Lst3I+AsvlYAi97ZgGJ83fu6i9tqx0/2Hmh4B66VgLNttY3e4UiJLi/gZHrXQneN6lN6Z0bv9Pxm2ap6/Ji3T8uO+X2Lo77p48fz/L5txz6bShuGB2sv9SH1n7iKMcrY+0bqh97J2Cqcj6cx5ceN4tu40r6s2Zj026lxrfT3fHIgK8+hw5NZXhZH7xXpnSjNFV7opcqg830ZYt5+v9UcY9u6fr1T1el4jfn2GvOfegTuRY1du47Lp/rjCrNy2XGl4a9L16u2lPlXQvzx1DtwRXWZClN76lGsv1mI55iAU19UOVUmiWnLx+ZzibNmXy7SIoJ/vJvC9xcJsNRKu40XXy/KV+/8qT7iI2Rrm5hOvM5+IIvarOcCDgAAhov4E0BQDnxhI1XVhwRgJzde8R34UQQBBwAwA0l9gxA6B194gT+9/2G2etpqFaxfzMR2QMABAMwgHnjw8Wz+fnDxktwx6Bx8YfXIevGj0KMGAg4AAKAk+EKoCgQcAABASfCFUBUIOAAAgJLgC6EqEHAAAAAlwRdCVSDgAAAASoIvhKpAwAEAAJQEX9gZZf/xAvIg4AAAAEqCL+wM6qt3IOAAAABKgi9sn4WLnsjqS3+NJRQm099R6a+q/F+rQWsQcAAAACXBF3ZGrC//P6zxv86hOQg4AACAkuALO8PX16LFTzYce+iRX+fiQzEIOAAAgJLgCzsj1tell11T3/54975cfCgGAQcAAFASfGFnfLDz49rBQ5O1jZsmsn3Z2tc21j7Ze4B34DoEAQcAAFASfCFUBQIOAACgJPhCqAoEHAAAQEnwhVAVCDgAAICS4AuhKhBwAAAAJcEXQlUg4AAAAEqCL4SqQMABAACUBF8IVYGAAwAAKEm/fKF+F02mTwv78T/cXzt37lz2e2mXfOu7uXOmpo5l55hZ+A9mz6tNT39V2/DG27lzhLeXX1lXD393+wdZ2JVX35w7pxu86Tfg4vF+on978NdYFv0F2NFjx7NrOHR4suGY2kYWz+k1sqjNEHAAAABt0A9fuO3d9+v/EXrbnQvq4c8se6G+nco3FaZ0JPq0fdeCRcn/G02dt3ffwSy+tnW+/8/SbvH5LbjnoWT+/aJXAk7i1rYvv+L62lWzbsm23/vTh7VPj58cyDXJojZDwAEAALTBIHzh7Fvn58IsXx2zfzBIlUVi5e77Hs6d9/bE9tpvlq0qPM+H6e+uJt7ZkYvz+JLfZvHOnv2iHibxqc/jJ04V/rNCzG/FytW1TZu3Ztvfv3FOtloo0ehX/hTH8vo///r/zsKUvkzl0L7E2bz5D2QrYpaHrlNmgssEnMXxwvTOH91dO3/+64aVSpn2Lb0iYhu1it8LZFGbIeAAAADaoN++8Nrr7mjYn9h6QZBI6Ghfqz8SKdqWSfzIbJVp+fMv1Z5euqJ+vpVX4RI72pZosXNjPCuDHs/6cij9N7f8sb5vK3sScLbip7LZtsenHcNOnDyVC5N4XP3q+mR8YXlLnPlwmQk0rSgWxdGnrtEeV2ulc83aC492ZUWPkNUWQvUXj/k8+oUsajMEHAAAQBv00xdKJNnKVKRVvhIuJl5spexffrak5Xn+uF+l2vHersJ4fl8Czq9GxXitwqIpLVkqvjeFxcejFm7HUnFMmJqI9RbTaEZ8LNvued0gi9oMAQcAANAG/fKFEgSpx5aGhMcNN83NhXvsvSxPq/Kmjms1yj+GTcWz/TICTtdqK162Ktgsvki9yxfFmT/PCzgvik+f/iz7VH3qUXFMM5V3iiNHpkqd1w2yqM0QcAAAAG3QD1+ox5v2LpnhxYVWxCxfPabcuWt3PdzifLDz41y6en/MHskqD4myKFr8+2xG6hpjGf0j1E4EnK0Opo4ZupbUI9T4Tdx2BVwqP5XZP+79m2/PyqXhseNCj1jnzL234Xg8L+73AlnUZgg4AACANuiHL4ym1SGJM3uk6X+2wn+JQSJKpnfZ9O1Oi2OPB73gsS8x+J/D8F86eODBx3NhkaIvMbQj4Mz8N2uFxJDSk/lVNv3ciMznZfWh8mu/XQGnlUn/RQdDP7ciEac87B3DGMdQeaxe/TdSU3lrpXTLW9tycbpFFrUZAg4AAKAN8IXQiqL3GLsFAQcAAFASfCFUBQIOAACgJPhCqAoEHAAAQEnwhVAVCDgAAICS4AuhKhBwAAAAJcEXQlUg4AAAAEqCL4SqQMABAACUBF+YRr+pJvN/DK/fnLM/oPe/U2e/J3f8xDf/gyr0+2qyov8inenIojZDwAEAALQBvjCPhJr9q8FdCxbVf5DX15XC9LdZ+jcI/4O9Ty9dkX3qz+d1rraVlv+XCbgAAg4AAKAk+MI8+jcE/9+pVkcSZT6e/snA/kw+xvX1qr/7ava/sDMVWdRmCDgAAIA2wBfm0f+tmjDTf7WmRJlW2mQrVq5u+J9Ti6NVN52rbf0XahR6gIADAAAoDb4wjb3X9i8/W1KvI73Lpv9pFV7Y6T052c5duxvq0/6vVI9Pd7y3K5fHTEcWtRkCDgAAoA3wha1J1dGcufcm/yM0PmYVa9ZubHgkCxdAwAEAAJQEX9ics2e/yB6p+jCtqKXq7ZllL+TCRCouIOAAAABKgy+EqkDAAQAAlARfCFWBgAMAACgJvhCqAgEHAABQEnwhVAUCDgAAoCT4QqgKBBwAAEBJ8IVQFQg4AACAkuALoSoQcAAAACXBF0JVIOAAAABKgi+EquhKwGEYhmEYhmHVWNRmbQk4AAAAABhacgEAAAAAMNzkAgAAAABguMkFAAAAAMBwkwsAAAAAgOEmFwAAAAAAw00uAAAAAACGm1wAAAAAAAw3uQAAAAAAGGL+f7OQDB9CRNNzAAAAAElFTkSuQmCC>