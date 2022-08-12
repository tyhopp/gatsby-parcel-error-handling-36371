# gatsby-parcel-error-handling-36371

Attempted reproduction for https://github.com/gatsbyjs/gatsby/issues/36371.

Running on latest stable (`gatsby@4.20.0`) and version mentioned in issue (`gatsby@4.19.2`) throws the expected useful error message:

```
ERROR #11902  COMPILATION

We encountered an error while trying to compile your site's gatsby-config. Check the current limitations (https://gatsby.dev/ts-limitations), fix the error, and
 try again.

  SyntaxError: Unexpected token b in JSON at position 7

  - JSON.parse

  - gatsby-config.js:1 Object.b3siR.@parcel/transformer-js/src/esmodule-helpers.js
    /Users/tyhopp/Developer/gatsby/cs/gatsby-parcel-error-handling-36371/.cache/compiled/gatsby-config.js:1:1428

  (rest of stack trace, truncated for brevity)
```
