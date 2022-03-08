---
title: Inversion of Control
last_modified: 2020-05-30T15:54:15+02:00
---

## Inversion of Control

Inversion of Control (IoC) is a design principle (although, some people refer to it as a pattern). As the name suggests, it is used to invert different kinds of controls in object-oriented design to achieve loose coupling. Here, controls refer to any additional responsibilities a class has, other than its main responsibility. This include control over the flow of an application, and control over the flow of an object creation or dependent object creation and binding.

Example:

- Service Locator
- Factory
- Template Method
- Dependency Injection
- Abstract Factory
- Strategy

## Dependency Inversion Principle

1. High-level modules should not depend on low-level modules. Both should depend on the abstraction
(A high-level module is a module which depends on other modules).
2. Abstractions should not depend on details. Details should depend on abstractions.



### Dependency Injection

Dependency Injection (DI) is a design pattern used to implement IoC. It allows the creation of dependent objects outside of a class and provides those objects to a class through different ways. Using DI, we move the creation and binding of the dependent objects outside of the class that depends on them.


### Referenced links

https://www.tutorialsteacher.com/ioc/introduction