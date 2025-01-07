---
layout: post
title: 12 other ways you can use code to your advantage as a Quality Engineer
date: 2025-01-07T00:00:00.000Z
draft: true
categories: Testing for Developers
tags:
  - Tools
  - Automation
---

The one obvious way Quality Engineers can use code to their advantage, is building out automated regression checks, in various forms. Here are some other ways you can use code as a QE, or indeed anyone involved in developing or testing software.

## Find bugs by reading code

Code review is an excellent way to contribute to improving the quality of code, learning and sharing knowledge about the software you're working on as a team. Some bugs, or opportunities for improved code quality can be found simply be reading code, while others you might want to take advantage of tools to help you, like linters or code analysing tools.

There are many things to look out for when reading code, here are a few that helped me find bugs in the past:

* Find logic, comparisons of equality, if and switch statements and talk them out, see if they make sense as a sentence for each path
* If an environment variable or configuration file is used, follow the name of the variable from where it is set to where it is used. I've found countless bugs from typos where a different value was being set, then being read. Oops!
* Look up and patterns, operators, functions or libraries you don't understand or know well, often examples in documentation can help you understand intended usages and good practice, that you can use to compare against the implementation in the code you're reviewing

## Code as glue

Even if it's only to support local tasks, and it's a script you only run a few times, code and help glue together different systems in really useful ways.

What do I mean by glue? The output from one system, might not be in a format that us useful to input into the next. Rather than mapping the format from one to the other by hand, some glue code could help you out!

Or maybe, you want to orchestrate a few different simple processes or tools, so one runs once the other is finished, a small sprinkling of code has helped me do this more than once.

For this, I typically don't write full applications, but rather use scripting languages, like PowerShell in Windows, or Shell Scripts in Linux or MacOS.

## Analyze a log file with code

Log files can be hugely beneficial when testing systems, they can provide singles for when things are running well, or errors for when things go wrong. Going back and looking at logs after a testing session can bring great value, but sometimes they are huge, and noisy.

A bit of code can help you cut through that noise in no time! Maybe you only need to use a tool, like jq, and a few command lines. Or maybe you need to write something more powerful to parse those wayward logs. There are some great, big, and useful tools for log analysis, but before you go that far, building something simple quickly can be really powerful.

## Build a practice app

Want to stretch your testing skills? Want to try out a specific tool or technique? Not happy with the practice apps that already exist, maybe they don't help cover your domain or use case?

Build a practice app! It doesn't have to be huge, just enough to help you learn, practice, or maybe teach others. It's a great experience building your own practice app, because it helps you exercise your coding skills, while working to build something to exercise your testing skills, win win.

A practice app I am currently building, is called [Snack Shop](https://github.com/make-believe-labs/snack-shop/tree/main), I used it to help teach a workshop at TestBash 2024.

## Code for exploratory testing

Shout out to [Maaret Pyhäjärvi](https://www.linkedin.com/in/maaret/) who has given talks and made other contributions, sharing her work using Code for Exploratory Testing. Maaret's work introduced me to the concept of starting with existing unit tests, and manipulating them explore different outcomes from different inputs.

## Generate test data

Without useful test data, your tests can be limited and miss boundaries or paths. Programatically generating test data can be very useful. In the past, I've used [Faker](https://fakerjs.dev/) and JavaScript to build up larger amounts of data, based on common standards and patterns. You can see an example [here](https://github.com/make-believe-labs/snack-shop/blob/main/dev/stock_snacks.js) on GitHub, where I'm using Faker to generate snacks with different names, and calling an API to populate stock for my snack shop practice app.

## Control an environment

## Fix a bug

## Draw diagrams with code

## Build system models in code

## Build a tool

## Automate performance testing
