const fs = require('fs');
const DOMParser = require('dom-parser');

const printXML = (element) => {
    console.log(`    ${element.nodeName}: ${element.textContent}`);
}

fs.readFile('test.xml', 'utf-8', (err, data) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');
    const noteElements = xmlDoc.getElementsByTagName('note');
        
    console.log("\nHandling getting a XML file\n")
    for(let i = 0; i <noteElements.length; i++) {
        const noteElement = noteElements[i];
        
        console.log(`- ${noteElement.nodeName}:`)
        for (let i = 0; i < noteElement.childNodes.length; i++) {
            const childNode = noteElement.childNodes[i];
            if (childNode.nodeType === 1) { 
                printXML(childNode);
            }
        }
    }   
    console.log('=======================================');
});


fs.readFile('test.json', 'utf-8', (err, data) => {
    console.log("\nHandling getting a JSON file\n");

    const jsonData = JSON.parse(data);
    for (const key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
            const value = jsonData[key];
            if (Array.isArray(value)) {
                console.log(`- ${key}`);
                for (const person of value) {
                    const i = 1;
                    for (const personKey in person) {
                        if (person.hasOwnProperty(personKey)) {
                            console.log(`    ${personKey} : ${person[personKey]}`);
                        }
                    }
                }
            }
        }
    }
 });
