## Step 1 —  Problem samjho

1. Understand the Problem

- Organize files by extension: user hame bataye ga ki kis file ko organize karna hai aur hamme use organize karna hai.

2. Define requirements

### ODP Planing

- Does your program have an interface? what will it look like?
  our program will be a command line tool run in terminal
- what inputs your program have? Will the user enter data or will you get input from somewhere else?
  the user will enter the path of the folder to organize
- what is the desired output
  the desired output is identify the file and move he files to thier respected folders

### ChatGPT

A. Problem kya hai?

- organize the file of the folder give by the user
  B. what will be the input
  - user give the path of the folder to organize
  - C:\Users\Ashu\Downloads
  - imagine folder me ye file hai
    Downloads/
    ├── photo.jpg
    ├── notes.pdf
    ├── video.mp4
    ├── logo.png
    └── resume.docx

C. what will be the expected output

- after orgainzing folder
  Downloads/
  ├── Images/
  │ ├── photo.jpg
  │ └── logo.png
  ├── Documents/
  │ ├── notes.pdf
  │ └── resume.docx
  └── Videos/
  └── video.mp4

D. what to support for now

- organize file on the give folder

E. How do we know success

- if the input is  
   Downloads/
  ├── photo.jpg
  ├── notes.pdf
  ├── video.mp4
  ├── logo.png
  └── resume.docx

expected output is
Downloads/
├── Images/
│ ├── photo.jpg
│ └── logo.png
├── Documents/
│ ├── notes.pdf
│ └── resume.docx
└── Videos/
└── video.mp4

result of this step: you know what to build or what not to build

3. Identify the constraints
   - Version 1 only support this features
    1. Organize files by extension
    2. Automatically create folders
    3. Scan a directory

4. Break it into smaller problems

Step 3: Ye process yaad rakho

1. Requirement
• User task add kar sake.

2. Actions
• Input lena → Validate karna → Store karna → Dikhana

3. Possible components
• Input handler → Validator → Task manager → UI 

### Step 1: Input aur output ke beech ka gap dekho

Input: 
   Downloads/
  ├── photo.jpg
  ├── notes.pdf
  ├── video.mp4
  ├── logo.png
  └── resume.docx

output: 
Downloads/
├── Images/
│ ├── photo.jpg
│ └── logo.png
├── Documents/
│ ├── notes.pdf
│ └── resume.docx
└── Videos/
└── video.mp4


### Step 2: Actions ko discover karne ke liye 4 questions poochho
  1. Input mein kya-kya information hai?
  - unorganize files that are needed to be organize 

  2. Input ko output mein badalne ke liye kya samajhna padega?
  - read the files extension of folder 
  - identify which extension belongs to images, videos, documents etc
  - push the files into the respected folder

  3. Kya transformation karna padega?
  - add the files to thier respected folder

  4. Kaun se cases handle karne padenge?
  - empty input, duplicate folders


### Step 3: Ab actions se components banao
  Discovered actions
• identify the type of file
• move the folder to its respected folder

  Possible component
• Parser
• organizer

## 3. Solution design

Input: 
C:\Users\Ashu\Downloads
   Downloads/
  ├── photo.jpg
  ├── notes.pdf
  ├── video.mp4
  ├── logo.png
  └── resume.docx


Expected output:      
Downloads/
├── Images/
│ ├── photo.jpg
│ └── logo.png
├── Documents/
│ ├── notes.pdf
│ └── resume.docx
└── Videos/
└── video.mp4

Possible components

• get the pathe of the folder to organzie.
• every file read its extension.
• identify which file belongs to which folder.
• log message folder is organized.


#### Step 1: Components ke naam dekhkar algorithm mat banao

"Input se expected output tak pahunchne ke liye mujhe kaun-kaun se decisions lene padenge?"

Iska jawab dhoondhne ke liye input aur output ko compare karo.

Input: 
C:\Users\Ashu\Downloads
   Downloads/
  ├── photo.jpg
  ├── notes.pdf
  ├── video.mp4
  ├── logo.png
  └── resume.docx


Expected output:      
Downloads/
├── Images/
│ ├── photo.jpg
│ └── logo.png
├── Documents/
│ ├── notes.pdf
│ └── resume.docx
└── Videos/
└── video.mp4


Ab khud observe karo: input aur output ke beech kya-kya badla?
- new  respected folders are created for the file
- files are added to the respected folder
- no folder in input

#### Step 2: Har observation ko ek question mein badlo
- how does the program know to create this folder for this particular file
- how files are added to its respected folder

#### Step 3: Har question ke possible answers khud generate karo9ir

Qusetion 1: how does the program know to create this folder for this particular file

Possible approaches socho:
• Approach A: read the extension of file and identify the type of file create respected folder for it if not exits and add into it
• Approach B: File Signatures or "Magic Numbers" (The Reliable Way)

Question 2: files are added to the respected folder

Possible approaches socho:
• Approach A: check if the folder for the file exits in directory, if not then create and file to the respected folder
• Approach B:

Step 4: Decisions ko ek sequence mein arrange karo

"Kisi folder ko organize karne ke liye mujhe kya pata hona zaroori hai?"

Pseudocode likho.
- take the path of the folder to organize from user
- read the extension of file and identify the type of file
- check the folder for the file exits in which to put file
- if not exits create folder for file and put in it
- do this for all files in the folder