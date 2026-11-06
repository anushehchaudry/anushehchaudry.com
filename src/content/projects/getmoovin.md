---
title: GetMoovin
context: iOS health app · Team project
when: "2023"
order: 7
skim: "An iPhone app that helps people walk more with daily step goals, progress charts, and nudges."
topics: [health, products]
role: Built the long-term progress chart and kept it in sync with each user's goal, added the motivational messages, and designed the app icon.
deep:
  - "Reads step counts from Apple Health (HealthKit) and shows progress toward a daily goal as a ring, with a <mark>long-term chart of daily steps</mark> against the goal."
  - "Onboarding asks for Health and notification permissions and helps people set a goal; finishing the day's goal unlocks a shareable photo."
  - "Built in Swift and SwiftUI on Stanford's CardinalKit framework for health apps, with automated builds and TestFlight releases."
figure:
  src: "/figures/getmoovin-sketch.svg"
  alt: "Sketch of two phone screens: a ring showing 7,840 of 10,000 steps with a motivational quote, and a bar chart of daily steps against a goal line."
  caption: "A sketch of the two main screens, not a screenshot. The progress chart (right) was my part."
tags: [Swift, SwiftUI, HealthKit, CardinalKit]
links:
  - { label: Code, href: "https://github.com/CS342/2023-GetMoovin" }
---
An iPhone app that nudges people to walk more. It reads their <mark>daily steps from Apple Health</mark>, tracks progress toward a goal they set, and keeps them going with long-term charts and motivational messages.
