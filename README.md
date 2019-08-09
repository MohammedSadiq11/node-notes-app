# node-notes-app
A simple node application where data for title and body of a note is passed using command line.
Data is stored in JSON format.
Yargs package used. 

To run:-
Open the folder in visual studio code
run npm init 


Functionalities provided:-
1.add a note
2.reading a note by title
3.listing all notes
4.removing a note by title



To add:-
node app.js add  --title="Bikes" --body="1.Yamaha 2.Pulsar 3.Kawasaki"

To read:-
node app.js read --title="Bikes"

To list:-
node app.js list

To remove:-
node app.js remove --title="bikes"


