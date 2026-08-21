---
title: "Idő lekérdezése"
description: "Nézd meg egy város aktuális idejét."
en_md5: 8353eee229bee19f27557a7f56933a6a
---

Create a function called <define>`getTime`</define> which takes a city as its input, uses the <define>`fetch`</define> function to get the time in that city, then returns it as part of a string.

The URL of the API is "https://timeapi.io/api/time/current/city".
The params for `fetch` should have one <define>`key`</define> "city" set to the string passed into `getTime`.

You should turn the response into a string formatted like: "The time on this Sunday in Amsterdam is 00:28"

If the response contains an "error" key, return the error message instead.
