---
sidebar_position: 4
---

# Biometric Authentication

###  Pre-requisites
In order to enroll the user to the biometric authentication product, it is required that the user has an approved IDV session from the IDV integration, where the vendorData field is populated with a uuid, unique to each user that has been verified.

***An IDV integration and an authentication integration set up, connected to one another. For the vendorData field, we recommend using a 128-bit long value that is unique for all practical purposes, or something that can not be resolved or used outside of the vendor environment. It must meet the regular expression pattern: [a-zA-Z0-9_.\-:]+***

