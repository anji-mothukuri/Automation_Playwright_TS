Feature: Login functionality

Scenario: Validate login functionality with correct username and password
    Given I navigate to login page
    When I enter valid username "standard_user"
    And I enter valid password "secret_sauce"
    And I click on submit button
    Then I should navigate to home page

Scenario: Validate login functionality when only enter password
    Given I navigate to login page
    And I enter valid password "secret_sauce"
    And I click on submit button
    Then I should see error message "Epic sadface: Username is required"

    Scenario: Validate login functionality when enter only username
    Given I navigate to login page
    When I enter valid username "standard_user"
    And I click on submit button
    Then I should see error message "Epic sadface: Password is required"

    Scenario: Validate login functionality with invalid username and password
    Given I navigate to login page
    When I enter valid username "abcd"
    And I enter valid password "1234"
    And I click on submit button
    Then I should see error message "Epic sadface: Username and password do not match any user in this service"