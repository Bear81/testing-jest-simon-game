/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore } = require("../game");

beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

describe("game object contains correct keys", () => {
  test("score key exists", () => {
    expect("score" in game).toBe(true);
  });
  test("currentGame key exists", () => {
    expect("currentGame" in game).toBe(true);
  });
  test("playerMoves key exists", () => {
    expect("playerMoves" in game).toBe(true);
  });
  test("choices key exists", () => {
    expect("choices" in game).toBe(true);
  });
  test("choices contains correct ids", () => {
    expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
  });
});

describe("New game works correctly", () => {
  beforeAll(() => {
    game.score = 42;
    game.currentGame = ["button1", "button2", "button3", "button4"];
    game.playerMoves = ["button1", "button2", "button3", "button4"];
    document.getElementById("score").innerHTML = "42";
    newGame();
  });
  test("Should set the playerMoves array to empty", () => {
    expect(game.score).toEqual(0);
  });
  test("Should set the game score to 0", () => {
    expect(game.currentGame).toEqual([]);
  });
  test("Should set the curentGame array to empty", () => {
    expect(game.playerMoves).toEqual([]);
  });
  // test("Should display 0 for the element with ID of score", () => {
  //   expect(document.getElementById("score").innerHTML).toEqual("0");
  // });
  test("should display 0 for the element with id of score", () => {
    expect(document.getElementById("score").innerText).toEqual(0);
  });
});
