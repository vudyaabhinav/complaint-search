#!/usr/bin/env node

const program = require('commander');
const csv = require('ya-csv');

program
    .option('-y, --year <year>', 'filter complaints for year')
    .option('-s, --state <state>','filter complaints for state')
    .option('-c, --company <company>','filter complaints for company')
    .parse(process.argv);

const filterComplaints = (complaint) => {
    let addToResult = false;
    const filterData = {
        'year': new Date(complaint[0]).getFullYear(),
        'state': complaint[8],
        'company': complaint[7]
    };
    if (!!program.year && !!program.state) {
        if (program.year == filterData.year && program.state == filterData.state) {
            addToResult = true;
        }
    } else {
        if (program.year == filterData.year || program.state == filterData.state) {
            addToResult = true;
        }
    }
    if (program.company == filterData.company) {
        addToResult = true;
    }
    
    return addToResult;
}

const getComplaints = () => {
    return new Promise((resolve) => {
        const output = [];
        const reader = csv.createCsvFileReader(`${__dirname}/Consumer_Complaints_sm.csv`, {
            'separator': ','
        });
        reader.addListener('data', (complaint) => {
            if(program.year || program.state || program.company) {
                if (filterComplaints(complaint)) {
                    output.push(complaint);
                }
            } else {
                output.push(complaint);
            }
        });
        reader.addListener('end', () => {
            resolve(output);
        })
    });
}

async function main() {
    getComplaints().then((complaints) => {
        console.log(complaints);
    })
}


main();
