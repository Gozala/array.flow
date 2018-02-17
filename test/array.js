// @flow strict

import * as array from "../"
import test from "blue-tape"

test("test baisc", async test => {
  test.isEqual(typeof array, "object")
  test.deepEqual(array.array0(), [], "[]")
  test.deepEqual(array.array1(1), [1], "[1]")
  test.deepEqual(array.array2(1, 2), [1, 2], "[]")
  test.deepEqual(array.array3(1, 2, 3), [1, 2, 3], "[1, 2, 3]")
  test.deepEqual(array.array4(1, 2, 3, 4), [1, 2, 3, 4], "[1, 2, 3, 4]")
  test.deepEqual(
    array.array5(1, 2, 3, 4, 5),
    [1, 2, 3, 4, 5],
    "[1, 2, 3, 4, 5]"
  )
  test.deepEqual(array.array(1, 2, 3, 4, 5), [1, 2, 3, 4, 5], "[1, 2, 3, 4, 5]")
  test.deepEqual(array.array(1, 2, 3, 4), [1, 2, 3, 4], "[1, 2, 3, 4]")
  test.deepEqual(array.array(1, 2, 3), [1, 2, 3], "[1, 2, 3]")
  test.deepEqual(array.array(1, 2), [1, 2], "[1, 2]")
  test.deepEqual(array.array(1), [1], "[1]")
  test.deepEqual(array.array(), [], "[]")
  test.deepEqual(
    array.array(1, 2, 3, 4, 5, 6, 7, 8, 9),
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
  )

  test.deepEqual(array.push([], 1), [1], "push([], 1) -> [1]")
  test.deepEqual(
    array.push([2, 3], 1),
    [2, 3, 1],
    "push([2, 3], 1) -> [2, 3, 1]"
  )
})
