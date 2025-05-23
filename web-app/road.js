/**
 * road.js is a module to model and play "crossy road".
 * @namespace road
 * @author Phoebe
 * @version 2025
 */
const road = Object.create(null);

/**
 * 
 * @memberof road
 * @typedef {road.live_or_die} grid
 */

const { clamp, evolve } = R;

const GRID_SIZE = 10;

/**
 * A token is a coloured disk that players place in the grid.
 * @memberof road
 * @typedef {{ x: number[], y: number[]}} State
 */

/**
 * Starts game with player at bottom centre
 * @memberof road
 * @typedef {object} initialState starting coordinates of player
 */

road.initialState = {
  player: { x: 0, y: 9 }
};

/**
 * Moves player
 * @memberof road
 * @function
 * @param {Event} [direction] Arrow key pressed for movement.
 * @param {State} [state] Current coordinates.
 * @returns {State} New player coordinates
 */

road.movePlayer = (direction, state) => {
  const deltas = {
    ArrowUp:    { x: 0,  y: -1 },
    ArrowDown:  { x: 0,  y: 1 },
    ArrowLeft:  { x: -1, y: 0 },
    ArrowRight: { x: 1,  y: 0 }
  };

  const delta = deltas[direction] || { x: 0, y: 0 };

  const newX = clamp(0, GRID_SIZE - 1, state.player.x + delta.x);
  const newY = clamp(0, GRID_SIZE - 1, state.player.y + delta.y);

  return evolve({
    player: () => ({ x: newX, y: newY })
  }, state);
};
export default Object.freeze(road); 
