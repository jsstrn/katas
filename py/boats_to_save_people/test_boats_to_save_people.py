import unittest
from boats_to_save_people import BoatsToSavePeople

class TestBoatsToSavePeople(unittest.TestCase):
  def test_returns_one_boat(self):
    boats = BoatsToSavePeople()
    people = [1, 2]
    limit = 3
    self.assertEqual(boats.number_of_rescue_boats(people, limit), 1)

  def test_returns_three_boats(self):
    boats = BoatsToSavePeople()
    people = [3, 2, 2, 1]
    limit = 3
    self.assertEqual(boats.number_of_rescue_boats(people, limit), 3)
