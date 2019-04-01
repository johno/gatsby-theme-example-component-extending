# Component extension example with Gatsby Themes

This example is intended to show how component extension can work
with Gatsby Themes. It doesn't do much more than render colored boxes
to the screen.

![image](https://user-images.githubusercontent.com/1424573/55350501-80c9de00-5479-11e9-997b-c84d3621fd47.png)

## What's happening?

Here we have two themes, gatsby-theme-rebeccapurple and gatsby-theme-tomato.
Tomato is the parent theme to RebeccaPurple. RebeccaPurple imports the box
component from Tomato and uses that to wrap its own purple box. It overrides
the Tomato box via component shadowing.

The site installs and uses gatsby-theme-rebeccapurple. It extends the
RebeccaPurple box by importing it and wrapping it with its own papayawhip
box (also via component shadowing).

## Why?

This pattern of extensions can be useful when you want to wrap an existing
component or change its props.

## Installation

```sh
git clone https://github.com/gatsby-theme-example-component-extending
cd gatsby-theme-example-component-extending
yarn
```

## Usage

```sh
yarn workspace site start
```
