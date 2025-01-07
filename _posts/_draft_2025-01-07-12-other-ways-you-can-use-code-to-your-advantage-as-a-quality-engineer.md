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
*  If an environment variable or configuration file is used, follow the name of the variable from where it is set to where it is used. I've found countless bugs from typos where a different value was being set, then being read. Oops!
* Look up and patterns, operators, functions or libraries you don't understand or know well, often examples in documentation can help you understand intended usages and good practice, that you can use to compare against the implementation in the code you're reviewing

## Build a tool


Code as glue
------------


Analyze a log file with code
----------------------------


Build a practice app
--------------------


Code for exploratory testing
----------------------------


Generate test data
------------------


Control an environment
----------------------


Fix a bug
---------


Draw diagrams with code
-----------------------


Build system models in code
---------------------------


Automate performance testing
----------------------------
