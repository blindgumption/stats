"use strict";


var statNames = Object.freeze({
    SEND: "sends", 
    NOTIF: "notifications", 
    REG: "registrations", 
    ERR: "errors"
});

class Counts {
    constructor() {
        for( var key in statNames ) {
            this[statNames[key]] = 0;
        }
    }
}

var totals = new Counts(); 
var intervals = new Counts();

function printCounts(counts) {
    for( var key in counts ) {
        console.log("key: " + key + " = " + counts[key]);
    }
}

function printIntervals() {
    console.log("======= Printing Interval Values");
    printCounts(intervals);
    console.log("=======");
}

function printTotals() {
    console.log("======= Printing Total Values");
    printCounts(totals);
    console.log("=======");
}

function incrementCount(stat, val) {
    console.log("=== incrementing " + stat + " by " + (val?val:1));
    if( stat in totals ) {
        if (val) {
            totals[stat] += val;
            intervals[stat] += val;
        } else {
            totals[stat] += 1;
            intervals[stat] += 1;
        }
    } else {
        console.log("oops, trying to increment " + stat);
    }
}

function resetIntervals() {
    console.log("======= Reset Interval Values to 0");
    for( var key in intervals ) {
        intervals[key] = 0;
    }
}

module.exports = {
    statNames: statNames,
    incrementCount: incrementCount,
    resetIntervals: resetIntervals,
    printTotals: printTotals,
    printIntervals: printIntervals
}


