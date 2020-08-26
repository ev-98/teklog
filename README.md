# teklog
Full-stack blog with post text editable in markdown

# final implementation goals
admin should be able to post, delete and edit article entries using markdown. article entries should be given the proper upload date. article entries should be given a named path based on upload content. todo: add user roles for database access.

# technologies used
html, js, node.js, express, mongodb.
imports slugify for title routing
imports marked to convert markdown
imports dompurify for html sanitization before posting
imports method-override to use DELETE and PUT
