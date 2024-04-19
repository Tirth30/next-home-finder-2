----------------------------------------------------------------------------
STEPS TO RUN PROJECT
----------------------------------------------------------------------------
1-> Install Node Version 20.5.1 -> https://www.filehorse.com/download-nodejs-64/82116/download/#google_vignette
2-> Install npm
3-> Go in Project Directory
4-> run command -> npm start

----------------------------------------------------------------------------
Dockerfile RUN commands 
----------------------------------------------------------------------------
1 -> git clone https://github.com/Tirth30/next-home-finder-2.git
2 -> docker build -t frontend .
3 -> docker run  -p 5000:3000 frontend
4-> open chrome and search : localhost:5000

----------------------------------------------------------------------------
Docker-compose RUN commands 
----------------------------------------------------------------------------
1 -> git clone https://github.com/Tirth30/next-home-finder-2.git
2 -> docker-compose up
3 -> open chrome and search : localhost:7000
