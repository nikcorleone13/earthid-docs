---
sidebar_position: 6
---
# Biometric Authentication Handlings

## Biometric Authentication handling decisions
The `verification.status` and `verification.code` can be :
- `approved`, code 9001
- `declined`, code 9102
- `expired/abandoned`, code 9104

## Biometric Authentication handling the decision: reasons

|Status |Code | Description |
|-----|--------| ------------|
|`Declined`| 105 |Suspicious behavior|
|`Declined`| 106 |Known fraud |    
|`Declined`| 120| Person on the portrait does not appear to match reference photo |
|`Declined`| 121| User ID missing |
|`Declined`| 122| No reference found |
|`Declined`| 605| Face image missing |        
|`Declined`| null| null | 



## Biometric Authentication Service Flow Diagram


![An image from the static](/img/flow.jpg)