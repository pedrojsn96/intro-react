Feature: Main Feature

  Scenario: Teacher List
    Given the app has launched
    Then I see home page

  Scenario: Teacher Detail
    Given the app has launched
    When I press some teacher
    Then I go to teacher detail
