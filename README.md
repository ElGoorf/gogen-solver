# gogen-solver

Gogen is a solo game presented on a 5x5 grid, with a letter revealed in the first, middle and last columns and rows. A list of words is given and the player solves the puzzle by filling in the remaining 16 cells to fit the words onto the grid, traversing horizontally, vertically, or diagonally to adjacent cells. Each letter can only appears once on the grid.

This monorepo provides core and ui packages to build your own gogen solver, and also provides samples to test with.

## Packages

### @gogen-solver/core
Core functions required to solve a gogen puzzle.

### @gogen-solver/samples
Some sample puzzles to test with.

### @gogen-solver/example
A demo app using `@gogen-solver/core` with `@gogen-solver/samples` through node console. 

### @gogen-solver/react
Coming next - UI components for React app interface.

## Installation

Standard `npm install` / `yarn add` `@gogen-solver/core` and then whatever libraries you require.

## Try it out

See the `samples` inside `@gogen-solver/samples` for an example of how to prepare data to be solved in JSON format. a JSONSchema doc is provided. Remember to use "_" (underscores) in place of empty cells.

### Examples

With `@gogen-solver/examples` set up, enter either:

`yarn example1` to quickly see it in action with a predefined sample,

or

`yarn example2 ES_2018-01-26` for an example of specifying a sample to use. Don't bother to include the `.json` extension
