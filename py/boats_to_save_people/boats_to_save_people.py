"""
https://leetcode.com/problems/boats-to-save-people/

"""

from typing import List

class BoatsToSavePeople:
  def number_of_rescue_boats(self, people: List[int], limit: int) -> int:
    boats = 0

    left = 0
    right = len(people) - 1

    sortedPeople = sorted(people)

    while(left <= right):
      if (sortedPeople[left] + sortedPeople[right] <= limit):
        left += 1
      right -= 1
      boats += 1

    return boats
