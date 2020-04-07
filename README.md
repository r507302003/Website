# Homework #8 Solution

**Student Name**:  Tien-Hui Feng
**NetID**: vd8386


## Question 1 

### (a)
### What HTTP Method is used in the request?
GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE

### What is the response code and what does it mean?
HTTP response code indicates what is about to happen.
1. 200 means OK
2. 301 means Moved Permanently 
3. 302 means Found (Moved Temporarily)
4. 401 means Unauthorized
5. 403 means Forbidden
6. 404 means Not Found (the error code)
7. 410 means Gone
8. 500 means Internal Server Error
9. 503 means Service Unavailable 
    
### What version of HTTP is being used?
HTTP/1.1

### (b) List the request headers and their values here (copy and paste)
* Controls: Host, Cache-Control, Expect, …
* Content Negotiation: Accept, Accept-Charset, Accept-Encoding, Accept-Language
* Authentication Credentials: Authorization, Proxy-Authorization
* Request Context: From, Referer, User-Agent

### (c) List the response headers and their values here (copy and paste)
* Control Data: Age, Cache-Control, Expires, Date, Location,…
* Validator Fields: Etag, Last-Modified
* Authentication Challenges: WWW-Authenticate, Proxy-Authenticate
* Response Context: Accept-Ranges, Allow, Server

### (d) What server is BlackBoard based on?
openresty/1.9.3.1

### Are any cookies set? If so what are they.
Set-Cookie: AWSELB=D3570BC914533D9ACC5FBEA2A258730F699E691A0AC95F4514958C9FF4BF56EAF7767641A593B13DE042F3F65C024717188E5568556FFDF9A4315C07865F178080F8F4D11D;PATH=/;MAX-AGE=900
Set-Cookie: AWSELBCORS=D3570BC914533D9ACC5FBEA2A258730F699E691A0AC95F4514958C9FF4BF56EAF7767641A593B13DE042F3F65C024717188E5568556FFDF9A4315C07865F178080F8F4D11D;PATH=/;MAX-AGE=900;SECURE;SAMESITE=None

### (e) URLs 
### For the following URLs identify the protocol, domain, port, path, query and fragment portions (if any):

#### https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Comments
* protocol: "https:"
* domain: developer.mozilla.org
* port: 443
* path: "/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types"
* fragment portions: Comments


#### https://www.google.com/search?q=gaia+mission&rlz=1CYPO_enUS751
* protocol: "https:"
* domain: www.google.com
* port: 443
* path: "/search?q=gaia+mission&rlz=1CYPO_enUS751"
* query: ?q=gaia+mission&rlz=1CYPO_enUS751 

#### http://127.0.0.2:8282/static/index.html
* Error: connect ECONNREFUSED 127.0.0.2:8282 
* domain: 127.0.0.2
* port: 8282
* path: "static/index.html"


## Question 2 Simple Servers

### (a) Simple Date Server
![date](images/2a.JPG)

### (b) Simple Name/NetID Server
![netid](images/2b.JPG)

### (c) Combine services
![combine](images/2c.JPG)


## Question 3 JSON Server Get

### (a) Get Activities


### (b)Test via Requests



## Question 4 JSON Server Post

### (a) Add Activity 

### (b) Test with Requests


### (c) Security: Input Limits


### (d) Test Good and Bad in order


## Question 5. Delete Activity


### (a) Delete Activity

### (b) Test with Requests

