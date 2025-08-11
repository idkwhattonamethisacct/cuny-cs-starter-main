# CUNY Summer STEM Academy - Computer Science

## About

This GitHub repository contains student starter files for the Computer Science course offered as part of the City University of New York (CUNY) Summer STEM Program. 

This course will make use of the following tools:

- **Git:** A version control system that tracks changes to your code. Think of it as a time machine for your files that lets you save snapshots and undo mistakes.
- **GitHub:** A website that hosts your Git repositories online. It's like Google Drive for code, letting you share and collaborate with others.
- **Visual Studio Code (VS Code):** a free code editor for writing HTML, CSS, and JavaScript (and other code). It has built-in support for Git and helpful tools like syntax highlighting.
- **Repository (Repo):** A folder containing your project files with Git tracking all changes. Every file and its history lives in this "container."
    - **Forking:** Creating your own copy of someone else's GitHub repository. Like making a personal copy of a document to modify without affecting the original.
    - **Cloning:** Downloading a GitHub repository to your computer. This creates a local version you can work on and sync back to GitHub.

These tools are essential for modern web development. Git + GitHub handle version control and collaboration, while VS Code provides the workspace for writing code.

## Getting Started

### Step 1: Set up GitHub Account and Fork Starter Code

1. Create a free account or log in to an existing account at [GitHub.com](https://github.com/)
2. In the top-right corner of this GitHub repository page, click **Fork**
    - By default, a forked repository has the same name and description as the original repository. You may accept the defaults or change the name/description as desired.
3. Click **Create fork** to copy the repository to your personal GitHub account

### Step 2: Install VS Code and Git to Local Machine

1. [Install VS Code](https://code.visualstudio.com/download) to your local machine
2. [Install Git](https://git-scm.com/downloads) to your local machine
3. Open VS Code (without opening any folder)
4. Add Git identity information to your local machine
    1. From the VS Code menu, click **View > Terminal**
    2. Confirm Git is properly installed by entering `git --version` into the terminal and pressing enter. You should see "git version 2.49.0" (or similar) presented back to you.
    3. Configure your Git **name** by entering `git config --global user.name "Your Name"` into the terminal and pressing enter
    4. Configure your Git **email address** by entering `git config --global user.email "your.email@example.com"` into the terminal and pressing enter
    5. Confirm the Git name and email address has been properly configured by entering `git config user.name` or `git config user.email` into the terminal and pressing enter. The value you entered should be presented back to you.

*Note: Git will use the name and email address you provide to identify who is making changes to the repository on your local machine. You may use any name and email address that properly identifies you, but it is recommended to use the same email address as used for your GitHub account.*

### Step 3: Clone Repository to Local Machine

1. From the VS Code menu, click **View > Source Control**
2. Click the **Clone Repository** button
3. Click **Clone from GitHub**
4. Sign in to GitHub if prompted
5. Search for your forked repository (should be named `your-username/cuny-cs-starter`)
6. Select your forked repository from the list
7. Choose a folder location on your computer to store the repository (e.g., create a "CUNY" folder on your Desktop)
8. VS Code will clone the repository inside of your chosen folder and ask if you want to open it
9. Click **Open** to start working with your files
10. You're now ready to start coding!

### Step 4: Working with Your Code and Using Source Control

#### Editing Your Files

- Open files by clicking on them in the VS Code file explorer (left sidebar)
- Edit files directly in VS Code's editor window
- Save your work using **File > Save** from the menu

#### Using VS Code's Source Control

1. Access the Source Control panel:
   - From the menu, click **View > Source Control**
   - Or click the Source Control icon in the left sidebar (it looks like a branch)
   - You'll see any files you've changed listed under "Changes"

2. Save your work to GitHub:
   - Type a short message describing your changes in the "Message" box (e.g., "Completed HTML assignment")
   - Click the **Commit** button
   - Click the **Sync Changes** button to send your changes to GitHub

3. Verify your work:
   - Visit your forked repository on GitHub
   - You should see your latest changes reflected there

#### Basic Source Control Flow

1. Make changes to your files
2. Save your work using **File > Save** or **File > Save All**
3. Open Source Control panel using **View > Source Control**
4. Write a commit message summarizing the changes
5. Click **Commit**
6. Click **Sync Changes**

#### Tips

- Commit and sync regularly to save your progress
- Use clear, descriptive commit messages