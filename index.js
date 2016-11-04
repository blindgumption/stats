"use strict";

var stats = require("./stats");

stats.printIntervals();
stats.printTotals();

stats.incrementCount(stats.statNames.SEND, 3);
stats.incrementCount(stats.statNames.NOTIF);
stats.incrementCount(stats.statNames.ERR, 2);

stats.printIntervals();
stats.printTotals();

stats.resetIntervals(); 

stats.incrementCount(stats.statNames.SEND, 42);
stats.incrementCount(stats.statNames.NOTIF);
stats.incrementCount(stats.statNames.REG);

stats.printIntervals();
stats.printTotals();
