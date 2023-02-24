---
sidebar_position: 5
---

# Verifying User

Using your configured IDV integration, verify the user’s identity.
``vendorData`` field must be set to the unique user UUID (see above).
The face images of approved sessions through the IDV integration (identified with ``vendorData`` field) will be automatically added to the set of approved faces, which can be used for future authentications.

### Authenticate the user
This is applicable once the user has an approved session containing a populated `vendorData` with their unique UUID:

- Generate an authentication session using the Authentication integration tokens. (Check `/sessions` endpoint in the API reference). Use the `vendorData` field to pass the same user identifier used in the IDV session.

- Capture the user face using the SDKs. Send the end user through the verification flow to capture the new face image using one of the SDKs. You will need the session url generated at step 1 to use the SDKs.

**Note** : Session will be submitted automatically once the user takes necessary images of their face.

- Receive the results via # webhooks.
