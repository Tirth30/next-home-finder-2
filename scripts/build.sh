docker login -u tirthpanchal585121 -p Tirth@2002

docker build -t home .

docker tag home tirthpanchal585121/home:tirth-nachiketa

docker push home:tirth-nachiketa