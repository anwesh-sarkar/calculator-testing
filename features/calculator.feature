Feature: Calculator
  Scenario: Add two numbers
    Given the user clicks on the number 13
    And clicks the "ADD" button
    When the user clicks on the number 2
    And clicks the "EQ" button
    Then the result should be "15"
