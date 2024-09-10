Feature: Login functionality

  Scenario Outline: Unsuccessful login with incorrect password

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see an error message saying <message>

    Examples:
      | username      | password  | message                                                      |
      | standard_user | 10203040! | Username and password do not match any user in this service. |

  Scenario Outline: Unsuccessful login with incorrect username

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see an error message saying <message>

    Examples:
      | username       | password  | message                                                      |
      | standard_user1 | 10203040! | Username and password do not match any user in this service. |

  Scenario Outline: Unsuccessful login with empty username

    Given I am on the login page
    When I login with empty username <password>
    Then I should see an error message for empty username <message>

    Examples:
      | password  | message              |
      | 10203040! | Username is required |

  Scenario Outline: Unsuccessful login with empty password

    Given I am on the login page
    When I login with empty password <username>
    Then I should see an error message for empty password <message>

    Examples:
      | username      | message              |
      | standard_user | Password is required |

  Scenario Outline: Unsuccessful login with locked user

    Given I am on the login page
    When I login with locked user
    Then I should see an error message for locked user <message>

    Examples:
      | message                               |
      | Sorry, this user has been locked out. |

  Scenario Outline: Successful login with standard user

    Given I am on the login page
    When I login with standard user
    Then I should see a product page 

    Examples:
      |  |
      |  |
  
  Scenario Outline: Successful logout

    Then I should see a product page 
    Then I should be logged out

    Examples:
      |  |
      |  |