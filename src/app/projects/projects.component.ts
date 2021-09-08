import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      name: 'Easybasic Interpreter',
      desc: 'A modren interpreter for BASIC language',
      detail: "Easy Basic is a free educational app developed with the aim to help computer science students to overcomefundamental problems in learning program comprehension. Easy Basic can provide a complete modren envirnoment towrite and execute GwBasic program. Easy Basic will able to visualize execution of GwBasic programming language asGwBasic programming language is adopted by all major computer science institutes as introductory programminglanguage.",
      tags: ["Javascript", "Webpack", "NodeJS", "Angular"],
      links: [
        { name: 'Github', href: "https://github.com/easy-basic" },
        { name: "Homepage", href: "https://easy-basic.github.io/" }
      ]
    },
    {
      name: 'Monaco BASIC',
      desc: "Implementation of Easybasic for Monaco Editor",
      detail: "Easy Basic is a free educational app developed with the aim to help computer science students to overcome fundamental problems in learning program comprehension. Easy Basic can provide a complete modren envirnoment to write and execute GwBasic program. Easy Basic will able to visualize execution of GwBasic programming language as GwBasic programming language is adopted by all major computer science institutes as introductory programming language.",
      tags: ["JavaScript", "Webpack", "NodeJS", "Angular"],
      links: [
        { name: 'Github', href: "https://github.com/easy-basic" },
        { name: "Homepage", href: "https://easy-basic.github.io/" }
      ]
    },
    {
      name: "Maze Solver (Reinforcement Learing)",
      desc: "A bot that trys find the optimal path in a maze",
      tags: ["JavaCcript", "HTML/CSS", "Reinforcement.js"],
      links: [
        { name: 'Github', href: "https://github.com/easy-basic" },
        { name: "Homepage", href: "https://easy-basic.github.io/" }
      ]
    },
    {
      name: "Slide Puzzle Solver",
      desc: "A bot that solves Slide Puzzle of any complexity",
      tags: ["JavaCcript", "HTML/CSS"],
      links: [
        { name: 'Github', href: "https://github.com/easy-basic" },
        { name: "Homepage", href: "https://easy-basic.github.io/" }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
