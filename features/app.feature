Feature: Something

   Feature Description

   Scenario: First
    When I'm on the main page
    Then The root element class should be App

  Scenario: Second
    When I'm on the main page
    Then The main div should not have any Person children divs by default

  Scenario: Third
    When I'm on the main page
    Then "Toggle Person list" button is present

  Scenario: Forth
    When I'm on the main page
    Then The main div has 3 div children styled with Person class

  Scenario: Fifth
    When I'm on the main page
    Then Click on on the middle text of the second card removes the second card