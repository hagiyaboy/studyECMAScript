"use strict";

function countdown(due) {
    const now = new Date();

    const rest = due.getTime() - now.getTime();
    const sec = Math.floor(rest / 1000) % 60;
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 / 24);
    const count = [days, hours, min, sec];

    return count;
}

let goal = new Date();
goal.setYear(2025)
goal.setMonth(5)
goal.setDate(3)
goal.setHours(0);
goal.setMinutes(0);
goal.setSeconds(0);

function recalc() {
    const counter = countdown(goal);
    document.getElementById("days").textContent = counter[0];
    document.getElementById("hours").textContent = counter[1];
    document.getElementById("minutes").textContent = String(counter[2]).padStart(2,"0");
    document.getElementById("seconds").textContent = String(counter[3]).padStart(2,"0");

    refresh();
}

function refresh() {
    setTimeout(recalc, 1000);
}

recalc();