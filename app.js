const chalk =  require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

//Customize yargs version
yargs.version('2.0.0')

//create add command
 yargs.command({
     command: 'add',
     describe: 'Add a new note',
     builder: {
         title: {
             describe: 'Note title',
             demandOption: true,
             type: "string"
         },
         body: {
             describe: 'Note body',
             demandOption: true,
             type: 'string'
         }
     },
     handler(argv) {
        notes.addNote(argv.title, argv.body)
     }
 })

 //create remove command
 yargs.command({
    command: 'remove',
    describe: 'Removing an existing note',
    builder: {
        title: {
            describe: 'Existing note title to be removed',
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)

    }
})

 //create read command
yargs.command({
    command: 'read',
    describe: 'Read an existing note',
    builder: {
        title: {
            describe: "title of note to be read",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})

 //create list command
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler() {
        notes.listNotes()
    }
})

yargs.parse()

//console.log(yargs.argv)


