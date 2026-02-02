Feature: Purchasing policies

Background: User logs into platform
    Given the user is on the adviser platform login page
    When the user enters valid details
    Then the user is able to login succesfully

#Testing both monhtly and annual scenarios for adding additional addons when submitting a policy
Scenario Outline: Submit a buildings and contents policy with legal expenses and emergency cover addons
    Given the user creates a new buildings and contents quote
    When the user receives prices for quotes
    And the user adds home emergency cover addon
    And the user adds legal expenses cover addon
    Then the user is able to purchase the policy <paymentType>
    Examples:
        | paymentType |
        | monthly     |
        | annually    |

    
