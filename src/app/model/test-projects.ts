import { Project } from './project';
import { Task } from './task';

export var PROJECTS: Project[] = [
    new Project(1, 'Private', 8),
    new Project(2, 'Decode', 25),
    new Project(3, 'Family', 3),
    new Project(4, 'Cookle', 13)
];

function addDays(days) {
    var result = new Date();
    result.setDate(result.getDate() + days);
    return result;
}

export var TASKS: Task[] = [
    new Task(PROJECTS[0], 1, 'Earn a lot of money', addDays(2)),
    new Task(PROJECTS[0], 2, 'Call in barber shop', addDays(1)),
    new Task(PROJECTS[0], 3, 'Create a company', addDays(0)),
    new Task(PROJECTS[0], 4, 'Go to the shop', addDays(2)),
    new Task(PROJECTS[0], 5, 'Buy gifts', addDays(3)),
    new Task(PROJECTS[0], 6, 'Brush teeth', addDays(4)),
    new Task(PROJECTS[0], 7, 'Buy a plane tickets', addDays(5)),
    new Task(PROJECTS[0], 8, 'Fly away to the Thailand', addDays(5)),

    new Task(PROJECTS[1], 9, 'I can do it', addDays(0)),
    new Task(PROJECTS[1], 10, 'I could do it', addDays(1)),
    new Task(PROJECTS[1], 11, 'I can run fast', addDays(3)),
    new Task(PROJECTS[1], 12, 'I could run fast', addDays(4)),
    new Task(PROJECTS[1], 13, `I think that's clear`, addDays(5)),
    new Task(PROJECTS[1], 14, 'Could you help, please', addDays(6)),
    new Task(PROJECTS[1], 15, 'I could help him', addDays(7)),
    new Task(PROJECTS[1], 16, 'You could have done it yesterday', addDays(7)),
    new Task(PROJECTS[1], 17, 'You could hava avoided that mistake', addDays(8)),
    new Task(PROJECTS[1], 18, 'You could have followed her advice', addDays(8)),
    new Task(PROJECTS[1], 19, 'I could have studied mach better', addDays(8)),
    new Task(PROJECTS[1], 20, 'Shi could have helped me more often', addDays(9)),
    new Task(PROJECTS[1], 21, 'You cold have read that book', addDays(10)),
    new Task(PROJECTS[1], 22, 'You could have won in that championship', addDays(11)),
    new Task(PROJECTS[1], 23, 'You cold have learnt English for free', addDays(12)),
    new Task(PROJECTS[1], 24, 'I could have chosen another school', addDays(13)),
    new Task(PROJECTS[1], 25, 'I could have shown better result', addDays(14)),
    new Task(PROJECTS[1], 26, 'You could have bought that house very cheaply', addDays(15)),
    new Task(PROJECTS[1], 27, 'She could have become famous', addDays(16)),
    new Task(PROJECTS[1], 28, 'I suppose you could have learnt one more foreign language at school', addDays(17)),
    new Task(PROJECTS[1], 29, 'The end 1', addDays(18)),
    new Task(PROJECTS[1], 30, 'The end 2', addDays(20)),
    new Task(PROJECTS[1], 31, 'The end 3', addDays(20)),
    new Task(PROJECTS[1], 32, 'The end 4', addDays(20)),
    new Task(PROJECTS[1], 33, 'In fact, the end', addDays(20)),

    new Task(PROJECTS[2], 34, 'Roses are red', addDays(0)),
    new Task(PROJECTS[2], 35, 'My name is Dave', addDays(1)),
    new Task(PROJECTS[2], 36, 'This poem makes no sense', addDays(2)),
    new Task(PROJECTS[2], 37, 'Microwave', addDays(3)),

    new Task(PROJECTS[3], 38, 'one', addDays(2)),
    new Task(PROJECTS[3], 39, 'two', addDays(3)),
    new Task(PROJECTS[3], 40, 'three', addDays(4)),
    new Task(PROJECTS[3], 41, 'four', addDays(5)),
    new Task(PROJECTS[3], 42, 'five', addDays(6)),
    new Task(PROJECTS[3], 43, 'six', addDays(6)),
    new Task(PROJECTS[3], 44, 'seven', addDays(6)),
    new Task(PROJECTS[3], 45, 'eight', addDays(6)),
    new Task(PROJECTS[3], 46, 'nine', addDays(7)),
    new Task(PROJECTS[3], 47, 'ten', addDays(8)),
    new Task(PROJECTS[3], 48, 'eleven', addDays(9)),
    new Task(PROJECTS[3], 49, 'twelve', addDays(9)),
    new Task(PROJECTS[3], 50, 'thirteen', addDays(10)),
];