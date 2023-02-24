---
sidebar_position: 7
---
# Create Session API

Sample JSON object
```
{
    "verification": {
        "callback": "https://www.myearth.id/",
        "person": {
            "firstName": "John",
            "lastName": "Smith"
        },
        "document": {
            "type": "PASSPORT",
            "country": "EE"
        },
        "vendorData": "unique id of a user"
    }
}
```

The simplest way to get a verification link for web verification flow is to create JSON object containing the user's name and the redirect(callback) URL to which the user will be sent after completing web verification flow (usually it is "Thank you" or "Waiting" page on your side). Then use HTTP POST to send the object to https://session.myearth.id/earthid/api/sessions , with Content-Type application/json and the X-AUTH-CLIENT header containing your API Key.
In response, a JSON session ID and a URL will be sent as follows:
```
   "status": "success",
   "verification": {
       "id": "a66ad316-19c3-45e1-b592-de6498………",
       "url": "https://myearth.id/eyJhbGciOiJIUzI1NiIsInR5cCI………",
       "vendorData": null,
       "host": "https://myearth.id/",
       "status": "created",
       "sessionToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uX2l………"
   }
}
```
The URL of the verification session is where end-user should be redirected on web.

The session ID should be saved on your end - you can tie back the webhook responses to your customer record that way.

The `sessionToken` is a JSON web token that consists of HS256 encrypted session ID and session creation timestamp. It will expire in 7 days. Note that you should always use the **variable max length type** for the `sessionToken` and not define it. If absolutely needed, you can set the length to max value: 4096 characters.

Once the end user completes the verification flow, they will be redirected to the callback URL. If the callback URL is not specified for the session, the user will be redirected to Integration's default Callback URL. It is important to note, the callback does not contain any decision or verification information yet.

