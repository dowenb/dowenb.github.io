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

From managing test data, bringing services up and down, collecting logs, or launching tasks, code can help manage environments, be they locally on your machine or shared environments deployed to some infrastructure.

You can also introduce test doubles, or mocks into environments to replace parts of your system that otherwise would be expensive, hard to control, or are simply not finished yet.

You can use code to help simulate faults, load, or set systems into a given state. All helpful as part of system testing.

## Draw diagrams with code

OK so this one might be more Mark Up, then application code, you got me. But you can still let it sit next to your application code, and control and version it within your source control system.

I've found the [C4 model,](https://c4model.com/) described in UML can be a useful way to describe and communicate a system.

## Walk your system by modelling it with code

[AltWalker](https://github.com/altwalker) is a tool you can use for something called Model Based Testing. Using Alt walker, you can describe a state model of your system and provide instructions, using code, to allow it to carry out actions to walk though different states and log results so you can analyse many more paths then you could easily do otherwise.

My friend and colleague James Thomas has a great post; [Great Shot, Kid](https://qahiccupps.blogspot.com/2022/05/great-shot-kid.html); where he talks about using Alt Walker for model based testing.

## Automate performance testing

To compliment functional regression checks, you can use code to automate performance tests, by applying load in various patterns to your system. I've used a few tools for this, I vastly prefer any solution that is driven by code, instead of XML and a UI (I'm looking at you, jMeter).

The three tools I know best for this are:

* [https://gatling.io/](https://gatling.io/)
* [https://k6.io/](https://k6.io/)
* [https://locust.io/](https://locust.io/)

## Build a tool

Sometimes, building your own is the only way, and it can be glorious. An extension to code as glue, generating test data or analysing logs, building small reusable tools can be very helpful to your testing efforts.

You might simply take scripts you've already built up, and generalise them such as you can share them with others in your team, that is enough. Or, you might go further and build a CLI or even a UI, to make your tool easier to use for others, or future you.

However you do it, and whatever you build, being your own tool smith can being huge value to you and your team, and your testing and quality efforts.

## Fix a bug

OK lets finish strong. Code can help you find bugs, but it's also the answer to fixing bugs! Take your code skills, and put them to use on product code, and fix that bug.

I've had great success now with a number of teams, not only finding but also fixing bugs. Many of them have been low hanging fruit, typos, missing or incorrect configuration. Other times I've contributed fixes for bugs I've advocated for, such as fixes for accessibility problems, that might not have had the priority they deserve otherwise.

I highly recommend pairing with developers on your team to fix bugs together, a short cycle of debugging, identifying the root cause, implementing a fix and testing it together, can be a really efficient use of your time and theirs.
