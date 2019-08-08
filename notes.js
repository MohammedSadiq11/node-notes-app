const fs = require('fs')
const chalk = require('chalk')

const addNote =  (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title ) 

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    } else {
        console.log('Note title already exits')
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    
}

const loadNotes = () => {
    try{
        const dataBuffer =  fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    
    const notes = loadNotes()
    const noteToKeep = notes.filter( (note) =>  note.title !== title)
    if (notes.length === noteToKeep.length) {
        console.log(chalk.red.inverse('No note found'))
    }
    else {
    saveNotes(noteToKeep)
    console.log(chalk.green.inverse('Note removed'))
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green('Your Notes are....'))
    notes.filter((note) => {
        console.log('Title : ' + note.title)
        console.log('Body : ' + note.body)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const notePresent = notes.find((note) => note.title === title)
    if(notePresent) {
        console.log('Title: ' + chalk.green.inverse(notePresent.title))
        console.log('Body: ' + notePresent.body)
    } else {
        console.log(chalk.red('No note found with that title'))
    }
}

module.exports = { 
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote

}